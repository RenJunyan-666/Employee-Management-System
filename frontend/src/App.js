import "./App.css";
import EmployeeList from "./components/EmployeeList";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import EmployeeCreate from "./components/EmployeeCreate";

function App() {
  return (
    <>
      <Router>
        <Header />
        <div className="container">
          <Switch>
            <Route path="/" component={EmployeeList} exact></Route>
            <Route path="/add-employee" component={EmployeeCreate}></Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
