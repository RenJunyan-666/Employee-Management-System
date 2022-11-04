import React, { useEffect } from "react";
import { useState } from "react";
import EmployeeService from "../services/EmployeeService";

export default function EmployeeList(props) {
  const [employees, setEmployees] = useState([]);

  const addEmployee = () => {
    props.history.push("/add-employee/-1");
  };

  const editEmployee = (id) => {
    props.history.push(`/add-employee/${id}`);
  };

  const deleteEmployee = (id) => {
    EmployeeService.deleteEmployee(id).then((res) => {
      setEmployees(employees.filter((employee) => employee.id !== id));
    });
  };

  const viewEmployee = (id) => {
    props.history.push(`/view-employee/${id}`);
  };

  useEffect(() => {
    EmployeeService.getEmployees().then((res) => {
      setEmployees(res.data);
    });
  }, []);

  return (
    <div>
      <h2 className="text-center">Employee List</h2>
      <div className="row" style={{ width: "200px", marginBottom: "10px" }}>
        <button className="btn btn-primary" onClick={addEmployee}>
          Add Employee
        </button>
      </div>
      <div className="row">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Employee First Name</th>
              <th>Employee Last Name</th>
              <th>Employee Email Id</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.emailId}</td>
                <td>
                  <button
                    onClick={() => editEmployee(employee.id)}
                    className="btn btn-info"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteEmployee(employee.id)}
                    className="btn btn-danger"
                    style={{ marginLeft: "10px" }}
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => viewEmployee(employee.id)}
                    className="btn btn-info"
                    style={{ marginLeft: "10px" }}
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
