import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type Props = {
  profilePicture: string;
};

function BackgroundCircles({ profilePicture }: Props) {
  return (
    <div className="relative inset-0 flex justify-center items-center z-0">
      <Image
        className="rounded-full h-32 w-32 object-cover z-10"
        src={profilePicture}
        alt="profile picture"
        width={128}
        height={128}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          scale: [1, 2, 2, 3, 1],
          opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
          borderRadius: ["20%", "20%", "50%", "80%", "20%"],
        }}
        transition={{ duration: 2.5 }}
        className="absolute flex justify-center items-center"
      >
        {/* Rings */}
        <div className="rounded-full border dark:border-card border-cardLight dark:opacity-50 opacity-100 animate-ping-custom h-[150px] w-[150px] absolute" />
        <div className="rounded-full border dark:border-card border-cardLight dark:opacity-50 opacity-100 w-[250px] h-[250px] absolute" />
        <div className="rounded-full border dark:border-card border-cardLight dark:opacity-50 opacity-100 h-[450px] w-[450px] absolute" />
        <div className="rounded-full border border-[#169137] opacity-20 h-[600px] w-[600px] animate-pulse absolute" />
        <div className="rounded-full border dark:border-card border-cardLight dark:opacity-50 opacity-100 h-[750px] w-[750px] absolute" />
      </motion.div>
    </div>
  );
}

export default BackgroundCircles;
