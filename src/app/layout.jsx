import { Nunito } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ColorSelector from "@/components/ColorSelector";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-primary",
});

export const metadata = {
  title: "SouzaDispatch",
  description: "Your reliable moving partner.",
};

const themeScript = `
  (function() {
    try {
      var primary = localStorage.getItem('brand-primary');
      var secondary = localStorage.getItem('brand-secondary');
      if (primary) document.documentElement.style.setProperty('--color-primary', primary);
      if (secondary) document.documentElement.style.setProperty('--color-secondary', secondary);
    } catch (e) {}
  })();
`;

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en" className={`${nunito.variable} overflow-x-hidden`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="antialiased text-gray-900 bg-[#f9fafb] relative min-h-screen overflow-x-hidden flex flex-col" style={{ fontFamily: "var(--font-primary, 'Nunito', sans-serif)" }}>
        <Header />
        
        <main id="main-content" className="w-full overflow-x-hidden flex-grow">
          {children}
        </main>

        <Footer />
        <ColorSelector />
      </body>
    </html>
  );
}
