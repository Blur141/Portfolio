import { Metadata } from "next";
import { profile } from "../data/portfolio";
import { BiEnvelope, BiSolidDownload } from "react-icons/bi";
import Social from "../components/shared/Social";
import Skills from "../components/pages/Skills";
import Certifications from "../components/pages/Certifications";
import Education from "../components/pages/Education";
import { Slide } from "../animation/Slide";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About | Mohammed Niyas NF",
  description:
    "Learn more about Mohammed Niyas — Linux Engineer and aspiring Cybersecurity Professional based in Dubai, UAE.",
};

export default function About() {
  return (
    <main className="relative lg:max-w-7xl mx-auto max-w-3xl md:px-16 px-4 sm:px-6 pb-16">
      <section className="relative grid lg:grid-cols-custom grid-cols-1 gap-x-10 justify-items-center">

        {/* ── Left: Bio text ── */}
        <div className="order-2 lg:order-none w-full">
          <Slide>
            <span className="inline-flex items-center gap-x-2 dark:bg-primary-bg bg-secondary-bg border dark:border-zinc-800 border-zinc-200 text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1 mb-5 sm:mb-6 dark:text-primary-color text-tertiary-color font-mono">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full dark:bg-primary-color bg-secondary-color opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 dark:bg-primary-color bg-secondary-color"></span>
              </span>
              Open to new opportunities
            </span>

            <h1 className="font-incognito font-semibold tracking-tight text-2xl sm:text-4xl lg:text-5xl lg:leading-tight basis-1/2 mb-8">
              I&apos;m {profile.fullName}. I live in {profile.location}, where I
              secure and automate the future.
            </h1>

            <div className="dark:text-zinc-400 text-zinc-600 leading-relaxed space-y-5 text-sm sm:text-[15px]">
              <p>
                I&apos;m a Linux Engineer with 2 years of hands-on experience
                managing enterprise{" "}
                <span className="dark:text-zinc-300 text-zinc-700 font-medium">
                  Oracle Linux and Ubuntu
                </span>{" "}
                environments across multi-client infrastructures in the UAE.
                My work spans keeping mission-critical systems highly available,
                automating operations with{" "}
                <span className="dark:text-zinc-300 text-zinc-700 font-medium">
                  Bash and Ansible
                </span>
                , and managing incident response through SOC and NOC workflows.
              </p>
              <p>
                My drive for security led me to build{" "}
                <strong className="dark:text-white text-zinc-800 font-semibold">
                  ORION IDS
                </strong>{" "}
                — a production-grade, full-stack Network Intrusion Detection
                System and my MSc capstone. It delivers Wireshark-grade live
                packet capture via Scapy, a stateful rule-based engine covering
                9 distinct attack vectors, and a React dashboard streaming
                real-time threat data over WebSocket at sub-100ms latency.
              </p>
              <p>
                I hold certifications in{" "}
                <span className="dark:text-zinc-300 text-zinc-700 font-medium">
                  AWS and Oracle Cloud Infrastructure
                </span>{" "}
                and am currently pursuing an{" "}
                <span className="dark:text-zinc-300 text-zinc-700 font-medium">
                  MSc in Information Security
                </span>
                . I&apos;m focused on transitioning into a
                cybersecurity-engineering role — particularly in SOC operations,
                cloud security, or infrastructure hardening.
              </p>
              <p>
                Beyond the terminal, I communicate fluently in English,
                Malayalam, Tamil, and Hindi — bridging technical and human
                contexts across diverse teams.
              </p>
            </div>
          </Slide>

          <Slide delay={0.1}>
            <Social type="social" />
          </Slide>
        </div>

        {/* ── Right: Sticky Sidebar ── */}
        <aside className="flex flex-col lg:justify-self-center justify-self-start gap-y-8 lg:order-1 order-none mb-10 sm:mb-12 w-full lg:w-auto">
          <Slide delay={0.1}>
            <div className="sticky top-10 flex flex-col gap-y-4 w-full lg:w-[300px]">

              <div className="rounded-2xl overflow-hidden dark:bg-primary-bg bg-secondary-bg border dark:border-zinc-800 border-zinc-200 w-full lg:w-[300px] h-[260px] sm:h-[320px] lg:h-[360px] relative">
                <Image
                  src="/profile.png"
                  fill
                  quality={100}
                  alt="Mohammed Niyas NF"
                  className="object-cover object-top"
                  priority
                />
              </div>

              <div className="dark:bg-primary-bg bg-secondary-bg border dark:border-zinc-800 border-zinc-200 rounded-xl px-5 py-4">
                <p className="font-incognito font-semibold text-base dark:text-white text-zinc-800">
                  Mohammed Niyas NF
                </p>
                <p className="text-sm dark:text-zinc-400 text-zinc-500 mt-0.5">
                  Linux Engineer · Cybersecurity Enthusiast
                </p>
                <div className="flex items-center gap-x-1.5 mt-2">
                  <span className="w-2 h-2 rounded-full dark:bg-primary-color bg-secondary-color flex-shrink-0"></span>
                  <span className="text-xs dark:text-primary-color text-tertiary-color font-mono">
                    Dubai, UAE
                  </span>
                </div>
              </div>

              <div className="flex items-stretch gap-x-2">
                <a
                  href={profile.resumeURL}
                  rel="noreferrer noopener"
                  target="_blank"
                  className="flex items-center justify-center gap-x-2 flex-1 dark:bg-primary-color bg-secondary-color text-zinc-900 font-incognito font-semibold rounded-xl py-3 text-sm hover:opacity-90 duration-200"
                >
                  View Resume
                </a>
                <a
                  href={profile.resumeURL}
                  download
                  title="Download Resume"
                  className="flex items-center justify-center dark:bg-primary-bg bg-secondary-bg border dark:border-zinc-800 border-zinc-200 rounded-xl px-4 dark:hover:border-zinc-700 hover:border-zinc-300 duration-200 dark:text-primary-color text-tertiary-color"
                >
                  <BiSolidDownload className="text-lg" />
                </a>
              </div>

              <a
                href={`mailto:${profile.email}`}
                className="flex items-center justify-center gap-x-2 text-sm dark:text-zinc-400 text-zinc-500 dark:bg-primary-bg bg-secondary-bg border dark:border-zinc-800 border-zinc-200 rounded-xl py-3 px-4 hover:dark:border-zinc-700 hover:border-zinc-300 hover:dark:text-white hover:text-zinc-800 duration-200"
              >
                <BiEnvelope className="text-base flex-shrink-0" />
                <span className="truncate">{profile.email}</span>
              </a>
            </div>
          </Slide>
        </aside>
      </section>

      <Skills />
      <Education />
      <Certifications />
    </main>
  );
}
