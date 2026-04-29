import { profile } from "@/app/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t dark:border-zinc-800 border-zinc-100">
      <div className="max-w-7xl mx-auto md:px-16 px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-y-1">
        <small className="text-xs dark:text-zinc-500 text-zinc-400">
          © {new Date().getFullYear()} {profile.fullName}
        </small>
        <small className="text-xs dark:text-zinc-500 text-zinc-400">
          {profile.headline}
        </small>
      </div>
    </footer>
  );
}
