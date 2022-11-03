import React, { useEffect, useState } from "react";
import EmployeeService from "../services/EmployeeService";

export default function EmployeeUpdate(props) {
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

  const updateEmployee = (e) => {
    e.preventDefault();
    let employee = {
      firstName,
      lastName,
      emailId,
    };
    console.log(JSON.stringify(employee));
  };

  const cancelHandler = () => {
    props.history.push("/");
  };

  useEffect(() => {
    EmployeeService.getEmployeeById(employeeId).then((res) => {
      let employee = res.data;
      setFirstName(employee.firstName);
      setLastName(employee.lastName);
      setEmailId(employee.emailId);
    });
  }, [employeeId]);

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3">
            <h1 className="text-center">Update Employee</h1>
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

                <button className="btn btn-success" onClick={updateEmployee}>
                  Update
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
