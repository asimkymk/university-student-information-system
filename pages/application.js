import React, { Component, useState, useEffect, useCallback } from "react";
import Layout from "../components/Layout/Layout";
import Head from "next/head";
import styles from "../styles/RequestAndObjection.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal } from "react-bootstrap";
import Link from "next/link";
import { useAsyncFn } from "react-use";
import {
  faExclamationCircle,
  faPlusCircle,
  faExternalLink,
} from "@fortawesome/free-solid-svg-icons";
import Portal from "./loginportal";
import header from "../connect/app_header.json";
import AppConstant from "../connect/app_constants";
import axios from "axios";
import { Router } from "@mui/icons-material";
const exclamationElement = (
  <FontAwesomeIcon
    icon={faExclamationCircle}
    className={`mx-auto ${styles.exclamationElement}`}
  />
);
const addElement = (
  <FontAwesomeIcon
    icon={faPlusCircle}
    className={`mx-auto ${styles.addElement}`}
  />
);
const externalElement = (
  <FontAwesomeIcon icon={faExternalLink} className={`mx-auto`} />
);
export default function Application() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [optionState, setOptionState] = useState("");
  const [application, setApplication] = useState([]);
  if (AppConstant.isLogged) {
    const handleChange = (event) => {
      setOptionState(event.target.value);
    };
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
        fetch("http://localhost:3001/application", requestOptions)
          .then((response) => {
            if (response.status >= 200 && response.status < 300) {
              setLoading(false);
              return response.json();
            } else {
              throw new Error("Error: Could not fetch the data");
            }
          })
          .then((posts) => {
            setApplication(posts.data);
            return posts.data;
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
        .get("http://localhost:3001/application", {
          headers: {
            token: AppConstant.token,
          },
        })
        .then(function (response) {
          if (response.data.result == true) {
            setApplication(response.data.data);
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    });
    connect();
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
            <Modal.Title>Başvuru</Modal.Title>
          </Modal.Header>
          <form>
            <Modal.Body>
              <label htmlFor="tur">Başvuru Türü</label>
              <select
                id="tur"
                name="secenekler"
                value={optionState}
                onChange={handleChange}
                className={`form-select ${styles.itirazModal}`}
                required
              >
                <option value="" disabled selected>
                  Başvuru türü seçiniz
                </option>
                <option
                  style={{ height: "28px" }}
                  value="2021-2022 Lisansüstü Online Başvuru"
                >
                  2021-2022 Lisansüstü Online Başvuru
                </option>
                <option
                  value="2022-2023 Eğitim Öğretim Dönemi Erasmus Staj Ek Çağrı
                  Başvurusu"
                >
                  2022-2023 Eğitim Öğretim Dönemi Erasmus Staj Ek Çağrı
                  Başvurusu
                </option>
                <option value="2021-2022 Lisansüstü Online Başvuru">
                  2021-2022 Lisansüstü Online Başvuru
                </option>
                <option
                  value="2022-2023 Eğitim Öğretim Dönemi Erasmus Staj Ek Çağrı
                  Başvurusu"
                >
                  2022-2023 Eğitim Öğretim Dönemi Erasmus Staj Ek Çağrı
                  Başvurusu
                </option>
                <option value="2021-2022 Lisansüstü Online Başvuru">
                  2021-2022 Lisansüstü Online Başvuru
                </option>
                <option
                  value="2022-2023 Eğitim Öğretim Dönemi Erasmus Staj Ek Çağrı
                  Başvurusu"
                >
                  2022-2023 Eğitim Öğretim Dönemi Erasmus Staj Ek Çağrı
                  Başvurusu
                </option>
                <option value="2021-2022 Lisansüstü Online Başvuru">
                  2021-2022 Lisansüstü Online Başvuru
                </option>
                <option
                  value="2022-2023 Eğitim Öğretim Dönemi Erasmus Staj Ek Çağrı
                  Başvurusu"
                >
                  2022-2023 Eğitim Öğretim Dönemi Erasmus Staj Ek Çağrı
                  Başvurusu
                </option>
              </select>
            </Modal.Body>
            <Modal.Footer>
              <Link href="/application">
                <button
                  id="btn3"
                  onClick={(e) => {
                    axios
                      .post(
                        "http://localhost:3001/application",
                        {
                          tur: optionState,
                        },
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
                  {exclamationElement}
                  &nbsp; Başvuruda Bulun
                </button>
              </Link>
            </Modal.Footer>
          </form>
        </Modal>
        <Head>
          <title>Başvuru - İÜC ÖBS</title>
        </Head>

        <Layout
          appBar={{
            links: { "Ana Sayfa": "/", Başvuru: "/application" },
            title: "Başvuru",
          }}
        >
          {" "}
          <div className={`my-auto mb-3 ${styles.talepBtn}`}>
            <button
              id="btn2"
              type="submit"
              className={`${styles.btn2}`}
              onClick={handleShow}
            >
              {addElement}
            </button>
          </div>
          <div className={`container ${styles.mainContainer}`}>
            <div style={{ textAlign: "center" }}>
              <div className={`row`} style={{ paddingTop: "0.5rem" }}>
                <div className={`col-3 my-auto ${styles.baslik}`}>No&nbsp;</div>
                <div className={`${styles.mycol} my-auto`}>
                  <div className={`${styles.verticalLine}`}></div>
                </div>
                <div className={`col-4 my-auto ${styles.baslik}`}>
                  Başvuru Türü
                </div>
                <div className={`${styles.mycol} my-auto`}>
                  <div className={`${styles.verticalLine}`}></div>
                </div>
                <div className={`col-2 my-auto ${styles.baslik}`}>
                  Başvuru Tarihi
                </div>
                <div className={`${styles.mycol} my-auto`}>
                  <div className={`${styles.verticalLine}`}></div>
                </div>
                <div className={`col-2 my-auto ${styles.baslik}`}>Durum</div>
              </div>

              <div className={`${styles.horizontalLine2}`}></div>
              {application.map((i) => {
                return (
                  <>
                    <div className={`row ${styles.row}`}>
                      <div className={`col-3 my-auto ${styles.rows}`}>
                        {i.ogrenciNo}
                      </div>
                      <div className={`${styles.mycol} my-auto`}>
                        <div className={`${styles.verticalLine}`}></div>
                      </div>
                      <div className={`col-4 my-auto ${styles.rows}`}>
                        {i.tur}
                      </div>
                      <div className={`${styles.mycol} my-auto`}>
                        <div className={`${styles.verticalLine}`}></div>
                      </div>
                      <div className={`col-2 my-auto ${styles.rows}`}>
                        {i.tarih}
                      </div>
                      <div className={`${styles.mycol} my-auto`}>
                        <div className={`${styles.verticalLine}`}></div>
                      </div>
                      <div
                        className={`col-2 my-auto ${styles.rows}`}
                        style={{ color: " green" }}
                      >
                        {i.durum}
                      </div>
                    </div>
                    <div className={`${styles.horizontalLine}`}></div>
                  </>
                );
              })}
            </div>
          </div>
        </Layout>
      </>
    );
  } else {
    return <Portal></Portal>;
  }
}
