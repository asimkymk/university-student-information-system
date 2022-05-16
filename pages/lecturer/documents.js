import Head from "next/head";
import React, { Component } from "react";
import Layout from "../../components/Layout/LayoutLecturer";
import $ from "jquery";
import styles from "../../styles/RequestAndObjection.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal } from "react-bootstrap";
import { useState } from "react";
import {
    faPlusCircle, faMinusCircle
} from "@fortawesome/free-solid-svg-icons";
const exclamationElement = (
    <FontAwesomeIcon icon={faPlusCircle} className={`mx-auto ${styles.faPlusCircle}`} />
);
const exclamationElement2 = (
    <FontAwesomeIcon icon={faMinusCircle} className={`mx-auto ${styles.faMinusCircle}`} />
);

export default function Documents() {
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
                    <Modal.Title>Doküman Ekle</Modal.Title>
                </Modal.Header>
                <form>
                    <Modal.Body>
                        <label htmlFor="haftaekle">Hafta</label>
                        <textarea className={`form-control`} id="haftaekle" rows="1" placeholder=""></textarea>
                        <label htmlFor="konuekle">Konu</label>
                        <textarea className={`form-control`} id="konuekle" rows="1" placeholder=""></textarea>
                        <label htmlFor="docturekle">Doküman Türü</label>
                        <textarea className={`form-control`} id="docturekle" rows="1" placeholder=""></textarea>
                        <label htmlFor="aciklamaekle">Açıklama</label>
                        <textarea className={`form-control`} id="aciklamaekle" rows="1" placeholder=""></textarea>
                        <label htmlFor="tarihekle">Doküman Tarihi</label>
                        <textarea className={`form-control`} id="tarihekle" rows="1" placeholder=""></textarea>
                        <label htmlFor="bastarihekle">Ödev Başlangıç Tarihi</label>
                        <textarea className={`form-control`} id="bastarihekle" rows="1" placeholder=""></textarea>
                        <label htmlFor="bittarihekle">Ödev Bitiş Tarihi</label>
                        <textarea className={`form-control`} id="bittarihekle" rows="1" placeholder=""></textarea>
                        <label htmlFor="notekle">Not</label>
                        <textarea className={`form-control`} id="notekle" rows="1" placeholder=""></textarea>
                        <label htmlFor="adekle">Dosya Adı</label>
                        <textarea className={`form-control`} id="adekle" rows="1" placeholder=""></textarea>
                    </Modal.Body>
                    <Modal.Footer>
                        <button
                            id="btn3"
                            type="submit"
                            className={`button w-100 ${styles.button}`}
                        >
                            &nbsp; Ekle
                        </button>
                    </Modal.Footer>
                </form>
            </Modal>
            <Head>
                <title>Ödev ve Doküman - İÜC ÖBS</title>
            </Head>
            <Layout
                appBar={{
                    links: { "Ana Sayfa": "/lecturer", "Ödev ve Doküman": "/lecturer/documents" },
                    title: "Ödev ve Doküman",
                }}
            >
                <div className={`container ${styles.mainContainer}`}>
                    <div className={`container ${styles.mainContainer}`} style={{ fontWeight: "400", textAlign: "center" }} >

                        <div className={`row`}>
                            <div className={`col-2 my-auto ${styles.baslik}`}>
                                Dönem
                            </div>
                            <div className={`${styles.mycol} my-auto`}>
                                <div className={`${styles.verticalLine}`}></div>
                            </div>
                            <div className={`col-3 my-auto ${styles.baslik}`}>
                                Birim adı
                            </div>
                            <div className={`${styles.mycol} my-auto`}>
                                <div className={`${styles.verticalLine}`}></div>
                            </div>
                            <div className={`col-1 my-auto ${styles.baslik}`}>
                                Ders Adı
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
                                Kredi
                            </div>
                            <div className={`${styles.mycol} my-auto`}>
                                <div className={`${styles.verticalLine}`}></div>
                            </div>
                            <div className={`col-2 my-auto ${styles.baslik}`}>
                                AKTS
                            </div>
                        </div>
                        <hr></hr>

                        <div className={`row ${styles.dersler}`} style={{ background: "rgb(241, 242, 247)" }} onClick={e => {
                            if ($("#1").is(":visible")) {
                                $(e.currentTarget).css("background", "#F1F2F7");
                            }
                            else {
                                $(e.currentTarget).css("background", "#fff");
                            }
                            $("#1").slideToggle(300)
                        }} >
                            <div className={`col-2 my-auto ${styles.rows}`}>
                                Bahar
                            </div>
                            <div className={`${styles.mycol} my-auto`}>
                                <div className={`${styles.verticalLine}`}></div>
                            </div>
                            <div className={`col-3 my-auto ${styles.rows}`}>
                                BİLGİSAYAR MÜHENDİSLİĞİ, LİSANS PROGRAMI, (ÖRGÜN ÖĞRETİM)
                            </div>
                            <div className={`${styles.mycol} my-auto`}>
                                <div className={`${styles.verticalLine}`}></div>
                            </div>
                            <div className={`col-1 my-auto ${styles.rows}`}>
                                BİLGİSAYAR MİMARİSİ
                            </div>
                            <div className={`${styles.mycol} my-auto`}>
                                <div className={`${styles.verticalLine}`}></div>
                            </div>
                            <div className={`col-1 my-auto ${styles.rows}`}>
                                BIMU3024
                            </div>
                            <div className={`${styles.mycol} my-auto`}>
                                <div className={`${styles.verticalLine}`}></div>
                            </div>
                            <div className={`col-2 my-auto ${styles.rows}`}>
                                3
                            </div>
                            <div className={`${styles.mycol} my-auto`}>
                                <div className={`${styles.verticalLine}`}></div>
                            </div>
                            <div className={`col-2 my-auto ${styles.rows}`}>
                                4
                            </div>
                        </div>

                        <div id='1' className={`row ${styles.row} ${styles.info}`} style={{ margin: "1rem", marginRight: "2rem", marginLeft: "2rem", display: "none" }}>
                            <div className={`row`}>
                                <div className={`col-1 my-auto ${styles.baslik}`}>
                                    Hafta
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-1 my-auto ${styles.baslik}`}>
                                    Konu
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-1 my-auto ${styles.baslik}`}>
                                    Doküman Türü
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.baslik}`}>
                                    Açıklama
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-1 my-auto ${styles.baslik}`}>
                                    Doküman Tarihi
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-1 my-auto ${styles.baslik}`}>
                                    Ödev Başlangıç Tarihi
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-1 my-auto ${styles.baslik}`}>
                                    Ödev Bitiş Tarihi
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-1 my-auto ${styles.baslik}`}>
                                    Not
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-1 my-auto ${styles.baslik}`}>
                                    Dosya Adı
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-1 my-auto ${styles.baslik}`}>
                                    <button id="btn1" type="submit" className={`${styles.addbtn}`} onClick={
                                        handleShow
                                    }>
                                        {exclamationElement}
                                    </button>
                                </div>
                            </div>
                            <div className={`${styles.horizontalLine2}`}></div>
                            <div className={`row`}>
                                <div className={`col-1 my-auto ${styles.rows}`}>
                                    6. Hafta
                                </div>

                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-1 my-auto ${styles.rows}`}>
                                    Komut Seti tasarımı
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-1 my-auto ${styles.rows}`}>
                                    Slayt
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    Komut Seti Tasarımı
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-1 my-auto ${styles.rows}`}>
                                    2.3.2022
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-1 my-auto ${styles.rows}`}>

                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-1 my-auto ${styles.rows}`}>

                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-1 my-auto ${styles.rows}`}>

                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-1 my-auto ${styles.rows}`}>
                                    slayt.pdf
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-1 my-auto ${styles.rows}`}>
                                    <button id="btn1" type="submit" className={`${styles.deletebtn}`}>
                                        {exclamationElement2}
                                    </button>
                                </div>
                            </div>
                            <div className={`${styles.horizontalLine}`}></div>
                            <div className={`row`}>
                                <div className={`col-1 my-auto ${styles.rows}`}>
                                    6. Hafta
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-1 my-auto ${styles.rows}`}>
                                    Komut Seti tasarımı
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-1 my-auto ${styles.rows}`}>
                                    Slayt
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    Komut Seti Tasarımı
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-1 my-auto ${styles.rows}`}>
                                    2.3.2022
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-1 my-auto ${styles.rows}`}>

                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-1 my-auto ${styles.rows}`}>

                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-1 my-auto ${styles.rows}`}>

                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-1 my-auto ${styles.rows}`}>
                                    slayt.pdf
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-1 my-auto ${styles.rows}`}>
                                    <button id="btn1" type="submit" className={`${styles.deletebtn}`}>
                                        {exclamationElement2}
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className={`${styles.horizontalLine}`}></div>
                        <div className={`row ${styles.dersler}`} style={{ background: "rgb(241, 242, 247)" }} onClick={e => {
                            if ($("#2").is(":visible")) {
                                $(e.currentTarget).css("background", "#F1F2F7");
                            }
                            else {
                                $(e.currentTarget).css("background", "#fff");
                            }
                            $("#2").slideToggle(300)
                        }} >
                            <div className={`col-2 my-auto ${styles.rows}`}>
                                Bahar
                            </div>
                            <div className={`${styles.mycol} my-auto`}>
                                <div className={`${styles.verticalLine}`}></div>
                            </div>
                            <div className={`col-3 my-auto ${styles.rows}`}>
                                BİLGİSAYAR MÜHENDİSLİĞİ, LİSANS PROGRAMI, (ÖRGÜN ÖĞRETİM)
                            </div>
                            <div className={`${styles.mycol} my-auto`}>
                                <div className={`${styles.verticalLine}`}></div>
                            </div>
                            <div className={`col-1 my-auto ${styles.rows}`}>
                                BİLGİSAYAR MİMARİSİ
                            </div>
                            <div className={`${styles.mycol} my-auto`}>
                                <div className={`${styles.verticalLine}`}></div>
                            </div>
                            <div className={`col-1 my-auto ${styles.rows}`}>
                                BIMU3024
                            </div>
                            <div className={`${styles.mycol} my-auto`}>
                                <div className={`${styles.verticalLine}`}></div>
                            </div>
                            <div className={`col-2 my-auto ${styles.rows}`}>
                                3
                            </div>
                            <div className={`${styles.mycol} my-auto`}>
                                <div className={`${styles.verticalLine}`}></div>
                            </div>
                            <div className={`col-2 my-auto ${styles.rows}`}>
                                4
                            </div>
                        </div>

                        <div id='2' className={`row ${styles.row} ${styles.info}`} style={{ margin: "1rem", marginRight: "2rem", marginLeft: "2rem", display: "none" }}>
                            <div className={`row`}>
                                <div className={`col-1 my-auto ${styles.baslik}`}>
                                    Hafta
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-1 my-auto ${styles.baslik}`}>
                                    Konu
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-1 my-auto ${styles.baslik}`}>
                                    Doküman Türü
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.baslik}`}>
                                    Açıklama
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-1 my-auto ${styles.baslik}`}>
                                    Doküman Tarihi
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-1 my-auto ${styles.baslik}`}>
                                    Ödev Başlangıç Tarihi
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-1 my-auto ${styles.baslik}`}>
                                    Ödev Bitiş Tarihi
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-1 my-auto ${styles.baslik}`}>
                                    Not
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-1 my-auto ${styles.baslik}`}>
                                    Dosya Adı
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-1 my-auto ${styles.baslik}`}>
                                    <button id="btn1" type="submit" className={`${styles.addbtn}`} onClick={
                                        handleShow
                                    }>
                                        {exclamationElement}
                                    </button>
                                </div>
                            </div>
                            <div className={`${styles.horizontalLine2}`}></div>
                            <div className={`row`}>
                                <div className={`col-1 my-auto ${styles.rows}`}>
                                    6. Hafta
                                </div>

                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-1 my-auto ${styles.rows}`}>
                                    Komut Seti tasarımı
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-1 my-auto ${styles.rows}`}>
                                    Slayt
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    Komut Seti Tasarımı
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-1 my-auto ${styles.rows}`}>
                                    2.3.2022
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-1 my-auto ${styles.rows}`}>

                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-1 my-auto ${styles.rows}`}>

                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-1 my-auto ${styles.rows}`}>

                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-1 my-auto ${styles.rows}`}>
                                    slayt.pdf
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-1 my-auto ${styles.rows}`}>
                                    <button id="btn1" type="submit" className={`${styles.deletebtn}`}>
                                        {exclamationElement2}
                                    </button>
                                </div>
                            </div>
                            <div className={`${styles.horizontalLine}`}></div>
                            <div className={`row`}>
                                <div className={`col-1 my-auto ${styles.rows}`}>
                                    6. Hafta
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-1 my-auto ${styles.rows}`}>
                                    Komut Seti tasarımı
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-1 my-auto ${styles.rows}`}>
                                    Slayt
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    Komut Seti Tasarımı
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-1 my-auto ${styles.rows}`}>
                                    2.3.2022
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-1 my-auto ${styles.rows}`}>

                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-1 my-auto ${styles.rows}`}>

                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-1 my-auto ${styles.rows}`}>

                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-1 my-auto ${styles.rows}`}>
                                    slayt.pdf
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-1 my-auto ${styles.rows}`}>
                                    <button id="btn1" type="submit" className={`${styles.deletebtn}`}>
                                        {exclamationElement2}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}



