import Navigation from "../components/Navigation";
import "../styles/global.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Next Movies",
    default: "CHAEFLIX",
  },
  description: "The best movies on the best framework",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <Navigation />
        <main className='pt-20'>{children}</main>
      </body>
    </html>
  );
}
