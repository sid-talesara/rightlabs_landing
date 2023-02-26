import Head from "next/head";
import Script from "next/script";
import "../../styles/style.scss";

export default function App({ Component, pageProps }) {
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
