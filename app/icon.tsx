import { ImageResponse } from 'next/og'
import fs from 'node:fs/promises'
import path from 'node:path'

export const contentType = 'image/png'

export function generateImageMetadata() {
  return [
    { id: 'small', contentType: 'image/png', size: { width: 32, height: 32 } },
    { id: 'medium', contentType: 'image/png', size: { width: 192, height: 192 } },
    { id: 'large', contentType: 'image/png', size: { width: 512, height: 512 } },
  ]
}

const sizeMap = {
  small: 32,
  medium: 192,
  large: 512,
} as const

const paddingMap = {
  small: 3,
  medium: 24,
  large: 64,
} as const

export default async function Icon({ id }: { id: string }) {
  const size = sizeMap[id as keyof typeof sizeMap]
  const padding = paddingMap[id as keyof typeof paddingMap]

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
          background: '#FFFFFF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: `${padding}px`,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={logoSrc}
          width={size - padding * 2}
          height={size - padding * 2}
          alt="Zenia"
          style={{ objectFit: 'contain' }}
        />
      </div>
    ),
    { width: size, height: size }
  )
}
