import { Amiri, Lato } from "next/font/google";
import EntranceAnimation from "@/components/EntranceAnimation";
import { BrandingProvider } from "@/components/Providers";
import "./globals.css";

const amiri = Amiri({
  variable: "--font-amiri",
  subsets: ["latin"],
  weight: ["400"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${amiri.variable} ${lato.variable} antialiased selection:bg-primary selection:text-white`}
        suppressHydrationWarning
      >
        <BrandingProvider>
          <EntranceAnimation />
          {children}
        </BrandingProvider>
      </body>
    </html>
  );
}

