import './App.css';
import Weather from './Weather';
import "./Weather.css";

function App() {
  return (
    <div className="App">
      <Weather defaultCity="Cape Town" />
      <footer>
        This project was coded by{" "}
        <a
          href="https://www.github.com/Zee363"
          target="_blank"
          rel="noopener noreferrer"
        >
          Zinhle Nhlapo
        </a>{" "}
        and it is{" "}
        <a
          href="https://www.github.com/Zee363/react-weather"
          target="_blank"
          rel="noopener noreferrer"
        >
          open-sourced on Github.
        </a>{" "}
        It is also hosted on{" "}
        <a
          href="https://voluble-gingersnap-8f2806.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Netlify.
        </a>
      </footer>
    </div>
  );
}

export default App;
