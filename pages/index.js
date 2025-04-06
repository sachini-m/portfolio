// next image

// framer motion
import { motion } from "framer-motion";

// variants
import { fadeIn } from "../variants";

// components
import Avatar from "../components/Avatar";
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";

const Home = () => {
  return (
    <div className="bg-primary/60 h-full">
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="flex flex-col text-center justify-center h-full container mx-auto xl:pt-40 xl:text-left">
          {/* title */}
          <motion.h1
            className="h1"
            variants={fadeIn("down", 0, 2)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            Designing Experiences <br /> that{" "}
            <span className="text-accent"> Speak to Users</span>
          </motion.h1>
          {/* subtitle */}
          <motion.p
            className="max-w-sm mx-auto mb-10 xl:max-w-xl xl:mx-0 xl:mb-16"
            variants={fadeIn("down", 0, 3)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            I&apos;m a passionate UI/UX Designer with a strong foundation in
            user-centered design, visual storytelling, and problem-solving. From
            mobile apps to web interfaces, I love transforming complex ideas
            into smooth, beautiful, and engaging user journeys. Always eager to
            explore fresh design trends, emerging technologies, and new
            challenges.
          </motion.p>
          {/* button */}
          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>
          <motion.dev
            className="hidden xl:flex"
            variants={fadeIn("down", 0, 4)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            <ProjectsBtn />
          </motion.dev>
        </div>
      </div>
      {/* image */}
      <div className="w-full h-full absolute right-0 bottom-0">
        {/* bg img */}
        <div className="bg-none w-full h-full absolute mix-blend-color-dodge translate-z-0 xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat"></div>
        {/* particles */}
        <ParticlesContainer />
        {/* avatar img */}
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-full h-full max-w-[700px] max-h-[700px] absolute lg:bottom-[55px] lg:right-[13%]"
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
