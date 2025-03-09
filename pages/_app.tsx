import "../styles/globals.css";
import { ThemeProvider } from "../context/ThemeContext";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
      <SpeedInsights />
      <Analytics />
    </ThemeProvider>
  );
}
