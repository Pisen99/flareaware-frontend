import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Calendar from './components/Calendar';
import SelectionsCard from './components/SelectionsCard';
import Cal from './components/Cal';

function App() {

  return (
    <div>
      <Header />
      <Cal />
      {/* <Calendar /> */}
      <SelectionsCard />
      <Navbar />
    </div>
  );
}

export default App;
