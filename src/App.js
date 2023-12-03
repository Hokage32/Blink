import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Landing from "./screens/Landing";
import Auth from "./screens/Auth";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth/>}/>
      </Routes>
    </div>
  );
}

export default App;
