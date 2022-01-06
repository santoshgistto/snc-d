import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  //let { title, cats } = attributes;

  return (
    <>
      <Head>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Head>
     <h1>Hello</h1>
    </>
  )

}
