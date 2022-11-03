import "./App.css";
import EmployeeList from "./components/EmployeeList";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import EmployeeCreate from "./components/EmployeeCreate";
import EmployeeUpdate from "./components/EmployeeUpdate";

function App() {
  return (
    <>
      <Router>
        <Header />
        <div className="container">
          <Switch>
            <Route path="/" component={EmployeeList} exact />
            <Route path="/employees" component={EmployeeList} />
            <Route path="/add-employee" component={EmployeeCreate} />
            <Route path="/update-employee/:id" component={EmployeeUpdate} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
