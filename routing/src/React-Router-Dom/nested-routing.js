import React from "react";
import { Routes, Route, Link, Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>

      <nav>
        <Link to="/dashboard/profile">Profile</Link> |{" "}
        <Link to="settings">Settings</Link>{" "}
      </nav>


    <div style={{margin:'30px'}}>
    <Outlet />

    </div>

    </div>
  );
}

function Profile() {
  return <h3>Profile</h3>;
}
function Settings() {
  return <h3>Settings</h3>;
}
function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function App() {
  return (
    <div style={{ margin: "100px" }}>
      <div>
        <nav style={{ marginBottom: "20px" }}>
          <Link to="/">Home</Link> | <Link to="/about">About</Link> |{" "}
          <Link to="/dashboard">Dashboard</Link>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* parent route */}
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
