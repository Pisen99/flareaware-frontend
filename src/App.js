import './App.css';
import Button from './components/Button';

function App() {
  return (
    <div>
      <Button label="Save" variant="other" onClick={() => console.log('Saved')}/>
    </div>
  );
}

export default App;
