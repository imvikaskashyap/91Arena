import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { DarkMode } from "@/custom-components/Theme-Mode";
import { AuthProvider } from "@/context/authContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "91Arena",
  description:
    "A Mobile Specification Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* <div className="fixed right-0 "><DarkMode/></div> */}
          <Header />
          <AuthProvider>{children}</AuthProvider>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
