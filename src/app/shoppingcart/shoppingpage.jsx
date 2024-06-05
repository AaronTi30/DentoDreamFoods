import React from "react";
import * as classes from "./shoppingpage.module.css";

export const ShoppingCartPage = () => {
  return (
    <div className={classes["SHOPPINGCART-PAGE"]}>
      <div className={classes.div}>
        <div className={classes.product}>
          <div className={classes.overlap}>
            <div className={classes["text-wrapper"]}>1</div>
            <div className={classes["text-wrapper-2"]}>+</div>
            <div className={classes["text-wrapper-3"]}>-</div>
            <div className={classes["text-wrapper-4"]}>12.00$</div>
            <div className={classes["text-wrapper-5"]}>Signature Garlic Chili Oil</div>
            <div className={classes["text-wrapper-6"]}>4oz</div>
            <button className={classes["update-button"]}>
              <div className={classes["overlap-group"]}>
                <img className={classes.rectangle} alt="Rectangle" src="rectangle-37.svg" />
                <div className={classes["text-wrapper-7"]}>UPDATE</div>
              </div>
            </button>
            <img className={classes.cancel} alt="Cancel" src="../components/images/icons8-cancel-50.png" />
            <img className={classes.screenshot} alt="Screenshot" src="../components/images/Screenshot_394.png" />
          </div>
        </div>
        <div className={classes.subtotal}>
          <div className={classes.CHECKOUT}>
            <div className={classes["overlap-2"]}>
              <div className={classes["text-wrapper-8"]}>SUBTOTAL -</div>
              <div className={classes["text-wrapper-9"]}>36.00$</div>
              <div className={classes["BUY-BUTTON"]}>
                <div className={classes["div-wrapper"]}>
                  <div className={classes["text-wrapper-10"]}>Proceed To Checkout</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartPage