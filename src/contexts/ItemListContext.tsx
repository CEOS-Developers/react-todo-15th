import { createContext, useEffect, useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import { IItem } from '../types/types';

export const ItemListContext = createContext(undefined);

const ItemListProvider = ({ children }) => {
  const { getItemsFromLocalStorage, setItemstoLocalStorage } =
    useLocalStorage();
  const [itemList, setItemList] = useState(getItemsFromLocalStorage() || []);

  const setItemListHandler = (itemList: IItem[]) => {
    setItemList(itemList);
  };

  useEffect(() => {
    setItemstoLocalStorage(itemList);
  }, [itemList, setItemstoLocalStorage]);

  return (
    <ItemListContext.Provider value={{ itemList, setItemListHandler }}>
      {children}
    </ItemListContext.Provider>
  );
};

export default ItemListProvider;
