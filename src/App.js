import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Calendar from './components/CalendarTwo';

function App() {

  return (
    <div className='bg-gray-700'>
      <Header />
      <Navbar />
      <Calendar />
    </div>
  );
}

export default App;
