import React from "react";
import { motion } from "framer-motion";
import { PageInfo } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  pageInfo: PageInfo;
};

function About({ pageInfo }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="min-h-screen flex flex-col relative text-center 
    md:text-left max-w-7xl px-10 justify-center mx-auto items-start"
    >
      <h3 className="section-heading md:mt-0">About</h3>
      <div className="md:flex-row flex-col flex  justify-center  items-center w-full ">
        <motion.img
          initial={{
            x: -200,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1.2,
          }}
          viewport={{ once: true }}
          src={urlFor(pageInfo?.aboutImage).url()}
          alt="about image"
          className="flex-shrink-0 w-56 my-5 h-56 rounded-md object-cover md:rounder-lg md:w-64 md:h-64
      xl:w-[400px] xl:h-[400px] text-heading"
        />
        <div className="md:space-y-10 px-0 md:px-10">
          <h4 className="text-2xl md:text-5xl font-semibold mb-5 ">
            Here is a{" "}
            <span className="underline decoration-accent">little</span>{" "}
            background
          </h4>
          <p className="text-base md:text-xl">{pageInfo.about}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
