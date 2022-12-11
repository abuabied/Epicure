import { configureStore } from "@reduxjs/toolkit";
import restaurantsReducer from "./services/data/restaurants/restaurantsSlicer"
import chefsReducer from "./services/data/chefs/chefsSlicer";


export default configureStore({
  reducer: {
    restaurants: restaurantsReducer,
    chefs: chefsReducer,
  },
});
