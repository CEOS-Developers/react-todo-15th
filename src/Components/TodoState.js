export const getLocalStorage = () => {
    const localItem = localStorage.getItem('item');
    if (localItem) {
        return JSON.parse(localItem);
    } else {
        return [];
    }
};

export const syncLocalStorage = (list) => {
    localStorage.setItem('item', JSON.stringify(list));
};
