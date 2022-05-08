import styles from "../../styles/Layout.module.css";

import React, { useState, Component } from "react";

import AppBar from "../AppBar/AppBar";
import SideBar from "../SideBar/SideBar";
class Layout extends Component {
  constructor({ props, children }) {
    super(props);
    this.children = children;
    this.props = props;
  }
  render() {
    return (
      <div className={styles.main}>
        <div id="leftPanel">
          <SideBar></SideBar>
        </div>

        <div className={styles.rightPanel} id="rightPanel">
          <AppBar
            links={this.props.appBar.links}
            title={this.props.appBar.title}
          ></AppBar>
          <div
            style={{
              textAlign: "justify",
              paddingLeft: "8px",
              paddingRight: "8px",
              paddingTop: "1rem",
            }}
          >
            {this.children}
          </div>
        </div>

        <script>{this._handleScroll}</script>
      </div>
    );
  }
}
export default Layout;
