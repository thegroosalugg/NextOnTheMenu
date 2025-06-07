import fs from 'fs';
import path from 'path';

// 0: Node, 1: Script, 2++: args (anything written in CLI after script, separated by ' ')
const arg1 = process.argv[2]?.toLowerCase();
const arg2 = process.argv[3]?.toLowerCase();

// fcName should be separated with - or / for PascalCasing: my-component => MyComponent
// fcDir should be path/nested/foders/optional
let fcDir, fcName = null;
if (arg1 && arg2) {
  fcDir  = arg1;
  fcName = arg2;
} else if (arg1 && !arg2) {
  fcName = arg1;
} else {
  console.error('❌ Component name required');
  process.exit(1);
}

function pascalCase(str) {
  return str
    .split(/[-/]/) // Split on '-' or '/'
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // capitalise
    .join('');
}

function kebabCase(str) {
  return str.replace(/[_/]/g, '-'); // replace all _ / with -
}

let finalDir = 'components';
if (fcDir) {
  finalDir = path.join(finalDir, fcDir);
  fs.mkdirSync(finalDir, { recursive: true });
}

const className = kebabCase(fcName);
const component = pascalCase(fcName);
const    fcPath = path.join(finalDir, component + '.tsx');
const   cssPath = path.join(finalDir, component + '.module.css');

if (fs.existsSync(fcPath)) {
  console.error(`❌ ${fcPath} already exists`);
  process.exit(1);
}

fs.writeFileSync(cssPath, `.${className} {
  display: flex;
  flex-direction: column;
  align-items: center;
}
`);

fs.writeFileSync(fcPath, `import styles from './${component}.module.css';

export default function ${component}() {
  return (
    <div className={styles['${className}']}>
      <h1>${component} created</h1>
    </div>
  );
}
`);

console.log(`✅ Created ${fcPath}`);
console.log(`✅ Created ${cssPath}`);
