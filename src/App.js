import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Calendar from './components/Calendar';

function App() {

  return (
    <div className='bg-beige'>
      <Header />
      <Navbar />
      <Calendar />
    </div>
  );
}

export default App;
