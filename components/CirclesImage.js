// next image
import Image from "next/image";

const CirclesImage = () => {
  return (
    <div className="w-[200px] absolute -right-16 -bottom-2 mix-blend-color-dodge animate-pulse duration-75 z-10 xl:w-[300px]">
      <Image
        className="w-full h-full"
        src={"/circles.png"}
        width={260}
        height={200}
        alt=""
      />
    </div>
  );
};

export default CirclesImage;
