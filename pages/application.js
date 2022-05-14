import React, { useState } from "react";
import Layout from "../components/Layout/Layout";
import Head from "next/head";
import styles from "../styles/RequestAndObjection.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal } from "react-bootstrap";
import {
  faExclamationCircle,
  faPlusCircle,
  faExternalLink
} from "@fortawesome/free-solid-svg-icons";
const exclamationElement = (
  <FontAwesomeIcon icon={faExclamationCircle} className={`mx-auto ${styles.exclamationElement}`} />
);
const addElement = (
  <FontAwesomeIcon icon={faPlusCircle} className={`mx-auto ${styles.addElement}`} />
);
const externalElement = (
  <FontAwesomeIcon icon={faExternalLink} className={`mx-auto`} />
);
export default function Application() {
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
          <Modal.Title>Başvuru</Modal.Title>
        </Modal.Header>
        <form>
          <Modal.Body>
            <label htmlFor="tur">Başvuru Türü</label>
            <select
              id="tur"
              className={`form-select ${styles.itirazModal}`}
              required
            >
              <option value="" disabled selected>
                Başvuru türü seçiniz
              </option>
              <option style={{ height: "28px" }} value="lisansÜstü">2021-2022 Lisansüstü Online Başvuru</option>
              <option value="dcdb">2022-2023 Eğitim Öğretim Dönemi Erasmus Staj Ek Çağrı Başvurusu</option>
              <option value="dcdbe">2021-2022 Lisansüstü Online Başvuru</option>
              <option value="dcdb">2022-2023 Eğitim Öğretim Dönemi Erasmus Staj Ek Çağrı Başvurusu</option>
              <option value="dcdbe">2021-2022 Lisansüstü Online Başvuru</option>
              <option value="dcdb">2022-2023 Eğitim Öğretim Dönemi Erasmus Staj Ek Çağrı Başvurusu</option>
              <option value="dcdbe">2021-2022 Lisansüstü Online Başvuru</option>
              <option value="dcdb">2022-2023 Eğitim Öğretim Dönemi Erasmus Staj Ek Çağrı Başvurusu</option>
            </select>

          </Modal.Body>
          <Modal.Footer>
            <button
              id="btn3"
              type="submit"
              className={`button w-100 ${styles.button}`}
            >
              {exclamationElement}
              &nbsp; Başvuruda Bulun
            </button>
          </Modal.Footer>
        </form>
      </Modal>
      <Head>
        <title>Başvuru - İÜC ÖBS</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>

      <Layout
        appBar={{
          links: { "Ana Sayfa": "/", "Başvuru": "/application" },
          title: "Başvuru",
        }}
      >   <div className={`my-auto mb-3 ${styles.talepBtn}`}>
          <button id="btn2" type="submit" className={`${styles.btn2}`} onClick={handleShow}>{addElement}</button>
        </div>
        <div className={`container ${styles.mainContainer}`}>
          <div style={{ textAlign: "center" }}>
            <div className={`row`} style={{ paddingTop: "0.5rem" }}>
              <div className={`col-3 my-auto ${styles.baslik}`}>
                No&nbsp;
              </div>
              <div className={`${styles.mycol} my-auto`}>
                <div className={`${styles.verticalLine}`}></div>
              </div>
              <div className={`col-3 my-auto ${styles.baslik}`}>
                Başvuru Türü
              </div>
              <div className={`${styles.mycol} my-auto`}>
                <div className={`${styles.verticalLine}`}></div>
              </div>
              <div className={`col-3 my-auto ${styles.baslik}`}>
                Başvuru Tarihi
              </div>
              <div className={`${styles.mycol} my-auto`}>
                <div className={`${styles.verticalLine}`}></div>
              </div>
              <div className={`col-2 my-auto ${styles.baslik}`}>
                Belge
              </div>
            </div>

            <div className={`${styles.horizontalLine2}`}></div>

            <div className={`row ${styles.row}`}>
              <div className={`col-3 my-auto ${styles.rows}`}>
                1306180061
              </div>
              <div className={`${styles.mycol} my-auto`}>
                <div className={`${styles.verticalLine}`}></div>
              </div>
              <div className={`col-3 my-auto ${styles.rows}`}>
                2021-2022 Lisansüstü Online Başvuru
              </div>
              <div className={`${styles.mycol} my-auto`}>
                <div className={`${styles.verticalLine}`}></div>
              </div>
              <div className={`col-3 my-auto ${styles.rows}`}>
                12.05.2022
              </div>
              <div className={`${styles.mycol} my-auto`}>
                <div className={`${styles.verticalLine}`}></div>
              </div>
              <div className={`col-2 my-auto ${styles.rows}`}>
                <a href="#">Belge {externalElement}</a>
              </div>
            </div>
            <div className={`${styles.horizontalLine}`}></div>
            <div className={`row ${styles.row}`}>
              <div className={`col-3 my-auto ${styles.rows}`}>
                1306180061
              </div>
              <div className={`${styles.mycol} my-auto`}>
                <div className={`${styles.verticalLine}`}></div>
              </div>
              <div className={`col-3 my-auto ${styles.rows}`}>
                2022-2023 Eğitim Öğretim Dönemi Erasmus Staj Ek Çağrı Başvurusu
              </div>
              <div className={`${styles.mycol} my-auto`}>
                <div className={`${styles.verticalLine}`}></div>
              </div>
              <div className={`col-3 my-auto ${styles.rows}`}>
                12.05.2022
              </div>
              <div className={`${styles.mycol} my-auto`}>
                <div className={`${styles.verticalLine}`}></div>
              </div>
              <div className={`col-2 my-auto ${styles.rows}`}>
                <a href="#">Belge {externalElement}</a>
              </div>
            </div>
            <div className={`${styles.horizontalLine}`}></div>
            <div className={`row ${styles.row}`}>
              <div className={`col-3 my-auto ${styles.rows}`}>
                1306180061
              </div>
              <div className={`${styles.mycol} my-auto`}>
                <div className={`${styles.verticalLine}`}></div>
              </div>
              <div className={`col-3 my-auto ${styles.rows}`}>
                2021-2022 Lisansüstü Online Başvuru
              </div>
              <div className={`${styles.mycol} my-auto`}>
                <div className={`${styles.verticalLine}`}></div>
              </div>
              <div className={`col-3 my-auto ${styles.rows}`}>
                12.05.2022
              </div>
              <div className={`${styles.mycol} my-auto`}>
                <div className={`${styles.verticalLine}`}></div>
              </div>
              <div className={`col-2 my-auto ${styles.rows}`}>
                <a href="#">Belge {externalElement}</a>
              </div>
            </div>
            <div className={`${styles.horizontalLine}`}></div>
            <div className={`row ${styles.row}`}>
              <div className={`col-3 my-auto ${styles.rows}`}>
                1306180061
              </div>
              <div className={`${styles.mycol} my-auto`}>
                <div className={`${styles.verticalLine}`}></div>
              </div>
              <div className={`col-3 my-auto ${styles.rows}`}>
                2022-2023 Eğitim Öğretim Dönemi Erasmus Staj Ek Çağrı Başvurusu
              </div>
              <div className={`${styles.mycol} my-auto`}>
                <div className={`${styles.verticalLine}`}></div>
              </div>
              <div className={`col-3 my-auto ${styles.rows}`}>
                12.05.2022
              </div>
              <div className={`${styles.mycol} my-auto`}>
                <div className={`${styles.verticalLine}`}></div>
              </div>
              <div className={`col-2 my-auto ${styles.rows}`}>
                <a href="#">Belge {externalElement}</a>
              </div>
            </div>
            <div className={`${styles.horizontalLine}`}></div>
            <div className={`row ${styles.row}`}>
              <div className={`col-3 my-auto ${styles.rows}`}>
                1306180061
              </div>
              <div className={`${styles.mycol} my-auto`}>
                <div className={`${styles.verticalLine}`}></div>
              </div>
              <div className={`col-3 my-auto ${styles.rows}`}>
                2022-2023 Eğitim Öğretim Dönemi Erasmus Staj Ek Çağrı Başvurusu
              </div>
              <div className={`${styles.mycol} my-auto`}>
                <div className={`${styles.verticalLine}`}></div>
              </div>
              <div className={`col-3 my-auto ${styles.rows}`}>
                11.05.2022
              </div>
              <div className={`${styles.mycol} my-auto`}>
                <div className={`${styles.verticalLine}`}></div>
              </div>
              <div className={`col-2 my-auto ${styles.rows}`}>
                <a href="#">Belge {externalElement}</a>
              </div>
            </div>
            <div className={`${styles.horizontalLine}`}></div>
            <div className={`row ${styles.row}`}>
              <div className={`col-3 my-auto ${styles.rows}`}>
                1306180061
              </div>
              <div className={`${styles.mycol} my-auto`}>
                <div className={`${styles.verticalLine}`}></div>
              </div>
              <div className={`col-3 my-auto ${styles.rows}`}>
                2021-2022 Lisansüstü Online Başvuru
              </div>
              <div className={`${styles.mycol} my-auto`}>
                <div className={`${styles.verticalLine}`}></div>
              </div>
              <div className={`col-3 my-auto ${styles.rows}`}>
                11.05.2022
              </div>
              <div className={`${styles.mycol} my-auto`}>
                <div className={`${styles.verticalLine}`}></div>
              </div>
              <div className={`col-2 my-auto ${styles.rows}`}>
                <a href="#">Belge {externalElement}</a>
              </div>
            </div>
          </div>
        </div>

      </Layout>

    </>
  );

}

