import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Script from "next/script";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
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
    url: "https://www.roleselector.xyz",
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
        <link rel="icon" type="image/x-icon" href="https://roleselector.xyz/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Find out your perfect career match with Role Selector. Answer few questions to unlock personalized career recommendations based on your traits and preferences."
        />
        <meta
          name="keywords"
          content="career selector, career finder, career quiz, role selector, discover career, career advice, career options"
        />
        <meta property="og:title" content="Role Selector | Discover Your Ideal Career Path" />
        <meta property="og:url" content="https://www.roleselector.xyz" />
        <meta property="og:image" content="https://roleselector.xyz/favicon.ico" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:title"
          content="Role Selector | Discover Your Ideal Career Path"
        />
        <meta
          property="twitter:description"
          content="Take the Role Selector quiz to discover your ideal career based on your traits."
        />
        <meta property="twitter:image" content="https://roleselector.xyz/favicon.ico" />
        <meta name="google-site-verification" content="Nk1U8tDMWpH5xbr20J5VH8-lhu5hbV1Y8SPLqvOIIoM" />
        <link rel="canonical" href="https://www.roleselector.xyz" />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-T89CEQZW60"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
        >
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-T89CEQZW60');
          `}
        </Script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Role Selector",
            description:
              "Discover your ideal career with Role Selector. A quiz-based app to find the career that matches your traits and preferences.",
            url: "https://www.roleselector.xyz",
            author: {
              "@type": "Organization",
              name: "Role Selector",
            },
            potentialAction: {
              "@type": "SearchAction",
              target: "https://www.roleselector.xyz?q={search_term_string}",
              "query-input": "required name=search_term_string",
            },
          })}
        </script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}

          {/* Social Bar Script */}
          <Script
            type="text/javascript"
            src='//pl25098579.profitablecpmrate.com/a4/ea/b2/a4eab20a56af5d7eb06232bcbf510d62.js'
            strategy="afterInteractive"
          ></Script>
      </body>
    </html>
  );
}
