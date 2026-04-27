import { socialLinks } from "../../data/portfolio";

export default function Social({ type }: { type: string }) {
  return (
    <ul className="flex items-center flex-wrap gap-x-4 sm:gap-x-5 gap-y-3 sm:gap-y-4 my-8 sm:my-10">
      {socialLinks
        .filter((item) => item.status === type)
        .map((value) => (
          <li key={value.id}>
            <a
              href={value.url}
              rel="noreferrer noopener"
              target="_blank"
              className="flex items-center border-b dark:border-b-zinc-800 border-zinc-200 group text-sm sm:text-base"
            >
              <value.icon
                className="flex-shrink-0 h-4 w-4 sm:h-5 sm:w-5 text-zinc-500 group-hover:dark:text-white group-hover:text-zinc-800 duration-300"
                aria-hidden="true"
              />
              &nbsp;{value.name}
            </a>
          </li>
        ))}
    </ul>
  );
}
