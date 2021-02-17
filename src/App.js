import React from 'react';
import Counter from './components/Counter';

function App(props) {
  const step = 5;
  return (
    <div className="conteiner">
    <Counter step={step} />
    </div>
  );
}

export default App;
