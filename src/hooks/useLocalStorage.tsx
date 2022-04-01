import { IItem } from '../types/types';

const useLocalStorage = () => {
  const getItemsFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem('itemList'));
  };

  const setItemstoLocalStorage = (itemList: IItem[]) => {
    return localStorage.setItem('itemList', JSON.stringify(itemList));
  };

  return { getItemsFromLocalStorage, setItemstoLocalStorage };
};

export default useLocalStorage;
