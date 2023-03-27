import { useState } from "react"
import reactLogo from "./assets/react.svg"
import "./App.css"
import { Route, Routes } from "react-router-dom"
import Validate from "./Pages/Portal/User/Validate/Validate"
import Onboarding from "./Pages/Portal/User/Onboarding/Onboarding"
import Profile from "./Pages/Portal/User/Profile/Profile"
import Success from "./Pages/Portal/User/Onboarding/Success"

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="user/validate/:token" element={<Validate />} />
      <Route path="user/onboarding" element={<Onboarding />} />
      <Route path="user/profile" element={<Profile />} />
    </Routes>
  )
}

export default App
