import { education } from "../../data/portfolio";
import { Slide } from "../../animation/Slide";
import { BiBookOpen } from "react-icons/bi";

export default function Education() {
  return (
    <section className="mt-16 sm:mt-20" id="education">
      <Slide delay={0.14}>
        <h2 className="font-incognito text-3xl sm:text-4xl md:text-[3rem] 2xl:text-[3.5rem] mb-4 font-normal tracking-tight uppercase dark:text-zinc-300 text-zinc-700">
          Education
        </h2>
      </Slide>

      <Slide delay={0.16}>
        <div className="flex flex-col gap-y-4 sm:gap-y-6 mt-6 sm:mt-8 max-w-3xl 2xl:max-w-4xl">
          {education.map((edu) => (
            <div
              key={edu.id}
              className="flex items-start gap-x-3 sm:gap-x-4 dark:bg-primary-bg bg-secondary-bg border dark:border-zinc-800 border-zinc-200 rounded-xl p-4 sm:p-6 hover:dark:border-zinc-700 hover:border-zinc-300 duration-300"
            >
              <span className="grid place-items-center dark:bg-zinc-800 bg-zinc-100 border dark:border-zinc-700 border-zinc-200 rounded-md p-1.5 sm:p-2 mt-0.5 flex-shrink-0">
                <BiBookOpen className="text-base sm:text-xl dark:text-primary-color text-tertiary-color" />
              </span>
              <div className="min-w-0">
                <div className="flex items-center gap-x-2 sm:gap-x-3 flex-wrap gap-y-1 mb-1">
                  <h3 className="font-incognito font-semibold text-base sm:text-lg 2xl:text-xl leading-snug">
                    {edu.degree}
                  </h3>
                  {edu.status === "In Progress" && (
                    <span className="text-xs font-mono dark:bg-zinc-800 bg-zinc-100 dark:text-primary-color text-tertiary-color border dark:border-zinc-700 border-zinc-200 px-2 py-0.5 rounded-full whitespace-nowrap">
                      In Progress
                    </span>
                  )}
                </div>
                <p className="dark:text-zinc-400 text-zinc-500 text-xs sm:text-sm">{edu.institution}</p>
                <time className="text-xs text-zinc-500 mt-1 tracking-widest uppercase block">
                  {edu.startYear} – {edu.endYear}
                </time>
                <p className="dark:text-zinc-500 text-zinc-400 text-xs sm:text-sm mt-2 sm:mt-3 leading-relaxed">
                  {edu.coursework}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Slide>
    </section>
  );
}
