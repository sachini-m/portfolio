export default function AboutInfoItem({ item }) {
  return (
    <div className="flex flex-col">
      <div className="flex flex-1 flex-col max-w-max gap-x-2 my-2  items-center text-white/60 md:flex-row">
        <div className="font-light mb-2 md:mb-0">{item.title}</div>
        <div className="hidden md:flex">-</div>
        <div>{item.stage}</div>
        <div className="flex gap-x-5 flex-wrap gap-y-4 justify-center">
          {/* icons */}
          {item.icons?.map((icon, itemIndex) => {
            return (
              <div className="text-2xl text-white group" key={itemIndex}>
                {icon.icon}
                {/* tooltip */}
                {item.key && (
                  <div className="relative right-0 hidden xl:group-hover:flex top-[6px] left-[-6px]">
                    <div className="absolute bg-white flex text-primary items-center p-[6px] rounded-[3px]">
                      <div className="text-[11px] leading-none font-semibold capitalize whitespace-nowrap">
                        {icon.key}
                      </div>
                      {/* triangle */}
                      <div className="border-solid border-l-white border-l-8 border-y-transparent border-x-[6px] absolute -top-2"></div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      {item.company && <div>{item.company}</div>}
    </div>
  );
}
