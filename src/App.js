import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Register from './register/register';
import Parent from "./dual/Parent";

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Sign up</h1>
                </div>
                <Register/>
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Dual components</h1>
                </div>
                <Parent/>
            </div>
        );
    }
}

export default App;
