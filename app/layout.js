import { Inter } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "@/ui/globals/Header";
import QuickActions from "@/ui/specials/QuickActions";
import ErrorBoundary from "@/ui/errors/ErrorBoundary";
import BottomBar from "@/ui/globals/BottomBar";
import NextjsStoreProvider from "@/redux/NextjsStoreProvider";
import NextRedux from "@/NextRedux";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "next-dev-saif",
  description: "Portfolio created by next js ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ErrorBoundary>
          <NextjsStoreProvider>
            <NextRedux>
              <Header />
              <QuickActions />
              {children}
              <BottomBar />
            </NextRedux>
          </NextjsStoreProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
