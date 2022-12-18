import { useState } from 'react';
import './App.css';

const ClickedProps = [{
  clientX: 0,
  clientY: 0
}]

function App() {
  const [ clickedPoints, setClickedPoints ] = useState(ClickedProps)
  
  function getCoordinates(event) {
    const { clientX, clientY } = event
  
    setClickedPoints([...clickedPoints, { clientX, clientY }])
  }

  return (
    <div className="App" onClick={getCoordinates}>
      {clickedPoints.map( (clickedPoint) => {
        return (
          <div className='redDot' style={{
            left: clickedPoint.clientX - 6,
            top: clickedPoint.clientY - 7
          }}></div>
        )
      })}
    </div>
  );
}

export default App;
