import { ImageResponse } from 'next/og'
import fs from 'node:fs/promises'
import path from 'node:path'

export const alt = 'Zenia Digital — Strategic digital studio building websites, apps, and digital products'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function OpengraphImage() {
  const logoBuffer = await fs.readFile(
    path.join(process.cwd(), 'public', 'zenialogo.png')
  )
  const logoSrc = `data:image/png;base64,${logoBuffer.toString('base64')}`

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#F5F5F5',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '64px',
          fontFamily: 'system-ui, -apple-system, sans-serif',
        }}
      >
        {/* Top row — logo + wordmark */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={logoSrc}
            width={64}
            height={64}
            alt="Zenia"
            style={{ objectFit: 'contain' }}
          />
          <span
            style={{
              fontSize: '36px',
              fontWeight: 600,
              color: '#000',
              letterSpacing: '-0.02em',
            }}
          >
            ZENIA
          </span>
        </div>

        {/* Headline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <h1
            style={{
              fontSize: '88px',
              fontWeight: 700,
              color: '#000',
              lineHeight: 1.0,
              letterSpacing: '-0.03em',
              margin: 0,
              maxWidth: '900px',
            }}
          >
            Strategic digital studio.
          </h1>
          <p
            style={{
              fontSize: '36px',
              fontWeight: 400,
              color: '#525252',
              lineHeight: 1.3,
              margin: 0,
              maxWidth: '900px',
            }}
          >
            We build bespoke websites, apps, and digital products that ship, scale, and earn their place in your business.
          </p>
        </div>

        {/* Bottom row — location + URL */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: '24px',
            color: '#737373',
            fontWeight: 500,
          }}
        >
          <span>Göteborg, Sweden</span>
          <span style={{ color: '#000', fontWeight: 600 }}>zeniadigital.se</span>
        </div>
      </div>
    ),
    { ...size }
  )
}
