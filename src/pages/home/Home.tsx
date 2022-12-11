import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { AboutUsSection } from "../../components/home_page_components/about_us_section/AboutUsSection";
import { SignatureDishContainer } from "../../components/home_page_components/card_container/signature_dish_container/SignatureDishContainer";
import { PopularRestaurantContainer } from "../../components/home_page_components/card_container/popular_restaurant_container/PopularRestaurantContainer";
import { HeroSection } from "../../components/home_page_components/hero_section/HeroSection";
import { IconsMeaning } from "../../components/home_page_components/icons_meaning_section/IconsMeaning";
import {
  EmptyLine,
  TripleEmptyLines,
} from "../../components/shared/helper_components/EmptyLines";
import {
  ColumnContainer,
  HomeColumnContainer,
} from "../../components/shared/helper_components/MyContainers";
import { scrollToTop } from "../../helpers/setWindowSize";
import { ChefOfTheWeek } from "../../components/home_page_components/chef_of_the_week/ChefOfTheWeek";

export const Home = () => {
  const navigate = useNavigate();
  const goToRestaurants = () => {
    scrollToTop();
    navigate("/restaurants");
  };

  const allRestaurantsLinkStyle = {
    display: "block",
    width: "fit-content",
    fontSize: { xs: "16px", sm: "24px" },
    fontWeight: "400",
    lineHeight: "35px",
    letterSpacing: "2px",
    placeSelf: { sm: "self-start", md: "self-end" },
    cursor: "pointer",
  };

  return (
    <ColumnContainer>
      <HeroSection />
      <HomeColumnContainer>
        <PopularRestaurantContainer containerTitle="popular restaurant in epicure:" />
        <EmptyLine />
        <Typography
          component="div"
          sx={allRestaurantsLinkStyle}
          onClick={goToRestaurants}
        >
          All Restaurants &gt;&gt;
        </Typography>
        <TripleEmptyLines />
        <SignatureDishContainer containerTitle="Signature Dish Of:" />
        <EmptyLine />
        <Typography
          component="div"
          sx={{
            ...allRestaurantsLinkStyle,
            display: { sm: "block", md: "none" },
          }}
          onClick={goToRestaurants}
        >
          All Restaurants &gt;&gt;
        </Typography>
        <EmptyLine />
      </HomeColumnContainer>
      <EmptyLine />
      <IconsMeaning />
      <EmptyLine />
      <HomeColumnContainer>
        <ChefOfTheWeek />
      </HomeColumnContainer>
      <AboutUsSection />
    </ColumnContainer>
  );
};
