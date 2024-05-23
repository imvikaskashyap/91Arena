import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { DarkMode } from "@/custom-components/Theme-Mode";
import { AuthProvider } from "@/context/authContext";
import Header from "@/components/header/page";
import Footer from "@/components/footer/page";

export const metadata = {
  title: "PTC - Teaching App",
  description:
    "Here is the PTC teaching application for strong relation between student and teacher, Hope you will enjoy this and learn from this.",
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
