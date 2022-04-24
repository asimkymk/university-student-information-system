import styles from "../../styles/Layout.module.css";

import React, { useState } from "react";
export default function Layout({ children }) {
  const [navBg, setNavBg] = useState(false);

  const changeNavBg = () => {
    window.scrollY >= 800 ? setNavBg(true) : setNavBg(false);
  };
  return (
    <div className={styles.main}>
      <div className={styles.leftPanel}>
        <h1>Sol Menü</h1>
      </div>

      <div className={styles.rightPanel}>
        <div className={styles.topPanel}>Ana Sayfa / Notlar</div>

        {children}
      </div>
    </div>
  );
}
