import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import $ from "jquery";
import { useEffect } from "react";
import Layout from "../components/Layout/Layout";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  var isLogin = false;
  if (isLogin) {
    return (
      <Layout>
        <Component {...pageProps} isLogin={isLogin} />
      </Layout>
    );
  } else {
    return <Component {...pageProps} isLogin={isLogin} />;
  }
}

export default MyApp;
