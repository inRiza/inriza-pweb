import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import DottedBG from "@/components/background/dotted";
import { ThemeProvider } from "@/components/theme-provider";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "inRiza",
  description: "inriza",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${spaceGrotesk.variable} font-sans antialiased`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
          <DottedBG />
          <div className="relative z-100">
            <div className="fixed w-full left-0 bottom-0 h-[200px] bg-gradient-to-b from-transparent to-background z-40 pointer-events-none" />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
