import logo from './logo.svg';
import React from "react";
import './App.css';

function Footer(props) {
    return(
        <footer>
            <small>Hello</small>
            <span> Message: {props.message}</span>
        </footer>
    );
}

class App extends React.Component {
    render(){
    return <div>
        <h1> Hi, {this.props.user.name}. This is the app name...</h1>
        <p>{this.props.greeting}</p>
        <p>{this.props.user.role} is your role as a user</p>
    </div>
    }
}
export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
