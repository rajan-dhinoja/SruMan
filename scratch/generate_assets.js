const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const UPLOADED_IMAGE = 'C:/Users/rajan/.gemini/antigravity/brain/202b7173-f7d3-4cd5-bac2-ff90d24b9454/.user_uploaded/media_1795497366064_1600c94a.png';

function createIco(pngBuffersWithSizes) {
  const count = pngBuffersWithSizes.length;
  const headerSize = 6;
  const dirEntrySize = 16;
  let offset = headerSize + dirEntrySize * count;

  const header = Buffer.alloc(headerSize);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2); // 1 = ICO
  header.writeUInt16LE(count, 4);

  const entries = [];
  const imageBuffers = [];

  for (const item of pngBuffersWithSizes) {
    const entry = Buffer.alloc(dirEntrySize);
    entry.writeUInt8(item.size >= 256 ? 0 : item.size, 0); // width
    entry.writeUInt8(item.size >= 256 ? 0 : item.size, 1); // height
    entry.writeUInt8(0, 2); // palette
    entry.writeUInt8(0, 3); // reserved
    entry.writeUInt16LE(1, 4); // color planes
    entry.writeUInt16LE(32, 6); // bpp
    entry.writeUInt32LE(item.buffer.length, 8); // size
    entry.writeUInt32LE(offset, 12); // offset

    offset += item.buffer.length;
    entries.push(entry);
    imageBuffers.push(item.buffer);
  }

  return Buffer.concat([header, ...entries, ...imageBuffers]);
}

async function main() {
  console.log('--- Step 1: Copying clean source image to public/logos/sruman-logo.png ---');
  fs.copyFileSync(UPLOADED_IMAGE, path.resolve('public/logos/sruman-logo.png'));
  console.log('Updated public/logos/sruman-logo.png');

  console.log('--- Step 2: Generating solid WHITE background base icons ---');
  // Trim empty transparent border
  const trimmed = await sharp(UPLOADED_IMAGE).trim().toBuffer({ resolveWithObject: true });
  console.log(`Trimmed dimensions: ${trimmed.info.width}x${trimmed.info.height}`);

  // Create square 512x512 with crisp solid WHITE background
  const targetEmblemSize = 450;
  const resizedTrimmed = await sharp(trimmed.data)
    .resize(targetEmblemSize, targetEmblemSize, {
      fit: 'contain',
      background: { r: 255, g: 255, b: 255, alpha: 0 }
    })
    .toBuffer();

  const square512White = await sharp({
    create: {
      width: 512,
      height: 512,
      channels: 4,
      background: { r: 255, g: 255, b: 255, alpha: 1 } // Solid white background
    }
  })
    .composite([{ input: resizedTrimmed, gravity: 'center' }])
    .png()
    .toBuffer();

  // Save 512x512 icons
  fs.writeFileSync(path.resolve('src/app/icon.png'), square512White);
  fs.writeFileSync(path.resolve('public/icon-512.png'), square512White);
  console.log('Created src/app/icon.png and public/icon-512.png (white background)');

  // Save 192x192 icon
  const icon192White = await sharp(square512White).resize(192, 192).png().toBuffer();
  fs.writeFileSync(path.resolve('public/icon-192.png'), icon192White);
  console.log('Created public/icon-192.png (white background)');

  // Save 180x180 apple icon (Apple requires non-transparent white background)
  const icon180White = await sharp(square512White).resize(180, 180).png().toBuffer();
  fs.writeFileSync(path.resolve('src/app/apple-icon.png'), icon180White);
  fs.writeFileSync(path.resolve('public/apple-touch-icon.png'), icon180White);
  console.log('Created src/app/apple-icon.png and public/apple-touch-icon.png (white background)');

  // Save 32x32 and 16x16 PNGs
  const icon48White = await sharp(square512White).resize(48, 48).png().toBuffer();
  const icon32White = await sharp(square512White).resize(32, 32).png().toBuffer();
  const icon16White = await sharp(square512White).resize(16, 16).png().toBuffer();
  fs.writeFileSync(path.resolve('public/favicon-32x32.png'), icon32White);
  fs.writeFileSync(path.resolve('public/favicon-16x16.png'), icon16White);
  console.log('Created public/favicon-32x32.png and public/favicon-16x16.png (white background)');

  // Generate multi-resolution ICO file with white background
  const icoBuffer = createIco([
    { size: 16, buffer: icon16White },
    { size: 32, buffer: icon32White },
    { size: 48, buffer: icon48White }
  ]);
  fs.writeFileSync(path.resolve('src/app/favicon.ico'), icoBuffer);
  fs.writeFileSync(path.resolve('public/favicon.ico'), icoBuffer);
  console.log('Created src/app/favicon.ico and public/favicon.ico (white background)');

  console.log('--- Step 3: Generating Open Graph & Twitter Link Preview with WHITE background (1200x630) ---');
  // High-res emblem for 1200x630 preview card
  const ogEmblemBuf = await sharp(trimmed.data)
    .resize(360, 360, {
      fit: 'contain',
      background: { r: 255, g: 255, b: 255, alpha: 0 }
    })
    .png()
    .toBuffer();
  const ogEmblemBase64 = 'data:image/png;base64,' + ogEmblemBuf.toString('base64');

  const ogSvg = `
  <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <!-- Subtle luxury pearl-white radial background -->
      <radialGradient id="whiteBgGrad" cx="50%" cy="45%" r="70%">
        <stop offset="0%" stop-color="#ffffff" />
        <stop offset="65%" stop-color="#fdfbf7" />
        <stop offset="100%" stop-color="#f7f2e8" />
      </radialGradient>
      <!-- Soft Warm Golden Halo behind Monogram -->
      <radialGradient id="goldAura" cx="50%" cy="42%" r="35%">
        <stop offset="0%" stop-color="#d4af37" stop-opacity="0.22" />
        <stop offset="50%" stop-color="#e6ca65" stop-opacity="0.07" />
        <stop offset="100%" stop-color="#d4af37" stop-opacity="0" />
      </radialGradient>
      <!-- Royal Gold Gradient for Border -->
      <linearGradient id="goldBorder" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#c59b27" />
        <stop offset="50%" stop-color="#e8ca6b" />
        <stop offset="100%" stop-color="#c59b27" />
      </linearGradient>
    </defs>
    
    <!-- Pristine White / Luxury Cream Background -->
    <rect width="1200" height="630" fill="url(#whiteBgGrad)" />
    
    <!-- Ambient Warm Golden Halo -->
    <circle cx="600" cy="245" r="230" fill="url(#goldAura)" />
    
    <!-- Ornate Royal Gold Borders -->
    <rect x="24" y="24" width="1152" height="582" rx="12" fill="none" stroke="url(#goldBorder)" stroke-width="2" />
    <rect x="34" y="34" width="1132" height="562" rx="8" fill="none" stroke="#c59b27" stroke-width="1" stroke-opacity="0.55" stroke-dasharray="8 6" />
    
    <!-- Corner Diamond Star Accents -->
    <g fill="#b88a28" font-family="Georgia, serif" font-size="20">
      <text x="46" y="58">✦</text>
      <text x="1144" y="58" text-anchor="end">✦</text>
      <text x="46" y="586">✦</text>
      <text x="1144" y="586" text-anchor="end">✦</text>
    </g>
    
    <!-- Top Header -->
    <text x="600" y="72" font-family="Georgia, serif" font-size="16" font-weight="bold" letter-spacing="6" fill="#a67c1e" text-anchor="middle">
      ✦   S R U S H T I   &amp;   A M A N   ✦
    </text>
    
    <!-- Centered High-Res Monogram on White -->
    <image href="${ogEmblemBase64}" x="420" y="76" width="360" height="360" />
    
    <!-- Main Title in Royal Deep Purple (matching logo butterfly & letters) -->
    <text x="600" y="475" font-family="Georgia, serif" font-size="44" font-weight="bold" fill="#300d3b" text-anchor="middle" letter-spacing="2">
      SruMan | Ring Ceremony
    </text>
    
    <!-- Subtitle (Gujarati & English) in Elegant Rich Plum -->
    <text x="600" y="515" font-family="'Segoe UI', Helvetica, Arial, sans-serif" font-size="18" font-weight="600" fill="#5c2668" text-anchor="middle" letter-spacing="0.5">
      સગાઈ વિધિ &amp; શુભ લગ્ન ડિજિટલ કંકોતરી • Royal Digital Invitation &amp; RSVP
    </text>
    
    <!-- Bottom Badge with Clean White Fill & Gold Border -->
    <g transform="translate(410, 542)">
      <rect width="380" height="34" rx="17" fill="#ffffff" stroke="#c59b27" stroke-width="1.3" />
      <text x="190" y="22" font-family="'Segoe UI', Helvetica, Arial, sans-serif" font-size="12" font-weight="bold" fill="#9e731b" text-anchor="middle" letter-spacing="2">
        EVENT TIMELINE • VENUE MAP • WISHES
      </text>
    </g>
  </svg>
  `;

  const ogPng = await sharp(Buffer.from(ogSvg)).png().toBuffer();
  fs.writeFileSync(path.resolve('src/app/opengraph-image.png'), ogPng);
  fs.writeFileSync(path.resolve('src/app/twitter-image.png'), ogPng);
  fs.writeFileSync(path.resolve('public/og-image.png'), ogPng);

  const ogJpg = await sharp(Buffer.from(ogSvg)).jpeg({ quality: 94 }).toBuffer();
  fs.writeFileSync(path.resolve('public/og-image.jpg'), ogJpg);
  console.log(`Created White Background Open Graph & Twitter preview images! PNG: ${ogPng.length} bytes, JPG: ${ogJpg.length} bytes`);

  console.log('--- Step 4: Generating webmanifest with white theme ---');
  const manifest = {
    name: "SruMan - Srushti & Aman",
    short_name: "SruMan",
    description: "Srushti & Aman Ring Ceremony and Wedding Digital Invitation",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#ffffff",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png"
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png"
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png"
      }
    ]
  };
  fs.writeFileSync(path.resolve('public/site.webmanifest'), JSON.stringify(manifest, null, 2));
  console.log('Created public/site.webmanifest with white background');

  console.log('White background asset generation complete!');
}

main().catch(err => {
  console.error('Error during white background asset generation:', err);
  process.exit(1);
});
