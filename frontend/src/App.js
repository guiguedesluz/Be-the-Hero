import React from 'react';

import './global.css';

import Routes from './routes';

function App(){
  return (
    <Routes />
  );
}

export default App;







/* function App() {
  const [counter, setCounter] = useState(0);
  // useState retorna um array com 2 posiçoes [valor, funçãoDeAtualização]
  function increment(){
    setCounter(counter+1);
  }

  return (
    <div>
      <Header>Contador: {counter}</Header>
      <button onClick={increment}>Incrementar</button>
    </div>
  );
}

export default App;
 */