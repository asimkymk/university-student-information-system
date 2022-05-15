import styles from "../../styles/RequestAndObjection.module.css";
import React from "react";
import Layout from "../../components/Layout/LayoutLecturer";
import Head from "next/head";
import Image from "next/image";
import SendIcon from "@mui/icons-material/Send";
import Link from "next/link";
export default function GradeCard() {
    return (
        <>
            <Head>
                <title>Mesaj Kutusu - İÜC ÖBS</title>
            </Head>
            <Layout
                appBar={{
                    links: { "Ana Sayfa": "/lecturer", "Mesaj Kutusu": "/messagebox" },
                    title: "Mesaj Kutusu",
                }}
            >
                <div className={`container ${styles.mainContainer}`}>
                    <div style={{ paddingTop: ".5rem", paddingBottom: ".5rem" }}>
                        <div className={`row ${styles.lecturer}`}>
                            <div
                                className={`my-auto`}
                                style={{ marginLeft: "1rem", width: "5rem", padding: "0" }}
                            >
                                <Image
                                    src="https://i.pinimg.com/originals/7c/c7/a6/7cc7a630624d20f7797cb4c8e93c09c1.png"
                                    alt="Avatar"
                                    layout="raw"
                                    width="100"
                                    height="100"
                                    style={{ borderRadius: "50%", height: "4rem", width: "4rem" }}
                                ></Image>
                            </div>
                            <div className={`col my-auto`}>
                                <div className={`row ${styles.innerLecturer}`}>
                                    Asım KAYMAK
                                </div>
                                <div className={`row ${styles.innerTextLecturer}`}>
                                    Merhaba hocam, yarın laboratuvar olacak mı?
                                </div>
                            </div>
                            <div className={`col-3 my-auto ${styles.innerReplyLecturer}`}>
                                <Link href="../../lecturer/messagebox/1">
                                    <a
                                        type="button"
                                        className="btn uploadButton "
                                        title="Mesaj Gönder"
                                        value="Mesaj Gönder"
                                    >
                                        <SendIcon className="uploadButton"></SendIcon>
                                        <br></br>
                                        Yanıtla
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className={`${styles.horizontalLine3}`}></div>

                        <div className={`row ${styles.lecturer}`}>
                            <div
                                className={`my-auto`}
                                style={{ marginLeft: "1rem", width: "5rem", padding: "0" }}
                            >
                                <Image
                                    src="https://i.pinimg.com/originals/7c/c7/a6/7cc7a630624d20f7797cb4c8e93c09c1.png"
                                    alt="Avatar"
                                    layout="raw"
                                    width="100"
                                    height="100"
                                    style={{ borderRadius: "50%", height: "4rem", width: "4rem" }}
                                ></Image>
                            </div>
                            <div className={`col my-auto`}>
                                <div className={`row ${styles.innerLecturer}`}>
                                    Mert YILMAZ
                                </div>
                                <div className={`row ${styles.innerTextLecturer}`}>
                                    Hocam projede istediğimiz frameworkü kullanabilir miyiz?
                                </div>
                            </div>
                            <div className={`col-3 my-auto ${styles.innerReplyLecturer}`}>
                                <button
                                    type="button"
                                    className="btn uploadButton "
                                    title="Mesaj Gönder"
                                    value="Mesaj Gönder"
                                >
                                    <SendIcon className="uploadButton"></SendIcon>
                                    <br></br>
                                    Yanıtla
                                </button>
                            </div>
                        </div>
                        <div className={`${styles.horizontalLine3}`}></div>

                        <div className={`row ${styles.lecturer}`}>
                            <div
                                className={`my-auto`}
                                style={{ marginLeft: "1rem", width: "5rem", padding: "0" }}
                            >
                                <Image
                                    src="https://i.pinimg.com/originals/7c/c7/a6/7cc7a630624d20f7797cb4c8e93c09c1.png"
                                    alt="Avatar"
                                    layout="raw"
                                    width="100"
                                    height="100"
                                    style={{ borderRadius: "50%", height: "4rem", width: "4rem" }}
                                ></Image>
                            </div>
                            <div className={`col my-auto`}>
                                <div className={`row ${styles.innerLecturer}`}>
                                    Emin Can ÖZGE
                                </div>
                                <div className={`row ${styles.innerTextLecturer}`}>
                                    Ödevi teslim ederken upload kısmında bir sorun oluştuğundan 2 dakika gecikmeli yollayabildim. Bir sorun teşkil eder mi?
                                </div>
                            </div>
                            <div className={`col-3 my-auto ${styles.innerReplyLecturer}`}>
                                <button
                                    type="button"
                                    className="btn uploadButton "
                                    title="Mesaj Gönder"
                                    value="Mesaj Gönder"
                                >
                                    <SendIcon className="uploadButton"></SendIcon>
                                    <br></br>
                                    Yanıtla
                                </button>
                            </div>
                        </div>
                        <div className={`${styles.horizontalLine3}`}></div>

                        <div className={`row ${styles.lecturer}`}>
                            <div
                                className={`my-auto`}
                                style={{ marginLeft: "1rem", width: "5rem", padding: "0" }}
                            >
                                <Image
                                    src="https://i.pinimg.com/originals/7c/c7/a6/7cc7a630624d20f7797cb4c8e93c09c1.png"
                                    alt="Avatar"
                                    layout="raw"
                                    width="100"
                                    height="100"
                                    style={{ borderRadius: "50%", height: "4rem", width: "4rem" }}
                                ></Image>
                            </div>
                            <div className={`col my-auto`}>
                                <div className={`row ${styles.innerLecturer}`}>
                                    Siraç PETMEZÇİLER
                                </div>
                                <div className={`row ${styles.innerTextLecturer}`}>
                                    Hocam hangi saatlerde odanızda olduğunu öğrenebilir miyim?
                                </div>
                            </div>
                            <div className={`col-3 my-auto ${styles.innerReplyLecturer}`}>
                                <button
                                    type="button"
                                    className="btn uploadButton "
                                    title="Mesaj Gönder"
                                    value="Mesaj Gönder"
                                >
                                    <SendIcon className="uploadButton"></SendIcon>
                                    <br></br>
                                    Yanıtla
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}
