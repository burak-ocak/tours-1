import { useState } from 'react';
import './App.css';
import Tours from './Tours';
import toursList from './data';

function App() {

  const [data, setData] = useState(toursList);

  function deleteElement(id){
    const newElement = data.filter( (e)=>e.id !== id );
    setData(newElement);
  };
  
  if(data.length === 0){
    return <div>Geriye tur kalmamıştır....</div>
  }
  return (
    <div className='mainClass'>
      <h2>Our Tours</h2>
      <div className='underLine' ></div>

      {
        data.map( (e)=> <Tours data={e} del={deleteElement}/> )
      }
      
    </div>
  );
}

export default App;
