//TODO : TABLE TASARIMI

import React from "react";
import Layout from "../../components/Layout/LayoutLecturer";
import Head from "next/head";
import { useState } from "react";
import styles from "../../styles/RequestAndObjection.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import $ from "jquery";
import { Modal } from "react-bootstrap";
import {
    faExclamationCircle,
} from "@fortawesome/free-solid-svg-icons";
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
                    links: { "Ana Sayfa": "/lecturer", "Sınav İtirazları": "/lecturer/examobjection" },
                    title: "Sınav İtirazları",
                }}
            >

                <div className={`container ${styles.mainContainer}`}>
                    <div style={{ textAlign: "center" }}>
                        <div className={`row`} style={{ paddingTop: "0.5rem" }}>
                            <div className={`col-3 my-auto ${styles.baslik}`}>
                                Ders Adı
                            </div>
                            <div className={`${styles.mycol} my-auto`}>
                                <div className={`${styles.verticalLine}`}></div>
                            </div>
                            <div className={`col-2 my-auto ${styles.baslik}`}>
                                Öğrenci Adı
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
                            <div className={`col-1 my-auto ${styles.baslik}`}>
                                Not
                            </div>
                            <div className={`${styles.mycol} my-auto`}>
                                <div className={`${styles.verticalLine}`}></div>
                            </div>
                            <div className={`col-3 my-auto ${styles.baslik}`}>
                                İtiraz Nedeni
                            </div>
                        </div>
                    </div>

                    <div className={`${styles.horizontalLine2}`}></div>

                    <div name="1" className={`row ${styles.row} ${styles.removable}`} onClick={e => {
                        let x = + $(e.currentTarget).attr("name");
                        $("[name=" + x + "]").remove();
                    }}>
                        <div name="dersadi" className={`col-3 my-auto ${styles.rows}`}>
                            Bilgisayar Mühendisliğine Giriş1
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div name="ogrenci" className={`col-2 my-auto ${styles.rows}`}>
                            Asım Kaymak
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
                        <div name="not" className={`col-1 my-auto ${styles.rows}`}>
                            68
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-3 my-auto ${styles.rows}`}>
                            Notumun daha yüksek olması gerektiğini düşünüyorum.
                        </div>

                    </div>
                    <div name="1" className={`${styles.horizontalLine}`}></div>
                    <div name="2" className={`row ${styles.row} ${styles.removable}`} onClick={e => {
                        let x = + $(e.currentTarget).attr("name");
                        $("[name=" + x + "]").remove();
                    }}>
                        <div name="dersadi" className={`col-3 my-auto ${styles.rows}`}>
                            Devreler ve Sistemler
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div name="ogrenci" className={`col-2 my-auto ${styles.rows}`}>
                            Emin Can Özge
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
                        <div name="not" className={`col-1 my-auto ${styles.rows}`}>
                            75
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-3 my-auto ${styles.rows}`}>
                            Beklediğimden daha düşük bir not aldım.
                        </div>

                    </div>
                    <div name="2" className={`${styles.horizontalLine}`}></div>
                    <div name="3" className={`row ${styles.row} ${styles.removable}`} onClick={e => {
                        let x = + $(e.currentTarget).attr("name");
                        $("[name=" + x + "]").remove();
                    }}>
                        <div name="dersadi" className={`col-3 my-auto ${styles.rows}`}>
                            Lojik Devre Tasarımı
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div name="ogrenci" className={`col-2 my-auto ${styles.rows}`}>
                            Siraç Petmezçiler
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
                        <div name="not" className={`col-1 my-auto ${styles.rows}`}>
                            42
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div className={`col-3 my-auto ${styles.rows}`}>
                            Sınavda kaydırma yaptığımı düşünüyorum.
                        </div>
                    </div>
                </div>


            </Layout>

        </>
    );

}

