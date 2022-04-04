import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate
} from "react-router-dom";
import Home from './components/Home';
import Cart from './components/Cart';
import OrderPlaced from './components/OrderPlaced';
import PlacedOrder from './components/PlacedOrder';

function App() {
  return (
    <div className="App">
      <Router>
<Routes>
  <Route path="/" element={<Navigate to="/home" replace />} />
  <Route exact path="/home" element={<Home/>}   />
  <Route exact path="/cart" element={<Cart/>}   />

  <Route exact path="/orderplace" element={<OrderPlaced/>}   />

  <Route exact path="/placedorder" element={<PlacedOrder/>}   />

</Routes>
      </Router>
    </div>
  );
}

export default App;
