export const getLocalStorage = () => {
    const localItem = localStorage.getItem('item');
    if (localItem) {
        return JSON.parse(localItem);
    } else {
        return [];
    }
};

export const syncLocalStorage = (list) => {
    console.log(list);
    localStorage.setItem('item', JSON.stringify(list));
};
