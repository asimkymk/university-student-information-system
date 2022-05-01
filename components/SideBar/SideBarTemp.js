import styles from "../../styles/SideBar.module.css";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { autocompleteClasses } from "@mui/material";
import { width } from "@mui/system";
export default function SideBar() {
  return (
    <div className={styles.sideBar}>
      <div className={styles.logoPanel}>
        <img className={styles.logoImage} src="login/iuclogo.png"></img>
      </div>

      <hr className={styles.seperator}></hr>
      <ul className={styles.linkList}>
        <li className={styles.linkItem}>
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
              <ExpandMoreIcon className={styles.itemExpand} />
            </span>
          </div>
        </li>
        <div
          className={styles.itemEntered}
          style={{
            minHeight: "0px",
            height: "auto",
            transitionDuration: "300ms",
          }}
        >
          <div
            className={styles.itemEnteredVertical}
            style={{ display: "none" }}
          >
            <div style={{ width: "100%" }}>
              <ul className={styles.innerItem}>
                <a href="#" style={{ textDecoration: "none" }}>
                  <li className={styles.innerItemList}>
                    <div className={styles.innerItemContainer}>
                      <div className={styles.innerItemTextContainer}>
                        <span className={styles.innerItemText}>Profilim</span>
                      </div>
                    </div>
                  </li>
                </a>
              </ul>

              <ul className={styles.innerItem}>
                <a href="#" style={{ textDecoration: "none" }}>
                  <li className={styles.innerItemList}>
                    <div className={styles.innerItemContainer}>
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
                    <div className={styles.innerItemContainer}>
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
      </ul>
    </div>
  );
}
