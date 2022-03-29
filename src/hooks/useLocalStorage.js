// https://www.daleseo.com/react-hooks-use-web-storage/

import { useState, useEffect } from 'react';

// 당장은 필요하지 않더라도 재사용이 가능하게끔 짜는 습관 좋은것 같습니다!!
const useLocalStorage = (key, initialState) => {
    // list state 초기화
    const [list, setList] = useState(() => JSON.parse(localStorage.getItem(key)) || initialState);

    // list 상태 변화할 때마다 로컬스토리지 동기화
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(list));
    }, [key, list]);

    return [list, setList];
};

export default useLocalStorage;
