import Head from 'next/head'
import { useEffect } from 'react';
import styles from '../styles/Home.module.css'

export default function Home() {
  //let { title, cats } = attributes;
  useEffect(()=>{
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on("init", user => {
        if (!user) {
          window.netlifyIdentity.on("login", () => {
            document.location.href = "/admin/";
          });
        }
      });
    }
  },[])

  return (
    <>
      <Head>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Head>
     <h1>Hello</h1>
    </>
  )

}
