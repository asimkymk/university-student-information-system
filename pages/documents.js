import Head from "next/head";
import React, { Component } from "react";
import Layout from "../components/Layout/Layout";
import $ from "jquery";
import styles from "../styles/RequestAndObjection.module.css";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
class Home extends Component {

    render() {
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
                                        Yükle
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
                                        <button type="button" className="btn" title="Dosya Seç" value="Dosya Seç">
                                            <CloudUploadIcon className="uploadButton"></CloudUploadIcon>
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
                                        <button type="button" className="btn" title="Dosya Seç" value="Dosya Seç">
                                            <CloudUploadIcon className="uploadButton"></CloudUploadIcon>
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
                                        Yükle
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
                                        <button type="button" className="btn" title="Dosya Seç" value="Dosya Seç">
                                            <CloudUploadIcon className="uploadButton"></CloudUploadIcon>
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
                                        <button type="button" className="btn" title="Dosya Seç" value="Dosya Seç">
                                            <CloudUploadIcon className="uploadButton"></CloudUploadIcon>
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
}

export default Home;
