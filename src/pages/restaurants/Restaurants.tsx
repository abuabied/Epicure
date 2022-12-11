import { useState } from "react";
import { useSelector } from "react-redux";
import { RestaurantCatagoryBar } from "../../components/restaurant_page_components/restaurant_catagory_bar/RestaurantCatagoryBar";
import { RestaurantCardContainer } from "../../components/restaurant_page_components/restaurant_card_container/RestaurantCardContainer";
import { EmptyLine } from "../../components/shared/helper_components/EmptyLines";
import { ColumnContainer } from "../../components/shared/helper_components/MyContainers";
import { PageTitle } from "../../components/shared/helper_components/Texts";
import { Restaurant } from "../../constants/interfaces";

export const Restaurants = () => {
  const allRestaurantsList = useSelector(
    (state: any) => state.restaurants.value
  );

  const [restaurantsList, setRestaurantsList] = useState(allRestaurantsList);

  
  const clickAll = () => {
    setRestaurantsList(allRestaurantsList);
  };
  const clickNew = () => {
    setRestaurantsList(
      allRestaurantsList.filter((restaurant: Restaurant) => restaurant.new)
    );
  };
  const clickMostPopular = () => {
    setRestaurantsList(
      allRestaurantsList.filter((restaurant: Restaurant) => restaurant.popular)
    );
  };
  const clickOpenNow = () => {
    setRestaurantsList(
      allRestaurantsList.filter((restaurant: Restaurant) => restaurant.open)
    );
  };

  const functions = {
    all: clickAll,
    new: clickNew,
    mostPopular: clickMostPopular,
    openNow: clickOpenNow,
  };

  return (
    <ColumnContainer>
      <PageTitle title="restaurants" />
      <EmptyLine />
      <RestaurantCatagoryBar catagoryClickFunctions={functions} />
      <RestaurantCardContainer restaurantsList={restaurantsList} />
    </ColumnContainer>
  );
};
