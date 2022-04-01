import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

const initialItems = localStorage.getItem("list")
  ? JSON.parse(localStorage.getItem("list"))
  : [];

export const GlobalContext = createContext(initialItems);

export const GlobalProvider = ({ children }) => {
  const [listItems, dispatch] = useReducer(AppReducer, initialItems);

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(listItems));
  }, [listItems]);

  // Actions
  const addItem = (uid, itemType, itemContent) => {
    dispatch({
      type: "ADD",
      payload: { id: uid, type: itemType, content: itemContent },
    });
  };

  const moveItem = (uid) => {
    dispatch({
      type: "MODIFY",
      payload: {
        id: uid,
      },
    });
  };

  const deleteItem = (uid) => {
    dispatch({
      type: "DELETE",
      payload: {
        id: uid,
      },
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        listItems: listItems,
        addItem,
        moveItem,
        deleteItem,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
