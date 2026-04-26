import "@/app/styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { incognito, gitlabmono } from "./font/font";
import Navbar from "./components/global/Navbar";
import Footer from "./components/global/Footer";
import { Providers } from "./providers";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--inter",
});

const options = {
  title: "Mohammed Niyas | Linux & Security Engineer",
  description:
    "Linux Engineer with nearly 2 years of experience managing enterprise Oracle Linux and Ubuntu environments in the UAE. Specialising in infrastructure automation, SOC/NOC operations, and network intrusion detection. Transitioning into cybersecurity.",
  url: "https://mohammedniyasnf.dev",
};

export const metadata: Metadata = {
  title: options.title,
  description: options.description,
  metadataBase: new URL(options.url),
  openGraph: {
    title: options.title,
    url: options.url,
    siteName: "Mohammed Niyas NF",
    locale: "en-US",
    type: "website",
    description: options.description,
  },
  alternates: {
    canonical: options.url,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${incognito.variable} ${inter.className} ${gitlabmono.variable} dark:bg-zinc-900 bg-white dark:text-white text-zinc-700`}
      >
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
