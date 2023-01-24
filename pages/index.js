import Head from 'next/head'
import { allPosts } from 'contentlayer/generated'
import Projects from "../components/Projects"
import Image from 'next/image';
import { useColorSeed } from '@/components/useColorSeed';
import Layout from '@/components/Layout';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Words from '@/components/Words';
import Contact from '@/components/Contact';




export default function Home({posts}) {
  const seed=useColorSeed()
  return (
   <Layout>
    <div className='space-y-14 lg:space-y-24'>
      <div id="about">
      <About seed={seed}/>
      </div>
      <div id='skills'>
      <Skills/>
      </div>
      <div id='projects'>
      <Projects seed={seed} />
      </div>
      <div id='words'>
       <Words/>
      </div>
      <div id='contact'>
        <Contact/>
      </div>
    </div>
   </Layout>
  )
}
