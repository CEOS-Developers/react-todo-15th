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

>  배포 링크는 다음과 같습니다. https://react-todo-15th-six.vercel.app/
>
>  '생활코딩 리액트 2022년 개정판', '노마드코더 ReactJS로 영화 웹 서비스 만들기' 강의를 수강하고 리액트의 기본에 대해 이해했습니다. 이후 리액트 공식문서와 '벨로퍼트와 함께하는 모던 리액트' 문서를 참고하며 과제를 진행했습니다. 양질의 학습자료를 추천해주신 현재님, 주현님 정말정말 감사합니다 🙌 
>
>  이번 과제는 코드리뷰 파트너였던 규진님의 코드를 참고하며 UI를 개선해 봤습니다. 시간이 부족해 미처 구현하지 못했지만, 삽입했던 todo의 텍스트 내용 업데이트 기능과 Context API를 활용한 상태관리를 적용한 코드로 리팩토링 해보고 싶다고 생각했습니다.
>

### Virtual-DOM은 무엇이고, 이를 사용함으로서 얻는 이점은 무엇인가요?

**DOM은 HTML과 자바스크립트를 이어주는 공간으로, 내가 작성한 HTML을 자바스크립트가 이해할 수 있도록 객체(object)로 변환**하는 것이다.

브라우저가 HTML을 전달 받으면, 곧 이를 변환(파싱)하고 노드들로 이루어진 DOM 트리를 만든다. 그 후, 외부의 CSS 파일과 각 노드들의 inline 스타일을 파싱하여 스타일을 입힌 Render 트리를 만든다. Render 트리가 만들이지면, 각 노드들이 화면에서 정확히 어디에 나타나야 하는지에 대한 위치가 주어진다. 그 후, paint() 메서드를 호출하면 내가 구현하고 싶었던 화면이 출력된다.

DOM은 해당 과정을 계속 반복한다. 즉, 오타 수정, 문구 제거 혹은 이미지를 첨부하는 사소한 일을 하더라도, DOM은 처음부터 다시 HTML을 파싱하여 DOM 트리를 만들고 CSS를 파싱하여 Render 트리를 만들고, 레이아웃을 입혀 출력한다. 이로인해 발생하는 비효율을 개선하기 위해 Virtual Dom이 제시되었다.

Virtual Dom은 수정사항이 여러 가지 있더라도, 가상 DOM은 한 번만 렌더링을 일으킨다. Virtual DOM은 DOM이 생성되기 전, 이전 상태 값과 수정사항을 비교하여 달라진 부분만 DOM에게 한 번에 전달하여 **딱 한 번만 렌더링**을 진행하는 기술이다. [Reference](https://www.howdy-mj.me/dom/what-is-dom/)

### 미션을 진행하면서 느낀, React를 사용함으로서 얻을수 있는 장점은 무엇이었나요?

리액트를 공부하고, 과제를 하며 느낀점을 한문장으로 요약하면 '리액트의 이름이 왜 리액트인지 알게되었다.' 입니다. JS의 방식에 비해 리액트의 방식은 JSX를 통해 JS와 CSS를 컴포넌트 단위로 분할하여 객체지향 프로그래밍의 장점을 극대화할 수 있는것 같습니다. 또한, props 객체를 통해 이벤트 과정을 처리를 간결하게 할 수 있으며, state를 통해 데이터가 변경될 때 마다 컴포넌트를 특히 변경된 부분만 리렌더링 하고 UI를 refresh하여, 해당 과정을 효율적으로 처리할 수있는것 같습니다. 결과적으로 리액트를 통해 사용자와의 인터렉션을 간결하고 우아하게 처리할 수 있기에 리액트가 지금과 같은 위치로 발전할 수 있었던것 같습니다.

### React에서 상태란 무엇이고 어떻게 관리할 수 있을까요?

React 컴포넌트는 상태 값을 이용해 UI를 표현한다. 컴포넌트 상태는 객체의 인스턴스 속성(Properties)을 이용해 관리하며, 컴포넌트간에 단방향으로 데이터를 주고받는 `props`와 컴포넌트 내부에서 사용하는 `state`가 있다.

`props`는 컴포넌트에서 사용할 데이터 중 변경되지 않는 데이터를 다룰때 사용한다. 부모 컴포넌트에서 자식 컴포넌트로 데이터를 전달할 때 사용된다. **`props`는 변경이 불가능하다.**

컴포넌트에서 관리하는 상태 값으로 유동적인 데이터를 다룰 때, `state` 를 사용한다. **`state`는 변경이 가능하고** 변경할 때는 `setState`메서드를 사용해 상태를 변경한다. `setState`는 비동기로 동작하며 동작완료에 대한 콜백을 설정할 수 있다. [Reference](https://velog.io/@kyusung/%EB%A6%AC%EC%95%A1%ED%8A%B8-%EA%B5%90%EA%B3%BC%EC%84%9C-React-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8%EC%99%80-%EC%83%81%ED%83%9C-%EA%B0%9D%EC%B2%B4)

### Styled-Components 사용 후기 (CSS와 비교)

**styled-components**는 style이 적용된 Component를 직접 생성하기 때문에, 스타일링을 위한 코드 사용량이 줄어드는 효과가 있습니다. 또 key value의 형태가 아닌 css의 문법을 그대로 사용하기 때문에 기존 css의 사용법보다 **가독성**도 높습니다. [Reference](https://dkje.github.io/2020/10/13/StyledComponents/)

(미션 목표에 'Styled-Components를 통한 CSS-in-JS 및 CSS Preprocessor의 사용법을 익힙니다.'가 있는걸 깜빡해서 해당 기능을 사용하지 않고 과제를 진행해버렸네요,, 따로 공부해서 리팩토링 해보도록 하겠습니다. 😅)

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