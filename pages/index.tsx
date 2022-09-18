import type { NextPage } from 'next'
import Head from 'next/head'

import Header from '../components/Header'
import Hero from '../components/Hero'

const Home: NextPage = () => {
  return (
    <div >
      <Head>
        <title>Portfolio</title>
       </Head>

   

   
      <Header />

      {/* Hero */}
      <section id="hero">
        <Hero />

      </section>

       {/* about */}

        {/* experience */}

         {/* projects */}

          {/* contact*/}
    </div>
  )
}

export default Home
