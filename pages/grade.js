import Head from "next/head";
import React, { Component } from "react";
import Layout from "../components/Layout/Layout";
import $ from "jquery";
import styles from "../styles/RequestAndObjection.module.css";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
class Home extends Component {

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
        >
          <div className={`container ${styles.mainContainer}`}>
            <div className={`container ${styles.mainContainer}`} style={{ fontWeight: "400", textAlign: "center" }} >

              <div className={`row`}>
                <div className={`col-5 my-auto ${styles.baslik}`}>
                  Ders Adı
                </div>
                <div className={`${styles.mycol} my-auto`}>
                  <div className={`${styles.verticalLine}`}></div>
                </div>
                <div className={`col-4 my-auto ${styles.baslik}`}>
                  Toplam Kredi
                </div>
                <div className={`${styles.mycol} my-auto`}>
                  <div className={`${styles.verticalLine}`}></div>
                </div>
                <div className={`col-2 my-auto ${styles.baslik}`}>
                  Harf Notu
                </div>
              </div>
              <hr></hr>

              <div className={`row ${styles.dersler}`} style={{ background: "rgb(241, 242, 247)" }} onClick={e => {
                if ($("#1").is(":visible")) {
                  $(e.currentTarget).css("background", "#F1F2F7");
                }
                else {
                  $(e.currentTarget).css("background", "#fff");
                }
                $("#1").slideToggle(300)
              }} >
                <div className={`col-5 my-auto ${styles.rows}`}>
                  BİLGİSAYAR MİMARİSİ
                </div>
                <div className={`${styles.mycol} my-auto`}>
                  <div className={`${styles.verticalLine}`}></div>
                </div>
                <div className={`col-4 my-auto ${styles.rows}`}>
                  6
                </div>
                <div className={`${styles.mycol} my-auto`}>
                  <div className={`${styles.verticalLine}`}></div>
                </div>
                <div className={`col-2 my-auto ${styles.rows}`}>
                  BA
                </div>
              </div>

              <div id='1' className={`row ${styles.row} ${styles.info}`} style={{ margin: "1rem", marginRight: "2rem", marginLeft: "2rem", display: "none" }}>
                <div className={`row`}>
                  <div className={`col-4 my-auto ${styles.baslik}`}>
                    Sınav Türü
                  </div>
                  <div className={`${styles.mycol} my-auto`}>
                    <div className={`${styles.verticalLine}`}></div>
                  </div>
                  <div className={`col-3 my-auto ${styles.baslik}`}>
                    Etki Oranı
                  </div>
                  <div className={`${styles.mycol} my-auto`}>
                    <div className={`${styles.verticalLine}`}></div>
                  </div>
                  <div className={`col-3 my-auto ${styles.baslik}`}>
                    Sınav İlan Tar.-Saat
                  </div>
                  <div className={`${styles.mycol} my-auto`}>
                    <div className={`${styles.verticalLine}`}></div>
                  </div>
                  <div className={`col-1 my-auto ${styles.baslik}`}>
                    Not
                  </div>
                </div>
                <div className={`${styles.horizontalLine2}`}></div>
                <div className={`row`}>
                  <div className={`col-4 my-auto ${styles.rows}`}>
                    Final
                  </div>
                  <div className={`${styles.mycol} my-auto`}>
                    <div className={`${styles.verticalLine}`}></div>
                  </div>
                  <div className={`col-3 my-auto ${styles.rows}`}>
                    50
                  </div>
                  <div className={`${styles.mycol} my-auto`}>
                    <div className={`${styles.verticalLine}`}></div>
                  </div>
                  <div className={`col-3 my-auto ${styles.rows}`}>
                    12.01.2021
                  </div>
                  <div className={`${styles.mycol} my-auto`}>
                    <div className={`${styles.verticalLine}`}></div>
                  </div>
                  <div className={`col-1 my-auto ${styles.rows}`}>
                    79
                  </div>
                </div>
                <div className={`${styles.horizontalLine}`}></div>
                <div className={`row`}>
                  <div className={`col-4 my-auto ${styles.rows}`}>
                    Vize
                  </div>
                  <div className={`${styles.mycol} my-auto`}>
                    <div className={`${styles.verticalLine}`}></div>
                  </div>
                  <div className={`col-3 my-auto ${styles.rows}`}>
                    25
                  </div>
                  <div className={`${styles.mycol} my-auto`}>
                    <div className={`${styles.verticalLine}`}></div>
                  </div>
                  <div className={`col-3 my-auto ${styles.rows}`}>
                    12.01.2021
                  </div>
                  <div className={`${styles.mycol} my-auto`}>
                    <div className={`${styles.verticalLine}`}></div>
                  </div>
                  <div className={`col-1 my-auto ${styles.rows}`}>
                    79
                  </div>
                </div>
                <div className={`${styles.horizontalLine}`}></div>
                <div className={`row`}>
                  <div className={`col-4 my-auto ${styles.rows}`}>
                    Ödev
                  </div>
                  <div className={`${styles.mycol} my-auto`}>
                    <div className={`${styles.verticalLine}`}></div>
                  </div>
                  <div className={`col-3 my-auto ${styles.rows}`}>
                    25
                  </div>
                  <div className={`${styles.mycol} my-auto`}>
                    <div className={`${styles.verticalLine}`}></div>
                  </div>
                  <div className={`col-3 my-auto ${styles.rows}`}>
                    12.01.2021
                  </div>
                  <div className={`${styles.mycol} my-auto`}>
                    <div className={`${styles.verticalLine}`}></div>
                  </div>
                  <div className={`col-1 my-auto ${styles.rows}`}>
                    67
                  </div>
                </div>

              </div>
              <div className={`${styles.horizontalLine}`}></div>
              <div className={`row ${styles.dersler}`} style={{ background: "rgb(241, 242, 247)" }} onClick={e => {
                if ($("#2").is(":visible")) {
                  $(e.currentTarget).css("background", "#F1F2F7");
                }
                else {
                  $(e.currentTarget).css("background", "#fff");
                }
                $("#2").slideToggle(300)
              }} >
                <div className={`col-5 my-auto ${styles.rows}`}>
                  COMPUTER NETWORKS AND TECHNOLOGIES
                </div>
                <div className={`${styles.mycol} my-auto`}>
                  <div className={`${styles.verticalLine}`}></div>
                </div>
                <div className={`col-4 my-auto ${styles.rows}`}>
                  4
                </div>
                <div className={`${styles.mycol} my-auto`}>
                  <div className={`${styles.verticalLine}`}></div>
                </div>
                <div className={`col-2 my-auto ${styles.rows}`}>
                  BA
                </div>
              </div>
              <div id='2' className={`row ${styles.row} ${styles.info}`} style={{ margin: "1rem", marginRight: "2rem", marginLeft: "2rem", display: "none" }}>
                <div className={`row`}>
                  <div className={`col-4 my-auto ${styles.baslik}`}>
                    Sınav Türü
                  </div>
                  <div className={`${styles.mycol} my-auto`}>
                    <div className={`${styles.verticalLine}`}></div>
                  </div>
                  <div className={`col-3 my-auto ${styles.baslik}`}>
                    Etki Oranı
                  </div>
                  <div className={`${styles.mycol} my-auto`}>
                    <div className={`${styles.verticalLine}`}></div>
                  </div>
                  <div className={`col-3 my-auto ${styles.baslik}`}>
                    Sınav İlan Tar.-Saat
                  </div>
                  <div className={`${styles.mycol} my-auto`}>
                    <div className={`${styles.verticalLine}`}></div>
                  </div>
                  <div className={`col-1 my-auto ${styles.baslik}`}>
                    Not
                  </div>
                </div>
                <div className={`${styles.horizontalLine2}`}></div>
                <div className={`row`}>
                  <div className={`col-4 my-auto ${styles.rows}`}>
                    Final
                  </div>
                  <div className={`${styles.mycol} my-auto`}>
                    <div className={`${styles.verticalLine}`}></div>
                  </div>
                  <div className={`col-3 my-auto ${styles.rows}`}>
                    50
                  </div>
                  <div className={`${styles.mycol} my-auto`}>
                    <div className={`${styles.verticalLine}`}></div>
                  </div>
                  <div className={`col-3 my-auto ${styles.rows}`}>
                    12.01.2021
                  </div>
                  <div className={`${styles.mycol} my-auto`}>
                    <div className={`${styles.verticalLine}`}></div>
                  </div>
                  <div className={`col-1 my-auto ${styles.rows}`}>
                    79
                  </div>
                </div>
                <div className={`${styles.horizontalLine}`}></div>
                <div className={`row`}>
                  <div className={`col-4 my-auto ${styles.rows}`}>
                    Vize
                  </div>
                  <div className={`${styles.mycol} my-auto`}>
                    <div className={`${styles.verticalLine}`}></div>
                  </div>
                  <div className={`col-3 my-auto ${styles.rows}`}>
                    25
                  </div>
                  <div className={`${styles.mycol} my-auto`}>
                    <div className={`${styles.verticalLine}`}></div>
                  </div>
                  <div className={`col-3 my-auto ${styles.rows}`}>
                    12.01.2021
                  </div>
                  <div className={`${styles.mycol} my-auto`}>
                    <div className={`${styles.verticalLine}`}></div>
                  </div>
                  <div className={`col-1 my-auto ${styles.rows}`}>
                    79
                  </div>
                </div>
                <div className={`${styles.horizontalLine}`}></div>
                <div className={`row`}>
                  <div className={`col-4 my-auto ${styles.rows}`}>
                    Ödev
                  </div>
                  <div className={`${styles.mycol} my-auto`}>
                    <div className={`${styles.verticalLine}`}></div>
                  </div>
                  <div className={`col-3 my-auto ${styles.rows}`}>
                    25
                  </div>
                  <div className={`${styles.mycol} my-auto`}>
                    <div className={`${styles.verticalLine}`}></div>
                  </div>
                  <div className={`col-3 my-auto ${styles.rows}`}>
                    12.01.2021
                  </div>
                  <div className={`${styles.mycol} my-auto`}>
                    <div className={`${styles.verticalLine}`}></div>
                  </div>
                  <div className={`col-1 my-auto ${styles.rows}`}>
                    67
                  </div>
                </div>

              </div>
            </div>
          </div>
        </Layout>
      </>
    );
  }
}

export default Home;
