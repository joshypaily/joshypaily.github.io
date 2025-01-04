import { Inter } from "next/font/google";
import "./globals.css";
import { Container } from "@mui/joy";
import ResponsiveAppBar from "@/component/ResponsiveAppBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Joshy's-portfolio",
  description: ""
};

// eslint-disable-next-line react/prop-types
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Container maxWidth="lg">
          <ResponsiveAppBar />
          {children}
        </Container>
      </body>
    </html>
  );
}
