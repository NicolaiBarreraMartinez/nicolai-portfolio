import {JetBrains_Mono} from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";


//Components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100","200","300","400","500","600","700","800"],
  variable:'--font-jetbrainsMono'
});

export const metadata = {
  title: "Nicolai Barrera",
  description: "Portfolio Introduction",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={jetbrainsMono.variable}>
          <Header></Header>
          <StairTransition></StairTransition>
          <PageTransition> {children}</PageTransition>
      </body>
    </html>
  );
}
