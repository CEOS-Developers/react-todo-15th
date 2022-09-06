안녕하세요! CEOS 프론트 15기 김채림입니다. 타입스크립트를 제대로 사용해본 적이 처음이라 수 많은 빨간 줄을 봤던 한 주였습니다.. 😇 
공부 의지를 불태워주네요..ㅎㅎ...


💻 **배포링크** </br>
https://chaaerim.github.io/react-todo-15th/
+vercel 오류를 해결하지 못해서 일단 깃허브로 배포했습니다..  vercel에서 빌드는 되었는데 화면에 아무것도 보이지 않아요..^^
typescript를 -g로 설치하지 않은 것이 문제같아서 몇 번이나 삭제하고 다시 설치했는데....아직 해결을 못했습니다......🥲
</br>

📗 **수정한 내용** </br>
크게 추가한 내용은 없지만 2주차 코드리뷰 반영, 중복제거를 위해 노력했습니다. 원래 TodoLists 컴포넌트 내부에 TodoItem을 중복해서 사용하는 부분이 있어 중복되는 부분을 다른 컴포넌트로 만들까 하다가 컴포넌트의 개수만 너무 많아지는 것 같아 기존에 있는 TodoLists를 활용하는 방향으로 수정해보았습니다. 

</br>

✏️**어려웠던 부분** </br>
타입스크립트로 변환하는데 생각보다 시간이 오래걸렸습니다 ..ㅎ 분명 tsc로 컴파일하고 npm start로 빌드했을 때는 오류가 없었는데 화면에는 백지 밖에 보이지 않는 속 터지는 상황이 발생했습니다. 
개발자 도구를 확인해보니 `Uncaught SyntaxError: Unexpected token '<'`라는 에러 메세지가 떠서 package.json에서 원래 있던 homepage 값을 삭제하고   `"homepage": “.”`로 바꿨더니 해결이 되긴 했는데 저도 어떤 부분에서 에러가 발생한 건지, 어떻게 해결한 건지 감이 안잡혀요.. 혹시 이 부분에 대해서 아시는 분 계신다면 조언 부탁드립니다! 

그리고 아직 hooks에 대한 이해도 부족한 것 같습니다..`useInput`을 만들고 커스텀 훅을 하나 더 만들어보고 싶어서 `useAddTodo`를 만들어보긴 했는데 과연 제가 만든 것을 hook이라고 할 수 있는지 잘 모르겠습니다. 그냥 기존의 코드를 옮겨 붙여넣기만 한 것 같아서 만들면서도 찝찝한 기분이 들었는데 이 부분에 대해서도 코드리뷰 많이 남겨주시면 감사하겠습니다. 

</br>

😅 **아쉬운 부분** </br>
Context API 적용을 추천한다는 코멘트를 마무리 하고 나서 확인해 Context API를 사용해보지 못한 것이 아쉽습니다. 주말 동안 다시 공부해서 적용할 수 있도록 해봐야겠어요! 
+커밋메세지도 너무 큰 단위로 작성한 것 같아 아쉽네요ㅠ 
