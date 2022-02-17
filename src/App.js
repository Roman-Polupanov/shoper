import All from './All/All';
import Cart from './Cart/Cart';
import Favorites from './Favorites/Favorites';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Sortbar from './components/sortbar/sortbar';

function App() {
  return (<BrowserRouter>
    <Routes>
      <Route path="/all" element={<All />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/cart" element={<Cart />} />
      {/* <Route path="/sorting" element={<Sortbar />} /> */}
    </Routes>
  </BrowserRouter>
  );
}

export default App;
