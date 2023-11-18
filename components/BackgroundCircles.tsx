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
        <div className="rounded-full absolute border border-card opacity-50  md:h-[200px] md:w-[200px] h-[150px] w-[150px] mt-52 animate-ping-custom" />
        <div className="rounded-full border border-card opacity-50  w-[250px] h-[250px] md:h-[300px] md:w-[300px] absolute mt-52 "/>
        <div className="rounded-full  border border-card opacity-50  h-[450px] w-[450px] md:h-[500px] md:w-[500px] absolute mt-52 "/>
        <div className="rounded-full absolute border border-[#169137] opacity-20 h-[600px] w-[600px] md:h-[650px] md:w-[650px] mt-52 animate-pulse"/>
        <div className="rounded-full absolute border border-card opacity-50  h-[750px] w-[750px] md:h-[800px] md:w-[800px] mt-52 "/>
    </motion.div>
  )
}

export default BackgroundCircles