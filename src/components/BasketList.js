import BasketItem from "./BasketItem";
import { useContext } from "react";
import { ShopContext } from "../context";

function BasketList() {
  const { order = [], handleBasketShow = Function.prototype } =
    useContext(ShopContext);
  const total = order.reduce((sum, el) => {
    return sum + el.price * el.quantity;
  }, 0);
  return (
    <div className="bsk">
      <ul className="collection basket-list">
        <li className="collection-item active">Basket</li>
        {order.length ? (
          order.map((item) => {
            return <BasketItem key={item.id} {...item} />;
          })
        ) : (
          <li className="collection-item">Basket is empty</li>
        )}
        <li className="collection-item active">Total price: {total}</li>
        <i className="material-icons close_icon" onClick={handleBasketShow}>
          close
        </i>
      </ul>
    </div>
  );
}
export default BasketList;
