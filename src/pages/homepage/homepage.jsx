import React from "react";
import "./homepage.styles.scss";
import DirectoryMenu from "../../components/directory/directory-menu";

const HomePage = () => {
  return (
    <div className="homepage">
      <DirectoryMenu />
    </div>
  );
};

export default HomePage;
