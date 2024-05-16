import React from "react";
import * as classes from "./navbar.module.css";

export const Navbar = () => {
  return (
    <div className={classes.box}>
      <div className={classes["NAV-BAR-WHITE"]}>
        <div className={classes["NAV-BAR-WHITE-TEXT"]}>
          <div className={classes["text-wrapper"]}>LOGO</div>
        </div>
      </div>
    </div>
  );
};
