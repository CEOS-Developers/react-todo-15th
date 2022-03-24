import styled from 'styled-components';
import { useEffect, useState } from 'react';

import Title from '../Title';
import InputForm from '../InputForm';
import YetList from '../YetList';
import DoneList from '../DoneList';

const Index = () => {
  const listText = 'list';
  // 텍스트 이름과 변수 이름을 같게하면 좋을 것 같다는 피드백을 받았던 거 같은데
  // list 를 다른 변수에 사용해 버렸음. 변수 이름 정하는 센스를 더 길러야 겠음

  const localData = JSON.parse(localStorage.getItem(listText)) || [];
  // localDate 를 처음에 가져와서 새로고침해도 데이터가 유지되게 설정

  const [yetNum, setYetNum] = useState(0);
  const [doneNum, setDoneNum] = useState(0);
  const [contents, setContents] = useState('');
  const [list, setList] = useState(localData);
  const onChange = (e) => setContents(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    const obj = {
      contents,
      id: Date.now(),
      isDone: false,
    };
    setList((prev) => [...prev, obj]);
    setContents('');
  };
  const onToggle = (e) => {
    // 클릭된 값
    const text = e.target.textContent;
    // 로컬스토리지에 저장된 값
    const data = JSON.parse(localStorage.getItem(listText));
    // 두 값을 이용해서 클릭된 값만 isDone 상태 토글
    let indexClicked = 0;
    let obj;
    data.map((item, index) => {
      if (item.contents === text) {
        obj = { ...item };
        obj.isDone = !item.isDone;
        indexClicked = index;
      } else {
        // switch 에서 default 값 처럼 if 를 쓰면 else 도 써주는 게 좋다는 코멘트를 봤던 거 같은데
        // 그럴 경우 여긴 뭘 넣어야 좋을까요?
        // null ???!
      }
    });
    const updatedDate = [...data];
    updatedDate[indexClicked] = obj;
    setList(updatedDate);
    localStorage.setItem(listText, JSON.stringify(list));
  };
  const onDelete = (e) => {
    // 클릭된 텍스트 찾기
    const text = e.target.parentNode.innerText.slice(0, -2);
    // 현재 데이터 가져오기
    const data = JSON.parse(localStorage.getItem(listText));
    console.log('text :', text);
    console.log('data :', data);
    // 데이터 삭제
    const updatedDate = data.filter((item) => item.contents !== text);
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
    const data = JSON.parse(localStorage.getItem(listText));
    let yetCtn = 0;
    let doneCtn = 0;

    // isDone === true, false 인 경우에 따라서 개수를 세어 줘야 함
    data.map((item) => {
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
      <Title />
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
