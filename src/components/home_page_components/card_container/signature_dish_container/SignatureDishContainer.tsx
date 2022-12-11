import { Container } from "@mui/material";
import { useSelector } from "react-redux";
import { Restaurant } from "../../../../constants/interfaces";
import { DetailedCard } from "../../../shared/card/detailed_card/DetailedCard";
import { DoubleEmptyLines } from "../../../shared/helper_components/EmptyLines";
import { NoStyleContainer } from "../../../shared/helper_components/MyContainers";
import { ContainerTitle } from "../../../shared/helper_components/Texts";

export const SignatureDishContainer = (containerParams: {
  containerTitle: string;
}) => {
  const containerStyle = {
    display: "flex",
    flexDirection: "row",
    gap: "2rem",
    padding: { xs: 0, sm: 0, md: 0, lg: 0 },
    justifyContent: { md: "flex-start", lg: "center" },
    overflowX: "scroll",
    overflowY: "hidden",
    whiteSpace: { md: "nowrap", lg: "normal" },
    "::-webkit-scrollbar": { display: "none" },
  };

  const restaurantsList = useSelector((state: any) => state.restaurants.value);

  return (
    <NoStyleContainer>
      <ContainerTitle title={containerParams.containerTitle} />
      <DoubleEmptyLines />
      <Container sx={containerStyle}>
        {restaurantsList
          .filter((restaurant: Restaurant) => restaurant.popular)
          .reverse()
          .slice(-3)
          .reverse()
          .map((restaurant: Restaurant) => (
            <DetailedCard
              signatureDish={restaurant.signatureDish}
              key={`sig-${restaurant.name}-${restaurant.signatureDish.name}`}
            />
          ))}
      </Container>
    </NoStyleContainer>
  );
};
