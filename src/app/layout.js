import { Inter } from "next/font/google";
import Header from "@/components/Header";
import SideNav from "@/components/SideNav";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const metadata = {
  title: "My App",
  description: "My app description",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} h-full`}>
        <div className="flex h-full">
          <SideNav />
          <main>
            {/* <Header /> */}
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
