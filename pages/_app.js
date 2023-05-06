import "../styles/globals.css";
import Head from "next/head";
import { ThemeSwitchProvider } from "../theme/theme";
import Layout from "../components/layout";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Elastik</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <ThemeSwitchProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeSwitchProvider>
    </>
  );
}
