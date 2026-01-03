import { styles } from '../style'

function Education() {
  return (
    <section className="relative w-full py-24 sm:py-28 md:py-32">
      <div className={`${styles.paddingX} max-w-7xl mx-auto flex flex-col gap-8`}>
        <h1 className={`${styles.sectionHeadText} text-white text-center md:text-left`}>
          Education
        </h1>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="">
            <div className="relative w-full max-w-xl">
              <div className="absolute inset-0 h-full w-full scale-[0.80] transform rounded-full bg-red-500 bg-gradient-to-r from-blue-500 to-teal-500 blur-3xl" />
              <div className="relative flex h-full flex-col items-start 
              justify-end overflow-hidden rounded-2xl border 
              border-opacity-15 border-gray-800 bg-gray-900 px-4 py-8 shadow-xl
               hover:border-gray-800 hover:scale-110 transition-all duration-300">
                <p className="font-semibold leading-snug text-violet-400">
                  BTech(Honors),Computer Science & Engineering
                </p>
                <p className={`${styles.sectionText}text-white `}>
                  Vidya Academy of Science and Technology
                </p>
                <p className={`${styles.sectionText} text-white-100`}>
                  KTU,June 2016 – May 2019 <br /> CGPA : 8.46
                </p>
              </div>
            </div>
          </div>
          <div className="">
            <div className="relative w-full max-w-xl">
              <div className="absolute inset-0 h-full w-full scale-[0.80] transform rounded-full bg-red-500 bg-gradient-to-r from-blue-500 to-teal-500 blur-3xl" />
              <div className="relative flex h-full flex-col items-start justify-end overflow-hidden rounded-2xl border 
              border-opacity-15 border-gray-800 bg-gray-900 px-4 py-8 shadow-xl
               hover:border-gray-800 hover:scale-110 transition-all duration-300">
                <p className="font-semibold leading-snug text-violet-400">
                  Diploma in Computer Engineering
                </p>
                <p className={`${styles.sectionText}text-white `}>
                  MTI,Thrissur
                </p>
                <p className={`${styles.sectionText} text-white-100`}>
                  Kerala Board of Technical Education,June 2013 – May 2016 <br /> CGPA : 8.92
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
