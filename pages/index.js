import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home({ pageProps, isLogin }) {
  //TODO : ANA SAYFA TASARIMI
  console.log(isLogin);
  if (isLogin == false) {
    return <a href="/login">GirişŞ Yap</a>;
  }
}
