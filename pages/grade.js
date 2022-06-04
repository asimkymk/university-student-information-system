import Head from "next/head";
import React, { Component, useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import $ from "jquery";
import styles from "../styles/RequestAndObjection.module.css";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import AppConstant from "../connect/app_constants";
import Portal from "./loginportal";
export default function Grade() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [grade, setGrade] = useState([]);
  if (AppConstant.isLogged) {
    const requestOptions = {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Accept: "application/json",
        token: AppConstant.token,
      },
    };
    useEffect(() => {
      const fetchData = () => {
        fetch("http://localhost:3001/grade", requestOptions)
          .then((response) => {
            if (response.status >= 200 && response.status < 300) {
              setLoading(false);
              return response.json();
            } else {
              throw new Error("Error: Could not fetch the data");
            }
          })
          .then((posts) => {
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
            <div
              className={`container ${styles.mainContainer}`}
              style={{ fontWeight: "400", textAlign: "center" }}
            >
              <div className={`row`}>
                <div className={`col-5 my-auto ${styles.baslik}`}>Ders Adı</div>
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
              {grade.map((i) => (
                <>
                  <div
                    className={`row ${styles.dersler}`}
                    style={{ background: "rgb(241, 242, 247)" }}
                    onClick={(e) => {
                      if ($("#" + i.dersKodu).is(":visible")) {
                        $(e.currentTarget).css("background", "#F1F2F7");
                      } else {
                        $(e.currentTarget).css("background", "#fff");
                      }
                      $("#" + i.dersKodu).slideToggle(300);
                    }}
                  >
                    <div className={`col-5 my-auto ${styles.rows}`}>
                      {i.dersAdi}
                    </div>
                    <div className={`${styles.mycol} my-auto`}>
                      <div className={`${styles.verticalLine}`}></div>
                    </div>
                    <div className={`col-4 my-auto ${styles.rows}`}>
                      {i.toplamKredi}
                    </div>
                    <div className={`${styles.mycol} my-auto`}>
                      <div className={`${styles.verticalLine}`}></div>
                    </div>
                    <div className={`col-2 my-auto ${styles.rows}`}>
                      {i.harfNotu}
                    </div>
                  </div>
                  <div
                    id={i.dersKodu}
                    className={`row ${styles.row} ${styles.info}`}
                    style={{
                      margin: "1rem",
                      marginRight: "2rem",
                      marginLeft: "2rem",
                      display: "none",
                    }}
                  >
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
                    {i.sınavlar.map((sinav) => (
                      <>
                        <div className={`row`}>
                          <div className={`col-4 my-auto ${styles.rows}`}>
                            {sinav.sinavTuru}
                          </div>
                          <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                          </div>
                          <div className={`col-3 my-auto ${styles.rows}`}>
                            {sinav.etkiOrani}
                          </div>
                          <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                          </div>
                          <div className={`col-3 my-auto ${styles.rows}`}>
                            {sinav.tarih}
                          </div>
                          <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                          </div>
                          <div className={`col-1 my-auto ${styles.rows}`}>
                            {sinav.not}
                          </div>
                        </div>
                        <div className={`${styles.horizontalLine}`}></div>
                      </>
                    ))}
                  </div>

                  <div className={`${styles.horizontalLine}`}></div>
                </>
              ))}
            </div>
          </div>
        </Layout>
      </>
    );
  } else {
    return <Portal></Portal>;
  }
}
