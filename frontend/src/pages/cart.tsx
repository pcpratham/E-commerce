import { useEffect, useState } from "react";
import { VscError } from "react-icons/vsc";
import CartItem from "../components/cart-item";
import { StorageErrorCode } from "firebase/storage";
import { MdProductionQuantityLimits } from "react-icons/md";
import { Link } from "react-router-dom";

const cartItems = [
  {
    productId: "avdshff",
    photo: "https://m.media-amazon.com/images/I/710TJuHTMhL._SX522_.jpg",
    name: "Macbook",
    price: 400000,
    stock: 15,
    quantity: 4,
  },
];
const subtotal = 4000;
const tax = Math.round(subtotal * 0.18);
const shippingCharges = 200;
const total = subtotal + tax + shippingCharges;
const discount = 400;

const Cart = () => {
  const [couponCode, setCouponCode] = useState<string>("");
  const [isValidCouponCode, setIsValidCouponCode] = useState<boolean>(false);

  useEffect(() => {
    const timeOutID = setTimeout(() => {
      if (Math.random() > 0.5) {
        setIsValidCouponCode(true);
      } else {
        setIsValidCouponCode(false);
      }
    });

    return () => {
      clearTimeout(timeOutID);
      setIsValidCouponCode(false);
    };
  }, [couponCode]);

  return (
    <div className="cart">
      <main>
        {cartItems.length > 0 ? (
          cartItems.map((i, idx) => <CartItem key={idx} cartItem={i} />)
        ) : (
          <h1>No Items Added </h1>
        )}
      </main>
      <aside>
        <p>SubTotal : Rs. {subtotal}</p>
        <p>Shipping Charges : Rs. {shippingCharges}</p>
        <p>Tax : Rs. {tax}</p>
        <p>
          Discount: <em> - Rs.{discount}</em>
        </p>
        <p>
          <b>Total: Rs. {total}</b>
        </p>
        <input
          type="text"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
          placeholder="Coupon Code"
        />

        {couponCode &&
          (isValidCouponCode ? (
            <span className="green">
              Rs. {discount} off using the <code>{couponCode}</code>{" "}
            </span>
          ) : (
            <span className="red">
              Invalid Coupon <VscError />{" "}
            </span>
          ))}

        {cartItems.length > 0 && <Link to="/shipping">Checkout</Link>}
      </aside>
    </div>
  );
};

export default Cart;
