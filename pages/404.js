//TODO 404 SAYFASI

import styles from "../styles/404.module.css";
export default function NotFound() {
  return (
    <div class={styles.not}>
      <div class={styles.notfound}>
        <div class={styles.notfound404}>
          <h3>Oops! Sayfa bulunamadı</h3>
          <h1>
            <span>4</span>
            <span>0</span>
            <span>4</span>
          </h1>
        </div>
        <h2>üzgünüz fakat aradığınız sayfayı bulamadık.</h2>
      </div>
    </div>
  );
}
