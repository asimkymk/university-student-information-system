import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import $ from "jquery";
import { useEffect } from "react";
import Layout from "../components/Layout/Layout";
import { useRouter } from "next/router";
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  var isLogin = true;
  const router = useRouter();
  return <Component {...pageProps} isLogin={isLogin} router={router} />;
}

export default MyApp;
