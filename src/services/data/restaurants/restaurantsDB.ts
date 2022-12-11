import { Dish, Restaurant } from "../../../constants/interfaces";
import { allChefs } from "../chefs/chefsDB";

const dish: Dish = {
  name: "Best Dish",
  description: "Best ingrediants",
  type: "spicy",
  time: "lunch",
  price: 10,
  img: "noImg.png",
};

const restaurant: Restaurant = {
  name: "Best Restaurant",
  img: "noImg.png",
  chef: allChefs[0],
  signatureDish: dish,
  popular: true,
  new: false,
  open: false,
  rating: 5,
};

const dish2: Dish = {
  name: "Pad Ki Mao",
  description:
    "Shrimps, Glass Noodles, Kemiri Nuts, Shallots, Lemon Grass, Magic Chili Brown Coconut",
  type: "vegan",
  time: "lunch",
  price: 88,
  img: "dish.svg",
};
const restaurant2: Restaurant = {
  name: "Kab Kem",
  img: "Kab kem.svg",
  chef: allChefs[1],
  signatureDish: dish2,
  popular: true,
  new: false,
  open: true,
  rating: 3,
};
const dish6: Dish = {
  name: "Smoked Pizza",
  description:
    "Basil dough, cashew butter, demi-glace, bison & radish",
  type: "vegetariain",
  time: "lunch",
  price: 88,
  img: "dish.svg",
};
const restaurant6: Restaurant = {
  name: "Claro",
  img: "claro.svg",
  chef: allChefs[1],
  signatureDish: dish6,
  popular: false,
  new: true,
  open: false,
  rating: 3,
};

const dish3: Dish = {
  name: "Garbanzo Frito",
  description:
    "Polenta fingers, veal cheek, magic chili cured lemon cream, yellow laksa",
  type: "spicy",
  time: "lunch",
  price: 78,
  img: "dish2.svg",
};
const restaurant3: Restaurant = {
  name: "Lumia",
  img: "Lumina.svg",
  chef: allChefs[1],
  signatureDish: dish3,
  popular: false,
  new: true,
  open: true,
  rating: 4,
};


const dish4: Dish = {
  name: "Red Farm",
  description:
    "Green Papaya, Mango, Chukka Chili, Mint, Kaffir lime, Cashew, Akaya Cham sauce",
  type: "vegetarian",
  time: "lunch",
  price: 65,
  img: "dish3.svg",
};
const restaurant4: Restaurant = {
  name: "Messa",
  img: "messa.svg",
  chef: allChefs[2],
  signatureDish: dish4,
  popular: true,
  new: false,
  open: false,
  rating: 1,
};

const dish5: Dish = {
  name: "Pad Taa",
  description:
    "Green Papaya, Mango, Chukka Chili, Mint, Kaffir lime, Cashew, Akaya Cham sauce",
  type: "vegan",
  time: "lunch",
  price: 88,
  img: "dish4.svg",
};
const restaurant5: Restaurant = {
  name: "Tiger Lilly",
  img: "tiger-lily.svg",
  chef: allChefs[3],
  signatureDish: dish5,
  popular: true,
  new: false,
  open: true,
  rating: 2,
};
export const RestaurantsList = [
  restaurant,
  restaurant2,
  restaurant3,
  restaurant4,
  restaurant5,
  restaurant6,
];
export const Cusines = ["Thai", "Indian", "Turkish", "Afriacan", "Carbian"];

export const chefOfTheWeek = allChefs[1];
