import logo from "./logo.svg";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="img-fluid" alt="logo" />
        </header>
        <h1>What do you want to learn today?</h1>
        <Dictionary />
        <footer className="footer">Coded by Aneta</footer>
      </div>
    </div>
  );
}
