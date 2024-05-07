import './App.css';
// import AuthForm from './AuthForm';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Delivery from "./Delivery";
import Home from './Home';
import MenuList from "./MenuList";
import Partner from './Partner';
import Partner_Register from './Partner_Register';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu/:hotelID" element={<MenuList/>}/>
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/partner" element={<Partner />} />
          <Route path="/Partner_Register" element={<Partner_Register />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;