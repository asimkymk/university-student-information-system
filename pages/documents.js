import Head from "next/head";
import React, { Component } from "react";
import Layout from "../components/Layout/Layout";
import $ from "jquery";
class Home extends Component {

    render() {
        return (
            <>
                <Head>
                    <title>Doküman Paylaşımı - İÜC ÖBS</title>
                </Head>
                <Layout appBar={{ links: { "Ana Sayfa": "/", "Ödev ve Döküman Paylaşımı": "/documents" }, title: "Ödev ve Döküman Paylaşımı" }}>
                    <section className="ftco-section">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-md-6 text-center mb-4">
                                    <h2 className="heading-section">Table #08</h2>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <h3 className="h5 mb-4 text-center">Collapsible Table</h3>
                                    <div className="table-wrap">
                                        <table className="table myaccordion table-hover" id="accordion">
                                            <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>Product Name</th>
                                                    <th>Price</th>
                                                    <th>Quantity</th>
                                                    <th>Total</th>
                                                    <th>&nbsp;</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" >
                                                    <th scope="row">1</th>
                                                    <td>Laptop Technology AS2020</td>
                                                    <td>$200.00</td>
                                                    <td>2</td>
                                                    <td>$400.00</td>
                                                    <td>
                                                        <i className="fa" aria-hidden="true"></i>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td colSpan="6" id="collapseOne" className="collapse show acc" data-parent="#accordion">
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro iste, facere sunt sequi nostrum ipsa, amet doloremque magnam reiciendis tempore sapiente. Necessitatibus recusandae harum nam sit perferendis quia inventore natus.</p>
                                                    </td>
                                                </tr>

                                                <tr data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo" className="" onClick={() => {

                                                    $(this).attr("aria-expanded", "true")
                                                }} >
                                                    <th scope="row">2</th>
                                                    <td>Laptop Technology AS2020</td>
                                                    <td>$200.00</td>
                                                    <td>2</td>
                                                    <td>$400.00</td>
                                                    <td>
                                                        <i className="fa" aria-hidden="false"></i>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td colSpan="6" id="collapseTwo" className="collapse acc" data-parent="#accordion">
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro iste, facere sunt sequi nostrum ipsa, amet doloremque magnam reiciendis tempore sapiente. Necessitatibus recusandae harum nam sit perferendis quia inventore natus.</p>
                                                    </td>
                                                </tr>

                                                <tr data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" className="collapsed">
                                                    <th scope="row">3</th>
                                                    <td>Laptop Technology AS2020</td>
                                                    <td>$200.00</td>
                                                    <td>2</td>
                                                    <td>$400.00</td>
                                                    <td>
                                                        <i className="fa" aria-hidden="false"></i>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td colSpan="6" id="collapseThree" className="collapse acc" data-parent="#accordion">
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro iste, facere sunt sequi nostrum ipsa, amet doloremque magnam reiciendis tempore sapiente. Necessitatibus recusandae harum nam sit perferendis quia inventore natus.</p>
                                                    </td>
                                                </tr>

                                                <tr data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour" className="collapsed">
                                                    <th scope="row">4</th>
                                                    <td>Laptop Technology AS2020</td>
                                                    <td>$200.00</td>
                                                    <td>2</td>
                                                    <td>$400.00</td>
                                                    <td>
                                                        <i className="fa" aria-hidden="false"></i>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td colSpan="6" id="collapseFour" className="collapse acc" data-parent="#accordion">
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro iste, facere sunt sequi nostrum ipsa, amet doloremque magnam reiciendis tempore sapiente. Necessitatibus recusandae harum nam sit perferendis quia inventore natus.</p>
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
