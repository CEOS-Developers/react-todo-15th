import styled from 'styled-components';
import { useEffect, useState } from 'react';

const Index = () => {
  const listText = 'list';
  // 텍스트 이름과 변수 이름을 같게하면 좋을 것 같다는 피드백을 받았던 거 같은데
  // list 를 다른 변수에 사용해 버렸음. 변수 이름 정하는 센스를 더 길러야 겠음

  const [isDone, setIsDone] = useState(false);
  const [contents, setContents] = useState('');
  const [list, setList] = useState([]);
  const onChange = (e) => setContents(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    const obj = {
      contents,
      id: Date.now(),
      isDone: false,
    };
    setList((prev) => [obj, ...list]);
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
        // switch default 처럼 if 를 쓰면 else 도 써주는 게 좋다는 코멘트를 봤던 거 같은데
        // 그럴 경우 여긴 뭘 좋을까요?
      }
    });
    const updatedDate = [...data];
    updatedDate[indexClicked] = obj;
    setList(updatedDate);
    localStorage.setItem(listText, JSON.stringify(list));
  };

  useEffect(() => {
    localStorage.setItem(listText, JSON.stringify(list));
  }, [list]);

  return (
    <div>
      <DivTitle>
        <h1>투두리스트</h1>
      </DivTitle>
      <DivInputForm>
        <form onSubmit={onSubmit} action="">
          <input required onChange={onChange} value={contents} type="text" />
          <button>+</button>
        </form>
      </DivInputForm>
      <DivYetList>
        <ul>
          {list.map((item, index) => (
            <div key={index}>
              {!item.isDone ? (
                <button onClick={onToggle}>{item.contents}</button>
              ) : null}
            </div>
          ))}
        </ul>
      </DivYetList>
      <DivDoneList>
        <ul>
          {list.map((item, index) => (
            <div key={index}>
              {item.isDone ? (
                <button onClick={onToggle}>{item.contents}</button>
              ) : null}
            </div>
          ))}
        </ul>
      </DivDoneList>
    </div>
  );
};

const DivTitle = styled.div`
  border: 2px solid lightskyblue;
  margin-bottom: 10px;
`;
const DivInputForm = styled.div`
  border: 2px solid blue;
  margin-bottom: 10px;
`;
const DivYetList = styled.div`
  border: 2px solid olivedrab;
  margin-bottom: 10px;
`;
const DivDoneList = styled.div`
  border: 2px solid indianred;
  margin-bottom: 10px;
`;

export default Index;
