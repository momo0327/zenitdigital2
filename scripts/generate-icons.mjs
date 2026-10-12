/**
 * Generates the site's static favicon / icon assets from public/zenialogo.png.
 *
 * Run with: node scripts/generate-icons.mjs
 *
 * Produces static files (no runtime image generation) so they are served by the
 * CDN and never 500 on the OpenNext/Cloudflare deployment:
 *   app/favicon.ico        - multi-size ICO (16/32/48) with embedded PNGs
 *   app/icon.png           - 512x512 head icon for modern browsers
 *   app/apple-icon.png     - 180x180 apple-touch-icon
 *   public/icons/icon-192.png, icon-512.png - PWA / manifest icons
 *
 * Design mirrors the previous dynamic generators: logo centered on a #FFFFFF
 * square with ~12.5% padding, aspect ratio preserved.
 */
import sharp from 'sharp'
import fs from 'node:fs/promises'
import path from 'node:path'

const root = process.cwd()
const SRC = path.join(root, 'public', 'zenialogo.png')
const WHITE = { r: 255, g: 255, b: 255, alpha: 1 }

/** Render a square `size` PNG: white bg, logo centered, contained with padding. */
async function renderSquare(size, paddingRatio = 0.125) {
  const padding = Math.round(size * paddingRatio)
  const content = size - padding * 2

  const logo = await sharp(SRC)
    .resize(content, content, {
      fit: 'inside',
      withoutEnlargement: false,
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png()
    .toBuffer()

  return sharp({
    create: { width: size, height: size, channels: 4, background: WHITE },
  })
    .composite([{ input: logo, gravity: 'center' }])
    .png()
    .toBuffer()
}

/** Build a valid .ico containing PNG-encoded images for each size. */
function buildIco(images) {
  const count = images.length
  const header = Buffer.alloc(6)
  header.writeUInt16LE(0, 0) // reserved
  header.writeUInt16LE(1, 2) // type: icon
  header.writeUInt16LE(count, 4)

  const entries = Buffer.alloc(16 * count)
  let offset = 6 + 16 * count
  images.forEach((img, i) => {
    const e = i * 16
    entries.writeUInt8(img.size >= 256 ? 0 : img.size, e + 0) // width
    entries.writeUInt8(img.size >= 256 ? 0 : img.size, e + 1) // height
    entries.writeUInt8(0, e + 2) // palette
    entries.writeUInt8(0, e + 3) // reserved
    entries.writeUInt16LE(1, e + 4) // color planes
    entries.writeUInt16LE(32, e + 6) // bits per pixel
    entries.writeUInt32LE(img.data.length, e + 8) // bytes in resource
    entries.writeUInt32LE(offset, e + 12) // image offset
    offset += img.data.length
  })

  return Buffer.concat([header, entries, ...images.map((i) => i.data)])
}

async function main() {
  await fs.mkdir(path.join(root, 'public', 'icons'), { recursive: true })

  // Head + PWA PNGs
  await fs.writeFile(path.join(root, 'app', 'icon.png'), await renderSquare(512))
  await fs.writeFile(
    path.join(root, 'app', 'apple-icon.png'),
    await renderSquare(180)
  )
  await fs.writeFile(
    path.join(root, 'public', 'icons', 'icon-192.png'),
    await renderSquare(192)
  )
  await fs.writeFile(
    path.join(root, 'public', 'icons', 'icon-512.png'),
    await renderSquare(512)
  )

  // favicon.ico (16/32/48) — slightly tighter padding at tiny sizes
  const ico = buildIco([
    { size: 16, data: await renderSquare(16, 0.09) },
    { size: 32, data: await renderSquare(32, 0.09) },
    { size: 48, data: await renderSquare(48, 0.1) },
  ])
  await fs.writeFile(path.join(root, 'app', 'favicon.ico'), ico)

  console.log('Generated: app/favicon.ico, app/icon.png, app/apple-icon.png,')
  console.log('           public/icons/icon-192.png, public/icons/icon-512.png')
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
