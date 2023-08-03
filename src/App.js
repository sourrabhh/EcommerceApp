import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Customer/Components/Footer/Footer';

import CustomerRouters from './Routers/CustomerRouters';


function App() {
  return (
    <div className="">
      {/* <Navigation /> */}
        <div>
          <Routes>
              <Route path='/' element={<CustomerRouters />}></Route>
          </Routes>  
        </div>
    </div>
  );
}

export default App;
