import { styles } from "../style";
import { project } from "../assets";
import { skills } from "../assets";
import IconButton from "@mui/material/IconButton";

function Projects() {

  return (
    <section className="relative w-full py-24 sm:py-28 md:py-32">
      <div className={`${styles.paddingX} max-w-7xl mx-auto flex flex-col gap-8`}>
        <h1 className={`${styles.sectionHeadText} text-white text-center md:text-left`}>
          Projects
        </h1>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-8">
          {
            [
              {
                img: project.dinogame,
                title: "Dino Game",
                tech: "HTML, Tailwind, React, Firebase",
                github: "https://github.com/Sru318/t-rex",
                live: "https://t-rexgame.web.app/",
                liveIcon: skills.firebase,
              },
              {
                img: project.netflix,
                title: "Movie App",
                tech: "HTML, Tailwind, JavaScript",
                github: "https://github.com/Sru318/movieapp",
                live: "https://react-netflix-cloning.vercel.app/",
                liveIcon: skills.vercel,
              },
              {
                img: project.bmi,
                title: "BMI Calculator",
                tech: "HTML, Tailwind, JavaScript",
                github: "https://github.com/Sru318/BMI-calculator",
                live: "https://bmi-calculator-eight-sepia.vercel.app/",
                liveIcon: skills.vercel,
              },
              {
                img: project.spotify,
                title: "Spotify Clone",
                tech: "HTML, CSS3",
                github: "https://github.com/Sru318/spotify_clone",
                live: "https://spotifyclone-green.vercel.app/",
                liveIcon: skills.vercel,
              },
            ].map((project, index) => (
              <div
                key={index}
                className="group flex justify-center [perspective:1000px]">
                <div
                className="
              relative
              h-[300px] w-full max-w-[320px]  
              sm:h-[320px] sm:max-w-[360px]
              md:h-[340px] md:max-w-[320px]
              lg:h-[360px] lg:max-w-[380px]
              border  border-[#374151]
              rounded-xl shadow-[0_0_155px_#111827]
              transition-all duration-500
              [transform-style:preserve-3d]
              group-hover:[transform:rotateY(180deg)]
              ">
                  {/* FRONT */}
                  <div className="absolute inset-0 rounded-xl overflow-hidden [backface-visibility:hidden]">
                    <img
                      src={project.img}
                      alt={project.title}
                      className="h-[65%] w-full object-cover opacity-85 "
                    />

                    <div className="h-[35%] px-4 py-3 bg-black/80 text-center opacity-85">
                      <p className="text-lg sm:text-xl font-bold text-white">
                        {project.title}
                      </p>
                      <p className="text-xs sm:text-sm text-gray-300 mt-1">
                        Tech Stack: {project.tech}
                      </p>
                    </div>
                  </div>

                  {/* BACK */}
                  <div
                    className="
                absolute inset-0 rounded-xl bg-black/90
                px-6 text-slate-200
                [transform:rotateY(180deg)]
                [backface-visibility:hidden]">
                    <div className="flex h-full flex-col items-center justify-center gap-6">
                      <h2 className="text-lg sm:text-xl font-bold">
                        {project.title}
                      </h2>

                      <div className="flex gap-8">
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <IconButton
                            sx={{
                              backgroundColor: "transparent",
                              animation: "pulseGlow 3s ease-in-out infinite",
                            }}
                          >
                            <img src={skills.github} alt="GitHub" className="w-9 h-9 sm:w-10 sm:h-10" />
                          </IconButton>
                        </a>

                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                          <IconButton
                            sx={{
                              backgroundColor: "transparent",
                              animation: "pulseGlow 3s ease-in-out infinite",
                            }}
                          >
                            <img src={project.liveIcon} alt="Live" className="w-9 h-9 sm:w-10 sm:h-10" />
                          </IconButton>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  );
}

export default Projects;
