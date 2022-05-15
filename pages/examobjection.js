//TODO : TABLE TASARIMI

import React, { Component } from "react";
import Layout from "../components/Layout/Layout";
import Head from "next/head";
import { useState } from "react";
import styles from "../styles/RequestAndObjection.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import $ from "jquery";
import { Modal } from "react-bootstrap";
import {
    faExclamationCircle,
} from "@fortawesome/free-solid-svg-icons";
const exclamationElement = (
    <FontAwesomeIcon icon={faExclamationCircle} className={`mx-auto ${styles.exclamationElement}`} />
);
const exclamationElement2 = (
    <FontAwesomeIcon icon={faExclamationCircle} className={`mx-auto ${styles.exclamationElement}`} style={{ color: "white" }} />
);

function modalHandler(id) {
    id = "#" + id;
    var dersadi = $(id).children("[name='dersadi']").text();
    var tur = $(id).children("[name='tur']").text();
    var not = $(id).children("[name='not']").text();
    $("#modalders").val(dersadi);
    $("#modaltur").val(tur);
    $("#modalnot").val(not);
}
export default function ExamObjection() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
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
                        <input type="text" className={`form-control ${styles.itirazModal}`} id="modalders" disabled></input>
                        <label htmlFor="modaltur">Sınav Türü</label>
                        <input type="text" className={`form-control ${styles.itirazModal}`} id="modaltur" disabled></input>
                        <label htmlFor="modalnot">Sınav Notu</label>
                        <input type="text" className={`form-control ${styles.itirazModal}`} id="modalnot" disabled></input>
                        <label htmlFor="itiraz">İtiraz Nedeni:</label>
                        <textarea className={`form-control`} id="itiraz" rows="5" placeholder="Lütfen itiraz nedeninizi yazınız."></textarea>

                    </Modal.Body>
                    <Modal.Footer>
                        <button
                            id="btn3"
                            type="submit"
                            className={`button w-100 ${styles.button}`}
                        >
                            {exclamationElement2}
                            &nbsp; İtirazda Bulun
                        </button>
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
                            <div className={`col-5 my-auto ${styles.baslik}`}>
                                Ders Adı
                            </div>
                            <div className={`${styles.mycol} my-auto`}>
                                <div className={`${styles.verticalLine}`}></div>
                            </div>
                            <div className={`col-2 my-auto ${styles.baslik}`}>
                                Sınav
                            </div>
                            <div className={`${styles.mycol} my-auto`}>
                                <div className={`${styles.verticalLine}`}></div>
                            </div>
                            <div className={`col-2 my-auto ${styles.baslik}`}>
                                Not
                            </div>
                            <div className={`${styles.mycol} my-auto`}>
                                <div className={`${styles.verticalLine}`}></div>
                            </div>
                            <div className={`col-2 my-auto ${styles.baslik}`}>
                                İtiraz
                            </div>
                        </div>
                    </div>

                    <div className={`${styles.horizontalLine2}`}></div>

                    <div id="1" className={`row ${styles.row}`}>
                        <div name="dersadi" className={`col-5 my-auto ${styles.rows}`}>
                            Bilgisayar Mühendisliğine Giriş
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div name="tur" className={`col-2 my-auto ${styles.rows}`}>
                            Vize
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div name="not" className={`col-2 my-auto ${styles.rows}`}>
                            68
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.itirazBtn}`}>
                            <button id="btn1" type="submit" className={`${styles.btn}`} onClick={e => {
                                handleShow();
                                var id = $(e.currentTarget.parentElement.parentElement).attr("id");
                                setTimeout(function () {
                                    modalHandler(id)
                                }, 1)
                            }
                            }>
                                {exclamationElement}
                            </button>
                        </div>
                    </div>
                    <div className={`${styles.horizontalLine}`}></div>
                    <div id="2" className={`row ${styles.row}`}>
                        <div name="dersadi" className={`col-5 my-auto ${styles.rows}`}>
                            Programming Applications
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div name="tur" className={`col-2 my-auto ${styles.rows}`}>
                            Bitirme
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div name="not" className={`col-2 my-auto ${styles.rows}`}>
                            75
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.itirazBtn}`}>
                            <button id="btn1" type="submit" className={`${styles.btn}`} onClick={e => {
                                handleShow();
                                var id = $(e.currentTarget.parentElement.parentElement).attr("id");
                                setTimeout(function () {
                                    modalHandler(id)
                                }, 1)
                            }
                            }>
                                {exclamationElement}
                            </button>
                        </div>
                    </div>
                    <div className={`${styles.horizontalLine}`}></div>
                    <div id="3" className={`row ${styles.row}`}>
                        <div name="dersadi" className={`col-5 my-auto ${styles.rows}`}>
                            Calculus I
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div name="tur" className={`col-2 my-auto ${styles.rows}`}>
                            Proje
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div name="not" className={`col-2 my-auto ${styles.rows}`}>
                            95
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.itirazBtn}`}>
                            <button id="btn1" type="submit" className={`${styles.btn}`} onClick={e => {
                                handleShow();
                                var id = $(e.currentTarget.parentElement.parentElement).attr("id");
                                setTimeout(function () {
                                    modalHandler(id)
                                }, 1)
                            }
                            }>
                                {exclamationElement}
                            </button>
                        </div>
                    </div>
                </div>

            </Layout>

        </>
    );
}

