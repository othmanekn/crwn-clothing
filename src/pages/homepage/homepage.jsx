import React from "react";
import { HomePageContainer } from "./homepage.styles.jsx";
import DirectoryMenu from "../../components/directory/directory-menu";

const HomePage = () => {
  return (
    <HomePageContainer>
      <DirectoryMenu />
    </HomePageContainer>
  );
};

export default HomePage;
