import "./css/style.css";

import { Inter, Montserrat } from "next/font/google";

import Header from "@/components/ui/header";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--Montserrat",
  weight: "500",
  display: "swap",
});

export const metadata = {
  title: "OLPH-UCTH",
  description:
    "THe Official Website for Our Lady of Perpetual Help Chaplaincy, UCTH",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${montserrat.className} font-inter antialiased bg-[#132a13]/90 text-gray-200 tracking-tight`}
      >
        <div className="flex flex-col min-h-screen overflow-hidden">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
