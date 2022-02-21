import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome</h1>
      <p className={styles.text}>Lorem </p>
      <Link href="/websites">
        <a className={styles.btn}>See websites</a>
        </Link>
    </div>
  )
}
