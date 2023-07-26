import './App.css';
import Footer from './Customer/Components/Footer/Footer';
import Navigation from './Customer/Components/Navigation/Navigation';
import HomePage from './Customer/Pages/HomePage/HomePage';

function App() {
  return (
    <div className="">
      <Navigation />
        <div>
          <HomePage />
        </div>
        <Footer />
    </div>
  );
}

export default App;
