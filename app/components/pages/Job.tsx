import { jobs } from "../../data/portfolio";
import { Slide } from "../../animation/Slide";

function formatYear(dateStr: string): string {
  const date = new Date(dateStr);
  return date.getFullYear().toString();
}

export default function Job() {
  return (
    <section className="mt-32" id="experience">
      <Slide delay={0.16}>
        <div className="mb-16">
          <h2 className="font-incognito text-4xl sm:text-[3rem] mb-4 font-normal tracking-tight uppercase dark:text-zinc-300 text-zinc-700">
            EXPERIENCE
          </h2>
        </div>
      </Slide>

      <Slide delay={0.18}>
        <div className="flex flex-col gap-y-24">
          {jobs.map((data: any) => (
            <div
              key={data._id}
              className="grid lg:grid-cols-3 grid-cols-1 gap-x-8 gap-y-10 border-t dark:border-zinc-800 border-zinc-200 pt-10"
            >
              {/* Left Column */}
              <div className="flex flex-col gap-y-4">
                <h3 className="text-3xl font-normal dark:text-zinc-200 text-zinc-800 tracking-tight">
                  {data.name}
                </h3>
                <p className="text-sm dark:text-zinc-400 text-zinc-600">
                  {data.tagline}
                </p>
                <time className="text-sm dark:text-zinc-400 text-zinc-600 mt-2">
                  {formatYear(data.startDate)} — {data.endDate ? formatYear(data.endDate) : "Present"}
                </time>
              </div>

              {/* Middle Column */}
              <div className="flex flex-col gap-y-4">
                <div className="grid grid-cols-[100px_1fr] gap-x-4">
                  <span className="text-sm dark:text-zinc-500 text-zinc-400">Position</span>
                  <span className="text-sm dark:text-zinc-300 text-zinc-700">{data.jobTitle}</span>
                </div>
                <div className="grid grid-cols-[100px_1fr] gap-x-4">
                  <span className="text-sm dark:text-zinc-500 text-zinc-400">Location</span>
                  <span className="text-sm dark:text-zinc-300 text-zinc-700">{data.location}</span>
                </div>
                <div className="grid grid-cols-[100px_1fr] gap-x-4">
                  <span className="text-sm dark:text-zinc-500 text-zinc-400">Industry</span>
                  <span className="text-sm dark:text-zinc-300 text-zinc-700">{data.industry}</span>
                </div>
                <div className="grid grid-cols-[100px_1fr] gap-x-4">
                  <span className="text-sm dark:text-zinc-500 text-zinc-400">Website</span>
                  <a href={data.url} target="_blank" rel="noreferrer" className="text-sm dark:text-zinc-300 text-zinc-700 hover:dark:text-white hover:underline underline-offset-4 decoration-zinc-500">
                    {data.website} ↗
                  </a>
                </div>
              </div>

              {/* Right Column */}
              <div className="flex flex-col gap-y-6">
                {data.description.map((paragraph: string, idx: number) => (
                  <p key={idx} className="text-sm dark:text-zinc-400 text-zinc-600 leading-relaxed">
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
