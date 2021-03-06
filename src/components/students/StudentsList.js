import React, {Component} from 'react';

class StudentsList extends Component {
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
                                <a onClick={this.handleEdit.bind(this, student)} className="btn btn-primary">
                                    <i className="fa fa-pencil"></i>
                                </a>
                                <a onClick={this.handleDelete.bind(this, student)} className="btn btn-danger">
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

    handleEdit(student) {
        var studentClone = Object.assign({}, student);
        this.props.handleEdit(studentClone)
    }

    handleDelete(student) {
        this.props.handleDelete(student)
    }
}

export default StudentsList;