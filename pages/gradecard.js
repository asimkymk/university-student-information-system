//TODO : TABLE TASARIMI

import React, { Component, useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import Head from "next/head";
import $ from "jquery";
import styles from "../styles/RequestAndObjection.module.css";
import AppConstant from "../connect/app_constants";
import Portal from "./loginportal";
export default function GradeCard() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [grade, setGrade] = useState([]);
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
        fetch("http://localhost:3001/gradecard", requestOptions)
          .then((response) => {
            if (response.status >= 200 && response.status < 300) {
              setLoading(false);
              return response.json();
            } else {
              throw new Error("Error: Could not fetch the data");
            }
          })
          .then((posts) => {
            console.log(posts.data);
            setGrade(posts.data);
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
    console.log(grade);

    return (
      <>
        <Head>
          <title>Not Kartı - İÜC ÖBS</title>
        </Head>

        <Layout
          appBar={{
            links: { "Ana Sayfa": "/", "Not Kartı": "/gradecard" },
            title: "Not Kartı",
          }}
        >
          <div className={`container ${styles.mainContainer}`}>
            <div style={{ textAlign: "center" }}>
              <div
                className={`container ${styles.mainContainer} ${styles.donem}`}
                onClick={(e) => {
                  if ($("#donem1").is(":visible")) {
                    $(e.currentTarget.parentElement.parentElement).css(
                      "background",
                      "#D3D1CE"
                    );
                    $(e.currentTarget).css("background", "#D3D1CE");
                  } else {
                    $(e.currentTarget.parentElement.parentElement).css(
                      "background",
                      "#fff"
                    );
                    $(e.currentTarget).css("background", "#fff");
                  }
                  $("#donem1").slideToggle(300);
                }}
              >
                1. Dönem
              </div>
              <div id="donem1">
                <hr></hr>
                <div className={`row`}>
                  <div className={`col-2 my-auto ${styles.baslik}`}>Kod</div>
                  <div className={`${styles.mycol} my-auto`}>
                    <div className={`${styles.verticalLine}`}></div>
                  </div>
                  <div className={`col-3 my-auto ${styles.baslik}`}>Ad</div>
                  <div className={`${styles.mycol} my-auto`}>
                    <div className={`${styles.verticalLine}`}></div>
                  </div>
                  <div className={`col-1 my-auto ${styles.baslik}`}>Not</div>
                  <div className={`${styles.mycol} my-auto`}>
                    <div className={`${styles.verticalLine}`}></div>
                  </div>
                  <div className={`col-2 my-auto ${styles.baslik}`}>Kredi</div>
                  <div className={`${styles.mycol} my-auto`}>
                    <div className={`${styles.verticalLine}`}></div>
                  </div>
                  <div className={`col-2 my-auto ${styles.baslik}`}>AKTS</div>
                  <div className={`${styles.mycol} my-auto`}>
                    <div className={`${styles.verticalLine}`}></div>
                  </div>
                  <div className={`col-1 my-auto ${styles.baslik}`}>Z/S</div>
                </div>

                <div className={`${styles.horizontalLine2}`}></div>
                {grade.map((i) => {
                  if (i.donem == 1) {
                    return (
                      <>
                        <div className={`row ${styles.row}`}>
                          <div className={`col-2 my-auto ${styles.rows}`}>
                            {i.dersKodu}
                          </div>
                          <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                          </div>
                          <div className={`col-3 my-auto ${styles.rows}`}>
                            {i.dersAdi}
                          </div>
                          <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                          </div>
                          <div className={`col-1 my-auto ${styles.rows}`}>
                            {i.harfNotu}
                          </div>
                          <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                          </div>
                          <div className={`col-2 my-auto ${styles.rows}`}>
                            {i.t}
                          </div>
                          <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                          </div>
                          <div className={`col-2 my-auto ${styles.rows}`}>
                            {i.toplamKredi}
                          </div>
                          <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                          </div>
                          <div className={`col-1 my-auto ${styles.rows}`}>
                            {i.tur}
                          </div>
                        </div>
                        <div className={`${styles.horizontalLine}`}></div>
                      </>
                    );
                  }
                })}

                <hr></hr>
                <div className={styles.info}>
                  <div className={`row ${styles.row}`}>
                    <div className={`col-6 my-auto ${styles.grade1}`}></div>
                    <div className={`col-6 my-auto ${styles.grade2}`}>
                      <b>AGNO:</b>
                      {AppConstant.agno[0]}
                    </div>
                  </div>
                  <div className={`${styles.horizontalLine}`}></div>
                </div>
              </div>
            </div>
          </div>
          <div className={`container ${styles.mainContainer}`}>
            <div style={{ textAlign: "center" }}>
              <div
                className={`container ${styles.mainContainer} ${styles.donem}`}
                onClick={(e) => {
                  if ($("#donem2").is(":visible")) {
                    $(e.currentTarget.parentElement.parentElement).css(
                      "background",
                      "#D3D1CE"
                    );
                    $(e.currentTarget).css("background", "#D3D1CE");
                  } else {
                    $(e.currentTarget.parentElement.parentElement).css(
                      "background",
                      "#fff"
                    );
                    $(e.currentTarget).css("background", "#fff");
                  }
                  $("#donem2").slideToggle(300);
                }}
              >
                2. DÖNEM
              </div>

              <div id="donem2">
                <hr></hr>
                <div className={`row`}>
                  <div className={`col-2 my-auto ${styles.baslik}`}>Kod</div>
                  <div className={`${styles.mycol} my-auto`}>
                    <div className={`${styles.verticalLine}`}></div>
                  </div>
                  <div className={`col-3 my-auto ${styles.baslik}`}>Ad</div>
                  <div className={`${styles.mycol} my-auto`}>
                    <div className={`${styles.verticalLine}`}></div>
                  </div>
                  <div className={`col-1 my-auto ${styles.baslik}`}>Not</div>
                  <div className={`${styles.mycol} my-auto`}>
                    <div className={`${styles.verticalLine}`}></div>
                  </div>
                  <div className={`col-2 my-auto ${styles.baslik}`}>Kredi</div>
                  <div className={`${styles.mycol} my-auto`}>
                    <div className={`${styles.verticalLine}`}></div>
                  </div>
                  <div className={`col-2 my-auto ${styles.baslik}`}>AKTS</div>
                  <div className={`${styles.mycol} my-auto`}>
                    <div className={`${styles.verticalLine}`}></div>
                  </div>
                  <div className={`col-1 my-auto ${styles.baslik}`}>Z/S</div>
                </div>

                <div className={`${styles.horizontalLine2}`}></div>
                {grade.map((i) => {
                  if (i.donem == 2) {
                    return (
                      <>
                        <div className={`row ${styles.row}`}>
                          <div className={`col-2 my-auto ${styles.rows}`}>
                            {i.dersKodu}
                          </div>
                          <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                          </div>
                          <div className={`col-3 my-auto ${styles.rows}`}>
                            {i.dersAdi}
                          </div>
                          <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                          </div>
                          <div className={`col-1 my-auto ${styles.rows}`}>
                            {i.harfNotu}
                          </div>
                          <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                          </div>
                          <div className={`col-2 my-auto ${styles.rows}`}>
                            {i.t}
                          </div>
                          <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                          </div>
                          <div className={`col-2 my-auto ${styles.rows}`}>
                            {i.toplamKredi}
                          </div>
                          <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                          </div>
                          <div className={`col-1 my-auto ${styles.rows}`}>
                            {i.tur}
                          </div>
                        </div>
                        <div className={`${styles.horizontalLine}`}></div>
                      </>
                    );
                  }
                })}
                <hr></hr>
                <div className={styles.info}>
                  <div className={`row ${styles.row}`}>
                    <div className={`col-6 my-auto ${styles.grade1}`}></div>
                    <div className={`col-6 my-auto ${styles.grade2}`}>
                      <b>AGNO:</b>
                      {AppConstant.agno[1]}
                    </div>
                  </div>
                  <div className={`${styles.horizontalLine}`}></div>
                </div>
              </div>
            </div>
          </div>

          <div className={`container ${styles.mainContainer}`}>
            <div style={{ textAlign: "center" }}>
              <div
                className={`container ${styles.mainContainer} ${styles.donem}`}
                onClick={(e) => {
                  if ($("#donem3").is(":visible")) {
                    $(e.currentTarget.parentElement.parentElement).css(
                      "background",
                      "#D3D1CE"
                    );
                    $(e.currentTarget).css("background", "#D3D1CE");
                  } else {
                    $(e.currentTarget.parentElement.parentElement).css(
                      "background",
                      "#fff"
                    );
                    $(e.currentTarget).css("background", "#fff");
                  }
                  $("#donem3").slideToggle(300);
                }}
              >
                3. DÖNEM
              </div>

              <div id="donem3">
                <hr></hr>
                <div className={`row`}>
                  <div className={`col-2 my-auto ${styles.baslik}`}>Kod</div>
                  <div className={`${styles.mycol} my-auto`}>
                    <div className={`${styles.verticalLine}`}></div>
                  </div>
                  <div className={`col-3 my-auto ${styles.baslik}`}>Ad</div>
                  <div className={`${styles.mycol} my-auto`}>
                    <div className={`${styles.verticalLine}`}></div>
                  </div>
                  <div className={`col-1 my-auto ${styles.baslik}`}>Not</div>
                  <div className={`${styles.mycol} my-auto`}>
                    <div className={`${styles.verticalLine}`}></div>
                  </div>
                  <div className={`col-2 my-auto ${styles.baslik}`}>Kredi</div>
                  <div className={`${styles.mycol} my-auto`}>
                    <div className={`${styles.verticalLine}`}></div>
                  </div>
                  <div className={`col-2 my-auto ${styles.baslik}`}>AKTS</div>
                  <div className={`${styles.mycol} my-auto`}>
                    <div className={`${styles.verticalLine}`}></div>
                  </div>
                  <div className={`col-1 my-auto ${styles.baslik}`}>Z/S</div>
                </div>

                <div className={`${styles.horizontalLine2}`}></div>
                {grade.map((i) => {
                  if (i.donem == 3) {
                    return (
                      <>
                        <div className={`row ${styles.row}`}>
                          <div className={`col-2 my-auto ${styles.rows}`}>
                            {i.dersKodu}
                          </div>
                          <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                          </div>
                          <div className={`col-3 my-auto ${styles.rows}`}>
                            {i.dersAdi}
                          </div>
                          <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                          </div>
                          <div className={`col-1 my-auto ${styles.rows}`}>
                            {i.harfNotu}
                          </div>
                          <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                          </div>
                          <div className={`col-2 my-auto ${styles.rows}`}>
                            {i.t}
                          </div>
                          <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                          </div>
                          <div className={`col-2 my-auto ${styles.rows}`}>
                            {i.toplamKredi}
                          </div>
                          <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                          </div>
                          <div className={`col-1 my-auto ${styles.rows}`}>
                            {i.tur}
                          </div>
                        </div>
                        <div className={`${styles.horizontalLine}`}></div>
                      </>
                    );
                  }
                })}
                <hr></hr>
                <div className={styles.info}>
                  <div className={`row ${styles.row}`}>
                    <div className={`col-6 my-auto ${styles.grade1}`}></div>
                    <div className={`col-6 my-auto ${styles.grade2}`}>
                      <b>AGNO:</b>
                      {AppConstant.agno[2]}
                    </div>
                  </div>
                  <div className={`${styles.horizontalLine}`}></div>
                </div>
              </div>
            </div>
          </div>
          <div className={`container ${styles.mainContainer}`}>
            <div style={{ textAlign: "center" }}>
              <div
                className={`container ${styles.mainContainer} ${styles.donem}`}
                onClick={(e) => {
                  if ($("#donem4").is(":visible")) {
                    $(e.currentTarget.parentElement.parentElement).css(
                      "background",
                      "#D3D1CE"
                    );
                    $(e.currentTarget).css("background", "#D3D1CE");
                  } else {
                    $(e.currentTarget.parentElement.parentElement).css(
                      "background",
                      "#fff"
                    );
                    $(e.currentTarget).css("background", "#fff");
                  }
                  $("#donem4").slideToggle(300);
                }}
              >
                4. DÖNEM
              </div>

              <div id="donem4">
                <hr></hr>
                <div className={`row`}>
                  <div className={`col-2 my-auto ${styles.baslik}`}>Kod</div>
                  <div className={`${styles.mycol} my-auto`}>
                    <div className={`${styles.verticalLine}`}></div>
                  </div>
                  <div className={`col-3 my-auto ${styles.baslik}`}>Ad</div>
                  <div className={`${styles.mycol} my-auto`}>
                    <div className={`${styles.verticalLine}`}></div>
                  </div>
                  <div className={`col-1 my-auto ${styles.baslik}`}>Not</div>
                  <div className={`${styles.mycol} my-auto`}>
                    <div className={`${styles.verticalLine}`}></div>
                  </div>
                  <div className={`col-2 my-auto ${styles.baslik}`}>Kredi</div>
                  <div className={`${styles.mycol} my-auto`}>
                    <div className={`${styles.verticalLine}`}></div>
                  </div>
                  <div className={`col-2 my-auto ${styles.baslik}`}>AKTS</div>
                  <div className={`${styles.mycol} my-auto`}>
                    <div className={`${styles.verticalLine}`}></div>
                  </div>
                  <div className={`col-1 my-auto ${styles.baslik}`}>Z/S</div>
                </div>

                <div className={`${styles.horizontalLine2}`}></div>
                {grade.map((i) => {
                  if (i.donem == 4) {
                    return (
                      <>
                        <div className={`row ${styles.row}`}>
                          <div className={`col-2 my-auto ${styles.rows}`}>
                            {i.dersKodu}
                          </div>
                          <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                          </div>
                          <div className={`col-3 my-auto ${styles.rows}`}>
                            {i.dersAdi}
                          </div>
                          <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                          </div>
                          <div className={`col-1 my-auto ${styles.rows}`}>
                            {i.harfNotu}
                          </div>
                          <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                          </div>
                          <div className={`col-2 my-auto ${styles.rows}`}>
                            {i.t}
                          </div>
                          <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                          </div>
                          <div className={`col-2 my-auto ${styles.rows}`}>
                            {i.toplamKredi}
                          </div>
                          <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                          </div>
                          <div className={`col-1 my-auto ${styles.rows}`}>
                            {i.tur}
                          </div>
                        </div>
                        <div className={`${styles.horizontalLine}`}></div>
                      </>
                    );
                  }
                })}
                <hr></hr>
                <div className={styles.info}>
                  <div className={`row ${styles.row}`}>
                    <div className={`col-6 my-auto ${styles.grade1}`}></div>
                    <div className={`col-6 my-auto ${styles.grade2}`}>
                      <b>AGNO:</b>
                      {AppConstant.agno[3]}
                    </div>
                  </div>
                  <div className={`${styles.horizontalLine}`}></div>
                </div>
              </div>
            </div>
          </div>
          <div className={`container ${styles.mainContainer}`}>
            <div style={{ textAlign: "center" }}>
              <div
                className={`container ${styles.mainContainer} ${styles.donem}`}
                onClick={(e) => {
                  if ($("#donem5").is(":visible")) {
                    $(e.currentTarget.parentElement.parentElement).css(
                      "background",
                      "#D3D1CE"
                    );
                    $(e.currentTarget).css("background", "#D3D1CE");
                  } else {
                    $(e.currentTarget.parentElement.parentElement).css(
                      "background",
                      "#fff"
                    );
                    $(e.currentTarget).css("background", "#fff");
                  }
                  $("#donem5").slideToggle(300);
                }}
              >
                5. DÖNEM
              </div>

              <div id="donem5">
                <hr></hr>
                <div className={`row`}>
                  <div className={`col-2 my-auto ${styles.baslik}`}>Kod</div>
                  <div className={`${styles.mycol} my-auto`}>
                    <div className={`${styles.verticalLine}`}></div>
                  </div>
                  <div className={`col-3 my-auto ${styles.baslik}`}>Ad</div>
                  <div className={`${styles.mycol} my-auto`}>
                    <div className={`${styles.verticalLine}`}></div>
                  </div>
                  <div className={`col-1 my-auto ${styles.baslik}`}>Not</div>
                  <div className={`${styles.mycol} my-auto`}>
                    <div className={`${styles.verticalLine}`}></div>
                  </div>
                  <div className={`col-2 my-auto ${styles.baslik}`}>Kredi</div>
                  <div className={`${styles.mycol} my-auto`}>
                    <div className={`${styles.verticalLine}`}></div>
                  </div>
                  <div className={`col-2 my-auto ${styles.baslik}`}>AKTS</div>
                  <div className={`${styles.mycol} my-auto`}>
                    <div className={`${styles.verticalLine}`}></div>
                  </div>
                  <div className={`col-1 my-auto ${styles.baslik}`}>Z/S</div>
                </div>

                <div className={`${styles.horizontalLine2}`}></div>
                {grade.map((i) => {
                  if (i.donem == 5) {
                    return (
                      <>
                        <div className={`row ${styles.row}`}>
                          <div className={`col-2 my-auto ${styles.rows}`}>
                            {i.dersKodu}
                          </div>
                          <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                          </div>
                          <div className={`col-3 my-auto ${styles.rows}`}>
                            {i.dersAdi}
                          </div>
                          <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                          </div>
                          <div className={`col-1 my-auto ${styles.rows}`}>
                            {i.harfNotu}
                          </div>
                          <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                          </div>
                          <div className={`col-2 my-auto ${styles.rows}`}>
                            {i.t}
                          </div>
                          <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                          </div>
                          <div className={`col-2 my-auto ${styles.rows}`}>
                            {i.toplamKredi}
                          </div>
                          <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                          </div>
                          <div className={`col-1 my-auto ${styles.rows}`}>
                            {i.tur}
                          </div>
                        </div>
                        <div className={`${styles.horizontalLine}`}></div>
                      </>
                    );
                  }
                })}
                <hr></hr>
                <div className={styles.info}>
                  <div className={`row ${styles.row}`}>
                    <div className={`col-6 my-auto ${styles.grade1}`}></div>
                    <div className={`col-6 my-auto ${styles.grade2}`}>
                      <b>AGNO:</b>
                      {AppConstant.agno[4]}
                    </div>
                  </div>
                  <div className={`${styles.horizontalLine}`}></div>
                </div>
              </div>
            </div>
          </div>
          <div className={`container ${styles.mainContainer}`}>
            <div style={{ textAlign: "center" }}>
              <div
                className={`container ${styles.mainContainer} ${styles.donem}`}
                onClick={(e) => {
                  if ($("#donem6").is(":visible")) {
                    $(e.currentTarget.parentElement.parentElement).css(
                      "background",
                      "#D3D1CE"
                    );
                    $(e.currentTarget).css("background", "#D3D1CE");
                  } else {
                    $(e.currentTarget.parentElement.parentElement).css(
                      "background",
                      "#fff"
                    );
                    $(e.currentTarget).css("background", "#fff");
                  }
                  $("#donem6").slideToggle(300);
                }}
              >
                6. DÖNEM
              </div>

              <div id="donem6">
                <hr></hr>
                <div className={`row`}>
                  <div className={`col-2 my-auto ${styles.baslik}`}>Kod</div>
                  <div className={`${styles.mycol} my-auto`}>
                    <div className={`${styles.verticalLine}`}></div>
                  </div>
                  <div className={`col-3 my-auto ${styles.baslik}`}>Ad</div>
                  <div className={`${styles.mycol} my-auto`}>
                    <div className={`${styles.verticalLine}`}></div>
                  </div>
                  <div className={`col-1 my-auto ${styles.baslik}`}>Not</div>
                  <div className={`${styles.mycol} my-auto`}>
                    <div className={`${styles.verticalLine}`}></div>
                  </div>
                  <div className={`col-2 my-auto ${styles.baslik}`}>Kredi</div>
                  <div className={`${styles.mycol} my-auto`}>
                    <div className={`${styles.verticalLine}`}></div>
                  </div>
                  <div className={`col-2 my-auto ${styles.baslik}`}>AKTS</div>
                  <div className={`${styles.mycol} my-auto`}>
                    <div className={`${styles.verticalLine}`}></div>
                  </div>
                  <div className={`col-1 my-auto ${styles.baslik}`}>Z/S</div>
                </div>

                <div className={`${styles.horizontalLine2}`}></div>
                {grade.map((i) => {
                  if (i.donem == 6) {
                    return (
                      <>
                        <div className={`row ${styles.row}`}>
                          <div className={`col-2 my-auto ${styles.rows}`}>
                            {i.dersKodu}
                          </div>
                          <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                          </div>
                          <div className={`col-3 my-auto ${styles.rows}`}>
                            {i.dersAdi}
                          </div>
                          <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                          </div>
                          <div className={`col-1 my-auto ${styles.rows}`}>
                            {i.harfNotu}
                          </div>
                          <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                          </div>
                          <div className={`col-2 my-auto ${styles.rows}`}>
                            {i.t}
                          </div>
                          <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                          </div>
                          <div className={`col-2 my-auto ${styles.rows}`}>
                            {i.toplamKredi}
                          </div>
                          <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                          </div>
                          <div className={`col-1 my-auto ${styles.rows}`}>
                            {i.tur}
                          </div>
                        </div>
                        <div className={`${styles.horizontalLine}`}></div>
                      </>
                    );
                  }
                })}
                <hr></hr>
                <div className={styles.info}>
                  <div className={`row ${styles.row}`}>
                    <div className={`col-6 my-auto ${styles.grade1}`}></div>
                    <div className={`col-6 my-auto ${styles.grade2}`}>
                      <b>AGNO:</b>
                      {AppConstant.agno[5]}
                    </div>
                  </div>
                  <div className={`${styles.horizontalLine}`}></div>
                </div>
              </div>
            </div>
          </div>
          <div className={`container ${styles.mainContainer}`}>
            <div style={{ textAlign: "center" }}>
              <div
                className={`container ${styles.mainContainer} ${styles.donem}`}
                onClick={(e) => {
                  if ($("#donem7").is(":visible")) {
                    $(e.currentTarget.parentElement.parentElement).css(
                      "background",
                      "#D3D1CE"
                    );
                    $(e.currentTarget).css("background", "#D3D1CE");
                  } else {
                    $(e.currentTarget.parentElement.parentElement).css(
                      "background",
                      "#fff"
                    );
                    $(e.currentTarget).css("background", "#fff");
                  }
                  $("#donem7").slideToggle(300);
                }}
              >
                7. DÖNEM
              </div>

              <div id="donem7">
                <hr></hr>
                <div className={`row`}>
                  <div className={`col-2 my-auto ${styles.baslik}`}>Kod</div>
                  <div className={`${styles.mycol} my-auto`}>
                    <div className={`${styles.verticalLine}`}></div>
                  </div>
                  <div className={`col-3 my-auto ${styles.baslik}`}>Ad</div>
                  <div className={`${styles.mycol} my-auto`}>
                    <div className={`${styles.verticalLine}`}></div>
                  </div>
                  <div className={`col-1 my-auto ${styles.baslik}`}>Not</div>
                  <div className={`${styles.mycol} my-auto`}>
                    <div className={`${styles.verticalLine}`}></div>
                  </div>
                  <div className={`col-2 my-auto ${styles.baslik}`}>Kredi</div>
                  <div className={`${styles.mycol} my-auto`}>
                    <div className={`${styles.verticalLine}`}></div>
                  </div>
                  <div className={`col-2 my-auto ${styles.baslik}`}>AKTS</div>
                  <div className={`${styles.mycol} my-auto`}>
                    <div className={`${styles.verticalLine}`}></div>
                  </div>
                  <div className={`col-1 my-auto ${styles.baslik}`}>Z/S</div>
                </div>

                <div className={`${styles.horizontalLine2}`}></div>
                {grade.map((i) => {
                  if (i.donem == 7) {
                    return (
                      <>
                        <div className={`row ${styles.row}`}>
                          <div className={`col-2 my-auto ${styles.rows}`}>
                            {i.dersKodu}
                          </div>
                          <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                          </div>
                          <div className={`col-3 my-auto ${styles.rows}`}>
                            {i.dersAdi}
                          </div>
                          <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                          </div>
                          <div className={`col-1 my-auto ${styles.rows}`}>
                            {i.harfNotu}
                          </div>
                          <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                          </div>
                          <div className={`col-2 my-auto ${styles.rows}`}>
                            {i.t}
                          </div>
                          <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                          </div>
                          <div className={`col-2 my-auto ${styles.rows}`}>
                            {i.toplamKredi}
                          </div>
                          <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                          </div>
                          <div className={`col-1 my-auto ${styles.rows}`}>
                            {i.tur}
                          </div>
                        </div>
                        <div className={`${styles.horizontalLine}`}></div>
                      </>
                    );
                  }
                })}
                <hr></hr>
                <div className={styles.info}>
                  <div className={`row ${styles.row}`}>
                    <div className={`col-6 my-auto ${styles.grade1}`}></div>
                    <div className={`col-6 my-auto ${styles.grade2}`}>
                      <b>AGNO:</b>
                      {AppConstant.agno[6]}
                    </div>
                  </div>
                  <div className={`${styles.horizontalLine}`}></div>
                </div>
              </div>
            </div>
          </div>
          <div className={`container ${styles.mainContainer}`}>
            <div style={{ textAlign: "center" }}>
              <div
                className={`container ${styles.mainContainer} ${styles.donem}`}
                onClick={(e) => {
                  if ($("#donem8").is(":visible")) {
                    $(e.currentTarget.parentElement.parentElement).css(
                      "background",
                      "#D3D1CE"
                    );
                    $(e.currentTarget).css("background", "#D3D1CE");
                  } else {
                    $(e.currentTarget.parentElement.parentElement).css(
                      "background",
                      "#fff"
                    );
                    $(e.currentTarget).css("background", "#fff");
                  }
                  $("#donem8").slideToggle(300);
                }}
              >
                8. DÖNEM
              </div>

              <div id="donem8">
                <hr></hr>
                <div className={`row`}>
                  <div className={`col-2 my-auto ${styles.baslik}`}>Kod</div>
                  <div className={`${styles.mycol} my-auto`}>
                    <div className={`${styles.verticalLine}`}></div>
                  </div>
                  <div className={`col-3 my-auto ${styles.baslik}`}>Ad</div>
                  <div className={`${styles.mycol} my-auto`}>
                    <div className={`${styles.verticalLine}`}></div>
                  </div>
                  <div className={`col-1 my-auto ${styles.baslik}`}>Not</div>
                  <div className={`${styles.mycol} my-auto`}>
                    <div className={`${styles.verticalLine}`}></div>
                  </div>
                  <div className={`col-2 my-auto ${styles.baslik}`}>Kredi</div>
                  <div className={`${styles.mycol} my-auto`}>
                    <div className={`${styles.verticalLine}`}></div>
                  </div>
                  <div className={`col-2 my-auto ${styles.baslik}`}>AKTS</div>
                  <div className={`${styles.mycol} my-auto`}>
                    <div className={`${styles.verticalLine}`}></div>
                  </div>
                  <div className={`col-1 my-auto ${styles.baslik}`}>Z/S</div>
                </div>

                <div className={`${styles.horizontalLine2}`}></div>
                {grade.map((i) => {
                  if (i.donem == 8) {
                    return (
                      <>
                        <div className={`row ${styles.row}`}>
                          <div className={`col-2 my-auto ${styles.rows}`}>
                            {i.dersKodu}
                          </div>
                          <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                          </div>
                          <div className={`col-3 my-auto ${styles.rows}`}>
                            {i.dersAdi}
                          </div>
                          <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                          </div>
                          <div className={`col-1 my-auto ${styles.rows}`}>
                            {i.harfNotu}
                          </div>
                          <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                          </div>
                          <div className={`col-2 my-auto ${styles.rows}`}>
                            {i.t}
                          </div>
                          <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                          </div>
                          <div className={`col-2 my-auto ${styles.rows}`}>
                            {i.toplamKredi}
                          </div>
                          <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                          </div>
                          <div className={`col-1 my-auto ${styles.rows}`}>
                            {i.tur}
                          </div>
                        </div>
                        <div className={`${styles.horizontalLine}`}></div>
                      </>
                    );
                  }
                })}
                <hr></hr>
                <div className={styles.info}>
                  <div className={`row ${styles.row}`}>
                    <div className={`col-6 my-auto ${styles.grade1}`}></div>
                    <div className={`col-6 my-auto ${styles.grade2}`}>
                      <b>AGNO:</b>
                      {AppConstant.agno[7]}
                    </div>
                  </div>
                  <div className={`${styles.horizontalLine}`}></div>
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
