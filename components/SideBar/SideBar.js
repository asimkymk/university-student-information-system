import styles from "../../styles/SideBar.module.css";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
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
        <hr className={styles.seperator}></hr>
      </ul>
    </div>
  );
}
