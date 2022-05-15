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
  faExclamationCircle,
  faHome,
  faEdit
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
            <a href="/lecturer/">
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
                    src="https://publons.com/media/thumbs/academic/photos/c4635c71-e215-476d-bf38-03b1996dbf9a.png.200x200_q95_crop_detail_upscale.png"
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
                  Özgür Can TURNA
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
                    <Link href="/lecturer/profile" passHref>
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
            <Link href="/lecturer/" passHref>
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
          <li className={styles.linkItem}>
            <Link href="/lecturer/" passHref>
              <a className="link">
                <div className={styles.itemPanel}>
                  <div className={styles.itemProfile}>
                    <FontAwesomeIcon
                      icon={faEdit}
                      className={styles.itemIcon}
                    />
                  </div>
                  <div className={styles.itemBottom}>
                    <span className={styles.itemText}>Not İşlemleri</span>
                  </div>
                </div>
              </a>
            </Link>
          </li><li className={styles.linkItem}>
            <Link href="/lecturer/documents" passHref>
              <a className="link">
                <div className={styles.itemPanel}>
                  <div className={styles.itemProfile}>
                    <FontAwesomeIcon
                      icon={faBookOpenReader}
                      className={styles.itemIcon}
                    />
                  </div>
                  <div className={styles.itemBottom}>
                    <span className={styles.itemText}>Ödev ve Doküman</span>
                  </div>
                </div>
              </a>
            </Link>
          </li>
          <hr className={styles.seperator}></hr>
          <span className={styles.pages}>İNTERAKTİF</span>
          <li className={styles.linkItem}>
            <Link href="/lecturer/examobjection" passHref>
              <a className="link">
                <div className={styles.itemPanel}>
                  <div className={styles.itemProfile}>
                    <FontAwesomeIcon
                      icon={faExclamationCircle}
                      className={styles.itemIcon}
                    />
                  </div>
                  <div className={styles.itemBottom}>
                    <span className={styles.itemText}>Sınav İtirazları</span>
                  </div>
                </div>
              </a>
            </Link>
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
                    <Link href="/lecturer/documentrequest" passHref>
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
                    <Link href="/lecturer/examobjection" passHref>
                      <a className="link">
                        <div
                          className={styles.innerItemContainer}
                          id={styles.sinav}
                        >
                          <div className={styles.innerItemTextContainer}>
                            <span className={styles.innerItemText}>
                              Sınav İt
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
            <Link href="/lecturer/messagebox" passHref>
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
