import "./globals.css";
import Navbar from "@/components/Navbar";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import AuthProvider from "@/components/AuthProvider";
import { ThemeProvider } from "@/context/ThemeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TimelessLens",
  description: "Developed by Yash Varshney",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <ThemeProvider>
          <AuthProvider>
            <div className="flex flex-col min-h-screen max-w-7xl mx-auto">
              <Navbar />
              <div className="flex-1">{children}</div>
              <Footer />
            </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
