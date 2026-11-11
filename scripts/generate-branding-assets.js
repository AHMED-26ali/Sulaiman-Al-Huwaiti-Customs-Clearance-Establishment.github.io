import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const publicDir = path.join(rootDir, 'public');
const brandingDir = path.join(publicDir, 'branding');
const distDir = path.join(rootDir, 'dist');

export async function generateBrandingAssets() {
  const sourceLogoPath = path.join(brandingDir, 'logo.png');
  if (!fs.existsSync(sourceLogoPath)) {
    throw new Error(`Source logo not found at: ${sourceLogoPath}`);
  }

  console.log('[Branding] Generating high-resolution favicons and social assets from:', sourceLogoPath);

  // 1. Crop unused margins only for favicons, preserving the source logo and every site image.
  const iconArtwork = await sharp(sourceLogoPath).trim({ threshold: 10 }).png().toBuffer();
  const makeIcon = async (size) => {
    const artworkSize = Math.max(1, Math.round(size * 0.86));
    const artwork = await sharp(iconArtwork)
      .resize(artworkSize, artworkSize, { fit: 'contain', background: '#0b1120' })
      .png()
      .toBuffer();
    return sharp({
      create: {
        width: size,
        height: size,
        channels: 4,
        background: '#0b1120'
      }
    }).composite([{ input: artwork, gravity: 'centre' }]).png().toBuffer();
  };

  for (const [size, file] of [
    [16, 'favicon-16x16.png'],
    [32, 'favicon-32x32.png'],
    [180, 'apple-touch-icon.png'],
    [192, 'android-chrome-192x192.png'],
    [512, 'android-chrome-512x512.png']
  ]) {
    fs.writeFileSync(path.join(publicDir, file), await makeIcon(size));
  }
  
  // Optimized WebP version of the master logo
  await sharp(sourceLogoPath).webp({ quality: 95 }).toFile(path.join(brandingDir, 'logo.webp'));

  // 2. Multi-resolution Windows ICO (16x16, 32x32, 48x48)
  const p16 = await makeIcon(16);
  const p32 = await makeIcon(32);
  const p48 = await makeIcon(48);

  const pngBuffers = [
    { width: 16, height: 16, buffer: p16 },
    { width: 32, height: 32, buffer: p32 },
    { width: 48, height: 48, buffer: p48 }
  ];

  const count = pngBuffers.length;
  let offset = 6 + count * 16;
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // Reserved
  header.writeUInt16LE(1, 2); // ICO type
  header.writeUInt16LE(count, 4); // Count

  const entries = [];
  for (const item of pngBuffers) {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(item.width, 0);
    entry.writeUInt8(item.height, 1);
    entry.writeUInt8(0, 2); // Color palette
    entry.writeUInt8(0, 3); // Reserved
    entry.writeUInt16LE(1, 4); // Color planes
    entry.writeUInt16LE(32, 6); // Bits per pixel
    entry.writeUInt32LE(item.buffer.length, 8); // Image size in bytes
    entry.writeUInt32LE(offset, 12); // Image file offset
    entries.push(entry);
    offset += item.buffer.length;
  }

  const icoBuffer = Buffer.concat([header, ...entries, ...pngBuffers.map(p => p.buffer)]);
  fs.writeFileSync(path.join(publicDir, 'favicon.ico'), icoBuffer);

  // 3. Web App Manifest
  const manifest = {
    name: "مؤسسة سليمان الحويطي للتخليص الجمركي والترانزيت",
    short_name: "سليمان الحويطي",
    description: "مؤسسة سليمان الحويطي للتخليص الجمركي والترانزيت في كافة موانئ ومنافذ المملكة العربية السعودية.",
    start_url: "/",
    display: "standalone",
    background_color: "#0b1120",
    theme_color: "#D8B980",
    dir: "rtl",
    lang: "ar",
    icons: [
      {
        src: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png"
      },
      {
        src: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png"
      },
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png"
      },
      {
        src: "/android-chrome-512x512.png",
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
  fs.writeFileSync(path.join(publicDir, 'site.webmanifest'), JSON.stringify(manifest, null, 2), 'utf8');

  // 4. Generate Open Graph / Twitter Preview Image (1200 x 630 pixels)
  const logoForOg = await sharp(sourceLogoPath)
    .resize(230, 230, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();

  const svgOgBase = Buffer.from(`
    <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#070c18" />
          <stop offset="50%" stop-color="#0f172a" />
          <stop offset="100%" stop-color="#041f17" />
        </linearGradient>
        <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#D8B980" stop-opacity="0.1" />
          <stop offset="50%" stop-color="#D8B980" stop-opacity="0.9" />
          <stop offset="100%" stop-color="#D8B980" stop-opacity="0.1" />
        </linearGradient>
      </defs>
      
      <!-- Deep Luxury Background -->
      <rect width="1200" height="630" fill="url(#bgGradient)" />

      <!-- Outer Luxury Double Border with Champagne Gold Accent -->
      <rect x="25" y="25" width="1150" height="580" rx="24" fill="none" stroke="#D8B980" stroke-opacity="0.38" stroke-width="1.5" />
      <rect x="33" y="33" width="1134" height="564" rx="18" fill="none" stroke="#D8B980" stroke-opacity="0.18" stroke-width="1" />

      <!-- Gold Accent Divider -->
      <rect x="360" y="335" width="480" height="2" fill="url(#goldGradient)" />

      <!-- Arabic Main Heading -->
      <text x="600" y="405" font-family="'Noto Sans Arabic', 'Tajawal', system-ui, sans-serif" font-size="40" font-weight="800" fill="#FFFFFF" text-anchor="middle" direction="rtl">
        مؤسسة سليمان الحويطي للتخليص الجمركي والترانزيت
      </text>

      <!-- Subtitle -->
      <text x="600" y="460" font-family="'Noto Sans Arabic', 'Tajawal', system-ui, sans-serif" font-size="22" font-weight="500" fill="#D8B980" text-anchor="middle" direction="rtl">
        خدمات التخليص الجمركي الشامل والترانزيت في كافة موانئ ومنافذ السعودية
      </text>

      <!-- Badges -->
      <g transform="translate(310, 505)">
        <!-- Badge 1: 15+ Years Experience -->
        <rect x="0" y="0" width="270" height="42" rx="21" fill="rgba(216, 185, 128, 0.12)" stroke="#D8B980" stroke-opacity="0.45" stroke-width="1" />
        <text x="135" y="27" font-family="'Noto Sans Arabic', system-ui, sans-serif" font-size="15" font-weight="700" fill="#F3F4F6" text-anchor="middle">
          ★ خبرة معتمدة لأكثر من 15 عاماً
        </text>

        <!-- Badge 2: ZATCA License -->
        <rect x="310" y="0" width="270" height="42" rx="21" fill="rgba(16, 185, 129, 0.12)" stroke="#10B981" stroke-opacity="0.45" stroke-width="1" />
        <text x="445" y="27" font-family="'Noto Sans Arabic', system-ui, sans-serif" font-size="15" font-weight="700" fill="#34D399" text-anchor="middle">
          ✓ مرخصة ومعتمدة رسمياً من ZATCA
        </text>
      </g>
    </svg>
  `);

  await sharp(svgOgBase)
    .composite([
      {
        input: logoForOg,
        top: 60,
        left: 485
      }
    ])
    .png({ quality: 95 })
    .toFile(path.join(brandingDir, 'og-image.png'));

  // Also copy to dist if dist exists
  if (fs.existsSync(distDir)) {
    const distBranding = path.join(distDir, 'branding');
    if (!fs.existsSync(distBranding)) {
      fs.mkdirSync(distBranding, { recursive: true });
    }
    fs.copyFileSync(path.join(brandingDir, 'logo.png'), path.join(distBranding, 'logo.png'));
    fs.copyFileSync(path.join(brandingDir, 'logo.webp'), path.join(distBranding, 'logo.webp'));
    fs.copyFileSync(path.join(brandingDir, 'og-image.png'), path.join(distBranding, 'og-image.png'));

    const rootFiles = [
      'favicon.ico',
      'favicon-16x16.png',
      'favicon-32x32.png',
      'apple-touch-icon.png',
      'android-chrome-192x192.png',
      'android-chrome-512x512.png',
      'site.webmanifest'
    ];
    for (const f of rootFiles) {
      const src = path.join(publicDir, f);
      if (fs.existsSync(src)) {
        fs.copyFileSync(src, path.join(distDir, f));
      }
    }
  }

  console.log('[Branding] All favicons, web manifest, and og-image.png generated successfully.');
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  generateBrandingAssets().catch((err) => {
    console.error('[Branding] Generation error:', err);
    process.exit(1);
  });
}
