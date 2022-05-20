// import logo from './logo.svg';
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextBox from "./components/TextBox";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Switch is replaced with Routes in the latest version of rect-router-dom

function App() {
  return (
    <>
      <Router>
        <Navbar title="TextUtils" />
        {/* <Navbar/> */}
        <div className="container">
          <Routes>
          <Route exact path="/" element={<TextBox heading="Enter your text below to analyze" />}/> 
          <Route exact path="/about" element={<About/>}/>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
