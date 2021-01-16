import React from 'react'
import { NextPage } from 'next'
import Link from 'next/link'
import Head from 'next/head'

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import '@fullcalendar/common/main.css'
import '@fullcalendar/daygrid/main.css'

class DemoApp extends React.Component {
  render() {
    return <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" />
  }
}

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
      <DemoApp />
    </div>
  )
}

export default Home
