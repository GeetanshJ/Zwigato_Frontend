import './App.css';
// import AuthForm from './AuthForm';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Delivery from "./Delivery";
import Home from './Home';
import MenuList from "./MenuList";
import Partner from './Partner';
import Partner_Register from './Partner_Register';
import Hotels_Category from './Hotels_Category';
import Specific_Menu_List from './Specific_Menu_List';
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
          <Route path="/selectedCategories/:categoryID" element={<Hotels_Category />} />
          <Route path="/specificMenu/:hotelID/:categoryID" element={<Specific_Menu_List />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
