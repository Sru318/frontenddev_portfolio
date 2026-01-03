import React from 'react'
import { styles } from '../style'
import { connects } from "../assets"
import IconButton from '@mui/material/IconButton';
import { BorderBeam } from "../components/lightswind/border-beam"

function Contact() {
  const connect = [
    {
      name: "Email",
      icon: connects.gmail,
      link: "mailto:sru318@gmail.com",
    },
    {
      name: "GitHub",
      icon: connects.github,
      link: "https://github.com/Sru318",
    },
    {
      name: "LinkedIn",
      icon: connects.linkedin,
      link: "https://www.linkedin.com/in/sruthy-ns",
    },
    {
      name: "Vercel",
      icon: connects.vercel,
      link: "https://vercel.com/sruthy-n-ss-projects",
    },

  ];

  return (
    <section className="relative w-full py-24 sm:py-28 md:py-32" id="contact" >
      <div className={`${styles.paddingX} max-w-7xl mx-auto flex flex-col gap-8`}>
        <h1 className={`${styles.sectionHeadText} text-white text-center md:text-left`}>
          Contact me here
        </h1>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {connect.map(({ name, icon, link }) => (
            <a
              key={name}
              href={link}
              target={name !== "Email" ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="p-3 flex flex-col items-center justify-center gap-3 text-center group"
            >

              <IconButton
                aria-label={name}
                sx={{
                  color: "#006400",
                  backgroundColor: "#000000",
                  animation: "rotateGlow 3s ease-in-out infinite",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.15)",
                  },
                }}
              >
                <img
                  src={icon}
                  alt={name}
                  className="w-7 h-7"
                  style={{
                    animation: "rotateImg 3s linear infinite",
                  }}
                />

              </IconButton>

              <h3 className="text-white font-semibold text-[18px] uppercase group-hover:text-violet-400 transition">
                {name}
              </h3>
            </a>
          ))}
        </div>
      </div>
    </section>

  )
}

export default Contact
