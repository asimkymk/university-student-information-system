import Head from "next/head";
import React, { Component } from "react";
import styles from "../styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Layout from "../components/Layout/Layout";
import Chart from "../components/Chart/Chart";
import Chart2 from "../components/Chart/Chart2";
import {
  faBook,
  faStar,
  faCalendar,
  faPencil,
  faSuitcase,
  faX,
  faChartColumn,
  faHashtag,
} from "@fortawesome/free-solid-svg-icons";
const bookElement = (
  <FontAwesomeIcon icon={faBook} />
);
const starElement = (
  <FontAwesomeIcon icon={faStar} />
);
const classElement = (
  <FontAwesomeIcon icon={faCalendar} />
);
const crossElement = (
  <FontAwesomeIcon icon={faX} />
);
const workElement = (
  <FontAwesomeIcon icon={faSuitcase} />
);
const homeworkElement = (
  <FontAwesomeIcon icon={faPencil} />
);
const chartElement = (
  <FontAwesomeIcon icon={faChartColumn} />
);
const countElement = (
  <FontAwesomeIcon icon={faHashtag} />
);

class Home extends Component {
  //TASRIM İÇİN GEÇİCİ ÇÖZÜM
  //NORMALDE AUTHENTICATION İLE ÇÖZÜM ÜRETİLECEK.
  constructor(props, children) {
    super(props);
    this.props = props;
    this.children = children;
    this.router = this.props.router;
  }

  componentDidMount() {
    if (this.props.isLogin == false) {
      this.router.push("/login/");
    }
  }
  render() {
    return (
      <>
        <Head>
          <title>Ana Sayfa - İÜC ÖBS</title>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" />
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
          <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
          <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"></script>
          <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>
        </Head>
        <Layout
          appBar={{ links: { "Ana Sayfa": "/" }, title: "Ana Sayfa" }}
        >
          <div className={`container ${styles.container}`}>
            <div className="row my-auto m-0 mb-4" >
              <div className={`card my-auto d-block pb-2 w-100 ${styles.card}`} style={{ height: "50vh" }}>
                <div id="carouselIndicators" className="carousel slide" data-ride="carousel">

                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img className="d-block w-100" src="https://cdn.istanbulc.edu.tr/FileHandler.ashx?f=52KKRk-4JUCgfDWU-q3etA&r=huawei-ict-yarismasi-turkiye-2021-2022-5100350032006B004200350036006500700057004C0039007900700046006200610041004F003200370077003200" alt="First slide" />
                      </div>
                    <div className="carousel-item">
                      <img className="d-block w-100" src="https://cdn.istanbulc.edu.tr/FileHandler.ashx?f=680f27EBZUOSDkWzYr6MJw&r=low-code-gelistirme-platformu-appcube-webinar-serisi-16-23-30-mart-1500-1600-65005A004D004C007700300074004B00330071007A0039007900700046006200610041004F003200370077003200" alt="Second slide" />
                        </div>
                    <div className="carousel-item">
                      <img className="d-block w-100" src="https://cdn.istanbulc.edu.tr/FileHandler.ashx?f=-gIBd7IGCESJZkWgT6qkow&r=iuc-bilgisayar-kulubu-back-to-the-future-2021-etkinligi-4A007100760043005600660070006E0037003500480039007900700046006200610041004F003200370077003200" alt="Third slide" />
                      </div>
                  </div>
                  <i className="carousel-control-prev" href="#carouselIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                  </i>
                  <i className="carousel-control-next" href="#carouselIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                  </i>
                  <ol className="carousel-indicators">
                    <li data-target="#carouselIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselIndicators" data-slide-to="2"></li>
                  </ol>
                </div>
              </div>
            </div>
            <div className="row d-flex justify-content-between">
              <div className={`col col-xl-4 col-lg-6 col-md-6 col-sm-12`}>
                <div className={`card ${styles.reddb} ${styles.card}`}>
                  <div className="row ">
                    <div className={`col-2  my-auto mx-auto`}>
                      <div className={`${styles.squareTop} ${styles.blue}`}>
                        <div className={`${styles.icons}`}>
                          {bookElement}
                        </div>
                      </div>
                    </div>
                    <div className={`col-10 mx-auto my-auto ${styles.cardSag}`}>
                      <div className={`card-body`}>
                        <h5 className={`card-title ${styles.cardTitle}`}>Alınan Ders Sayısı</h5>
                        <p className={`card-text ${styles.cardText}`}>6</p>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className={`${styles.horizontalLine}`}></div>
                    <div className={`${styles.info}`}>Geçen yıla göre 1 ders fazla alıyorsun.</div>
                  </div>
                </div>
              </div>
              <div className={`col col-xl-4 col-lg-6 col-md-6 col-sm-12`}>
                <div className={`card ${styles.bluedb} ${styles.card}`}>
                  <div className={`row`}>
                    <div className={`col-2 my-auto mx-auto`}>
                      <div className={`${styles.squareTop} ${styles.red} mx-auto my-auto`}>
                        <div className={`${styles.icons}`}>
                          {starElement}
                        </div>
                      </div>
                    </div>
                    <div className={`col-10 mx-auto my-auto ${styles.cardSag}`}>
                      <div className={`card-body`}>
                        <h5 className={`card-title ${styles.cardTitle}`}>Not Ortalaması</h5>
                        <p className={`card-text ${styles.cardText}`}>3.78</p>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className={`${styles.horizontalLine}`}></div>
                    <div className={`${styles.info}`}>Ortalama geçen yıla göre %40 arttı.</div>
                  </div>

                </div>
              </div>
              <div className={`col col-xl-4 col-lg-6 col-md-6 col-sm-12`}>
                <div className={`card ${styles.greendb} ${styles.card}`}>
                  <div className="row">
                    <div className={`col-2 my-auto mx-auto`}>
                      <div className={`${styles.squareTop} ${styles.green}`}>
                        <div className={`${styles.icons}`}>
                          {classElement}
                        </div>
                      </div>
                    </div>
                    <div className={`col-10 mx-auto my-auto ${styles.cardSag}`}>
                      <div className={`card-body`}>
                        <h5 className={`card-title ${styles.cardTitle}`}>Bulunulan Sınıf</h5>
                        <p className={`card-text ${styles.cardText}`}>3</p>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className={`${styles.horizontalLine}`}></div>
                    <div className={`${styles.info}`}>&nbsp;</div>
                  </div>
                </div>
              </div>
              <div className={`col col-xl-4 col-lg-6 col-md-6 col-sm-12`}>
                <div className={`card ${styles.greendb} ${styles.card}`}>
                  <div className="row">
                    <div className={`col-2 my-auto mx-auto`}>
                      <div className={`${styles.squareTop} ${styles.orange}`}>
                        <div className={`${styles.icons}`}>
                          {crossElement}
                        </div>
                      </div>
                    </div>
                    <div className={`col-10 mx-auto my-auto ${styles.cardSag}`}>
                      <div className={`card-body`}>
                        <h5 className={`card-title ${styles.cardTitle}`}>Kalınan Ders Sayısı</h5>
                        <p className={`card-text ${styles.cardText}`}>2</p>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className={`${styles.horizontalLine}`}></div>
                    <div className={`${styles.info}`}>&nbsp;</div>
                  </div>
                </div>
              </div>

              <div className={`col col-xl-4 col-lg-6 col-md-6 col-sm-12`}>
                <div className={`card ${styles.greendb} ${styles.card}`}>
                  <div className="row">
                    <div className={`col-2 my-auto mx-auto`}>
                      <div className={`${styles.squareTop} ${styles.purple}`}>
                        <div className={`${styles.icons}`}>
                          {workElement}
                        </div>
                      </div>
                    </div>
                    <div className={`col-10 mx-auto my-auto ${styles.cardSag}`}>
                      <div className={`card-body`}>
                        <h5 className={`card-title ${styles.cardTitle}`}>Yapılan Staj Günü</h5>
                        <p className={`card-text ${styles.cardText}`}>50</p>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className={`${styles.horizontalLine}`}></div>
                    <div className={`${styles.info}`}>&nbsp;</div>
                  </div>
                </div>
              </div>

              <div className={`col col-xl-4 col-lg-6 col-md-6 col-sm-12`}>
                <div className={`card ${styles.greendb} ${styles.card}`}>
                  <div className="row">
                    <div className={`col-2 my-auto mx-auto`}>
                      <div className={`${styles.squareTop} ${styles.yellow}`}>
                        <div className={`${styles.icons}`}>
                          {homeworkElement}
                        </div>
                      </div>
                    </div>
                    <div className={`col-10 mx-auto my-auto ${styles.cardSag}`}>
                      <div className={`card-body`}>
                        <h5 className={`card-title ${styles.cardTitle}`}>Bekleyen Ödev Sayısı</h5>
                        <p className={`card-text ${styles.cardText}`}>1</p>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className={`${styles.horizontalLine}`}></div>
                    <div className={`${styles.info}`}>&nbsp;</div>
                  </div>
                </div>
              </div>

            </div>
            <div className={`row d-flex justify-content-between mt-1`}>

              <div className="col col-xl-6 col-lg-6 col-md-12 col-sm-12">
                <div className={`card ${styles.card} ${styles.chartCard}`}>
                  <div className="row">

                    <span className={`${styles.chartText}`}>Fakültelerdeki Öğretim Görevlisi Sayıları</span>
                    <div>
                      <div className={`${styles.squareTopChart} ${styles.gray}`}>
                        <div className={`${styles.icons}`}>
                          {chartElement}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-4" style={{ position: "relative", top: "-75px" }}>
                    <div className={`${styles.chart}`}><Chart></Chart></div>
                  </div>
                </div>
              </div>
              <div className="col col-xl-6 col-lg-6 col-md-12 col-sm-12">
                <div className={`card ${styles.card} ${styles.chartCard}`}>
                  <div className="row">

                    <div className={styles.chartText}>
                      Fakültelerdeki Öğrenci Sayıları
                    </div>
                    <div>
                      <div className={`${styles.squareTopChart} ${styles.brown}`}>
                        <div className={`${styles.icons}`}>
                          {countElement}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-4" style={{ position: "relative", top: "-75px" }}>
                    <div className={`${styles.chart}`}><Chart2></Chart2></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Layout>
      </>
    );
  }
}

export default Home;
