import type { Metadata } from "next";
import { Raleway, Inter } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });
const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "O manu | Engenheiro Front-end e web designer",
  description: "Desenvolvimento de sites e aplicativos web e mobile.",
  openGraph: {
    images: ["/images/preview-mobile.jpeg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <meta property="og:image" content="<generated>" />
        <meta property="og:image:type" content="<generated>" />
        <meta property="og:image:width" content="<generated>" />
        <meta property="og:image:height" content="<generated>" />

        <meta name="twitter:image" content="<generated>" />
        <meta name="twitter:image:type" content="<generated>" />
        <meta name="twitter:image:width" content="<generated>" />
        <meta name="twitter:image:height" content="<generated>" />

        <meta property="og:image:alt" content="About Acme" />

        <meta property="twitter:image:alt" content="About Acme" />
      </head>
      <body
        className={`bg-main w-screen min-h-screen h-full flex ${[
          raleway.className,
          inter.className,
        ]}`}
      >
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
