import Destination from "./Destination.jsx";
import styles from "./Destinations.module.css";
import destinations from "../../Data/destinations.js";

function Destinations() {
  return (
    <section id="destinations" className={styles.section} aria-labelledby="destinations-title">
      <div className={styles.topline}>
        <div>
          <div className={styles.overline}>NOS INSPIRATIONS</div>
          <h2 id="destinations-title" className={styles.title}>Nos destinations<span>.</span></h2>
          <p className={styles.subtitle}>Choisissez votre prochain voyage, explorez les détails et enregistrez vos coups de cœur.</p>
        </div>
        <div className={styles.counter}>03 <small>destinations</small></div>
      </div>
      <div className={styles.grid}>
        {destinations.map((destination) => (
          <Destination key={destination.id} {...destination} />
        ))}
      </div>
    </section>
  );
}

export default Destinations;
