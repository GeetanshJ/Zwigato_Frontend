import './App.css';
// import AuthForm from './AuthForm';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Delivery from "./Delivery";
import Home from './Home';
import MenuList from "./MenuList";
import Partner from './Partner';
import PartnerRegister from './PartnerRegister';
import HotelsCategory from './HotelsCategory';
import SpecificMenuList from './SpecificMenuList';
import UserRegister from './UserRegister';
import UserLogin from './UserLogin';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu/:hotelID" element={<MenuList/>}/>
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/partner" element={<Partner />} />
          <Route path="/Partner_Register" element={<PartnerRegister />} />
          <Route path="/selectedCategories/:locationID/:categoryID" element={<HotelsCategory />} />
          <Route path="/specificMenu/:locationID/:hotelID/:categoryID" element={<SpecificMenuList />} />
          <Route path="/register" element={<UserRegister />} />
          {/* <Route path="/login" element={<UserLogin />} /> */}

        </Routes>
      </Router>
    </div>
  );
}

export default App;
