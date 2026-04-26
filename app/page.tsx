import { profile, areasOfInterest } from "./data/portfolio";
import HeroSvg from "./icons/HeroSvg";
import Job from "./components/pages/Job";
import Projects from "./components/pages/Projects";
import Contact from "./components/pages/Contact";
import Social from "./components/shared/Social";
import WhatIDo from "./components/pages/WhatIDo";
import { Slide } from "./animation/Slide";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto md:px-16 px-6 lg:mt-32 mt-20">
      {/* ── Hero ── */}
      <section className="flex xl:flex-row flex-col xl:items-center items-start xl:justify-center justify-between gap-x-12 mb-16">
        <div className="lg:max-w-2xl max-w-2xl">
          <Slide>
            {profile.availableForWork && (
              <span className="inline-flex items-center gap-x-2 dark:bg-primary-bg bg-secondary-bg border dark:border-zinc-800 border-zinc-200 text-sm rounded-full px-4 py-1 mb-6 dark:text-primary-color text-tertiary-color font-mono">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full dark:bg-primary-color bg-secondary-color opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 dark:bg-primary-color bg-secondary-color"></span>
                </span>
                Available for opportunities
              </span>
            )}
            <h1 className="font-incognito font-semibold tracking-tight text-3xl sm:text-5xl mb-6 lg:leading-[3.7rem] leading-tight lg:min-w-[700px] min-w-full">
              Linux Engineer &amp; <br />
              <span className="dark:text-primary-color text-secondary-color">
                Cybersecurity Enthusiast
              </span>{" "}
              based in Dubai, UAE.
            </h1>
            <p className="text-base dark:text-zinc-400 text-zinc-600 leading-relaxed">
              {profile.shortBio}
            </p>
          </Slide>

          <Slide delay={0.1}>
            <Social type="social" />
          </Slide>
        </div>

        <Slide delay={0.14}>
          <HeroSvg />
        </Slide>
      </section>

      {/* ── What I Do ── */}
      <WhatIDo />

      {/* ── Work Experience ── */}
      <Job />

      {/* ── Projects ── */}
      <Projects />

      {/* ── Areas of Interest ── */}
      <section className="mt-32">
        <Slide delay={0.16}>
          <h2 className="font-incognito text-4xl sm:text-[3rem] mb-4 font-normal tracking-tight uppercase dark:text-zinc-300 text-zinc-700">
            Areas of Interest
          </h2>
        </Slide>
        <Slide delay={0.18}>
          <div className="flex flex-wrap gap-3 mt-8">
            {areasOfInterest.map((area, i) => (
              <span
                key={i}
                className="font-mono text-sm dark:bg-primary-bg bg-secondary-bg border dark:border-zinc-800 border-zinc-200 rounded-full px-4 py-1.5 dark:text-zinc-300 text-zinc-600"
              >
                {area}
              </span>
            ))}
          </div>
        </Slide>
      </section>

      {/* ── Contact ── */}
      <Contact />
    </main>
  );
}
