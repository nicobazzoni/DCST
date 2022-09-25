import type { GetStaticProps } from 'next'
import Head from 'next/head'

import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import WorkExperience from '../components/WorkExperience'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import ContactMe from '../components/ContactMe'
import Link from 'next/link'
import { Experience, PageInfo, Project, Skill, Social } from '../typings'
import { fetchExperiences } from '../utils/fetchExperiences'
import { fetchSocials } from '../utils/fetchSocials'
import { fetchProjects } from '../utils/fetchProject'
import { fetchSkills } from '../utils/fetchSkills'
import { fetchPageInfo } from '../utils/fetchPageInfo'

type Props = { 
    pageInfo: PageInfo,
    skills: Skill[];
    projects: Project[];
    socials: Social[];
    experiences: Experience[];
    
}

const Home = ({ pageInfo, experiences, projects, skills,  socials }: Props) => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory 
    overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-gray-800" >
      <Head>
        <title>Portfolio</title>
       </Head>

      <Header socials={socials} />

     
      <section id="hero" className="snap-center">
        <Hero pageInfo={pageInfo} />

      </section>

      
       <section id='about' className='snap-start'>
         <About pageInfo={pageInfo}/>
       </section>

       
        <section id='experience' className='snap-start'>
          <WorkExperience experiences= {experiences}/>

        </section>

       

         <section id="skills" className="snap-start">
          <Skills skills = {skills} />

         </section>

         <section id="projects" className="snap-start">
          <Projects projects = {projects} />
         </section>

       <section id="contact" className="snap-start">
        <ContactMe />
        </section>

        <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div>
            <img 
            src="https://www.nicocode.com/static/media/nico.53613d44766f69913468.png" 
            alt="logo" 
            className="h-10 w-10 ml-2 rounded-full filter grayscale hover:grayscale-0 cursor-pointer" />
          </div>

        </footer>
        
        </Link>
    </div>
  )
}

export default Home


export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo = await fetchPageInfo()
  const socials = await fetchSocials()
  const skills = await fetchSkills()
 
  const projects = await fetchProjects()
  const experiences = await fetchExperiences()

  return {
    props: {
      pageInfo,
      socials,
      skills,
      projects,
      experiences,
    },
  }
}

