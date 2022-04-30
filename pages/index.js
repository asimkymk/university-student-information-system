import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import React, { Component } from "react";
import Layout from "../components/Layout/Layout";
class Home extends Component {
  //TASRIM İÇİN GEÇİCİ ÇÖZÜM
  //NORMALDE AUTHENTICATION İLE ÇÖZÜM ÜRETİLECEK.
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
    return <Layout></Layout>;
  }
}

export default Home;
