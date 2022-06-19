import './App.css';
import { data } from './Data';
import { useState } from 'react';

function App() {

  const [toDo, setToDo] = useState(data);
  const [start, setStart] = useState(true);

  const deleteElement = (id) => {
    let block = toDo.filter(element => element.id !==id);
    setToDo(block)
  }

  const deleteOrStart = () => {
    setStart(!start);
    start ? setToDo([]) : setToDo(data);
  }


  return (
    <div className='container'>
      <h1>PROJECT 50 CHALLENGE</h1>

      <div className='block'>
        {toDo.map(item => {
        const {id, rule, image} = item;
          return (
            <div key={id} className='toDo'>
              <h2>{id} - {rule}</h2>
              <img src={image} alt='inspiration'/>
              <button className='buttonDone' onClick={()=> deleteElement(id)}> ✓ </button>
            </div>
          )
        }
      )}
      </div>

      <button className='deleteAll' onClick={() => deleteOrStart()}>{start? "DONE!!!" : "START AGAIN"}</button>
      <a href='https://medium.com/axis/project-50-328982584d98' target="_blank" rel="noreferrer">link</a>

    </div>
  )
}

export default App;
