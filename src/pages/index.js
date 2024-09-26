import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Typewriter from 'typewriter-effect';

import AnimatedText from "@/components/AnimatedText";
import { HireMe } from "@/components/HireMe";
import { LinkArrow } from "@/components/Icons";
import Layout from "@/components/Layout";
import { Project } from "@/components/Project";
import TransitionEffect from "@/components/TransitionEffect";

import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";
import profilePic from "../../public/images/profile/creator-maker-in-nature-v2.png";
import softwareImage from "../../public/images/projects/magicstudio-computer-engineer.jpeg";
import flowcraftMediaSite from "../../public/images/projects/flowcraft-media-site-hero.png"
import shapesmithStudioSite from "../../public/images/projects/shapesmith-studio-site-hero.png";


export default function Home() {
  
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
      <article
        className={`flex min-h-screen items-center text-dark dark:text-light sm:items-start`}
      >
        <Layout className="!pt-0 md:!pt-16 sm:!pt-16">
          <div className="flex w-full items-start justify-between lg:items-center lg:flex-col lg:mt-16">
            {/* <div className="w-1/2 lg:justify-center md:inline-block md:w-full"> */}
            <div className="w-1/2 p-6 lg:hidden">
              <Image
                src={profilePic}
                alt="J-Krush"
                className="h-auto w-full"
                sizes="100vw"
                priority
              />
            </div>

            <div className="flex w-1/2 flex-col items-start self-center lg:items-center lg:w-full lg:text-center">
              {/* <AnimatedText
                text="Creating across mediums, connecting the dots, making magic happen."
                className="!text-left !text-6xl xl:!text-5xl lg:!text-6xl md:!text-5xl sm:!text-3xl"
              /> */}
              <div className="h-8 mb-6">
                <Typewriter
                  className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75"
                  onInit={(typewriter) => {
                    typewriter.typeString("<span style='font-size: 30px;line-height: 36px;font-weight: 700;'>I'm J-Krush</span>")
                      .pauseFor(2500)
                      .deleteChars(6)
                      .typeString("<span style='font-size: 30px;line-height: 36px;font-weight: 600;'>ohn Kreisher</span>")
                      .pauseFor(2500)
                      .deleteChars(12)
                      .start();
                  }}
                  options={{
                    loop: true,
                    cursor: "<span style='font-size: 30px;line-height: 36px;font-weight: 700;'>.</span>",
                    className: "mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75"
                  }}
                />
              </div>
              
              <p className="text-center my-4 text-base font-medium lg:text-center">
              Polymath at heart.. always learning, always building.
              </p>
              <div className="mt-2 flex items-center self-start lg:self-center">
                <Link
                  // whileHover={{
                  //   cursor: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='48' viewport='0 0 100 100' style='font-size:24px;'><text y='50%'>👆</text></svg>"), auto`,
                  // }}
                  href="/work"
                  className={`flex items-center rounded-lg border-2 border-solid bg-dark p-2.5 px-6 text-lg font-semibold
            capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark 
            dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
            md:p-2 md:px-4 md:text-base
             `}
                  download
                >
                  My Work
                </Link>

                <Link
                  href="/about"
                  className="ml-4 text-lg font-medium capitalize text-dark underline 
                  dark:text-light md:text-base"
                >
                  About
                </Link>
              </div>
            </div>
          </div>

          <div className="hidden mt-6 lg:flex flex-col">
            <h3 className="mb-8 font-bold text-4xl mt-16 w-full text-center md:text-3xl">
              Links
            </h3> 
            <div className="mt-2 w-full grid-cols-12 gap-2 gap-y-4 hidden lg:grid self-center">
              
              <Link
                href="https://github.com/J-Krush"
                className={`col-span-4 md:col-span-12 flex items-center justify-center rounded-lg border-2 border-solid bg-dark p-2.5 px-6 text-lg font-semibold
          capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark 
          dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
          md:p-2 md:px-4 md:text-base 
            `}
              >
                Github <LinkArrow className="ml-1 !w-6 md:!w-4" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/john-kreisher-792aa34b/"
                className={`col-span-4 md:col-span-12 flex items-center justify-center rounded-lg border-2 border-solid bg-[#0077B5] p-2.5 px-6 text-lg font-semibold
          capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark 
          dark:border-[#0077B5] dark:text-light dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
          md:p-2 md:px-4 md:text-base
            `}
              >
                LinkedIn <LinkArrow className="ml-1 !w-6 md:!w-4" />
              </Link>
              <Link
                href="https://open.spotify.com/user/j-krush?si=2c088ce1cdd246b6"
                className={`col-span-4 md:col-span-12 flex items-center justify-center rounded-lg border-2 border-solid bg-[#1db954] p-2.5 px-6 text-lg font-semibold
          capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark 
          dark:border-[#1db954] dark:text-light dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
          md:p-2 md:px-4 md:text-base
            `}
              >
                Spotify <LinkArrow className="ml-1 !w-6 md:!w-4" />
              </Link>
              <Link
                href="https://soundcloud.com/megakrush"
                className={`col-span-4 md:col-span-12 flex items-center justify-center rounded-lg border-2 border-solid bg-[#ff8800] p-2.5 px-6 text-lg font-semibold
          capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark 
          dark:border-[#ff8800] dark:text-light dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
          md:p-2 md:px-4 md:text-base
            `}
              >
                Soundcloud <LinkArrow className="ml-1 !w-6 md:!w-4" />
              </Link>
              <Link
                href="https://www.youtube.com/@FlowcraftMedia"
                className={`col-span-4 md:col-span-12 flex items-center justify-center rounded-lg border-2 border-solid bg-[#CD201F] p-2.5 px-6 text-lg font-semibold
          capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark 
          dark:border-[#CD201F] dark:text-light dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
          md:p-2 md:px-4 md:text-base
            `}
              >
                Youtube <LinkArrow className="ml-1 !w-6 md:!w-4" />
              </Link>
              <Link
                href="https://www.instagram.com/__jkrush__/"
                className={`col-span-4 md:col-span-12 flex items-center justify-center rounded-lg border-2 border-solid bg-[#833ab4] p-2.5 px-6 text-lg font-semibold
          capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark 
          dark:border-[#833ab4] dark:text-light dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
          md:p-2 md:px-4 md:text-base
            `}
              >
                Instagram <LinkArrow className="ml-1 !w-6 md:!w-4" />
              </Link>
            </div>
          </div>
          
          <h3 className="mb-8 font-bold text-4xl mt-64 w-full text-center md:text-3xl md:mt-32">
            My Businesses
          </h3> 
          <p className="font-medium mb-8 text-center">
            Wearing many hats, but they all fit
          </p>
          <div className="grid grid-cols-12 gap-6 gap-y-12">
            <div className="col-span-4 sm:col-span-12">
              <Project
                subtitle="Full Stack Software Development & Consulting"
                title="J-Krush Software Consulting"
                img={softwareImage}
                link="/work"
                newTab={false}
                imageOnTop={false}
                showVisitButton={false}
              />
            </div>
            <div className="col-span-4 sm:col-span-12">
              <Project
                subtitle="Drone Cinematography"
                title="Flowcraft Media"
                img={flowcraftMediaSite}
                link="https://flowcraft-media-main.webflow.io/coming-soon"
                imageOnTop={false}
                showVisitButton={false}
              />
            </div>
            <div className="col-span-4 sm:col-span-12">
              <Project
                subtitle="Laser Cutting and Maker Studio"
                title="Shapesmith Studio"
                summary=""
                img={shapesmithStudioSite}
                link="https://shapesmith.studio"
                imageOnTop={false}
                showVisitButton={false}
              />
            </div>
          </div>
        </Layout>

        {/* <HireMe /> */}
      </article>
    </>
  );
}
