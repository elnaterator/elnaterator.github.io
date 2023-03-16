import logo from './me.png';
import scroll from './scroll-down-caret.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <h1>
          Nathan Hadzariga
        </h1>

        <img src={logo} className="App-logo" alt="logo" />

        <p>
          <a className="App-link" href="https://www.linkedin.com/in/nathanhadzariga/"
            target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          &nbsp;|&nbsp;
          <a className="App-link" href="https://github.com/elnaterator"
            target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          &nbsp;|&nbsp;
          <a className="App-link" href="https://stackoverflow.com/users/1660329/nathan-hadzariga"
            target="_blank" rel="noopener noreferrer">
            StackOverflow
          </a>
        </p>

        <img src={scroll} className="App-scroll-down-img" alt="scroll" />

      </header>

      <div className='App-resume-section'>
        <div className='header'>
          <h1>Software Engineering Resume</h1>
        </div>
        <div className='leftcol'>
          <p>I have had the opportunity to work on a wide range of software projects</p>
        </div>
        <div className='rightcol'>
          <p>I have had the opportunity to work on a wide range of software projects</p>
        </div>
      </div>
    </div>
  );
}

export default App;
