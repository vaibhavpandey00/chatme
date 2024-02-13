import Chatpage from "./components/Chatpage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signuppage from "./components/Signuppage";
// import HomePage from "./components/HomePage";
import Loginpage from "./components/Loginpage";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Loginpage />} exact />
          <Route path="/signup" element={<Signuppage />} exact />
          <Route path="/chats" element={<Chatpage />} exact />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;