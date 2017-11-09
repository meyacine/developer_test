import React, {Component} from 'react';
import './App.css';
import StudentsList from "./components/students/StudentsList";
import StudentForm from "./components/students/StudentForm";
import {NotificationContainer, NotificationManager} from 'react-notifications';
import StudentsService from "./services/students";


const API = 'http://localhost:1337/api/students';
class App extends Component {
    state = {
        students: [],
        currentStudent: {
            id: null,
            firstname: '',
            lastname: ''
        }
    }

    render() {
        return (
            <div className="App">
                <NotificationContainer/>
                <h1 className="App-title">Students class</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-12">
                                    <button className="btn btn-primary pull-right"
                                            onClick={this.handleNewStudent.bind(this)}>
                                        <i className="fa fa-plus"></i> Add a new
                                    </button>
                                </div>
                            </div>
                            <StudentsList students={this.state.students}
                                          handleEdit={this.handleSelectStudent.bind(this)}
                                          handleDelete={this.handleDeleteStudent.bind(this)}/>
                        </div>
                        <div className="col-md-6">
                            <StudentForm student={this.state.currentStudent} handleSave={this.handleSaveStudent.bind(this)}
                                         onInputChange={this.handleInputChange.bind(this)}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    componentDidMount() {
        StudentsService.fetchAll().then(data=>{
            this.setState({students: data});
        })
    }

    handleSelectStudent(student) {
        this.setState({currentStudent: student})
    }

    handleDeleteStudent(student) {
        if (window.confirm('Are you sure? You want to delete '+ student.lastname +' ' + student.firstname)) {
            const url = API + '/' + student.id
            fetch(url, {
                method: 'DELETE',
                headers: {
                    'Accept': '*/*',
                    'Content-Type': 'application/json'
                }
            })
            .then(response => {
                return response.json()
            }).then(data => {
                // we can handle response.ok on the promise
                if (data.error) {
                    NotificationManager.error(data.error);
                    throw new Error(data.error)

                }
                NotificationManager.success('Student deleted with success');
                this.setState({students: data});
                this.resetForm();
            }).catch(rejection => {
                console.log(rejection)
            })
        }
    }


    handleNewStudent() {
        this.resetForm();
    }

    resetForm() {
        this.setState({
            currentStudent: {
                id: null,
                firstname: '',
                lastname: ''
            }
        })
    }

    handleInputChange(student) {
        this.setState({currentStudent: student})
    }

    handleSaveStudent(student) {
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
            // we can handle response.ok on the promise
            if (data.error) {
                NotificationManager.error(data.error);
                throw new Error(data.error)

            }
            NotificationManager.success('Student saved with success');
            this.setState({students: data});
            this.resetForm();
        }).catch(rejection => {
            console.log(rejection)
        })
    }
}

export default App;
