import Axios from "./caller.service";

let getAllCocktails = () => {
  return Axios.get("/cocktails");
};
let getCocktail = (id) => {
  return Axios.get("/cocktails/" + id);
};

let etidcocktail = (cocktail) => {
  return Axios.patch("/cocktails/" + cocktail.id, cocktail);
};

let addCocktail = (cocktail) => {
  return Axios.put("/cocktails/", cocktail);
};
let delCocktail = (id) => {
  return Axios.delete("/cocktails/"+ id);
};

export const cocktailsServices = {
  getAllCocktails,
  getCocktail,
  etidcocktail,
  addCocktail,
  delCocktail
};
