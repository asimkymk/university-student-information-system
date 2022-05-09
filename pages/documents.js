import Head from "next/head";
import React, { Component } from "react";
import Layout from "../components/Layout/Layout";
import $ from "jquery";
class Home extends Component {

    render() {
        return (
            <>
                <Head>
                    <title>Ödev ve Doküman - İÜC ÖBS</title>
                </Head>
                <Layout appBar={{ links: { "Ana Sayfa": "/", "Ödev ve Döküman Paylaşımı": "/documents" }, title: "Ödev ve Döküman Paylaşımı" }}>
                    <section className="ftco-section">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-md-6 text-center mb-4">
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="table-wrap">
                                        <table className="table myaccordion table-hover" id="accordion">
                                            <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>Dönem</th>
                                                    <th>Birim Adı</th>
                                                    <th>Ders Adı</th>
                                                    <th>Ders Kodu</th>
                                                    <th>Kredi</th>
                                                    <th>AKTS</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" className="collapsed" onClick={e => {
                                                    if ($("#collapseOne").hasClass("hide")) {
                                                        $(e.currentTarget).attr("aria-expanded", "true")
                                                        $("#collapseOne").attr("class", "collapse show acc")
                                                        $(e.currentTarget).attr("data-toggle", "collapse")
                                                        $(e.currentTarget).attr("class", "")
                                                    }
                                                    else {
                                                        $(e.currentTarget).attr("aria-expanded", "false")
                                                        $("#collapseOne").attr("class", "collapse hide acc")
                                                        $(e.currentTarget).attr("data-toggle", "")
                                                        $(e.currentTarget).attr("class", "collapsed")
                                                    }
                                                }}>
                                                    <th scope="row">1</th>
                                                    <td>Bahar</td>
                                                    <td>BİLGİSAYAR MÜHENDİSLİĞİ, LİSANS PROGRAMI, (ÖRGÜN ÖĞRETİM)</td>
                                                    <td>Computer Networks</td>
                                                    <td>BIMU3031</td>
                                                    <td>4</td>
                                                    <td>6</td>
                                                </tr>
                                                <tr>
                                                    <td colSpan="6" id="collapseOne" className="collapse hide acc" data-parent="#accordion">
                                                        <table>
                                                            <thead>
                                                                <tr>
                                                                    <th>Hafta</th>
                                                                    <th>Konu</th>
                                                                    <th>Doküman Türü</th>
                                                                    <th>Açıklama</th>
                                                                    <th>Doküman Tarihi</th>
                                                                    <th>Ödev Başl.Tar</th>
                                                                    <th>Ödev Bit.Tar</th>
                                                                    <th>Not	Dosya Adı</th>
                                                                    <th>Yükle</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>Bahar</td>
                                                                    <td>Sınav</td>
                                                                    <td>Slayt</td>
                                                                    <td></td>
                                                                    <td>09.05.2022</td>
                                                                    <td>09.05.2022</td>
                                                                    <td>31.05.2022</td>
                                                                    <td></td>
                                                                    <td>Buraya Tıkla</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>

                                                <tr data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" className="collapsed" onClick={e => {
                                                    if ($("#collapseTwo").hasClass("hide")) {
                                                        $(e.currentTarget).attr("aria-expanded", "true")
                                                        $("#collapseTwo").attr("class", "collapse show acc")
                                                        $(e.currentTarget).attr("data-toggle", "collapse")
                                                        $(e.currentTarget).attr("class", "")
                                                    }
                                                    else {
                                                        $(e.currentTarget).attr("aria-expanded", "false")
                                                        $("#collapseTwo").attr("class", "collapse hide acc")
                                                        $(e.currentTarget).attr("data-toggle", "")
                                                        $(e.currentTarget).attr("class", "collapsed")
                                                    }
                                                }}>
                                                    <th scope="row">2</th>
                                                    <td>Bahar</td>
                                                    <td>BİLGİSAYAR MÜHENDİSLİĞİ, LİSANS PROGRAMI, (ÖRGÜN ÖĞRETİM)</td>
                                                    <td>Görüntü İşleme</td>
                                                    <td>BIMU3930</td>
                                                    <td>3</td>
                                                    <td>5</td>
                                                </tr>
                                                <tr>
                                                    <td colSpan="6" id="collapseTwo" className="collapse hide acc" data-parent="#accordion">
                                                        <table>
                                                            <thead>
                                                                <tr>
                                                                    <th>Hafta</th>
                                                                    <th>Konu</th>
                                                                    <th>Doküman Türü</th>
                                                                    <th>Açıklama</th>
                                                                    <th>Doküman Tarihi</th>
                                                                    <th>Ödev Başl.Tar</th>
                                                                    <th>Ödev Bit.Tar</th>
                                                                    <th>Not	Dosya Adı</th>
                                                                    <th>Yükle</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>Bahar</td>
                                                                    <td>Sınav</td>
                                                                    <td>Slayt</td>
                                                                    <td></td>
                                                                    <td>09.05.2022</td>
                                                                    <td>09.05.2022</td>
                                                                    <td>31.05.2022</td>
                                                                    <td></td>
                                                                    <td>Buraya Tıkla</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>

                                                <tr data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" className="collapsed" onClick={e => {
                                                    if ($("#collapseThree").hasClass("hide")) {
                                                        $(e.currentTarget).attr("aria-expanded", "true")
                                                        $("#collapseThree").attr("class", "collapse show acc")
                                                        $(e.currentTarget).attr("data-toggle", "collapse")
                                                        $(e.currentTarget).attr("class", "")
                                                    }
                                                    else {
                                                        $(e.currentTarget).attr("aria-expanded", "false")
                                                        $("#collapseThree").attr("class", "collapse hide acc")
                                                        $(e.currentTarget).attr("data-toggle", "")
                                                        $(e.currentTarget).attr("class", "collapsed")
                                                    }
                                                }}>
                                                    <th scope="row">3</th>
                                                    <td>Bahar</td>
                                                    <td>BİLGİSAYAR MÜHENDİSLİĞİ, LİSANS PROGRAMI, (ÖRGÜN ÖĞRETİM)</td>
                                                    <td>SOFTWARE ENGINEERING</td>
                                                    <td>BIMU3019</td>
                                                    <td>4</td>
                                                    <td>6</td>
                                                </tr>
                                                <tr>
                                                    <td colSpan="6" id="collapseThree" className="collapse hide acc" data-parent="#accordion">
                                                        <table>
                                                            <thead>
                                                                <tr>
                                                                    <th>Hafta</th>
                                                                    <th>Konu</th>
                                                                    <th>Doküman Türü</th>
                                                                    <th>Açıklama</th>
                                                                    <th>Doküman Tarihi</th>
                                                                    <th>Ödev Başl.Tar</th>
                                                                    <th>Ödev Bit.Tar</th>
                                                                    <th>Not	Dosya Adı</th>
                                                                    <th>Yükle</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>Bahar</td>
                                                                    <td>Sınav</td>
                                                                    <td>Slayt</td>
                                                                    <td></td>
                                                                    <td>09.05.2022</td>
                                                                    <td>09.05.2022</td>
                                                                    <td>31.05.2022</td>
                                                                    <td></td>
                                                                    <td>Buraya Tıkla</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>

                                                <tr data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour" className="collapsed" onClick={e => {
                                                    if ($("#collapseFour").hasClass("hide")) {
                                                        $(e.currentTarget).attr("aria-expanded", "true")
                                                        $("#collapseFour").attr("class", "collapse show acc")
                                                        $(e.currentTarget).attr("data-toggle", "collapse")
                                                        $(e.currentTarget).attr("class", "")
                                                    }
                                                    else {
                                                        $(e.currentTarget).attr("aria-expanded", "false")
                                                        $("#collapseFour").attr("class", "collapse hide acc")
                                                        $(e.currentTarget).attr("data-toggle", "")
                                                        $(e.currentTarget).attr("class", "collapsed")
                                                    }
                                                }}>
                                                    <th scope="row">4</th>
                                                    <td>Bahar</td>
                                                    <td>BİLGİSAYAR MÜHENDİSLİĞİ, LİSANS PROGRAMI, (ÖRGÜN ÖĞRETİM)</td>
                                                    <td>BİLGİSAYAR MİMARİSİ</td>
                                                    <td>BIMU3024</td>
                                                    <td>3</td>
                                                    <td>6</td>
                                                </tr>
                                                <tr>
                                                    <td colSpan="6" id="collapseFour" className="collapse hide acc" data-parent="#accordion">
                                                        <table>
                                                            <thead>
                                                                <tr>
                                                                    <th>Hafta</th>
                                                                    <th>Konu</th>
                                                                    <th>Doküman Türü</th>
                                                                    <th>Açıklama</th>
                                                                    <th>Doküman Tarihi</th>
                                                                    <th>Ödev Başl.Tar</th>
                                                                    <th>Ödev Bit.Tar</th>
                                                                    <th>Not	Dosya Adı</th>
                                                                    <th>Yükle</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>Bahar</td>
                                                                    <td>Sınav</td>
                                                                    <td>Slayt</td>
                                                                    <td></td>
                                                                    <td>09.05.2022</td>
                                                                    <td>09.05.2022</td>
                                                                    <td>31.05.2022</td>
                                                                    <td></td>
                                                                    <td>Buraya Tıkla</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </Layout>
            </>
        );
    }
}

export default Home;
