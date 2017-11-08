import React, {Component} from 'react';
import './App.css';
import StudentsList from "./components/students/StudentsList";
import {StudentForm} from "./components/students/StudentForm";

class App extends Component {
    constructor() {
        super()
        this.state = {
            students: [],
            currentStudent : {
                id : null,
                firstname : '',
                lastname : ''
            }
        }
        this.selectStudent = this.selectStudent
    }

    render() {
        return (
            <div className="App">
                <h1 className="App-title">Students class</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <StudentsList students={this.state.students} editHandle={this.selectStudent.bind(this)}/>
                        </div>
                        <div className="col-md-6">
                            <StudentForm student={this.state.currentStudent}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    selectStudent(student){
        this.setState({currentStudent : student})
    }

    componentDidMount() {
        fetch('http://localhost:1337/api/students')
            .then(response => {
                return response.json()
            }).then(data => {
            this.setState({students: data});
        }).catch(rejection => {
            console.log(rejection)
        })
    }
}

export default App;
