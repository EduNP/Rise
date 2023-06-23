import axios from 'axios';
import EventsSquares from './EventsSquares';
import {useEffect, useState} from 'react';

export default function Events(props) {
  const {position, zIndex, useTrue, ref} = props
  const [data, setData] = useState(null);

  useEffect(()=>{loadEvent();}, []);
  const loadEvent = () => {
    axios.get('https://rise.edunp.com.br/api/events/')
    .then(response => {
      setData(response.data);
    })
    .catch(error => {
      console.error(error);
    });
  }
    if(!data)
      return null;

  return (
    <div className='container'>
      <div style={
        {
          position:'absolute',
          left:position[6][0], 
          top:position[6][1],
          zIndex: zIndex[6]
        }
      } className='windowBodyDiv'> 

        <div className='insideWindowBody'>
          {data.map( (item) => <EventsSquares title={item.title} date={item.start} description={item.description}/>)}
          
        </div>
      </div>

      <div onMouseDownCapture={useTrue} ref={ref} style={
        {
          position:'absolute',
          left:position[6][0], 
          top:position[6][1],
          zIndex: zIndex[6]
        }
      } id="EventsDiv.6" className='windowHeadDiv'>
        
      </div>
    </div>
  );
}