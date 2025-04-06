import Link from "next/link";
import { useState } from "react";

// icons
import {
  SiCanva,
  SiConfluence,
  SiCss3,
  SiFlutter,
  SiGoogleanalytics,
  SiGoogledocs,
  SiHtml5,
  SiJira,
  SiMiro,
  SiMixpanel,
  SiNotion,
  SiPowerbi,
  SiSwagger,
} from "react-icons/si";

// Counter
import CountUp from "react-countup";

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

// components
import { FiFigma } from "react-icons/fi";
import AboutInfoItem from "../../components/AboutInfoItem";
import Avatar from "../../components/Avatar";
import CirclesImage from "../../components/CirclesImage";
import ExperienceItem from "../../components/ExperienceItem";

//  data
const aboutData = [
  {
    title: "Skills",
    info: [
      {
        title: "UI/UX Design",
        icons: [
          { icon: <FiFigma key="js" />, key: "Figma" },
          { icon: <SiCanva key="react" />, key: "Canva" },
          { icon: <SiMiro key="ts" />, key: "Miro" },
        ],
      },
      {
        title: "Project Management",
        icons: [
          { icon: <SiJira key="react-native" />, key: "Jira" },
          { icon: <SiConfluence key="ionic" />, key: "Confluence" },
        ],
      },
      {
        title: "Analytics",
        icons: [
          { icon: <SiMixpanel key="css" />, key: "Mixpanel" },
          {
            icon: <SiGoogleanalytics key="tailwind" />,
            key: "Google Analytics",
          },
          {
            icon: <SiPowerbi key="styled-components" />,
            key: "Power BI",
          },
        ],
      },
      {
        title: "Documentation",
        icons: [
          { icon: <SiNotion key="mongo" />, key: "Notion" },
          { icon: <SiGoogledocs key="mysql" />, key: "Google Docs" },
        ],
      },
      {
        title: "Development",
        icons: [
          { icon: <SiHtml5 key="jest" />, key: "HTML" },
          { icon: <SiCss3 key="vitest" />, key: "CSS" },
          {
            icon: <SiFlutter key="testing-lib" />,
            key: "Flutter",
          },
          {
            icon: <SiSwagger key="testing-lib" />,
            key: "Swagger",
          },
        ],
      },
      {
        title: "Soft Skills",
        icons: [
          { icon: <div className="text-xs">Communication</div> },
          { icon: <div className="text-xs">Adaptability</div> },
          { icon: <div className="text-xs">Leadership</div> },
          { icon: <div className="text-xs">Teamwork</div> },
          { icon: <div className="text-xs">Problem Solving</div> },
        ],
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title:
          "Led the research and design for mobile and web features, using Figma and Miro to create user flows, wireframes, and interactive prototypes.",
        company: "UI/UX Design",
        stage: "2022 - 2024",
        companyLink: "https://www.brikl.com",
      },
      {
        title:
          "Leveraged Mixpanel to gather insights on user behavior and continuously improve product decisions.",
        company: "Feature Analytics",
        stage: "2021 - 2022",
        companyLink: "https://www.tcs.com",
      },
      {
        title:
          "Helped optimize product search experience through data-driven recommendations and interface refinement.",
        company: "Search Optimization",
        stage: "2019 - 2021",
        companyLink: "https://tech.allianz.com/en.html",
      },
      {
        title:
          "Streamlined third-party product management by automating titles, categories, and descriptions in English and Thai.",
        company: "Content Automation",
        stage: "2018 - 2019",
        companyLink: "https://calcey.com",
      },
      {
        title: "Associate Software Engineer",
        company: "Mutants International",
        stage: "2016 - 2018",
        companyLink: "",
      },
      {
        title:
          "Worked alongside designers, developers, QAs, and business stakeholders in an Agile environment.",
        company: "Cross-functional Collaboration",
        stage: "2015",
        companyLink: "",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "Google Digital Marketing & E-Commerce",
        stage: "2024",
        link: "https://drive.google.com/file/d/1eR0ZSHWsGtPM2nVqtTIdo4dGUzKy8fyE/view?usp=drive_link",
      },
      {
        title: "Product analytics Micro-Certification for Mixpanel",
        stage: "2024",
        link: "https://drive.google.com/file/d/1SOdMP9YNPlXaibp3DbedcySFnzyjscMr/view?usp=drive_link",
      },
      {
        title: "Electronic Engineering with AI Online Workshop - KMUTNB",
        stage: "2024",
        link: "https://drive.google.com/file/d/1PB-xxitlbzbjd3v7pNX30-cp0z8BNDFo/view?usp=drive_link",
      },
      {
        title: "Foundations of Project Management",
        stage: "2023",
        link: "https://www.coursera.org/account/accomplishments/verify/ANA9S9QTLU9Y",
      },
      {
        title: "Sustainable living solutions advancing EV infrastructure",
        stage: "2023",
        link: "https://drive.google.com/file/d/14UXk1G7ZT_1F1WDERkO3GfXq1vszx5i3/view?usp=drive_link",
      },
      {
        title:
          "Digital entrepreneurship youth building businesses for positive change",
        stage: "2024",
        link: "https://drive.google.com/file/d/1axt8tP2yttKX3_FmyXcVC4pnxN8aPV9_/view?usp=drive_link",
      },
    ],
  },
  {
    title: "awards",
    info: [
      {
        title: `Outstanding Academic Performer Recognition Awarded by KMUTNB`,
        stage: "2024",
        link: "https://www.linkedin.com/posts/sachini-merangika-5b1a68268_outstanding-academic-performer-recognition-activity-7313162472771710977-2tBG?utm_source=share&utm_medium=member_desktop&rcm=ACoAABcLaq4BZBGm6HDfX8uDBNslj6e_15BJa9M",
      },
      {
        title: `Award for Sustainable Living Solution Advancing EV Infrastructure`,
        stage: "2024",
        link: "https://www.linkedin.com/posts/sachini-merangika-5b1a68268_sustainable-living-solution-advancing-ev-activity-7313168255278321664-oxgN?utm_source=share&utm_medium=member_desktop&rcm=ACoAABcLaq4BZBGm6HDfX8uDBNslj6e_15BJa9M",
      },
      {
        title: `Team presentation excellence award for Digital entrepreneurship youth building businesses for positive change`,
        stage: "2024",
        link: "https://drive.google.com/file/d/1l2tG8sTstEpHR0GmopagmDym7-tADTn3/view?usp=drive_link",
      },
      {
        title: `Scholarship Award : GPA of 4.00 on a 4.00 scale`,
        stage: "2023",
        link: "https://www.linkedin.com/posts/sachini-merangika-5b1a68268_scholarship-award-mrssachini-merangika-activity-7313167511263289347-Rlh4?utm_source=share&utm_medium=member_desktop&rcm=ACoAABcLaq4BZBGm6HDfX8uDBNslj6e_15BJa9M",
      },
      {
        title: `Scholarship Award : GPA of 4.00 on a 4.00 scale`,
        stage: "2022",
        link: "https://www.linkedin.com/posts/sachini-merangika-5b1a68268_scholarship-award-mrssachini-merangika-activity-7313165343609208833-O5e4?utm_source=share&utm_medium=member_desktop&rcm=ACoAABcLaq4BZBGm6HDfX8uDBNslj6e_15BJa9M",
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full bg-primary/30 pt-32 lg:pt-0 pb-20 text-center xl:text-left mb-6 xl:mb-0">
      <CirclesImage />
      {/* avatar img */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden absolute max-w-[500px] -bottom-[70px] -left-[120px] xl:flex"
      >
        <Avatar />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center gap-x-16 xl:flex-row overflow-scroll hide-scrollbar">
        {/* text */}
        <div className="flex py-6 md:flex-1 flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h3"
          >
            From Ideas to <span className="text-accent">Impact.</span> The
            Journey of a Design Strategist
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            Over the past few years, I’ve cultivated a passion for
            human-centered design, translating abstract ideas into meaningful
            digital experiences. From wireframes to analytics, my journey as a
            UI/UX Designer and Product Owner Intern at Makro Pro allowed me to
            merge creativity with data, streamlining complex problems into
            elegant solutions that enhance user journeys and business outcomes.
          </motion.p>
          {/* counters */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 gap-5">
              {/* experience */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0 md:pr-4">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={10} duration={4} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[140px]">
                  Months of experience
                </div>
              </div>
              {/* clients */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0  pr-6">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={9} duration={4} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4]">
                  Certifications
                </div>
              </div>
              {/* projects */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0 md:pr-4">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={10} duration={4} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[140px]">
                  projects
                </div>
              </div>
              {/* awards */}
              <div className="relative flex-1">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={5} duration={4} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[140px]">
                  Awards
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        {/* info */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full h-[480px] xl:max-w-[53%]"
        >
          <div className="flex gap-x-4 mx-auto mb-4 xl:gap-x-8 xl:mx-0">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={item.title}
                  className={`${
                    index === itemIndex &&
                    "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                  } cursor-pointer capitalize relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0 xl:text-lg`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <motion.div
            variants={fadeIn("left", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="py-2 flex flex-col items-center gap-y-2 xl:py-6 xl:gap-y-5 xl:items-start"
          >
            {aboutData[index].info.map((item, itemIndex) => {
              if (aboutData[index].title === "experience") {
                return <ExperienceItem item={item} key={itemIndex} />;
              }

              return item.link ? (
                <Link href={item.link ?? ""} target="_blank" key={itemIndex}>
                  <AboutInfoItem item={item} />
                </Link>
              ) : (
                <AboutInfoItem item={item} />
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
