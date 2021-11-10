/** @jsxImportSource theme-ui */

import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Heading from '../components/Heading'

export default function Home() {
  return (
    <div className={styles.container} sx={{ backgroundColor: "bgs" }}>
      <Head>
        <title>Web Themes</title>
        <meta name="description" content="Web Themes: a website dictionary" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.hero} sx={{ backgroundColor: "bg" }}>
        <div sx={{ background: "gradientTheme" }} className={styles.bg_box} style={{zIndex: 2}}></div>
        <div sx={{ background: "gradientTheme" }} className={styles.bg_box} style={{ opacity: 0.3, transform: 'translateY(400px) translateX(200px) rotate(60deg)'}}></div>
        <p className={styles.cred}>Site by <a href="https://anshc.co">@anshc</a></p>
        <Heading styles={styles.heading} fontSize='85px'>
          Welcome to <br/> Web Themes.
        </Heading>
        <p className={styles.desc}>Making website designing a whole lot easier. Find a website you like, read about it, understand the design, and start designing with an inspiration in mind.</p>
      </div>
    </div>
  )
}
