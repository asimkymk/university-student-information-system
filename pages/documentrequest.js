//TODO : TABLE TASARIMI

import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import Head from "next/head";
import styles from "../styles/RequestAndObjection.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal } from "react-bootstrap";
import {
    faExclamationCircle,
    faPlusCircle,
    faExternalLink
} from "@fortawesome/free-solid-svg-icons";
import AppConstant from "../connect/app_constants";
const exclamationElement = (
    <FontAwesomeIcon icon={faExclamationCircle} className={`mx-auto ${styles.exclamationElement}`} />
);
const addElement = (
    <FontAwesomeIcon icon={faPlusCircle} className={`mx-auto ${styles.addElement}`} />
);
const externalElement = (
    <FontAwesomeIcon icon={faExternalLink} className={`mx-auto`} />
);
export default function DocumentRequest() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [document, setDocument] = useState([]);
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
                fetch("http://localhost:3001/documentrequest", requestOptions)
                    .then((response) => {
                        if (response.status >= 200 && response.status < 300) {
                            setLoading(false);
                            return response.json();
                        } else {
                            throw new Error("Error: Could not fetch the data");
                        }
                    })
                    .then((posts) => {
                        setDocument(posts.data);
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
                        <Modal.Title>Belge Talebi</Modal.Title>
                    </Modal.Header>
                    <form>
                        <Modal.Body>
                            <label htmlFor="tur">Belge Türü</label>
                            <select
                                id="tur"
                                className={`form-select ${styles.itirazModal}`}
                                required
                            >
                                <option value="" disabled selected>
                                    Belge türü seçiniz
                                </option>
                                <option style={{ height: "28px" }} value="askerlik">Askerlik Belgesi</option>
                                <option value="dcdb">Disiplin Cezası Durum Belgesi</option>
                                <option value="dcdbe">Disiplin Cezası Durum Belgesi E-İmzalı</option>
                                <option value="dcdb">Geçici Mezuniyet</option>
                                <option value="dcdbe">Geçici Mezuniyet E-İmzalı</option>
                                <option value="dcdb">Öğrenci Belgesi</option>
                                <option value="dcdbe">Öğrenci Belgesi E-İmzalı</option>
                                <option value="dcdb">Öğrenci Belgesi (İngilizce)</option>
                                <option value="dcdbe">Öğrenci Belgesi E-İmzalı (İngilizce)</option>
                                <option value="dcdb">Transkript</option>
                                <option value="dcdbe">Transkript E-İmzalı</option>
                                <option value="dcdb">Transkript (İngilizce)</option>
                                <option value="dcdbe">Transkript E-İmzalı (İngilizce)</option>

                            </select>
                            <label htmlFor="yer">Verilecek Kişi/Kurum</label>
                            <input type="text" className={`form-control ${styles.itirazModal}`} id="tur"></input>
                            <label htmlFor="adet">Belge Adedi</label>
                            <input type="text" className={`form-control ${styles.itirazModal}`} id="not"></input>

                        </Modal.Body>
                        <Modal.Footer>
                            <button
                                id="btn3"
                                type="submit"
                                className={`button w-100 ${styles.button}`}
                            >
                                {exclamationElement}
                                &nbsp; Belge Talebinde Bulun
                            </button>
                        </Modal.Footer>
                    </form>
                </Modal>
                <Head>
                    <title>Belge Talebi - İÜC ÖBS</title>
                </Head>

                <Layout
                    appBar={{
                        links: { "Ana Sayfa": "/", "Belge Talebi": "/documentrequest" },
                        title: "Belge Talebi",
                    }}
                >   <div className={`my-auto mb-3 ${styles.talepBtn}`}>
                        <button id="btn2" type="submit" className={`${styles.btn2}`} onClick={handleShow}>{addElement}</button>
                    </div>
                    <div className={`container ${styles.mainContainer}`}>
                        <div style={{ textAlign: "center" }}>
                            <div className={`row`} style={{ paddingTop: "0.5rem" }}>
                                <div className={`col-3 my-auto ${styles.baslik}`}>
                                    No
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-3 my-auto ${styles.baslik}`}>
                                    Belge Türü
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-3 my-auto ${styles.baslik}`}>
                                    Talep Tarihi
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.baslik}`}>
                                    Belge
                                </div>
                            </div>
                        </div>

                        <div className={`${styles.horizontalLine2}`}></div>
                        {document.map((i) => (
                            <>
                                {i.belgeler.map((belge) => (
                                    <>
                                        <div className={`row ${styles.row}`}>
                                            <div className={`col-3 my-auto ${styles.rows}`}>
                                                {belge.tc}
                                            </div>
                                            <div className={`${styles.mycol} my-auto`}>
                                                <div className={`${styles.verticalLine}`}></div>
                                            </div>
                                            <div className={`col-3 my-auto ${styles.rows}`}>
                                                {belge.belgeTuru}
                                            </div>
                                            <div className={`${styles.mycol} my-auto`}>
                                                <div className={`${styles.verticalLine}`}></div>
                                            </div>
                                            <div className={`col-3 my-auto ${styles.rows}`}>
                                                {belge.talepTarihi}
                                            </div>
                                            <div className={`${styles.mycol} my-auto`}>
                                                <div className={`${styles.verticalLine}`}></div>
                                            </div>
                                            <div className={`col-2 my-auto ${styles.rows}`}>
                                                <a href="#">Belge {externalElement}</a>
                                            </div>
                                        </div>
                                        <div className={`${styles.horizontalLine}`}></div>
                                    </>
                                ))}
                            </>
                        ))}
                    </div>
                </Layout>
            </>
        );
    }
}
