/*
TODO

LİNKE TIKLANDIĞINDA AÇILIR MENÜLER BUGA GİRİYOR.
BAKILACAK!

*/

import styles from "../../styles/SideBar.module.css";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Image from "next/image";
import $ from "jquery";
import {
  faBookOpenReader,
  faEnvelope,
  faFolderPlus,
  faMarker,
  faQuestionCircle,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
let profileStatus = false;
let lessonStatus = false;
let requestStatus = false;
class SideBar extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = false;
  }

  _profileLinkListener() {
    if (profileStatus) {
      $("#profileList").slideUp(300, "swing", styles.itemEntered);
    } else {
      $("#profileList").slideDown(300, "swing", styles.itemEntered);
    }
    profileStatus = !profileStatus;
    $("#profileExpandMore").toggleClass(styles.none);
    $("#profileExpandLess").toggleClass(styles.none);
    $("#profileExpandLess").toggleClass(styles.itemExpand);
    $("#profileExpandMore").toggleClass(styles.itemExpand);
  }
  _lessonLinkListener() {
    if (lessonStatus) {
      $("#lessonList").slideUp(300, "swing", styles.itemEntered);
    } else {
      $("#lessonList").slideDown(300, "swing", styles.itemEntered);
    }
    lessonStatus = !lessonStatus;
    $("#lessonExpandMore").toggleClass(styles.none);
    $("#lessonExpandLess").toggleClass(styles.none);
    $("#lessonExpandLess").toggleClass(styles.itemExpand);
    $("#lessonExpandMore").toggleClass(styles.itemExpand);
  }
  _requestLinkListener() {
    if (requestStatus) {
      $("#requestList").slideUp(300, "swing", styles.itemEntered);
    } else {
      $("#requestList").slideDown(300, "swing", styles.itemEntered);
    }
    requestStatus = !requestStatus;
    $("#requestExpandMore").toggleClass(styles.none);
    $("#requestExpandLess").toggleClass(styles.none);
    $("#requestExpandLess").toggleClass(styles.itemExpand);
    $("#requestExpandMore").toggleClass(styles.itemExpand);
  }
  componentDidMount() {
    $(".link").click(function () {
      profileStatus = false;
      lessonStatus = false;
      requestStatus = false;
      console.log("ok");
    });
  }
  render() {
    return (
      <div className={styles.sideBar} id="leftPanel">
        <div className={styles.logoPanel}>
          <div className={styles.logoImage}>
            <a href=".">
              <Image
                width="100%"
                height="100%"
                src="/login/iuclogo.png"
                layout="responsive"
                priority="true"
                alt="logo"
              />
            </a>
          </div>
        </div>
        <h5 style={{ textAlign: "center" }}>Öğrenci Bilgi Sistemi</h5>
        <hr className={styles.seperator}></hr>
        <ul className={styles.linkList}>
          <li className={styles.linkItem} id="profileShow">
            <div
              className={styles.itemPanel}
              onClick={this._profileLinkListener}
            >
              <div className={styles.itemProfile}>
                <div className={styles.circularAvatar}>
                  <Image
                    src="https://demos.creative-tim.com/material-dashboard-2-pro-react-ts/static/media/team-3.0ef0be95e6850814c79e.jpg"
                    className={styles.circularAvatarImage}
                    alt="Avatar"
                    layout="fill"
                  ></Image>
                </div>
              </div>
              <div className={styles.itemBottom}>
                <span
                  className={styles.itemText}
                  style={{ fontWeight: "bolder", fontSize: "11.5pt" }}
                >
                  Asım Kaymak
                </span>
              </div>
              <span className={styles.itemExpand}>
                <ExpandMoreIcon
                  id="profileExpandMore"
                  className={styles.itemExpand}
                />
                <ExpandLessIcon
                  id="profileExpandLess"
                  className={styles.none}
                />
              </span>
            </div>
          </li>
          <div
            id="profileList"
            className={styles.none}
            style={{
              minHeight: "0px",
              height: "auto",
            }}
          >
            <div className={styles.itemEnteredVertical}>
              <div style={{ width: "100%" }}>
                <ul className={styles.innerItem}>
                  <li className={styles.innerItemList}>
                    <Link href="/profile" passHref>
                      <a className="link">
                        <div
                          className={styles.innerItemContainer}
                          id={styles.profilim}
                        >
                          <div className={styles.innerItemTextContainer}>
                            <span className={styles.innerItemText}>
                              Bilgilerim
                            </span>
                          </div>
                        </div>
                      </a>
                    </Link>
                  </li>
                </ul>
                <ul className={styles.innerItem}>
                  <li className={styles.innerItemList}>
                    <Link href="/loginportal" passHref>
                      <a className="link">
                        <div
                          className={styles.innerItemContainer}
                          id={styles.cikis}
                        >
                          <div className={styles.innerItemTextContainer}>
                            <span className={styles.innerItemText}>Çıkış</span>
                          </div>
                        </div>
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className={styles.seperator}></hr>
          <span className={styles.pages}>ÖĞRENCİ BİLGİ SİSTEMİ</span>
          <li className={styles.linkItem}>
            <Link href="/" passHref>
              <a className="link">
                <div className={styles.itemPanel}>
                  <div className={styles.itemProfile}>
                    <FontAwesomeIcon
                      icon={faHome}
                      className={styles.itemIcon}
                    />
                  </div>
                  <div className={styles.itemBottom}>
                    <span className={styles.itemText}>Ana Sayfa</span>
                  </div>
                </div>
              </a>
            </Link>
          </li>
          <hr className={styles.seperator}></hr>
          <span className={styles.pages}>DERS İŞLEMLERİ</span>
          <li className={styles.linkItem} id="lessonShow">
            <div
              className={styles.itemPanel}
              onClick={this._lessonLinkListener}
            >
              <div className={styles.itemProfile}>
                <FontAwesomeIcon
                  icon={faBookOpenReader}
                  className={styles.itemIcon}
                />
              </div>
              <div className={styles.itemBottom}>
                <span className={styles.itemText}>Öğrenim Bilgileri</span>
              </div>
              <span className={styles.itemExpand}>
                <ExpandMoreIcon
                  id="lessonExpandMore"
                  className={styles.itemExpand}
                />
                <ExpandLessIcon id="lessonExpandLess" className={styles.none} />
              </span>
            </div>
          </li>
          <div
            id="lessonList"
            className={styles.none}
            style={{
              minHeight: "0px",
              height: "auto",
            }}
          >
            <div className={styles.itemEnteredVertical}>
              <div style={{ width: "100%" }}>
                <ul className={styles.innerItem}>
                  <li className={styles.innerItemList}>
                    <Link href="/grade" passHref>
                      <a className="link">
                        <div
                          className={styles.innerItemContainer}
                          id={styles.notbilgisi}
                        >
                          <div className={styles.innerItemTextContainer}>
                            <span className={styles.innerItemText}>
                              Not Bilgisi
                            </span>
                          </div>
                        </div>
                      </a>
                    </Link>
                  </li>
                </ul>
                <ul className={styles.innerItem}>
                  <li className={styles.innerItemList}>
                    <Link href="/courseschedule" passHref>
                      <a className="link">
                        <div
                          className={styles.innerItemContainer}
                          id={styles.dersprogrami}
                        >
                          <div className={styles.innerItemTextContainer}>
                            <span className={styles.innerItemText}>
                              Ders Programı
                            </span>
                          </div>
                        </div>
                      </a>
                    </Link>
                  </li>
                </ul>
                <ul className={styles.innerItem}>
                  <li className={styles.innerItemList}>
                    <Link href="/documents" passHref>
                      <a className="link">
                        <div
                          className={styles.innerItemContainer}
                          id={styles.odev}
                        >
                          <div className={styles.innerItemTextContainer}>
                            <span className={styles.innerItemText}>
                              Ödev ve Döküman
                            </span>
                          </div>
                        </div>
                      </a>
                    </Link>
                  </li>
                </ul>
                <ul className={styles.innerItem}>
                  <li className={styles.innerItemList}>
                    <Link href="/gradecard" passHref>
                      <a className="link">
                        <div
                          className={styles.innerItemContainer}
                          id={styles.notkarti}
                        >
                          <div className={styles.innerItemTextContainer}>
                            <span className={styles.innerItemText}>
                              Not Kartı
                            </span>
                          </div>
                        </div>
                      </a>
                    </Link>
                  </li>
                </ul>
                <ul className={styles.innerItem}>
                  <li className={styles.innerItemList}>
                    <Link href="/lectureList" passHref>
                      <a className="link">
                        <div
                          className={styles.innerItemContainer}
                          id={styles.derslistesi}
                        >
                          <div className={styles.innerItemTextContainer}>
                            <span className={styles.innerItemText}>
                              Ders Listesi
                            </span>
                          </div>
                        </div>
                      </a>
                    </Link>
                  </li>
                </ul>
                <ul className={styles.innerItem}>
                  <li className={styles.innerItemList}>
                    <Link href="/syllabusList" passHref>
                      <a className="link">
                        <div
                          className={styles.innerItemContainer}
                          id={styles.mufredat}
                        >
                          <div className={styles.innerItemTextContainer}>
                            <span className={styles.innerItemText}>
                              Müfredat Listesi
                            </span>
                          </div>
                        </div>
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <li className={styles.linkItem}>
            <Link href="/coursepickdrop" passHref>
              <a className="link">
                <div className={styles.itemPanel}>
                  <div className={styles.itemProfile}>
                    <FontAwesomeIcon
                      icon={faFolderPlus}
                      className={styles.itemIcon}
                    />
                  </div>
                  <div className={styles.itemBottom}>
                    <span className={styles.itemText}>Ders Alma ve Kayıt</span>
                  </div>
                </div>
              </a>
            </Link>
          </li>
          <hr className={styles.seperator}></hr>
          <span className={styles.pages}>İNTERAKTİF</span>
          <li className={styles.linkItem} id="requestShow">
            <div
              className={styles.itemPanel}
              onClick={this._requestLinkListener}
            >
              <div className={styles.itemProfile}>
                <FontAwesomeIcon
                  icon={faQuestionCircle}
                  className={styles.itemIcon}
                />
              </div>
              <div className={styles.itemBottom}>
                <span className={styles.itemText}>Talep ve İtiraz</span>
              </div>
              <span className={styles.itemExpand}>
                <ExpandMoreIcon
                  id="requestExpandMore"
                  className={styles.itemExpand}
                />
                <ExpandLessIcon
                  id="requestExpandLess"
                  className={styles.none}
                />
              </span>
            </div>
          </li>
          <div
            id="requestList"
            className={styles.none}
            style={{
              minHeight: "0px",
              height: "auto",
            }}
          >
            <div className={styles.itemEnteredVertical}>
              <div style={{ width: "100%" }}>
                <ul className={styles.innerItem}>
                  <li className={styles.innerItemList}>
                    <Link href="/documentrequest" passHref>
                      <a className="link">
                        <div
                          className={styles.innerItemContainer}
                          id={styles.belge}
                        >
                          <div className={styles.innerItemTextContainer}>
                            <span className={styles.innerItemText}>
                              Belge Talebi
                            </span>
                          </div>
                        </div>
                      </a>
                    </Link>
                  </li>
                </ul>
                <ul className={styles.innerItem}>
                  <li className={styles.innerItemList}>
                    <Link href="/examobjection" passHref>
                      <a className="link">
                        <div
                          className={styles.innerItemContainer}
                          id={styles.sinav}
                        >
                          <div className={styles.innerItemTextContainer}>
                            <span className={styles.innerItemText}>
                              Sınav İtiraz
                            </span>
                          </div>
                        </div>
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <li className={styles.linkItem}>
            <Link href="/application" passHref>
              <a className="link">
                <div className={styles.itemPanel}>
                  <div className={styles.itemProfile}>
                    <FontAwesomeIcon
                      icon={faMarker}
                      className={styles.itemIcon}
                    />
                  </div>
                  <div className={styles.itemBottom}>
                    <span className={styles.itemText}>Başvuru</span>
                  </div>
                </div>
              </a>
            </Link>
          </li>
          <li className={styles.linkItem}>
            <Link href="/messages" passHref>
              <a className="link">
                <div className={styles.itemPanel}>
                  <div className={styles.itemProfile}>
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className={styles.itemIcon}
                    />
                  </div>
                  <div className={styles.itemBottom}>
                    <span className={styles.itemText}>Mesaj Kutusu</span>
                  </div>
                </div>
              </a>
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}
export default SideBar;
