//TODO : TABLE TASARIMI

import React, { Component, useState, useEffect, useCallback } from "react";
import Layout from "../components/Layout/Layout";
import Head from "next/head";
import styles from "../styles/RequestAndObjection.module.css";
import Checkbox from "@mui/material/Checkbox";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal } from "react-bootstrap";
const label = { inputProps: { "aria-label": "Checkbox demo" } };
import { Button } from "@mui/material";
import Link from "next/link";
import AppConstant from "../connect/app_constants";
import axios from "axios";
import Portal from "./loginportal";

const exclamationElement2 = (
  <FontAwesomeIcon
    icon={faCheck}
    className={`mx-auto ${styles.exclamationElement}`}
    style={{ color: "white" }}
  />
);
export default function CoursePickDrop() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [lecture, setLecture] = useState([]);
  const [postdata, setPostData] = useState([]);
  if (AppConstant.isLogged) {
    function handleOption(dersKodu) {
      let data = {
        dersKodu: dersKodu,
        onay: "Kesin Kayıt",
        harfNotu: "",
        sınavlar: [],
      };
      let i = 0;
      let status = true;
      for (i in postdata) {
        let veri = postdata[i];
        if (veri.dersKodu == dersKodu) {
          status = false;
          break;
        }
      }
      if (status) {
        postdata.push(data);
        setPostData(postdata);
      } else {
        console.log("oook");
        postdata.splice(i, i + 1);
        setPostData(postdata);
      }
      console.log(postdata);
    }
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
        fetch("http://localhost:3001/coursepickdrop", requestOptions)
          .then((response) => {
            if (response.status >= 200 && response.status < 300) {
              setLoading(false);
              return response.json();
            } else {
              throw new Error("Error: Could not fetch the data");
            }
          })
          .then((posts) => {
            setLecture(posts.data);
          })
          .catch((e) => {
            setError(true);
            setLoading(false);
          });
      };
      fetchData();
    }, []);

    const connect = useCallback(async () => {
      axios
        .get("http://localhost:3001/coursepickdrop", {
          headers: {
            token: AppConstant.token,
          },
        })
        .then(function (response) {
          if (response.data.result == true) {
            setLecture(response.data.data);
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    });
    if (loading) {
      return <h3>Loading ...</h3>;
    }

    if (error) {
      return <h3>Error in the API call itself ...</h3>;
    }
    return (
      <>
        <Modal
          show={show}
          onHide={handleClose}
          centered
          className={`mx-auto my-auto`}
        >
          <Modal.Header closeButton>
            <Modal.Title>Ders Alma</Modal.Title>
          </Modal.Header>
          <form>
            <Modal.Body>
              <p>
                Ders seçim işlemi onaylandıktan sonra değiştirilemez. Onaylıyor
                musunuz?
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Link href="/coursepickdrop">
                <button
                  id="btn3"
                  onClick={(e) => {
                    console.log(postdata);
                    axios
                      .post(
                        "http://localhost:3001/coursepickdrop",
                        { data: postdata },
                        {
                          headers: {
                            token: AppConstant.token,
                          },
                        }
                      )
                      .then(function (response) {
                        if (response.data.result == true) {
                          console.log("oook");

                          handleClose();
                          connect();
                          e.preventDefault();
                        }
                      })
                      .catch(function (error) {
                        console.log(error);
                      });
                  }}
                  className={`button w-100 ${styles.button}`}
                >
                  {exclamationElement2}
                  &nbsp; Onayla
                </button>
              </Link>
            </Modal.Footer>
          </form>
        </Modal>
        <Head>
          <title>Ders Listesi - İÜC ÖBS</title>
        </Head>

        <Layout
          appBar={{
            links: { "Ana Sayfa": "/", "Ders Listesi": "/lectureList" },
            title: "Ders Listesi",
          }}
        >
          {lecture.length == 0 ? (
            <h4 style={{ textAlign: "center" }}>
              Şu an ders seçimi dışındasınız.
            </h4>
          ) : (
            <>
              <div className={`container ${styles.mainContainer}`}>
                <div style={{ textAlign: "center" }}>
                  <div className={`row`} style={{ paddingTop: "0.5rem" }}>
                    <div className={`col-1 my-auto ${styles.baslik}`}>
                      Seçim
                    </div>
                    <div className={`${styles.mycol} my-auto`}>
                      <div className={`${styles.verticalLine}`}></div>
                    </div>
                    <div className={`col-1 my-auto ${styles.baslik}`}>
                      Sınıf
                    </div>
                    <div className={`${styles.mycol} my-auto`}>
                      <div className={`${styles.verticalLine}`}></div>
                    </div>
                    <div className={`col-2 my-auto ${styles.baslik}`}>
                      Ders Adı
                    </div>
                    <div className={`${styles.mycol} my-auto`}>
                      <div className={`${styles.verticalLine}`}></div>
                    </div>
                    <div className={`col-1 my-auto ${styles.baslik}`}>
                      Ders Türü
                    </div>
                    <div className={`${styles.mycol} my-auto`}>
                      <div className={`${styles.verticalLine}`}></div>
                    </div>
                    <div className={`col-1 my-auto ${styles.baslik}`}>
                      Ders Kodu
                    </div>
                    <div className={`${styles.mycol} my-auto`}>
                      <div className={`${styles.verticalLine}`}></div>
                    </div>
                    <div className={`col-2 my-auto ${styles.baslik}`}>
                      Danışman Adı
                    </div>
                    <div className={`${styles.mycol} my-auto`}>
                      <div className={`${styles.verticalLine}`}></div>
                    </div>
                    <div className={`col-1 my-auto ${styles.baslik}`}>
                      T. Kredi
                    </div>
                    <div className={`${styles.mycol} my-auto`}>
                      <div className={`${styles.verticalLine}`}></div>
                    </div>
                    <div className={`col-2 my-auto ${styles.baslik}`}>
                      Ders Onay
                    </div>
                  </div>
                </div>

                <div className={`${styles.horizontalLine2}`}></div>
                {lecture.map((i) => {
                  return (
                    <>
                      <div id="1" className={`row ${styles.row}`}>
                        <div
                          name="derssecim"
                          className={`col-1 my-auto ${styles.rows}`}
                        >
                          <Checkbox
                            {...label}
                            onChange={() => {
                              handleOption(i.dersKodu);
                            }}
                          />
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                          <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div
                          name="derssinif"
                          className={`col-1 my-auto ${styles.rows}`}
                        >
                          {i.donem.toString() + ". Dönem"}
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                          <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div
                          name="dersadi"
                          className={`col-2 my-auto ${styles.rows}`}
                        >
                          {i.dersAdi}
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                          <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div
                          name="dersturu"
                          className={`col-1 my-auto ${styles.rows}`}
                        >
                          {i.tur == "S" ? "Seçmeli" : "Zorunlu"}
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                          <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div
                          name="derskodu"
                          className={`col-1 my-auto ${styles.rows}`}
                        >
                          {i.dersKodu}
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                          <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div
                          name="dersdanisman"
                          className={`col-2 my-auto ${styles.rows}`}
                        >
                          {i.danisman}
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                          <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div
                          name="toplamkredi"
                          className={`col-1 my-auto ${styles.rows}`}
                        >
                          {i.toplamKredi}
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                          <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div
                          name="dersonay"
                          className={`col-2 my-auto ${styles.rows}`}
                        ></div>
                      </div>
                      <div className={`${styles.horizontalLine}`}></div>
                    </>
                  );
                })}

                <div id="4" className={`row ${styles.row}`}>
                  <div
                    name="dersonay"
                    className={`col-2 my-auto ${styles.rows}`}
                  ></div>
                  <hr></hr>

                  <div className="row">
                    <div className="col-12">
                      <div style={{ float: "right" }}>
                        <Button
                          variant="contained"
                          color="primary"
                          className="float-right"
                          onClick={handleShow}
                        >
                          Onayla
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </Layout>
      </>
    );
  } else {
    return <Portal></Portal>;
  }
}
