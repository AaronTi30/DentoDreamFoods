import React from "react";
import * as classes from "./homepage.module.css";

export default function StorePage() {
  return (
    <div className={classes["STORE-PAGE"]}>
      <div className={classes.div}>
        <div className={classes.element}>
          <img className={classes.screenshot} alt="8oz" src="./components/images/Screenshot_394.png" />
          <div className={classes.text}>
            <div className={classes["text-wrapper"]}>“8oz”</div>
            <div className={classes["text-wrapper-2"]}>Signature Garlic Chili Oil</div>
            <div className={classes["text-wrapper-3"]}>$20.00</div>
          </div>
        </div>
        <div className={classes["element-oz"]}>
          <div className={classes["overlap-group"]}>
            <div className={classes.text-2}>
              <div className={classes["text-wrapper-2"]}>“16oz”</div>
              <div className={classes["text-wrapper-3"]}>Signature Garlic Chili Oil</div>
            </div>
            <img className={classes.img} alt="16oz" src="./components/images/Screenshot_395.png" />
            <div className={classes["text-wrapper-4"]}>$30.00</div>
          </div>
        </div>
        <div className={classes["overlap-wrapper"]}>
          <div className={classes["overlap-group"]}>
            <img className={classes["screenshot-2"]} alt="32oz" src="./components/images/Screenshot_396.png" />
            <div className={classes.text-2}>
              <div className={classes["text-wrapper-2"]}>“32oz”</div>
              <div className={classes["text-wrapper-3"]}>Signature Garlic Chili Oil</div>
            </div>
            <div className={classes["text-wrapper-4"]}>$35.00</div>
          </div>
        </div>
      </div>
    </div>
  );
};
