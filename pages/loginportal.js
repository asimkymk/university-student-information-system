import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faSuitcase,
  faPen,
  faTools,
  faPencilSquare,
} from "@fortawesome/free-solid-svg-icons";
export default function Portal() {
  const studentElement = (
    <FontAwesomeIcon icon={faPencilSquare} className={styles.portalCardIcon} />
  );
  const lecturerElement = (
    <FontAwesomeIcon icon={faSuitcase} className={styles.portalCardIcon} />
  );
  const adminElement = (
    <FontAwesomeIcon icon={faTools} className={styles.portalCardIcon} />
  );

  return (
    <>
      <Head>
        <title>Giriş Portalı - İÜC ÖBS</title>
      </Head>
      <div className="container align-items-center justify-content-center d-flex vh-100">
        <div className="row vw-85 align-items-center justify-content-center px-4">
          <Link href="/login" passHref>
            <div
              className={`col-lg-5 col-md-5 col-sm-12 card ${styles.card} ${styles.portalCard} m-3`}
            >
              <div className={`${styles.portalCardInner}`}>
                {studentElement}
                <div className={styles.portalCardText}>
                  <span className={`${styles.li}`}>Öğrenci</span>
                </div>
              </div>
            </div>
          </Link>
          <Link href="/lecturer/login" passHref>
            <div
              className={`col-lg-5 col-md-5 col-sm-12 card ${styles.card} ${styles.portalCard} m-3`}
            >
              <div className={`${styles.portalCardInner}`}>
                {lecturerElement}
                <div className={styles.portalCardText}>
                  <ul className={`p-0`}>
                    <span className={`${styles.li}`}>Öğretim Görevlisi</span>
                  </ul>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
