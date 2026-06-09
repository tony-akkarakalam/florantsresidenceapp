import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { getHeroImages, getLogoImage } from "@/lib/gallery";
import { site } from "@/lib/site";

const heroImage = getHeroImages()[0]?.src ?? "/images/exterior/Screenshot%202026-05-25%20145359.png";
// const logoImage = getLogoImage();

export const metadata: Metadata = {
  metadataBase: new URL("https://florantsresidence.com"),
  title: "Florants Residence | Your Urban Haven in Kochi",
  description: site.description,
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
  publisher: "Florants Residence",
  robots: {
    index: true,
    follow: true
  },
  icons: {
  icon: [
    { url: "/favicon.ico" },
    { url: "/favicon.svg", type: "image/svg+xml" },
    { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" }
  ],
  apple: "/apple-touch-icon.png",
  shortcut: "/favicon.ico"
},
  openGraph: {
    title: "Florants Residence | Your Urban Haven",
    description: site.description,
    type: "website",
    locale: "en_IN",
    siteName: "Florants Residence",
    url: "/",
    images: [
      {
        url: heroImage,
        width: 1200,
        height: 630,
        alt: "Florants Residence in Kochi"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Florants Residence | Your Urban Haven",
    description: site.description,
    images: [heroImage]
  },
  alternates: {
    canonical: "/"
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  name: site.name,
  description: site.description,
  image: [heroImage],
  telephone: site.phone,
  url: "https://florantsresidence.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kochi",
    addressCountry: "IN"
  },
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "WiFi", value: true },
    { "@type": "LocationFeatureSpecification", name: "Air conditioning", value: true },
    { "@type": "LocationFeatureSpecification", name: "Kitchen", value: true },
    { "@type": "LocationFeatureSpecification", name: "Self check-in", value: true }
  ],
  sameAs: [site.instagramUrl, site.mapsUrl]
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBootstrap }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="antialiased">
        <a
          href="#main-content"
          className="absolute left-4 top-4 z-[160] -translate-y-24 rounded-full bg-[rgb(var(--ink))] px-4 py-2 text-sm font-semibold text-[rgb(var(--surface))] transition focus:translate-y-0 focus:outline-none focus-visible:translate-y-0"
        >
          Skip to content
        </a>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
