import React from 'react'
import type { Metadata } from 'next'
import Header from '../components/MobiledevPageComponents/Header'
import Navbar from '../components/navbar'
import { MOBILE_DEV_METADATA } from '../constants/seo'

export const metadata: Metadata = MOBILE_DEV_METADATA

function page() {
  return (
    <div>
        <Navbar/>
        <Header/>
    </div>
  )
}

export default page