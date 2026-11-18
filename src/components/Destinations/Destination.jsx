import { useState } from "react";
import styles from "./Destination.module.css";
// Chaque carte possède ses propres états grâce à useState.
function Destination({ image, nom, pays, description, detail, prix, etiquette }) {  const [afficherDetails, setAfficherDetails] = useState(false);

  const [estFavori, setEstFavori] = useState(false);

  function toggleDetails() {
    setAfficherDetails((valeurPrecedente) => !valeurPrecedente);
  }

  function toggleFavori() {
    setEstFavori((valeurPrecedente) => !valeurPrecedente);
  }

  // remettre les deux états à leur valeur initiale.
  function reinitialiser() {
    setAfficherDetails(false);
    setEstFavori(false);
  }

  return (
    <article className={styles.destination}>
      <div className={styles.imageWrap}>
        <img src={image} alt={`Vue de ${nom}, ${pays}`} className={styles.image} />
        <span className={styles.tag}>{etiquette}</span>
      </div>

      <div className={styles.content}>
        <div className={styles.location}>⌖ {pays}</div>
        <h3 className={styles.title}>{nom}</h3>

        {/* La description est visible seulement si afficherDetails vaut true. */}
        {afficherDetails && (
          <div className={styles.details}>
            <p>{description}</p>
            <p>{detail}</p>
          </div>
        )}

        <div className={styles.bottom}>
          <div className={styles.price}>
            <small>À partir de</small>
            <strong>{prix.toLocaleString("fr-FR")} <span>DT</span></strong>
          </div>
          <button
            type="button"
            className={styles.discover}
            onClick={toggleDetails}
            aria-expanded={afficherDetails}
          >
            {afficherDetails ? "Masquer les détails" : "Voir les détails"}
          </button>
        </div>

        <div className={styles.actions}>
          <button
            type="button"
            className={`${styles.favorite} ${estFavori ? styles.favoriteActive : ""}`}
            onClick={toggleFavori}
            aria-pressed={estFavori}
          >
            {estFavori ? "♥ Dans mes favoris" : "♡ Ajouter aux favoris"}
          </button>
          <button type="button" className={styles.reset} onClick={reinitialiser}>
            Réinitialiser
          </button>
        </div>
      </div>
    </article>
  );
}

export default Destination;
