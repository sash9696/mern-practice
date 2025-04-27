import React from "react";
import { Routes, Route, Link, Outlet, Navigate } from "react-router-dom";

const isLoggedIn = false;

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>

      <nav>
        <Link to="/dashboard/profile">Profile</Link> |{" "}
        <Link to="settings">Settings</Link>{" "}
      </nav>

      <div style={{ margin: "30px" }}>
        <Outlet />
      </div>
    </div>
  );
}

function Profile() {
  return <h3>Protected Profile Page</h3>;
}
function Settings() {
  return <h3>Settings Page</h3>;
}
function Home() {
  return <h2>Home Page</h2>;
}

function About() {
  return <h2>About Page</h2>;
}

function Login() {
  return <h2>Please log in to view the page.</h2>;
}

function PrivateRoute({ children }) {
  console.log("children", children);
  return <div>{isLoggedIn ? children : <Navigate to="/login" />}</div>;
}

function NotFound(){
  return <h2>404 - Page Not Found</h2>
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
        <Route path="/login" element={<Login />} />

        {/* parent route */}
        <Route path="/dashboard" element={<Dashboard />}>
          <Route
            path="profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
          <Route
            path="settings"
            element={
                <Settings />
            }
          />
        </Route>

            {/* 404 Not Found Route  */}
            <Route path="*" element={<NotFound/>} />

      </Routes>
    </div>
  );
}

export default App;
