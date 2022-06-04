import Head from "next/head";
import React, { Component, useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import $ from "jquery";
import styles from "../styles/RequestAndObjection.module.css";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import AppConstant from "../connect/app_constants";
import Portal from "./loginportal";
export default function Document() {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [document, setDocument] = useState([]);
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
                fetch("http://localhost:3001/documents", requestOptions)
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
                <Head>
                    <title>Ödev ve Doküman - İÜC ÖBS</title>
                </Head>
                <Layout
                    appBar={{
                        links: { "Ana Sayfa": "/", "Ödev ve Doküman": "/documents" },
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
                            {document.map((i) => (
                                <>
                                    <div className={`row ${styles.dersler}`} style={{ background: "rgb(241, 242, 247)" }} onClick={e => {
                                        if ($("#" + i.dersKodu).is(":visible")) {
                                            $(e.currentTarget).css("background", "#F1F2F7");
                                        }
                                        else {
                                            $(e.currentTarget).css("background", "#fff");
                                        }
                                        $("#" + i.dersKodu).slideToggle(300)
                                    }} >
                                        <div className={`col-2 my-auto ${styles.rows}`}>
                                            {i.donem}
                                        </div>
                                        <div className={`${styles.mycol} my-auto`}>
                                            <div className={`${styles.verticalLine}`}></div>
                                        </div>
                                        <div className={`col-3 my-auto ${styles.rows}`}>
                                            {i.birimAdı}
                                        </div>
                                        <div className={`${styles.mycol} my-auto`}>
                                            <div className={`${styles.verticalLine}`}></div>
                                        </div>
                                        <div className={`col-1 my-auto ${styles.rows}`}>
                                            {i.dersAdi}
                                        </div>
                                        <div className={`${styles.mycol} my-auto`}>
                                            <div className={`${styles.verticalLine}`}></div>
                                        </div>
                                        <div className={`col-1 my-auto ${styles.rows}`}>
                                            {i.dersKodu}
                                        </div>
                                        <div className={`${styles.mycol} my-auto`}>
                                            <div className={`${styles.verticalLine}`}></div>
                                        </div>
                                        <div className={`col-2 my-auto ${styles.rows}`}>
                                            {i.toplamKredi}
                                        </div>
                                        <div className={`${styles.mycol} my-auto`}>
                                            <div className={`${styles.verticalLine}`}></div>
                                        </div>
                                        <div className={`col-2 my-auto ${styles.rows}`}>
                                            {i.akts}
                                        </div>
                                    </div>

                                    <div id={i.dersKodu} className={`row ${styles.row} ${styles.info}`} style={{ margin: "1rem", marginRight: "2rem", marginLeft: "2rem", display: "none" }}>
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
                                                Yükle
                                            </div>
                                        </div>
                                        <div className={`${styles.horizontalLine2}`}></div>
                                        {i.belgeler.map((belge) => (
                                            <>
                                                <div className={`row`}>
                                                    <div className={`col-1 my-auto ${styles.rows}`}>
                                                        {belge.hafta}
                                                    </div>
                                                    <div className={`${styles.mycol} my-auto`}>
                                                        <div className={`${styles.verticalLine}`}></div>
                                                    </div>
                                                    <div className={`col-1 my-auto ${styles.rows}`}>
                                                        {belge.konu}
                                                    </div>
                                                    <div className={`${styles.mycol} my-auto`}>
                                                        <div className={`${styles.verticalLine}`}></div>
                                                    </div>
                                                    <div className={`col-1 my-auto ${styles.rows}`}>
                                                        {belge.tur}
                                                    </div>
                                                    <div className={`${styles.mycol} my-auto`}>
                                                        <div className={`${styles.verticalLine}`}></div>
                                                    </div>
                                                    <div className={`col-2 my-auto ${styles.rows}`}>
                                                        {belge.aciklama}
                                                    </div>
                                                    <div className={`${styles.mycol} my-auto`}>
                                                        <div className={`${styles.verticalLine}`}></div>
                                                    </div>
                                                    <div className={`col-1 my-auto ${styles.rows}`}>
                                                        {belge.dokumanTarih}
                                                    </div>
                                                    <div className={`${styles.mycol} my-auto`}>
                                                        <div className={`${styles.verticalLine}`}></div>
                                                    </div>
                                                    <div className={`col-1 my-auto ${styles.rows}`}>
                                                        {belge.odevBasTarihi}
                                                    </div>
                                                    <div className={`${styles.mycol} my-auto`}>
                                                        <div className={`${styles.verticalLine}`}></div>
                                                    </div>
                                                    <div className={`col-1 my-auto ${styles.rows}`}>
                                                        {belge.odevBitTarihi}
                                                    </div>
                                                    <div className={`${styles.mycol} my-auto`}>
                                                        <div className={`${styles.verticalLine}`}></div>
                                                    </div>
                                                    <div className={`col-1 my-auto ${styles.rows}`}>
                                                        {belge.not}
                                                    </div>
                                                    <div className={`${styles.mycol} my-auto`}>
                                                        <div className={`${styles.verticalLine}`}></div>
                                                    </div>
                                                    <div className={`col-1 my-auto ${styles.rows}`}>
                                                        {belge.dosyaAdi}
                                                    </div>
                                                    <div className={`${styles.mycol} my-auto`}>
                                                        <div className={`${styles.verticalLine}`}></div>
                                                    </div>
                                                    <div className={`col-1 my-auto ${styles.rows}`}>
                                                        <button type="button" className="btn" title="Dosya Seç" value="Dosya Seç">
                                                            <CloudUploadIcon className="uploadButton"></CloudUploadIcon>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className={`${styles.horizontalLine}`}></div>
                                            </>
                                        ))}
                                    </div>
                                    <div className={`${styles.horizontalLine}`}></div>
                                </>
                            ))}
                        </div>
                    </div>
                </Layout>
            </>
        );
    }
    else {
        return <Portal></Portal>;
    }
}
