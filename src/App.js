import './App.css';
import Weather from './Weather';

function App() {
  return (
    <div className="App">
      <Weather defaultCity="New York" />
      <footer>This project was coded by <a href="https://www.github.com/Zee363" target="_blank" rel="nonopener nonreferrer">Zinhle Nhlapo</a> and it is <a href="https://www.github.com/Zee363/react-weather" target="_blank" rel="nonopener nonreferrer">open-sourced on Github.</a> It is also hosted on <a href="" target="_blank" rel="nonopener nonreferrer">Netlify.</a> 
      </footer>
    </div>
  );
}

export default App;
