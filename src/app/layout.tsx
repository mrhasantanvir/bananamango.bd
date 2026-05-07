import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "BananaMango.bd | রাজশাহীর প্রিমিয়াম ব্যানানা আম",
  description: "রাজশাহীর বাগান থেকে সরাসরি বাছাই করা প্রিমিয়াম ব্যানানা আম। কোনো কেমিক্যাল ছাড়াই প্রাকৃতিকভাবে পাকানো সেরা স্বাদের নিশ্চয়তা।",
  icons: {
    icon: "/favicon.svg",
  },
  keywords: ["Banana Mango price in Bangladesh", "ব্যানানা আমের বৈশিষ্ট্য", "রাজশাহীর আম", "ব্যানানা আম চাষ পদ্ধতি"],
  openGraph: {
    title: "ব্যানানা আম - রাজশাহীর সেরা প্রিমিয়াম ব্যানানা আম",
    description: "রাজশাহীর বাগান থেকে সরাসরি সেরা মানের ব্যানানা আম।",
    images: ["/banana-mango.png"],
  },
};

import Script from "next/script";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn" className="scroll-smooth">
      <body className={`${outfit.variable} ${inter.variable} antialiased`}>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-QLVKE67D42"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-QLVKE67D42');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              "name": "ব্যানানা আম (Banana Mango)",
              "image": "https://bananamango.bd/banana-mango.png",
              "description": "রাজশাহীর বাগান থেকে সরাসরি সেরা মানের ব্যানানা আম।",
              "brand": {
                "@type": "Brand",
                "name": "BananaMango.bd"
              },
              "offers": {
                "@type": "Offer",
                "url": "https://rajshahiram.com.bd/ProductDetails/M114",
                "priceCurrency": "BDT",
                "availability": "https://schema.org/InStock"
              }
            })
          }}
        />
        {children}
      </body>
    </html>
  );
}
