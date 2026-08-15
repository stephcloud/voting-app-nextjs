import type { AppProps } from "next/app";
import { VoteProvider } from "@/context/VoteContext";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <VoteProvider>
      <Component {...pageProps} />
    </VoteProvider>
  );
}
