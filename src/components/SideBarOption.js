import React from "react";
import { useState } from "react";
import "./SideBarOption.css";

function SidebarOption({ text, Icon, onPress }) {
  return (
    <div className="sidebarOption">
      <Icon />
      <h2>{text}</h2>
    </div>
  );
}

export default SidebarOption;
