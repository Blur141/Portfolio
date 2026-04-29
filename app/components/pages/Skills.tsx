import { skills } from "../../data/portfolio";
import { Slide } from "../../animation/Slide";

export default function Skills() {
  return (
    <section className="mt-20">
      <Slide delay={0.14}>
        <h2 className="font-incognito text-4xl sm:text-[3rem] mb-4 font-normal tracking-tight uppercase dark:text-zinc-300 text-zinc-700">
          Technical Skills
        </h2>
      </Slide>

      <Slide delay={0.16}>
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 mt-8">
          {skills.map((skill, i) => (
            <div
              key={i}
              className="dark:bg-primary-bg bg-secondary-bg border dark:border-zinc-800 border-zinc-200 rounded-xl p-5 hover:dark:border-zinc-700 hover:border-zinc-300 duration-300"
            >
              <h3 className="font-incognito font-semibold text-sm tracking-widest uppercase dark:text-zinc-400 text-zinc-500 mb-3">
                {skill.category}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <li
                    key={item}
                    className="text-xs sm:text-sm font-mono dark:bg-zinc-800 bg-zinc-100 dark:text-primary-color text-tertiary-color border dark:border-zinc-700 border-zinc-200 px-2 sm:px-3 py-1 rounded-full"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Slide>
    </section>
  );
}
