import '../../styles/globals.scss'
import type { AppProps } from "next/app";
import Page from "../components/page/page";
import { MetaTags } from "../meta/metaTag";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <MetaTags />
      <Page>
        <Component {...pageProps} />
      </Page>
    </div>
  );
}

export default MyApp;
