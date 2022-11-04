import "./App.css";
import EmployeeList from "./components/EmployeeList";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import EmployeeCreate from "./components/EmployeeCreate";
import EmployeeView from "./components/EmployeeView";

function App() {
  return (
    <>
      <Router>
        <Header />
        <div className="container">
          <Switch>
            <Route path="/" component={EmployeeList} exact />
            <Route path="/employees" component={EmployeeList} />
            <Route path="/add-employee/:id" component={EmployeeCreate} />
            <Route path="/view-employee/:id" component={EmployeeView} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
