import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Calendar from './components/Calendar';
import SelectionsCard from './components/SelectionsCard';

function App() {

  return (
    <div className='bg-gray-700'>
      <Header />
      <Navbar />
      <Calendar />
      <SelectionsCard />
    </div>
  );
}

export default App;
