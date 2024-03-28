import { Inter } from "next/font/google";
import "./globals.css";
import { Container } from "@mui/joy";
import Header from "@/component/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Joshy-portfolio",
  description: ""
};

// eslint-disable-next-line react/prop-types
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Container maxWidth="lg">
          <Header title="Joshy Paily- Senior Software enginner" />
          {children}
        </Container>
      </body>
    </html>
  );
}
