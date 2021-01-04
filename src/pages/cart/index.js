import React, { useContext, useState } from "react";
import Swal from "sweetalert2";
import Layout from "../../components/Layout";
import CartProducts from "./CartProducts";
import { CartContext } from "../../contexts/CartContext";
import { formatNumber } from "../../helpers/formatNumber";

const Cart = () => {
  /**
   * Hard Coded Codes
   */
  const [mirrorCode] = useState("6895458");
  const [dishCode] = useState("4856885");
  const [balearesTax] = useState(50);
  /**
   * Promo state
   */
  const [promo, setPromo] = useState("");

  /**
   * On change promoCode
   */
  const [promoCode, setPromoCode] = useState();

  /**
   * City array for select
   */
  const city = [
    {
      city: "Madrid",
    },
    {
      city: "Sevilla",
    },
    {
      city: "Gran Canaria",
    },
    {
      city: "Baleares",
    },
  ];
  /**
   * Selected from option
   */
  const [selectcity, setSelectcity] = useState("");

  /**
   * Coming from CartContext
   */
  const {
    total,
    cartItems,
    itemCount,
    clearCart,
    discountTenPercent,
    discountTwentyPercent,
  } = useContext(CartContext);

  /**
   * Handling the promocode 10% and 20%
   */
  const promoHandler = () => {
    if (promoCode === "6895458") {
      setPromo((total * discountTenPercent) / 100);
      codePopup();
    } else if (promoCode === "4856885") {
      setPromo(total * (discountTwentyPercent / 100));
      codePopup();
    }
  };

  /**
   * Alerts:
   *
   * -Error
   * - Checkout DONE
   * - Discount DONE
   */
  const cityPopupError = () => {
    Swal.fire({
      title: "Error!",
      text: "We can not send your order in to your City",
      icon: "error",
      confirmButtonText: "Ok",
    });
  };
  const cityPopupDone = () => {
    Swal.fire({
      title: "Done!",
      text: "Your product has been sent",
      icon: "success",
      confirmButtonText: "Ok",
    });
  };

  const codePopup = () => {
    Swal.fire({
      title: "Done!",
      text: "Your discount has been applied",
      icon: "success",
      confirmButtonText: "Ok",
    });
  };

  const baleares = total - promo;

  return (
    <Layout title="Cart" description="This is the Cart page">
      <div>
        <div className="text-center mt-5 ">
          <h1>Cart</h1>
        </div>
        <div className="row  justify-content-center">
          <div className="col-sm-9 p-3">
            {cartItems.length > 0 ? (
              <CartProducts />
            ) : (
              <div className="p-3 text-center text-muted">
                Your cart is empty
              </div>
            )}
          </div>
          {cartItems.length > 0 && (
            <div className="col-sm-3 p-3">
              <div className="card card-body">
                <p className="mb-1">Promo Code 10% Off</p>
                <h4 className=" mb-3 txt-right">{mirrorCode}</h4>
                <p className="mb-1">Promo Code 20% Off</p>
                <h4 className=" mb-3 txt-right">{dishCode}</h4>
                <p className="mb-1">Total Items</p>
                <h4 className=" mb-3 txt-right">{itemCount}</h4>
                <p className="mb-1">Total Payment</p>
                <h3 className="m-0 txt-right">
                  {promo !== ""
                    ? formatNumber(total - promo)
                    : formatNumber(total)}
                </h3>
                {selectcity === "Baleares" && (
                  <>
                    <p>Shipping costs + 50€</p>
                    <h3>{formatNumber(baleares + balearesTax)}</h3>
                  </>
                )}
                <hr className="my-4" />
                <p className="mb-1">Choose your city: </p>
                <select
                  className="mt-1"
                  onChange={(e) => setSelectcity(e.target.value)}
                >
                  <option hidden>Select...</option>
                  {city.map((el, i) => (
                    <option value={el.city} key={i}>
                      {el.city}
                    </option>
                  ))}
                </select>
                <hr className="my-4" />
                <div className="text-center">
                  <label>Promo Code</label>
                  <input
                    type="text"
                    name="promoCode"
                    className="input-sm"
                    value={promoCode || ""}
                    onChange={(e) => setPromoCode(e.target.value)}
                  />
                  <button
                    type="button"
                    className="btn btn-primary mb-2 mt-2"
                    onClick={() => promoHandler()}
                  >
                    Apply Code
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary mb-2"
                    onClick={() => {
                      selectcity === "Gran Canaria"
                        ? cityPopupError()
                        : cityPopupDone();
                    }}
                  >
                    CHECKOUT
                  </button>
                  <button
                    type="button"
                    className="btn btn-outlineprimary btn-sm text-muted"
                    onClick={clearCart}
                  >
                    CLEAR
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
