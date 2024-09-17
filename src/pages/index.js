import Typewriter from 'typewriter-effect';
import AnimatedText from "@/components/AnimatedText";
import { HireMe } from "@/components/HireMe";
import { LinkArrow } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";
import profilePic from "../../public/images/profile/creator-maker-in-nature-v2.png";
import TransitionEffect from "@/components/TransitionEffect";
import Background from "@/components/Background"

export default function Home() {
  
  return (
    <>
      <Head>
        <title>J-Krush Dev</title>
        <meta
          name="description"
          content="Full-stack developer and software engineer"
        />
      </Head>

      <TransitionEffect />
      <article
        className={`flex min-h-screen items-center text-dark dark:text-light sm:items-start`}
      >
        <Layout className="!pt-0 md:!pt-16 sm:!pt-16">
          <div className="flex w-full items-start justify-between lg:items-center lg:flex-col">
            <div className="w-1/2 lg:justify-center md:inline-block md:w-full">
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
              
              <p className="text-center my-4 text-base font-medium lg:text-center md:text-sm sm:!text-xs">
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
                  Work <LinkArrow className="ml-1 !w-6 md:!w-4" />
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
        </Layout>

        <HireMe />
      </article>
    </>
  );
}
