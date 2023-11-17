import React from 'react'
import {motion} from 'framer-motion'

type Props = {}

function BackgroundCircles({}: Props) {
  return (
    <motion.div
    initial={{
        opacity:0
    }}
    animate={{
        scale: [1,2,2,3,1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius:["20%", "20%", "50%", "80%", "20%"]
    }}
    transition={{
        duration:2.5
    }}
    className="relative flex justify-center items-center">
        <div className="absolute border border-[#333333] opacity-50 rounded-full md:h-[250px] md:w-[250px]
        h-[150px] w-[150px] mt-60
        animate-ping" />
        <div className="border border-[#333333] rounded-full w-[250px] h-[250px] md:h-[350px] md:w-[350px] absolute mt-60 "/>
        <div className="rounded-full border border-[#333333] h-[450px] w-[450px]
        md:h-[550px] md:w-[550px] absolute mt-60 "/>
        <div className="absolute border border-[#169137] opacity-20 rounded-full h-[600px] w-[600px]
        md:h-[700px] md:w-[700px] mt-60 animate-pulse"/>
        <div className="absolute border border-[#333333] rounded-full h-[750px] w-[750px]
        md:h-[850px] md:w-[850px] mt-60 "/>
    </motion.div>
  )
}

export default BackgroundCircles