import React from "react";
import MenuItem from "../menu-item/menu-item";
import { sections } from "./directory.data";

import "./directory-menu.scss";

class DirectoryMenu extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: sections,
    };
  }

  render() {
    const items = this.state.sections.map((section) => {
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
  }
}

export default DirectoryMenu;
