# 1. Mission

### **[2주차 미션 공지]**

* 깃허브 주소: [깃헙 레포](https://github.com/CEOS-Developers/react-todo-15th)

* 마감 기한: 2022년 3월 25일(금) 자정 까지

### **[2주차 공부자료]**

- **필수**

1. [create react app (CRA)](https://create-react-app.dev/docs/getting-started/)
2. [리액트 docs 주요 개념 1-12](https://ko.reactjs.org/docs/hello-world.html)
3.  [리액트 docs Hook 1-3](https://ko.reactjs.org/docs/hooks-intro.html)
4.  [styled-component](https://styled-components.com/docs/basics#getting-started)
5. [컴포넌트 네이밍을 위한 자바스크립트 네이밍 컨벤션](https://velog.io/@cada/자바스크립트-스타일-가이드-네이밍-컨벤션-편)
6. [useEffect 완벽 가이드](https://overreacted.io/ko/a-complete-guide-to-useeffect/)

- 참고자료

1. useState Hook(영어): https://daveceddia.com/usestate-hook-examples/
2. HOOK 코드스쿼드(유튜브) : https://youtu.be/y52Av3JxNW4
3. 생활코딩 리액트 강의 : https://opentutorials.org/module/4058
4. [ReactJS로 영화 웹 서비스 만들기](https://nomadcoders.co/react-fundamentals)
5. [생활코딩 리액트 2022년 개정판](https://www.youtube.com/watch?v=AoMv0SIjZL8&list=PLuHgQVnccGMCOGstdDZvH41x0Vtvwyxu7)
6. [벨로퍼트와 함께하는 모던 리액트](https://react.vlpt.us/)

<br>

# 2. Key Question (PR)

>  일주일 동안 인프런 강의를 통해 HTML, CSS, JS 문법에 대해 숙지한 후 과제를 진행했습니다. 직접 코드를 작성해보며 flex box 등 레이아웃 배치에 대해 감을 잡게 되었습니다. 다음 프로젝트를 할 때는 container 구조 등 레이아웃 전반에 대한 계획을 먼저 세우고 코드를 작성하면 구조적으로 좋은 코드를 작성할 수 있을것 같다고 생각했습니다. javascript의 경우 주현님의 코드들 많이 참고했습니다. DOM을 통한 여러 element 제어 메서드 사용이 익숙치 않아 해당 부분을 연습해야 겠다고 생각했습니다. 기초 공부를 하다보면 아무래도 HTML, CSS, JS 각각에 대해 개별적으로 학습을 하게 되는데 이들이 어떻게 하나의 프로젝트에 적용되는지 연습할 수 있는 좋은 과제였던것 같습니다. 배포링크는 다음과 같습니다. https://vanilla-todo-15th-24siefil.vercel.app/

### Virtual-DOM은 무엇이고, 이를 사용함으로서 얻는 이점은 무엇인가요?

React DOM은 해당 엘리먼트와 그 자식 엘리먼트를 이전의 엘리먼트와 비교하고 DOM을 원하는 상태로 만드는데 필요한 경우에만 DOM을 업데이트합니다. 매초 전체 UI를 다시 그리도록 엘리먼트를 만들었지만 React DOM은 내용이 변경된 텍스트 노드만 업데이트했습니다.

경험에 비추어 볼 때 특정 시점에 UI가 어떻게 보일지 고민하는 이런 접근법은 시간의 변화에 따라 UI가 어떻게 변화할지 고민하는 것보다 더 많은 수의 버그를 없앨 수 있습니다.



UI 일부가 여러 번 사용되거나 (`Button`, `Panel`, `Avatar`), UI 일부가 자체적으로 복잡한 (`App`, `FeedStory`, `Comment`) 경우에는 별도의 컴포넌트로 만드는 게 좋습니다.



**모든 React 컴포넌트는 자신의 props를 다룰 때 반드시 순수 함수처럼 동작해야 합니다.**React 컴포넌트는 state를 통해 위 규칙을 위반하지 않고 사용자 액션, 네트워크 응답 및 다른 요소에 대한 응답으로 시간에 따라 자신의 출력값을 변경할 수 있습니다.

State는 props와 유사하지만, 비공개이며 컴포넌트에 의해 완전히 제어됩니다.

### 미션을 진행하면서 느낀, React를 사용함으로서 얻을수 있는 장점은 무엇이었나요?

### React에서 상태란 무엇이고 어떻게 관리할 수 있을까요?



직접 State를 수정하지 마세요

State 업데이트는 비동기적일 수도 있습니다.



### Styled-Components 사용 후기 (CSS와 비교)

<br>

# Reference

### importing React 와 JSX 사용의 상관관계

https://hwani.dev/import-react/

### React icons

https://react-icons.github.io/react-icons/

### How can I interpolate JSX with an expression in a string?

https://stackoverflow.com/questions/30372538/how-can-i-interpolate-jsx-with-an-expression-in-a-string

### React className naming convention

https://stackoverflow.com/questions/57221878/react-classname-naming-convention 