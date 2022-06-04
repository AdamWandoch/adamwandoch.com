import './App.css';
import { Intro } from './Intro';
import { Home } from './Home';
import { useState } from 'react';

function App() {
  const [showIntro, setShowIntro] = useState(true);

  const parentControl = (boolean) => {
    console.log('executing from parent');
    setShowIntro(boolean);
  };

  return (
    <div className='App'>
      {showIntro ? <Intro callback={parentControl} /> : <Home />}
    </div>
  );
}

export default App;
