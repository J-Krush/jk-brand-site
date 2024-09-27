import Typewriter from 'typewriter-effect';
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import { Carousel } from "@material-tailwind/react";


// import profile from "../../public/images/profile/jkrush-goofy-profile.JPG";
import aiProfile1 from "../../public/images/profile/ai-portrait-goth-1.jpg";
import aiProfile2 from "../../public/images/profile/ai-portrait-superhero-2.jpg";
// import aiProfile3 from "../../public/images/profile/ai-portrait-sandcastle-3.JPG";
import aiProfile4 from "../../public/images/profile/ai-portrait-goth-4.jpg";
import aiProfile5 from "../../public/images/profile/ai-portrait-superhero-5.jpg";
import aiProfile6 from "../../public/images/profile/ai-portrait-6.jpg";
import aiProfile7 from "../../public/images/profile/ai-portrait-7.JPG";

import profileAndRolig from "../../public/images/profile/jkrush-and-rolig.jpg";

import { useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import { Skills } from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import TransitionEffect from "@/components/TransitionEffect";

import { Project } from "@/components/Project";

import softwareImage from "../../public/images/projects/magicstudio-computer-engineer.jpeg";
import flowcraftMediaSite from "../../public/images/projects/flowcraft-media-site-hero.png"
import shapesmithStudioSite from "../../public/images/projects/shapesmith-studio-site-hero.png";


function AnimatedNumberFramerMotion({ value }) {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });
  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, value, isInView]);

  useEffect(
    () =>
      springValue.on("change", (latest) => {
        if (ref.current && latest.toFixed(0) <= value) {
          ref.current.textContent = latest.toFixed(0);
        }
      }),
    [springValue, value]
  );

  return <span ref={ref} />;
}

export default function About() {

  const aiProfiles = [aiProfile6, aiProfile4, aiProfile5, aiProfile1, aiProfile7, aiProfile2]

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
        className={`flex  w-full flex-col items-center justify-center dark:text-light`}
      >
        <Layout className="pt-16">
          <AnimatedText
            text="Creating across mediums"
            className="my-16 !text-8xl !leading-tight lg:!text-6xl xs:!text-3xl sm:mb-8"
          />

          {/* This is the grid */}
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">

            <div className="col-span-3 flex flex-col items-start justify-start md:order-1 
            xl:col-span-4 lg:col-span-4 md:!col-span-8">
              <div className="h-12 mb-8">
                <Typewriter
                  className="mb-6 text-lg font-bold uppercase text-dark/75 dark:text-light/75"
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
              <p className="font-medium ">
               I don’t stick to just one lane—I build, create, and explore across multiple mediums. Whether it’s writing code, composing music, or designing systems, my work involves bringing together different disciplines to find unique solutions. It’s all about connecting ideas, people, and experiences to make the world a bit more compassionate, open, and fun.
              
              </p>
              <div className="mt-2 flex items-baseline self-start lg:self-center">
                <Link
                    // whileHover={{
                    //   cursor: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='48' viewport='0 0 100 100' style='font-size:24px;'><text y='50%'>👆</text></svg>"), auto`,
                    // }}
                    href="/work"
                    className={`flex items-center mt-6 rounded-lg border-2 border-solid bg-dark p-2.5 px-6 text-lg font-semibold
                    capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark 
                    dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
                    md:p-2 md:px-4 md:text-base
                    `}
                    download
                >
                  Work <LinkArrow className="ml-1 !w-6 md:!w-4" />
                </Link>
                <Link
                  href="/connect"
                  className="ml-4 text-lg font-medium capitalize text-dark underline 
                  dark:text-light md:text-base"
                >
                  Connect
                </Link>
              </div>
              {/* <p className="my-4 font-medium">
                I’m a builder at heart—whether it’s creating code, composing music, or performing on stage. I thrive on mixing things up, bridging silos, and finding new ways to connect people through creativity. My work isn’t just about solving problems—it’s about playing with possibilities, exploring ideas, and making the world a more open and compassionate place. And yeah, I like to have fun while I’m at it.
              </p> */}
              {/* <p className="font-medium">
                Whether I&apos;m working on a website, mobile app, or other
                digital product, I bring my commitment to design excellence and
                user-centered thinking to every project I work on. I look
                forward to the opportunity to bring my skills and passion to
                your next project.
              </p> */}
              
            </div> { /* Text column */ }
            <div className="relative col-span-3 h-max rounded-2xl border-2 border-solid border-dark 
            bg-light p-8 dark:border-light dark:bg-dark
            xl:col-span-4 lg:col-span-4 md:!col-span-8 md:order-2
            ">
              <div
                className="absolute  top-0 -right-3 -z-10 h-[103%] w-[102%] rounded-[2rem] rounded-br-3xl 
                bg-dark
        dark:bg-light  "
              />
              <Carousel className="rounded-xl">
                {aiProfiles.map((profile, index) => {
                  return (
                    <Image
                      key={index}
                      className="h-auto w-full rounded-2xl"
                      src={profile}
                      alt="J-Krush AI Profile"
                      sizes="(max-width: 768px) 100vw,
                    (max-width: 1200px) 50vw,
                    33vw"
                      priority
                    />
                  )
                })}
              </Carousel>
              <span className="w-full inline-block text-center text-sm font-bold mt-4">
                  My AI Looks 👀
              </span>
            </div>
            <div className="col-span-2 flex flex-col items-end gap-2 justify-between xl:col-span-8 xl:flex-row 
            xl:items-center md:order-3 mt-16">
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-3xl font-bold md:text-2xl sm:text-xl xs:text-lg">
                  5w4
                </span>
                <h2 className="mb-4 text-lg font-medium capitalize text-dark/75 dark:text-light/75 
                xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Enneagram
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-3xl font-bold md:text-2xl sm:text-xl xs:text-lg">
                  INFJ
                </span>
                <h2 className="mb-4 text-lg font-medium capitalize text-dark/75 dark:text-light/75 
                xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Meyers Briggs
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-3xl font-bold md:text-2xl sm:text-xl xs:text-lg">
                  Manifestor
                </span>
                <h2 className="mb-4 text-lg font-medium capitalize text-dark/75 dark:text-light/75 
                xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Human Design
                </h2>
              </div>
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
}
