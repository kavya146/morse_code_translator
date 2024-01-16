import logo from "./logo.svg";
import "./App.css";
import Header from "./component/page/header/Header";
import Page from "./component/page/Page";
import Content from "./component/page/content/Content";

function App() {
  return (
    <div style={{ backgroundColor: "#ffe8009e", height: "100vh" }}>
      <Page />
    </div>
  );
}

export default App;
