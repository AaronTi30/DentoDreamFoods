import React from "react";
import * as classes from "./style.module.css";

export const ProductPage = () => {
  return (
    <div className={classes["PRODUCT-PAGE"]}>
      <div className={classes.div}>
        <img className={classes.screenshot} alt="Screenshot" src="screenshot-395-2.png" />
        <div className={classes.text}>
          <div className={classes["text-wrapper"]}>“8oz”</div>
          <div className={classes["text-wrapper-2"]}>Signature Garlic Chili Oil</div>
          <p className={classes["ingredients-chili"]}>
            <span className={classes.span}>
              Ingredients: Chili pepper Flakes, Canola Oil, Fried Garlic, Black Beans, Peanuts, Sesame Seeds, Five Spice
              Powder, Sichuan Peppercorn, Spices, Dashida Seasoning.
              <br />
            </span>
            <span className={classes["text-wrapper-3"]}>CONTAINS: PEANUTS &amp; SESAME</span>
          </p>
        </div>
        <div className={classes.CHECKOUT}>
          <div className={classes.overlap}>
            <img className={classes.fire} alt="Fire" src="icons8-fire-96-3.png" />
            <div className={classes["text-wrapper-4"]}>“Mild”</div>
            <img className={classes["icons-fire"]} alt="Fire" src="icons8-fire-96-2.png" />
            <img className={classes.img} alt="Fire" src="icons8-fire-96-1.png" />
            <p className={classes.p}>Please Choose A Spice Level</p>
            <button className={classes["BUY-BUTTON"]}>
              <div className={classes["overlap-group"]}>
                <div className={classes["text-wrapper-5"]}>Add To Cart</div>
              </div>
            </button>
            <img className={classes["fire-2"]} alt="Fire" src="icons8-fire-48-1.png" />
          </div>
        </div>
      </div>
    </div>
  );
};
