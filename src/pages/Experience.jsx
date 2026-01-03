import { styles } from '../style'
import { company } from "../assets"
import Avatar from '@mui/material/Avatar';
import { BorderBeam } from "../components/lightswind/border-beam"


function Experience() {

  return (
    <section className="relative w-full py-24 sm:py-28 md:py-32">
      <div className={`${styles.paddingX} max-w-7xl mx-auto flex flex-col gap-8`}>
        <h1 className={`${styles.sectionHeadText} text-white text-center md:text-left`}>
          Experience
        </h1>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="p-6 border border-gray-950 rounded-xl bg-gray-900 backdrop-blur-md
                            flex flex-col gap-6 items-center text-center bg-opacity-25
                            mt-7 md:flex-row md:items-center md:text-left lg:gap-4">
            <BorderBeam
              colorFrom="#a21c05"
              colorTo="#ec2907"
              size={250}
              duration={6}
              borderThickness={10}
              glowIntensity={5}
            />
            <Avatar alt="Remy Sharp" src={company.jobinandjismi}
              sx={{
                width: { xs: 60, sm: 80, md: 100, lg: 100 },
                height: { xs: 60, sm: 80, md: 100, lg: 100 },
                bgcolor: "white",
              }}
              imgProps={{
                style: {
                  objectFit: "contain",
                }
              }} />
            <div className="flex flex-col gap-1">
              <p className={`${styles.sectionText} text-sm text-violet-400`}>
                1.2 Years
              </p>
              <p className="text-white font-semibold leading-snug">
                System Engineer Trainee
              </p>
              <p className={`${styles.sectionText} text-white-100`}>
                (Python, SuiteScript) <br /> Jobin & Jismi IT Services<br/>(May 2023 - Jul 2024)
              </p>
            </div>
          </div>
          {/* second experience */}
          <div className="p-6 border border-gray-950 rounded-xl bg-gray-900 backdrop-blur-md
                            flex flex-col gap-6 items-center text-center bg-opacity-25
                            mt-7 md:flex-row md:items-center md:text-left lg:gap-4">
            <BorderBeam
              colorFrom="#22c55e"
              colorTo="#10b981"
              size={250}
              duration={6}
              borderThickness={10}
              glowIntensity={5}
            />
            <Avatar alt="Remy Sharp" src={company.innovation}
              sx={{
                width: { xs: 60, sm: 80, md: 100, lg: 100 },
                height: { xs: 60, sm: 80, md: 100, lg: 100 },
                bgcolor: "white",
              }}
              imgProps={{
                style: {
                  objectFit: "contain",
                }
              }}

            />
            <div className="flex flex-col gap-1">
              <p className={`${styles.sectionText} text-sm text-violet-400`}>
                4 Months
              </p>
              <p className="text-white font-semibold leading-snug">
                UI/UX Developer intern
              </p>
              <p className={`${styles.sectionText} text-white-100`}>
                ui/ux developer(Webflow) <br /> Innovation Incubator Advisory,TVM<br/>(Dec 2022 - Apr 2023)
              </p>
            </div>
          </div>
          {/* Third experience */}
          <div className="p-6 border border-gray-950 rounded-xl bg-gray-900 backdrop-blur-md
                            flex flex-col gap-6 items-center text-center bg-opacity-25
                            mt-7 md:flex-row md:items-center md:text-left lg:gap-4">
            <BorderBeam
              colorFrom="#7400ff"
              colorTo="#9b41ff"
              size={250}
              duration={6}
              borderThickness={10}
              glowIntensity={5}
            />
            <Avatar alt="Remy Sharp" src={company.tcs}
              sx={{
                width: { xs: 60, sm: 80, md: 100, lg: 100 },
                height: { xs: 60, sm: 80, md: 100, lg: 100 },
                bgcolor: "white",
              }}
              imgProps={{
                style: {
                  objectFit: "contain",
                }
              }} />
            <div className="flex flex-col gap-1">
              <p className={`${styles.sectionText} text-sm text-violet-400`}>
                3 Years
              </p>
              <p className="text-white font-semibold leading-snug">
                System Engineer (Technical Spoc and Noc admin)
              </p>
              <p className={`${styles.sectionText} text-white-100`}>
                 TCS,Kochi <br/>(Aug 2019 - Aug 2022)
              </p>
            </div>
          </div>


        </div>

      </div>
    </section>
  )
}

export default Experience
