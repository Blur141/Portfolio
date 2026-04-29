import { projects } from "../../data/portfolio";
import { Slide } from "../../animation/Slide";
import { BiLogoGithub } from "react-icons/bi";

export default function Projects() {
  return (
    <section className="mt-32" id="projects">
      <Slide delay={0.16}>
        <div className="mb-16">
          <h2 className="font-incognito text-4xl sm:text-[3rem] mb-4 font-normal tracking-tight uppercase dark:text-zinc-300 text-zinc-700">
            Technical Implementations
          </h2>
        </div>
      </Slide>

      <Slide delay={0.18}>
        {/* Single column — one project below the other */}
        <div className="flex flex-col gap-y-6 sm:gap-y-8">
          {projects.map((project) => (
            <div
              key={project._id}
              className="dark:bg-primary-bg bg-secondary-bg border dark:border-zinc-800 border-zinc-200 rounded-xl p-5 sm:p-6 hover:dark:border-zinc-700 hover:border-zinc-300 duration-300 flex flex-col"
            >
              <div className="flex items-start justify-between gap-x-3 gap-y-3 flex-wrap mb-4">
                <div className="min-w-0">
                  <div className="flex items-center gap-x-2 sm:gap-x-3 flex-wrap gap-y-2">
                    <h3 className="font-incognito text-xl sm:text-2xl font-semibold tracking-tight">
                      {project.name}
                    </h3>
                    <span className="text-xs font-mono dark:bg-zinc-800 bg-zinc-100 dark:text-primary-color text-tertiary-color border dark:border-zinc-700 border-zinc-200 px-2 py-0.5 rounded-full whitespace-nowrap">
                      {project.badge}
                    </span>
                  </div>
                  <p className="dark:text-zinc-400 text-zinc-500 text-sm mt-1">
                    {project.tagline}
                  </p>
                </div>
                <a
                  href={project.projectUrl}
                  rel="noreferrer noopener"
                  target="_blank"
                  className="flex items-center gap-x-2 text-sm dark:bg-zinc-800 bg-zinc-100 border dark:border-zinc-700 border-zinc-200 rounded-md px-3 py-1.5 dark:hover:border-zinc-600 hover:border-zinc-300 duration-200 whitespace-nowrap flex-shrink-0"
                >
                  <BiLogoGithub className="text-lg" />
                  View on GitHub
                </a>
              </div>

              <ul className="mt-3 sm:mt-4 space-y-2 mb-5 sm:mb-6 flex-1">
                {project.highlights.map((point, i) => (
                  <li
                    key={i}
                    className="tracking-tight dark:text-zinc-400 text-zinc-600 flex gap-x-2 text-sm leading-relaxed"
                  >
                    <span className="dark:text-primary-color text-tertiary-color mt-0.5 flex-shrink-0">›</span>
                    {point}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 pt-4 border-t dark:border-zinc-800 border-zinc-200 mt-auto">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono dark:bg-zinc-800 bg-zinc-100 dark:text-zinc-300 text-zinc-600 border dark:border-zinc-700 border-zinc-200 px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <a
            href="https://github.com/Blur141"
            target="_blank"
            rel="noreferrer noopener"
            className="flex items-center gap-x-2 dark:bg-zinc-800 bg-zinc-100 border border-transparent dark:hover:border-zinc-700 hover:border-zinc-200 rounded-md py-3 px-6 text-base sm:text-lg font-incognito font-semibold duration-200"
          >
            <BiLogoGithub className="text-xl" />
            More Works on GitHub
          </a>
        </div>
      </Slide>
    </section>
  );
}
