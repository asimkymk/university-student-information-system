import styles from "../../styles/SideBar.module.css";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";
import AppsIcon from "@mui/icons-material/Apps";
import ChatIcon from "@mui/icons-material/Chat";
import TouchAppIcon from "@mui/icons-material/TouchApp";
import { Component } from "react";
import $ from "jquery";
class SideBar extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  _profileLinkListener() {
    $("#profileList").toggleClass(styles.none);

    $("#profileList").toggleClass(styles.itemEntered);
    $("#profileExpandMore").toggleClass(styles.none);
    $("#profileExpandLess").toggleClass(styles.none);
    $("#profileExpandLess").toggleClass(styles.itemExpand);

    $("#profileExpandMore").toggleClass(styles.itemExpand);
    console.log("merhaba");
  }
  _lessonLinkListener() {
    $("#lessonList").toggleClass(styles.none);

    $("#lessonList").toggleClass(styles.itemEntered);
    $("#lessonExpandMore").toggleClass(styles.none);
    $("#lessonExpandLess").toggleClass(styles.none);
    $("#lessonExpandLess").toggleClass(styles.itemExpand);

    $("#lessonExpandMore").toggleClass(styles.itemExpand);
  }
  _requestLinkListener() {
    $("#requestList").toggleClass(styles.none);

    $("#requestList").toggleClass(styles.itemEntered);
    $("#requestExpandMore").toggleClass(styles.none);
    $("#requestExpandLess").toggleClass(styles.none);
    $("#requestExpandLess").toggleClass(styles.itemExpand);

    $("#requestExpandMore").toggleClass(styles.itemExpand);
  }
  render() {
    return (
      <div className={styles.sideBar}>
        <div className={styles.logoPanel}>
          <img className={styles.logoImage} src="login/iuclogo.png"></img>
        </div>
        <h5 style={{ textAlign: "center" }}>Öğrenci Bilgi Sistemi</h5>
        <hr className={styles.seperator}></hr>
        <ul className={styles.linkList}>
          <li
            className={styles.linkItem}
            id="profileShow"
            onClick={this._profileLinkListener}
          >
            <div className={styles.itemPanel}>
              <div className={styles.itemProfile}>
                <div className={styles.circularAvatar}>
                  <img
                    src="https://demos.creative-tim.com/material-dashboard-2-pro-react-ts/static/media/team-3.0ef0be95e6850814c79e.jpg"
                    className={styles.circularAvatarImage}
                  ></img>
                </div>
              </div>
              <div className={styles.itemBottom}>
                <span className={styles.itemText}>Asım Kaymak</span>
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
              transitionDuration: "300ms",
            }}
          >
            <div className={styles.itemEnteredVertical}>
              <div style={{ width: "100%" }}>
                <ul className={styles.innerItem}>
                  <a href="#" style={{ textDecoration: "none" }}>
                    <li className={styles.innerItemList}>
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
                    </li>
                  </a>
                </ul>

                <ul className={styles.innerItem}>
                  <a href="#" style={{ textDecoration: "none" }}>
                    <li className={styles.innerItemList}>
                      <div
                        className={styles.innerItemContainer}
                        id={styles.ayarlar}
                      >
                        <div className={styles.innerItemTextContainer}>
                          <span className={styles.innerItemText}>Ayarlar</span>
                        </div>
                      </div>
                    </li>
                  </a>
                </ul>

                <ul className={styles.innerItem}>
                  <a href="#" style={{ textDecoration: "none" }}>
                    <li className={styles.innerItemList}>
                      <div
                        className={styles.innerItemContainer}
                        id={styles.cikis}
                      >
                        <div className={styles.innerItemTextContainer}>
                          <span className={styles.innerItemText}>Çıkış</span>
                        </div>
                      </div>
                    </li>
                  </a>
                </ul>
              </div>
            </div>
          </div>
          <hr className={styles.seperator}></hr>

          <span className={styles.pages}>Ders İşlemlerİ</span>
          <li
            className={styles.linkItem}
            id="lessonShow"
            onClick={this._lessonLinkListener}
          >
            <div className={styles.itemPanel}>
              <div className={styles.itemProfile}>
                <MenuBookIcon className={styles.itemIcon}></MenuBookIcon>
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
              transitionDuration: "300ms",
            }}
          >
            <div className={styles.itemEnteredVertical}>
              <div style={{ width: "100%" }}>
                <ul className={styles.innerItem}>
                  <a href="#" style={{ textDecoration: "none" }}>
                    <li className={styles.innerItemList}>
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
                    </li>
                  </a>
                </ul>

                <ul className={styles.innerItem}>
                  <a href="#" style={{ textDecoration: "none" }}>
                    <li className={styles.innerItemList}>
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
                    </li>
                  </a>
                </ul>
                <ul className={styles.innerItem}>
                  <a href="#" style={{ textDecoration: "none" }}>
                    <li className={styles.innerItemList}>
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
                    </li>
                  </a>
                </ul>
                <ul className={styles.innerItem}>
                  <a href="#" style={{ textDecoration: "none" }}>
                    <li className={styles.innerItemList}>
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
                    </li>
                  </a>
                </ul>
                <ul className={styles.innerItem}>
                  <a href="#" style={{ textDecoration: "none" }}>
                    <li className={styles.innerItemList}>
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
                    </li>
                  </a>
                </ul>
                <ul className={styles.innerItem}>
                  <a href="#" style={{ textDecoration: "none" }}>
                    <li className={styles.innerItemList}>
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
                    </li>
                  </a>
                </ul>
              </div>
            </div>
          </div>
          <li className={styles.linkItem}>
            <div className={styles.itemPanel}>
              <div className={styles.itemProfile}>
                <CreateNewFolderIcon
                  className={styles.itemIcon}
                ></CreateNewFolderIcon>
              </div>
              <div className={styles.itemBottom}>
                <span className={styles.itemText}>Ders Alma ve Kayıt</span>
              </div>
            </div>
          </li>
          <hr className={styles.seperator}></hr>

          <span className={styles.pages}>İnteraktİf</span>

          <li
            className={styles.linkItem}
            id="requestShow"
            onClick={this._requestLinkListener}
          >
            <div className={styles.itemPanel}>
              <div className={styles.itemProfile}>
                <AppsIcon className={styles.itemIcon}></AppsIcon>
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
              transitionDuration: "300ms",
            }}
          >
            <div className={styles.itemEnteredVertical}>
              <div style={{ width: "100%" }}>
                <ul className={styles.innerItem}>
                  <a href="#" style={{ textDecoration: "none" }}>
                    <li className={styles.innerItemList}>
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
                    </li>
                  </a>
                </ul>
                <ul className={styles.innerItem}>
                  <a href="#" style={{ textDecoration: "none" }}>
                    <li className={styles.innerItemList}>
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
                    </li>
                  </a>
                </ul>
              </div>
            </div>
          </div>

          <li className={styles.linkItem}>
            <div className={styles.itemPanel}>
              <div className={styles.itemProfile}>
                <TouchAppIcon className={styles.itemIcon}></TouchAppIcon>
              </div>
              <div className={styles.itemBottom}>
                <span className={styles.itemText}>Başvuru</span>
              </div>
            </div>
          </li>
          <li className={styles.linkItem}>
            <div className={styles.itemPanel}>
              <div className={styles.itemProfile}>
                <ChatIcon className={styles.itemIcon}></ChatIcon>
              </div>
              <div className={styles.itemBottom}>
                <span className={styles.itemText}>Mesaj Kutusu</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}
export default SideBar;
