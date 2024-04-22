import "./App.css";
import Main from "./components/Main";

const dataPerPage = 4;
function App() {
  return (
    <div className="App">
      {"   "}
      <hr />
      <Main dataPerPage={dataPerPage} />
    </div>
  );
}

export default App;
