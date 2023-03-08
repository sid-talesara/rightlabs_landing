import Head from "next/head";
import Script from "next/script";
import { useEffect } from "react";
import "../../styles/style.scss";

export default function App({ Component, pageProps }) {
  // ! --------------------- Taking Variable height on client's device  ----------------------------------------

  useEffect(() => {
    let vh = window.innerHeight;
    document.documentElement.style.setProperty("--height", `${vh}px`);
    getComputedStyle(document.documentElement).getPropertyValue("--height");
  }, []);

  return (
    <>
      <Script
        async
        src="https://tally.so/widgets/embed.js"
        strategy="afterInteractive"
      ></Script>
      <Component {...pageProps} />
    </>
  );
}
