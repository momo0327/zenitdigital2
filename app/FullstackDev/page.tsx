import React from 'react'
import type { Metadata } from 'next'
import Header from '../components/FullstackDevPageComponents/Header'
import Navbar from '../components/navbar'
import { FULLSTACK_DEV_METADATA } from '../constants/seo'

export const metadata: Metadata = FULLSTACK_DEV_METADATA

function page() {
  return (
    <div>
        <Navbar/>
        <Header/>
    </div>
  )
}

export default page