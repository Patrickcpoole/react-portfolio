import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import { PageInfo } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  pageInfo: PageInfo;
};

function Hero({ pageInfo }: Props) {
  const profilePicture = urlFor(pageInfo?.aboutImage).url();
  const [text] = useTypewriter({
    words: [...pageInfo["typewriter"]],
    loop: true,
    typeSpeed: 70,
    delaySpeed: 700,
  });
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center md:space-y-8 overflow-hidden w-full">
      <BackgroundCircles profilePicture={profilePicture} />
      <div className="z-20 relative">
        <h2 className="text-sm uppercase text-heading pb-2 tracking-[15px] my-10 md:my-0">
          {pageInfo?.role}
        </h2>
        <div className="z-20">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold px-10 h-32 md:h-24">
            <span className="mr-3">{text}</span>
            <Cursor cursorColor="#169137" />
          </h1>
        </div>

        <div className="grid grid-rows-3 grid-cols-1 md:flex md:flex-wrap md:justify-center md:items-center md:mt-5 mt-24 w-fullrelative">
          <Link href="#about">
            <button className="row-start-1 mx-4 border-[#169137]/40 dark:border-[#169137]/40 bg-[#169137]/40 px-6 py-2 border z-50 bg-white rounded-full uppercase text-xs tracking-widest transition-all dark:hover:border-[#169137]/40 hover:border-[#169137] hover:text-[#FFF] dark:hover:bg-[#169137]/40 hover:bg-[#169137] mt-2 md:mt-0">
              About
            </button>
          </Link>
          <div>
            <Link href="#experience">
              <button className="row-start-2 md:mx-4  border-[#169137]/40 dark:border-[#169137]/40 bg-[#169137]/40 px-6 py-2 border z-50 bg-white rounded-full uppercase text-xs tracking-widest transition-all dark:hover:border-[#169137]/40 hover:border-[#169137] hover:text-[#FFF] dark:hover:bg-[#169137]/40 hover:bg-[#169137] mt-2 md:mt-0">
                Experience
              </button>
            </Link>
            <Link href="#projects">
              <button className="row-start-2 mx-4 border-[#169137]/40 dark:border-[#169137]/40 bg-[#169137]/40 px-6 py-2 border z-50 bg-white rounded-full uppercase text-xs tracking-widest transition-all dark:hover:border-[#169137]/40 hover:border-[#169137] hover:text-[#FFF] dark:hover:bg-[#169137]/40 hover:bg-[#169137] mt-2 md:mt-0">
                Projects
              </button>
            </Link>
          </div>
          <Link href="#skills">
            <button className="row-start-3 mx-4 border-[#169137]/40 dark:border-[#169137]/40 bg-[#169137]/40 px-6 py-2 border z-50 bg-white rounded-full uppercase text-xs tracking-widest transition-all dark:hover:border-[#169137]/40 hover:border-[#169137] hover:text-[#FFF] dark:hover:bg-[#169137]/40 hover:bg-[#169137] mt-2 md:mt-0">
              Skills
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
