import { jobs } from "../../data/portfolio";
import { Slide } from "../../animation/Slide";

function formatYear(dateStr: string): string {
  return new Date(dateStr).getFullYear().toString();
}

export default function Job() {
  return (
    <section className="mt-20 sm:mt-32" id="experience">
      <Slide delay={0.16}>
        <div className="mb-10 sm:mb-16">
          <h2 className="font-incognito text-3xl sm:text-4xl md:text-[3rem] 2xl:text-[3.5rem] mb-4 font-normal tracking-tight uppercase dark:text-zinc-300 text-zinc-700">
            Experience
          </h2>
        </div>
      </Slide>

      <Slide delay={0.18}>
        <div className="flex flex-col gap-y-16 sm:gap-y-24">
          {jobs.map((data: any) => (
            <div
              key={data._id}
              className="grid lg:grid-cols-3 grid-cols-1 gap-x-8 2xl:gap-x-16 gap-y-6 sm:gap-y-10 border-t dark:border-zinc-800 border-zinc-200 pt-8 sm:pt-10"
            >
              {/* Left */}
              <div className="flex flex-col gap-y-2 sm:gap-y-4">
                <h3 className="text-2xl sm:text-3xl 2xl:text-4xl font-normal dark:text-zinc-200 text-zinc-800 tracking-tight">
                  {data.name}
                </h3>
                <p className="text-sm 2xl:text-base dark:text-zinc-400 text-zinc-600">{data.tagline}</p>
                <time className="text-sm dark:text-zinc-400 text-zinc-600 mt-1 sm:mt-2">
                  {formatYear(data.startDate)} — {data.endDate ? formatYear(data.endDate) : "Present"}
                </time>
              </div>

              {/* Middle */}
              <div className="flex flex-col gap-y-3 sm:gap-y-4">
                {[
                  { label: "Position", value: data.jobTitle },
                  { label: "Location", value: data.location },
                  { label: "Industry", value: data.industry },
                ].map(({ label, value }) => (
                  <div key={label} className="grid grid-cols-[90px_1fr] sm:grid-cols-[100px_1fr] gap-x-3 sm:gap-x-4">
                    <span className="text-xs sm:text-sm dark:text-zinc-500 text-zinc-400">{label}</span>
                    <span className="text-xs sm:text-sm dark:text-zinc-300 text-zinc-700">{value}</span>
                  </div>
                ))}
                <div className="grid grid-cols-[90px_1fr] sm:grid-cols-[100px_1fr] gap-x-3 sm:gap-x-4">
                  <span className="text-xs sm:text-sm dark:text-zinc-500 text-zinc-400">Website</span>
                  <a
                    href={data.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs sm:text-sm dark:text-zinc-300 text-zinc-700 hover:dark:text-white hover:underline underline-offset-4 decoration-zinc-500 truncate"
                  >
                    {data.website} ↗
                  </a>
                </div>
              </div>

              {/* Right */}
              <div className="flex flex-col gap-y-4 sm:gap-y-6">
                {data.description.map((paragraph: string, idx: number) => (
                  <p key={idx} className="text-sm 2xl:text-base dark:text-zinc-400 text-zinc-600 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Slide>
    </section>
  );
}
