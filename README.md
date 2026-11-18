# TP5 React — Travel Agency : gestion des formulaires

Projet complet reprenant le TD3 / TD4 (destinations + boutons) et ajoutant le TD5 de l'ISG.

## Exécution dans VS Code (Windows)

1. Extraire le ZIP.
2. Ouvrir le dossier extrait dans VS Code (celui qui contient directement `package.json`).
3. Dans le terminal :

```bash
npm install
npm run dev
```

4. Ouvrir l'adresse affichée, généralement `http://localhost:5173`.

**Important :** ne pas lancer les commandes dans un dossier parent si `package.json` n'y est pas présent. Ne pas déposer `node_modules` sur GitHub.

## Arborescence (comme sur les photos de la professeure)

```
src/
├── assets/
│   ├── bali.jpg
│   ├── rome.jpg
│   └── santorin.jpg
├── components/
│   ├── Destinations/
│   │   ├── Destination.jsx
│   │   ├── Destination.module.css
│   │   ├── Destinations.jsx
│   │   └── Destinations.module.css
│   ├── Example/
│   │   ├── Exemple.jsx
│   │   └── Exemple.module.css
│   ├── Footer/
│   │   ├── Footer.jsx
│   │   └── Footer.module.css
│   ├── Header/
│   │   ├── Header.jsx
│   │   └── Header.module.css
│   └── Reservation/
│       ├── Reservation.jsx
│       └── Reservation.module.css
├── Data/
│   └── destinations.js
├── App.css
├── App.jsx
└── main.jsx
```

## TD5 réalisé

- Champs `text`, `email`, `tel`, `select`, `date`, `number`, `radio`, `textarea`.
- 8 états contrôlés avec `useState` et mis à jour par `onChange`.
- Soumission avec `onSubmit` et `e.preventDefault()`.
- Vérification : nom, email (présence + format), destination, date et nombre de voyageurs >= 1.
- Erreurs par champ, puis récapitulatif conditionnel et petite popup de confirmation.
- Bouton « Réinitialiser » qui vide les états.
- CSS du document transmis `Reservation.module.pdf`, retranscrit en CSS Module.
- Exemple `Example/Exemple.jsx` : formulaire Nom + âge fait en classe (`Formulaire`, `useState`, `onSubmit`, `alert`). Il est accessible à la fin de la page en cliquant sur « Afficher l'exemple ».

## Points à expliquer à l'oral

- `useState` mémorise la valeur d'un champ ; `setNom` la met à jour.
- `onChange` appelle la fonction après chaque modification dans le champ.
- `value={nom}` lie le champ à l'état React : c'est un champ contrôlé.
- `e.preventDefault()` empêche le rechargement lors du submit.
- `{reservation && (...)}` n'affiche le récapitulatif que si la saisie est validée.
- Les données sont locales au navigateur : ce TP ne crée ni paiement, ni réservation enregistrée sur un serveur.

**Remarque :** le ZIP a les fichiers du projet à sa racine ; pas besoin de faire `cd` vers un deuxième dossier du même nom.
