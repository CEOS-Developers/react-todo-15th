// https://www.daleseo.com/react-hooks-use-web-storage/
// useLocalStorage 안에서 list state 초기화와 로컬스토리지 동기화를 담당

import { useState, useEffect } from 'react';

const useLocalStorage = () => {
    const [list, setList] = useState(() => JSON.parse(localStorage.getItem('item')) || []);

    // list 상태 변화할 때마다 로컬스토리지 동기화
    useEffect(() => {
        localStorage.setItem('item', JSON.stringify(list));
    }, [list]);

    return [list, setList];
};

export default useLocalStorage;
