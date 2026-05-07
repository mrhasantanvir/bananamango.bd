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
  title: "ব্যানানা আম - রাজশাহীর সেরা প্রিমিয়াম ব্যানানা আম | BananaMango.bd",
  description: "রাজশাহীর বাগান থেকে সরাসরি সেরা মানের ব্যানানা আম। এর অনন্য স্বাদ, পাতলা আটি এবং চাষ পদ্ধতি সম্পর্কে জানুন। অনলাইনে আমের চারা ও ফল অর্ডার করুন।",
  keywords: ["Banana Mango price in Bangladesh", "ব্যানানা আমের বৈশিষ্ট্য", "রাজশাহীর আম", "ব্যানানা আম চাষ পদ্ধতি"],
  openGraph: {
    title: "ব্যানানা আম - রাজশাহীর সেরা প্রিমিয়াম ব্যানানা আম",
    description: "রাজশাহীর বাগান থেকে সরাসরি সেরা মানের ব্যানানা আম।",
    images: ["/banana-mango.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn" className="scroll-smooth">
      <body className={`${outfit.variable} ${inter.variable} antialiased`}>
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
