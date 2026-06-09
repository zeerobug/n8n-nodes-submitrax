const fs = require('fs');
const path = require('path');

const distPkg = path.join(__dirname, '..', 'dist', 'package.json');
const pkg = JSON.parse(fs.readFileSync(distPkg, 'utf8'));

pkg.n8n.nodes = pkg.n8n.nodes.map((p) => p.replace(/^dist\//, ''));
pkg.n8n.credentials = pkg.n8n.credentials.map((p) => p.replace(/^dist\//, ''));

fs.writeFileSync(distPkg, JSON.stringify(pkg, null, 4) + '\n');
