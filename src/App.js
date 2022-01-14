import { useState } from 'react';
import planetsData from './data.json';
import Header from './components/Header/Header';

function App() {
  // json data for planets 
  const [planets, setPlanets] = useState(planetsData)

  return (
    <main>
      <Header planets={planets}/>
    </main>
  );
}

export default App;
