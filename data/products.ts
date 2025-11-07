import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: "T-shirt Rouge",
    price: 25.00,
    description: "Un t-shirt rouge confortable, parfait pour un look casual. Fabriqué en coton bio, il offre un confort optimal et une durabilité exceptionnelle.",
    images: [
        { url: '/images/t shirt rouge.png', alt: 'T-shirt rouge vue de face' },
        { url: '/images/t shirt rouge (2).png', alt: 'T-shirt rouge vue alternative' },
    ],
    logoSvg: () => null,
    reviews: [
      { rating: 5, comment: "Excellent produit, qualité au rendez-vous !", author: "Marie L.", date: "2024-01-15" },
      { rating: 4, comment: "Très confortable, je recommande.", author: "Pierre D.", date: "2024-01-20" }
    ],
    features: ["Coton bio 100%", "Confort optimal", "Lavable en machine", "Coupe ajustée"],
    shipping: "Livraison gratuite en 24-48h",
    payment: "Paiement sécurisé SSL 256 bits",
    warranty: "Satisfait ou remboursé sous 30 jours"
  },
  {
    id: '2',
    name: "T-shirt Orange",
    price: 25.00,
    description: "Un t-shirt orange vibrant, idéal pour se démarquer. Design unique avec plusieurs vues disponibles pour vous permettre de choisir votre préféré.",
    images: [
        { url: '/images/tshirt orange.png', alt: 'T-shirt orange vue de face' },
        { url: '/images/tshirt orange (2).png', alt: 'T-shirt orange vue alternative 1' },
        { url: '/images/tshirt orange (3).png', alt: 'T-shirt orange vue alternative 2' },
        { url: '/images/tshirt orange (4).png', alt: 'T-shirt orange vue alternative 3' },
    ],
    logoSvg: () => null,
    reviews: [
      { rating: 5, comment: "Couleur superbe, très satisfait !", author: "Sophie M.", date: "2024-02-01" },
      { rating: 5, comment: "Qualité premium, livraison rapide.", author: "Lucas K.", date: "2024-02-05" }
    ],
    features: ["Couleur vibrante", "Tissu respirant", "Impression durable", "Plusieurs vues disponibles"],
    shipping: "Livraison gratuite en 24-48h",
    payment: "Paiement sécurisé SSL 256 bits",
    warranty: "Satisfait ou remboursé sous 30 jours"
  },
  {
    id: '3',
    name: "T-shirt Gris",
    price: 25.00,
    description: "Un t-shirt gris classique, polyvalent et confortable. Parfait pour toutes les occasions, du quotidien au bureau.",
    images: [
        { url: '/images/tshirtgris.png', alt: 'T-shirt gris vue de face' },
    ],
    logoSvg: () => null,
    reviews: [
      { rating: 4, comment: "Classique et efficace, bonne qualité.", author: "Emma R.", date: "2024-01-25" }
    ],
    features: ["Couleur intemporelle", "Confort toute la journée", "Facile d'entretien", "Polyvalent"],
    shipping: "Livraison gratuite en 24-48h",
    payment: "Paiement sécurisé SSL 256 bits",
    warranty: "Satisfait ou remboursé sous 30 jours"
  },
  {
    id: '4',
    name: "T-shirt Noir",
    price: 25.00,
    description: "Un t-shirt noir élégant, parfait pour toutes occasions. La couleur noire est toujours tendance et s'accorde avec tout.",
    images: [
        { url: '/images/tshirtnoir.png', alt: 'T-shirt noir vue de face' },
    ],
    logoSvg: () => null,
    reviews: [
      { rating: 5, comment: "Élégant et confortable, parfait pour le bureau.", author: "Thomas B.", date: "2024-02-10" }
    ],
    features: ["Couleur noire classique", "Élégant", "Confortable", "S'accorde avec tout"],
    shipping: "Livraison gratuite en 24-48h",
    payment: "Paiement sécurisé SSL 256 bits",
    warranty: "Satisfait ou remboursé sous 30 jours"
  },
  {
    id: '5',
    name: "T-shirt Valentin Gris",
    price: 28.00,
    description: "Un t-shirt gris spécial Valentin, avec un design unique. Parfait pour célébrer la Saint-Valentin avec style.",
    images: [
        { url: '/images/tshirtvalentingris.png', alt: 'T-shirt Valentin gris vue de face' },
        { url: '/images/tshirtvalentingris (2).png', alt: 'T-shirt Valentin gris vue alternative' },
    ],
    logoSvg: () => null,
    reviews: [
      { rating: 5, comment: "Design adorable, cadeau parfait !", author: "Julie P.", date: "2024-02-14" },
      { rating: 4, comment: "Qualité bonne, design sympa.", author: "Antoine L.", date: "2024-02-15" }
    ],
    features: ["Design spécial Valentin", "Message romantique", "Tissu doux", "Cadeau idéal"],
    shipping: "Livraison gratuite en 24-48h",
    payment: "Paiement sécurisé SSL 256 bits",
    warranty: "Satisfait ou remboursé sous 30 jours"
  },
  {
    id: '6',
    name: "T-shirt Vert",
    price: 25.00,
    description: "Un t-shirt vert frais, idéal pour les journées ensoleillées. Apportez une touche de nature à votre garde-robe.",
    images: [
        { url: '/images/tshirtvert.png', alt: 'T-shirt vert vue de face' },
    ],
    logoSvg: () => null,
    reviews: [
      { rating: 4, comment: "Couleur sympa, confortable.", author: "Camille T.", date: "2024-03-01" }
    ],
    features: ["Couleur verte fraîche", "Idéal été", "Confortable", "Écologique"],
    shipping: "Livraison gratuite en 24-48h",
    payment: "Paiement sécurisé SSL 256 bits",
    warranty: "Satisfait ou remboursé sous 30 jours"
  },
  {
    id: '7',
    name: "Hoodie Blanc",
    price: 60.00,
    description: "Un hoodie blanc confortable, parfait pour un look décontracté. Chaud et stylé pour toutes les saisons.",
    images: [
        { url: '/images/hoodiebland.png', alt: 'Hoodie blanc vue de face' },
    ],
    logoSvg: () => null,
    reviews: [
      { rating: 5, comment: "Très chaud et confortable, excellent achat !", author: "Nicolas F.", date: "2024-01-30" }
    ],
    features: ["Chaud et confortable", "Capuche ajustable", "Poches pratiques", "Tissu durable"],
    shipping: "Livraison gratuite en 24-48h",
    payment: "Paiement sécurisé SSL 256 bits",
    warranty: "Satisfait ou remboursé sous 30 jours"
  },
  {
    id: '8',
    name: "Hoodie Gris",
    price: 60.00,
    description: "Un hoodie gris chaud et stylé. La couleur grise est parfaite pour un look moderne et intemporel.",
    images: [
        { url: '/images/hoodiegri.png', alt: 'Hoodie gris vue de face' },
    ],
    logoSvg: () => null,
    reviews: [
      { rating: 5, comment: "Style impeccable, très confortable.", author: "Alice G.", date: "2024-02-20" }
    ],
    features: ["Couleur grise élégante", "Chaud", "Style moderne", "Confort optimal"],
    shipping: "Livraison gratuite en 24-48h",
    payment: "Paiement sécurisé SSL 256 bits",
    warranty: "Satisfait ou remboursé sous 30 jours"
  },
  {
    id: '9',
    name: "Hoodie Valentin Blanc",
    price: 65.00,
    description: "Un hoodie blanc spécial Valentin, avec un design romantique. Parfait pour un cadeau spécial ou pour célébrer l'amour.",
    images: [
        { url: '/images/hoodievalentinblanc.png', alt: 'Hoodie Valentin blanc vue de face' },
        { url: '/images/hoodievalentinblanc (2).png', alt: 'Hoodie Valentin blanc vue alternative' },
    ],
    logoSvg: () => null,
    reviews: [
      { rating: 5, comment: "Design romantique, cadeau parfait pour Valentin !", author: "Laura S.", date: "2024-02-14" },
      { rating: 4, comment: "Très mignon, qualité au top.", author: "Maxime R.", date: "2024-02-16" }
    ],
    features: ["Design spécial Valentin", "Chaud et confortable", "Message d'amour", "Cadeau idéal"],
    shipping: "Livraison gratuite en 24-48h",
    payment: "Paiement sécurisé SSL 256 bits",
    warranty: "Satisfait ou remboursé sous 30 jours"
  },
  {
    id: '10',
    name: "Casquette Grise",
    price: 20.00,
    description: "Une casquette grise élégante, parfaite pour se protéger du soleil. Style casual et protection UV.",
    images: [
        { url: '/images/casquette grise.png', alt: 'Casquette grise vue de face' },
    ],
    logoSvg: () => null,
    reviews: [
      { rating: 4, comment: "Bonne protection, style sympa.", author: "Hugo M.", date: "2024-03-05" }
    ],
    features: ["Protection UV", "Ajustable", "Confortable", "Style élégant"],
    shipping: "Livraison gratuite en 24-48h",
    payment: "Paiement sécurisé SSL 256 bits",
    warranty: "Satisfait ou remboursé sous 30 jours"
  },
  {
    id: '11',
    name: "Casquette Orange",
    price: 20.00,
    description: "Une casquette orange vibrante, ajoutez de la couleur à votre tenue. Parfaite pour les journées ensoleillées.",
    images: [
        { url: '/images/casquette orange.png', alt: 'Casquette orange vue de face' },
        { url: '/images/casquette orange (2).png', alt: 'Casquette orange vue alternative' },
    ],
    logoSvg: () => null,
    reviews: [
      { rating: 5, comment: "Couleur géniale, très visible !", author: "Léo D.", date: "2024-03-10" }
    ],
    features: ["Couleur vibrante", "Protection solaire", "Ajustable", "Plusieurs vues"],
    shipping: "Livraison gratuite en 24-48h",
    payment: "Paiement sécurisé SSL 256 bits",
    warranty: "Satisfait ou remboursé sous 30 jours"
  },
  {
    id: '12',
    name: "Bob Gris",
    price: 18.00,
    description: "Un bob gris confortable et stylé. Accessoire essentiel pour compléter votre look décontracté.",
    images: [
        { url: '/images/bob gris.png', alt: 'Bob gris vue de face' },
    ],
    logoSvg: () => null,
    reviews: [
      { rating: 4, comment: "Confortable et pratique.", author: "Chloé V.", date: "2024-03-15" }
    ],
    features: ["Confortable", "Style décontracté", "Facile à porter", "Durabilité"],
    shipping: "Livraison gratuite en 24-48h",
    payment: "Paiement sécurisé SSL 256 bits",
    warranty: "Satisfait ou remboursé sous 30 jours"
  },
  {
    id: '13',
    name: "Logo Off",
    price: 15.00,
    description: "Un accessoire avec logo off, pour un style unique. Parfait pour les fans de mode alternative.",
    images: [
        { url: '/images/logoff.png', alt: 'Logo off vue de face' },
    ],
    logoSvg: () => null,
    reviews: [
      { rating: 5, comment: "Style unique, j'adore !", author: "Kevin T.", date: "2024-03-20" }
    ],
    features: ["Design unique", "Style alternatif", "Qualité premium", "Accessoire tendance"],
    shipping: "Livraison gratuite en 24-48h",
    payment: "Paiement sécurisé SSL 256 bits",
    warranty: "Satisfait ou remboursé sous 30 jours"
  },
  {
    id: '14',
    name: "Logo Purple",
    price: 15.00,
    description: "Un accessoire avec logo violet, ajoutez de la couleur. La couleur violette apporte une touche d'originalité.",
    images: [
        { url: '/images/logopur.png', alt: 'Logo purple vue de face' },
    ],
    logoSvg: () => null,
    reviews: [
      { rating: 4, comment: "Couleur sympa, design cool.", author: "Sarah L.", date: "2024-03-25" }
    ],
    features: ["Couleur violette", "Design original", "Qualité", "Accessoire coloré"],
    shipping: "Livraison gratuite en 24-48h",
    payment: "Paiement sécurisé SSL 256 bits",
    warranty: "Satisfait ou remboursé sous 30 jours"
  },
  {
    id: '15',
    name: "Logo Varié",
    price: 15.00,
    description: "Un accessoire avec logo varié, pour varier les plaisirs. Plusieurs designs pour s'adapter à votre humeur.",
    images: [
        { url: '/images/logovaria.png', alt: 'Logo varié vue de face' },
    ],
    logoSvg: () => null,
    reviews: [
      { rating: 5, comment: "Variété de designs, super !", author: "Mathieu P.", date: "2024-03-30" }
    ],
    features: ["Designs variés", "Original", "Fun", "Collectionnable"],
    shipping: "Livraison gratuite en 24-48h",
    payment: "Paiement sécurisé SSL 256 bits",
    warranty: "Satisfait ou remboursé sous 30 jours"
  },
  {
    id: '16',
    name: "Téléchargement",
    price: 10.00,
    description: "Un accessoire spécial téléchargement. Design numérique unique pour les amateurs de tech.",
    images: [
        { url: '/images/téléchargement (19).png', alt: 'Téléchargement vue de face' },
    ],
    logoSvg: () => null,
    reviews: [
      { rating: 4, comment: "Design geek, j'aime bien.", author: "Alexandre M.", date: "2024-04-01" }
    ],
    features: ["Design numérique", "Thème tech", "Original", "Pour geeks"],
    shipping: "Livraison gratuite en 24-48h",
    payment: "Paiement sécurisé SSL 256 bits",
    warranty: "Satisfait ou remboursé sous 30 jours"
  },
  {
    id: '17',
    name: "Unbuttoned",
    price: 30.00,
    description: "Un produit spécial Unbuttoned, avec plusieurs vues. La pièce signature de notre collection.",
    images: [
        { url: '/images/unbuttonned.jpg', alt: 'Unbuttoned vue de face' },
        { url: '/images/unbuttonned (2).jpg', alt: 'Unbuttoned vue alternative 1' },
        { url: '/images/unbuttonned (3).jpg', alt: 'Unbuttoned vue alternative 2' },
    ],
    logoSvg: () => null,
    reviews: [
      { rating: 5, comment: "Produit signature, excellent !", author: "Élodie F.", date: "2024-04-05" },
      { rating: 5, comment: "Qualité premium, design unique.", author: "Romain G.", date: "2024-04-10" }
    ],
    features: ["Produit signature", "Design unique", "Qualité premium", "Plusieurs vues"],
    shipping: "Livraison gratuite en 24-48h",
    payment: "Paiement sécurisé SSL 256 bits",
    warranty: "Satisfait ou remboursé sous 30 jours"
  },
];