import { useState } from "react";
import styles from "./Reservation.module.css";

function Reservation() {
  // 1. Déclaration des états — comme dans le cours.
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [destination, setDestination] = useState("");
  const [dateDepart, setDateDepart] = useState("");
  const [nbVoyageurs, setNbVoyageurs] = useState("1");
  const [typeVoyage, setTypeVoyage] = useState("");
  const [demandes, setDemandes] = useState("");

  const [reservation, setReservation] = useState(null);
  const [erreurs, setErreurs] = useState({});
  const [showPopup, setShowPopup] = useState(false);

  // 2. Effacer une erreur lorsqu'un champ est modifié.
  function effacerErreur(champ) {
    setErreurs((prev) => {
      const nouvellesErreurs = { ...prev };
      delete nouvellesErreurs[champ];
      return nouvellesErreurs;
    });
  }

  // 3. Récupérer les informations et valider le formulaire.
  function handleSubmit(e) {
    e.preventDefault(); // Empêche le rechargement automatique de la page.
    const nouvellesErreurs = {};

    if (!nom.trim()) nouvellesErreurs.nom = "Veuillez saisir votre nom et prénom.";
    if (!email.trim()) {
      nouvellesErreurs.email = "Veuillez saisir votre adresse e-mail.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      nouvellesErreurs.email = "Veuillez saisir une adresse e-mail valide.";
    }
    if (!destination) nouvellesErreurs.destination = "Veuillez choisir une destination.";
    if (!dateDepart) nouvellesErreurs.dateDepart = "Veuillez renseigner la date de départ.";
    if (!Number.isInteger(Number(nbVoyageurs)) || Number(nbVoyageurs) < 1) {
      nouvellesErreurs.nbVoyageurs = "Il faut au moins un voyageur.";
    }

    setErreurs(nouvellesErreurs);
    if (Object.keys(nouvellesErreurs).length > 0) return;

    setReservation({
      nom: nom.trim(),
      email: email.trim(),
      telephone: telephone.trim(),
      destination,
      dateDepart,
      nbVoyageurs: Number(nbVoyageurs),
      typeVoyage: typeVoyage || "Non précisé",
      demandes: demandes.trim() || "Aucune",
    });
    setShowPopup(true);
  }

  function handleReset() {
    setNom("");
    setEmail("");
    setTelephone("");
    setDestination("");
    setDateDepart("");
    setNbVoyageurs("1");
    setTypeVoyage("");
    setDemandes("");
    setErreurs({});
    setReservation(null);
    setShowPopup(false);
  }

  return (
    <section id="reservation" className={styles.container} aria-labelledby="reservation-title">
      <h2 id="reservation-title">Réservez votre voyage</h2>
      <form onSubmit={handleSubmit} noValidate>
        {/* NOM ET PRÉNOM */}
        <div className={styles.formGroup}>
          <label htmlFor="nom">Nom et prénom :</label>
          <input id="nom" type="text" value={nom}
            className={erreurs.nom ? styles.inputError : ""}
            onChange={(e) => { setNom(e.target.value); effacerErreur("nom"); }}
            placeholder="Votre nom et prénom" aria-invalid={Boolean(erreurs.nom)} />
          {erreurs.nom && <span className={styles.errorMessage} role="alert">{erreurs.nom}</span>}
        </div>

        {/* EMAIL */}
        <div className={styles.formGroup}>
          <label htmlFor="email">Adresse e-mail :</label>
          <input id="email" type="email" value={email}
            className={erreurs.email ? styles.inputError : ""}
            onChange={(e) => { setEmail(e.target.value); effacerErreur("email"); }}
            placeholder="exemple@email.com" aria-invalid={Boolean(erreurs.email)} />
          {erreurs.email && <span className={styles.errorMessage} role="alert">{erreurs.email}</span>}
        </div>

        {/* TÉLÉPHONE */}
        <div className={styles.formGroup}>
          <label htmlFor="telephone">Téléphone :</label>
          <input id="telephone" type="tel" value={telephone}
            onChange={(e) => setTelephone(e.target.value)} placeholder="Votre numéro de téléphone" />
        </div>

        {/* DESTINATION */}
        <div className={styles.formGroup}>
          <label htmlFor="destination">Destination :</label>
          <select id="destination" value={destination}
            className={erreurs.destination ? styles.inputError : ""}
            onChange={(e) => { setDestination(e.target.value); effacerErreur("destination"); }}
            aria-invalid={Boolean(erreurs.destination)}>
            <option value="">-- Choisir une destination --</option>
            <option value="Santorin">Santorin</option>
            <option value="Bali">Bali</option>
            <option value="Rome">Rome</option>
            <option value="Istanbul">Istanbul</option>
          </select>
          {erreurs.destination && <span className={styles.errorMessage} role="alert">{erreurs.destination}</span>}
        </div>

        {/* DATE DE DÉPART */}
        <div className={styles.formGroup}>
          <label htmlFor="dateDepart">Date de départ :</label>
          <input id="dateDepart" type="date" value={dateDepart}
            className={erreurs.dateDepart ? styles.inputError : ""}
            onChange={(e) => { setDateDepart(e.target.value); effacerErreur("dateDepart"); }}
            aria-invalid={Boolean(erreurs.dateDepart)} />
          {erreurs.dateDepart && <span className={styles.errorMessage} role="alert">{erreurs.dateDepart}</span>}
        </div>

        {/* NOMBRE DE VOYAGEURS */}
        <div className={styles.formGroup}>
          <label htmlFor="nbVoyageurs">Nombre de voyageurs :</label>
          <input id="nbVoyageurs" type="number" min="1" step="1" value={nbVoyageurs}
            className={erreurs.nbVoyageurs ? styles.inputError : ""}
            onChange={(e) => { setNbVoyageurs(e.target.value); effacerErreur("nbVoyageurs"); }}
            aria-invalid={Boolean(erreurs.nbVoyageurs)} />
          {erreurs.nbVoyageurs && <span className={styles.errorMessage} role="alert">{erreurs.nbVoyageurs}</span>}
        </div>

        {/* TYPE DE VOYAGE */}
        <div className={styles.formGroup}>
          <label>Type de voyage :</label>
          <div className={styles.radioGroup} role="radiogroup" aria-label="Type de voyage">
            {["Économique", "Confort", "Luxe"].map((type) => (
              <label key={type}>
                <input type="radio" name="typeVoyage" value={type}
                  checked={typeVoyage === type}
                  onChange={(e) => setTypeVoyage(e.target.value)} />
                {type}
              </label>
            ))}
          </div>
        </div>

        {/* DEMANDES PARTICULIÈRES */}
        <div className={styles.formGroup}>
          <label htmlFor="demandes">Demandes particulières :</label>
          <textarea id="demandes" value={demandes} onChange={(e) => setDemandes(e.target.value)}
            placeholder="Indiquez vos souhaits éventuels..." />
        </div>

        <div className={styles.buttons}>
          <button type="submit" className={styles.submitButton}>Réserver</button>
          <button type="button" className={styles.resetButton} onClick={handleReset}>Réinitialiser</button>
        </div>
      </form>

      {/* 4. Affichage du récapitulatif après validation du formulaire. */}
      {reservation && (
        <div className={styles.recap} aria-live="polite">
          <h3>Récapitulatif de votre réservation</h3>
          <p><strong>Nom :</strong> {reservation.nom}</p>
          <p><strong>E-mail :</strong> {reservation.email}</p>
          <p><strong>Téléphone :</strong> {reservation.telephone || "Non renseigné"}</p>
          <p><strong>Destination :</strong> {reservation.destination}</p>
          <p><strong>Date de départ :</strong> {reservation.dateDepart}</p>
          <p><strong>Nombre de voyageurs :</strong> {reservation.nbVoyageurs}</p>
          <p><strong>Type de voyage :</strong> {reservation.typeVoyage}</p>
          <p><strong>Demandes :</strong> {reservation.demandes}</p>
        </div>
      )}

      {showPopup && (
        <div className={styles.overlay} onClick={() => setShowPopup(false)}>
          <div className={styles.popup} role="dialog" aria-modal="true" aria-labelledby="popup-title"
            onClick={(e) => e.stopPropagation()}>
            <h3 id="popup-title">Réservation enregistrée !</h3>
            <p>Merci {reservation?.nom}, votre demande de réservation a été enregistrée dans cette démonstration.</p>
            <button type="button" autoFocus onClick={() => setShowPopup(false)}>Fermer</button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Reservation;
