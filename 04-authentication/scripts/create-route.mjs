import fs from 'fs';
import path from 'path';

// 0: Node, 1: Script, 2: args (anything written in CLI after script)
const routeName = process.argv[2]?.toLowerCase();
if (!routeName) {
  console.error('❌ Route name required');
  process.exit(1);
}
// stop at ':' => capture 'A-z, 0-9, _-' => $1 interpolates with '[]'
const slugified = routeName.replace(/:([\w-]+)/g, '[$1]');
const dir = path.join('app', slugified);
if (fs.existsSync(dir)) {
  console.error(`❌ ${routeName} already exists`);
  process.exit(1);
}

let [async, params, getSlug, slugId] = ['', '', '', ''];
if (dir.endsWith(']')) {
  const slug = dir.split('/').pop().slice(1, -1);
    async = 'async '; // exact spacing for correct print
   params = `{\n  params,\n}: {\n  params: Promise<{ ${slug}: string }>;\n}`;
  getSlug = `\n  const { ${slug} } = await params;`;
   slugId = `\n      <p>ID: {${slug}}</p>`;
}

function pascalCase(str) {
  return str
    .split(/[-/@:]/) // Split on -/@:
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalise
    .join('');
}

function kebabCase(str) { // replace [special chars] then collapse multiple --
  return str.replace(/[_/@:]/g, '-').replace(/--+/g, '-');
}

const  pagePath = path.join(dir, 'page.tsx');
const   cssPath = path.join(dir, 'page.module.css');
const className = kebabCase(routeName);
const component = pascalCase(routeName);
fs.mkdirSync(dir, { recursive: true });

fs.writeFileSync(cssPath, `.${className}-page {
  max-width: 80rem;
  margin: 1rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}
`);

fs.writeFileSync(pagePath, `import styles from './page.module.css';

export default ${async}function ${component}Page(${params}) {${getSlug}
  return (
    <div className={styles['${className}-page']}>
      <h1>${component} Page</h1>${slugId}
    </div>
  );
}
`);

console.log(`✅ Created ${pagePath}`);
console.log(`✅ Created ${cssPath}`);
