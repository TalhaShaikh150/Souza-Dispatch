import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-primary",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-heading",
});

import { Plus_Jakarta_Sans } from "next/font/google";
const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading-alt",
  weight: ["700", "800"],
});

export const metadata = {
  title: "SouzaDispatch | Professional Moving Services in London",
  description: "Compassionate, family-run moving services across London and the UK.",
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable} ${plusJakarta.variable}`}>
      <body className={`${poppins.className} antialiased text-brand-dark bg-brand-white relative min-h-screen`}>
        <Header />
        
        {/* LocalBusiness Schema for Google Business Profile Optimization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MovingCompany",
              "name": "SouzaDispatch",
              "image": "https://www.souzadispatch.co.uk/assets/logo.png",
              "@id": "https://www.souzadispatch.co.uk",
              "url": "https://www.souzadispatch.co.uk",
              "telephone": "07862036671",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "London",
                "addressCountry": "UK"
              },
              "areaServed": "London",
              "sameAs": [
                "https://www.facebook.com/profile.php?id=61584689547300",
                "https://www.instagram.com/souzadispatch/",
                "https://www.linkedin.com/company/souzadispatch"
              ]
            })
          }}
        />

        <main id="main-content">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
