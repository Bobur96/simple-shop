import { useContext } from "react";
import { ShopContext } from "../context";

function Cart() {
  const { order, handleBasketShow = Function.prototype } =
    useContext(ShopContext);
  const quantity = order.length;
  return (
    <div className="cart blue darken-3 white-text" onClick={handleBasketShow}>
      <i className="small material-icons">add_shopping_cart</i>
      {quantity ? <span className="cart-quantity">{quantity}</span> : null}
    </div>
  );
}

export default Cart;