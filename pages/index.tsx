import type { GetStaticProps } from 'next'
import Head from 'next/head'
import About from '../components/About'
import ExperienceWork from '../components/Experience'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import { PageInfo, Experience, Skill, Project, Social, IcV } from '../typings'
import { fetchCv, fetchExperiences, fetchPageInfo, fetchProjects, fetchSkills, fetchSocials } from '../utils/fetcher-helper'
type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
  exportCv: IcV;
}

const Home = ({ 
  pageInfo,
  experiences,
  skills,
  projects,
  socials,
  exportCv 
} : Props) => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0'>
      <Head>
        <title>Bernard Portfolio</title>
      </Head>
      <Header socials={socials} exportCv={exportCv} />
      <section id="hero" className='snap-center'>
        <Hero pageInfo={pageInfo}/>
      </section>
      
      <section id="experience" className='snap-center'>
        <ExperienceWork experiences={experiences} />
      </section>
      <section id="skills" className='snap-center'>
        <Skills skills={skills} />
      </section>
      <section id="projects" className='snap-center'>
        <Projects projectLists={projects} />
      </section>
      <section id='about' className='snap-center'>
        <About pageInfo={pageInfo} />
      </section>
    
    </div>
  )
}

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
    const pageInfo: PageInfo = await fetchPageInfo();
    const experiences: Experience[] = await fetchExperiences();
    const skills: Skill[] = await fetchSkills();
    const projects: Project[] = await fetchProjects();
    const socials: Social[] = await fetchSocials();
    const exportCv: IcV =  await fetchCv()
    return {
      props: {
        pageInfo,
        experiences,
        skills,
        projects,
        socials,
        exportCv
      },
      revalidate: 10,
    }
}