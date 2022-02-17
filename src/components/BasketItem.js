import { useContext } from "react";
import { ShopContext } from "../context";

function BasketItem(props) {
  const { id, name, price, quantity } = props;
  const { incrementQuantity, decrementQuantity, removeFromBasket } =
    useContext(ShopContext);
  return (
    <li className="collection-item" id={id}>
      {name} x{quantity} = {price * quantity} <b>$</b>
      <span className="secondary-content">
        <i
          className="material-icons iconss"
          onClick={() => incrementQuantity(id)}
        >
          add_circle_outline
        </i>
        <i
          className="material-icons iconss"
          onClick={() => decrementQuantity(id)}
        >
          remove_circle_outline
        </i>
        <i
          className="material-icons basket-delete"
          onClick={() => removeFromBasket(id)}
        >
          delete_forever
        </i>
      </span>
    </li>
  );
}

export default BasketItem;
