import { Container } from "@mui/material";
import { Chef } from "../../constants/interfaces";
import { NoStyleContainer } from "../shared/helper_components/MyContainers";
import {ChefImage} from "./../shared/chef_image/ChefImage"


export const ChefsCardContainer = (args:{chefsList :Chef[]}) => {
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
    <NoStyleContainer style={{ display: "flex", justifyContent: "center" }}>
      <Container sx={containerStyle}>
        {args.chefsList.map((chef: Chef) => (
          <ChefImage chef={chef} key={`chef-${chef.fname}-${chef.lname}`} />
        ))}
      </Container>
    </NoStyleContainer>
  );
};