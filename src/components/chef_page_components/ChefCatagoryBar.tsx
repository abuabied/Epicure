import { Tabs, Tab } from "@mui/material";
import { useState } from "react";
import { NoStyleContainer } from "../shared/helper_components/MyContainers";

export const ChefCatagoryBar = (args: {
  catagoryClickFunctions: {
    all: () => void;
    new: () => void;
    mostViewed: () => void;
  };
}) => {
  const [currentCatagory, setCurrentCatagory] = useState("all");

  const clickAll = () => {
    args.catagoryClickFunctions.all();
    setCurrentCatagory("all");
  };
  const clickNew = () => {
    args.catagoryClickFunctions.new();
    setCurrentCatagory("new");
  };
  const clickMostViewed = () => {
    args.catagoryClickFunctions.mostViewed();
    setCurrentCatagory("mostViewed");
  };

  const tabTextStyle = {
    color: "black",
    fontSize: "18px",
    fontWeight: 200,
    lineHeight: "22px",
    letterSpacing: "2px",
    textAlign: "left",
    padding: 0,
    margin: { xs: "0 0.5rem", sm: "0 2rem", md: "0 4rem" },
    minWidth: 0,
    textTransform: "none",
    "&.Mui-selected": {
      color: "#000000",
      fontWeight: "bold",
      fontSize: "19px",
    },
  };

  return (
    <NoStyleContainer
      style={{
        minWidth: "100%",
        display: "flex",
        alignContent: "center",
        justifyContent: "space-around",
      }}
    >
      <Tabs
        value={currentCatagory}
        centered
        sx={{
          minWidth: { xs: "100%", sm: "70%", md: "60%", lg: "50%" },
          "& .MuiTabs-indicator": {
            backgroundColor: "#ffff",
          },
        }}
      >
        <Tab sx={tabTextStyle} label="All" value="all" onClick={clickAll} />
        <Tab sx={tabTextStyle} label="New" value="new" onClick={clickNew} />
        <Tab
          sx={tabTextStyle}
          label="Most Viewed"
          value="mostViewed"
          onClick={clickMostViewed}
        />
      </Tabs>
    </NoStyleContainer>
  );
};
