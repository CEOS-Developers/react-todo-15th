import { Cir1, Cir2, Cir3, Etc, DivTitle, CircleContainer } from './style';

const Index = () => {
  return (
    <DivTitle>
      <CircleContainer>
        <Cir1
          onClick={() => {
            alert('Tab을 닫을까요?');
          }}
        >
          X
        </Cir1>
        <Cir2 />
        <Cir3 />
      </CircleContainer>
      <Etc>⌥⌘1</Etc>
    </DivTitle>
  );
};

export default Index;
