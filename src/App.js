import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {StudentsList} from './components/StudentsList';

class App extends Component {
    constructor() {
        super()
        this.state = {
            students: []
        }
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Students class</h1>
                </header>
                <div className="col-md-6">
                    <StudentsList students = {this.state.students}/>
                </div>
            </div>
        );
    }

    componentDidMount() {
        fetch('http://localhost:1337/api/students')
        .then(response => {
            return response.json()
        }).then(data => {
            this.setState({students : data});
        }).catch(rejection => {
            console.log(rejection)
        })
    }
}

export default App;
