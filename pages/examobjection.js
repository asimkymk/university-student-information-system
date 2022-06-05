//TODO : TABLE TASARIMI

import React, { Component, useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import Head from "next/head";
import styles from "../styles/RequestAndObjection.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import $ from "jquery";
import { Modal } from "react-bootstrap";
import Link from "next/link";
import AppConstant from "../connect/app_constants";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
const exclamationElement = (
  <FontAwesomeIcon
    icon={faExclamationCircle}
    className={`mx-auto ${styles.exclamationElement}`}
  />
);
const exclamationElement2 = (
  <FontAwesomeIcon
    icon={faExclamationCircle}
    className={`mx-auto ${styles.exclamationElement}`}
    style={{ color: "white" }}
  />
);

export default function ExamObjection() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [exams, setExams] = useState([]);
  const [ad, setAd] = useState("");
  const [tur, setTur] = useState("");
  const [not, setNot] = useState("");
  const [content, setContent] = useState("");

  function modalHandler(id) {
    id = "#" + id;
    var dersadi = $(id).children("[name='dersadi']").text();
    var tur = $(id).children("[name='tur']").text();
    var not = $(id).children("[name='not']").text();
    $("#modalders").val(dersadi);
    setAd(dersadi);
    $("#modaltur").val(tur);
    setTur(tur);
    $("#modalnot").val(not);
    setNot(not);
  }
  const handleChange = (event) => {
    setContent(event.target.value);
  };
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
        fetch("http://localhost:3001/examobjection", requestOptions)
          .then((response) => {
            if (response.status >= 200 && response.status < 300) {
              setLoading(false);
              return response.json();
            } else {
              throw new Error("Error: Could not fetch the data");
            }
          })
          .then((posts) => {
            setExams(posts.data);
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
        <Modal
          show={show}
          onHide={handleClose}
          centered
          className={`mx-auto my-auto`}
        >
          <Modal.Header closeButton>
            <Modal.Title>Sınav İtirazı</Modal.Title>
          </Modal.Header>
          <form>
            <Modal.Body>
              <label htmlFor="modalders">Ders Adı</label>
              <input
                type="text"
                className={`form-control ${styles.itirazModal}`}
                value={ad}
                id="modalders"
                disabled
              ></input>
              <label htmlFor="modaltur">Sınav Türü</label>
              <input
                type="text"
                className={`form-control ${styles.itirazModal}`}
                id="modaltur"
                disabled
              ></input>
              <label htmlFor="modalnot">Sınav Notu</label>
              <input
                type="text"
                className={`form-control ${styles.itirazModal}`}
                id="modalnot"
                disabled
              ></input>
              <label htmlFor="itiraz">İtiraz Nedeni:</label>
              <textarea
                className={`form-control`}
                id="itiraz"
                rows="5"
                value={content}
                onChange={handleChange}
                placeholder="Lütfen itiraz nedeninizi yazınız."
              ></textarea>
            </Modal.Body>
            <Modal.Footer>
              <Link href="/examobjection">
                <button
                  id="btn3"
                  onClick={(e) => {
                    axios
                      .post(
                        "http://localhost:3001/examobjection",
                        {
                          ogrenciTc: AppConstant.tcNo,
                          dersAd: ad,
                          tur: tur,
                          not: not,
                          itirazNedeni: content,
                        },
                        {
                          headers: {
                            token: AppConstant.token,
                          },
                        }
                      )
                      .then(function (response) {
                        if (response.data.result == true) {
                          setContent("");
                          handleClose();
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
                  &nbsp; İtirazda Bulun
                </button>
              </Link>
            </Modal.Footer>
          </form>
        </Modal>
        <Head>
          <title>Sınav İtirazı - İÜC ÖBS</title>
        </Head>

        <Layout
          appBar={{
            links: { "Ana Sayfa": "/", "Sınav İtirazı": "/examobjection" },
            title: "Sınav İtirazı",
          }}
        >
          <div className={`container ${styles.mainContainer}`}>
            <div style={{ textAlign: "center" }}>
              <div className={`row`} style={{ paddingTop: "0.5rem" }}>
                <div className={`col-5 my-auto ${styles.baslik}`}>Ders Adı</div>
                <div className={`${styles.mycol} my-auto`}>
                  <div className={`${styles.verticalLine}`}></div>
                </div>
                <div className={`col-2 my-auto ${styles.baslik}`}>Sınav</div>
                <div className={`${styles.mycol} my-auto`}>
                  <div className={`${styles.verticalLine}`}></div>
                </div>
                <div className={`col-2 my-auto ${styles.baslik}`}>Not</div>
                <div className={`${styles.mycol} my-auto`}>
                  <div className={`${styles.verticalLine}`}></div>
                </div>
                <div className={`col-2 my-auto ${styles.baslik}`}>İtiraz</div>
              </div>
            </div>

            <div className={`${styles.horizontalLine2}`}></div>
            {exams.map((i) => (
              <>
                {i.sınavlar.map((exam) => (
                  <>
                    <div
                      id={i.dersKodu + exam.sinavTuru}
                      className={`row ${styles.row}`}
                    >
                      <div
                        name="dersadi"
                        className={`col-5 my-auto ${styles.rows}`}
                      >
                        {i.dersAdi}
                      </div>
                      <div className={`${styles.mycol} my-auto`}>
                        <div className={`${styles.verticalLine}`}></div>
                      </div>
                      <div
                        name="tur"
                        className={`col-2 my-auto ${styles.rows}`}
                      >
                        {exam.sinavTuru}
                      </div>
                      <div className={`${styles.mycol} my-auto`}>
                        <div className={`${styles.verticalLine}`}></div>
                      </div>
                      <div
                        name="not"
                        className={`col-2 my-auto ${styles.rows}`}
                      >
                        {exam.not}
                      </div>
                      <div className={`${styles.mycol} my-auto`}>
                        <div className={`${styles.verticalLine}`}></div>
                      </div>
                      <div className={`col-2 my-auto ${styles.itirazBtn}`}>
                        <button
                          id="btn1"
                          type="submit"
                          className={`${styles.btn}`}
                          onClick={(e) => {
                            handleShow();
                            var id = $(
                              e.currentTarget.parentElement.parentElement
                            ).attr("id");
                            setTimeout(function () {
                              modalHandler(id);
                            }, 1);
                          }}
                        >
                          {exclamationElement}
                        </button>
                      </div>
                    </div>
                    <div className={`${styles.horizontalLine}`}></div>
                  </>
                ))}
                <div className={`${styles.horizontalLine2}`}></div>
              </>
            ))}
          </div>
        </Layout>
      </>
    );
  }
}
