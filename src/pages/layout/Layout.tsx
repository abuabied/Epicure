import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { Footer } from "../../components/footer/Footer";
import { Header } from "../../components/header/Header";
import { Restaurant } from "../../constants/interfaces";
import { setChefs } from "../../services/data/chefs/chefsSlicer";
import { RestaurantsList } from "../../services/data/restaurants/restaurantsDB";
import { setRestaurants } from "../../services/data/restaurants/restaurantsSlicer";
import { FooterDiv, HeaderDiv, Page, PageContent } from "./styles";

export const Layout = () => {
  
  const dispatch = useDispatch();
  const [restaurantsList, setRestaurantsList] = useState<Restaurant[]>([]);


  useEffect(() => {
    const fetchRestaurantsList = () => {
      return RestaurantsList;
    };
    const fetchChefsList = () => {
      return RestaurantsList;
    };
    let tmp = fetchRestaurantsList();
    setRestaurantsList(tmp);
    dispatch(setRestaurants(restaurantsList));
    let tmpChefs = fetchChefsList();
    dispatch(setChefs(tmpChefs));
  }, [dispatch, restaurantsList]);

  return (
    <Page>
      <HeaderDiv>
        <Header />
      </HeaderDiv>

      <PageContent>
        <Outlet />
      </PageContent>

      <FooterDiv>
        <Footer />
      </FooterDiv>
    </Page>
  );
};
