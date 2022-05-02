import Head from "next/head";
import React, { Component } from "react";
import Layout from "../components/Layout/Layout";

class Home extends Component {
  //TASRIM İÇİN GEÇİCİ ÇÖZÜM
  //NORMALDE AUTHENTICATION İLE ÇÖZÜM ÜRETİLECEK.
  constructor(props, children) {
    super(props);
    this.props = props;
    this.children = children;
    this.router = this.props.router;
  }
  componentDidMount() {
    if (this.props.isLogin == false) {
      this.router.push("/login/");
    }
  }
  render() {
    return (
      <>
        <Head>
          <title>Ana Sayfa - İÜC ÖBS</title>
        </Head>
        <Layout
          appBar={{ links: { "Ana Sayfa": "#" }, title: "Ana Sayfa" }}
        ></Layout>
      </>
    );
  }
}

export default Home;
