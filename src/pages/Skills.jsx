import React from 'react'
import { styles } from '../style'
import { skills } from "../assets"
import IconButton from '@mui/material/IconButton';


function Skills() {
    let skill = Object.entries(skills).slice(0, 10);
    return (
        <section className="relative w-full py-24 sm:py-28 md:py-32">
            <div className={`${styles.paddingX} max-w-7xl mx-auto flex flex-col gap-8`}>
                <h1 className={`${styles.sectionHeadText} text-white text-center md:text-left`}>
                    Skills
                </h1>
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 ">
                    {skill.map(([name, icon]) => (
                        <div
                            key={name}
                            className="p-6 border border-white/10 bg-gray-900 backdrop-blur-md bg-opacity-25
                            hover:shadow-[0_0_20px_#915eff] hover:border-violet-500
                            hover:scale-105 transition-all duration-300
                            flex flex-col items-center justify-center gap-3 text-center">
                            <IconButton aria-label="code" 
                            sx={{ color: "#006400",
                            backgroundColor: "#000000",
                            animation: "pulseGlow 3s ease-in-out infinite",
                            transition: "transform 0.3s ease", }} >
                            <img src={icon} alt={name} className="w-10 h-10" />
                            </IconButton>
                            <h3 className="text-white font-semibold text-[18px] uppercase">
                                {name}
                            </h3>
                        </div>
                    ))
                    }
                </div>
            </div>
        </section>

    )
}

export default Skills

