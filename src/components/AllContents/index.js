import styled from 'styled-components';
import { useEffect, useState } from 'react';

const Index = () => {
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
  useEffect(() => console.log(list), [list]);
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
            <li key={index}>{item.contents}</li>
          ))}
        </ul>
      </DivYetList>
      <DivDoneList>
        <ul></ul>
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
