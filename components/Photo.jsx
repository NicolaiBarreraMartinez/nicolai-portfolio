"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
    return (
        <div className="w-full h-full flex items-center justify-center relative">
            <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1, transition: { delay: 0.5, duration: 0.4, ease: "easeInOut" }}}
            >
                {/* Circle with Animation */}
                <motion.svg className="w-[250px] h-[250px] xl:w-[400px] xl:h-[400px]" fill="transparent" viewBox="0 0 506 506" xmlns="http://www.w3.org/2000/svg"  style={{ zIndex: 1 }}>
                    <motion.circle 
                        className="z-2"
                        cx="253" 
                        cy="253" 
                        r="250" 
                        stroke="#FF7A29" 
                        strokeWidth="10" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        initial={{ strokeDasharray: "24 10 0 0" }} 
                        animate={{ strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"], rotate: [120, 360] }} 
                        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }} 
                        
                    />
                </motion.svg>

                {/* Photo */}
                <motion.div 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1, transition: { delay: 0.5, duration: 0.4, ease: "easeIn" }}}
                    className="absolute inset-0 flex items-center justify-center mix-blend-lighten z-10" 
                >
                    <Image
                        src="/assets/Asunto.png"
                        priority
                        quality={100}
                        fill
                        alt=""
                        className="object-cover rounded-full w-[100%] h-[100%]" 
                    />
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Photo;

