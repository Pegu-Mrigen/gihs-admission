import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ADMISSION-GIHS",
  description:
    "Gohpur Institute of Health & Science was established in the 2023 with a mission to provide affordable quality paramedical education to the youth of Assam, Which is situated in Gohpur, Biswanath, Assam. GIHS is affiliated to NCETIR (National Council of Educational Training Institute And Research).",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <body className={inter.className}>
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>

      <Script src="https://checkout.razorpay.com/v1/checkout.js" />
    </>
  );
}
