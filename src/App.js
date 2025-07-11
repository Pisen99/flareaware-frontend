import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Calendar from './components/Calendar';
import SymptomForm from './components/SymptomForm';

function App() {

  return (
    <div className='bg-gray-700'>
      <Header />
      <Navbar />
      <Calendar />
      <SymptomForm />
    </div>
  );
}

export default App;
