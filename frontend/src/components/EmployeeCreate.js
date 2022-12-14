import React, { useEffect, useState } from "react";
import EmployeeService from "../services/EmployeeService";

export default function EmployeeCreate(props) {
  const [employeeId] = useState(props.match.params.id);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setEmailId] = useState("");

  const firstNameHandler = (e) => {
    setFirstName(e.target.value);
  };

  const lastNameHandler = (e) => {
    setLastName(e.target.value);
  };

  const emailIdHandler = (e) => {
    setEmailId(e.target.value);
  };

  const saveEmployee = (e) => {
    e.preventDefault();
    let employee = {
      firstName,
      lastName,
      emailId,
    };
    if (employeeId == -1) {
      EmployeeService.addEmployee(employee).then((res) => {
        props.history.push("/employees");
      });
    } else {
      EmployeeService.updateEmployee(employee, employeeId).then((res) => {
        props.history.push("/employees");
      });
    }
  };

  const cancelHandler = () => {
    props.history.push("/employees");
  };

  useEffect(() => {
    if (employeeId == -1) return;
    else {
      EmployeeService.getEmployeeById(employeeId).then((res) => {
        let employee = res.data;
        setFirstName(employee.firstName);
        setLastName(employee.lastName);
        setEmailId(employee.emailId);
      });
    }
  }, [employeeId]);

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3">
            <h3 className="text-center">
              {employeeId == -1 ? "Add Employee" : "Update Employee"}
            </h3>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label>First Name</label>
                  <input
                    placeholder="First Name"
                    name="firstName"
                    className="form-control"
                    value={firstName}
                    onChange={firstNameHandler}
                  />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input
                    placeholder="Last Name"
                    name="lastName"
                    className="form-control"
                    value={lastName}
                    onChange={lastNameHandler}
                  />
                </div>
                <div className="form-group">
                  <label>Email ID</label>
                  <input
                    placeholder="Email Id"
                    name="emailId"
                    className="form-control"
                    value={emailId}
                    onChange={emailIdHandler}
                  />
                </div>

                <button className="btn btn-success" onClick={saveEmployee}>
                  Save
                </button>
                <button
                  className="btn btn-danger"
                  onClick={cancelHandler}
                  style={{ marginLeft: "10px" }}
                >
                  Cancel
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
