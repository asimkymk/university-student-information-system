import Head from "next/head";
import React, { Component } from "react";
import styles from "../styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Layout from "../components/Layout/Layout";
import Chart from "../components/Chart/Chart";
import Chart2 from "../components/Chart/Chart2";
import { useRouter } from "next/router";
import {
  faBook,
  faStar,
  faCalendar,
  faPencil,
  faSuitcase,
  faX,
  faChartColumn,
  faHashtag,
} from "@fortawesome/free-solid-svg-icons";
import AppConstant from "../connect/app_constants";
import axios from "axios";
const bookElement = <FontAwesomeIcon icon={faBook} />;
const starElement = <FontAwesomeIcon icon={faStar} />;
const classElement = <FontAwesomeIcon icon={faCalendar} />;
const crossElement = <FontAwesomeIcon icon={faX} />;
const workElement = <FontAwesomeIcon icon={faSuitcase} />;
const homeworkElement = <FontAwesomeIcon icon={faPencil} />;
const chartElement = <FontAwesomeIcon icon={faChartColumn} />;
const countElement = <FontAwesomeIcon icon={faHashtag} />;
import Portal from "./loginportal";
export default function Index() {
  //TASRIM İÇİN GEÇİCİ ÇÖZÜM
  //NORMALDE AUTHENTICATION İLE ÇÖZÜM ÜRETİLECEK.
  const router = useRouter();
  console.log(AppConstant.token);

  if (AppConstant.isLogged) {
    axios
      .get("http://localhost:3001/", {
        headers: {
          token: AppConstant.token,
        },
      })
      .then(function (response) {
        // handle success
        console.log(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
    return (
      <>
        <Head>
          <title>{AppConstant.token}</title>
        </Head>
        <Layout appBar={{ links: { "Ana Sayfa": "/" }, title: "Ana Sayfa" }}>
          <div className={`container ${styles.container}`}>
            <div className="row d-flex justify-content-between">
              <div className={`col-xl-4 col-lg-6 col-md-6 col-sm-12`}>
                <div className={`card ${styles.card}`}>
                  <div className="row ">
                    <div className={`col-2  my-auto mx-auto`}>
                      <div className={`${styles.squareTop} ${styles.blue}`}>
                        <div className={`${styles.icons}`}>{bookElement}</div>
                      </div>
                    </div>
                    <div className={`col-10 mx-auto my-auto ${styles.cardSag}`}>
                      <div className={`card-body`}>
                        <h5 className={`card-title ${styles.cardTitle}`}>
                          Alınan Ders Sayısı
                        </h5>
                        <p className={`card-text ${styles.cardText}`}>6</p>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className={`${styles.horizontalLine}`}></div>
                    <div className={`${styles.info}`}>
                      Geçen yıla göre 1 ders fazla alıyorsun.
                    </div>
                  </div>
                </div>
              </div>
              <div className={`col-xl-4 col-lg-6 col-md-6 col-sm-12`}>
                <div className={`card ${styles.card}`}>
                  <div className={`row`}>
                    <div className={`col-2 my-auto mx-auto`}>
                      <div
                        className={`${styles.squareTop} ${styles.red} mx-auto my-auto`}
                      >
                        <div className={`${styles.icons}`}>{starElement}</div>
                      </div>
                    </div>
                    <div className={`col-10 mx-auto my-auto ${styles.cardSag}`}>
                      <div className={`card-body`}>
                        <h5 className={`card-title ${styles.cardTitle}`}>
                          Not Ortalaması
                        </h5>
                        <p className={`card-text ${styles.cardText}`}>3.78</p>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className={`${styles.horizontalLine}`}></div>
                    <div className={`${styles.info}`}>
                      Ortalama geçen yıla göre %40 arttı.
                    </div>
                  </div>
                </div>
              </div>
              <div className={`col-xl-4 col-lg-6 col-md-6 col-sm-12`}>
                <div className={`card ${styles.card}`}>
                  <div className="row">
                    <div className={`col-2 my-auto mx-auto`}>
                      <div className={`${styles.squareTop} ${styles.green}`}>
                        <div className={`${styles.icons}`}>{classElement}</div>
                      </div>
                    </div>
                    <div className={`col-10 mx-auto my-auto ${styles.cardSag}`}>
                      <div className={`card-body`}>
                        <h5 className={`card-title ${styles.cardTitle}`}>
                          Bulunulan Sınıf
                        </h5>
                        <p className={`card-text ${styles.cardText}`}>3</p>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className={`${styles.horizontalLine}`}></div>
                    <div className={`${styles.info}`}>&nbsp;</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={`row d-flex justify-content-between mt-5`}>
              <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12">
                <div className={`card ${styles.card} ${styles.chartCard}`}>
                  <div className={`row ${styles.chartRow}`}>
                    <span className={`${styles.chartText}`}>
                      Dönem Ortalamaları
                    </span>
                    <div>
                      <div
                        className={`${styles.squareTopChart} ${styles.gray}`}
                      >
                        <div className={`${styles.icons}`}>{chartElement}</div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="row mt-4"
                    style={{ position: "relative", top: "-75px" }}
                  >
                    <div className={`${styles.chart}`}>
                      <Chart></Chart>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12">
                <div className={`card ${styles.card} ${styles.chartCard}`}>
                  <div className={`row ${styles.chartRow}`}>
                    <div className={styles.chartText}>Günlük Ders Sayısı</div>
                    <div>
                      <div
                        className={`${styles.squareTopChart} ${styles.brown}`}
                      >
                        <div className={`${styles.icons}`}>{countElement}</div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="row mt-4"
                    style={{ position: "relative", top: "-75px" }}
                  >
                    <div className={`${styles.chart}`}>
                      <Chart2></Chart2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Layout>
      </>
    );
  } else {
    return <Portal></Portal>;
  }
}
