import TaskBar from './components/TaskBar';
import './App.css';
import axios from 'axios';
import {useRef, useState} from 'react';

function App() {

  var positionInit = [];
  var divNumber = 9;
  var zIndexInit = [];

  for(var c=0;c<divNumber;c++){
    positionInit.push(['30%','20%']);
    zIndexInit.push([0]);
  }

  const [position, setPosition] = useState(positionInit);
  const [use, setUse] = useState(false);
  const [clicked, setClicked] = useState(0);
  const [zIndex, setZindex] = useState(zIndexInit);

  const ref = useRef();

  function useTrue(e){
      setUse(true);
      var click = e.target.id.split('.')[1];
      setClicked(click);

      for(var c=0;c<divNumber;c++){
        zIndexInit[c] = 0;
      }

      zIndexInit[click] = 100;
      setZindex(zIndexInit);
      
  }

  function move(){
    
    document.onmousemove = function(e){

      var x = e.pageX;
      var y = e.pageY;

      if(use === true){
        for(var c=0;c<divNumber;c++){
         
          if (c==clicked){
            positionInit[clicked] = [x + 'px', y + 'px'];
          }else{
            positionInit[c] = position[c];
          }
          
        }
        setPosition(positionInit);    
        
      }else{
      }
    };

    document.onmouseup = function(){
      setClicked(0);
      setUse(false);
    };

  }

  return (  
    <body onLoad={move()}>
      <div className='container'>
          <h1 italics>@rise.unesp</h1>
        
          <TaskBar position={position} zIndex={zIndex} useTrue={useTrue} ref={ref} />
          
      </div>
    </body>
  );
}

export default App;
