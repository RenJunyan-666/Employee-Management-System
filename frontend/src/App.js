import "./App.css";
import EmployeeList from "./components/EmployeeList";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <EmployeeList />
      </div>
      <Footer />
    </>
  );
}

export default App;
