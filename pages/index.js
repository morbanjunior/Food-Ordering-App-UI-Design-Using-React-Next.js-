import Head from 'next/head'
import Image from 'next/image'
import Featured from '../componets/Featured'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div className={styles.container}>
  
      <Head>
        <title>Chloe Pizza</title>
        <meta name="description" content="Generated by Ramon Ant. Morban" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Featured/>
    </div>
  )
}
