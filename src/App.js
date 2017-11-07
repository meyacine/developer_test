import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor() {
        super()
        this.state = {
            students: [
                {
                    id: '1',
                    lastname: 'Arya',
                    firstname: 'Stark'
                },
                {
                    id: '2',
                    lastname: 'John',
                    firstname: 'SNOW'
                },
                {
                    id: '3',
                    lastname: 'Jamie',
                    firstname: 'Lannister'
                },
                {
                    id: '4',
                    lastname: 'Daenerys',
                    firstname: 'Targaryen'
                },
                {
                    id: '5',
                    lastname: 'Cercei',
                    firstname: 'Lannister'
                }
            ]
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
                    <table className="table">
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>FIRSTNAME</th>
                            <th>LASTNAME</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.students.map(student =>
                            <tr key={student.id}>
                                <td>{student.id}</td>
                                <td>{student.lastname}</td>
                                <td>{student.firstname}</td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default App;
