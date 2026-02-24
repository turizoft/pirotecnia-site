const fs = require('fs');

const newFunc = `function getMediaUrl(media: any) {
  if (!media) return null;
  let url = null;
  if (typeof media === 'string') {
    url = media;
  } else if ('url' in media && media.url) {
    url = media.url as string;
  } else if ('filename' in media && media.filename) {
    url = \`/api/media/file/\${media.filename}\`;
  }
  
  if (url && url.startsWith('http')) {
    try {
      const parsed = new URL(url);
      if (parsed.hostname === 'localhost' || parsed.hostname.includes('pirotecnia')) {
        return parsed.pathname;
      }
    } catch (e) {}
  }
  return url;
}`;

const files = [
    'src/app/(frontend)/locations/[slug]/page.tsx',
    'src/app/(frontend)/page.tsx',
    'src/app/(frontend)/products/[slug]/page.tsx',
    'src/app/(frontend)/products/page.tsx'
];

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    content = content.replace(/function getMediaUrl\(media: any\) \{[\s\S]*?return null;\n\}/g, newFunc);
    fs.writeFileSync(file, content);
    console.log('Fixed', file);
});
