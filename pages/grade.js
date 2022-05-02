import React, { Component } from "react";
import Layout from "../components/Layout/Layout";
import Head from "next/head";
class Home extends Component {
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
          <title>Not Bilgisi - İÜC ÖBS</title>
        </Head>
        <Layout
          appBar={{ links: { "Ana Sayfa": "#", Notlar: "#" }, title: "Notlar" }}
        ></Layout>
      </>
    );
  }
}

export default Home;
