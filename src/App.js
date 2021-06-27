import logo from "./logo.svg";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="img-fluid App-logo" alt="logo" />
        </header>
        <Dictionary defaultKeyword="library" />
        <footer>
          Coded by{" "}
          <a
            href="https://www.linkedin.com/in/aneta-stepankova"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Aneta{" "}
          </a>{" "}
          and open-sourced on{" "}
          <a
            href="https://github.com/Aneta21/dictrionary-project"
            target="_blank"
            rel="noreferrer"
          >
            <span className="fab fa-github"></span>
          </a>
        </footer>
      </div>
    </div>
  );
}
