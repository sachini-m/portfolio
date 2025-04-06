// next link
import Link from "next/link";

// icons
import { RiLinkedinLine } from "react-icons/ri";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link
        href="https://www.linkedin.com/in/sachini-merangika-5b1a68268"
        className="hover:text-accent transition-all duration-300"
        target="_blank"
      >
        <RiLinkedinLine />
      </Link>
    </div>
  );
};

export default Socials;
