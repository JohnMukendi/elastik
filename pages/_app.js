import "../styles/globals.css";
import { useEffect } from "react";
import Head from "next/head";
import { ThemeSwitchProvider } from "../theme/theme";
import Layout from "../components/layout";
import AOS from "aos";
import "aos/dist/aos.css";
import { Roboto_Mono } from "next/font/google";
import localFont from "next/font/local";
import RouteIndicator from "../utils/router-indicator";
import { TasksContextProvider } from "../contexts/tasks/tasks-context";

const myFont = localFont({
  src: "../fonts/static/RobotoMono-Regular.ttf",
});
export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Set the animation duration (in milliseconds)
      offset: 200, // Set the offset (in pixels) from the element's top before the animation starts
      easing: "ease-in-out", // Set the easing function for the animation
      delay: 100, // Set the delay (in milliseconds) before the animation starts})
    });
  }, []);
  return (
    <>
      <Head>
        <title>Elastik</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <main className={myFont.className}>
        <ThemeSwitchProvider>
          <TasksContextProvider>
            <RouteIndicator />
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </TasksContextProvider>
        </ThemeSwitchProvider>
      </main>
    </>
  );
}
