import santorin from "../assets/santorin.jpg";
import bali from "../assets/bali.jpg";
import rome from "../assets/rome.jpg";

const destinations = [
    {
      id: 1,
      image: santorin,
      nom: "Santorin",
      pays: "Grèce",
      description: "Découvrez les maisons blanches et les panoramas sur la mer Égée.",
      detail: "Entre ruelles typiques et couchers de soleil, Santorin offre un séjour riche en découvertes.",
      prix: 1200,
      etiquette: "Culture & détente"
    },
    {
      id: 2,
      image: bali,
      nom: "Bali",
      pays: "Indonésie",
      description: "Profitez des plages turquoise et des paysages tropicaux de Bali.",
      detail: "Explorez les plages, les rizières et les villages traditionnels à votre rythme.",
      prix: 1800,
      etiquette: "Nature & aventure"
    },
    {
      id: 3,
      image: rome,
      nom: "Rome",
      pays: "Italie",
      description: "Partez à la découverte du Colisée et des trésors de Rome.",
      detail: "Flânez au cœur de la ville et découvrez ses monuments, ses places et sa gastronomie.",
      prix: 950,
      etiquette: "Histoire & ville"
    }
];

export default destinations;
