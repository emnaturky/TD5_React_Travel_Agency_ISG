import Header from "./components/Header/Header.jsx";
import Destinations from "./components/Destinations/Destinations.jsx";
import Reservation from "./components/Reservation/Reservation.jsx";
import Formulaire from "./components/Example/Exemple.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  return (
    <div className="app" id="accueil">
      <Header />
      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero__light hero__light--one" />
          <div className="hero__light hero__light--two" />
          <div className="hero__content">
            <span className="eyebrow">VOYAGEZ À VOTRE RYTHME</span>
            <h1 id="hero-title">Le monde vous attend<span className="hero__dot">.</span></h1>
            <p>Découvrez nos destinations et réservez votre prochain voyage.</p>
            <a className="hero__link" href="#destinations">Explorer les destinations <span aria-hidden="true">↗</span></a>
          </div>
          <div className="hero__stamp" aria-hidden="true">BON<br />VOYAGE <span>✦</span></div>
        </section>
        <Destinations />
        <Reservation />
              </main>
      <Footer />
    </div>
  );
}

export default App;
