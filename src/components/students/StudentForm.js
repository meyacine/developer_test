import React, {Component} from 'react';

class StudentForm extends Component {
    render() {
        return (
            <form>
                <div className="row">
                    <dt className="col-sm-2">ID</dt>
                    <dd className="col-sm-10">{this.props.student.id}</dd>
                </div>
                <div className="form-group row">
                    <label htmlFor="firstname" className="col-sm-2 col-form-label">Firstname</label>
                    <div className="col-sm-10">
                        <input type="text" id="firstname" className="form-control" value={this.props.student.firstname} onChange={e => this.onInputChange('firstname', e.target.value)}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="lastname" className="col-sm-2 col-form-label">Lastname</label>
                    <div className="col-sm-10">
                        <input type="text" id="lastname" className="form-control" value={this.props.student.lastname} onChange={e => this.onInputChange('lastname', e.target.value)}/>
                    </div>
                </div>
                <div className="pull-right">
                    <button type="button" className="btn btn-primary" onClick={this.handleSave.bind(this, this.props.student)}>Save</button>
                </div>
            </form>
        );
    }

    handleSave(student) {
        this.props.handleSave(student)
    }
    onInputChange(key, value){
        this.props.student[key] = value
        this.props.onInputChange(this.props.student)
    }
}

export default StudentForm;