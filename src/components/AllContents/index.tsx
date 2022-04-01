import React, { useEffect, useState } from 'react';
import InputForm from '../InputForm';
import YetList from '../YetList';
import DoneList from '../DoneList';
import { ITodoList } from 'interface';

const Index = () => {
  const listText = 'list';

  const localData = JSON.parse(localStorage.getItem(listText) || '') || [];
  // localDate 를 처음에 가져와서 새로고침해도 데이터가 유지되게 설정

  const [yetNum, setYetNum] = useState(0);
  const [doneNum, setDoneNum] = useState(0);
  const [contents, setContents] = useState('');
  const [list, setList] = useState(localData);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setContents(e.target.value);
  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const obj = {
      contents,
      id: Date.now(),
      isDone: false,
    };
    setList((prev: []) => [...prev, obj]);
    setContents('');
  };
  const onToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    // 클릭된 값

    const text = (e.target as HTMLElement).textContent;
    // 로컬스토리지에 저장된 값
    const data = JSON.parse(localStorage.getItem(listText) || '');
    // 두 값을 이용해서 클릭된 값만 isDone 상태 토글
    let indexClicked = 0;
    let obj;
    data.map((item: ITodoList, index: number) => {
      if (item.contents === text) {
        obj = { ...item };
        obj.isDone = !item.isDone;
        indexClicked = index;
      }
    });
    const updatedDate = [...data];
    updatedDate[indexClicked] = obj;
    setList(updatedDate);
    localStorage.setItem(listText, JSON.stringify(list));
  };
  const onDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    // 클릭된 텍스트 찾기

    const text = (
      (e.target as HTMLElement).parentNode as HTMLElement
    ).innerText.slice(0, -4);

    // 현재 데이터 가져오기
    const data = JSON.parse(localStorage.getItem(listText) || '');

    // 데이터 삭제
    const updatedDate = data.filter((item: ITodoList) => {
      return item.contents.trim() !== text.trim();
    });

    // 데이터 업데이트
    setList(updatedDate);

    localStorage.setItem(listText, JSON.stringify(updatedDate));
  };

  useEffect(() => {
    // 1. 입력 폼으로 할 일 추가
    // 2. toggle 발생
    // 3. 삭제
    // 위 경우에 의해 데이터 변화시 로컬스토리지에 데이터 업데이트
    localStorage.setItem(listText, JSON.stringify(list));
    findNum();
  }, [list]);

  const findNum = () => {
    const data = JSON.parse(localStorage.getItem(listText) || '');
    let yetCtn = 0;
    let doneCtn = 0;

    // isDone === true, false 인 경우에 따라서 개수를 세어 줘야 함
    data.map((item: ITodoList) => {
      if (item.isDone === false) {
        yetCtn += 1;
      } else {
        doneCtn += 1;
      }
    });
    setYetNum(yetCtn);
    setDoneNum(doneCtn);
  };

  return (
    <div>
      <InputForm onSubmit={onSubmit} onChange={onChange} contents={contents} />
      <YetList
        list={list}
        yetNum={yetNum}
        onToggle={onToggle}
        onDelete={onDelete}
      />
      <DoneList list={list} onToggle={onToggle} doneNum={doneNum} />
    </div>
  );
};

export default Index;
