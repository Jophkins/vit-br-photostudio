import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import './App.scss';

import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Header />
      <hr />

      <Portfolio />

      <hr />
      <Footer />
    </div>
  );
}

export default App;
