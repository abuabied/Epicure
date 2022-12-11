import { CardMedia, Typography } from "@mui/material";
import { Chef } from "../../../constants/interfaces";
import { ImageBox } from "./styles";

export const ChefImage = (args: { chef: Chef }) => {
  const textStyle = {
    fontSize: { xs: "18px", sm: "40px" },
    fontWeight: "400",
    lineHeight: { xs: "47px", sm: "47px" },
    letterSpacing: "2.7px",
    textAlign: "center",
    alignItems: "center",
    backgroundColor: "#FFFF",
    opacity: 0.8,
    minWidth: "100%",
    height: "content",
    margin: 0,
    padding: "3%",
    width: "200px",
    "@media (min-width: 500px)": {
      width: "300px",
    },
    "@media (min-width: 700px)": {
      width: "350px",
    },
    "@media (min-width: 1000px)": {
      width: "400px",
    },
  };

  const imgStyle = {
    position: "absolute",
    width: "200px",
    objectFit: "fill",
    height: "200px",
    "@media (min-width: 500px)": {
      width: "300px",
      height: "300px",
    },
    "@media (min-width: 700px)": {
      width: "350px",
      height: "350px",
    },
    "@media (min-width: 1000px)": {
      width: "400px",
      height: "400px",
    },
  };

  return (
    <ImageBox>
      <CardMedia
        component="img"
        image={require("./../../../assets/chefs-imgs/" + args.chef.img)}
        alt="rest-img"
        sx={imgStyle}
      />
      <Typography sx={textStyle}>
        {args.chef.fname + " " + args.chef.lname}
      </Typography>
    </ImageBox>
  );
};
