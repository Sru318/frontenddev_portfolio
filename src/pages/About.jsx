import React from 'react'
import { styles } from '../style'
import IconButton from '@mui/material/IconButton';
import DataObjectSharpIcon from "@mui/icons-material/DataObjectSharp";
import TerminalIcon from '@mui/icons-material/Terminal';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';

function About() {
    return (
        <section className="relative w-full py-24 sm:py-28 md:py-32 " id='about'>
            <div className={`${styles.paddingX} max-w-7xl mx-auto`}>
                <h1 className={`${styles.sectionHeadText} text-white text-center md:text-left`}>
                    About Me
                </h1>

                <div className="mt-8 flex flex-col gap-6 sm:gap-8 md:flex-row md:gap-12">
                    <div className="flex-1">
                        <h3 className="text-[18px] sm:text-[22px] md:text-[24px] bg-gradient-to-r from-[#915EFF] via-[#C77DFF] to-[#5A3FFF] bg-clip-text text-transparent">
                            Who am I
                        </h3>
                        <p className={`${styles.sectionText} text-white-100 mt-3`}>
                            I am a motivated web frontend developer who loves crafting responsive,
                            user-centric websites. With a strong foundation in front-end
                            development and a growing passion for UI/UX design, I focus on creating
                            clean, functional, and visually appealing digital experiences.
                            <br />
                            <span className="text-[#915eff] font-medium">
                                Always learning, always building.
                            </span>
                        </p>
                    </div>

                    <div className="flex-1">
                        <h3 className="text-[18px] sm:text-[22px] md:text-[24px] bg-gradient-to-r from-[#915EFF] via-[#C77DFF] to-[#5A3FFF] bg-clip-text text-transparent">
                            What I bring
                        </h3>
                        <div className="mt-3 flex items-center gap-5">
                            <IconButton
                                aria-label="code"
                                sx={{
                                    color: "#006400",
                                    backgroundColor: "#000000",
                                    animation: "pulseGlow 2s ease-in-out infinite",
                                    "&:hover": {
                                        animation: "pulseGlow 1.2s ease-in-out infinite",
                                        transform: "scale(1.1)",
                                    },
                                    transition: "transform 0.3s ease",
                                }}
                            >
                                <DataObjectSharpIcon fontSize="medium" />
                            </IconButton>
                            <p className={`${styles.sectionText} text-white-100`}>
                                Strong foundation in Frondend Development.
                            </p>
                        </div>
                        <div className="mt-4 flex items-center gap-5">
                            <IconButton
                                aria-label="code"
                                sx={{
                                    color: "red",
                                    backgroundColor: "#000000",
                                    animation: "pulseGlow 2s ease-in-out infinite",
                                    "&:hover": {
                                        animation: "pulseGlow 1.2s ease-in-out infinite",
                                        transform: "scale(1.1)",
                                    },
                                    transition: "transform 0.3s ease",
                                }}
                            >
                                <TerminalIcon fontSize="medium" />
                            </IconButton>
                            <p className={`${styles.sectionText} text-white-100`}>
                               Practical experinece with ReactJS,Javascript,CSS and Tailwind.
                            </p>
                        </div>
                        <div className="mt-4 flex items-center gap-5">
                            <IconButton
                                aria-label="code"
                                sx={{
                                    color: "yellow",
                                    backgroundColor: "#000000",
                                    animation: "pulseGlow 2s ease-in-out infinite",
                                    "&:hover": {
                                        animation: "pulseGlow 1.2s ease-in-out infinite",
                                        transform: "scale(1.1)",
                                    },
                                    transition: "transform 0.3s ease",
                                }}
                            >
                                <TipsAndUpdatesIcon fontSize="medium" />
                            </IconButton>
                            <p className={`${styles.sectionText} text-white-100`}>
                               Creative thinking,adaptability and constant learning attitude.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default About
