import '../styles/globals.css';
import { MoralisProvider } from "react-moralis";

function MyApp({ Component, pageProps }) {
  return ( <MoralisProvider
    appId="ytXQE4NNOblY1czR0gcCS8VRxAyTU45FspZx1hpq"
    serverUrl="https://r7ndnhrcfemr.usemoralis.com:2053/server"
  >
    {<Component {...pageProps} />}
  </MoralisProvider>
  );
}

export default MyApp
