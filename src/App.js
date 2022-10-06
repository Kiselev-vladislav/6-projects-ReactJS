import React, {useState} from 'react';
import './index.scss';

function App() {
  const [count, setCount] = useState(0)

  const OnClickPlus = () => {
    setCount(count+1)
  }

  const OnClickMinus = () => {
    setCount(count-1)
  }

  return (
    <div className="App">
      <div>
        <h2>Счетчик:</h2>
        <h1>{count}</h1>
        <button onClick={OnClickMinus} className="minus">- Минус</button>
        <button onClick={OnClickPlus} className="plus">Плюс +</button>
      </div>
    </div>
  );
}

export default App;
