import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <h1>Welcome</h1>
      <p>Lorem </p>
      <Link href="/websites">See websites</Link>
    </div>
  )
}
