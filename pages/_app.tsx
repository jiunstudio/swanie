import "../styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="text-[#00173D]">
      <Component {...pageProps} />
    </div>
  );
}
