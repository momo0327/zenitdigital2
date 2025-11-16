import React from 'react'
import type { Metadata } from 'next'
import Header from '../components/WebDevPageComponents/Header'
import { WEB_DEV_METADATA } from '../constants/seo'

export const metadata: Metadata = WEB_DEV_METADATA

function page() {
  return (
    <div>
        <Header/>
    </div>
  )
}

export default page