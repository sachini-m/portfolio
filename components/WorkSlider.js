// react swiper
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// next image
import Image from "next/image";

// next link
import Link from "next/link";

// icons
import { BsArrowRight } from "react-icons/bs";

// data
const workSlider = {
  slides: [
    {
      projects: [
        {
          title: "Makro Pro",
          image: "/projects/1.jpg",
          link: "https://www.figma.com/community/file/1490603446637811427",
        },
        {
          title: "Be With-You",
          image: "/projects/2.jpg",
          link: "https://www.figma.com/community/file/1490615097694191336/be-with-yous-ux-ui-design-copy",
        },
        {
          title: "EV Charging",
          image: "/projects/3.jpg",
          link: "https://www.figma.com/community/file/1490610558158435046",
        },
        {
          title: "KMUTNB Run",
          image: "/projects/4.jpg",
          link: "https://www.figma.com/community/file/1490617969738668777",
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlider.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
              {slide.projects.map(({ title, image, link }, index) => {
                return (
                  <div
                    key={index}
                    className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                  >
                    <Link href={link ?? ""} target="_blank" key={index}>
                      <div className="flex items-center justify-center relative overflow-hidden group">
                        {/* image */}
                        {image && (
                          <Image src={image} width={500} height={300} alt="" />
                        )}
                        {/* overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700" />
                        {/* title */}
                        <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                          <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                            {/* title part 1 */}
                            <div className="delay-100">
                              {title.split(" ")[0]}
                            </div>
                            {/* title part 2 */}
                            <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                              {title.split(" ")[1]}
                            </div>
                            {/* icon */}
                            <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                              <BsArrowRight />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
