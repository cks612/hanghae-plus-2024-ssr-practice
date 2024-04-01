import logo from "./logo.svg";
import "./App.css";
import MetaTag from "./common/MetaTag";

function App() {
  return (
    <div className="App">
      <MetaTag
        title={"Voyage React"}
        metaTitle={"Welcome to Voyage React"}
        description={"항해하는 개발자의 오신걸 환영합니다"}
        url={"https://voyage-dev.tistory.com/"}
        image={
          "https://orchid-wolfberry-ce6.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fae3de2c1-ebce-4ebc-b154-b377d29adaa5%2FaboutMe.png?table=block&id=1d2a9ed7-fb81-4058-a593-a05bf6121518&spaceId=d465f89c-f3d1-402f-bf69-8a0378f6b28f&width=1130&userId=&cache=v2"
        }
      />
      <header className="App-header">
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
