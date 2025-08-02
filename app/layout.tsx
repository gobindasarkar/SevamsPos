import { Roboto } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";
import LayoutWrapper from "./LayoutWrapper";
const geistRoboto = Roboto({
  variable: "--font-roboto",
  weight: ['400', '500', '600', '700'],
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Sevams Pos",
  description: "sevams pos by create sevams",
  icons: {
    icon: '/favicon.png',
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistRoboto.variable}`}
      >
        <LayoutWrapper>
          {children}
        </LayoutWrapper>
      </body>
    </html>
  );
}
