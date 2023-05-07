import TaskBar from './components/TaskBar';
import './App.css';
import SmallBox from './components/SmallBox';
import {useRef, useState} from 'react';

function App() {

  const [position, setPosition] = useState(['30%','20%']);
  const [use, setUse] = useState(false);

  const ref = useRef();


  function useTrue(){
    setUse(true);
  }

  function move(){

    document.onmousemove = function(e){
  
      var x = e.pageX;
      var y = e.pageY;

      if(use == true){
        setPosition([x + 'px', y + 'px'])
      }
    }

    document.onmouseup = function(){
      setUse(false);
    };

  }

  return (  
    <body onLoad={move()}>
      <div className='container'>
      
          <h1 italics>@rise.unesp</h1>
          <div style={
            {
              position:'absolute',
              left:position[0], 
              top:position[1]
            }
          } className='windowBodyDiv'> 

          <div className='insideWindowBody'>
            <form method='GET'>
            <text>Login</text>
            <input type='text' placeholder='Login' name='login'></input>
            <text>Senha</text>
            <input type='password' placeholder='Senha' name='password'></input>    
            <input type='submit' value='Entrar'></input>
            
            </form>      
          </div>
          </div>

          <div onMouseDownCapture={useTrue} ref={ref} style={
            {
              position:'absolute',
              left:position[0], 
              top:position[1]
            }
          } className='windowHeadDiv'>

          </div>


          <TaskBar/>
          
      </div>
    </body>
  );
}

export default App;
