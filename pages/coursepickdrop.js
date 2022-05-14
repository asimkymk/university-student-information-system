//TODO : TABLE TASARIMI

import React from "react";
import Layout from "../components/Layout/Layout";
import Head from "next/head";
import styles from "../styles/RequestAndObjection.module.css";
import Checkbox from "@mui/material/Checkbox";

const label = { inputProps: { "aria-label": "Checkbox demo" } };
import {
  Box,
  Card,
  Container,
  Grid,
  Paper,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Avatar,
  Button,
  Typography,
} from "@mui/material";
export default function LectureList() {
  return (
    <>
      <Head>
        <title>Ders Listesi - İÜC ÖBS</title>
      </Head>

      <Layout
        appBar={{
          links: { "Ana Sayfa": "/", "Ders Listesi": "/lectureList" },
          title: "Ders Listesi",
        }}
      >
        <div className={`container ${styles.mainContainer}`}>
          <div style={{ textAlign: "center" }}>
            <div className={`row`} style={{ paddingTop: "0.5rem" }}>
              <div className={`col-1 my-auto ${styles.baslik}`}>Seçim</div>
              <div className={`${styles.mycol} my-auto`}>
                <div className={`${styles.verticalLine}`}></div>
              </div>
              <div className={`col-1 my-auto ${styles.baslik}`}>Sınıf</div>
              <div className={`${styles.mycol} my-auto`}>
                <div className={`${styles.verticalLine}`}></div>
              </div>
              <div className={`col-2 my-auto ${styles.baslik}`}>Ders Adı</div>
              <div className={`${styles.mycol} my-auto`}>
                <div className={`${styles.verticalLine}`}></div>
              </div>
              <div className={`col-1 my-auto ${styles.baslik}`}>Ders Türü</div>
              <div className={`${styles.mycol} my-auto`}>
                <div className={`${styles.verticalLine}`}></div>
              </div>
              <div className={`col-1 my-auto ${styles.baslik}`}>Ders Kodu</div>
              <div className={`${styles.mycol} my-auto`}>
                <div className={`${styles.verticalLine}`}></div>
              </div>
              <div className={`col-2 my-auto ${styles.baslik}`}>
                Danışman Adı
              </div>
              <div className={`${styles.mycol} my-auto`}>
                <div className={`${styles.verticalLine}`}></div>
              </div>
              <div className={`col-1 my-auto ${styles.baslik}`}>T. Kredi</div>
              <div className={`${styles.mycol} my-auto`}>
                <div className={`${styles.verticalLine}`}></div>
              </div>
              <div className={`col-2 my-auto ${styles.baslik}`}>Ders Onay</div>
            </div>
          </div>

          <div className={`${styles.horizontalLine2}`}></div>

          <div id="1" className={`row ${styles.row}`}>
            <div name="derssecim" className={`col-1 my-auto ${styles.rows}`}>
              <Checkbox {...label} />
            </div>
            <div className={`${styles.mycol} my-auto`}>
              <div className={`${styles.verticalLine}`}></div>
            </div>
            <div name="derssinif" className={`col-1 my-auto ${styles.rows}`}>
              3. Sınıf
            </div>
            <div className={`${styles.mycol} my-auto`}>
              <div className={`${styles.verticalLine}`}></div>
            </div>
            <div name="dersadi" className={`col-2 my-auto ${styles.rows}`}>
              Web Programlama
            </div>
            <div className={`${styles.mycol} my-auto`}>
              <div className={`${styles.verticalLine}`}></div>
            </div>
            <div name="dersturu" className={`col-1 my-auto ${styles.rows}`}>
              Seçmeli
            </div>
            <div className={`${styles.mycol} my-auto`}>
              <div className={`${styles.verticalLine}`}></div>
            </div>
            <div name="derskodu" className={`col-1 my-auto ${styles.rows}`}>
              BIMU3929
            </div>
            <div className={`${styles.mycol} my-auto`}>
              <div className={`${styles.verticalLine}`}></div>
            </div>
            <div name="dersdanisman" className={`col-2 my-auto ${styles.rows}`}>
              Ozgur Can Turna
            </div>
            <div className={`${styles.mycol} my-auto`}>
              <div className={`${styles.verticalLine}`}></div>
            </div>
            <div name="toplamkredi" className={`col-1 my-auto ${styles.rows}`}>
              3
            </div>
            <div className={`${styles.mycol} my-auto`}>
              <div className={`${styles.verticalLine}`}></div>
            </div>
            <div
              name="dersonay"
              className={`col-2 my-auto ${styles.rows}`}
            ></div>
          </div>
          <div className={`${styles.horizontalLine}`}></div>
          <div id="2" className={`row ${styles.row}`}>
            <div name="derssecim" className={`col-1 my-auto ${styles.rows}`}>
              <Checkbox {...label} />
            </div>
            <div className={`${styles.mycol} my-auto`}>
              <div className={`${styles.verticalLine}`}></div>
            </div>
            <div name="derssinif" className={`col-1 my-auto ${styles.rows}`}>
              3. Sınıf
            </div>
            <div className={`${styles.mycol} my-auto`}>
              <div className={`${styles.verticalLine}`}></div>
            </div>
            <div name="dersadi" className={`col-2 my-auto ${styles.rows}`}>
              Web Programlama
            </div>
            <div className={`${styles.mycol} my-auto`}>
              <div className={`${styles.verticalLine}`}></div>
            </div>
            <div name="dersturu" className={`col-1 my-auto ${styles.rows}`}>
              Seçmeli
            </div>
            <div className={`${styles.mycol} my-auto`}>
              <div className={`${styles.verticalLine}`}></div>
            </div>
            <div name="derskodu" className={`col-1 my-auto ${styles.rows}`}>
              BIMU3929
            </div>
            <div className={`${styles.mycol} my-auto`}>
              <div className={`${styles.verticalLine}`}></div>
            </div>
            <div name="dersdanisman" className={`col-2 my-auto ${styles.rows}`}>
              Ozgur Can Turna
            </div>
            <div className={`${styles.mycol} my-auto`}>
              <div className={`${styles.verticalLine}`}></div>
            </div>
            <div name="toplamkredi" className={`col-1 my-auto ${styles.rows}`}>
              3
            </div>
            <div className={`${styles.mycol} my-auto`}>
              <div className={`${styles.verticalLine}`}></div>
            </div>
            <div
              name="dersonay"
              className={`col-2 my-auto ${styles.rows}`}
            ></div>
          </div>
          <div className={`${styles.horizontalLine}`}></div>
          <div id="3" className={`row ${styles.row}`}>
            <div name="derssecim" className={`col-1 my-auto ${styles.rows}`}>
              <Checkbox {...label} />
            </div>
            <div className={`${styles.mycol} my-auto`}>
              <div className={`${styles.verticalLine}`}></div>
            </div>
            <div name="derssinif" className={`col-1 my-auto ${styles.rows}`}>
              3. Sınıf
            </div>
            <div className={`${styles.mycol} my-auto`}>
              <div className={`${styles.verticalLine}`}></div>
            </div>
            <div name="dersadi" className={`col-2 my-auto ${styles.rows}`}>
              Web Programlama
            </div>
            <div className={`${styles.mycol} my-auto`}>
              <div className={`${styles.verticalLine}`}></div>
            </div>
            <div name="dersturu" className={`col-1 my-auto ${styles.rows}`}>
              Seçmeli
            </div>
            <div className={`${styles.mycol} my-auto`}>
              <div className={`${styles.verticalLine}`}></div>
            </div>
            <div name="derskodu" className={`col-1 my-auto ${styles.rows}`}>
              BIMU3929
            </div>
            <div className={`${styles.mycol} my-auto`}>
              <div className={`${styles.verticalLine}`}></div>
            </div>
            <div name="dersdanisman" className={`col-2 my-auto ${styles.rows}`}>
              Ozgur Can Turna
            </div>
            <div className={`${styles.mycol} my-auto`}>
              <div className={`${styles.verticalLine}`}></div>
            </div>
            <div name="toplamkredi" className={`col-1 my-auto ${styles.rows}`}>
              3
            </div>
            <div className={`${styles.mycol} my-auto`}>
              <div className={`${styles.verticalLine}`}></div>
            </div>
            <div
              name="dersonay"
              className={`col-2 my-auto ${styles.rows}`}
            ></div>
          </div>
          <div className={`${styles.horizontalLine}`}></div>
          <div id="4" className={`row ${styles.row}`}>
            <div name="derssecim" className={`col-1 my-auto ${styles.rows}`}>
              <Checkbox {...label} />
            </div>
            <div className={`${styles.mycol} my-auto`}>
              <div className={`${styles.verticalLine}`}></div>
            </div>
            <div name="derssinif" className={`col-1 my-auto ${styles.rows}`}>
              3. Sınıf
            </div>
            <div className={`${styles.mycol} my-auto`}>
              <div className={`${styles.verticalLine}`}></div>
            </div>
            <div name="dersadi" className={`col-2 my-auto ${styles.rows}`}>
              Web Programlama
            </div>
            <div className={`${styles.mycol} my-auto`}>
              <div className={`${styles.verticalLine}`}></div>
            </div>
            <div name="dersturu" className={`col-1 my-auto ${styles.rows}`}>
              Seçmeli
            </div>
            <div className={`${styles.mycol} my-auto`}>
              <div className={`${styles.verticalLine}`}></div>
            </div>
            <div name="derskodu" className={`col-1 my-auto ${styles.rows}`}>
              BIMU3929
            </div>
            <div className={`${styles.mycol} my-auto`}>
              <div className={`${styles.verticalLine}`}></div>
            </div>
            <div name="dersdanisman" className={`col-2 my-auto ${styles.rows}`}>
              Ozgur Can Turna
            </div>
            <div className={`${styles.mycol} my-auto`}>
              <div className={`${styles.verticalLine}`}></div>
            </div>
            <div name="toplamkredi" className={`col-1 my-auto ${styles.rows}`}>
              3
            </div>
            <div className={`${styles.mycol} my-auto`}>
              <div className={`${styles.verticalLine}`}></div>
            </div>
            <div
              name="dersonay"
              className={`col-2 my-auto ${styles.rows}`}
            ></div>
            <hr></hr>

            <div className="row">
              <div className="col-12">
                <div style={{ float: "right" }}>
                  <Button
                    variant="contained"
                    color="primary"
                    className="float-right"
                  >
                    Onayla
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
