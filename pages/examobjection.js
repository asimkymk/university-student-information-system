//TODO : TABLE TASARIMI

import React, { Component } from "react";
import Layout from "../components/Layout/Layout";
import Head from "next/head";
import styles from "../styles/ExamObjection.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal } from "react-bootstrap";
import {
    faExclamationCircle,
} from "@fortawesome/free-solid-svg-icons";
const exclamationElement = (
    <FontAwesomeIcon icon={faExclamationCircle} className={`mx-auto ${styles.exclamationElement}`} />
);
class ExamObjection extends Component {
    constructor(props, children) {
        super(props);
        this.props = props;
        this.children = children;
        this.router = this.props.router;
    }
    componentDidMount() {
        if (this.props.isLogin == false) {
            this.router.push("/login/");
        }
    }

    render() {
        return (
            <>
                <Head>
                    <title>Sınav İtirazı - İÜC ÖBS</title>
                </Head>
                <Layout
                    appBar={{
                        links: { "Ana Sayfa": "/", "Sınav İtirazı": "/examobjection" },
                        title: "Sınav İtirazı",
                    }}
                >
                    <div className={`container ${styles.mainContainer}`}>
                        <div style={{ textAlign: "center" }}>
                            <div className={`row`} style={{ paddingTop: "0.5rem" }}>
                                <div className={`col-5 my-auto ${styles.baslik}`}>
                                    Ders Adı
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
                                <div className={`col-2 my-auto ${styles.baslik}`}>
                                    Not
                                </div>
                                <div className={`${styles.mycol} my-auto`}>
                                    <div className={`${styles.verticalLine}`}></div>
                                </div>
                                <div className={`col-2 my-auto ${styles.baslik}`}>
                                    İtiraz
                                </div>
                            </div>
                        </div>

                        <div className={`${styles.horizontalLine2}`}></div>
                    </div>
                    <div className={`container ${styles.mainContainer}`} style={{ marginTop: "-4rem" }}>
                        <div className={`row ${styles.row}`}>
                            <div className={`col-5 my-auto ${styles.dersAdi}`}>
                                Bilgisayar Mühendisliğine Giriş
                            </div>
                            <div className={`${styles.mycol} my-auto`}>
                                <div className={`${styles.verticalLine}`}></div>
                            </div>
                            <div className={`col-2 my-auto ${styles.sinavTuru}`}>
                                Vize
                            </div>
                            <div className={`${styles.mycol} my-auto`}>
                                <div className={`${styles.verticalLine}`}></div>
                            </div>
                            <div className={`col-2 my-auto ${styles.sinavNotu}`}>
                                68
                            </div>
                            <div className={`${styles.mycol} my-auto`}>
                                <div className={`${styles.verticalLine}`}></div>
                            </div>
                            <div className={`col-2 my-auto ${styles.itirazBtn}`}>
                                <button className={`${styles.btn}`}>{exclamationElement}</button>
                            </div>
                        </div>
                        <div className={`${styles.horizontalLine}`}></div>
                        <div className={`row ${styles.row}`}>
                            <div className={`col-5 my-auto ${styles.dersAdi}`}>
                                Programming Applications
                            </div>
                            <div className={`${styles.mycol} my-auto`}>
                                <div className={`${styles.verticalLine}`}></div>
                            </div>
                            <div className={`col-2 my-auto ${styles.sinavTuru}`}>
                                Bitirme
                            </div>
                            <div className={`${styles.mycol} my-auto`}>
                                <div className={`${styles.verticalLine}`}></div>
                            </div>
                            <div className={`col-2 my-auto ${styles.sinavNotu}`}>
                                75
                            </div>
                            <div className={`${styles.mycol} my-auto`}>
                                <div className={`${styles.verticalLine}`}></div>
                            </div>
                            <div className={`col-2 my-auto ${styles.itirazBtn}`}>
                                <button className={`${styles.btn}`}>{exclamationElement}</button>
                            </div>
                        </div>
                        <div className={`${styles.horizontalLine}`}></div>
                        <div className={`row ${styles.row}`}>
                            <div className={`col-5 my-auto ${styles.dersAdi}`}>
                                Calculus I
                            </div>
                            <div className={`${styles.mycol} my-auto`}>
                                <div className={`${styles.verticalLine}`}></div>
                            </div>
                            <div className={`col-2 my-auto ${styles.sinavTuru}`}>
                                Vize
                            </div>
                            <div className={`${styles.mycol} my-auto`}>
                                <div className={`${styles.verticalLine}`}></div>
                            </div>
                            <div className={`col-2 my-auto ${styles.sinavNotu}`}>
                                54
                            </div>
                            <div className={`${styles.mycol} my-auto`}>
                                <div className={`${styles.verticalLine}`}></div>
                            </div>
                            <div className={`col-2 my-auto ${styles.itirazBtn}`}>
                                <button className={`${styles.btn}`}>{exclamationElement}</button>
                            </div>
                        </div>
                        <div className={`${styles.horizontalLine}`}></div>
                        <div className={`row ${styles.row}`}>
                            <div className={`col-5 my-auto ${styles.dersAdi}`}>
                                Bilgisayar Mühendisliğine Giriş
                            </div>
                            <div className={`${styles.mycol} my-auto`}>
                                <div className={`${styles.verticalLine}`}></div>
                            </div>
                            <div className={`col-2 my-auto ${styles.sinavTuru}`}>
                                Vize
                            </div>
                            <div className={`${styles.mycol} my-auto`}>
                                <div className={`${styles.verticalLine}`}></div>
                            </div>
                            <div className={`col-2 my-auto ${styles.sinavNotu}`}>
                                68
                            </div>
                            <div className={`${styles.mycol} my-auto`}>
                                <div className={`${styles.verticalLine}`}></div>
                            </div>
                            <div className={`col-2 my-auto ${styles.itirazBtn}`}>
                                <button className={`${styles.btn}`}>{exclamationElement}</button>
                            </div>
                        </div>
                        <div className={`${styles.horizontalLine}`}></div>
                        <div className={`row ${styles.row}`}>
                            <div className={`col-5 my-auto ${styles.dersAdi}`}>
                                Programming Applications
                            </div>
                            <div className={`${styles.mycol} my-auto`}>
                                <div className={`${styles.verticalLine}`}></div>
                            </div>
                            <div className={`col-2 my-auto ${styles.sinavTuru}`}>
                                Bitirme
                            </div>
                            <div className={`${styles.mycol} my-auto`}>
                                <div className={`${styles.verticalLine}`}></div>
                            </div>
                            <div className={`col-2 my-auto ${styles.sinavNotu}`}>
                                75
                            </div>
                            <div className={`${styles.mycol} my-auto`}>
                                <div className={`${styles.verticalLine}`}></div>
                            </div>
                            <div className={`col-2 my-auto ${styles.itirazBtn}`}>
                                <button className={`${styles.btn}`}>{exclamationElement}</button>
                            </div>
                        </div>
                        <div className={`${styles.horizontalLine}`}></div>
                        <div className={`row ${styles.row}`}>
                            <div className={`col-5 my-auto ${styles.dersAdi}`}>
                                Calculus I
                            </div>
                            <div className={`${styles.mycol} my-auto`}>
                                <div className={`${styles.verticalLine}`}></div>
                            </div>
                            <div className={`col-2 my-auto ${styles.sinavTuru}`}>
                                Vize
                            </div>
                            <div className={`${styles.mycol} my-auto`}>
                                <div className={`${styles.verticalLine}`}></div>
                            </div>
                            <div className={`col-2 my-auto ${styles.sinavNotu}`}>
                                54
                            </div>
                            <div className={`${styles.mycol} my-auto`}>
                                <div className={`${styles.verticalLine}`}></div>
                            </div>
                            <div className={`col-2 my-auto ${styles.itirazBtn}`}>
                                <button className={`${styles.btn}`}>{exclamationElement}</button>
                            </div>
                        </div>
                        <div className={`${styles.horizontalLine}`}></div>
                        <div className={`row ${styles.row}`}>
                            <div className={`col-5 my-auto ${styles.dersAdi}`}>
                                Bilgisayar Mühendisliğine Giriş
                            </div>
                            <div className={`${styles.mycol} my-auto`}>
                                <div className={`${styles.verticalLine}`}></div>
                            </div>
                            <div className={`col-2 my-auto ${styles.sinavTuru}`}>
                                Vize
                            </div>
                            <div className={`${styles.mycol} my-auto`}>
                                <div className={`${styles.verticalLine}`}></div>
                            </div>
                            <div className={`col-2 my-auto ${styles.sinavNotu}`}>
                                68
                            </div>
                            <div className={`${styles.mycol} my-auto`}>
                                <div className={`${styles.verticalLine}`}></div>
                            </div>
                            <div className={`col-2 my-auto ${styles.itirazBtn}`}>
                                <button className={`${styles.btn}`}>{exclamationElement}</button>
                            </div>
                        </div>
                        <div className={`${styles.horizontalLine}`}></div>
                        <div className={`row ${styles.row}`}>
                            <div className={`col-5 my-auto ${styles.dersAdi}`}>
                                Programming Applications
                            </div>
                            <div className={`${styles.mycol} my-auto`}>
                                <div className={`${styles.verticalLine}`}></div>
                            </div>
                            <div className={`col-2 my-auto ${styles.sinavTuru}`}>
                                Bitirme
                            </div>
                            <div className={`${styles.mycol} my-auto`}>
                                <div className={`${styles.verticalLine}`}></div>
                            </div>
                            <div className={`col-2 my-auto ${styles.sinavNotu}`}>
                                75
                            </div>
                            <div className={`${styles.mycol} my-auto`}>
                                <div className={`${styles.verticalLine}`}></div>
                            </div>
                            <div className={`col-2 my-auto ${styles.itirazBtn}`}>
                                <button className={`${styles.btn}`}>{exclamationElement}</button>
                            </div>
                        </div>
                        <div className={`${styles.horizontalLine}`}></div>
                        <div className={`row ${styles.row}`}>
                            <div className={`col-5 my-auto ${styles.dersAdi}`}>
                                Calculus I
                            </div>
                            <div className={`${styles.mycol} my-auto`}>
                                <div className={`${styles.verticalLine}`}></div>
                            </div>
                            <div className={`col-2 my-auto ${styles.sinavTuru}`}>
                                Vize
                            </div>
                            <div className={`${styles.mycol} my-auto`}>
                                <div className={`${styles.verticalLine}`}></div>
                            </div>
                            <div className={`col-2 my-auto ${styles.sinavNotu}`}>
                                54
                            </div>
                            <div className={`${styles.mycol} my-auto`}>
                                <div className={`${styles.verticalLine}`}></div>
                            </div>
                            <div className={`col-2 my-auto ${styles.itirazBtn}`}>
                                <button className={`${styles.btn}`}>{exclamationElement}</button>
                            </div>
                        </div>
                        <div className={`${styles.horizontalLine}`}></div>
                        <div className={`row ${styles.row}`}>
                            <div className={`col-5 my-auto ${styles.dersAdi}`}>
                                Bilgisayar Mühendisliğine Giriş
                            </div>
                            <div className={`${styles.mycol} my-auto`}>
                                <div className={`${styles.verticalLine}`}></div>
                            </div>
                            <div className={`col-2 my-auto ${styles.sinavTuru}`}>
                                Vize
                            </div>
                            <div className={`${styles.mycol} my-auto`}>
                                <div className={`${styles.verticalLine}`}></div>
                            </div>
                            <div className={`col-2 my-auto ${styles.sinavNotu}`}>
                                68
                            </div>
                            <div className={`${styles.mycol} my-auto`}>
                                <div className={`${styles.verticalLine}`}></div>
                            </div>
                            <div className={`col-2 my-auto ${styles.itirazBtn}`}>
                                <button className={`${styles.btn}`}>{exclamationElement}</button>
                            </div>
                        </div>
                        <div className={`${styles.horizontalLine}`}></div>
                        <div className={`row ${styles.row}`}>
                            <div className={`col-5 my-auto ${styles.dersAdi}`}>
                                Programming Applications
                            </div>
                            <div className={`${styles.mycol} my-auto`}>
                                <div className={`${styles.verticalLine}`}></div>
                            </div>
                            <div className={`col-2 my-auto ${styles.sinavTuru}`}>
                                Bitirme
                            </div>
                            <div className={`${styles.mycol} my-auto`}>
                                <div className={`${styles.verticalLine}`}></div>
                            </div>
                            <div className={`col-2 my-auto ${styles.sinavNotu}`}>
                                75
                            </div>
                            <div className={`${styles.mycol} my-auto`}>
                                <div className={`${styles.verticalLine}`}></div>
                            </div>
                            <div className={`col-2 my-auto ${styles.itirazBtn}`}>
                                <button className={`${styles.btn}`}>{exclamationElement}</button>
                            </div>
                        </div>
                        <div className={`${styles.horizontalLine}`}></div>
                        <div className={`row ${styles.row}`}>
                            <div className={`col-5 my-auto ${styles.dersAdi}`}>
                                Calculus I
                            </div>
                            <div className={`${styles.mycol} my-auto`}>
                                <div className={`${styles.verticalLine}`}></div>
                            </div>
                            <div className={`col-2 my-auto ${styles.sinavTuru}`}>
                                Vize
                            </div>
                            <div className={`${styles.mycol} my-auto`}>
                                <div className={`${styles.verticalLine}`}></div>
                            </div>
                            <div className={`col-2 my-auto ${styles.sinavNotu}`}>
                                54
                            </div>
                            <div className={`${styles.mycol} my-auto`}>
                                <div className={`${styles.verticalLine}`}></div>
                            </div>
                            <div className={`col-2 my-auto ${styles.itirazBtn}`}>
                                <button className={`${styles.btn}`}>{exclamationElement}</button>
                            </div>
                        </div>
                        <div className={`${styles.horizontalLine}`}></div>
                        <div className={`row ${styles.row}`}>
                            <div className={`col-5 my-auto ${styles.dersAdi}`}>
                                Bilgisayar Mühendisliğine Giriş
                            </div>
                            <div className={`${styles.mycol} my-auto`}>
                                <div className={`${styles.verticalLine}`}></div>
                            </div>
                            <div className={`col-2 my-auto ${styles.sinavTuru}`}>
                                Vize
                            </div>
                            <div className={`${styles.mycol} my-auto`}>
                                <div className={`${styles.verticalLine}`}></div>
                            </div>
                            <div className={`col-2 my-auto ${styles.sinavNotu}`}>
                                68
                            </div>
                            <div className={`${styles.mycol} my-auto`}>
                                <div className={`${styles.verticalLine}`}></div>
                            </div>
                            <div className={`col-2 my-auto ${styles.itirazBtn}`}>
                                <button className={`${styles.btn}`}>{exclamationElement}</button>
                            </div>
                        </div>
                        <div className={`${styles.horizontalLine}`}></div>
                        <div className={`row ${styles.row}`}>
                            <div className={`col-5 my-auto ${styles.dersAdi}`}>
                                Programming Applications
                            </div>
                            <div className={`${styles.mycol} my-auto`}>
                                <div className={`${styles.verticalLine}`}></div>
                            </div>
                            <div className={`col-2 my-auto ${styles.sinavTuru}`}>
                                Bitirme
                            </div>
                            <div className={`${styles.mycol} my-auto`}>
                                <div className={`${styles.verticalLine}`}></div>
                            </div>
                            <div className={`col-2 my-auto ${styles.sinavNotu}`}>
                                75
                            </div>
                            <div className={`${styles.mycol} my-auto`}>
                                <div className={`${styles.verticalLine}`}></div>
                            </div>
                            <div className={`col-2 my-auto ${styles.itirazBtn}`}>
                                <button className={`${styles.btn}`}>{exclamationElement}</button>
                            </div>
                        </div>
                        <div className={`${styles.horizontalLine}`}></div>
                        <div className={`row ${styles.row}`}>
                            <div className={`col-5 my-auto ${styles.dersAdi}`}>
                                Calculus I
                            </div>
                            <div className={`${styles.mycol} my-auto`}>
                                <div className={`${styles.verticalLine}`}></div>
                            </div>
                            <div className={`col-2 my-auto ${styles.sinavTuru}`}>
                                Vize
                            </div>
                            <div className={`${styles.mycol} my-auto`}>
                                <div className={`${styles.verticalLine}`}></div>
                            </div>
                            <div className={`col-2 my-auto ${styles.sinavNotu}`}>
                                54
                            </div>
                            <div className={`${styles.mycol} my-auto`}>
                                <div className={`${styles.verticalLine}`}></div>
                            </div>
                            <div className={`col-2 my-auto ${styles.itirazBtn}`}>
                                <button className={`${styles.btn}`}>{exclamationElement}</button>
                            </div>
                        </div>
                        <div className={`${styles.horizontalLine}`}></div>
                        <div className={`row ${styles.row}`}>
                            <div className={`col-5 my-auto ${styles.dersAdi}`}>
                                Bilgisayar Mühendisliğine Giriş
                            </div>
                            <div className={`${styles.mycol} my-auto`}>
                                <div className={`${styles.verticalLine}`}></div>
                            </div>
                            <div className={`col-2 my-auto ${styles.sinavTuru}`}>
                                Vize
                            </div>
                            <div className={`${styles.mycol} my-auto`}>
                                <div className={`${styles.verticalLine}`}></div>
                            </div>
                            <div className={`col-2 my-auto ${styles.sinavNotu}`}>
                                68
                            </div>
                            <div className={`${styles.mycol} my-auto`}>
                                <div className={`${styles.verticalLine}`}></div>
                            </div>
                            <div className={`col-2 my-auto ${styles.itirazBtn}`}>
                                <button className={`${styles.btn}`}>{exclamationElement}</button>
                            </div>
                        </div>
                        <div className={`${styles.horizontalLine}`}></div>
                        <div className={`row ${styles.row}`}>
                            <div className={`col-5 my-auto ${styles.dersAdi}`}>
                                Programming Applications
                            </div>
                            <div className={`${styles.mycol} my-auto`}>
                                <div className={`${styles.verticalLine}`}></div>
                            </div>
                            <div className={`col-2 my-auto ${styles.sinavTuru}`}>
                                Bitirme
                            </div>
                            <div className={`${styles.mycol} my-auto`}>
                                <div className={`${styles.verticalLine}`}></div>
                            </div>
                            <div className={`col-2 my-auto ${styles.sinavNotu}`}>
                                75
                            </div>
                            <div className={`${styles.mycol} my-auto`}>
                                <div className={`${styles.verticalLine}`}></div>
                            </div>
                            <div className={`col-2 my-auto ${styles.itirazBtn}`}>
                                <button className={`${styles.btn}`}>{exclamationElement}</button>
                            </div>
                        </div>
                        <div className={`${styles.horizontalLine}`}></div>
                        <div className={`row ${styles.row}`}>
                            <div className={`col-5 my-auto ${styles.dersAdi}`}>
                                Calculus I
                            </div>
                            <div className={`${styles.mycol} my-auto`}>
                                <div className={`${styles.verticalLine}`}></div>
                            </div>
                            <div className={`col-2 my-auto ${styles.sinavTuru}`}>
                                Vize
                            </div>
                            <div className={`${styles.mycol} my-auto`}>
                                <div className={`${styles.verticalLine}`}></div>
                            </div>
                            <div className={`col-2 my-auto ${styles.sinavNotu}`}>
                                54
                            </div>
                            <div className={`${styles.mycol} my-auto`}>
                                <div className={`${styles.verticalLine}`}></div>
                            </div>
                            <div className={`col-2 my-auto ${styles.itirazBtn}`}>
                                <button className={`${styles.btn}`}>{exclamationElement}</button>
                            </div>
                        </div>
                        <div className={`${styles.horizontalLine}`}></div>
                        <div className={`row ${styles.row}`}>
                            <div className={`col-5 my-auto ${styles.dersAdi}`}>
                                Bilgisayar Mühendisliğine Giriş
                            </div>
                            <div className={`${styles.mycol} my-auto`}>
                                <div className={`${styles.verticalLine}`}></div>
                            </div>
                            <div className={`col-2 my-auto ${styles.sinavTuru}`}>
                                Vize
                            </div>
                            <div className={`${styles.mycol} my-auto`}>
                                <div className={`${styles.verticalLine}`}></div>
                            </div>
                            <div className={`col-2 my-auto ${styles.sinavNotu}`}>
                                68
                            </div>
                            <div className={`${styles.mycol} my-auto`}>
                                <div className={`${styles.verticalLine}`}></div>
                            </div>
                            <div className={`col-2 my-auto ${styles.itirazBtn}`}>
                                <button className={`${styles.btn}`}>{exclamationElement}</button>
                            </div>
                        </div>
                        <div className={`${styles.horizontalLine}`}></div>
                        <div className={`row ${styles.row}`}>
                            <div className={`col-5 my-auto ${styles.dersAdi}`}>
                                Programming Applications
                            </div>
                            <div className={`${styles.mycol} my-auto`}>
                                <div className={`${styles.verticalLine}`}></div>
                            </div>
                            <div className={`col-2 my-auto ${styles.sinavTuru}`}>
                                Bitirme
                            </div>
                            <div className={`${styles.mycol} my-auto`}>
                                <div className={`${styles.verticalLine}`}></div>
                            </div>
                            <div className={`col-2 my-auto ${styles.sinavNotu}`}>
                                75
                            </div>
                            <div className={`${styles.mycol} my-auto`}>
                                <div className={`${styles.verticalLine}`}></div>
                            </div>
                            <div className={`col-2 my-auto ${styles.itirazBtn}`}>
                                <button className={`${styles.btn}`}>{exclamationElement}</button>
                            </div>
                        </div>
                        <div className={`${styles.horizontalLine}`}></div>
                        <div className={`row ${styles.row}`}>
                            <div className={`col-5 my-auto ${styles.dersAdi}`}>
                                Calculus I
                            </div>
                            <div className={`${styles.mycol} my-auto`}>
                                <div className={`${styles.verticalLine}`}></div>
                            </div>
                            <div className={`col-2 my-auto ${styles.sinavTuru}`}>
                                Vize
                            </div>
                            <div className={`${styles.mycol} my-auto`}>
                                <div className={`${styles.verticalLine}`}></div>
                            </div>
                            <div className={`col-2 my-auto ${styles.sinavNotu}`}>
                                54
                            </div>
                            <div className={`${styles.mycol} my-auto`}>
                                <div className={`${styles.verticalLine}`}></div>
                            </div>
                            <div className={`col-2 my-auto ${styles.itirazBtn}`}>
                                <button className={`${styles.btn}`}>{exclamationElement}</button>
                            </div>
                        </div>
                        <div className={`${styles.horizontalLine}`}></div>
                        <div className={`row ${styles.row}`}>
                            <div className={`col-5 my-auto ${styles.dersAdi}`}>
                                Bilgisayar Mühendisliğine Giriş
                            </div>
                            <div className={`${styles.mycol} my-auto`}>
                                <div className={`${styles.verticalLine}`}></div>
                            </div>
                            <div className={`col-2 my-auto ${styles.sinavTuru}`}>
                                Vize
                            </div>
                            <div className={`${styles.mycol} my-auto`}>
                                <div className={`${styles.verticalLine}`}></div>
                            </div>
                            <div className={`col-2 my-auto ${styles.sinavNotu}`}>
                                68
                            </div>
                            <div className={`${styles.mycol} my-auto`}>
                                <div className={`${styles.verticalLine}`}></div>
                            </div>
                            <div className={`col-2 my-auto ${styles.itirazBtn}`}>
                                <button className={`${styles.btn}`}>{exclamationElement}</button>
                            </div>
                        </div>
                        <div className={`${styles.horizontalLine}`}></div>
                        <div className={`row ${styles.row}`}>
                            <div className={`col-5 my-auto ${styles.dersAdi}`}>
                                Programming Applications
                            </div>
                            <div className={`${styles.mycol} my-auto`}>
                                <div className={`${styles.verticalLine}`}></div>
                            </div>
                            <div className={`col-2 my-auto ${styles.sinavTuru}`}>
                                Bitirme
                            </div>
                            <div className={`${styles.mycol} my-auto`}>
                                <div className={`${styles.verticalLine}`}></div>
                            </div>
                            <div className={`col-2 my-auto ${styles.sinavNotu}`}>
                                75
                            </div>
                            <div className={`${styles.mycol} my-auto`}>
                                <div className={`${styles.verticalLine}`}></div>
                            </div>
                            <div className={`col-2 my-auto ${styles.itirazBtn}`}>
                                <button className={`${styles.btn}`}>{exclamationElement}</button>
                            </div>
                        </div>
                        <div className={`${styles.horizontalLine}`}></div>
                        <div className={`row ${styles.row}`}>
                            <div className={`col-5 my-auto ${styles.dersAdi}`}>
                                Calculus I
                            </div>
                            <div className={`${styles.mycol} my-auto`}>
                                <div className={`${styles.verticalLine}`}></div>
                            </div>
                            <div className={`col-2 my-auto ${styles.sinavTuru}`}>
                                Vize
                            </div>
                            <div className={`${styles.mycol} my-auto`}>
                                <div className={`${styles.verticalLine}`}></div>
                            </div>
                            <div className={`col-2 my-auto ${styles.sinavNotu}`}>
                                54
                            </div>
                            <div className={`${styles.mycol} my-auto`}>
                                <div className={`${styles.verticalLine}`}></div>
                            </div>
                            <div className={`col-2 my-auto ${styles.itirazBtn}`}>
                                <button className={`${styles.btn}`}>{exclamationElement}</button>
                            </div>
                        </div>
                        <div className={`${styles.horizontalLine}`}></div>
                        <div className={`row ${styles.row}`}>
                            <div className={`col-5 my-auto ${styles.dersAdi}`}>
                                Bilgisayar Mühendisliğine Giriş
                            </div>
                            <div className={`${styles.mycol} my-auto`}>
                                <div className={`${styles.verticalLine}`}></div>
                            </div>
                            <div className={`col-2 my-auto ${styles.sinavTuru}`}>
                                Vize
                            </div>
                            <div className={`${styles.mycol} my-auto`}>
                                <div className={`${styles.verticalLine}`}></div>
                            </div>
                            <div className={`col-2 my-auto ${styles.sinavNotu}`}>
                                68
                            </div>
                            <div className={`${styles.mycol} my-auto`}>
                                <div className={`${styles.verticalLine}`}></div>
                            </div>
                            <div className={`col-2 my-auto ${styles.itirazBtn}`}>
                                <button className={`${styles.btn}`}>{exclamationElement}</button>
                            </div>
                        </div>
                        <div className={`${styles.horizontalLine}`}></div>
                        <div className={`row ${styles.row}`}>
                            <div className={`col-5 my-auto ${styles.dersAdi}`}>
                                Programming Applications
                            </div>
                            <div className={`${styles.mycol} my-auto`}>
                                <div className={`${styles.verticalLine}`}></div>
                            </div>
                            <div className={`col-2 my-auto ${styles.sinavTuru}`}>
                                Bitirme
                            </div>
                            <div className={`${styles.mycol} my-auto`}>
                                <div className={`${styles.verticalLine}`}></div>
                            </div>
                            <div className={`col-2 my-auto ${styles.sinavNotu}`}>
                                75
                            </div>
                            <div className={`${styles.mycol} my-auto`}>
                                <div className={`${styles.verticalLine}`}></div>
                            </div>
                            <div className={`col-2 my-auto ${styles.itirazBtn}`}>
                                <button className={`${styles.btn}`}>{exclamationElement}</button>
                            </div>
                        </div>
                        <div className={`${styles.horizontalLine}`}></div>
                        <div className={`row ${styles.row}`}>
                            <div className={`col-5 my-auto ${styles.dersAdi}`}>
                                Calculus I
                            </div>
                            <div className={`${styles.mycol} my-auto`}>
                                <div className={`${styles.verticalLine}`}></div>
                            </div>
                            <div className={`col-2 my-auto ${styles.sinavTuru}`}>
                                Vize
                            </div>
                            <div className={`${styles.mycol} my-auto`}>
                                <div className={`${styles.verticalLine}`}></div>
                            </div>
                            <div className={`col-2 my-auto ${styles.sinavNotu}`}>
                                54
                            </div>
                            <div className={`${styles.mycol} my-auto`}>
                                <div className={`${styles.verticalLine}`}></div>
                            </div>
                            <div className={`col-2 my-auto ${styles.itirazBtn}`}>
                                <button className={`${styles.btn}`}>{exclamationElement}</button>
                            </div>
                        </div>
                        <div className={`${styles.horizontalLine}`}></div>
                        <div className={`row ${styles.row}`}>
                            <div className={`col-5 my-auto ${styles.dersAdi}`}>
                                Bilgisayar Mühendisliğine Giriş
                            </div>
                            <div className={`${styles.mycol} my-auto`}>
                                <div className={`${styles.verticalLine}`}></div>
                            </div>
                            <div className={`col-2 my-auto ${styles.sinavTuru}`}>
                                Vize
                            </div>
                            <div className={`${styles.mycol} my-auto`}>
                                <div className={`${styles.verticalLine}`}></div>
                            </div>
                            <div className={`col-2 my-auto ${styles.sinavNotu}`}>
                                68
                            </div>
                            <div className={`${styles.mycol} my-auto`}>
                                <div className={`${styles.verticalLine}`}></div>
                            </div>
                            <div className={`col-2 my-auto ${styles.itirazBtn}`}>
                                <button className={`${styles.btn}`}>{exclamationElement}</button>
                            </div>
                        </div>
                        <div className={`${styles.horizontalLine}`}></div>
                        <div className={`row ${styles.row}`}>
                            <div className={`col-5 my-auto ${styles.dersAdi}`}>
                                Programming Applications
                            </div>
                            <div className={`${styles.mycol} my-auto`}>
                                <div className={`${styles.verticalLine}`}></div>
                            </div>
                            <div className={`col-2 my-auto ${styles.sinavTuru}`}>
                                Bitirme
                            </div>
                            <div className={`${styles.mycol} my-auto`}>
                                <div className={`${styles.verticalLine}`}></div>
                            </div>
                            <div className={`col-2 my-auto ${styles.sinavNotu}`}>
                                75
                            </div>
                            <div className={`${styles.mycol} my-auto`}>
                                <div className={`${styles.verticalLine}`}></div>
                            </div>
                            <div className={`col-2 my-auto ${styles.itirazBtn}`}>
                                <button className={`${styles.btn}`}>{exclamationElement}</button>
                            </div>
                        </div>
                        <div className={`${styles.horizontalLine}`}></div>
                        <div className={`row ${styles.row}`}>
                            <div className={`col-5 my-auto ${styles.dersAdi}`}>
                                Calculus I
                            </div>
                            <div className={`${styles.mycol} my-auto`}>
                                <div className={`${styles.verticalLine}`}></div>
                            </div>
                            <div className={`col-2 my-auto ${styles.sinavTuru}`}>
                                Vize
                            </div>
                            <div className={`${styles.mycol} my-auto`}>
                                <div className={`${styles.verticalLine}`}></div>
                            </div>
                            <div className={`col-2 my-auto ${styles.sinavNotu}`}>
                                54
                            </div>
                            <div className={`${styles.mycol} my-auto`}>
                                <div className={`${styles.verticalLine}`}></div>
                            </div>
                            <div className={`col-2 my-auto ${styles.itirazBtn}`}>
                                <button className={`${styles.btn}`}>{exclamationElement}</button>
                            </div>
                        </div>
                        <div className={`${styles.horizontalLine}`}></div>
                        <div className={`row ${styles.row}`}>
                            <div className={`col-5 my-auto ${styles.dersAdi}`}>
                                Bilgisayar Mühendisliğine Giriş
                            </div>
                            <div className={`${styles.mycol} my-auto`}>
                                <div className={`${styles.verticalLine}`}></div>
                            </div>
                            <div className={`col-2 my-auto ${styles.sinavTuru}`}>
                                Vize
                            </div>
                            <div className={`${styles.mycol} my-auto`}>
                                <div className={`${styles.verticalLine}`}></div>
                            </div>
                            <div className={`col-2 my-auto ${styles.sinavNotu}`}>
                                68
                            </div>
                            <div className={`${styles.mycol} my-auto`}>
                                <div className={`${styles.verticalLine}`}></div>
                            </div>
                            <div className={`col-2 my-auto ${styles.itirazBtn}`}>
                                <button className={`${styles.btn}`}>{exclamationElement}</button>
                            </div>
                        </div>
                        <div className={`${styles.horizontalLine}`}></div>
                        <div className={`row ${styles.row}`}>
                            <div className={`col-5 my-auto ${styles.dersAdi}`}>
                                Programming Applications
                            </div>
                            <div className={`${styles.mycol} my-auto`}>
                                <div className={`${styles.verticalLine}`}></div>
                            </div>
                            <div className={`col-2 my-auto ${styles.sinavTuru}`}>
                                Bitirme
                            </div>
                            <div className={`${styles.mycol} my-auto`}>
                                <div className={`${styles.verticalLine}`}></div>
                            </div>
                            <div className={`col-2 my-auto ${styles.sinavNotu}`}>
                                75
                            </div>
                            <div className={`${styles.mycol} my-auto`}>
                                <div className={`${styles.verticalLine}`}></div>
                            </div>
                            <div className={`col-2 my-auto ${styles.itirazBtn}`}>
                                <button className={`${styles.btn}`}>{exclamationElement}</button>
                            </div>
                        </div>
                        <div className={`${styles.horizontalLine}`}></div>
                        <div className={`row ${styles.row}`}>
                            <div className={`col-5 my-auto ${styles.dersAdi}`}>
                                Calculus I
                            </div>
                            <div className={`${styles.mycol} my-auto`}>
                                <div className={`${styles.verticalLine}`}></div>
                            </div>
                            <div className={`col-2 my-auto ${styles.sinavTuru}`}>
                                Vize
                            </div>
                            <div className={`${styles.mycol} my-auto`}>
                                <div className={`${styles.verticalLine}`}></div>
                            </div>
                            <div className={`col-2 my-auto ${styles.sinavNotu}`}>
                                54
                            </div>
                            <div className={`${styles.mycol} my-auto`}>
                                <div className={`${styles.verticalLine}`}></div>
                            </div>
                            <div className={`col-2 my-auto ${styles.itirazBtn}`}>
                                <button className={`${styles.btn}`}>{exclamationElement}</button>
                            </div>
                        </div>
                        <div className={`${styles.horizontalLine}`}></div>
                        <div className={`row ${styles.row}`}>
                            <div className={`col-5 my-auto ${styles.dersAdi}`}>
                                Bilgisayar Mühendisliğine Giriş
                            </div>
                            <div className={`${styles.mycol} my-auto`}>
                                <div className={`${styles.verticalLine}`}></div>
                            </div>
                            <div className={`col-2 my-auto ${styles.sinavTuru}`}>
                                Vize
                            </div>
                            <div className={`${styles.mycol} my-auto`}>
                                <div className={`${styles.verticalLine}`}></div>
                            </div>
                            <div className={`col-2 my-auto ${styles.sinavNotu}`}>
                                68
                            </div>
                            <div className={`${styles.mycol} my-auto`}>
                                <div className={`${styles.verticalLine}`}></div>
                            </div>
                            <div className={`col-2 my-auto ${styles.itirazBtn}`}>
                                <button className={`${styles.btn}`}>{exclamationElement}</button>
                            </div>
                        </div>
                        <div className={`${styles.horizontalLine}`}></div>
                        <div className={`row ${styles.row}`}>
                            <div className={`col-5 my-auto ${styles.dersAdi}`}>
                                Programming Applications
                            </div>
                            <div className={`${styles.mycol} my-auto`}>
                                <div className={`${styles.verticalLine}`}></div>
                            </div>
                            <div className={`col-2 my-auto ${styles.sinavTuru}`}>
                                Bitirme
                            </div>
                            <div className={`${styles.mycol} my-auto`}>
                                <div className={`${styles.verticalLine}`}></div>
                            </div>
                            <div className={`col-2 my-auto ${styles.sinavNotu}`}>
                                75
                            </div>
                            <div className={`${styles.mycol} my-auto`}>
                                <div className={`${styles.verticalLine}`}></div>
                            </div>
                            <div className={`col-2 my-auto ${styles.itirazBtn}`}>
                                <button className={`${styles.btn}`}>{exclamationElement}</button>
                            </div>
                        </div>
                        <div className={`${styles.horizontalLine}`}></div>
                        <div className={`row ${styles.row}`}>
                            <div className={`col-5 my-auto ${styles.dersAdi}`}>
                                Calculus I
                            </div>
                            <div className={`${styles.mycol} my-auto`}>
                                <div className={`${styles.verticalLine}`}></div>
                            </div>
                            <div className={`col-2 my-auto ${styles.sinavTuru}`}>
                                Vize
                            </div>
                            <div className={`${styles.mycol} my-auto`}>
                                <div className={`${styles.verticalLine}`}></div>
                            </div>
                            <div className={`col-2 my-auto ${styles.sinavNotu}`}>
                                54
                            </div>
                            <div className={`${styles.mycol} my-auto`}>
                                <div className={`${styles.verticalLine}`}></div>
                            </div>
                            <div className={`col-2 my-auto ${styles.itirazBtn}`}>
                                <button className={`${styles.btn}`}>{exclamationElement}</button>
                            </div>
                        </div>
                        <div className={`${styles.horizontalLine}`}></div>
                        <div className={`row ${styles.row}`}>
                            <div className={`col-5 my-auto ${styles.dersAdi}`}>
                                Bilgisayar Mühendisliğine Giriş
                            </div>
                            <div className={`${styles.mycol} my-auto`}>
                                <div className={`${styles.verticalLine}`}></div>
                            </div>
                            <div className={`col-2 my-auto ${styles.sinavTuru}`}>
                                Vize
                            </div>
                            <div className={`${styles.mycol} my-auto`}>
                                <div className={`${styles.verticalLine}`}></div>
                            </div>
                            <div className={`col-2 my-auto ${styles.sinavNotu}`}>
                                68
                            </div>
                            <div className={`${styles.mycol} my-auto`}>
                                <div className={`${styles.verticalLine}`}></div>
                            </div>
                            <div className={`col-2 my-auto ${styles.itirazBtn}`}>
                                <button className={`${styles.btn}`}>{exclamationElement}</button>
                            </div>
                        </div>
                        <div className={`${styles.horizontalLine}`}></div>
                        <div className={`row ${styles.row}`}>
                            <div className={`col-5 my-auto ${styles.dersAdi}`}>
                                Programming Applications
                            </div>
                            <div className={`${styles.mycol} my-auto`}>
                                <div className={`${styles.verticalLine}`}></div>
                            </div>
                            <div className={`col-2 my-auto ${styles.sinavTuru}`}>
                                Bitirme
                            </div>
                            <div className={`${styles.mycol} my-auto`}>
                                <div className={`${styles.verticalLine}`}></div>
                            </div>
                            <div className={`col-2 my-auto ${styles.sinavNotu}`}>
                                75
                            </div>
                            <div className={`${styles.mycol} my-auto`}>
                                <div className={`${styles.verticalLine}`}></div>
                            </div>
                            <div className={`col-2 my-auto ${styles.itirazBtn}`}>
                                <button className={`${styles.btn}`}>{exclamationElement}</button>
                            </div>
                        </div>
                        <div className={`${styles.horizontalLine}`}></div>
                        <div className={`row ${styles.row}`}>
                            <div className={`col-5 my-auto ${styles.dersAdi}`}>
                                Calculus I
                            </div>
                            <div className={`${styles.mycol} my-auto`}>
                                <div className={`${styles.verticalLine}`}></div>
                            </div>
                            <div className={`col-2 my-auto ${styles.sinavTuru}`}>
                                Vize
                            </div>
                            <div className={`${styles.mycol} my-auto`}>
                                <div className={`${styles.verticalLine}`}></div>
                            </div>
                            <div className={`col-2 my-auto ${styles.sinavNotu}`}>
                                54
                            </div>
                            <div className={`${styles.mycol} my-auto`}>
                                <div className={`${styles.verticalLine}`}></div>
                            </div>
                            <div className={`col-2 my-auto ${styles.itirazBtn}`}>
                                <button className={`${styles.btn}`}>{exclamationElement}</button>
                            </div>
                        </div>
                    </div>
                </Layout>
            </>
        );
    }
}

export default ExamObjection;
