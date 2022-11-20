import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'


export default function Home() {
  return (
    <div className="bg-[rgb(38,38,38)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>Patricks portfolio</title>

      </Head>

      {/*Header */}
      <Header />
      {/* Hero */}

      <section id='header' className='snap-center'>
        <Hero />
      </section>

      {/* About*/}

      {/* Experience */}

      {/* Skills */}

      {/* Project */}

      {/* Contact Me */}

    </div>
  )
}
