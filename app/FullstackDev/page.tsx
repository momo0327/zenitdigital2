import React from 'react'
import type { Metadata } from 'next'
import Header from '../components/FullstackDevPageComponents/Header'
import { FULLSTACK_DEV_METADATA } from '../constants/seo'

export const metadata: Metadata = FULLSTACK_DEV_METADATA

function page() {
  return (
    <div>
        <Header/>
    </div>
  )
}

export default page