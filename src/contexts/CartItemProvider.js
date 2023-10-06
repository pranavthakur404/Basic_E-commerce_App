import { type } from "@testing-library/user-event/dist/type";
import { createContext, useContext, useReducer } from "react";

const cartContext = createContext();

function CartItemProvider({ children }) {
  function reducer(cartList, action) {
    if (action.type == "ADD") {
      return [...cartList, action.payload];
    }

    if (action.type == "INC_QUANT") {
      return cartList.map((list) => {
        return { ...list, quantity: list.quantity + 1 };
      });
    }

    if (type == "DEC_QUANT") {
      return cartList.map((list) => {
        if (list.quantity > 1) {
          return { ...list, quantity: list.quantity - 1 };
        } else {
          return { ...list };
        }
      });
    }

    if (action.type == "DEL") {
      return cartList.filter((list) => {
        return list.id !== action.payload;
      });
    }

    return cartList;
  }
  const [cartList, dispatch] = useReducer(reducer, []);

  function addItem(newItem) {
    dispatch({ type: "ADD", payload: newItem });
  }

  function increaseQuantity(id) {
    dispatch({ type: "INC_QUANT", payload: id });
  }
  function decreaseQuantity(id) {
    dispatch({ type: "DEC_QUANT", payload: id });
  }
  function deleteItem(id) {
    dispatch({ type: "DEL", payload: id });
  }

  return (
    <cartContext.Provider
      value={{
        addItem,
        cartList,
        increaseQuantity,
        decreaseQuantity,
        deleteItem,
      }}
    >
      {children}
    </cartContext.Provider>
  );
}

export function useCartContext() {
  return useContext(cartContext);
}

export default CartItemProvider;
