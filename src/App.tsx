import "./App.css";
import Component1 from "./components/Component1";
import Component2 from "./components/Component2";

function App() {
  return (
    <div className="App">
      <div>
        <Component1 txt={"i am component 1"} />
      </div>
      <div>
        <Component2 txt={"i am component 2"} />
      </div>
    </div>
  );
}

export default App;
