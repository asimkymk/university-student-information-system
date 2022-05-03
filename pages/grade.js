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
          appBar={{
            links: { "Ana Sayfa": "#", "Not Bilgisi": "#" },
            title: "Not Bilgisi",
          }}
        >
          <div className={styles.gradePanel}>
            <div className={styles.gradePanelHeader}>
              <h6 className={styles.gradePanelHeaderText}>Dönem Notları</h6>
            </div>
            <table className="table align-items-center mb-0 mt-2">
              <thead>
                <tr>
                  <th
                    className={`text-uppercase text-secondary opacity-7 ${styles.textxxs} ${styles.fontWeightBolder}`}
                  >
                    Ders Adı
                  </th>
                  <th
                    className={`text-uppercase text-secondary opacity-7 ${styles.textxxs} ${styles.fontWeightBolder}`}
                  >
                    Öğretİm GörevlİSİ
                  </th>
                  <th
                    className={`text-uppercase text-secondary opacity-7 ${styles.textxxs} ${styles.fontWeightBolder}`}
                  >
                    Harf Notu
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <h6 class="mb-0 text-sm">Bilgisayar Mimarisi</h6>
                  </td>
                  <td>
                    <p class="text-xs text-secondary mb-0">
                      Prof. Dr. Ahmet Sertbaş
                    </p>
                  </td>
                  <td>
                    <span
                      className={`text-secondary ${styles.textxs} ${styles.fontWeightBold}`}
                    >
                      AA
                    </span>
                  </td>
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
