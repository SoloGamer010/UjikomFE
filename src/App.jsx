import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/HomePage.jsx';
import Login from './pages/LoginPage.jsx';
import Register from "./pages/RegisterPage.jsx";
import DetailPage from "./pages/DetailPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/Register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/film/:id" element={<DetailPage />} /> 
      </Routes>
    </Router>
  );
}

export default App;