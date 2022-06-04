import Head from "next/head";
import React, { Component, useState, useEffect } from "react";
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
import header from "../connect/app_header.json";
/*
async function getir() {
  /*axios({
    method: "get",
    url: `http://localhost:3001`,
    data : JSON.stringify({
      tcNo:"45262969542",
    }),
    headers: {
      "token": AppConstant.token,
      
    },
  }).then((response) => {
    console.log(response.data);
  });
  
  axios
    .post(
      "http://localhost:3001",
      {
        tcNo: "45262969542",
      },

      {
        headers: {
          token: AppConstant.token,
        },
      }
    )
    .then(function (response) {
      if (response.data.result == true) {
        return response.data;
      }
    })
    .catch(function (error) {
      console.log(error);
    });
}*/
export default function Index() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [user, setUser] = useState({});

  const router = useRouter();

  if (AppConstant.isLogged) {
    const requestOptions = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Accept: "application/json",
        token: AppConstant.token,
      },
      body: JSON.stringify({ tcNo: "45262969542" }),
    };
    useEffect(() => {
      const fetchData = () => {
        fetch("http://localhost:3001", requestOptions)
          .then((response) => {
            if (response.status >= 200 && response.status < 300) {
              setLoading(false);
              return response.json();
            } else {
              throw new Error("Error: Could not fetch the data");
            }
          })
          .then((posts) => {
            setUser(posts.data[0]);
          })
          .catch((e) => {
            setError(true);
            setLoading(false);
          });
      };
      fetchData();
    }, []);
    if (loading) {
      return <h3>Loading ...</h3>;
    }

    if (error) {
      return <h3>Error in the API call itself ...</h3>;
    }

    return (
      <>
        <Head>
          <title>{}</title>
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
                        <p className={`card-text ${styles.cardText}`}>
                          {user.alinanDers}
                        </p>
                      </div>
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
                        <p className={`card-text ${styles.cardText}`}>
                          {user.notOrtalamasi}
                        </p>
                      </div>
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
                        <p className={`card-text ${styles.cardText}`}>
                          {user.bulunulanSinif}
                        </p>
                      </div>
                    </div>
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
                      <Chart data={user.donemOrtalamalari}></Chart>
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
                      <Chart2 data={user.gunlukDersSayisi}></Chart2>
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
