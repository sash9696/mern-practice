import React from "react";
import { Routes, Route, Link } from "react-router-dom";

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function App() {
  return (
    <div style={{margin:"100px"}}>
      <div>
        <nav style={{marginBottom:'20px'}} >
            <Link to='/' >Home</Link> | <Link to='/about' >About</Link>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>

    </div>
  );
}

export default App;
