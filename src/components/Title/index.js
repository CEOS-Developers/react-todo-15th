import { Cir1, Cir2, Cir3, Etc, DivTitle } from './style';
import { useState } from 'react';

const Index = () => {
  const useConfirm = (message, deleteConfirm, cancelConfirm) => {
    if (!deleteConfirm || typeof deleteConfirm !== 'function') {
      return;
    }
    if (cancelConfirm && typeof cancelConfirm !== 'function') {
      return;
    }

    const confirmAction = () => {
      if (window.confirm(message)) {
        deleteConfirm();
      } else {
        cancelConfirm();
      }
    };

    return confirmAction;
  };

  const deleteConfirm = () => {
    alert('windon.close() 오류나서 일단 포기ㅠ');
    window.close();
  };
  const cancelConfirm = () => null;

  return (
    <DivTitle>
      <div style={{ display: 'flex' }}>
        <Cir1
          onClick={useConfirm('Tab을 닫을까요?', deleteConfirm, cancelConfirm)}
        >
          X
        </Cir1>
        <Cir2 />
        <Cir3 />
      </div>
      <Etc>⌥⌘1</Etc>
    </DivTitle>
  );
};

export default Index;
