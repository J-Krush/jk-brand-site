import { useRef } from "react"
import AnimatedText from "@/components/AnimatedText";
import { HireMe } from "@/components/HireMe";
import Layout from "@/components/Layout";
import Head from "next/head";
import { Project, FeaturedProject } from "@/components/Project";

import geniusFrequencySite from "../../public/images/projects/genius-frequency-site-hero.png";
import shapesmithStudioSite from "../../public/images/projects/shapesmith-studio-site-hero.png";
import zuriFertilitySite from "../../public/images/projects/zuri-fertility-site-hero.png";

import TransitionEffect from "@/components/TransitionEffect";

export default function Work() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <>
      <Head>
        <title>J-Krush Dev</title>
        <meta
          name="description"
          content="Full-stack software developer and software engineer"
        />
      </Head>

      <TransitionEffect />
      <main
        className={`mb-16 flex w-full flex-col items-center justify-center dark:text-light`}
      >
        <Layout className="pt-16 mb-36">
          <AnimatedText
            text="My Work"
            className="my-16 !text-8xl !leading-tight lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <p className="font-large mb-8 text-center">
            I help businesses set up key infrastructure, and automate processes. 
          </p>
          <p className="font-large mb-8 text-center"> 
            My specialty is in custom software development and holistic systems design and integration.
          </p>
          { /* TODO need to add links to the sections on this page in the text here */ }

          <h3 id="featured_software_projects" className="mb-16 font-bold text-6xl mt-64 w-full text-center md:text-4xl md:mt-32">
            Featured Software Projects
          </h3> 
          <div className="grid grid-cols-12 gap-y-12">
            <div className="col-span-12">
              <FeaturedProject
                type="Webflow Site and Node.js API"
                title="Genius Frequency Website and Astrological Calculator"
                summary="A fully responsive website built with Webflow, and custom API built on Node.js, including true sidereal astrological calculator."
                img={geniusFrequencySite}
                link="https://www.geniusfrequency.com"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                type="React Website"
                title="Shapesmith Studio Website"
                summary="A React.js and Tailwind CSS site. All content served via Sanity CMS."
                img={shapesmithStudioSite}
                link="https://www.shapemsith.studio"
                github="https://github.com/J-Krush/shapesmith-studio-web"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                type="Medical Startup"
                title="Zuri Fertility App Backend"
                summary="Microservices architecture built with Nest.js and Postgres databases."
                img={zuriFertilitySite}
                link="https://www.zurifertility.com"
              />
            </div>
          </div>

          {/* TODO: Fix links for tools and components
          <h3 className="mb-16 font-bold text-6xl mt-64 w-full text-center md:text-4xl md:mt-32">
            Tools and Components
          </h3> 
          <div className="grid grid-cols-8 gap-6 gap-y-12">
            <div className="col-span-4 sm:!col-span-8">
              <Project
                subtitle="Serverless Function"
                title="Recaptcha Verification V3"
                link=""
              />
            </div>
            <div className="col-span-4 sm:col-span-8">
              <Project
                subtitle="Integrated with NASA Planetary API"
                title="Astrological Calculator"
                img={undefined}
                link="#" // link to section of the work page
              />
            </div>
            <div className="col-span-4 sm:!col-span-8">
              <Project
                subtitle="AWS SES Serverless Function"
                title="Email Sender"
                img={undefined}
                link="https://github.com/J-Krush/genius-facilitate-email-service"
                github="https://github.com/J-Krush/genius-facilitate-email-service"
              />
            </div>
          </div> */}

          {/* <h3 className="mb-16 font-bold text-6xl mt-64 w-full text-center md:text-4xl sm:!text-2xl md:mt-32">
            Photogrammetry
          </h3>  */}
          {/* <div className="grid grid-cols-12 gap-24 gap-y-12 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            
          </div> */}
          
          {/* <div class="sketchfab-embed-wrapper"> <iframe title="Buddha-wood" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/021f3d21a2fa4e88bc75e1ec829720b4/embed"> </iframe> <p style={"font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;"}> <a href="https://sketchfab.com/3d-models/buddha-wood-021f3d21a2fa4e88bc75e1ec829720b4?utm_medium=embed&utm_campaign=share-popup&utm_content=021f3d21a2fa4e88bc75e1ec829720b4" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> Buddha-wood </a> by <a href="https://sketchfab.com/cubik?utm_medium=embed&utm_campaign=share-popup&utm_content=021f3d21a2fa4e88bc75e1ec829720b4" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> Cubik </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=021f3d21a2fa4e88bc75e1ec829720b4" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a></p></div> */}

        </Layout>
        {/* <HireMe /> */}
      </main>
    </>
  );
}
