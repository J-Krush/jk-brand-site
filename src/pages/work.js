import { useRef } from "react"
import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import proj1 from "../../public/images/projects/crypto-screener-cover-image.jpg";
import proj2 from "../../public/images/projects/nft-collection-website-cover-image.jpg";
import proj3 from "../../public/images/projects/fashion-studio-website.jpg";
import proj4 from "../../public/images/projects/portfolio-cover-image.jpg";
import proj5 from "../../public/images/projects/agency-website-cover-image.jpg";
import proj6 from "../../public/images/projects/devdreaming.jpg";

import softwareImage from "../../public/images/projects/magicstudio-computer-engineer.jpeg";
import geniusFrequencySite from "../../public/images/projects/genius-frequency-site-hero.png";
import shapesmithStudioSite from "../../public/images/projects/shapesmith-studio-site-hero.png";
import flowcraftMediaSite from "../../public/images/projects/flowcraft-media-site-hero.png"
import zuriFertilitySite from "../../public/images/projects/zuri-fertility-site-hero.png";

import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {

  return (
    <article
      className="relative flex w-full items-center  justify-between rounded-3xl rounded-br-2xl border
border-solid border-dark bg-light p-12 shadow-2xl  dark:border-light dark:bg-dark  lg:flex-col 
lg:p-8 xs:rounded-2xl  xs:rounded-br-3xl xs:p-4 
    "
    >
      <div
        className="absolute  top-0 -right-3 -z-10 h-[103%] w-[101%] rounded-[2.5rem] rounded-br-3xl bg-dark
         dark:bg-light  xs:-right-2 xs:h-[102%] xs:w-[100%]
        xs:rounded-[1.5rem] "
      />

      <Link
        href={link}
        target={"_blank"}
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage
          src={img}
          className="h-auto w-full"
          alt={title}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          priority
        />
      </Link>
      <div className="flex w-1/2 flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-xl font-medium text-primary dark:text-primaryDark xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target={"_blank"}
          className="underline-offset-2 hover:underline"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold lg:text-3xl xs:text-2xl">
            {title}
          </h2>
        </Link>
        <p className=" my-2 rounded-md font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        {github ?
        <div className="mt-2 flex items-center">
          <Link
            href={github}
            target={"_blank"}
            className="w-10"
            aria-label="Crypto Screener Application github link"
          >
            <GithubIcon />
          </Link>
          <Link
            href={github}
            target={"_blank"}
            className="ml-4 rounded-lg
             bg-dark p-2 px-6 text-lg font-semibold text-light dark:bg-light dark:text-dark 
             sm:px-4 sm:text-base
            "
            aria-label="Crypto Screener Application"
          >
            Visit Project
          </Link>
        </div>
        : <></>
        }
      </div>
    </article>
  );
};

const Project = ({ title, subtitle, img, link, onClick }) => {

  return (
    <article
      className="relative flex w-full flex-col items-center justify-center rounded-2xl  rounded-br-2xl 
      border  border-solid  border-dark bg-light p-6  shadow-2xl dark:border-light dark:bg-dark 
      xs:p-4
      "
    >
      <div
        className="absolute  top-0 -right-3 -z-10 h-[103%] w-[102%] rounded-[2rem] rounded-br-3xl bg-dark
         dark:bg-light  md:-right-2 md:w-[101%] xs:h-[102%]
        xs:rounded-[1.5rem]  "
      />
      
      <Link
        onClick={onClick}
        href={link}
        target={"_blank"}
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="h-auto w-full"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        />
      </Link>
      <div className="mt-4 flex w-full flex-col items-start justify-between">
        <span className="text-xl font-medium text-primary dark:text-primaryDark lg:text-lg md:text-base">
          {subtitle}
        </span>

        <Link
          onClick={onClick}
          href={link}
          target={"_blank"}
          className="underline-offset-2 hover:underline"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl ">
            {title}
          </h2>
        </Link>
        <div className="flex w-full items-center  justify-between">
          <Link
            onClick={onClick}
            href={link}
            target={"_blank"}
            className="rounded text-lg
            font-medium underline md:text-base
            "
            aria-label={title}
          >
            Visit
          </Link>
        </div>
      </div>
    </article>
  );
};

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
        <title>Modern Portfolio Built with Nextjs | Projects Page</title>
        <meta
          name="description"
          content="Discover the latest webapp projects created by CodeBucks, a Next.js developer with 
        expertise in React.js and full-stack development. Browse software engineering articles and tutorials for tips on creating your own portfolio."
        />
      </Head>

      <TransitionEffect />
      <main
        className={`mb-16 flex w-full flex-col items-center justify-center dark:text-light`}
      >
        <Layout className="pt-16">
          <AnimatedText
            text="My Work"
            className="mb-8 !text-8xl !leading-tight lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />

          <h3 className="mb-8 font-bold text-6xl mt-64 w-full text-center md:text-4xl sm:!text-2xl md:mt-32">
            My Businesses
          </h3> 
          <p className="font-medium mb-8 text-center">
            Wearing many hats, but they all fit
          </p>

          <div className="grid grid-cols-12 gap-24 gap-y-12 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-4 sm:col-span-12">
              <Project
                subtitle="Full Stack Software Development"
                title="Software Development & Consulting"
                img={softwareImage}
                link="#" // link to section of the work page
                onClick={(event) => {
                  event.preventDefault();
                  scrollToSection('featured_software_projects')
                }}
              />
            </div>
            <div className="col-span-4 sm:col-span-12">
              <Project
                subtitle="Drone Cinematography"
                title="Flowcraft Media"
                img={flowcraftMediaSite}
                link="https://flowcraft-media-main.webflow.io/coming-soon"
              />
            </div>
            <div className="col-span-4 sm:col-span-12">
              <Project
                subtitle="Laser Cutting"
                title="Shapesmith Studio"
                summary=""
                img={shapesmithStudioSite}
                link="https://shapesmith.studio"
              />
            </div>
          </div>

          <h3 id="featured_software_projects" className="mb-16 font-bold text-6xl mt-64 w-full text-center md:text-4xl sm:!text-2xl md:mt-32">
            Featured Software Projects
          </h3> 
          <div className="grid grid-cols-12 gap-24 gap-y-12 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
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

          <h3 className="mb-16 font-bold text-6xl mt-64 w-full text-center md:text-4xl sm:!text-2xl md:mt-32">
            Tools and Components
          </h3> 
          <div className="grid grid-cols-12 gap-24 gap-y-12 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
          <div className="col-span-4 sm:col-span-6">
              <Project
                subtitle="Integrated with NASA Planetary API"
                title="Astrological Calculator"
                img={proj2}
                link="#" // link to section of the work page
              />
            </div>
            <div className="col-span-4 sm:col-span-6">
              <Project
                subtitle="AWS SES"
                title="Email Sender Serverless Function"
                img={proj3}
                link="https://github.com/J-Krush/genius-facilitate-email-service"
                github="https://github.com/J-Krush/genius-facilitate-email-service"
              />
            </div>
            {/* <div className="col-span-3 sm:col-span-6">
              <Project
                subtitle="Laser Cutting"
                title="Shapesmith Studio"
                summary=""
                img={proj4}
                link="https://shapesmith.studio"
              />
            </div> */}
          </div>
          

        </Layout>
      </main>
    </>
  );
}
