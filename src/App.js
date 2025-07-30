import './App.css';
import Header from './components/Header';
import NavCards from './components/NavCards';
import Calendar from './components/Calendar';
import SelectionsCard from './components/SelectionsCard';

function App() {

  return (
    <div>
      <Header />
      <Calendar />
      <SelectionsCard />
      <NavCards />
    </div>
  );
}

export default App;
