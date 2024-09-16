import { motion } from "framer-motion";
import React, { useRef, useState } from "react";


const Skill = ({ name, x, y }) => {
  const ref = useRef(null);
  return (
    <motion.div
      ref={ref}
      whileHover={{scale:1.15}}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: {duration: 1.5} }}
      viewport={{ once: true }}
      className="cursor-pointer w-max origin-center absolute 
       font-semibold bg-dark text-light py-3 px-6 rounded-full dark:bg-light dark:text-dark
       lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3  xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold
       "
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {

  const [visibleSkills, setVisibleSkills] = useState('software');

  return (
    <>
      <h2 className="font-bold text-8xl mt-64 mb-8 w-full text-center md:text-6xl md:mt-32">
        Skills
      </h2>

      <div class="flex items-center justify-center">
        <div class="inline-flex rounded-md shadow-sm" role="group">
          <button
            type="button"
            onClick={() => setVisibleSkills('software')}
            class={`px-4 py-2 text-sm font-medium bg-transparent border border-gray-900 rounded-s-lg 
            hover:bg-gray-900 hover:text-white 
            ${visibleSkills === 'software' ? "text-white z-10 ring-2 ring-gray-500 bg-gray-900 dark:text-gray-900 dark:bg-white" : "text-gray-900"}
            dark:border-white dark:text-white 
            dark:hover:text-white dark:hover:bg-gray-700`}>
              Software
          </button>
          {/* <button type="button" class="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border-t border-b border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
            Creative
          </button> */}
          <button 
            type="button"
            onClick={() => setVisibleSkills('creative')}
            className={`px-4 py-2 text-sm font-medium bg-transparent border border-gray-900 rounded-e-lg 
              hover:bg-gray-900 hover:text-white 
              ${visibleSkills === 'creative' ? "z-10 ring-2 ring-gray-500 bg-gray-900 text-white dark:text-gray-900 dark:bg-white" : "text-gray-900"}
              dark:border-white dark:text-white
              dark:hover:text-white dark:hover:bg-gray-700`}>
              Creative
          </button>
        </div>
      </div>
      

      {visibleSkills === 'software' ? SoftwareSkills() : CreativeSkills()}
    </>
  );



}

const SoftwareSkills = () => {
  const ref = useRef(null);
  return (
<>
    <div
      ref={ref}
      className="w-full h-[100vh] relative bg-circularLight dark:bg-circularDark  flex items-center justify-center 
      mb-64 md:mb-32 rounded-full
      lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd 
      sm:bg-circularLightSm sm:dark:bg-circularDarkSm lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] 
      "
    >
   
        <motion.div whileHover={{scale:1.15}} className="cursor-pointer flex rounded-full font-semibold bg-dark text-light p-8 shadow-dark
        dark:bg-light dark:text-dark lg:p-6 md:p-4 xs:text-xs xs:p-2
        ">
        Full Stack Dev
      </motion.div>

          <Skill name="Neo4j" x="-20vw" y="2vw" />
          <Skill name="ReactJS" x="-5vw" y="-10vw" />
          <Skill name="JavaScript" x="20vw" y="6vw" />
          <Skill name="React Native" x="0vw" y="12vw" />
          <Skill name="PostgreSQL" x="0vw" y="24vw" />
          <Skill name="Next.js" x="-20vw" y="-15vw" />
          <Skill name="Python" x="-15vw" y="-28vw" />
          <Skill name="Swift & SwiftUI" x="15vw" y="-12vw" />
          <Skill name="AWS" x="20vw" y="-24vw" />
          <Skill name="Github" x="-35vw" y="-5vw" />
          <Skill name="Webflow" x="32vw" y="-5vw" />
          <Skill name="Node.js" x="0vw" y="-20vw" />
          <Skill name="Bubble" x="-20vw" y="22vw" />
          <Skill name="Tawilwind CSS" x="28vw" y="18vw" />
          <Skill name="Blockchain & Crypto" x="-26vw" y="12vw" />
    </div></>
  );
};

const CreativeSkills = () => {
  const ref = useRef(null);
  return (
  <>
    <div
      ref={ref}
      className="w-full h-[100vh] relative bg-circularLight dark:bg-circularDark  flex items-center justify-center 
      mb-64 md:mb-32 rounded-full
      lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd 
      sm:bg-circularLightSm sm:dark:bg-circularDarkSm lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] 
      "
    >
   
        <motion.div whileHover={{scale:1.05}} className="cursor-pointer flex rounded-full font-semibold bg-dark text-light p-8 shadow-dark
        dark:bg-light dark:text-dark lg:p-6 md:p-4 xs:text-xs xs:p-2
        ">
        Art & Movement
      </motion.div>

          <Skill name="Videography" x="0vw" y="-20vw" />
          <Skill name="Adobe Illustrator" x="-25vw" y="18vw" />
          <Skill name="Davinci Resolve" x="-5vw" y="-10vw" />
          <Skill name="Drone Cinematography" x="15vw" y="-12vw" />
          <Skill name="Violinist" x="-20vw" y="2vw" />
          <Skill name="Guitar Player" x="20vw" y="6vw" />
          <Skill name="Bass Player" x="0vw" y="12vw" />

          <Skill name="AcroYoga Instructor" x="0vw" y="24vw" />
          <Skill name="Circus Performer" x="20vw" y="28vw" />
          <Skill name="Music Producer" x="-20vw" y="-15vw" />
          <Skill name="Dance Choreographer" x="-15vw" y="-28vw" />
          
          <Skill name="3D Modeling" x="20vw" y="-24vw" />

          {/* <Skill name="Github" x="-35vw" y="-5vw" />
          <Skill name="Webflow" x="32vw" y="-5vw" />
          
          
          <Skill name="Tawilwind CSS" x="28vw" y="18vw" /> */}
    </div></>
  );
};

export  { Skills, SoftwareSkills, CreativeSkills };
