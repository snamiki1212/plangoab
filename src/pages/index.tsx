import React from 'react'
import { NextPage } from 'next'
import Link from 'next/link'
import Head from 'next/head'
import { Fullcalendar } from 'components/pages/Fullcalendar'
import dynamic from 'next/dynamic'

// const FullcalendarDynamicallyWithNoSSR = dynamic(
//   () => import('../components/pages/Fullcalendar'),
//   { ssr: false }
// )

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Link href="/about">
          <a>to about test</a>
        </Link>
        <a href="https://nextjs.org">Next.js!</a>
      </div>
      <div>
        {/* <FullcalendarDynamicallyWithNoSSR /> */}
        <Fullcalendar />
      </div>
    </div>
  )
}

export default Home
