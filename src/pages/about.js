import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import profile from "../../public/images/profile/jkrush-goofy-profile.JPG";
import profileAndRolig from "../../public/images/profile/jkrush-and-rolig.jpg";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import { Skills } from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import AnimatedText from "@/components/AnimatedText";
import TransitionEffect from "@/components/TransitionEffect";
import Typewriter from 'typewriter-effect';
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

  return (
    <>
      <Head>
        <title>Minimal Portfolio Built with Nextjs | About Page</title>
        <meta name="description" content="Learn more about CodeBucks, a Next.js developer with a passion for 
        creating innovative solutions. Discover tips for building a developer portfolio and insights on 
        full-stack development, front-end development, and back-end development." />
      </Head>
      <TransitionEffect />
      <main
        className={`flex  w-full flex-col items-center justify-center dark:text-light`}
      >
        <Layout className="pt-16">
          <AnimatedText
            text="Creating across mediums"
            className="mb-16 !text-8xl !leading-tight lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />

          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 
            md:col-span-8">
              <div className="h-8 mb-6">
                <Typewriter
                  className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75"
                  onInit={(typewriter) => {
                    typewriter.typeString("<span style='font-size: 30px;line-height: 36px;font-weight: 700;'>I'm J-Krush</span>")
                      .callFunction(() => {
                        console.log('String typed out!');
                      })
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
              
            </div>
            <div className="relative col-span-3 h-max rounded-2xl border-2 border-solid border-dark 
            bg-light p-8 dark:border-light dark:bg-dark
            xl:col-span-4 md:col-span-8 md:order-1
            ">
              <div
                className="absolute  top-0 -right-3 -z-10 h-[103%] w-[102%]  rounded-[2rem] rounded-br-3xl 
                bg-dark
        dark:bg-light  "
              />
              <Image
                className="h-auto w-full rounded-2xl"
                src={profileAndRolig}
                alt="J-Krush Profile"
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                priority
              />
            </div>
            <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row 
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

          <h3 className="mb-8 font-bold text-6xl mt-64 w-full text-center md:text-4xl sm:!text-2xl md:mt-32">
            My Businesses
          </h3> 
          <p className="font-medium mb-8 text-center">
            Wearing many hats, but they all fit
          </p>
          <div className="grid grid-cols-12 gap-24 gap-y-12 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-4 sm:col-span-12">
              <Project
                subtitle="Full Stack Software Development & Consulting"
                title="J-Krush Dev"
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

          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
}
