/******************************************************************************/
/*                                  FILTERS                                   */
/******************************************************************************/
export const Filters = {
  sortFunctions: {
    Nouveauté: (item1, item2) => {
      return Date.parse(item2.created_at) - Date.parse(item1.created_at);
    },
    "Meilleures ventes": () => {},
    "Mieux notés": () => {},
    "Produits en promotion": () => {},
    "Produits de saison": () => {},
    Producteur: () => {},
  },
  priceFilters: {
    "Moins de 5€": (val: number) => val < 5,
    "5€ à 10€": (val: number) => val >= 5 && val <= 10,
    "10€ à 20€": (val: number) => val >= 10 && val <= 20,
    "20€ à 50€": (val: number) => val >= 20 && val <= 50,
    "50€ et plus": (val: number) => val > 50,
  },
  ratingFilters: {
    "4": (rating: number) => rating >= 4,
    "3": (rating: number) => rating >= 3,
    "2": (rating: number) => rating >= 2,
    "1": (rating: number) => rating >= 1,
  },
};

/******************************************************************************/
/*                                   THEMES                                   */
/******************************************************************************/

export const theme_vegetables = {
  title: "Fruits & Légumes",
  category: "Fruits & Légumes",
  icon: "",
  gradientColors: ["#98ECFF", "#04AFCB"],
};
export const theme_meat = {
  title: "Viandes & Charcuteries",
  category: "Viande & Charcuterie",
  icon: "",
  gradientColors: ["#F68989", "#F25C5C"],
};
export const theme_fish = {
  title: "Poissons & Fruits de mer",
  category: "Poissons & Fruits de mer",
  icon: "",
  gradientColors: ["#98ECFF", "#04AFCB"],
};
export const theme_drinks = {
  title: "Boissons & Alcools",
  category: "",
  icon: "",
  gradientColors: ["#DE99FF", "#CD63FF"],
};
export const theme_salty = {
  title: "Épicerie salée",
  category: "",
  icon: "",
  gradientColors: ["#FFBD80", "#FFA552"],
};
export const theme_sugary = {
  title: "Épicerie Sucrée",
  category: "Epicerie Sucrée",
  icon: "",
  gradientColors: ["#FFB2F3", "#FF7AEA"],
};
export const theme_milk = {
  title: "Produits laitiers",
  category: "",
  icon: "",
  gradientColors: ["#FFE352", "#EEBA00"],
};
export const theme_takeaway = {
  title: "Plats traîteurs",
  category: "",
  icon: "",
  gradientColors: ["#A4DF75", "#76BF3B"],
};

export const theme = {
  vegetables: {
    title: "Fruits & Légumes",
    category: "Fruits & Légumes",
    icon: "",
    gradientColors: ["#98ECFF", "#04AFCB"],
  },
  meat: {
    title: "Viandes & Charcuteries",
    category: "Viande & Charcuterie",
    icon: "",
    gradientColors: ["#F68989", "#F25C5C"],
  },
  fish: {
    title: "Poissons & Fruits de mer",
    category: "Poissons & Fruits de mer",
    icon: "",
    gradientColors: ["#98ECFF", "#04AFCB"],
  },
  drinks: {
    title: "Boissons & Alcools",
    category: "",
    icon: "",
    gradientColors: ["#DE99FF", "#CD63FF"],
  },
  salty: {
    title: "Épicerie salée",
    category: "",
    icon: "",
    gradientColors: ["#FFBD80", "#FFA552"],
  },
  sugary: {
    title: "Épicerie Sucrée",
    category: "Epicerie Sucrée",
    icon: "",
    gradientColors: ["#FFB2F3", "#FF7AEA"],
  },
  milk: {
    title: "Produits laitiers",
    category: "",
    icon: "",
    gradientColors: ["#FFE352", "#EEBA00"],
  },
  takeaway: {
    title: "Plats traîteurs",
    category: "",
    icon: "",
    gradientColors: ["#A4DF75", "#76BF3B"],
  },
};
