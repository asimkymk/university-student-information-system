import Head from "next/head";
import React from "react";
import Layout from "../../components/Layout/LayoutLecturer";
export default function Home() {
    return (
        <>
            <Head>
                <title>Ana Sayfa - İÜC ÖBS</title>
            </Head>
            <Layout
                appBar={{ links: { "Ana Sayfa": "/lecturer" }, title: "Ana Sayfa" }}
            >
            </Layout>
        </>
    );
}

