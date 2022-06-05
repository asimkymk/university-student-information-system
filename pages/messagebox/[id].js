import styles from "../../styles/RequestAndObjection.module.css";
import React, { Component, useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import Head from "next/head";
import SendIcon from "@mui/icons-material/Send";
import { useRouter } from "next/router";
import Link from "next/link";
import Portal from "../loginportal";
import header from "../../connect/app_header.json";
import AppConstant from "../../connect/app_constants";
import { MessageSharp } from "@mui/icons-material";
import axios from "axios";
export default function Message() {
  const router = useRouter();
  const { id } = router.query;
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState([]);
  const [content, setContent] = useState("");

  const handleChange = (event) => {
    setContent(event.target.value);
  };
  const connect = () => {
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
        fetch("http://localhost:3001/messages/" + id, requestOptions)
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
  };
  if (AppConstant.isLogged) {
    connect();

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
          <div
            className={`container ${styles.mainContainer}`}
            style={{ overflow: "hidden" }}
          >
            <h5 style={{ paddingLeft: "1rem", paddingTop: "1rem" }}>
              Özgür Can Turna ile mesajların
            </h5>
            <div className={`${styles.horizontalLine}`}></div>

            <div
              className="m-0"
              style={{
                height: "50vh",
                overflowX: "hidden",
                overflowY: "auto",
                padding: "2rem",
                paddingTop: "0",
              }}
            >
              {message.map((i) => {
                if (i.gonderici == i.ogrenciTc) {
                  return (
                    <>
                      <div className="row" style={{}}>
                        <div className="message-orange">
                          <div className="row">
                            <p className="message-content">{i.mesaj}</p>
                          </div>

                          <div className="row">
                            <div className="message-timestamp-left">
                              {i.tarih}
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                } else {
                  return (
                    <>
                      <div className="row">
                        <div className="message-blue">
                          <div className="row">
                            <p className="message-content">{i.mesaj}</p>
                          </div>

                          <div className="row">
                            <div className="message-timestamp-right">
                              {i.tarih}
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                }
              })}
            </div>

            <div className={`${styles.horizontalLine}`}></div>
            <div className="row p-4 pt-0 pb-2">
              <div className="col p-0">
                <div className="input-group">
                  <div className="input-group-prepend"></div>
                  <textarea
                    className="form-control"
                    aria-label="With textarea"
                    placeholder="Mesajınızı yazın"
                    value={content}
                    onChange={handleChange}
                    style={{ borderRadius: ".5rem" }}
                  ></textarea>
                </div>
              </div>
              <div className={`p-0 mr-2`} style={{ width: "50px" }}>
                <a
                  type="button"
                  className="btn uploadButton "
                  title="Mesaj Gönder"
                  value="Mesaj Gönder"
                  onClick={(e) => {
                    axios
                      .post(
                        "http://localhost:3001/messages/" + id,
                        {
                          mesaj: content,
                        },
                        {
                          headers: {
                            token: AppConstant.token,
                          },
                        }
                      )
                      .then(function (response) {
                        if (response.data.result == true) {
                          setContent("");
                          connect();
                          e.preventDefault();
                        }
                      })
                      .catch(function (error) {
                        console.log(error);
                      });
                  }}
                >
                  <SendIcon className="uploadButton"></SendIcon>
                  <br></br>
                  Yanıtla
                </a>
              </div>
            </div>
          </div>
        </Layout>
      </>
    );
  } else {
    return <Portal></Portal>;
  }
}
