import { GlobalProvider } from "@utils/GlobalContext";
import "@styles/globals.css";
import "@styles/animate-scroll.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
  // return (
  //   <GlobalProvider>
  //     <Component {...pageProps} />
  //   </GlobalProvider>
  // )
}

export default MyApp