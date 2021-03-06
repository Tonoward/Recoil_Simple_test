import Head from 'next/head'
import Image from 'next/image'
import Display from '/components/display'
import styles from '../styles/Home.module.css'
import Link from 'next/link'


export default function about() {
    return (
        <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          This is the about page from{' '}
          <code className={styles.code}>pages/about.js</code>
        </p>
       
        <Display/>
        <Link href="/">
          <a>Home</a>
        </Link>
        

      </main>
    </div>
    );
}