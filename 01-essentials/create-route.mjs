import fs from 'fs';
import path from 'path';

function pascalCase(str) {
  return str
    .split(/[-/]/) // Split on '-' or '/'
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // capitalise
    .join('');
}

function kebabCase(str) {
  return str.replace(/[_/]/g, '-'); // replace all _ / with -
}

// 0: Node, 1: Script, 2: args (anything written in CLI after script)
const routeName = process.argv[2]?.toLowerCase();
if (!routeName) {
  console.error('❌ Route name required');
  process.exit(1);
}

// path/slug becomes path/[slug] automatically when dir name ends with 'slug'
const      dir = path.join('app', routeName).replace(/slug$/, '[slug]');
const pagePath = path.join(dir, 'page.tsx');
const  cssPath = path.join(dir, 'page.module.css');

if (fs.existsSync(dir)) {
  console.error('❌ Route already exists');
  process.exit(1);
}

const className = kebabCase(routeName);
const component = pascalCase(routeName);
fs.mkdirSync(dir, { recursive: true });
fs.writeFileSync(cssPath, `.${className} {\n  padding: 1rem;\n}\n`);
fs.writeFileSync(pagePath, `import styles from './page.module.css';

export default function ${component}() {
  return (
    <div className={styles['${className}']}>
      <h1>${component} page</h1>
    </div>
  );
}
`);

console.log(`✅ Created /app/${dir}/page.tsx`);
console.log(`✅ Created /app/${dir}/page.module.css`);
