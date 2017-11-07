import React from 'react';

export const StudentsList = (props) => {
    return (
        <table className="table">
            <thead>
            <tr>
                <th>ID</th>
                <th>FIRSTNAME</th>
                <th>LASTNAME</th>
            </tr>
            </thead>
            <tbody>
            {props.students.map(student =>
                <tr key={student.id}>
                    <td>{student.id}</td>
                    <td>{student.lastname}</td>
                    <td>{student.firstname}</td>
                </tr>
            )}
            </tbody>
        </table>)
}