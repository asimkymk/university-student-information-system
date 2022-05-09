//TODO : TABLE TASARIMI

import React, { Component } from "react";
import Layout from "../components/Layout/Layout";
import Head from "next/head";
import styles from "../styles/Grade.module.css";
class Home extends Component {
  constructor(props, children) {
    super(props);
    this.props = props;
    this.children = children;
    this.router = this.props.router;
  }
  componentDidMount() {
    if (this.props.isLogin == false) {
      this.router.push("/loginportal/");
    }
  }
  render() {
    return (
      <>
        <Head>
          <title>Not Bilgisi - İÜC ÖBS</title>
        </Head>
        <Layout
          appBar={{
            links: { "Ana Sayfa": "/", "Not Bilgisi": "/grade" },
            title: "Not Bilgisi",
          }}
        ></Layout>
      </>
    );
  }
}

export default Home;
