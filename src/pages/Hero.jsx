import React from 'react'
import { styles } from '../style'
import DownloadForOfflineRoundedIcon from '@mui/icons-material/DownloadForOfflineRounded';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import img from "../assets/img.jpg"



function Hero() {
  return (
    <section className='relative w-full h-screen mx-auto' id="hero">
      <div className={`${styles.paddingX} absolute top-[120px] inset-0 flex flex-row gap-5 items-start max-w-7xl`}>
        <div className='max-w-2xl '>
          <h1 className={`${styles.heroHeadText} text-white hover:cursor-pointer `}>Hi,I'm <span className='text-[#915eff]'>SRUTHY N.S </span></h1>
          <div className="flex flex-col items-center text-center gap-6 mt-7 md:flex-row md:items-center md:text-left lg:gap-8">
            <div className="inline-flex p-[3px] sm:p-[3px] md:p-[4px] lg:p-[5px] rounded-full violet-gradient hover:shadow-[0_0_20px_#915eff]
                transition-all duration-300 hover:scale-105 lg:hover:shadow-[0_0_30px_#915eff]  " >
              <Avatar alt="Remy Sharp" src={img} sx={{
                width: { xs: 160, sm: 200, md: 240 ,lg:240},
                height: { xs: 160, sm: 200, md: 240 ,lg:240 },
              }} />
            </div>
            <div className='w-full max-w-xl'>
              <h3 className={`${styles.heroSubText}  mt-2 bg-gradient-to-r from-[#915EFF] via-[#C77DFF] to-[#5A3FFF] bg-clip-text text-transparent`}>Webdeveloper</h3>
              <p className={`${styles.sectionText} text-wrap text-white-100 mt-2 text-justify mx-w-full sm:max-w-[520px] mx-auto md:mx-0`}>A Passionate Web Developer crafting modern, responsive, and user-friendly web experiences. </p>
              <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:justify-center md:justify-start ">
                <Button variant="outlined" color="success" startIcon={<DownloadForOfflineRoundedIcon />}
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto">
                  See my Resume
                </Button>
                <Button variant="outlined" href="#contact" color="secondary" className='w-full sm:w-auto'>
                  Connect me
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

