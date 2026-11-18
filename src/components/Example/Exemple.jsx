import { useState } from "react";
import styles from "./Exemple.module.css";

function Formulaire() {
  const [nom, setNom] = useState("");
  const [age, setAge] = useState("");

  function handleSubmit(e) {
    e.preventDefault(); // Empêche le rechargement de la page.
    alert("Bonjour " + nom + ", vous avez " + age + " ans.");
    setNom("");
    setAge("");
  }

  return (
    <div className={styles.container}>
      <h2>Formulaire d'inscription — exemple du cours</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="exemple-nom">Nom :</label>
        <input id="exemple-nom" type="text" value={nom}
          onChange={(e) => setNom(e.target.value)} required />
        <label htmlFor="exemple-age">Âge :</label>
        <input id="exemple-age" type="number" min="1" value={age}
          onChange={(e) => setAge(e.target.value)} required />
        <button type="submit">Valider</button>
      </form>
    </div>
  );
}

export default Formulaire;
