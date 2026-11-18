import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer} id="contact">
      <div className={styles.inner}>
        <span className={styles.name}>Travel<span>Agency</span></span>
        <p>© 2026 Travel Agency – Tous droits réservés.</p>
        <a href="#accueil">Retour en haut ↑</a>
      </div>
    </footer>
  );
}

export default Footer;
