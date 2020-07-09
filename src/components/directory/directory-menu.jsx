import React from "react";
import MenuItem from "../menu-item/menu-item";

import "./directory-menu.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "../../redux/directory/directory-selectors";

const DirectoryMenu = ({ sections }) => {
  const items = sections.map((section) => {
    return (
      <MenuItem
        key={section.id}
        title={section.title}
        imageUrl={section.imageUrl}
        size={section.size}
        linkUrl={section.linkUrl}
      />
    );
  });

  return <div className="directory-menu">{items}</div>;
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(DirectoryMenu);
