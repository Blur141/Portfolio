"use client";
import { useState } from "react";
import { Slide } from "../../animation/Slide";
import { socialLinks } from "../../data/portfolio";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch(
        process.env.NEXT_PUBLIC_API_URL
          ? `${process.env.NEXT_PUBLIC_API_URL}/contact`
          : "http://localhost:8000/contact",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        }
      );
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const contactLinks = socialLinks.filter((s) => s.status === "contact");

  return (
    <section className="mt-32" id="contact">
      <Slide delay={0.16}>
        <div className="mb-16">
          <h2 className="font-incognito text-4xl sm:text-[3rem] mb-4 font-normal tracking-tight uppercase dark:text-zinc-300 text-zinc-700">
            Get in touch
          </h2>
          <p className="dark:text-zinc-400 text-zinc-600 max-w-xl leading-relaxed">
            Open to new opportunities in cybersecurity and infrastructure engineering.
            Whether you have a project, a question, or just want to connect — my inbox is open.
          </p>
        </div>
      </Slide>

      <Slide delay={0.18}>
        <div className="grid lg:grid-cols-2 gap-12 max-w-4xl">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm dark:text-zinc-400 text-zinc-600 mb-1.5"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Mohammed Niyas"
                  className="w-full dark:bg-primary-bg bg-secondary-bg border dark:border-zinc-800 border-zinc-200 rounded-md px-4 py-3 text-sm dark:text-white text-zinc-800 placeholder:text-zinc-500 focus:outline-none focus:ring-1 dark:focus:ring-primary-color focus:ring-secondary-color duration-200"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm dark:text-zinc-400 text-zinc-600 mb-1.5"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full dark:bg-primary-bg bg-secondary-bg border dark:border-zinc-800 border-zinc-200 rounded-md px-4 py-3 text-sm dark:text-white text-zinc-800 placeholder:text-zinc-500 focus:outline-none focus:ring-1 dark:focus:ring-primary-color focus:ring-secondary-color duration-200"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm dark:text-zinc-400 text-zinc-600 mb-1.5"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Your message..."
                  className="w-full dark:bg-primary-bg bg-secondary-bg border dark:border-zinc-800 border-zinc-200 rounded-md px-4 py-3 text-sm dark:text-white text-zinc-800 placeholder:text-zinc-500 focus:outline-none focus:ring-1 dark:focus:ring-primary-color focus:ring-secondary-color duration-200 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="font-incognito font-semibold flex items-center justify-center gap-x-2 dark:bg-primary-bg bg-zinc-100 border border-transparent dark:hover:border-zinc-700 hover:border-zinc-200 rounded-md py-3 text-base duration-200 disabled:opacity-50 disabled:cursor-not-allowed dark:text-primary-color text-tertiary-color"
              >
                {status === "loading" ? "Sending..." : "Send Message →"}
              </button>

              {status === "success" && (
                <p className="text-sm dark:text-primary-color text-tertiary-color text-center">
                  ✓ Message sent! I'll get back to you soon.
                </p>
              )}
              {status === "error" && (
                <p className="text-sm text-red-500 text-center">
                  Something went wrong. Please email me directly.
                </p>
              )}
            </form>
          </div>

          {/* Direct contact links */}
          <div className="flex flex-col gap-y-6">
            <div>
              <h3 className="font-incognito font-semibold text-lg mb-4">
                Direct Contact
              </h3>
              <ul className="flex flex-col gap-y-3">
                {contactLinks.map((link) => (
                  <li key={link.id}>
                    <a
                      href={link.url}
                      className="flex items-center gap-x-3 dark:text-zinc-400 text-zinc-600 dark:hover:text-white hover:text-zinc-900 duration-200 group"
                    >
                      <span className="grid place-items-center dark:bg-primary-bg bg-secondary-bg border dark:border-zinc-800 border-zinc-200 rounded-md p-2 group-hover:dark:border-zinc-700 group-hover:border-zinc-300 duration-200">
                        <link.icon className="text-lg dark:text-primary-color text-tertiary-color" />
                      </span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="dark:bg-primary-bg bg-secondary-bg border dark:border-zinc-800 border-zinc-200 rounded-xl p-5">
              <p className="text-sm dark:text-zinc-400 text-zinc-500 leading-relaxed">
                Based in{" "}
                <span className="dark:text-white text-zinc-800 font-semibold">
                  Dubai, UAE 🇦🇪
                </span>
                . Open to remote and on-site opportunities in cybersecurity operations,
                Linux infrastructure engineering, and SOC/NOC roles.
              </p>
            </div>
          </div>
        </div>
      </Slide>
    </section>
  );
}
