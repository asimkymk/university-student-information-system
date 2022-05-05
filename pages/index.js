import Head from "next/head";
import React, { Component } from "react";
import styles from "../styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Layout from "../components/Layout/Layout";
import {
  faBook,
  faStar,
  faCalendar
} from "@fortawesome/free-solid-svg-icons";
const bookElement = (
  <FontAwesomeIcon icon={faBook}/>
);
const starElement = (
  <FontAwesomeIcon icon={faStar}/>
);
const classElement = (
  <FontAwesomeIcon icon={faCalendar}/>
);
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
          appBar={{ links: { "Ana Sayfa": "/" }, title: "Ana Sayfa" }}
        >
          <div className={`container ${styles.container}`}>
            <div className="row d-flex justify-content-between">
              <div className={`col col-xl-4 col-lg-6 col-md-6 col-sm-12`}>
                <div className={`card ${styles.reddb} ${styles.card}`}>
                  <div className="row h-100">
                    <div className={`col-2 h-100 my-auto mx-auto`}>
                      <div className={`${styles.squareTop} ${styles.blue}`}>
                        <div style={{ paddingTop: "10px" }}>
                        {bookElement}
                        </div>
                      </div>
                    </div>
                    <div className={`col-10 mx-auto my-auto ${styles.cardSag}`}>
                      <div className={`card-body`}>
                        <h5 className={`card-title ${styles.cardTitle}`}>Alınan Ders Sayısı</h5>
                        <p className={`card-text ${styles.cardText}`}>6</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`col col-xl-4 col-lg-6 col-md-6 col-sm-12`}>
                <div className={`card ${styles.bluedb} ${styles.card}`}>
                  <div className={`row`}>
                    <div className={`col-2 my-auto mx-auto`}>
                      <div className={`${styles.squareTop} ${styles.red} mx-auto my-auto`}>
                        <div style={{ paddingTop: "10px" }}>
                        {starElement}
                        </div>
                      </div>
                    </div>
                    <div className={`col-10 mx-auto my-auto ${styles.cardSag}`}>
                      <div className={`card-body`}>
                        <h5 className={`card-title ${styles.cardTitle}`}>Not Ortalaması</h5>
                        <p className={`card-text ${styles.cardText}`}>3.78</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`col col-xl-4 col-lg-6 col-md-6 col-sm-12`}>
                <div className={`card ${styles.greendb} ${styles.card}`}>
                  <div className="row">
                    <div className={`col-2 my-auto mx-auto`}>
                      <div className={`${styles.squareTop} ${styles.green}`}>
                      <div style={{ paddingTop: "10px" }}>
                      {classElement}
                        </div>
                      </div>
                    </div>
                    <div className={`col-10 mx-auto my-auto ${styles.cardSag}`}>
                      <div className={`card-body`}>
                        <h5 className={`card-title ${styles.cardTitle}`}>Bulunulan Sınıf</h5>
                        <p className={`card-text ${styles.cardText}`}>3</p>
                      </div>
                    </div>
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
