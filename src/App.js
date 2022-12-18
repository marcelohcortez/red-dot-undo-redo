import { useState } from 'react';
import './App.css';

function App() {
  const [ clickedCoords, setClickedCoords ] = useState([])
  const [ undoDots, setUndoDots ] = useState([])
  
  function getCoordinates(event) {
    const { clientX, clientY } = event
    
    setUndoDots([])    
    setClickedCoords([...clickedCoords, { clientX, clientY }])
  }

  function undoDot() {
    const newClickedCoords = [...clickedCoords]
    const undoDot = newClickedCoords.pop()

    if (!undoDots) return

    setClickedCoords(newClickedCoords)
    setUndoDots([...undoDots, undoDot])
  }

  function redoDot() {
    const newUndoDots = [...undoDots]
    const redoDotLast = newUndoDots.pop()
    
    if (!redoDotLast) return

    setUndoDots(newUndoDots)
    setClickedCoords([...clickedCoords, redoDotLast])
  }

  return (
    <>
      <button disabled={ clickedCoords.length === 0 } className='undoDot' onClick={ undoDot }>Undo</button>
      <button disabled={ undoDots.length === 0 } className='redoDot' onClick={ redoDot }>Redo</button>
      <div className="App" onClick={ getCoordinates }>
        {clickedCoords.map( (clickedPoint, index) => {
          return (
            <div key={ index } className='redDot' style={{
              left: clickedPoint.clientX - 6,
              top: clickedPoint.clientY - 7
            }}></div>
          )
        })}
      </div>
    </>
    
  );
}

export default App;
