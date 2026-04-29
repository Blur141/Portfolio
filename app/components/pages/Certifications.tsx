import { certifications } from "../../data/portfolio";
import { Slide } from "../../animation/Slide";
import { BiCheck } from "react-icons/bi";

export default function Certifications() {
  return (
    <section className="mt-20" id="certifications">
      <Slide delay={0.14}>
        <h2 className="font-incognito text-4xl sm:text-[3rem] mb-4 font-normal tracking-tight uppercase dark:text-zinc-300 text-zinc-700">
          Certifications
        </h2>
      </Slide>

      <Slide delay={0.16}>
        <div className="grid sm:grid-cols-2 gap-4 mt-8">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="flex items-start gap-x-4 dark:bg-primary-bg bg-secondary-bg border dark:border-zinc-800 border-zinc-200 rounded-xl p-5 hover:dark:border-zinc-700 hover:border-zinc-300 duration-300"
            >
              <span className="grid place-items-center dark:bg-zinc-800 bg-zinc-100 border dark:border-zinc-700 border-zinc-200 rounded-md p-2 mt-0.5 flex-shrink-0">
                <BiCheck className="text-lg dark:text-primary-color text-tertiary-color" />
              </span>
              <div className="min-w-0">
                <p className="font-semibold dark:text-white text-zinc-800 leading-snug text-sm sm:text-base">
                  {cert.title}
                </p>
                <p className="text-xs sm:text-sm dark:text-zinc-400 text-zinc-500 mt-1">
                  {cert.issuer}{cert.year ? ` · ${cert.year}` : ""}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Slide>
    </section>
  );
}
