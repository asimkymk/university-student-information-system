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
                            if ($("#donemh").is(":visible")) {
                                $(e.currentTarget.parentElement.parentElement).css("background", "#D3D1CE");
                                $(e.currentTarget).css("background", "#D3D1CE");
                            }
                            else {
                                $(e.currentTarget.parentElement.parentElement).css("background", "#fff");
                                $(e.currentTarget).css("background", "#fff");
                            }
                            $("#donemh").slideToggle(300)
                        }}>
                            Hazırlık
                        </div>
                        <div id="donemh">
                            <hr></hr>
                            <div className={`row`} >
                                <div className={`col-3 my-auto ${styles.baslik}`}>
                                    Kod
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-3 my-auto ${styles.baslik}`}>
                                    Ad
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
                                <div className={`col-1 my-auto ${styles.baslik}`}>
                                    Z/S
                                </div>
                            </div>

                            <div className={`${styles.horizontalLine2}`}></div>

                            <div className={`row ${styles.row}`}>
                                <div className={`col-3 my-auto ${styles.rows}`}>
                                    BIMU1054
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-3 my-auto ${styles.rows}`}>
                                    CALCULUS I
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
                                    5
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-1 my-auto ${styles.rows}`}>
                                    S
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
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
                            $("#donem1").slideToggle(300)
                        }}>
                            1. SINIF / GÜZ DÖNEMİ
                        </div>
                        <div id="donem1">
                            <hr></hr>
                            <div className={`row`} >
                                <div className={`col-3 my-auto ${styles.baslik}`}>
                                    Kod
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-3 my-auto ${styles.baslik}`}>
                                    Ad
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
                                <div className={`col-1 my-auto ${styles.baslik}`}>
                                    Z/S
                                </div>
                            </div>

                            <div className={`${styles.horizontalLine2}`}></div>

                            <div className={`row ${styles.row}`}>
                                <div className={`col-3 my-auto ${styles.rows}`}>
                                    BIMU1054
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-3 my-auto ${styles.rows}`}>
                                    CALCULUS I
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
                                    5
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-1 my-auto ${styles.rows}`}>
                                    S
                                </div>
                            </div>
                            <div className={`${styles.horizontalLine}`}></div>
                            <div className={`row ${styles.row}`}>
                                <div className={`col-3 my-auto ${styles.rows}`}>
                                    BIMU1051
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-3 my-auto ${styles.rows}`}>
                                    CALCULUS I
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
                                <div className={`col-1 my-auto ${styles.rows}`}>
                                    Z
                                </div>
                            </div>
                            <div className={`${styles.horizontalLine}`}></div>
                            <div className={`row ${styles.row}`}>
                                <div className={`col-3 my-auto ${styles.rows}`}>
                                    BIMU1051
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-3 my-auto ${styles.rows}`}>
                                    CALCULUS I
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
                                <div className={`col-1 my-auto ${styles.rows}`}>
                                    Z
                                </div>
                            </div>
                            <div className={`${styles.horizontalLine}`}></div>
                            <div className={`row ${styles.row}`}>
                                <div className={`col-3 my-auto ${styles.rows}`}>
                                    BIMU1051
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-3 my-auto ${styles.rows}`}>
                                    CALCULUS I
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
                                <div className={`col-1 my-auto ${styles.rows}`}>
                                    Z
                                </div>
                            </div>
                            <div className={`${styles.horizontalLine}`}></div>
                            <div className={`row ${styles.row}`}>
                                <div className={`col-3 my-auto ${styles.rows}`}>
                                    BIMU1051
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-3 my-auto ${styles.rows}`}>
                                    CALCULUS I
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
                                <div className={`col-1 my-auto ${styles.rows}`}>
                                    Z
                                </div>
                            </div>
                            <div className={`${styles.horizontalLine}`}></div>
                            <div className={`row ${styles.row}`}>
                                <div className={`col-3 my-auto ${styles.rows}`}>
                                    BIMU1051
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-3 my-auto ${styles.rows}`}>
                                    CALCULUS I
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
                                <div className={`col-1 my-auto ${styles.rows}`}>
                                    Z
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
                            $("#donem2").slideToggle(300)
                        }}>
                            1. SINIF / BAHAR DÖNEMİ
                        </div>

                        <div id="donem2">
                            <hr></hr>
                            <div className={`row`} >
                                <div className={`col-3 my-auto ${styles.baslik}`}>
                                    Kod
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-3 my-auto ${styles.baslik}`}>
                                    Ad
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
                                <div className={`col-1 my-auto ${styles.baslik}`}>
                                    Z/S
                                </div>
                            </div>

                            <div className={`${styles.horizontalLine2}`}></div>

                            <div className={`row ${styles.row}`}>
                                <div className={`col-3 my-auto ${styles.rows}`}>
                                    BIMU1051
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-3 my-auto ${styles.rows}`}>
                                    CALCULUS I
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
                                <div className={`col-1 my-auto ${styles.rows}`}>
                                    Z
                                </div>
                            </div>
                            <div className={`${styles.horizontalLine}`}></div>
                            <div className={`row ${styles.row}`}>
                                <div className={`col-3 my-auto ${styles.rows}`}>
                                    BIMU1051
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-3 my-auto ${styles.rows}`}>
                                    CALCULUS I
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
                                <div className={`col-1 my-auto ${styles.rows}`}>
                                    Z
                                </div>
                            </div>
                            <div className={`${styles.horizontalLine}`}></div>
                            <div className={`row ${styles.row}`}>
                                <div className={`col-3 my-auto ${styles.rows}`}>
                                    BIMU1051
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-3 my-auto ${styles.rows}`}>
                                    CALCULUS I
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
                                <div className={`col-1 my-auto ${styles.rows}`}>
                                    Z
                                </div>
                            </div>
                            <div className={`${styles.horizontalLine}`}></div>
                            <div className={`row ${styles.row}`}>
                                <div className={`col-3 my-auto ${styles.rows}`}>
                                    BIMU1051
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-3 my-auto ${styles.rows}`}>
                                    CALCULUS I
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
                                <div className={`col-1 my-auto ${styles.rows}`}>
                                    Z
                                </div>
                            </div>
                            <div className={`${styles.horizontalLine}`}></div>
                            <div className={`row ${styles.row}`}>
                                <div className={`col-3 my-auto ${styles.rows}`}>
                                    BIMU1051
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-3 my-auto ${styles.rows}`}>
                                    CALCULUS I
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
                                <div className={`col-1 my-auto ${styles.rows}`}>
                                    Z
                                </div>
                            </div>
                            <div className={`${styles.horizontalLine}`}></div>
                            <div className={`row ${styles.row}`}>
                                <div className={`col-3 my-auto ${styles.rows}`}>
                                    BIMU1051
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-3 my-auto ${styles.rows}`}>
                                    CALCULUS I
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
                                <div className={`col-1 my-auto ${styles.rows}`}>
                                    Z
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
                            $("#donem3").slideToggle(300)
                        }}>
                            2. SINIF / GÜZ DÖNEMİ
                        </div>

                        <div id="donem3">
                            <hr></hr>
                            <div className={`row`} >
                                <div className={`col-3 my-auto ${styles.baslik}`}>
                                    Kod
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-3 my-auto ${styles.baslik}`}>
                                    Ad
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
                                <div className={`col-1 my-auto ${styles.baslik}`}>
                                    Z/S
                                </div>
                            </div>

                            <div className={`${styles.horizontalLine2}`}></div>

                            <div className={`row ${styles.row}`}>
                                <div className={`col-3 my-auto ${styles.rows}`}>
                                    BIMU1051
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-3 my-auto ${styles.rows}`}>
                                    CALCULUS I
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
                                <div className={`col-1 my-auto ${styles.rows}`}>
                                    Z
                                </div>
                            </div>
                            <div className={`${styles.horizontalLine}`}></div>
                            <div className={`row ${styles.row}`}>
                                <div className={`col-3 my-auto ${styles.rows}`}>
                                    BIMU1051
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-3 my-auto ${styles.rows}`}>
                                    CALCULUS I
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
                                <div className={`col-1 my-auto ${styles.rows}`}>
                                    Z
                                </div>
                            </div>
                            <div className={`${styles.horizontalLine}`}></div>
                            <div className={`row ${styles.row}`}>
                                <div className={`col-3 my-auto ${styles.rows}`}>
                                    BIMU1051
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-3 my-auto ${styles.rows}`}>
                                    CALCULUS I
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
                                <div className={`col-1 my-auto ${styles.rows}`}>
                                    Z
                                </div>
                            </div>
                            <div className={`${styles.horizontalLine}`}></div>
                            <div className={`row ${styles.row}`}>
                                <div className={`col-3 my-auto ${styles.rows}`}>
                                    BIMU1051
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-3 my-auto ${styles.rows}`}>
                                    CALCULUS I
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
                                <div className={`col-1 my-auto ${styles.rows}`}>
                                    Z
                                </div>
                            </div>
                            <div className={`${styles.horizontalLine}`}></div>
                            <div className={`row ${styles.row}`}>
                                <div className={`col-3 my-auto ${styles.rows}`}>
                                    BIMU1051
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-3 my-auto ${styles.rows}`}>
                                    CALCULUS I
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
                                <div className={`col-1 my-auto ${styles.rows}`}>
                                    Z
                                </div>
                            </div>
                            <div className={`${styles.horizontalLine}`}></div>
                            <div className={`row ${styles.row}`}>
                                <div className={`col-3 my-auto ${styles.rows}`}>
                                    BIMU1051
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-3 my-auto ${styles.rows}`}>
                                    CALCULUS I
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
                                <div className={`col-1 my-auto ${styles.rows}`}>
                                    Z
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
                            $("#donem4").slideToggle(300)
                        }}>
                            2. SINIF / BAHAR DÖNEMİ
                        </div>

                        <div id="donem4">
                            <hr></hr>
                            <div className={`row`} >
                                <div className={`col-3 my-auto ${styles.baslik}`}>
                                    Kod
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-3 my-auto ${styles.baslik}`}>
                                    Ad
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
                                <div className={`col-1 my-auto ${styles.baslik}`}>
                                    Z/S
                                </div>
                            </div>

                            <div className={`${styles.horizontalLine2}`}></div>

                            <div className={`row ${styles.row}`}>
                                <div className={`col-3 my-auto ${styles.rows}`}>
                                    BIMU1051
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-3 my-auto ${styles.rows}`}>
                                    CALCULUS I
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
                                <div className={`col-1 my-auto ${styles.rows}`}>
                                    Z
                                </div>
                            </div>
                            <div className={`${styles.horizontalLine}`}></div>
                            <div className={`row ${styles.row}`}>
                                <div className={`col-3 my-auto ${styles.rows}`}>
                                    BIMU1051
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-3 my-auto ${styles.rows}`}>
                                    CALCULUS I
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
                                <div className={`col-1 my-auto ${styles.rows}`}>
                                    Z
                                </div>
                            </div>
                            <div className={`${styles.horizontalLine}`}></div>
                            <div className={`row ${styles.row}`}>
                                <div className={`col-3 my-auto ${styles.rows}`}>
                                    BIMU1051
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-3 my-auto ${styles.rows}`}>
                                    CALCULUS I
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
                                <div className={`col-1 my-auto ${styles.rows}`}>
                                    Z
                                </div>
                            </div>
                            <div className={`${styles.horizontalLine}`}></div>
                            <div className={`row ${styles.row}`}>
                                <div className={`col-3 my-auto ${styles.rows}`}>
                                    BIMU1051
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-3 my-auto ${styles.rows}`}>
                                    CALCULUS I
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
                                <div className={`col-1 my-auto ${styles.rows}`}>
                                    Z
                                </div>
                            </div>
                            <div className={`${styles.horizontalLine}`}></div>
                            <div className={`row ${styles.row}`}>
                                <div className={`col-3 my-auto ${styles.rows}`}>
                                    BIMU1051
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-3 my-auto ${styles.rows}`}>
                                    CALCULUS I
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
                                <div className={`col-1 my-auto ${styles.rows}`}>
                                    Z
                                </div>
                            </div>
                            <div className={`${styles.horizontalLine}`}></div>
                            <div className={`row ${styles.row}`}>
                                <div className={`col-3 my-auto ${styles.rows}`}>
                                    BIMU1051
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-3 my-auto ${styles.rows}`}>
                                    CALCULUS I
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
                                <div className={`col-1 my-auto ${styles.rows}`}>
                                    Z
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
                            $("#donem5").slideToggle(300)
                        }}>
                            3. SINIF / GÜZ DÖNEMİ
                        </div>

                        <div id="donem5">
                            <hr></hr>
                            <div className={`row`} >
                                <div className={`col-3 my-auto ${styles.baslik}`}>
                                    Kod
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-3 my-auto ${styles.baslik}`}>
                                    Ad
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
                                <div className={`col-1 my-auto ${styles.baslik}`}>
                                    Z/S
                                </div>
                            </div>

                            <div className={`${styles.horizontalLine2}`}></div>

                            <div className={`row ${styles.row}`}>
                                <div className={`col-3 my-auto ${styles.rows}`}>
                                    BIMU1051
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-3 my-auto ${styles.rows}`}>
                                    CALCULUS I
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
                                <div className={`col-1 my-auto ${styles.rows}`}>
                                    Z
                                </div>
                            </div>
                            <div className={`${styles.horizontalLine}`}></div>
                            <div className={`row ${styles.row}`}>
                                <div className={`col-3 my-auto ${styles.rows}`}>
                                    BIMU1051
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-3 my-auto ${styles.rows}`}>
                                    CALCULUS I
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
                                <div className={`col-1 my-auto ${styles.rows}`}>
                                    Z
                                </div>
                            </div>
                            <div className={`${styles.horizontalLine}`}></div>
                            <div className={`row ${styles.row}`}>
                                <div className={`col-3 my-auto ${styles.rows}`}>
                                    BIMU1051
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-3 my-auto ${styles.rows}`}>
                                    CALCULUS I
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
                                <div className={`col-1 my-auto ${styles.rows}`}>
                                    Z
                                </div>
                            </div>
                            <div className={`${styles.horizontalLine}`}></div>
                            <div className={`row ${styles.row}`}>
                                <div className={`col-3 my-auto ${styles.rows}`}>
                                    BIMU1051
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-3 my-auto ${styles.rows}`}>
                                    CALCULUS I
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
                                <div className={`col-1 my-auto ${styles.rows}`}>
                                    Z
                                </div>
                            </div>
                            <div className={`${styles.horizontalLine}`}></div>
                            <div className={`row ${styles.row}`}>
                                <div className={`col-3 my-auto ${styles.rows}`}>
                                    BIMU1051
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-3 my-auto ${styles.rows}`}>
                                    CALCULUS I
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
                                <div className={`col-1 my-auto ${styles.rows}`}>
                                    Z
                                </div>
                            </div>
                            <div className={`${styles.horizontalLine}`}></div>
                            <div className={`row ${styles.row}`}>
                                <div className={`col-3 my-auto ${styles.rows}`}>
                                    BIMU1051
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-3 my-auto ${styles.rows}`}>
                                    CALCULUS I
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
                                <div className={`col-1 my-auto ${styles.rows}`}>
                                    Z
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
                            $("#donem6").slideToggle(300)
                        }}>
                            3. SINIF / BAHAR DÖNEMİ
                        </div>

                        <div id="donem6">
                            <hr></hr>
                            <div className={`row`} >
                                <div className={`col-3 my-auto ${styles.baslik}`}>
                                    Kod
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-3 my-auto ${styles.baslik}`}>
                                    Ad
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
                                <div className={`col-1 my-auto ${styles.baslik}`}>
                                    Z/S
                                </div>
                            </div>

                            <div className={`${styles.horizontalLine2}`}></div>

                            <div className={`row ${styles.row}`}>
                                <div className={`col-3 my-auto ${styles.rows}`}>
                                    BIMU1051
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-3 my-auto ${styles.rows}`}>
                                    CALCULUS I
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
                                <div className={`col-1 my-auto ${styles.rows}`}>
                                    Z
                                </div>
                            </div>
                            <div className={`${styles.horizontalLine}`}></div>
                            <div className={`row ${styles.row}`}>
                                <div className={`col-3 my-auto ${styles.rows}`}>
                                    BIMU1051
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-3 my-auto ${styles.rows}`}>
                                    CALCULUS I
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
                                <div className={`col-1 my-auto ${styles.rows}`}>
                                    Z
                                </div>
                            </div>
                            <div className={`${styles.horizontalLine}`}></div>
                            <div className={`row ${styles.row}`}>
                                <div className={`col-3 my-auto ${styles.rows}`}>
                                    BIMU1051
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-3 my-auto ${styles.rows}`}>
                                    CALCULUS I
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
                                <div className={`col-1 my-auto ${styles.rows}`}>
                                    Z
                                </div>
                            </div>
                            <div className={`${styles.horizontalLine}`}></div>
                            <div className={`row ${styles.row}`}>
                                <div className={`col-3 my-auto ${styles.rows}`}>
                                    BIMU1051
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-3 my-auto ${styles.rows}`}>
                                    CALCULUS I
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
                                <div className={`col-1 my-auto ${styles.rows}`}>
                                    Z
                                </div>
                            </div>
                            <div className={`${styles.horizontalLine}`}></div>
                            <div className={`row ${styles.row}`}>
                                <div className={`col-3 my-auto ${styles.rows}`}>
                                    BIMU1051
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-3 my-auto ${styles.rows}`}>
                                    CALCULUS I
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
                                <div className={`col-1 my-auto ${styles.rows}`}>
                                    Z
                                </div>
                            </div>
                            <div className={`${styles.horizontalLine}`}></div>
                            <div className={`row ${styles.row}`}>
                                <div className={`col-3 my-auto ${styles.rows}`}>
                                    BIMU1051
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-3 my-auto ${styles.rows}`}>
                                    CALCULUS I
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
                                <div className={`col-1 my-auto ${styles.rows}`}>
                                    Z
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
                            $("#donem7").slideToggle(300);

                        }}>
                            4. SINIF / GÜZ DÖNEMİ
                        </div>

                        <div id="donem7">
                            <hr></hr>
                            <div className={`row`} >
                                <div className={`col-3 my-auto ${styles.baslik}`}>
                                    Kod
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-3 my-auto ${styles.baslik}`}>
                                    Ad
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
                                <div className={`col-1 my-auto ${styles.baslik}`}>
                                    Z/S
                                </div>
                            </div>

                            <div className={`${styles.horizontalLine2}`}></div>

                            <div className={`row ${styles.row}`}>
                                <div className={`col-3 my-auto ${styles.rows}`}>
                                    BIMU1051
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-3 my-auto ${styles.rows}`}>
                                    CALCULUS I
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
                                <div className={`col-1 my-auto ${styles.rows}`}>
                                    Z
                                </div>
                            </div>
                            <div className={`${styles.horizontalLine}`}></div>
                            <div className={`row ${styles.row}`}>
                                <div className={`col-3 my-auto ${styles.rows}`}>
                                    BIMU1051
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-3 my-auto ${styles.rows}`}>
                                    CALCULUS I
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
                                <div className={`col-1 my-auto ${styles.rows}`}>
                                    Z
                                </div>
                            </div>
                            <div className={`${styles.horizontalLine}`}></div>
                            <div className={`row ${styles.row}`}>
                                <div className={`col-3 my-auto ${styles.rows}`}>
                                    BIMU1051
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-3 my-auto ${styles.rows}`}>
                                    CALCULUS I
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
                                <div className={`col-1 my-auto ${styles.rows}`}>
                                    Z
                                </div>
                            </div>
                            <div className={`${styles.horizontalLine}`}></div>
                            <div className={`row ${styles.row}`}>
                                <div className={`col-3 my-auto ${styles.rows}`}>
                                    BIMU1051
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-3 my-auto ${styles.rows}`}>
                                    CALCULUS I
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
                                <div className={`col-1 my-auto ${styles.rows}`}>
                                    Z
                                </div>
                            </div>
                            <div className={`${styles.horizontalLine}`}></div>
                            <div className={`row ${styles.row}`}>
                                <div className={`col-3 my-auto ${styles.rows}`}>
                                    BIMU1051
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-3 my-auto ${styles.rows}`}>
                                    CALCULUS I
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
                                <div className={`col-1 my-auto ${styles.rows}`}>
                                    Z
                                </div>
                            </div>
                            <div className={`${styles.horizontalLine}`}></div>
                            <div className={`row ${styles.row}`}>
                                <div className={`col-3 my-auto ${styles.rows}`}>
                                    BIMU1051
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-3 my-auto ${styles.rows}`}>
                                    CALCULUS I
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
                                <div className={`col-1 my-auto ${styles.rows}`}>
                                    Z
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
                            $("#donem8").slideToggle(300)
                        }}>
                            4. SINIF / BAHAR DÖNEMİ
                        </div>

                        <div id="donem8">
                            <hr></hr>
                            <div className={`row`} >
                                <div className={`col-3 my-auto ${styles.baslik}`}>
                                    Kod
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-3 my-auto ${styles.baslik}`}>
                                    Ad
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
                                <div className={`col-1 my-auto ${styles.baslik}`}>
                                    Z/S
                                </div>
                            </div>

                            <div className={`${styles.horizontalLine2}`}></div>

                            <div className={`row ${styles.row}`}>
                                <div className={`col-3 my-auto ${styles.rows}`}>
                                    BIMU1051
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-3 my-auto ${styles.rows}`}>
                                    CALCULUS I
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
                                <div className={`col-1 my-auto ${styles.rows}`}>
                                    Z
                                </div>
                            </div>
                            <div className={`${styles.horizontalLine}`}></div>
                            <div className={`row ${styles.row}`}>
                                <div className={`col-3 my-auto ${styles.rows}`}>
                                    BIMU1051
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-3 my-auto ${styles.rows}`}>
                                    CALCULUS I
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
                                <div className={`col-1 my-auto ${styles.rows}`}>
                                    Z
                                </div>
                            </div>
                            <div className={`${styles.horizontalLine}`}></div>
                            <div className={`row ${styles.row}`}>
                                <div className={`col-3 my-auto ${styles.rows}`}>
                                    BIMU1051
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-3 my-auto ${styles.rows}`}>
                                    CALCULUS I
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
                                <div className={`col-1 my-auto ${styles.rows}`}>
                                    Z
                                </div>
                            </div>
                            <div className={`${styles.horizontalLine}`}></div>
                            <div className={`row ${styles.row}`}>
                                <div className={`col-3 my-auto ${styles.rows}`}>
                                    BIMU1051
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-3 my-auto ${styles.rows}`}>
                                    CALCULUS I
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
                                <div className={`col-1 my-auto ${styles.rows}`}>
                                    Z
                                </div>
                            </div>
                            <div className={`${styles.horizontalLine}`}></div>
                            <div className={`row ${styles.row}`}>
                                <div className={`col-3 my-auto ${styles.rows}`}>
                                    BIMU1051
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-3 my-auto ${styles.rows}`}>
                                    CALCULUS I
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
                                <div className={`col-1 my-auto ${styles.rows}`}>
                                    Z
                                </div>
                            </div>
                            <div className={`${styles.horizontalLine}`}></div>
                            <div className={`row ${styles.row}`}>
                                <div className={`col-3 my-auto ${styles.rows}`}>
                                    BIMU1051
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-3 my-auto ${styles.rows}`}>
                                    CALCULUS I
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
                                <div className={`col-1 my-auto ${styles.rows}`}>
                                    Z
                                </div>
                            </div>


                        </div>


                    </div>

                </div>
            </Layout>

        </>
    );

}

