const getLocalValue = (listName = 'list') => {
    const value = localStorage.getItem(listName);

    let localData;
    if (typeof value === 'string') {

        localData = JSON.parse(value);
    }else if(value === null){

        localData = []
    }

    return localData
};

export default getLocalValue;
