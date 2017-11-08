import React, {Component} from 'react';

class StudentsList extends Component {
    constructor(props) {
        super(props)
        this.editHandle = this.editHandle
    }

    render() {
        return (
            <div className="table-responsive">
                <table className="table table-bordered table-hover">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>FIRSTNAME</th>
                        <th>LASTNAME</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.students.map(student =>
                        <tr key={student.id}>
                            <td>
                                <a onClick={this.editHandle.bind(this, student)} className="btn btn-primary">
                                    <i className="fa fa-pencil"></i>
                                </a>
                                <a className="btn btn-danger">
                                    <i className="fa fa-trash"></i>
                                </a>

                            </td>
                            <td>{student.firstname}</td>
                            <td>{student.lastname}</td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        );
    }

    editHandle(student) {
        this.props.editHandle(student)
    }
}

export default StudentsList;