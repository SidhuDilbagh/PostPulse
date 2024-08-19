import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from "./pages/home";
import About from "./pages/about";
import SignUp from "./pages/signUp";
import SignIn from "./pages/signIn";
import Dashboard from "./pages/dashboard";
import Projects from "./pages/projects";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}
