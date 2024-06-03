import React from "react";
import * as classes from "./homepage.module.css";

export default function StorePage() {
  return (
    <div className={classes["STORE-PAGE"]}>
      <div className={classes.div}>
        <div className={classes.element}>
          <img className={classes.screenshot} alt="8oz" src="./components/images/Screenshot_394.png" />
          <div className={classes.text}>
            <div className={classes["text-wrapper"]}>“4oz”</div>
            <div className={classes["text-wrapper-2"]}>Signature Garlic Chili Oil</div>
            <div className={classes["text-wrapper-3"]}>$12.00</div>
          </div>
        </div>
      </div>
      <div className={classes.div}>
        <div className={classes.element}>
          <img className={classes.screenshot} alt="8oz" src="./components/images/Screenshot_394.png" />
          <div className={classes.text}>
            <div className={classes["text-wrapper"]}>“8oz”</div>
            <div className={classes["text-wrapper-2"]}>Signature Garlic Chili Oil</div>
            <div className={classes["text-wrapper-3"]}>$25.00</div>
          </div>
        </div>
      </div>
      <div className={classes.div}>
      <div className={classes.element}>
        <img className={classes.screenshot} alt="8oz" src="./components/images/Screenshot_394.png" />
        <div className={classes.text}>
          <div className={classes["text-wrapper"]}>“16oz”</div>
          <div className={classes["text-wrapper-2"]}>Signature Garlic Chili Oil</div>
          <div className={classes["text-wrapper-3"]}>$35.00</div>
        </div>
      </div>
    </div>
  </div>
  );
};
