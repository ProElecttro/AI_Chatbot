import { Inter } from "next/font/google";
import Head from "next/head";
import Aibot from "./aibot";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="My first Next app"/>
      </Head>

      {/* <Script src="somejs.js" strategy="lazyOnload">
        // loads the file after evrything is loaded
      </Script> */}

      {/* by default it is lazy loaded, initially only loads the images that are in the viewport */}
      <Aibot />
      
    </>
  );
}
