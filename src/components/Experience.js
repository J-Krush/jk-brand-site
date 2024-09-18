import React, { useRef } from "react";
import {
  motion,
  useScroll,
} from "framer-motion";
import LiIcon from "./LiIcon";


const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}{" "}
          <a
            className="capitalize text-primary dark:text-primaryDark"
            href={companyLink}
            target={"_blank"}
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize text-dark/75 font-medium dark:text-light/50 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm"> {work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "center start"],
  });

  return (

      <div className="my-64">
        <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
          Experience
        </h2>

        <div ref={ref} className="relative w-[75%] mx-auto lg:w-[90%] md:w-full">
          <motion.div
            className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-dark 
            origin-top  dark:bg-primaryDark dark:shadow-3xl"
            style={{ scaleY: scrollYProgress }}
          />
          <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
            <Details
                position="Founder and Maker"
                company="Shapesmith Studio"
                companyLink="https://shapesmith.studio"
                time="2022-Present"
                address="Asheville, NC"
                work="Laser cutting and maker studio for large art installations, signage, layered art, and custom design."
            />
            <Details
              position="Backend Software Engineer"
              company="Zuri Fertility"
              companyLink="https://zurifertility.com"
              time="2022"
              address="Remote (Contract)"
              work="Architected the microservices backend for Zuri Fertility, a medical startup focused on providing better fertility care for both men and women."
            />
            <Details
              position="Full Stack Software Engineer"
              company="Anthroware"
              companyLink="https://www.anthroware.com/"
              time="2018-2021"
              address="Asheville, NC"
              work="Product development, full-stack engineering and business viability. Worked directly with clients and startups, providing software expertise, design and implementation on a number of different technologies."
            />

            <Details
              position="VR Developer"
              company="Better Than Unicorns (BTU)"
              companyLink="https://betterthanunicorns.com"
              time="2017-2018"
              address="Asheville NC"
              work="Virtual reality immersive experience design and development utilizing Unreal Engine. Performed photogrammetry tasks for art preservation, and photo-realistic model creation. Created photospheres (360 Panoramas) for virtual walkthroughs."
            />

            <Details
              position="iOS Developer"
              company="Thinklabs"
              companyLink="https://www.thinklabs.com/"
              time="2016-2017"
              address="Denver, CO"
              work="Development of the Thinklabs Stethoscope iOS app. Features included: Bluetooth LE connectivity, spectrogram (FFT) and real-time audio visualization, record and analyze heart and lung sounds, listening buffers for catching important sounds."
            />

            <Details
              position="Forensic Analyst"
              company="Kineticorp"
              companyLink="https://kineticorp.com"
              time="2016"
              address="Denver, CO"
              work="Performed physics-based visualization tasks for the purpose of accident reconstruction. Conducted scene and vehicle inspections utilizing Faro 3D scanners and surveying equipment. Flew Phantom 3 drones for aerial imagery and photogrammetry solutions. Performed research studies about driver behavior and distance estimation. "
            />

            <Details
              position="Technical Writer"
              company="Fictiv"
              companyLink="https://fictiv.com"
              time="2015-2016"
              address="Remote"
              work="Wrote technical hardware development how-to articles, which can be found on Fictiv.com. Subject matter ranges from digital design to how to make a CNC drawing."
            />
          </ul>
        </div>
        </div>
    );
};

export default Experience;
