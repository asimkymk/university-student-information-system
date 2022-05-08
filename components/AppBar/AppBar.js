import styles from "../../styles/AppBar.module.css";

import IconButton from "@mui/material/IconButton";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import Badge from "@mui/material/Badge";
import $ from "jquery";
import React, { useEffect, Component } from "react";
import MenuIcon from "@mui/icons-material/Menu";
var status = false;
class AppBar extends Component {
  constructor({ props }) {
    super(props);
    this.props = props;
  }
  componentDidMount() {
    this._handleScroll();
  }
  _handleScroll() {
    $(document).ready(function () {
      $(window).scroll(function () {
        if ($(document).scrollTop() > 8) {
          $(".scrollCheck").removeClass(styles.Panel);
          $(".scrollCheck").addClass(styles.PanelScroll);
        } else {
          $(".scrollCheck").removeClass(styles.PanelScroll);
          $(".scrollCheck").addClass(styles.Panel);
        }
      });
    });
  }

  render() {
    const homeElement = <FontAwesomeIcon icon={faHome} />;

    return (
      <div className={`scrollCheck ${styles.Panel}`}>
        <div className={styles.PanelRoot}>
          <div className={styles.PanelItem}>
            <nav className={styles.PanelNav}>
              <ol className={styles.PanelList}>
                <li className={styles.PanelLi}>
                  <a href="#">
                    <span
                      className={styles.PanelLink}
                      style={{ marginRight: "7px" }}
                    >
                      {homeElement}
                    </span>
                  </a>
                </li>
                {Object.entries(this.props.links).map(([key, value]) => [
                  <li key={Math.random() * 95} className={styles.PanelLi}>
                    <a href={value}>
                      <span className={styles.PanelLink}>{key}</span>
                    </a>
                  </li>,
                  <li
                    key={Math.random() * 95}
                    className={styles.PanelListSeperator}
                  >
                    /
                  </li>,
                ])}
              </ol>
            </nav>
            <h6 className={styles.PanelPageText}>{this.props.title}</h6>
          </div>
          <div className={styles.PanelItem}>
            <IconButton
              className={styles.PanelIcon}
              onClick={() => {
                if (window.matchMedia("(max-width: 768px)").matches) {
                  if (status) {
                    $("#leftPanel").css("display", "flex");
                    $("#rightPanel").css("margin-left", "1rem");
                  } else {
                    $("#leftPanel").css("display", "none");
                    $("#rightPanel").css("margin-left", "1rem");
                  }
                } else {
                  if (status) {
                    $("#leftPanel").css("display", "flex");
                    $("#rightPanel").css("margin-left", "290px");
                  } else {
                    $("#leftPanel").css("display", "none");
                    $("#rightPanel").css("margin-left", "1rem");
                  }
                }

                status = !status;
              }}
            >
              <MenuIcon />
            </IconButton>
            <IconButton className={styles.PanelIcon}>
              <Badge badgeContent={4} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </div>
        </div>
      </div>
    );
  }
}
export default AppBar;
