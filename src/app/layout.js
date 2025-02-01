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
      <body className={`${inter.className}`}>
        <div className="lg:flex lg:h-full  flex-grow">
          <SideNav />
          <main className="lg:flex-1 lg:overflow-y-auto min-h-screen">
            {/* <Header /> */}
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
