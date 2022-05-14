import styles from "../../styles/RequestAndObjection.module.css";
import React from "react";
import Layout from "../../components/Layout/Layout";
import Head from "next/head";
import Image from "next/image";
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
          links: { "Ana Sayfa": "/", "Mesaj Kutusu": "/messagebox" },
          title: "Mesaj Kutusu",
        }}
      >
        <div
          className={`container ${styles.mainContainer} ${styles.mesajkutusu}`}
        >
          <h5>Özgür Can Turna ile Mesajların</h5>
          <div className={`${styles.horizontalLine}`}></div>
          <div className={styles.mesajlar}>
            <div className="row">
              <div className="message-blue">
                <div className="row">
                  <p className="message-content">
                    This is an awesomsdfsdfsdfd Lorem ipsum dolor sit amet,
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
              <div className="message-orange">
                <div className="row">
                  <p className="message-content">
                    This is an awesomsdfsdfsdfd Lorem ipsum dolor sit amet,
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
              <div className="message-blue">
                <div className="row">
                  <p className="message-content">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Rerum, minus.
                  </p>
                </div>

                <div className="row">
                  <div className="message-timestamp-left">SMS 13:37</div>
                </div>
              </div>
            </div>
          </div>

          <div className={`${styles.horizontalLine}`}></div>
          <div className="row">
            <div className="col-11">
              <div className="input-group">
                <div className="input-group-prepend"></div>
                <textarea
                  className="form-control"
                  aria-label="With textarea"
                  placeholder="Mesajınızı yazın"
                ></textarea>
              </div>
            </div>
            <div className={`col-1 mr-auto`}>
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
        </div>
      </Layout>
    </>
  );
}
