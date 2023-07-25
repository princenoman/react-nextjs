import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./assets/bootstrap.min.css";
import "./App.css";
import IncomePage from "./pages/IncomePage";
import ExpensePage from "./pages/ExpensePage";

const App = () => {
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Income
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/expenses" className="nav-link">
                Expenses
              </Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<IncomePage />} />
          <Route path="/expenses" element={<ExpensePage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
