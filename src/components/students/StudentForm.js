import React from 'react';
export const StudentForm = (props) => {
    return (<form>
        <div className="row">
            <dt className="col-sm-2">ID</dt>
            <dd className="col-sm-10">{props.student.id}</dd>
        </div>
        <div className="form-group row">
            <label htmlFor="firstname" className="col-sm-2 col-form-label">Firstname</label>
            <div className="col-sm-10">
                <input type="text" id="firstname" className="form-control" value={props.student.firstname}/>
            </div>
        </div>
        <div className="form-group row">
            <label htmlFor="lastname" className="col-sm-2 col-form-label">Lastname</label>
            <div className="col-sm-10">
                <input type="text" id="lastname" className="form-control" value={props.student.lastname}/>
            </div>
        </div>
    </form>)
}
