import { createContext, useReducer } from "react";
import reducer from "./reducer";

export const ShopContext = createContext();

const initialState = {
  goods: [],
  loading: false,
  order: [],
  isBasketShow: false,
};

export const ContextProvider = ({ children }) => {
  const [value, dispatch] = useReducer(reducer, initialState);

  value.addToBasket = (item) => {
    dispatch({ type: "ADD_TO_BASKET", payload: item });
  };
  value.removeFromBasket = (id) => {
    dispatch({ type: "REMOVE_BASKET", payload: { id: id } });
  };
  value.incrementQuantity = (itemID) => {
    dispatch({ type: "INCREMENT_QUANTITY", payload: { id: itemID } });
  };
  value.decrementQuantity = (itemID) => {
    dispatch({ type: "DECREMENT_QUANTITY", payload: { id: itemID } });
  };

  value.handleBasketShow = () => {
    dispatch({ type: "TOGGLE_BASKET" });
  };

  value.setGoods = (data) => {
    dispatch({ type: "SET_GOODS", payload: data });
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};
