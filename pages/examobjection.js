//TODO : TABLE TASARIMI

import React, { Component } from "react";
import Layout from "../components/Layout/Layout";
import Head from "next/head";
import { useState } from "react";
import styles from "../styles/RequestAndObjection.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
                        <label htmlFor="ders">Ders Adı</label>
                        <input type="text" className={`form-control ${styles.itirazModal}`} id="ders" disabled></input>
                        <label htmlFor="tur">Sınav Türü</label>
                        <input type="text" className={`form-control ${styles.itirazModal}`} id="tur" disabled></input>
                        <label htmlFor="not">Sınav Notu</label>
                        <input type="text" className={`form-control ${styles.itirazModal}`} id="not" disabled></input>
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

                    <div className={`row ${styles.row}`}>
                        <div className={`col-5 my-auto ${styles.rows}`}>
                            Bilgisayar Mühendisliğine Giriş
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.rows}`}>
                            Vize
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.rows}`}>
                            68
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.itirazBtn}`}>
                            <button id="btn1" type="submit" className={`${styles.btn}`} onClick={handleShow}>{exclamationElement}</button>
                        </div>
                    </div>
                    <div className={`${styles.horizontalLine}`}></div>
                    <div className={`row ${styles.row}`}>
                        <div className={`col-5 my-auto ${styles.rows}`}>
                            Programming Applications
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.rows}`}>
                            Bitirme
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.rows}`}>
                            75
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.itirazBtn}`}>
                            <button className={`${styles.btn}`} onClick={handleShow}>{exclamationElement}</button>
                        </div>
                    </div>
                    <div className={`${styles.horizontalLine}`}></div>
                    <div className={`row ${styles.row}`}>
                        <div className={`col-5 my-auto ${styles.rows}`}>
                            Calculus I
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.rows}`}>
                            Vize
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.rows}`}>
                            54
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.itirazBtn}`}>
                            <button className={`${styles.btn}`} onClick={handleShow}>{exclamationElement}</button>
                        </div>
                    </div>
                    <div className={`${styles.horizontalLine}`}></div>
                    <div className={`row ${styles.row}`}>
                        <div className={`col-5 my-auto ${styles.rows}`}>
                            Bilgisayar Mühendisliğine Giriş
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.rows}`}>
                            Vize
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.rows}`}>
                            68
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.itirazBtn}`}>
                            <button className={`${styles.btn}`} onClick={handleShow}>{exclamationElement}</button>
                        </div>
                    </div>
                    <div className={`${styles.horizontalLine}`}></div>
                    <div className={`row ${styles.row}`}>
                        <div className={`col-5 my-auto ${styles.rows}`}>
                            Programming Applications
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.rows}`}>
                            Bitirme
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.rows}`}>
                            75
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.itirazBtn}`}>
                            <button className={`${styles.btn}`} onClick={handleShow}>{exclamationElement}</button>
                        </div>
                    </div>
                    <div className={`${styles.horizontalLine}`}></div>
                    <div className={`row ${styles.row}`}>
                        <div className={`col-5 my-auto ${styles.rows}`}>
                            Calculus I
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.rows}`}>
                            Vize
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.rows}`}>
                            54
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.itirazBtn}`}>
                            <button className={`${styles.btn}`} onClick={handleShow}>{exclamationElement}</button>
                        </div>
                    </div>
                    <div className={`${styles.horizontalLine}`}></div>
                    <div className={`row ${styles.row}`}>
                        <div className={`col-5 my-auto ${styles.rows}`}>
                            Bilgisayar Mühendisliğine Giriş
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.rows}`}>
                            Vize
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.rows}`}>
                            68
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.itirazBtn}`}>
                            <button className={`${styles.btn}`} onClick={handleShow}>{exclamationElement}</button>
                        </div>
                    </div>
                    <div className={`${styles.horizontalLine}`}></div>
                    <div className={`row ${styles.row}`}>
                        <div className={`col-5 my-auto ${styles.rows}`}>
                            Programming Applications
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.rows}`}>
                            Bitirme
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.rows}`}>
                            75
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.itirazBtn}`}>
                            <button className={`${styles.btn}`} onClick={handleShow}>{exclamationElement}</button>
                        </div>
                    </div>
                    <div className={`${styles.horizontalLine}`}></div>
                    <div className={`row ${styles.row}`}>
                        <div className={`col-5 my-auto ${styles.rows}`}>
                            Calculus I
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.rows}`}>
                            Vize
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.rows}`}>
                            54
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.itirazBtn}`}>
                            <button className={`${styles.btn}`} onClick={handleShow}>{exclamationElement}</button>
                        </div>
                    </div>
                    <div className={`${styles.horizontalLine}`}></div>
                    <div className={`row ${styles.row}`}>
                        <div className={`col-5 my-auto ${styles.rows}`}>
                            Bilgisayar Mühendisliğine Giriş
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.rows}`}>
                            Vize
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.rows}`}>
                            68
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.itirazBtn}`}>
                            <button className={`${styles.btn}`} onClick={handleShow}>{exclamationElement}</button>
                        </div>
                    </div>
                    <div className={`${styles.horizontalLine}`}></div>
                    <div className={`row ${styles.row}`}>
                        <div className={`col-5 my-auto ${styles.rows}`}>
                            Programming Applications
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.rows}`}>
                            Bitirme
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.rows}`}>
                            75
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.itirazBtn}`}>
                            <button className={`${styles.btn}`} onClick={handleShow}>{exclamationElement}</button>
                        </div>
                    </div>
                    <div className={`${styles.horizontalLine}`}></div>
                    <div className={`row ${styles.row}`}>
                        <div className={`col-5 my-auto ${styles.rows}`}>
                            Calculus I
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.rows}`}>
                            Vize
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.rows}`}>
                            54
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.itirazBtn}`}>
                            <button className={`${styles.btn}`} onClick={handleShow}>{exclamationElement}</button>
                        </div>
                    </div>
                    <div className={`${styles.horizontalLine}`}></div>
                    <div className={`row ${styles.row}`}>
                        <div className={`col-5 my-auto ${styles.rows}`}>
                            Bilgisayar Mühendisliğine Giriş
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.rows}`}>
                            Vize
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.rows}`}>
                            68
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.itirazBtn}`}>
                            <button className={`${styles.btn}`} onClick={handleShow}>{exclamationElement}</button>
                        </div>
                    </div>
                    <div className={`${styles.horizontalLine}`}></div>
                    <div className={`row ${styles.row}`}>
                        <div className={`col-5 my-auto ${styles.rows}`}>
                            Programming Applications
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.rows}`}>
                            Bitirme
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.rows}`}>
                            75
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.itirazBtn}`}>
                            <button className={`${styles.btn}`} onClick={handleShow}>{exclamationElement}</button>
                        </div>
                    </div>
                    <div className={`${styles.horizontalLine}`}></div>
                    <div className={`row ${styles.row}`}>
                        <div className={`col-5 my-auto ${styles.rows}`}>
                            Calculus I
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.rows}`}>
                            Vize
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.rows}`}>
                            54
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.itirazBtn}`}>
                            <button className={`${styles.btn}`} onClick={handleShow}>{exclamationElement}</button>
                        </div>
                    </div>
                    <div className={`${styles.horizontalLine}`}></div>
                    <div className={`row ${styles.row}`}>
                        <div className={`col-5 my-auto ${styles.rows}`}>
                            Bilgisayar Mühendisliğine Giriş
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.rows}`}>
                            Vize
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.rows}`}>
                            68
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.itirazBtn}`}>
                            <button className={`${styles.btn}`} onClick={handleShow}>{exclamationElement}</button>
                        </div>
                    </div>
                    <div className={`${styles.horizontalLine}`}></div>
                    <div className={`row ${styles.row}`}>
                        <div className={`col-5 my-auto ${styles.rows}`}>
                            Programming Applications
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.rows}`}>
                            Bitirme
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.rows}`}>
                            75
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.itirazBtn}`}>
                            <button className={`${styles.btn}`} onClick={handleShow}>{exclamationElement}</button>
                        </div>
                    </div>
                    <div className={`${styles.horizontalLine}`}></div>
                    <div className={`row ${styles.row}`}>
                        <div className={`col-5 my-auto ${styles.rows}`}>
                            Calculus I
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.rows}`}>
                            Vize
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.rows}`}>
                            54
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.itirazBtn}`}>
                            <button className={`${styles.btn}`} onClick={handleShow}>{exclamationElement}</button>
                        </div>
                    </div>
                    <div className={`${styles.horizontalLine}`}></div>
                    <div className={`row ${styles.row}`}>
                        <div className={`col-5 my-auto ${styles.rows}`}>
                            Bilgisayar Mühendisliğine Giriş
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.rows}`}>
                            Vize
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.rows}`}>
                            68
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.itirazBtn}`}>
                            <button className={`${styles.btn}`} onClick={handleShow}>{exclamationElement}</button>
                        </div>
                    </div>
                    <div className={`${styles.horizontalLine}`}></div>
                    <div className={`row ${styles.row}`}>
                        <div className={`col-5 my-auto ${styles.rows}`}>
                            Programming Applications
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.rows}`}>
                            Bitirme
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.rows}`}>
                            75
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.itirazBtn}`}>
                            <button className={`${styles.btn}`} onClick={handleShow}>{exclamationElement}</button>
                        </div>
                    </div>
                    <div className={`${styles.horizontalLine}`}></div>
                    <div className={`row ${styles.row}`}>
                        <div className={`col-5 my-auto ${styles.rows}`}>
                            Calculus I
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.rows}`}>
                            Vize
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.rows}`}>
                            54
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.itirazBtn}`}>
                            <button className={`${styles.btn}`} onClick={handleShow}>{exclamationElement}</button>
                        </div>
                    </div>
                    <div className={`${styles.horizontalLine}`}></div>
                    <div className={`row ${styles.row}`}>
                        <div className={`col-5 my-auto ${styles.rows}`}>
                            Bilgisayar Mühendisliğine Giriş
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.rows}`}>
                            Vize
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.rows}`}>
                            68
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.itirazBtn}`}>
                            <button className={`${styles.btn}`} onClick={handleShow}>{exclamationElement}</button>
                        </div>
                    </div>
                    <div className={`${styles.horizontalLine}`}></div>
                    <div className={`row ${styles.row}`}>
                        <div className={`col-5 my-auto ${styles.rows}`}>
                            Programming Applications
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.rows}`}>
                            Bitirme
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.rows}`}>
                            75
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.itirazBtn}`}>
                            <button className={`${styles.btn}`} onClick={handleShow}>{exclamationElement}</button>
                        </div>
                    </div>
                    <div className={`${styles.horizontalLine}`}></div>
                    <div className={`row ${styles.row}`}>
                        <div className={`col-5 my-auto ${styles.rows}`}>
                            Calculus I
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.rows}`}>
                            Vize
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.rows}`}>
                            54
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.itirazBtn}`}>
                            <button className={`${styles.btn}`} onClick={handleShow}>{exclamationElement}</button>
                        </div>
                    </div>
                    <div className={`${styles.horizontalLine}`}></div>
                    <div className={`row ${styles.row}`}>
                        <div className={`col-5 my-auto ${styles.rows}`}>
                            Bilgisayar Mühendisliğine Giriş
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.rows}`}>
                            Vize
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.rows}`}>
                            68
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.itirazBtn}`}>
                            <button className={`${styles.btn}`} onClick={handleShow}>{exclamationElement}</button>
                        </div>
                    </div>
                    <div className={`${styles.horizontalLine}`}></div>
                    <div className={`row ${styles.row}`}>
                        <div className={`col-5 my-auto ${styles.rows}`}>
                            Programming Applications
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.rows}`}>
                            Bitirme
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.rows}`}>
                            75
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.itirazBtn}`}>
                            <button className={`${styles.btn}`} onClick={handleShow}>{exclamationElement}</button>
                        </div>
                    </div>
                    <div className={`${styles.horizontalLine}`}></div>
                    <div className={`row ${styles.row}`}>
                        <div className={`col-5 my-auto ${styles.rows}`}>
                            Calculus I
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.rows}`}>
                            Vize
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.rows}`}>
                            54
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.itirazBtn}`}>
                            <button className={`${styles.btn}`} onClick={handleShow}>{exclamationElement}</button>
                        </div>
                    </div>
                    <div className={`${styles.horizontalLine}`}></div>
                    <div className={`row ${styles.row}`}>
                        <div className={`col-5 my-auto ${styles.rows}`}>
                            Bilgisayar Mühendisliğine Giriş
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.rows}`}>
                            Vize
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.rows}`}>
                            68
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.itirazBtn}`}>
                            <button className={`${styles.btn}`} onClick={handleShow}>{exclamationElement}</button>
                        </div>
                    </div>
                    <div className={`${styles.horizontalLine}`}></div>
                    <div className={`row ${styles.row}`}>
                        <div className={`col-5 my-auto ${styles.rows}`}>
                            Programming Applications
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.rows}`}>
                            Bitirme
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.rows}`}>
                            75
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.itirazBtn}`}>
                            <button className={`${styles.btn}`} onClick={handleShow}>{exclamationElement}</button>
                        </div>
                    </div>
                    <div className={`${styles.horizontalLine}`}></div>
                    <div className={`row ${styles.row}`}>
                        <div className={`col-5 my-auto ${styles.rows}`}>
                            Calculus I
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.rows}`}>
                            Vize
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.rows}`}>
                            54
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.itirazBtn}`}>
                            <button className={`${styles.btn}`} onClick={handleShow}>{exclamationElement}</button>
                        </div>
                    </div>
                    <div className={`${styles.horizontalLine}`}></div>
                    <div className={`row ${styles.row}`}>
                        <div className={`col-5 my-auto ${styles.rows}`}>
                            Bilgisayar Mühendisliğine Giriş
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.rows}`}>
                            Vize
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.rows}`}>
                            68
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.itirazBtn}`}>
                            <button className={`${styles.btn}`} onClick={handleShow}>{exclamationElement}</button>
                        </div>
                    </div>
                    <div className={`${styles.horizontalLine}`}></div>
                    <div className={`row ${styles.row}`}>
                        <div className={`col-5 my-auto ${styles.rows}`}>
                            Programming Applications
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.rows}`}>
                            Bitirme
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.rows}`}>
                            75
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.itirazBtn}`}>
                            <button className={`${styles.btn}`} onClick={handleShow}>{exclamationElement}</button>
                        </div>
                    </div>
                    <div className={`${styles.horizontalLine}`}></div>
                    <div className={`row ${styles.row}`}>
                        <div className={`col-5 my-auto ${styles.rows}`}>
                            Calculus I
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.rows}`}>
                            Vize
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.rows}`}>
                            54
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.itirazBtn}`}>
                            <button className={`${styles.btn}`} onClick={handleShow}>{exclamationElement}</button>
                        </div>
                    </div>
                    <div className={`${styles.horizontalLine}`}></div>
                    <div className={`row ${styles.row}`}>
                        <div className={`col-5 my-auto ${styles.rows}`}>
                            Bilgisayar Mühendisliğine Giriş
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.rows}`}>
                            Vize
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.rows}`}>
                            68
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.itirazBtn}`}>
                            <button className={`${styles.btn}`} onClick={handleShow}>{exclamationElement}</button>
                        </div>
                    </div>
                    <div className={`${styles.horizontalLine}`}></div>
                    <div className={`row ${styles.row}`}>
                        <div className={`col-5 my-auto ${styles.rows}`}>
                            Programming Applications
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.rows}`}>
                            Bitirme
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.rows}`}>
                            75
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.itirazBtn}`}>
                            <button className={`${styles.btn}`} onClick={handleShow}>{exclamationElement}</button>
                        </div>
                    </div>
                    <div className={`${styles.horizontalLine}`}></div>
                    <div className={`row ${styles.row}`}>
                        <div className={`col-5 my-auto ${styles.rows}`}>
                            Calculus I
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.rows}`}>
                            Vize
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.rows}`}>
                            54
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.itirazBtn}`}>
                            <button className={`${styles.btn}`} onClick={handleShow}>{exclamationElement}</button>
                        </div>
                    </div>
                    <div className={`${styles.horizontalLine}`}></div>
                    <div className={`row ${styles.row}`}>
                        <div className={`col-5 my-auto ${styles.rows}`}>
                            Bilgisayar Mühendisliğine Giriş
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.rows}`}>
                            Vize
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.rows}`}>
                            68
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.itirazBtn}`}>
                            <button className={`${styles.btn}`} onClick={handleShow}>{exclamationElement}</button>
                        </div>
                    </div>
                    <div className={`${styles.horizontalLine}`}></div>
                    <div className={`row ${styles.row}`}>
                        <div className={`col-5 my-auto ${styles.rows}`}>
                            Programming Applications
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.rows}`}>
                            Bitirme
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.rows}`}>
                            75
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.itirazBtn}`}>
                            <button className={`${styles.btn}`} onClick={handleShow}>{exclamationElement}</button>
                        </div>
                    </div>
                    <div className={`${styles.horizontalLine}`}></div>
                    <div className={`row ${styles.row}`}>
                        <div className={`col-5 my-auto ${styles.rows}`}>
                            Calculus I
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.rows}`}>
                            Vize
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.rows}`}>
                            54
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.itirazBtn}`}>
                            <button className={`${styles.btn}`} onClick={handleShow}>{exclamationElement}</button>
                        </div>
                    </div>
                </div>


            </Layout>

        </>
    );

}

