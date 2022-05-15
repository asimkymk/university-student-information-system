import styles from "../styles/RequestAndObjection.module.css";
import React from "react";
import Layout from "../components/Layout/Layout";
import Head from "next/head";
import Image from "next/image";
import SendIcon from "@mui/icons-material/Send";
import Link from "next/link";
export default function GradeCard() {
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
            <div className={`row ${styles.lecturer}`}>
              <div
                className={`my-auto`}
                style={{ marginLeft: "1rem", width: "5rem", padding: "0" }}
              >
                <Image
                  src="https://publons.com/media/thumbs/academic/photos/c4635c71-e215-476d-bf38-03b1996dbf9a.png.200x200_q95_crop_detail_upscale.png"
                  alt="Avatar"
                  layout="raw"
                  width="100"
                  height="100"
                  style={{ borderRadius: "50%", height: "4rem", width: "4rem" }}
                ></Image>
              </div>
              <div className={`col my-auto`}>
                <div className={`row ${styles.innerLecturer}`}>
                  Özgür Can Turna
                </div>
                <div className={`row ${styles.innerTextLecturer}`}>
                  Evet, projede istediğiniz frameworkü kullanabilirsiniz. Proje
                  son teslim tarihi 15.05.2022&apos;dir. Geç teslim kabul
                  edilmeyecektir.
                </div>
              </div>
              <div className={`col-3 my-auto ${styles.innerReplyLecturer}`}>
                <Link href="/messagebox/1">
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

            <div className={`row ${styles.lecturer}`}>
              <div
                className={`my-auto`}
                style={{ marginLeft: "1rem", width: "5rem", padding: "0" }}
              >
                <Image
                  src="https://avesis.iuc.edu.tr/user/image/4335"
                  alt="Avatar"
                  layout="raw"
                  width="100"
                  height="100"
                  style={{ borderRadius: "50%", height: "4rem", width: "4rem" }}
                ></Image>
              </div>
              <div className={`col my-auto`}>
                <div className={`row ${styles.innerLecturer}`}>
                  Rüya Şamlı
                </div>
                <div className={`row ${styles.innerTextLecturer}`}>
                  Vize sınavı 5-12. üniteler arası olacaktır. Kolay gelsin, başarılar.
                </div>
              </div>
              <div className={`col-3 my-auto ${styles.innerReplyLecturer}`}>
                <button
                  type="button"
                  className="btn uploadButton "
                  title="Mesaj Gönder"
                  value="Mesaj Gönder"
                >
                  <SendIcon className="uploadButton"></SendIcon>
                  <br></br>
                  Yanıtla
                </button>
              </div>
            </div>
            <div className={`${styles.horizontalLine3}`}></div>

            <div className={`row ${styles.lecturer}`}>
              <div
                className={`my-auto`}
                style={{ marginLeft: "1rem", width: "5rem", padding: "0" }}
              >
                <Image
                  src="https://avesis.iuc.edu.tr/user/image/2168"
                  alt="Avatar"
                  layout="raw"
                  width="100"
                  height="100"
                  style={{ borderRadius: "50%", height: "4rem", width: "4rem" }}
                ></Image>
              </div>
              <div className={`col my-auto`}>
                <div className={`row ${styles.innerLecturer}`}>
                  Sabri Arık
                </div>
                <div className={`row ${styles.innerTextLecturer}`}>
                  Kaynak kitabınız dokümanlar kısmına eklenmiştir.
                </div>
              </div>
              <div className={`col-3 my-auto ${styles.innerReplyLecturer}`}>
                <button
                  type="button"
                  className="btn uploadButton "
                  title="Mesaj Gönder"
                  value="Mesaj Gönder"
                >
                  <SendIcon className="uploadButton"></SendIcon>
                  <br></br>
                  Yanıtla
                </button>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
