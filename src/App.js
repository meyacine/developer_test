import React, {Component} from 'react';
import './App.css';
import StudentsList from "./components/students/StudentsList";
import StudentForm from "./components/students/StudentForm";
const API = 'http://localhost:1337/api/students';
class App extends Component {
    constructor() {
        super()
        this.state = {
            students: [],
            currentStudent: {
                id: null,
                firstname: '',
                lastname: ''
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
                            <StudentsList students={this.state.students} handleEdit={this.selectStudent.bind(this)}/>
                        </div>
                        <div className="col-md-6">
                            <StudentForm student={this.state.currentStudent} handleSave={this.saveStudent.bind(this)}
                                         onInputChange={this.handleInputChange.bind(this)}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    selectStudent(student) {
        this.setState({currentStudent: student})
    }

    handleInputChange(student) {
        this.setState({currentStudent: student})
    }

    saveStudent(student) {
        let urlComplement = student.id ? '/' + student.id : ''
        let methode = 'POST'
        if (student.id) {
            methode = 'put'
        }
        const url = API + urlComplement
        fetch(url, {
            method: methode,
            headers: {
                'Accept': '*/*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(student)
        })
        .then(response => {
            return response.json()
        }).then(data => {
            this.setState({students: data});
        }).catch(rejection => {
            console.log(rejection)
        })
    }

    componentDidMount() {
        fetch(API)
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
