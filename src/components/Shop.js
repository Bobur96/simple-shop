import { useEffect, useContext } from "react";
import { API_KEY, API_URL } from "../config";
import { ShopContext } from "../context";
import BasketList from "./BasketList";
import Cart from "./Cart";
import GoodList from "./GoodList";
import Loader from "./Loader";

function Shop() {
  const { setGoods, loading, order, isBasketShow } = useContext(ShopContext);

  useEffect(() => {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => setGoods(data.featured));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container content">
      <Cart quantity={order.length} />
      {loading ? <Loader /> : <GoodList />}
      {isBasketShow && <BasketList />}
    </div>
  );
}
export default Shop;

//  ESKI USUL
// import React, { useState, useEffect } from "react";
// import { toast } from "react-toastify";
// import { API_KEY, API_URL } from "../config";
// import BasketList from "./BasketList";
// import Cart from "./Cart";
// import GoodList from "./GoodList";
// import Loader from "./Loader";

// function Shop() {
//   const [goods, setGoods] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [order, setOrder] = useState([]);
//   const [isBasketShow, setIsBasketShow] = useState(false);

//   const addToBasket = (item) => {
//     const itemIndex = order.findIndex((orderItem) => orderItem.id === item.id);
//     if (itemIndex < 0) {
//       const newItem = {
//         ...item,
//         quantity: 1,
//       };

//       setOrder([...order, newItem]);
//     } else {
//       const newOrder = order.map((orderItem, index) => {
//         if (index === itemIndex) {
//           return {
//             ...orderItem,
//             quantity: orderItem.quantity + 1,
//           };
//         } else {
//           return orderItem;
//         }
//       });
//       setOrder(newOrder);
//     }
//     toast.success("Goods added to Basket succussfully");
//   };

//   useEffect(() => {
//     fetch(API_URL, {
//       headers: {
//         Authorization: API_KEY,
//       },
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         data.featured && setGoods(data.featured);
//         setLoading(false);
//       });
//   }, []);

//   const handleBasketShow = () => {
//     setIsBasketShow(!isBasketShow);
//   };

//   const removeFromBasket = (id) => {
//     const newOrder = order.filter((item) => item.id !== id);
//     setOrder(newOrder);
//     toast.error("Goods deleted from Baskets successfully");
//   };

//   const incrementQuantity = (itemID) => {
//     const newOrder = order.map((el) => {
//       if (el.id === itemID) {
//         const newQuantity = el.quantity + 1;
//         return {
//           ...el,
//           quantity: newQuantity,
//         };
//       } else {
//         return el;
//       }
//     });
//     setOrder(newOrder);
//   };

//   const decrementQuantity = (itemID) => {
//     const newOrder = order.map((el) => {
//       if (el.id === itemID) {
//         const newQuantity = el.quantity - 1;
//         return {
//           ...el,
//           quantity: newQuantity >= 0 ? newQuantity : 0,
//         };
//       } else {
//         return el;
//       }
//     });
//     setOrder(newOrder);
//   };

//   return (
//     <div className="container content">
//       <Cart quantity={order.length} handleBasketShow={handleBasketShow} />
//       {loading ? (
//         <Loader />
//       ) : (
//         <GoodList goods={goods} addToBasket={addToBasket} />
//       )}
//       {isBasketShow && (
//         <BasketList
//           order={order}
//           handleBasketShow={handleBasketShow}
//           removeFromBasket={removeFromBasket}
//           incrementQuantity={incrementQuantity}
//           decrementQuantity={decrementQuantity}
//         />
//       )}
//     </div>
//   );
// }

// export default Shop;
