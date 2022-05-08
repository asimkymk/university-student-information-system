import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBook,
    faSuitcase,
    faPen,
    faTools,
    faPencilSquare
} from "@fortawesome/free-solid-svg-icons";
export default function Portal() {
    const studentElement = (
        <FontAwesomeIcon icon={faPencilSquare} className={styles.portalCardIcon} />
    )
    const lecturerElement = (
        <FontAwesomeIcon icon={faSuitcase} className={styles.portalCardIcon} />
    )
    const adminElement = (
        <FontAwesomeIcon icon={faTools} className={styles.portalCardIcon} />
    )
    return (
        <>
            <Head>
                <title>Giriş Portalı - İÜC ÖBS</title>
            </Head>
            <div className="container align-items-center justify-content-center d-flex vh-100">
                <div className="row vw-85 align-items-center justify-content-center px-4">
                    <Link href="/login" passHref>
                        <div className={`col-lg-3 col-md-5 col-sm-12 card ${styles.card} ${styles.portalCard} m-3`}>
                            <div className={`${styles.portalCardInner}`}>
                                {studentElement}
                                <div className={styles.portalCardText}>
                                    <ul className={`p-0`}>
                                        <li className={`${styles.li}`}>Ö</li>
                                        <li className={`${styles.li}`}>ğ</li>
                                        <li className={`${styles.li}`}>r</li>
                                        <li className={`${styles.li}`}>e</li>
                                        <li className={`${styles.li}`}>n</li>
                                        <li className={`${styles.li}`}>c</li>
                                        <li className={`${styles.li}`}>i</li>
                                        <li className={`${styles.li}`}>&nbsp;</li>
                                        <li className={`${styles.li}`}>G</li>
                                        <li className={`${styles.li}`}>i</li>
                                        <li className={`${styles.li}`}>r</li>
                                        <li className={`${styles.li}`}>i</li>
                                        <li className={`${styles.li}`}>ş</li>
                                        <li className={`${styles.li}`}>i</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link href="/login" passHref>
                        <div className={`col-lg-3 col-md-5 col-sm-12 card ${styles.card} ${styles.portalCard} m-3`}>
                            <div className={`${styles.portalCardInner}`}>
                                {lecturerElement}
                                <div className={styles.portalCardText}>
                                    <ul className={`p-0`}>
                                        <li className={`${styles.li}`}>Ö</li>
                                        <li className={`${styles.li}`}>ğ</li>
                                        <li className={`${styles.li}`}>r</li>
                                        <li className={`${styles.li}`}>e</li>
                                        <li className={`${styles.li}`}>t</li>
                                        <li className={`${styles.li}`}>i</li>
                                        <li className={`${styles.li}`}>m</li>
                                        <li className={`${styles.li}`}>&nbsp;</li>
                                        <li className={`${styles.li}`}>G</li>
                                        <li className={`${styles.li}`}>ö</li>
                                        <li className={`${styles.li}`}>r</li>
                                        <li className={`${styles.li}`}>e</li>
                                        <li className={`${styles.li}`}>v</li>
                                        <li className={`${styles.li}`}>l</li>
                                        <li className={`${styles.li}`}>i</li>
                                        <li className={`${styles.li}`}>s</li>
                                        <li className={`${styles.li}`}>i</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link href="/login" passHref>
                        <div className={`col-lg-3 col-md-5 col-sm-12 card ${styles.card} ${styles.portalCard} m-3`}>
                            <div className={`${styles.portalCardInner}`}>
                                {adminElement}
                                <div className={styles.portalCardText}>
                                    <ul className={`p-0`}>
                                        <li className={`${styles.li}`}>Y</li>
                                        <li className={`${styles.li}`}>ö</li>
                                        <li className={`${styles.li}`}>n</li>
                                        <li className={`${styles.li}`}>e</li>
                                        <li className={`${styles.li}`}>t</li>
                                        <li className={`${styles.li}`}>i</li>
                                        <li className={`${styles.li}`}>c</li>
                                        <li className={`${styles.li}`}>i</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div >
        </>
    );
}
