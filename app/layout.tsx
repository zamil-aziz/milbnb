import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/navbar/Navbar"
import RegisterModal from "./Components/modals/RegisterModal";
import { Toaster } from "react-hot-toast";
import LoginModal from "./Components/modals/LoginModal";
import getCurrentUser from "./actions/getCurrentUser";
import RentModal from "./Components/modals/RentModal";
import SearchModal from "./Components/modals/SearchModal";
import { Suspense } from "react";

const inter = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AirBNB",
  description: "AirBNB Clone",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body 
        className={inter.className} 
        // style={{caretColor:'transparent'}}
      >
        <Suspense>
          <Toaster/>
          <SearchModal/>
          <RentModal/>
          <LoginModal/>
          <RegisterModal/>
          <Navbar currentUser={currentUser} />
        </Suspense>
        <div className="pb-20 pt-28">
          {children}
        </div> 
      </body>
    </html>
  );
}
