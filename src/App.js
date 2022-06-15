import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './frontend/Home';
import Login from './frontend/Login';
import Register from './frontend/Register';
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        {/* <Route path="/about"> <About /> </Route> */}
        {/* <Route path="/users"> <Users /> </Route> */}
      </Routes>
    </Router>
  );
}

export default App;
