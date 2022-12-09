import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Upcoming from "./pages/movies/upcoming";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/upcoming" element={<Upcoming />} />
      </Routes>
    </Router>
  );
}

export default App;
