//TODO : TABLE TASARIMI

import Layout from "../components/Layout/Layout";
import Head from "next/head";
import styles from "../styles/RequestAndObjection.module.css";
import React, { useState, useEffect } from "react";
import AppConstant from "../connect/app_constants";
import Portal from "./loginportal";

export default function LectureList() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [lectureList, setlectureList] = useState([]);
    if (AppConstant.isLogged) {
        const requestOptions = {
            method: "POST",
            headers: {
                "content-type": "application/json",
                Accept: "application/json",
                token: AppConstant.token,
            },
            body: JSON.stringify({ tcNo: "45262969542" }),
        };
        useEffect(() => {
            const fetchData = () => {
                fetch("http://localhost:3001/lectureList", requestOptions)
                    .then((response) => {
                        if (response.status >= 200 && response.status < 300) {
                            setLoading(false);
                            return response.json();
                        } else {
                            throw new Error("Error: Could not fetch the data");
                        }
                    })
                    .then((posts) => {
                        setlectureList(posts.data);
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
                        {lectureList.map((i) => (
                            <>
                                <div id="1" className={`row ${styles.row}`}>
                                    <div name="derskodu" className={`col-1 my-auto ${styles.rows}`}>
                                        {i.donem}

                                    </div>
                                    <div className={`${styles.mycol} my-auto`}>
                                        <div className={`${styles.verticalLine}`}></div>
                                    </div>
                                    <div name="dersadi" className={`col-3 my-auto ${styles.rows}`}>
                                        {i.dersAdi}
                                    </div>
                                    <div className={`${styles.mycol} my-auto`}>
                                        <div className={`${styles.verticalLine}`}></div>
                                    </div>
                                    <div name="derskodu" className={`col-1 my-auto ${styles.rows}`}>
                                        {i.dersKodu}
                                    </div>
                                    <div className={`${styles.mycol} my-auto`}>
                                        <div className={`${styles.verticalLine}`}></div>
                                    </div>
                                    <div name="dersp" className={`col-1 my-auto ${styles.rows}`}>
                                        {i.p}

                                    </div>
                                    <div className={`${styles.mycol} my-auto`}>
                                        <div className={`${styles.verticalLine}`}></div>
                                    </div>
                                    <div name="derst" className={`col-1 my-auto ${styles.rows}`}>
                                        {i.t}

                                    </div>
                                    <div className={`${styles.mycol} my-auto`}>
                                        <div className={`${styles.verticalLine}`}></div>
                                    </div>
                                    <div name="dersl" className={`col-1 my-auto ${styles.rows}`}>
                                        {i.l}

                                    </div>
                                    <div className={`${styles.mycol} my-auto`}>
                                        <div className={`${styles.verticalLine}`}></div>
                                    </div>
                                    <div name="toplamkredi" className={`col-1 my-auto ${styles.rows}`}>
                                        {i.toplamKredi}

                                    </div>
                                    <div className={`${styles.mycol} my-auto`}>
                                        <div className={`${styles.verticalLine}`}></div>
                                    </div>
                                    <div name="dersonay" className={`col-2 my-auto ${styles.rows}`}>
                                        {i.onay}

                                    </div>
                                </div>
                                <div className={`${styles.horizontalLine}`}></div>
                            </>
                        ))
                        }
                    </div>


                </Layout>

            </>
        );


    } else {
        return <Portal></Portal>;
    }

}

