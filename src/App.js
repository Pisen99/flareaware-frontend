import './App.css';
import Header from './components/Header';
import NavCards from './components/NavCards';
import Calendar from './components/Calendar';
import SelectionsCard from './components/SelectionsCard';

function App() {

  return (
    <div className='bg-gray-900'>
      <Header />
      <NavCards />
      <Calendar />
      <SelectionsCard />
    </div>
  );
}

export default App;
