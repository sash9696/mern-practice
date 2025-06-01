import { BrowserRouter , Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import AuthForm from "./pages/Register"
function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/login" element={<AuthForm mode='login'/>} />
        <Route path="/register" element={<AuthForm mode='register' />} />
        <Route path="/chats" element={<Home />} />
        {/* <Route path="/" element={<Start />} /> */}



      </Routes>
      
    </BrowserRouter>
  )
}

export default App