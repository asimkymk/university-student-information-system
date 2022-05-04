//TODO : TABLE TASARIMI

import React, { Component } from "react";
import Layout from "../components/Layout/Layout";
import Head from "next/head";
import { useState } from "react";
import styles from "../styles/ExamObjection.module.css";
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
                        <label for="ders">Ders Adı</label>
                        <input type="text" className={`form-control ${styles.itirazModal}`} id="ders" disabled></input>
                        <label for="tur">Sınav Türü</label>
                        <input type="text" className={`form-control ${styles.itirazModal}`} id="tur" disabled></input>
                        <label for="not">Sınav Notu</label>
                        <input type="text" className={`form-control ${styles.itirazModal}`} id="not" disabled></input>
                        <label for="itiraz">İtiraz Nedeni:</label>
                        <textarea className={`form-control`} id="itiraz" rows="5" placeholder="Lütfen itiraz nedeninizi yazınız."></textarea>

                    </Modal.Body>
                    <Modal.Footer>
                        <button
                            id={styles.btn3}
                            type="submit"
                            className={`button w-100 ${styles.button}`}
                            style={{
                                marginRight: "12px",
                                float: "right",
                                width: "43%",
                            }}
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
                </div>
                <div className={`container ${styles.mainContainer}`} style={{ marginTop: "-4rem" }}>
                    <div className={`row ${styles.row}`}>
                        <div className={`col-5 my-auto ${styles.dersAdi}`}>
                            Bilgisayar Mühendisliğine Giriş
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.sinavTuru}`}>
                            Vize
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.sinavNotu}`}>
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
                        <div className={`col-5 my-auto ${styles.dersAdi}`}>
                            Programming Applications
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.sinavTuru}`}>
                            Bitirme
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.sinavNotu}`}>
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
                        <div className={`col-5 my-auto ${styles.dersAdi}`}>
                            Calculus I
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.sinavTuru}`}>
                            Vize
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.sinavNotu}`}>
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
                        <div className={`col-5 my-auto ${styles.dersAdi}`}>
                            Bilgisayar Mühendisliğine Giriş
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.sinavTuru}`}>
                            Vize
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.sinavNotu}`}>
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
                        <div className={`col-5 my-auto ${styles.dersAdi}`}>
                            Programming Applications
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.sinavTuru}`}>
                            Bitirme
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.sinavNotu}`}>
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
                        <div className={`col-5 my-auto ${styles.dersAdi}`}>
                            Calculus I
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.sinavTuru}`}>
                            Vize
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.sinavNotu}`}>
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
                        <div className={`col-5 my-auto ${styles.dersAdi}`}>
                            Bilgisayar Mühendisliğine Giriş
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.sinavTuru}`}>
                            Vize
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.sinavNotu}`}>
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
                        <div className={`col-5 my-auto ${styles.dersAdi}`}>
                            Programming Applications
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.sinavTuru}`}>
                            Bitirme
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.sinavNotu}`}>
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
                        <div className={`col-5 my-auto ${styles.dersAdi}`}>
                            Calculus I
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.sinavTuru}`}>
                            Vize
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.sinavNotu}`}>
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
                        <div className={`col-5 my-auto ${styles.dersAdi}`}>
                            Bilgisayar Mühendisliğine Giriş
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.sinavTuru}`}>
                            Vize
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.sinavNotu}`}>
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
                        <div className={`col-5 my-auto ${styles.dersAdi}`}>
                            Programming Applications
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.sinavTuru}`}>
                            Bitirme
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.sinavNotu}`}>
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
                        <div className={`col-5 my-auto ${styles.dersAdi}`}>
                            Calculus I
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.sinavTuru}`}>
                            Vize
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.sinavNotu}`}>
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
                        <div className={`col-5 my-auto ${styles.dersAdi}`}>
                            Bilgisayar Mühendisliğine Giriş
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.sinavTuru}`}>
                            Vize
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.sinavNotu}`}>
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
                        <div className={`col-5 my-auto ${styles.dersAdi}`}>
                            Programming Applications
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.sinavTuru}`}>
                            Bitirme
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.sinavNotu}`}>
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
                        <div className={`col-5 my-auto ${styles.dersAdi}`}>
                            Calculus I
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.sinavTuru}`}>
                            Vize
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.sinavNotu}`}>
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
                        <div className={`col-5 my-auto ${styles.dersAdi}`}>
                            Bilgisayar Mühendisliğine Giriş
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.sinavTuru}`}>
                            Vize
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.sinavNotu}`}>
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
                        <div className={`col-5 my-auto ${styles.dersAdi}`}>
                            Programming Applications
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.sinavTuru}`}>
                            Bitirme
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.sinavNotu}`}>
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
                        <div className={`col-5 my-auto ${styles.dersAdi}`}>
                            Calculus I
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.sinavTuru}`}>
                            Vize
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.sinavNotu}`}>
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
                        <div className={`col-5 my-auto ${styles.dersAdi}`}>
                            Bilgisayar Mühendisliğine Giriş
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.sinavTuru}`}>
                            Vize
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.sinavNotu}`}>
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
                        <div className={`col-5 my-auto ${styles.dersAdi}`}>
                            Programming Applications
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.sinavTuru}`}>
                            Bitirme
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.sinavNotu}`}>
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
                        <div className={`col-5 my-auto ${styles.dersAdi}`}>
                            Calculus I
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.sinavTuru}`}>
                            Vize
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.sinavNotu}`}>
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
                        <div className={`col-5 my-auto ${styles.dersAdi}`}>
                            Bilgisayar Mühendisliğine Giriş
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.sinavTuru}`}>
                            Vize
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.sinavNotu}`}>
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
                        <div className={`col-5 my-auto ${styles.dersAdi}`}>
                            Programming Applications
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.sinavTuru}`}>
                            Bitirme
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.sinavNotu}`}>
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
                        <div className={`col-5 my-auto ${styles.dersAdi}`}>
                            Calculus I
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.sinavTuru}`}>
                            Vize
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.sinavNotu}`}>
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
                        <div className={`col-5 my-auto ${styles.dersAdi}`}>
                            Bilgisayar Mühendisliğine Giriş
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.sinavTuru}`}>
                            Vize
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.sinavNotu}`}>
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
                        <div className={`col-5 my-auto ${styles.dersAdi}`}>
                            Programming Applications
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.sinavTuru}`}>
                            Bitirme
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.sinavNotu}`}>
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
                        <div className={`col-5 my-auto ${styles.dersAdi}`}>
                            Calculus I
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.sinavTuru}`}>
                            Vize
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.sinavNotu}`}>
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
                        <div className={`col-5 my-auto ${styles.dersAdi}`}>
                            Bilgisayar Mühendisliğine Giriş
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.sinavTuru}`}>
                            Vize
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.sinavNotu}`}>
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
                        <div className={`col-5 my-auto ${styles.dersAdi}`}>
                            Programming Applications
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.sinavTuru}`}>
                            Bitirme
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.sinavNotu}`}>
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
                        <div className={`col-5 my-auto ${styles.dersAdi}`}>
                            Calculus I
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.sinavTuru}`}>
                            Vize
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.sinavNotu}`}>
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
                        <div className={`col-5 my-auto ${styles.dersAdi}`}>
                            Bilgisayar Mühendisliğine Giriş
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.sinavTuru}`}>
                            Vize
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.sinavNotu}`}>
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
                        <div className={`col-5 my-auto ${styles.dersAdi}`}>
                            Programming Applications
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.sinavTuru}`}>
                            Bitirme
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.sinavNotu}`}>
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
                        <div className={`col-5 my-auto ${styles.dersAdi}`}>
                            Calculus I
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.sinavTuru}`}>
                            Vize
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.sinavNotu}`}>
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
                        <div className={`col-5 my-auto ${styles.dersAdi}`}>
                            Bilgisayar Mühendisliğine Giriş
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.sinavTuru}`}>
                            Vize
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.sinavNotu}`}>
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
                        <div className={`col-5 my-auto ${styles.dersAdi}`}>
                            Programming Applications
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.sinavTuru}`}>
                            Bitirme
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.sinavNotu}`}>
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
                        <div className={`col-5 my-auto ${styles.dersAdi}`}>
                            Calculus I
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.sinavTuru}`}>
                            Vize
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.sinavNotu}`}>
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
                        <div className={`col-5 my-auto ${styles.dersAdi}`}>
                            Bilgisayar Mühendisliğine Giriş
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.sinavTuru}`}>
                            Vize
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.sinavNotu}`}>
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
                        <div className={`col-5 my-auto ${styles.dersAdi}`}>
                            Programming Applications
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.sinavTuru}`}>
                            Bitirme
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.sinavNotu}`}>
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
                        <div className={`col-5 my-auto ${styles.dersAdi}`}>
                            Calculus I
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.sinavTuru}`}>
                            Vize
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-2 my-auto ${styles.sinavNotu}`}>
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

