import Button from "./Button";
import leftScrollIcon from "../assets/icons/left-scroll.svg";
import rightScrollIcon from "../assets/icons/right-scroll.svg";
import { useRef } from "react";
const ButtonList = () => {
  const scrollRef = useRef(null);
  const list = [
    "All",
    "Mixes",
    "Recents",
    "Javascript",
    "Music",
    "UPSC",
    "News",
    "Comedy",
    "Live",
    "SharkTank",
    "Bhajan",
    "Computer",
    "Short",
    "All",
  ];

  const prev = () => {
    requestAnimationFrame(() => {
      const scrollLeft = scrollRef.current.scrollLeft;
      const itemWidth = parseInt(
        getComputedStyle(scrollRef.current.children[0]).width
      );
      scrollRef.current.scrollLeft = scrollLeft - itemWidth * 3;
    });
  };

  const next = () => {
    requestAnimationFrame(() => {
      const scrollLeft = scrollRef.current.scrollLeft;
      const itemWidth = parseInt(
        getComputedStyle(scrollRef.current.children[0]).width
      );
      scrollRef.current.scrollLeft = scrollLeft + itemWidth * 3;
    });
  };

  return (
    <div className="flex sticky top-[64px] z-40 bg-white pb-2">
      <button
        className="hover:rounded-full w-10 h-10 mr-2 hover:bg-gray-100 z-50"
        onClick={prev}
      >
        <img
          src={leftScrollIcon}
          alt="leftScrollIcon"
          className="inline-block"
        />
      </button>
      <div ref={scrollRef} className="flex overflow-hidden mx-12 max-w-[86%]">
        {list.map((btnText, index) => (
          <Button name={btnText} key={index} />
        ))}
      </div>
      <button
        className="hover:rounded-full w-10 h-10 ml-2 right-20 hover:bg-gray-100 z-50"
        onClick={next}
      >
        <img src={rightScrollIcon} alt="rightScrollIcon" />
      </button>
    </div>
  );
};

export default ButtonList;
