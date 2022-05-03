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
        >
          <div className={styles.gradePanel}>
            <table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>DERS ADI</th>
                  <th>HARF NOTU</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>BİLGİSAYAR MİMARİSİ</td>
                  <td>AA</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Layout>
      </>
    );
  }
}

export default Home;
