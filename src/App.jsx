import logo from "./logo.svg";
import "./App.css";
import { Title } from "./Title";
import React from "react";

// 0. 오늘은 Create React App 을 통해 개발자 생산성을 높이는 방법에 대해서 집중해서 알아볼 예정이다.
// 1. JSX 설명을 하기 위함. (JSX 는 JavaScript XML 의 약자로, JavaScript 안에서 XML 형식의 코드를 작성할 수 있게 해주는 문법이다.) JSX를 사용하면 사용자가 컴포넌트를 더 쉽게 만들 수 있다. (훨씬 리더블하고 코드 파악이 용이하기 때문)
// 2. JSX 외에도 생산성을 높이기 위한 여러 방법들이 존재한다. (오늘 크게 2개를 소개하고 끝낼 예정)
// 3. Typescript
// 4. ESLint

function App() {
  //  Create React createElement
  return (
    <div className="App">
      <header className="App-header">
        <Title />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
