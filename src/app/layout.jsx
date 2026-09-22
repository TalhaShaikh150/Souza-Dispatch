import { Nunito, Inter, Outfit, Playfair_Display, Poppins, Montserrat, Merriweather, Oswald, Lora, Space_Grotesk, Syne, Work_Sans, IBM_Plex_Sans, Manrope, Plus_Jakarta_Sans, Public_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const nunito = Nunito({ subsets: ["latin"], variable: "--font-nunito" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-poppins" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });
const merriweather = Merriweather({ subsets: ["latin"], weight: ["300", "400", "700", "900"], variable: "--font-merriweather" });
const oswald = Oswald({ subsets: ["latin"], variable: "--font-oswald" });
const lora = Lora({ subsets: ["latin"], variable: "--font-lora" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });
const syne = Syne({ subsets: ["latin"], variable: "--font-syne" });
const workSans = Work_Sans({ subsets: ["latin"], variable: "--font-work-sans" });
const ibmPlexSans = IBM_Plex_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-ibm-plex" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });
const plusJakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-plus-jakarta" });
const publicSans = Public_Sans({ subsets: ["latin"], variable: "--font-public-sans" });

export const metadata = {
  title: "SouzaDispatch",
  description: "Your reliable moving partner.",
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en" className={`${nunito.variable} ${inter.variable} ${outfit.variable} ${playfair.variable} ${poppins.variable} ${montserrat.variable} ${merriweather.variable} ${oswald.variable} ${lora.variable} ${spaceGrotesk.variable} ${syne.variable} ${workSans.variable} ${ibmPlexSans.variable} ${manrope.variable} ${plusJakarta.variable} ${publicSans.variable} overflow-x-hidden`} suppressHydrationWarning>
      <body className="antialiased text-gray-900 bg-[#f9fafb] relative min-h-screen overflow-x-hidden flex flex-col">
        <Header />
        
        <main id="main-content" className="w-full overflow-x-hidden flex-grow">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
