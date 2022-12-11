import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import { Restaurant } from "../../../constants/interfaces";


export const RestaurantChefCard = (cardArgs: { restaurant: Restaurant }) => {
  const cardTileStyle = {
    fontSize: { xs: "20px", sm: "28px", md: "32px" },
    fontWeight: "400",
    lineHeight: { xs: "21px", sm: "47px" },
    letterSpacing: "2.6px",
    textAlign: { xs: "left", sm: "center" },
  };

  return (
    <Card
      sx={{
        minWidth: "250px",
        width: "270px",
        backgroundColor: "#F9F4EA",
      }}
    >
      <CardMedia
        component="img"
        height="200px"
        image={require("./../../../assets/restaurants-imgs/" +
          cardArgs.restaurant.img)}
        alt="rest-img"
      />

      <CardContent>
        <Typography gutterBottom component="div" sx={cardTileStyle}>
          {cardArgs.restaurant.name}
        </Typography>
      </CardContent>
    </Card>
  );
};