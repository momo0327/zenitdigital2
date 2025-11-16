import type { Metadata } from 'next'
import { CONTACT_METADATA } from '../constants/seo'

export const metadata: Metadata = CONTACT_METADATA

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
