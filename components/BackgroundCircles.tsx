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
        <div className="absolute border border-[#333333] opacity-50 rounded-full h-[250px] w-[250px] mt-60
        animate-ping" />
        <div className="border border-[#333333] rounded-full h-[350px] w-[350px] absolute mt-60 "/>
        <div className="rounded-full border border-[#333333] 
        h-[550px] w-[550px] absolute mt-60 "/>
        <div className="absolute border border-[#169137] opacity-20 rounded-full 
        h-[700px] w-[700px] mt-60 animate-pulse"/>
        <div className="absolute border border-[#333333] rounded-full 
        h-[850px] w-[850px] mt-60 "/>
    </motion.div>
  )
}

export default BackgroundCircles