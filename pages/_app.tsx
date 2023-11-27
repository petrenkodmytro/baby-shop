import NextNprogress from "nextjs-progressbar"; // loading
import "../styles/main.scss"; // вместо строк 12-16
import { AppProps } from "next/app";


function MyApp({ Component, pageProps }: AppProps) {
  
  return (
    <>
      <NextNprogress color={"yellow"} startPosition={0.1} stopDelayMs={200} height={4} />

      <Component {...pageProps} />

      {/*<style jsx global>{`*/}
      {/* body { */}
      {/*    font-family: 'Roboto', sans-serif;*/}
      {/*  }*/}
      {/*`}</style>*/}
    </>
  );
}
export default MyApp;
