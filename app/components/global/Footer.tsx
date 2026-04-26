export default function Footer() {
  return (
    <footer className="border-t dark:border-zinc-800 border-zinc-100 mt-44 lg:min-h-[250px] min-h-full relative">
      <div className="max-w-7xl mx-auto flex lg:flex-row flex-col items-center lg:justify-between justify-center gap-y-4 md:px-16 px-6 py-16">
        <div className="flex md:flex-row flex-col items-center gap-x-2">
          <h3 className="font-inter">Built with:</h3>
          <ul className="flex items-center gap-x-4 text-sm dark:text-zinc-400 text-zinc-500 md:mt-0 mt-3">
            <li>
              <a
                href="https://nextjs.org"
                rel="noreferrer noopener"
                target="_blank"
                className="dark:hover:text-white hover:text-zinc-800 hover:underline duration-200"
              >
                Next.js
              </a>
            </li>
            <li>·</li>
            <li>
              <a
                href="https://tailwindcss.com"
                rel="noreferrer noopener"
                target="_blank"
                className="dark:hover:text-white hover:text-zinc-800 hover:underline duration-200"
              >
                Tailwind CSS
              </a>
            </li>
            <li>·</li>
            <li>
              <a
                href="https://fastapi.tiangolo.com"
                rel="noreferrer noopener"
                target="_blank"
                className="dark:hover:text-white hover:text-zinc-800 hover:underline duration-200"
              >
                FastAPI
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col lg:items-end items-center lg:text-start text-center">
          <small className="text-zinc-500">
            © Mohammed Niyas NF {new Date().getFullYear()} · Dubai, UAE
          </small>
        </div>
      </div>
    </footer>
  );
}
