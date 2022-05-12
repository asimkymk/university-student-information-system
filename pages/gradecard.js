//TODO : TABLE TASARIMI

import React from "react";
import Layout from "../components/Layout/Layout";
import Head from "next/head";
import $ from "jquery";
import styles from "../styles/RequestAndObjection.module.css";
export default function GradeCard() {
    return (
        <>

            <Head>
                <title>Belge Talebi - İÜC ÖBS</title>
            </Head>

            <Layout
                appBar={{
                    links: { "Ana Sayfa": "/", "Not Kartı": "/gradecard" },
                    title: "Not Kartı",
                }}
            >
                <div className={`container ${styles.mainContainer}`}>
                    <div style={{ textAlign: "center" }}>
                        <div className={`container ${styles.mainContainer} ${styles.donem}`} onClick={e => {
                            if ($("#donem1").is(":visible")) {
                                $(e.currentTarget.parentElement.parentElement).css("background", "#D3D1CE");
                                $(e.currentTarget).css("background", "#D3D1CE");
                            }
                            else {
                                $(e.currentTarget.parentElement.parentElement).css("background", "#fff");
                                $(e.currentTarget).css("background", "#fff");
                            }
                            $("#donem1").toggle()
                        }}>
                            2019-2020 / Güz
                        </div>
                        <div id="donem1">
                            <hr></hr>
                            <div className={`row`} >
                                <div className={`col-2 my-auto ${styles.baslik}`}>
                                    Kod
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col my-auto ${styles.baslik}`}>
                                    Ad
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
                                <div className={`col-2 my-auto ${styles.baslik}`}>
                                    Kredi
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.baslik}`}>
                                    AKTS
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.baslik}`}>
                                    Zor/Seç
                                </div>
                            </div>

                            <div className={`${styles.horizontalLine2}`}></div>

                            <div className={`row ${styles.row}`}>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    BIMU1051
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col my-auto ${styles.rows}`}>
                                    CALCULUS I
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-1 my-auto ${styles.rows}`}>
                                    CB
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    4
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    6
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    Zor.
                                </div>
                            </div>
                            <div className={`${styles.horizontalLine}`}></div>
                            <div className={`row ${styles.row}`}>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    BIMU1051
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col my-auto ${styles.rows}`}>
                                    CALCULUS I
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-1 my-auto ${styles.rows}`}>
                                    CB
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    4
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    6
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    Zor.
                                </div>
                            </div>
                            <div className={`${styles.horizontalLine}`}></div>
                            <div className={`row ${styles.row}`}>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    BIMU1051
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col my-auto ${styles.rows}`}>
                                    CALCULUS I
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-1 my-auto ${styles.rows}`}>
                                    CB
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    4
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    6
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    Zor.
                                </div>
                            </div>
                            <div className={`${styles.horizontalLine}`}></div>
                            <div className={`row ${styles.row}`}>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    BIMU1051
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col my-auto ${styles.rows}`}>
                                    CALCULUS I
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-1 my-auto ${styles.rows}`}>
                                    CB
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    4
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    6
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    Zor.
                                </div>
                            </div>
                            <div className={`${styles.horizontalLine}`}></div>
                            <div className={`row ${styles.row}`}>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    BIMU1051
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col my-auto ${styles.rows}`}>
                                    CALCULUS I
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-1 my-auto ${styles.rows}`}>
                                    CB
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    4
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    6
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    Zor.
                                </div>
                            </div>
                            <div className={`${styles.horizontalLine}`}></div>
                            <div className={`row ${styles.row}`}>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    BIMU1051
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col my-auto ${styles.rows}`}>
                                    CALCULUS I
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-1 my-auto ${styles.rows}`}>
                                    CB
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    4
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    6
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    Zor.
                                </div>
                            </div>
                            <hr></hr>
                            <div className={styles.info}>
                                <div className={`row ${styles.row}`}>
                                    <div className={`col-6 my-auto ${styles.grade1}`}>
                                        Yarıyıl Kredi: 22
                                    </div>
                                    <div className={`col-6 my-auto ${styles.grade2}`}>
                                        <b>Toplam Kredi:</b> 64
                                    </div>
                                </div>
                                <div className={`${styles.horizontalLine}`}></div>
                                <div className={`row ${styles.row}`}>
                                    <div className={`col-6 my-auto ${styles.grade1}`}>
                                        Yarıyıl AKTS: 30
                                    </div>
                                    <div className={`col-6 my-auto ${styles.grade2}`}>
                                        <b>Toplam AKTS:</b> 92
                                    </div>
                                </div>
                                <div className={`${styles.horizontalLine}`}></div>
                                <div className={`row ${styles.row}`}>
                                    <div className={`col-6 my-auto ${styles.grade1}`}>
                                        ANO: 4
                                    </div>
                                    <div className={`col-6 my-auto ${styles.grade2}`}>
                                        <b>AGNO:</b> 3.78
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`container ${styles.mainContainer}`}>
                    <div style={{ textAlign: "center" }}>
                        <div className={`container ${styles.mainContainer} ${styles.donem}`} onClick={e => {
                            if ($("#donem2").is(":visible")) {
                                $(e.currentTarget.parentElement.parentElement).css("background", "#D3D1CE");
                                $(e.currentTarget).css("background", "#D3D1CE");
                            }
                            else {
                                $(e.currentTarget.parentElement.parentElement).css("background", "#fff");
                                $(e.currentTarget).css("background", "#fff");
                            }
                            $("#donem2").toggle()
                        }}>
                            2019-2020 / Bahar
                        </div>

                        <div id="donem2">
                            <hr></hr>
                            <div className={`row`} >
                                <div className={`col-2 my-auto ${styles.baslik}`}>
                                    Kod
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col my-auto ${styles.baslik}`}>
                                    Ad
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
                                <div className={`col-2 my-auto ${styles.baslik}`}>
                                    Kredi
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.baslik}`}>
                                    AKTS
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.baslik}`}>
                                    Zor/Seç
                                </div>
                            </div>

                            <div className={`${styles.horizontalLine2}`}></div>

                            <div className={`row ${styles.row}`}>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    BIMU1051
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col my-auto ${styles.rows}`}>
                                    CALCULUS I
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-1 my-auto ${styles.rows}`}>
                                    CB
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    4
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    6
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    Zor.
                                </div>
                            </div>
                            <div className={`${styles.horizontalLine}`}></div>
                            <div className={`row ${styles.row}`}>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    BIMU1051
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col my-auto ${styles.rows}`}>
                                    CALCULUS I
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-1 my-auto ${styles.rows}`}>
                                    CB
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    4
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    6
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    Zor.
                                </div>
                            </div>
                            <div className={`${styles.horizontalLine}`}></div>
                            <div className={`row ${styles.row}`}>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    BIMU1051
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col my-auto ${styles.rows}`}>
                                    CALCULUS I
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-1 my-auto ${styles.rows}`}>
                                    CB
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    4
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    6
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    Zor.
                                </div>
                            </div>
                            <div className={`${styles.horizontalLine}`}></div>
                            <div className={`row ${styles.row}`}>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    BIMU1051
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col my-auto ${styles.rows}`}>
                                    CALCULUS I
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-1 my-auto ${styles.rows}`}>
                                    CB
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    4
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    6
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    Zor.
                                </div>
                            </div>
                            <div className={`${styles.horizontalLine}`}></div>
                            <div className={`row ${styles.row}`}>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    BIMU1051
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col my-auto ${styles.rows}`}>
                                    CALCULUS I
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-1 my-auto ${styles.rows}`}>
                                    CB
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    4
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    6
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    Zor.
                                </div>
                            </div>
                            <div className={`${styles.horizontalLine}`}></div>
                            <div className={`row ${styles.row}`}>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    BIMU1051
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col my-auto ${styles.rows}`}>
                                    CALCULUS I
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-1 my-auto ${styles.rows}`}>
                                    CB
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    4
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    6
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    Zor.
                                </div>
                            </div>
                            <hr></hr>
                            <div className={styles.info}>
                                <div className={`row ${styles.row}`}>
                                    <div className={`col-6 my-auto ${styles.grade1}`}>
                                        Yarıyıl Kredi: 22
                                    </div>
                                    <div className={`col-6 my-auto ${styles.grade2}`}>
                                        <b>Toplam Kredi:</b> 64
                                    </div>
                                </div>
                                <div className={`${styles.horizontalLine}`}></div>
                                <div className={`row ${styles.row}`}>
                                    <div className={`col-6 my-auto ${styles.grade1}`}>
                                        Yarıyıl AKTS: 30
                                    </div>
                                    <div className={`col-6 my-auto ${styles.grade2}`}>
                                        <b>Toplam AKTS:</b> 92
                                    </div>
                                </div>
                                <div className={`${styles.horizontalLine}`}></div>
                                <div className={`row ${styles.row}`}>
                                    <div className={`col-6 my-auto ${styles.grade1}`}>
                                        ANO: 4
                                    </div>
                                    <div className={`col-6 my-auto ${styles.grade2}`}>
                                        <b>AGNO:</b> 3.78
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>

                </div>
                <div className={`container ${styles.mainContainer}`}>
                    <div style={{ textAlign: "center" }}>
                        <div className={`container ${styles.mainContainer} ${styles.donem}`} onClick={e => {
                            if ($("#donem3").is(":visible")) {
                                $(e.currentTarget.parentElement.parentElement).css("background", "#D3D1CE");
                                $(e.currentTarget).css("background", "#D3D1CE");
                            }
                            else {
                                $(e.currentTarget.parentElement.parentElement).css("background", "#fff");
                                $(e.currentTarget).css("background", "#fff");
                            }
                            $("#donem3").toggle()
                        }}>
                            2020-2021 / Güz
                        </div>

                        <div id="donem3">
                            <hr></hr>
                            <div className={`row`} >
                                <div className={`col-2 my-auto ${styles.baslik}`}>
                                    Kod
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col my-auto ${styles.baslik}`}>
                                    Ad
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
                                <div className={`col-2 my-auto ${styles.baslik}`}>
                                    Kredi
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.baslik}`}>
                                    AKTS
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.baslik}`}>
                                    Zor/Seç
                                </div>
                            </div>

                            <div className={`${styles.horizontalLine2}`}></div>

                            <div className={`row ${styles.row}`}>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    BIMU1051
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col my-auto ${styles.rows}`}>
                                    CALCULUS I
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-1 my-auto ${styles.rows}`}>
                                    CB
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    4
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    6
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    Zor.
                                </div>
                            </div>
                            <div className={`${styles.horizontalLine}`}></div>
                            <div className={`row ${styles.row}`}>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    BIMU1051
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col my-auto ${styles.rows}`}>
                                    CALCULUS I
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-1 my-auto ${styles.rows}`}>
                                    CB
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    4
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    6
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    Zor.
                                </div>
                            </div>
                            <div className={`${styles.horizontalLine}`}></div>
                            <div className={`row ${styles.row}`}>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    BIMU1051
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col my-auto ${styles.rows}`}>
                                    CALCULUS I
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-1 my-auto ${styles.rows}`}>
                                    CB
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    4
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    6
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    Zor.
                                </div>
                            </div>
                            <div className={`${styles.horizontalLine}`}></div>
                            <div className={`row ${styles.row}`}>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    BIMU1051
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col my-auto ${styles.rows}`}>
                                    CALCULUS I
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-1 my-auto ${styles.rows}`}>
                                    CB
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    4
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    6
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    Zor.
                                </div>
                            </div>
                            <div className={`${styles.horizontalLine}`}></div>
                            <div className={`row ${styles.row}`}>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    BIMU1051
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col my-auto ${styles.rows}`}>
                                    CALCULUS I
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-1 my-auto ${styles.rows}`}>
                                    CB
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    4
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    6
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    Zor.
                                </div>
                            </div>
                            <div className={`${styles.horizontalLine}`}></div>
                            <div className={`row ${styles.row}`}>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    BIMU1051
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col my-auto ${styles.rows}`}>
                                    CALCULUS I
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-1 my-auto ${styles.rows}`}>
                                    CB
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    4
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    6
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    Zor.
                                </div>
                            </div>
                            <hr></hr>
                            <div className={styles.info}>
                                <div className={`row ${styles.row}`}>
                                    <div className={`col-6 my-auto ${styles.grade1}`}>
                                        Yarıyıl Kredi: 22
                                    </div>
                                    <div className={`col-6 my-auto ${styles.grade2}`}>
                                        <b>Toplam Kredi:</b> 64
                                    </div>
                                </div>
                                <div className={`${styles.horizontalLine}`}></div>
                                <div className={`row ${styles.row}`}>
                                    <div className={`col-6 my-auto ${styles.grade1}`}>
                                        Yarıyıl AKTS: 30
                                    </div>
                                    <div className={`col-6 my-auto ${styles.grade2}`}>
                                        <b>Toplam AKTS:</b> 92
                                    </div>
                                </div>
                                <div className={`${styles.horizontalLine}`}></div>
                                <div className={`row ${styles.row}`}>
                                    <div className={`col-6 my-auto ${styles.grade1}`}>
                                        ANO: 4
                                    </div>
                                    <div className={`col-6 my-auto ${styles.grade2}`}>
                                        <b>AGNO:</b> 3.78
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>

                </div>
                <div className={`container ${styles.mainContainer}`}>
                    <div style={{ textAlign: "center" }}>
                        <div className={`container ${styles.mainContainer} ${styles.donem}`} onClick={e => {
                            if ($("#donem4").is(":visible")) {
                                $(e.currentTarget.parentElement.parentElement).css("background", "#D3D1CE");
                                $(e.currentTarget).css("background", "#D3D1CE");
                            }
                            else {
                                $(e.currentTarget.parentElement.parentElement).css("background", "#fff");
                                $(e.currentTarget).css("background", "#fff");
                            }
                            $("#donem4").toggle()
                        }}>
                            2020-2021 / Bahar
                        </div>

                        <div id="donem4">
                            <hr></hr>
                            <div className={`row`} >
                                <div className={`col-2 my-auto ${styles.baslik}`}>
                                    Kod
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col my-auto ${styles.baslik}`}>
                                    Ad
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
                                <div className={`col-2 my-auto ${styles.baslik}`}>
                                    Kredi
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.baslik}`}>
                                    AKTS
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.baslik}`}>
                                    Zor/Seç
                                </div>
                            </div>

                            <div className={`${styles.horizontalLine2}`}></div>

                            <div className={`row ${styles.row}`}>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    BIMU1051
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col my-auto ${styles.rows}`}>
                                    CALCULUS I
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-1 my-auto ${styles.rows}`}>
                                    CB
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    4
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    6
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    Zor.
                                </div>
                            </div>
                            <div className={`${styles.horizontalLine}`}></div>
                            <div className={`row ${styles.row}`}>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    BIMU1051
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col my-auto ${styles.rows}`}>
                                    CALCULUS I
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-1 my-auto ${styles.rows}`}>
                                    CB
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    4
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    6
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    Zor.
                                </div>
                            </div>
                            <div className={`${styles.horizontalLine}`}></div>
                            <div className={`row ${styles.row}`}>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    BIMU1051
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col my-auto ${styles.rows}`}>
                                    CALCULUS I
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-1 my-auto ${styles.rows}`}>
                                    CB
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    4
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    6
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    Zor.
                                </div>
                            </div>
                            <div className={`${styles.horizontalLine}`}></div>
                            <div className={`row ${styles.row}`}>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    BIMU1051
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col my-auto ${styles.rows}`}>
                                    CALCULUS I
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-1 my-auto ${styles.rows}`}>
                                    CB
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    4
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    6
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    Zor.
                                </div>
                            </div>
                            <div className={`${styles.horizontalLine}`}></div>
                            <div className={`row ${styles.row}`}>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    BIMU1051
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col my-auto ${styles.rows}`}>
                                    CALCULUS I
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-1 my-auto ${styles.rows}`}>
                                    CB
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    4
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    6
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    Zor.
                                </div>
                            </div>
                            <div className={`${styles.horizontalLine}`}></div>
                            <div className={`row ${styles.row}`}>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    BIMU1051
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col my-auto ${styles.rows}`}>
                                    CALCULUS I
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-1 my-auto ${styles.rows}`}>
                                    CB
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    4
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    6
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    Zor.
                                </div>
                            </div>
                            <hr></hr>
                            <div className={styles.info}>
                                <div className={`row ${styles.row}`}>
                                    <div className={`col-6 my-auto ${styles.grade1}`}>
                                        Yarıyıl Kredi: 22
                                    </div>
                                    <div className={`col-6 my-auto ${styles.grade2}`}>
                                        <b>Toplam Kredi:</b> 64
                                    </div>
                                </div>
                                <div className={`${styles.horizontalLine}`}></div>
                                <div className={`row ${styles.row}`}>
                                    <div className={`col-6 my-auto ${styles.grade1}`}>
                                        Yarıyıl AKTS: 30
                                    </div>
                                    <div className={`col-6 my-auto ${styles.grade2}`}>
                                        <b>Toplam AKTS:</b> 92
                                    </div>
                                </div>
                                <div className={`${styles.horizontalLine}`}></div>
                                <div className={`row ${styles.row}`}>
                                    <div className={`col-6 my-auto ${styles.grade1}`}>
                                        ANO: 4
                                    </div>
                                    <div className={`col-6 my-auto ${styles.grade2}`}>
                                        <b>AGNO:</b> 3.78
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>

                </div>
                <div className={`container ${styles.mainContainer}`}>
                    <div style={{ textAlign: "center" }}>
                        <div className={`container ${styles.mainContainer} ${styles.donem}`} onClick={e => {
                            if ($("#donem5").is(":visible")) {
                                $(e.currentTarget.parentElement.parentElement).css("background", "#D3D1CE");
                                $(e.currentTarget).css("background", "#D3D1CE");
                            }
                            else {
                                $(e.currentTarget.parentElement.parentElement).css("background", "#fff");
                                $(e.currentTarget).css("background", "#fff");
                            }
                            $("#donem5").toggle()
                        }}>
                            2021-2022 / Güz
                        </div>

                        <div id="donem5">
                            <hr></hr>
                            <div className={`row`} >
                                <div className={`col-2 my-auto ${styles.baslik}`}>
                                    Kod
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col my-auto ${styles.baslik}`}>
                                    Ad
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
                                <div className={`col-2 my-auto ${styles.baslik}`}>
                                    Kredi
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.baslik}`}>
                                    AKTS
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.baslik}`}>
                                    Zor/Seç
                                </div>
                            </div>

                            <div className={`${styles.horizontalLine2}`}></div>

                            <div className={`row ${styles.row}`}>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    BIMU1051
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col my-auto ${styles.rows}`}>
                                    CALCULUS I
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-1 my-auto ${styles.rows}`}>
                                    CB
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    4
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    6
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    Zor.
                                </div>
                            </div>
                            <div className={`${styles.horizontalLine}`}></div>
                            <div className={`row ${styles.row}`}>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    BIMU1051
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col my-auto ${styles.rows}`}>
                                    CALCULUS I
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-1 my-auto ${styles.rows}`}>
                                    CB
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    4
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    6
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    Zor.
                                </div>
                            </div>
                            <div className={`${styles.horizontalLine}`}></div>
                            <div className={`row ${styles.row}`}>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    BIMU1051
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col my-auto ${styles.rows}`}>
                                    CALCULUS I
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-1 my-auto ${styles.rows}`}>
                                    CB
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    4
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    6
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    Zor.
                                </div>
                            </div>
                            <div className={`${styles.horizontalLine}`}></div>
                            <div className={`row ${styles.row}`}>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    BIMU1051
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col my-auto ${styles.rows}`}>
                                    CALCULUS I
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-1 my-auto ${styles.rows}`}>
                                    CB
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    4
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    6
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    Zor.
                                </div>
                            </div>
                            <div className={`${styles.horizontalLine}`}></div>
                            <div className={`row ${styles.row}`}>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    BIMU1051
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col my-auto ${styles.rows}`}>
                                    CALCULUS I
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-1 my-auto ${styles.rows}`}>
                                    CB
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    4
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    6
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    Zor.
                                </div>
                            </div>
                            <div className={`${styles.horizontalLine}`}></div>
                            <div className={`row ${styles.row}`}>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    BIMU1051
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col my-auto ${styles.rows}`}>
                                    CALCULUS I
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-1 my-auto ${styles.rows}`}>
                                    CB
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    4
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    6
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    Zor.
                                </div>
                            </div>
                            <hr></hr>
                            <div className={styles.info}>
                                <div className={`row ${styles.row}`}>
                                    <div className={`col-6 my-auto ${styles.grade1}`}>
                                        Yarıyıl Kredi: 22
                                    </div>
                                    <div className={`col-6 my-auto ${styles.grade2}`}>
                                        <b>Toplam Kredi:</b> 64
                                    </div>
                                </div>
                                <div className={`${styles.horizontalLine}`}></div>
                                <div className={`row ${styles.row}`}>
                                    <div className={`col-6 my-auto ${styles.grade1}`}>
                                        Yarıyıl AKTS: 30
                                    </div>
                                    <div className={`col-6 my-auto ${styles.grade2}`}>
                                        <b>Toplam AKTS:</b> 92
                                    </div>
                                </div>
                                <div className={`${styles.horizontalLine}`}></div>
                                <div className={`row ${styles.row}`}>
                                    <div className={`col-6 my-auto ${styles.grade1}`}>
                                        ANO: 4
                                    </div>
                                    <div className={`col-6 my-auto ${styles.grade2}`}>
                                        <b>AGNO:</b> 3.78
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>

                </div>
                <div className={`container ${styles.mainContainer}`}>
                    <div style={{ textAlign: "center" }}>
                        <div className={`container ${styles.mainContainer} ${styles.donem}`} onClick={e => {
                            if ($("#donem6").is(":visible")) {
                                $(e.currentTarget.parentElement.parentElement).css("background", "#D3D1CE");
                                $(e.currentTarget).css("background", "#D3D1CE");
                            }
                            else {
                                $(e.currentTarget.parentElement.parentElement).css("background", "#fff");
                                $(e.currentTarget).css("background", "#fff");
                            }
                            $("#donem6").toggle()
                        }}>
                            2021-2022 / Bahar
                        </div>

                        <div id="donem6">
                            <hr></hr>
                            <div className={`row`} >
                                <div className={`col-2 my-auto ${styles.baslik}`}>
                                    Kod
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col my-auto ${styles.baslik}`}>
                                    Ad
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
                                <div className={`col-2 my-auto ${styles.baslik}`}>
                                    Kredi
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.baslik}`}>
                                    AKTS
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.baslik}`}>
                                    Zor/Seç
                                </div>
                            </div>

                            <div className={`${styles.horizontalLine2}`}></div>

                            <div className={`row ${styles.row}`}>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    BIMU1051
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col my-auto ${styles.rows}`}>
                                    CALCULUS I
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-1 my-auto ${styles.rows}`}>
                                    CB
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    4
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    6
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    Zor.
                                </div>
                            </div>
                            <div className={`${styles.horizontalLine}`}></div>
                            <div className={`row ${styles.row}`}>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    BIMU1051
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col my-auto ${styles.rows}`}>
                                    CALCULUS I
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-1 my-auto ${styles.rows}`}>
                                    CB
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    4
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    6
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    Zor.
                                </div>
                            </div>
                            <div className={`${styles.horizontalLine}`}></div>
                            <div className={`row ${styles.row}`}>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    BIMU1051
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col my-auto ${styles.rows}`}>
                                    CALCULUS I
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-1 my-auto ${styles.rows}`}>
                                    CB
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    4
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    6
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    Zor.
                                </div>
                            </div>
                            <div className={`${styles.horizontalLine}`}></div>
                            <div className={`row ${styles.row}`}>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    BIMU1051
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col my-auto ${styles.rows}`}>
                                    CALCULUS I
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-1 my-auto ${styles.rows}`}>
                                    CB
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    4
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    6
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    Zor.
                                </div>
                            </div>
                            <div className={`${styles.horizontalLine}`}></div>
                            <div className={`row ${styles.row}`}>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    BIMU1051
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col my-auto ${styles.rows}`}>
                                    CALCULUS I
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-1 my-auto ${styles.rows}`}>
                                    CB
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    4
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    6
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    Zor.
                                </div>
                            </div>
                            <div className={`${styles.horizontalLine}`}></div>
                            <div className={`row ${styles.row}`}>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    BIMU1051
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col my-auto ${styles.rows}`}>
                                    CALCULUS I
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-1 my-auto ${styles.rows}`}>
                                    CB
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    4
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    6
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    Zor.
                                </div>
                            </div>
                            <hr></hr>
                            <div className={styles.info}>
                                <div className={`row ${styles.row}`}>
                                    <div className={`col-6 my-auto ${styles.grade1}`}>
                                        Yarıyıl Kredi: 22
                                    </div>
                                    <div className={`col-6 my-auto ${styles.grade2}`}>
                                        <b>Toplam Kredi:</b> 64
                                    </div>
                                </div>
                                <div className={`${styles.horizontalLine}`}></div>
                                <div className={`row ${styles.row}`}>
                                    <div className={`col-6 my-auto ${styles.grade1}`}>
                                        Yarıyıl AKTS: 30
                                    </div>
                                    <div className={`col-6 my-auto ${styles.grade2}`}>
                                        <b>Toplam AKTS:</b> 92
                                    </div>
                                </div>
                                <div className={`${styles.horizontalLine}`}></div>
                                <div className={`row ${styles.row}`}>
                                    <div className={`col-6 my-auto ${styles.grade1}`}>
                                        ANO: 4
                                    </div>
                                    <div className={`col-6 my-auto ${styles.grade2}`}>
                                        <b>AGNO:</b> 3.78
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>

                </div>
                <div className={`container ${styles.mainContainer}`}>
                    <div style={{ textAlign: "center" }}>
                        <div className={`container ${styles.mainContainer} ${styles.donem}`} onClick={e => {
                            if ($("#donem7").is(":visible")) {
                                $(e.currentTarget.parentElement.parentElement).css("background", "#D3D1CE");
                                $(e.currentTarget).css("background", "#D3D1CE");
                            }
                            else {
                                $(e.currentTarget.parentElement.parentElement).css("background", "#fff");
                                $(e.currentTarget).css("background", "#fff");
                            }
                            $("#donem7").toggle();

                        }}>
                            2022-2023 / Güz
                        </div>

                        <div id="donem7">
                            <hr></hr>
                            <div className={`row`} >
                                <div className={`col-2 my-auto ${styles.baslik}`}>
                                    Kod
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col my-auto ${styles.baslik}`}>
                                    Ad
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
                                <div className={`col-2 my-auto ${styles.baslik}`}>
                                    Kredi
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.baslik}`}>
                                    AKTS
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.baslik}`}>
                                    Zor/Seç
                                </div>
                            </div>

                            <div className={`${styles.horizontalLine2}`}></div>

                            <div className={`row ${styles.row}`}>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    BIMU1051
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col my-auto ${styles.rows}`}>
                                    CALCULUS I
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-1 my-auto ${styles.rows}`}>
                                    CB
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    4
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    6
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    Zor.
                                </div>
                            </div>
                            <div className={`${styles.horizontalLine}`}></div>
                            <div className={`row ${styles.row}`}>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    BIMU1051
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col my-auto ${styles.rows}`}>
                                    CALCULUS I
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-1 my-auto ${styles.rows}`}>
                                    CB
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    4
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    6
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    Zor.
                                </div>
                            </div>
                            <div className={`${styles.horizontalLine}`}></div>
                            <div className={`row ${styles.row}`}>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    BIMU1051
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col my-auto ${styles.rows}`}>
                                    CALCULUS I
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-1 my-auto ${styles.rows}`}>
                                    CB
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    4
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    6
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    Zor.
                                </div>
                            </div>
                            <div className={`${styles.horizontalLine}`}></div>
                            <div className={`row ${styles.row}`}>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    BIMU1051
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col my-auto ${styles.rows}`}>
                                    CALCULUS I
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-1 my-auto ${styles.rows}`}>
                                    CB
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    4
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    6
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    Zor.
                                </div>
                            </div>
                            <div className={`${styles.horizontalLine}`}></div>
                            <div className={`row ${styles.row}`}>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    BIMU1051
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col my-auto ${styles.rows}`}>
                                    CALCULUS I
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-1 my-auto ${styles.rows}`}>
                                    CB
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    4
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    6
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    Zor.
                                </div>
                            </div>
                            <div className={`${styles.horizontalLine}`}></div>
                            <div className={`row ${styles.row}`}>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    BIMU1051
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col my-auto ${styles.rows}`}>
                                    CALCULUS I
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-1 my-auto ${styles.rows}`}>
                                    CB
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    4
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    6
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    Zor.
                                </div>
                            </div>
                            <hr></hr>
                            <div className={styles.info}>
                                <div className={`row ${styles.row}`}>
                                    <div className={`col-6 my-auto ${styles.grade1}`}>
                                        Yarıyıl Kredi: 22
                                    </div>
                                    <div className={`col-6 my-auto ${styles.grade2}`}>
                                        <b>Toplam Kredi:</b> 64
                                    </div>
                                </div>
                                <div className={`${styles.horizontalLine}`}></div>
                                <div className={`row ${styles.row}`}>
                                    <div className={`col-6 my-auto ${styles.grade1}`}>
                                        Yarıyıl AKTS: 30
                                    </div>
                                    <div className={`col-6 my-auto ${styles.grade2}`}>
                                        <b>Toplam AKTS:</b> 92
                                    </div>
                                </div>
                                <div className={`${styles.horizontalLine}`}></div>
                                <div className={`row ${styles.row}`}>
                                    <div className={`col-6 my-auto ${styles.grade1}`}>
                                        ANO: 4
                                    </div>
                                    <div className={`col-6 my-auto ${styles.grade2}`}>
                                        <b>AGNO:</b> 3.78
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>

                </div>
                <div className={`container ${styles.mainContainer}`}>
                    <div style={{ textAlign: "center" }}>
                        <div className={`container ${styles.mainContainer} ${styles.donem}`} onClick={e => {
                            if ($("#donem8").is(":visible")) {
                                $(e.currentTarget.parentElement.parentElement).css("background", "#D3D1CE");
                                $(e.currentTarget).css("background", "#D3D1CE");
                            }
                            else {
                                $(e.currentTarget.parentElement.parentElement).css("background", "#fff");
                                $(e.currentTarget).css("background", "#fff");
                            }
                            $("#donem8").toggle()
                        }}>
                            2022-2023 / Bahar
                        </div>

                        <div id="donem8">
                            <hr></hr>
                            <div className={`row`} >
                                <div className={`col-2 my-auto ${styles.baslik}`}>
                                    Kod
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col my-auto ${styles.baslik}`}>
                                    Ad
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
                                <div className={`col-2 my-auto ${styles.baslik}`}>
                                    Kredi
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.baslik}`}>
                                    AKTS
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.baslik}`}>
                                    Zor/Seç
                                </div>
                            </div>

                            <div className={`${styles.horizontalLine2}`}></div>

                            <div className={`row ${styles.row}`}>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    BIMU1051
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col my-auto ${styles.rows}`}>
                                    CALCULUS I
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-1 my-auto ${styles.rows}`}>
                                    CB
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    4
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    6
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    Zor.
                                </div>
                            </div>
                            <div className={`${styles.horizontalLine}`}></div>
                            <div className={`row ${styles.row}`}>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    BIMU1051
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col my-auto ${styles.rows}`}>
                                    CALCULUS I
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-1 my-auto ${styles.rows}`}>
                                    CB
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    4
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    6
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    Zor.
                                </div>
                            </div>
                            <div className={`${styles.horizontalLine}`}></div>
                            <div className={`row ${styles.row}`}>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    BIMU1051
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col my-auto ${styles.rows}`}>
                                    CALCULUS I
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-1 my-auto ${styles.rows}`}>
                                    CB
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    4
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    6
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    Zor.
                                </div>
                            </div>
                            <div className={`${styles.horizontalLine}`}></div>
                            <div className={`row ${styles.row}`}>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    BIMU1051
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col my-auto ${styles.rows}`}>
                                    CALCULUS I
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-1 my-auto ${styles.rows}`}>
                                    CB
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    4
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    6
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    Zor.
                                </div>
                            </div>
                            <div className={`${styles.horizontalLine}`}></div>
                            <div className={`row ${styles.row}`}>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    BIMU1051
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col my-auto ${styles.rows}`}>
                                    CALCULUS I
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-1 my-auto ${styles.rows}`}>
                                    CB
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    4
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    6
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    Zor.
                                </div>
                            </div>
                            <div className={`${styles.horizontalLine}`}></div>
                            <div className={`row ${styles.row}`}>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    BIMU1051
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col my-auto ${styles.rows}`}>
                                    CALCULUS I
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-1 my-auto ${styles.rows}`}>
                                    CB
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    4
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    6
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.rows}`}>
                                    Zor.
                                </div>
                            </div>
                            <hr></hr>
                            <div className={styles.info}>
                                <div className={`row ${styles.row}`}>
                                    <div className={`col-6 my-auto ${styles.grade1}`}>
                                        Yarıyıl Kredi: 22
                                    </div>
                                    <div className={`col-6 my-auto ${styles.grade2}`}>
                                        <b>Toplam Kredi:</b> 64
                                    </div>
                                </div>
                                <div className={`${styles.horizontalLine}`}></div>
                                <div className={`row ${styles.row}`}>
                                    <div className={`col-6 my-auto ${styles.grade1}`}>
                                        Yarıyıl AKTS: 30
                                    </div>
                                    <div className={`col-6 my-auto ${styles.grade2}`}>
                                        <b>Toplam AKTS:</b> 92
                                    </div>
                                </div>
                                <div className={`${styles.horizontalLine}`}></div>
                                <div className={`row ${styles.row}`}>
                                    <div className={`col-6 my-auto ${styles.grade1}`}>
                                        ANO: 4
                                    </div>
                                    <div className={`col-6 my-auto ${styles.grade2}`}>
                                        <b>AGNO:</b> 3.78
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>

                </div>
            </Layout>

        </>
    );

}

