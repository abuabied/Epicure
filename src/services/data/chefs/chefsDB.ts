import { Chef } from "../../../constants/interfaces";

const chef: Chef = {
  fname: "Mr.",
  lname: "chef",
  img: "noImg.png",
  visited: true,
  new: true,
};
const chef2: Chef = {
  fname: "Yossi",
  lname: "Shitrit",
  img: "yossi.svg",
  visited: true,
  new: false,
};
const chef4: Chef = {
  fname: "Asaf",
  lname: "Granit",
  img: "assaf.svg",
  visited: true,
  new: false,
};
const chef5: Chef = {
  fname: "Nitzan",
  lname: "Raz",
  img: "nitzan.svg",
  visited: false,
  new: false,
};

export const allChefs = [chef, chef2, chef4, chef5];

