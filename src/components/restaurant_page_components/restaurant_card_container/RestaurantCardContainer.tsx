import { Container } from "@mui/material";
import { Restaurant } from "../../../constants/interfaces";
import { SimpleCard } from "../../shared/card/simple_card/SimpleCard";
import { NoStyleContainer } from "../../shared/helper_components/MyContainers";

export const RestaurantCardContainer = (args:{restaurantsList :Restaurant[]}) => {
    const containerStyle = {
      display: "flex",
      flexDirection: "row",
      gap: "2rem",
      margin: "3rem",
      padding: { xs: 0, sm: 0, md: 0, lg: 0 },
      justifyContent: "center",
      flexWrap: "wrap",
    };
    
  return (
    <NoStyleContainer style={{display: "flex",justifyContent: "center",}}>
      <Container sx={containerStyle}>
        {args.restaurantsList.map((restaurant: Restaurant) => (
          <SimpleCard restaurant={restaurant} key={`chef-${restaurant.chef.fname}-rest-${restaurant.name}`} />
        ))}
      </Container>
    </NoStyleContainer>
  );
};