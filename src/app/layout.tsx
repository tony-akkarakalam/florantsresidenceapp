import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://florants-residence.vercel.app"),
  title: "Florants Residence | Your Urban Haven in Kochi",
  description:
    "Book Florants Residence, a private 2BHK Airbnb-style stay in Kochi with 2 AC bedrooms, 2 bathrooms, kitchen essentials, WiFi, and a calm central location near Lakeshore Hospital and Forum Mall Kochi.",
  applicationName: "Florants Residence",
  keywords: [
    "Florants Residence",
    "Kochi Airbnb",
    "Kochi 2BHK stay",
    "Lakeshore Hospital stay",
    "Forum Mall Kochi stay",
    "serviced apartment Kochi"
  ],
  authors: [{ name: "Florants Residence" }],
  creator: "Florants Residence",
  openGraph: {
    title: "Florants Residence | Your Urban Haven",
    description: site.description,
    type: "website",
    locale: "en_IN",
    siteName: "Florants Residence",
    images: [
      {
        url: "/images/hero/florants-hero-fallback.svg",
        width: 1600,
        height: 1000,
        alt: "Florants Residence in Kochi"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Florants Residence | Your Urban Haven",
    description: site.description,
    images: ["/images/hero/florants-hero-fallback.svg"]
  },
  alternates: {
    canonical: "/"
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#faf8f3" },
    { media: "(prefers-color-scheme: dark)", color: "#131517" }
  ]
};

const themeBootstrap = `
(() => {
  try {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    const stored = localStorage.getItem("florants-theme");
    const theme = stored === "dark" || stored === "light"
      ? stored
      : (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
  } catch {
    document.documentElement.dataset.theme = "light";
  }

  window.addEventListener("pageshow", () => {
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  });
})();
`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBootstrap }} />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
