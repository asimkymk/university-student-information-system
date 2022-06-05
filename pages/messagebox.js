import styles from "../styles/RequestAndObjection.module.css";
import React, { Component, useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import Head from "next/head";
import Image from "next/image";
import SendIcon from "@mui/icons-material/Send";
import Link from "next/link";
import Portal from "./loginportal";
import header from "../connect/app_header.json";
import AppConstant from "../connect/app_constants";
export default function GradeCard() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState([]);
  if (AppConstant.isLogged) {
    const requestOptions = {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Accept: "application/json",
        token: AppConstant.token,
      },
    };
    useEffect(() => {
      const fetchData = () => {
        fetch("http://localhost:3001/messages", requestOptions)
          .then((response) => {
            if (response.status >= 200 && response.status < 300) {
              setLoading(false);
              return response.json();
            } else {
              throw new Error("Error: Could not fetch the data");
            }
          })
          .then((posts) => {
            setMessage(posts.data);
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
          <title>Mesaj Kutusu - İÜC ÖBS</title>
        </Head>
        <Layout
          appBar={{
            links: { "Ana Sayfa": "/", "Mesaj Kutusu": "/messagebox" },
            title: "Mesaj Kutusu",
          }}
        >
          <div className={`container ${styles.mainContainer}`}>
            <div style={{ paddingTop: ".5rem", paddingBottom: ".5rem" }}>
              {message.map((i) => {
                return (
                  <>
                    <div className={`row ${styles.lecturer}`}>
                      <div
                        className={`my-auto`}
                        style={{
                          marginLeft: "1rem",
                          width: "5rem",
                          padding: "0",
                        }}
                      >
                        <Image
                          src={i.ogretmenProfilImg}
                          alt="Avatar"
                          layout="raw"
                          width="100"
                          height="100"
                          style={{
                            borderRadius: "50%",
                            height: "4rem",
                            width: "4rem",
                          }}
                        ></Image>
                      </div>
                      <div className={`col my-auto`}>
                        <div className={`row ${styles.innerLecturer}`}>
                          {i.ogretmenAdi}
                        </div>
                        <div className={`row ${styles.innerTextLecturer}`}>
                          {i.mesaj}
                        </div>
                      </div>
                      <div
                        className={`col-3 my-auto ${styles.innerReplyLecturer}`}
                      >
                        <Link href={`/messagebox/${i.ogretmenTc}`}>
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
                  </>
                );
              })}
            </div>
          </div>
        </Layout>
      </>
    );
  } else {
    return <Portal></Portal>;
  }
}
