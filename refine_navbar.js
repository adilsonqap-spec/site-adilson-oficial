const fs = require('fs');
const path = require('path');

const files = [
  'index.html',
  'sobre-nos.html',
  'contato.html',
  'faq.html',
  'criacao-de-sites.html',
  'google-meu-negocio.html',
  'landing-page.html'
];

const cssTarget = /\.glass-pill\s*\{[^}]+\}/g;
const cssReplacement = `.glass-pill {
        background: rgba(255, 255, 255, 0.72) !important;
        backdrop-filter: blur(12px) !important;
        -webkit-backdrop-filter: blur(12px) !important;
        border: 1px solid rgba(255, 255, 255, 0.4) !important;
        border-radius: 9999px !important;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.06) !important;
    }`;

files.forEach(file => {
  const filePath = path.join(process.cwd(), file);
  if (!fs.existsSync(filePath)) return;

  let content = fs.readFileSync(filePath, 'utf8');

  // 1. Refine CSS
  content = content.replace(cssTarget, cssReplacement);

  // 2. Refine Desktop Nav height and Logo size
  content = content.replace(/h-20 justify-between/g, 'h-16 justify-between');
  content = content.replace(/h-20 w-auto transition-transform/g, 'h-14 w-auto transition-transform');

  // 3. Refine Mobile Nav height
  content = content.replace(/gap-4 h-16/g, 'gap-4 h-14');

  // 4. Adjust Hero pt- (padding top)
  // pt-44 -> pt-52, pt-52 -> pt-64, pt-64 -> pt-72
  content = content.replace(/pt-44/g, 'pt-52');
  content = content.replace(/pt-52/g, 'pt-64');
  content = content.replace(/pt-64/g, 'pt-72');

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated ${file}`);
});
