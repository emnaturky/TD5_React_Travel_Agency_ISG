import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <a className={styles.brand} href="#accueil" aria-label="Travel Agency, accueil">
        <span className={styles.brandIcon} aria-hidden="true">✈</span>
        <span>Travel<span className={styles.brandAccent}>Agency</span></span>
      </a>
      <nav className={styles.nav} aria-label="Navigation principale">
        <a href="#accueil">Accueil</a>
        <a href="#destinations">Destinations</a>
        <a href="#reservation">Réservation</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
