import { ChefCatagoryBar } from "../../components/chef_page_components/ChefCatagoryBar";
import { EmptyLine } from "../../components/shared/helper_components/EmptyLines";
import { ColumnContainer } from "../../components/shared/helper_components/MyContainers";
import { PageTitle } from "../../components/shared/helper_components/Texts";

export const Chefs = () => {
  const clickAll = () => {
  };
  const clickNew = () => {
  };
  const clickMostViewed = () => {
  };

  const functions = {
    all: clickAll,
    new: clickNew,
    mostViewed: clickMostViewed,
  };

  return (
    <ColumnContainer>
      <PageTitle title="chefs" />
      <EmptyLine />
      <ChefCatagoryBar catagoryClickFunctions={functions} />
    </ColumnContainer>
  );
};
