import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { GithubIcon } from "@/components/Icons";

const FramerImage = motion(Image);

const Project = ({ title, subtitle, img, link, onClick, newTab = true, imageOnTop = true, showVisitButton = true }) => {

    return (
      <article
        className="relative flex h-full w-full flex-col items-center justify-between rounded-2xl  rounded-br-2xl 
        border  border-solid  border-dark bg-light p-6  shadow-2xl dark:border-light dark:bg-dark 
        xs:p-4
        "
      >
        <div
          className="absolute  top-0 -right-1 -z-10 h-[102%] w-[102%] rounded-[2rem] rounded-br-3xl bg-dark
           dark:bg-light  md:-right-2 md:w-[101%] xs:h-[102%]
          xs:rounded-[1.5rem]  "
        />
        {imageOnTop === false ? <Link
            onClick={onClick}
            href={link}
            target={newTab === true ? "_blank" : undefined}
            className="underline-offset-2 hover:underline"
          >
            <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl ">
              {title}
            </h2>
          </Link>
        : null}
        <Link
          onClick={onClick}
          href={link}
          target={newTab === true ? "_blank" : undefined}
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
  
          {imageOnTop === true ? <Link
            onClick={onClick}
            href={link}
            target={newTab === true ? "_blank" : undefined}
            className="underline-offset-2 hover:underline"
          >
            <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl ">
              {title}
            </h2>
          </Link>
          : null }
          {showVisitButton && <div className="flex w-full items-center  justify-between">
            <Link
              onClick={onClick}
              href={link}
              target={newTab === true ? "_blank" : undefined}
              className="rounded text-lg
              font-medium underline md:text-base
              "
              aria-label={title}
            >
              Visit
            </Link>
          </div>
          }
          
        </div>
      </article>
    );
  };

const FeaturedProject = ({ type, title, summary, img, link, github, newTab = true }) => {

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
          target={newTab === true ? "_blank" : undefined}
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
            target={newTab === true ? "_blank" : undefined}
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

export { Project, FeaturedProject };