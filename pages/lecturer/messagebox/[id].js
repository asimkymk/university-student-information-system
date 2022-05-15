import styles from "../../../styles/RequestAndObjection.module.css";
import React from "react";
import Layout from "../../../components/Layout/LayoutLecturer";
import Head from "next/head";
import SendIcon from "@mui/icons-material/Send";
import { useRouter } from "next/router";
import Link from "next/link";
export default function Message() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <Head>
        <title>Mesaj Kutusu - İÜC ÖBS</title>
      </Head>
      <Layout
        appBar={{
          links: { "Ana Sayfa": "/lecturer", "Mesaj Kutusu": "/lecturer/messagebox" },
          title: "Mesaj Kutusu",
        }}
      >
        <div
          className={`container ${styles.mainContainer}`}
          style={{ overflow: "hidden" }}
        >
          <h5 style={{ paddingLeft: "1rem", paddingTop: "1rem" }}>Asım Kaymak ile mesajların</h5>
          <div className={`${styles.horizontalLine}`}></div>

          <div className="m-0" style={{ height: "50vh", overflowX: "hidden", overflowY: "auto", padding: "2rem", paddingTop: "0" }}>
            <div className="row">
              <div className="message-blue">
                <div className="row">
                  <p className="message-content">
                    Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Reprehenderit ut quaerat
                    veritatis perferendis? Aperiam veniam iure quae eaque, sed
                    omnis eos assumenda minus excepturi veritatis porro repellat
                    debitis dicta reprehenderit dignissimos cumque adipisci
                    consequatur ipsam. Enim voluptas magni culpa. Cum, minima!
                    Laboriosam inventore ipsam eum nemo fugiat suscipit,
                    perspiciatis iure. e message! Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Doloremque totam quam laborum
                    fugit corporis tempore rem sed culpa provident eius. Labore
                    debitis aspernatur vero tempore. Aperiam sit voluptate iusto
                    magni velit doloremque vel? Obcaecati non nobis perferendis
                    rem quaerat dolor, maiores provident repellat veritatis,
                    ipsum quisquam omnis, unde eius ipsam.
                  </p>
                </div>

                <div className="row">
                  <div className="message-timestamp-right">SMS 13:37</div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="message-orange">
                <div className="row">
                  <p className="message-content">
                    Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Reprehenderit ut quaerat
                    veritatis perferendis? Aperiam veniam iure quae eaque, sed
                    omnis eos assumenda minus excepturi veritatis porro repellat
                    debitis dicta reprehenderit dignissimos cumque adipisci
                    consequatur ipsam. Enim voluptas magni culpa. Cum, minima!
                    Laboriosam inventore ipsam eum nemo fugiat suscipit,
                    perspiciatis iure. e message! Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Doloremque totam quam laborum
                    fugit corporis tempore rem sed culpa provident eius. Labore
                    debitis aspernatur vero tempore. Aperiam sit voluptate iusto
                    magni velit doloremque vel? Obcaecati non nobis perferendis
                    rem quaerat dolor, maiores provident repellat veritatis,
                    ipsum quisquam omnis, unde eius ipsam.
                  </p>
                </div>

                <div className="row">
                  <div className="message-timestamp-left">SMS 13:37</div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="message-blue">
                <div className="row">
                  <p className="message-content">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Rerum, minus.
                  </p>
                </div>

                <div className="row">
                  <div className="message-timestamp-right">SMS 13:37</div>
                </div>
              </div>
            </div>
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
                  style={{ borderRadius: ".5rem" }}
                ></textarea>
              </div>
            </div>
            <div className={`p-0 mr-2`} style={{ width: "50px" }}>
              <Link href="../../lecturer/messagebox/1">
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
        </div>
      </Layout>
    </>
  );
}
