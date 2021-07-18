import Navbar from "./components/header";
import "./scss/app.scss";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>goodbye</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Navbar />
      </header>
    </div>
  );
}

export default App;
