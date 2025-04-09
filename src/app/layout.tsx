import Header from "./components/header/header";
import "./scss/globals.scss";
import { Sora, Outfit } from "next/font/google";

const headingFont = Sora({
  subsets: ["latin"],
  variable: "--font-heading",
});

const paragraphFont = Outfit({
  subsets: ["latin"],
  variable: "--font-paragraph",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${headingFont.variable} ${paragraphFont.variable}`}
    >
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
