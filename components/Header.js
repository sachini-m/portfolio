// next image

// next link
import Link from "next/link";

// components
import Socials from "../components/Socials";

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-0 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col justify-between items-center gap-y-6 py-8 xl:flex-row">
          {/* logo */}
          <Link href={"/"}>
            <motion.h3
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="text-3xl md:text-4xl font-medium"
            >
              Sachini <span className="font-thin">Merangika</span>
              <span className="text-4xl text-accent">.</span>
            </motion.h3>
          </Link>
          {/* social accounts */}
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
