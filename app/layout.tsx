import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Role Selector | Discover Your Ideal Career Path",
  description:
    "Find out your perfect career match with Role Selector. Answer a few questions to unlock personalized career recommendations based on your traits and preferences.",
  keywords:
    "career selector, career finder, career quiz, role selector, discover career, career advice, career options",
  openGraph: {
    title: "Role Selector | Discover Your Ideal Career Path",
    description:
      "Take the Role Selector quiz to find out which career suits you best. Personalized recommendations based on your unique traits.",
    url: "https://www.role-selector.com",
    images: [
      {
        url: "/assets/og-image.png",
        width: 1200,
        height: 630,
        alt: "Role Selector - Find Your Career",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Role Selector | Discover Your Ideal Career Path",
    description:
      "Take the Role Selector quiz to discover your ideal career based on your traits.",
    images: ["/assets/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Find out your perfect career match with Role Selector. Answer a few questions to unlock personalized career recommendations based on your traits and preferences."
        />
        <meta
          name="keywords"
          content="career selector, career finder, career quiz, role selector, discover career, career advice, career options"
        />
        <meta property="og:title" content="Role Selector | Discover Your Ideal Career Path" />
        <meta
          property="og:description"
          content="Take the Role Selector quiz to find out which career suits you best. Personalized recommendations based on your unique traits."
        />
        <meta property="og:url" content="https://www.role-selector.com" />
        <meta property="og:image" content="/assets/og-image.png" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:title"
          content="Role Selector | Discover Your Ideal Career Path"
        />
        <meta
          property="twitter:description"
          content="Take the Role Selector quiz to discover your ideal career based on your traits."
        />
        <meta property="twitter:image" content="/assets/og-image.png" />
        <meta name="google-site-verification" content="Nk1U8tDMWpH5xbr20J5VH8-lhu5hbV1Y8SPLqvOIIoM" />
        <link rel="canonical" href="https://www.role-selector.com" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Role Selector",
            description:
              "Discover your ideal career with Role Selector. A quiz-based app to find the career that matches your traits and preferences.",
            url: "https://www.role-selector.com",
            author: {
              "@type": "Organization",
              name: "Role Selector",
            },
            potentialAction: {
              "@type": "SearchAction",
              target: "https://www.role-selector.com?q={search_term_string}",
              "query-input": "required name=search_term_string",
            },
          })}
        </script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
