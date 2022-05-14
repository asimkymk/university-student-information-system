//TODO : TABLE TASARIMI

import React from "react";
import Layout from "../components/Layout/Layout";
import Head from "next/head";
import styles from "../styles/RequestAndObjection.module.css";


export default function LectureList() {
    return (
        <>

            <Head>
                <title>Ders Listesi - İÜC ÖBS</title>
            </Head>

            <Layout
                appBar={{
                    links: { "Ana Sayfa": "/", "Ders Listesi": "/lectureList" },
                    title: "Ders Listesi",
                }}
            >

                <div className={`container ${styles.mainContainer}`}>
                    <div style={{ textAlign: "center" }}>
                        <div className={`row`} style={{ paddingTop: "0.5rem" }}>
                            <div className={`col-1 my-auto ${styles.baslik}`}>
                                Dönem
                            </div>
                            <div className={`${styles.mycol} my-auto`}>
                                <div className={`${styles.verticalLine}`}></div>
                            </div>
                            <div className={`col-3 my-auto ${styles.baslik}`}>
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
                            <div className={`col-1 my-auto ${styles.baslik}`}>
                                P
                            </div>
                            <div className={`${styles.mycol} my-auto`}>
                                <div className={`${styles.verticalLine}`}></div>
                            </div>
                            <div className={`col-1 my-auto ${styles.baslik}`}>
                                T
                            </div>
                            <div className={`${styles.mycol} my-auto`}>
                                <div className={`${styles.verticalLine}`}></div>
                            </div>
                            <div className={`col-1 my-auto ${styles.baslik}`}>
                                L
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

                    <div id="1" className={`row ${styles.row}`}>
                        <div name="derskodu" className={`col-1 my-auto ${styles.rows}`}>
                            Bahar
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div name="dersadi" className={`col-3 my-auto ${styles.rows}`}>
                            Web Programlama
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div name="derskodu" className={`col-1 my-auto ${styles.rows}`}>
                            BIMU3929
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div name="dersp" className={`col-1 my-auto ${styles.rows}`}>
                            0
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div name="derst" className={`col-1 my-auto ${styles.rows}`}>
                            3
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div name="dersl" className={`col-1 my-auto ${styles.rows}`}>
                            0
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div name="toplamkredi" className={`col-1 my-auto ${styles.rows}`}>
                            3
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div name="dersonay" className={`col-2 my-auto ${styles.rows}`}>
                            Kesin Kayıt
                        </div>
                    </div>
                    <div className={`${styles.horizontalLine}`}></div>
                    <div id="2" className={`row ${styles.row}`}>
                        <div name="derskodu" className={`col-1 my-auto ${styles.rows}`}>
                            Bahar
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div name="dersadi" className={`col-3 my-auto ${styles.rows}`}>
                            Görüntü İşleme
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div name="derskodu" className={`col-1 my-auto ${styles.rows}`}>
                            BIMU3931
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div name="dersp" className={`col-1 my-auto ${styles.rows}`}>
                            0
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div name="derst" className={`col-1 my-auto ${styles.rows}`}>
                            3
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div name="dersl" className={`col-1 my-auto ${styles.rows}`}>
                            0
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div name="toplamkredi" className={`col-1 my-auto ${styles.rows}`}>
                            3
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div name="dersonay" className={`col-2 my-auto ${styles.rows}`}>
                            Kesin Kayıt
                        </div>
                    </div>
                    <div className={`${styles.horizontalLine}`}></div>
                    <div id="3" className={`row ${styles.row}`}>
                        <div name="derskodu" className={`col-1 my-auto ${styles.rows}`}>
                            Bahar
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div name="dersadi" className={`col-3 my-auto ${styles.rows}`}>
                            İş Hukuku
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div name="derskodu" className={`col-1 my-auto ${styles.rows}`}>
                            BIMU2642
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div name="dersp" className={`col-1 my-auto ${styles.rows}`}>
                            0
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div name="derst" className={`col-1 my-auto ${styles.rows}`}>
                            1
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div name="dersl" className={`col-1 my-auto ${styles.rows}`}>
                            0
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div name="toplamkredi" className={`col-1 my-auto ${styles.rows}`}>
                            1
                        </div>
                        <div className={`${styles.mycol} my-auto`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                        <div name="dersonay" className={`col-2 my-auto ${styles.rows}`}>
                            Kesin Kayıt
                        </div>
                    </div>
                </div>


            </Layout>

        </>
    );

}

