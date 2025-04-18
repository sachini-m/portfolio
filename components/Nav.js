// icons
import { HiEnvelope, HiHome, HiUser, HiViewColumns } from "react-icons/hi2";

// next link
import Link from "next/link";
// next router
import { useRouter } from "next/router";

// nav data
export const navData = [
  { name: "home", path: "/", icon: <HiHome /> },
  { name: "about", path: "/about", icon: <HiUser /> },
  { name: "work", path: "/work", icon: <HiViewColumns /> },
  {
    name: "contact",
    path: "/contact",
    icon: <HiEnvelope />,
  },
];

const Nav = () => {
  const router = useRouter();
  const pathname = router.pathname;

  return (
    <nav className="flex flex-col items-center gap-y-4 fixed h-max bottom-0 mt-auto z-50 top-0 w-full xl:justify-center xl:right-[2%] xl:w-16 xl:max-w-md xl:h-screen">
      <div className="flex w-full justify-between items-center gap-y-10 px-4 py-8 bg-white/10 backdrop-blur-sm text-3xl h-[80px] md:px-40 xl:flex-col xl:justify-center xl:px-0 xl:h-max xl:text-xl xl:rounded-full">
        {navData.map((link, index) => {
          return (
            <Link
              className={`${
                link.path === pathname && "text-accent"
              } relative flex items-center group hover:text-accent transition-all duration-300`}
              key={link.name}
              href={link.path}
            >
              {/* tooltip */}
              <div className="absolute pr-14 right-0 hidden xl:group-hover:flex">
                <div className="bg-white relative flex text-primary items-center p-[6px] rounded-[3px]">
                  <div className="text-[12px] leading-none font-semibold capitalize">
                    {link.name}
                  </div>
                  {/* triangle */}
                  <div className="border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2"></div>
                </div>
              </div>
              {/* icon */}
              {link.icon}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;
