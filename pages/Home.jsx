import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, InputGroup } from 'reactstrap';
import '../Darkmode/darkmode.css';
import { ThemeContext, themes } from '../Darkmode/themeContext';



export default function App() {
  const [darkMode, setDarkMode] = React.useState(true);
  return (
    <div className="main-container">
    <header className="App-header">

        <h3>
            RU
        </h3>
        <Link to={`/`}>Home</Link>
        <InputGroup>
          <ThemeContext.Consumer>
            {({ changeTheme }) => (
              <Button
                color="link"
                onClick={() => {
                  setDarkMode(!darkMode);
                  changeTheme(darkMode ? themes.light : themes.dark);
                }}
              >
                <i className={darkMode ? 'fas fa-sun' : 'fas fa-moon'}></i>
                <span className="d-lg-none d-md-block">Switch mode</span>
              </Button>
            )}
          </ThemeContext.Consumer>
        </InputGroup>
    </header>
    <div className="home-page-layout">

        <div className="home-page-container-one">
              <div className="span"></div>
          </div>
          <div className="home-page-container">
                <span>Hi there, </span>
                <h1>Welcome</h1>
                <p className="paragraph">This website consume a third party api to generate random multiple users, click the button below to check</p>
                <Link to="/users"><button>View Here</button></Link>
          </div>
          <div className="home-page-container-two">
              <div className="span-right"></div>
          </div>
    </div>

    </div>
  );
}


