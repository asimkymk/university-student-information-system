//TODO : TABLE TASARIMI

import React, { useState, setShow } from "react";
import Layout from "../components/Layout/Layout";
import Head from "next/head";
import styles from "../styles/RequestAndObjection.module.css";
import Checkbox from "@mui/material/Checkbox";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal } from "react-bootstrap";
const label = { inputProps: { "aria-label": "Checkbox demo" } };
import { Button } from "@mui/material";
const exclamationElement2 = (
  <FontAwesomeIcon
    icon={faCheck}
    className={`mx-auto ${styles.exclamationElement}`}
    style={{ color: "white" }}
  />
);
export default function CoursePickDrop() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        centered
        className={`mx-auto my-auto`}
      >
        <Modal.Header closeButton>
          <Modal.Title>Sınav İtirazı</Modal.Title>
        </Modal.Header>
        <form>
          <Modal.Body>
            <p>
              Ders seçim işlemi onaylandıktan sonra değiştirilemez. Onaylıyor
              musunuz?
            </p>
          </Modal.Body>
          <Modal.Footer>
            <button
              id="btn3"
              type="submit"
              className={`button w-100 ${styles.button}`}
            >
              {exclamationElement2}
              &nbsp; Onayla
            </button>
          </Modal.Footer>
        </form>
      </Modal>
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
                    onClick={handleShow}
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
