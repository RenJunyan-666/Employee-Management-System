import React, { useEffect, useState } from "react";
import EmployeeService from "../services/EmployeeService";

export default function EmployeeView(props) {
  const [employeeId] = useState(props.match.params.id);
  const [employee, setEmployee] = useState({});

  const handleBack = () => {
    props.history.push("/");
  };

  useEffect(() => {
    EmployeeService.getEmployeeById(employeeId).then((res) => {
      setEmployee(res.data);
    });
  }, [employeeId]);

  return (
    <div>
      <div className="card col-md-6 offset-md-3">
        <h3 className="text-center">View Employee Details</h3>
        <div className="card-body">
          <div className="row text-center">
            <label>
              <b>Employee First Name: </b>
            </label>
            <div>{employee.firstName}</div>
          </div>
          <div className="row text-center">
            <label>
              <b>Employee Last Name: </b>
            </label>
            <div>{employee.lastName}</div>
          </div>
          <div className="row text-center">
            <label>
              <b>Employee Email ID: </b>
            </label>
            <div>{employee.emailId}</div>
          </div>
          <center>
            <button className="btn btn-info" onClick={handleBack}>
              Back
            </button>
          </center>
        </div>
      </div>
    </div>
  );
}
