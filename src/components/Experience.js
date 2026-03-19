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
          {companyLink ? (
            <a
              className="capitalize text-primary dark:text-primaryDark"
              href={companyLink}
              target={"_blank"}
            >
              @{company}
            </a>
          ) : (
            <span className="capitalize text-primary dark:text-primaryDark">
              @{company}
            </span>
          )}
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
    offset: ["start 0.85", "end center"],
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
              position="Full Stack Engineer"
              company="Aktïga"
              companyLink="https://aktiga.com/"
              time="Nov 2024-Present"
              address="Hybrid"
              work="Full-stack engineering for Aktïga's internal and client agency projects, owning features end-to-end from database schema to responsive UI, while pioneering AI-augmented development workflows across the organization."
            />
            {/* <Details
              position="Founder, Maker"
              company="Shapesmith Studio"
              companyLink="https://shapesmith.studio"
              time="Aug 2022-Present"
              address="Asheville, NC"
              work="Laser cutting and maker studio for large art installations, signage, layered art, and custom design."
            /> */}
            <Details
              position="Founder, Engineer"
              company="Cubik Limited"
              time="Oct 2014-Present"
              address="On-site"
              work="Independent technical consultancy spanning software engineering, mechanical design, digital media, and fabrication. A decade of delivering across disciplines for clients and personal ventures."
            />
            <Details
              position="Systems Engineer"
              company="HiveTracks"
              companyLink="http://hivetracks.com/"
              time="Dec 2024-Jul 2025"
              address="Remote"
              work="Systems engineering for a data-driven beekeeping platform, building analytics dashboards and workflow automations that turn raw hive data into actionable insights."
            />
            <Details
              position="Backend Software Engineer"
              company="Zuri Fertility"
              companyLink="https://zurifertility.com"
              time="Jun 2022-Dec 2022"
              address="Remote"
              work="Architected the microservices backend for a medical startup focused on providing better fertility care for both men and women."
            />
            <Details
              position="Full Stack Software Engineer"
              company="Anthroware"
              companyLink="https://www.anthroware.com/"
              time="Aug 2018-Oct 2021"
              address="Hybrid"
              work="Product development and full-stack engineering at a software consultancy, shipping applications across web, mobile, and emerging platforms for a diverse client portfolio."
            />
            <Details
              position="VR Developer"
              company="Better Than Unicorns"
              companyLink="https://betterthanunicorns.com"
              time="May 2017-Mar 2018"
              address="Asheville, NC"
              work="Immersive VR experience design and development in Unreal Engine. Pioneered photogrammetry-based virtual walkthroughs before tools like Matterport existed."
            />
            <Details
              position="Acrobat, Dancer, Choreographer, Rigger"
              company="Fractal Tribe"
              companyLink="https://bouldercircuscenter.net/"
              time="Jun 2015-Apr 2017"
              address="Boulder, CO"
              work="Performed and choreographed partner acrobatics for live theatrical circus shows. Designed and manufactured a novel circus apparatus and provided rigging and safety engineering."
            />
            <Details
              position="iOS Developer"
              company="Thinklabs"
              companyLink="https://www.thinklabs.com/"
              time="Aug 2016-Mar 2017"
              address="Denver, CO"
              work="Built the Thinklabs digital stethoscope iOS app featuring Bluetooth LE connectivity, real-time FFT audio visualization, and heart/lung sound recording and analysis."
            />
            <Details
              position="Forensic Analyst"
              company="Kineticorp"
              companyLink="https://kineticorp.com"
              time="Feb 2016-Aug 2016"
              address="Denver, CO"
              work="Physics-based accident reconstruction using Faro 3D scanners, drone aerial imagery, and photogrammetry. Conducted driver behavior research and scene inspections."
            />
            <Details
              position="Technical Writer"
              company="Fictiv"
              companyLink="https://fictiv.com"
              time="Nov 2015-Apr 2016"
              address="Remote"
              work="Wrote technical hardware development articles covering digital design, CNC machining, and prototyping workflows."
            />
            <Details
              position="CAD Designer/Engineer"
              company="Arrigo Enterprises"
              time="Sep 2014-Oct 2015"
              address="Boulder, CO"
              work="Mechanical design and engineering for high-temperature laboratory equipment, from concept through production-ready manufacturing drawings."
            />
            <Details
              position="iOS Developer"
              company="Advantage Electronic Product Development"
              time="Sep 2013-Jul 2014"
              address="Broomfield, CO"
              work="Developed Bluetooth Low Energy-connected iOS applications for embedded hardware products at a product development firm."
            />
            <Details
              position="Aerospace Mechanical Design Engineer"
              company="LASP"
              companyLink="https://lasp.colorado.edu"
              time="May 2012-Aug 2013"
              address="Boulder, CO"
              work="Mechanical design engineering on the CICERO satellite mission at CU Boulder's Laboratory for Atmospheric and Space Physics."
            />
            <Details
              position="Systems Engineer"
              company="Applied Research Lab at Penn State"
              companyLink="https://www.arl.psu.edu/"
              time="May 2011-Aug 2011"
              address="State College, PA"
              work="Systems engineering on defense research programs at Penn State's Applied Research Laboratory."
            />
            <Details
              position="Student Researcher"
              company="NASA/NSERC"
              companyLink="https://www.nasa.gov/"
              time="Jun 2010-Jul 2010"
              address="Irvine, CA"
              work="Selected for NASA's Student Airborne Research Program. Conducted atmospheric science research and presented findings at the AGU annual meeting."
            />
            <Details
              position="Structures Team Lead"
              company="Penn State University"
              companyLink="https://www.psu.edu/"
              time="Jun 2008-Jan 2009"
              address="State College, PA"
              work="Led the structures subsystem for Penn State's entry in the Air Force Research Laboratory's NanoSAT-5 satellite competition."
            />
          </ul>
        </div>
        </div>
    );
};

export default Experience;
