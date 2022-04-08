import React, { createContext, useReducer, useEffect, ReactNode, Dispatch } from "react";

import AppReducer from "./AppReducer";
import {Item, ItemType, State, Action} from "../Objects"

const initialItems: State = JSON.parse(localStorage.getItem("list") || "[]");
//  JSON.parse는 string을 인자로 받으나 localStorage의 리턴 타입은 string or null 이므로 ""을 추가한다

type DispatchType = Dispatch<Action>

export const StateContext = createContext<State>(initialItems);
export const DispatchContext = createContext<DispatchType>(()=>null);

export const GlobalProvider = ({children}:{ children: ReactNode }) => {
  const [listItems, dispatch] = useReducer(AppReducer, initialItems);

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(listItems));
  }, [listItems]);

  return (
    <StateContext.Provider value={listItems}>
      <DispatchContext.Provider value={dispatch}>
      {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
};