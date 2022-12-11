import { Typography, Container } from "@mui/material";
import { useSelector } from "react-redux";
import SetWindowSize from "../../../helpers/setWindowSize";
import { RestaurantChefCard } from "./RestaurantChefCard";
import { DoubleEmptyLines } from "../../shared/helper_components/EmptyLines";
import { NoStyleContainer } from "../../shared/helper_components/MyContainers";
import { Restaurant } from "../../../constants/interfaces";

export const ChefRestaurantsContainer = (containerParams: {
  chefName?: string;
  cardsLimit?: number;
}) => {
  const windowSize = SetWindowSize();
  const sliderTitle =
    windowSize < 900
      ? "chef of the week"
      : containerParams.chefName + "'s restaurants:";
  const textStyle = {
    display: "block",
    maxHeight: "content",
    fontFamily: "Helvetica Neue",
    fontStyle: "normal",
    fontSize: { xs: "18px", sm: "30px" },
    fontWeight: "200",
    lineHeight: { xs: "24px", sm: "35px" },
    letterSpacing: "1.25px",
    textAlign: "left",
    textTransform: "uppercase",
  };

  const containerStyle = {
    display: "flex",
    flexDirection: "row",
    gap: "2rem",
    padding: { xs: 0, sm: 0, md: 0, lg: 0 },
    margin: 0,
    justifyContent: "flex-start",
    overflowX: "scroll",
    overflowY: "hidden",
    whiteSpace: { md: "nowrap", lg: "normal" },
    "::-webkit-scrollbar": { display: "none" },
  };

  const restaurantsList = useSelector((state: any) => state.restaurants.value);

  return (
    <NoStyleContainer>
      <Typography component="div" sx={textStyle}>
        {sliderTitle}
      </Typography>
      <DoubleEmptyLines />
      <Container sx={containerStyle}>
        {restaurantsList
          .filter(
            (restaurant: Restaurant) =>
              restaurant.chef.fname.toUpperCase() === containerParams.chefName
          )
          .map((restaurant: Restaurant) => (
            <RestaurantChefCard
              restaurant={restaurant}
              key={`chef-${restaurant.chef.fname}-rest-${restaurant.name}`}
            />
          ))}
      </Container>
    </NoStyleContainer>
  );
};
