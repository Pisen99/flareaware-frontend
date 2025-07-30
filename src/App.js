import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Calendar from './components/Calendar';
import SelectionsCard from './components/SelectionsCard';

function App() {

  return (
    <div>
      <Header />
      <Calendar />
      <SelectionsCard />
      <Navbar />
    </div>
  );
}

export default App;
