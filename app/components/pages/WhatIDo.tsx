"use client";
import { Slide } from "../../animation/Slide";
import {
  SiLinux, SiUbuntu, SiRedhat, SiAnsible, SiGnubash, SiOracle,
  SiAmazonaws, SiPython, SiFastapi, SiReact, SiDocker, SiGit, SiWireshark,
} from "react-icons/si";
import { BiShield, BiNetworkChart, BiCloud, BiCodeAlt } from "react-icons/bi";
import { HiServer } from "react-icons/hi";

const services = [
  {
    number: "01",
    title: "{ Linux\u00a0Infrastructure }",
    subtitle: "Enterprise-grade OS administration and hardening.",
    items: [
      { name: "Oracle Linux", icon: SiOracle },
      { name: "Ubuntu Server", icon: SiUbuntu },
      { name: "RHEL", icon: SiRedhat },
      { name: "Bash Scripting", icon: SiGnubash },
      { name: "Ansible", icon: SiAnsible },
      { name: "Server Hardening", icon: HiServer },
    ],
  },
  {
    number: "02",
    title: "[ Security\u00a0& SOC/NOC ]",
    subtitle: "Actively upskilling in threat detection, incident response, and SOC workflows.",
    items: [
      { name: "Network Intrusion Detection", icon: BiShield },
      { name: "Packet Analysis (Scapy)", icon: SiWireshark },
      { name: "ARP / SYN / DNS Threats", icon: BiNetworkChart },
      { name: "SOC / NOC Operations", icon: BiShield },
      { name: "ITSM & Change Management", icon: BiCodeAlt },
    ],
  },
  {
    number: "03",
    title: "< Cloud & Virtualisation />",
    subtitle: "Building foundational knowledge in cloud platforms and scalable infrastructure.",
    items: [
      { name: "Oracle Cloud (OCI)", icon: SiOracle },
      { name: "Amazon Web Services", icon: SiAmazonaws },
      { name: "OLVM / Oracle VM", icon: BiCloud },
      { name: "ILOM", icon: HiServer },
      { name: "Docker", icon: SiDocker },
    ],
  },
  {
    number: "04",
    title: "{ Development }",
    subtitle: "Full-stack tooling to build security and monitoring systems.",
    items: [
      { name: "Python", icon: SiPython },
      { name: "FastAPI", icon: SiFastapi },
      { name: "React", icon: SiReact },
      { name: "REST APIs & WebSocket", icon: BiCodeAlt },
      { name: "Git", icon: SiGit },
    ],
  },
];

export default function WhatIDo() {
  return (
    <section className="mt-32 border-t dark:border-zinc-800 border-zinc-200 pt-20">
      <Slide delay={0.1}>
        <h2 className="font-incognito text-4xl sm:text-[3rem] mb-4 font-normal tracking-tight uppercase dark:text-zinc-300 text-zinc-700">
          Capabilities
        </h2>
        <p className="font-incognito text-xl sm:text-2xl dark:text-white text-zinc-800 max-w-2xl leading-snug mb-16">
          My foundation is built on solid Linux engineering, and I am actively expanding my expertise in cybersecurity and cloud infrastructure. 👇
        </p>
      </Slide>

      <div className="flex flex-col">
        {services.map((service, idx) => (
          <Slide key={service.number} delay={0.1 + idx * 0.06}>
            <div className="grid lg:grid-cols-[1fr_2fr] grid-cols-1 gap-x-16 gap-y-6 py-14 border-t dark:border-zinc-800 border-zinc-200 last:border-b">

              {/* Left */}
              <div className="flex flex-col gap-y-3">
                <span className="font-mono text-sm dark:text-zinc-600 text-zinc-400 tracking-widest">
                  {service.number}
                </span>
                <h3 className="font-incognito font-semibold text-xl sm:text-2xl lg:text-3xl tracking-tight leading-tight dark:text-white text-zinc-900">
                  {service.title}
                </h3>
                <p className="text-sm dark:text-zinc-500 text-zinc-500 leading-relaxed max-w-xs">
                  {service.subtitle}
                </p>
              </div>

              {/* Right */}
              <div className="flex flex-col divide-y dark:divide-zinc-800 divide-zinc-200">
                {service.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center justify-between py-4 group cursor-default"
                  >
                    <span className="text-base dark:text-zinc-300 text-zinc-700 group-hover:dark:text-white group-hover:text-zinc-900 duration-200 font-medium">
                      {item.name}
                    </span>
                    <item.icon className="text-xl dark:text-zinc-600 text-zinc-400 group-hover:dark:text-primary-color group-hover:text-tertiary-color duration-200 flex-shrink-0" />
                  </div>
                ))}
              </div>
            </div>
          </Slide>
        ))}
      </div>
    </section>
  );
}
