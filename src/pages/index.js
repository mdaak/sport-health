import Head from 'next/head'
import Image from 'next/image'
// import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '@/components/Navbar'
import { Poppins } from '@next/font/google'
import HealthyInSide from '@/components/HealthyInSide'
import StaticBar from '@/components/StaticBar'
import BestFullBody from '@/components/BestFullBody'

// const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({
   subsets: ['latin'],
   weight:'400',
   })


export default function Home() {
  return (
    <>
      <Head>
        <title>Sport-Health</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={poppins.className}>
        <Navbar/>
        <HealthyInSide/>
        <StaticBar/>
        <BestFullBody/>
      </main>
    </>
  )
}
