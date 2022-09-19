import type { NextPage } from 'next'
import Head from 'next/head'

import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import WorkExperience from '../components/WorkExperience'
import Skills from '../components/Skills'

const Home: NextPage = () => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory 
    overflow-scroll z-0" >
      <Head>
        <title>Portfolio</title>
       </Head>

   

   
      <Header />

     
      <section id="hero" className="snap-center">
        <Hero />

      </section>

      
       <section id='about' className='snap-start'>
         <About/>
       </section>

        {/* experience */}
        <section id='experience' className='snap-start'>
          <WorkExperience/>

        </section>

         {/* skills*/}

         <section id="skills" className="snap-start">
          <Skills />

         </section>

          {/* contact*/}
    </div>
  )
}

export default Home
