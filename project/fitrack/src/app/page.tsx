"use client"
import Image from 'next/image'
import styles from './page.module.css'
import Home1 from '@/components/Home1/Home1'
import Home2 from '@/components/Home2/Home2'

export default function Home() {
  return (
    <main className={styles.main}>
      <Home1/>
      <Home2/>
    </main>
  )
}
