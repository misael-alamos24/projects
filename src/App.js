// import logo from './logo.svg';
import './App.css';
// import Projects from './components/Projects';
import Logo from './components/logo/Logo';

function App({inner}) {
  return (
    <div className="App">
      <Logo/>
      {/* <Projects/> */}
      {inner}
      {/* <header className="App-header"> */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      {/* </header> */}
    </div>
  );
}

export default App;
