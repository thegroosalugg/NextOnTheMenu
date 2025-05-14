import fs from 'fs';
import path from 'path';

// 0: Node, 1: Script, 2: args (anything written in CLI after script)
const fcName = process.argv[2]?.toLowerCase();
if (!fcName) {
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

const className = kebabCase(fcName);
const component = pascalCase(fcName);
const    fcPath = path.join('components', component + '.tsx');
const   cssPath = path.join('components', component + '.module.css');

if (fs.existsSync(fcPath)) {
  console.error(`❌ ${fcPath} already exists`);
  process.exit(1);
}

fs.writeFileSync(cssPath, `.${className} {\n  padding: 1rem;\n}  \n`);
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
