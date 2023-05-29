import TaskBar from './components/TaskBar';
import './App.css';
import axios from 'axios';
import {useRef, useState} from 'react';

function App() {

  var positionInit = [];
  var divNumber = 3;
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


/*

{
				"id":"",
				"name": "alex",
				"email": "alexmail",
				"password": "123",
				"score": 30,
				"admin": 0,
				"phoneNumbers": [
				]
}

*/

  const handleSubmit = (event) => {
    event.preventDefault();
    //const userData = []
    //userData.push(event.target.elements.name.value)

    var formsData = event.target.elements;

    const postData = {
      id: "",
      name: formsData.name.value,
			email: formsData.email.value,
			password: formsData.password.value,
			score: 0,
			admin: 0,
			phoneNumbers: [
				]
    };

    axios.post('http://rise-api.edunp.com.br/usuario/', postData)
      .then(response => {
        console.log(response.data);
        // Handle the response data
      })
      .catch(error => {
        console.error(error);
        // Handle the error
      });

  }


  function handleUserSignUp(userData) {
    axios.post('http://www.rise-api.edunp.com.br/usuario', userData)
    .then(response => {
      console.log(response.data);
      // Handle the response data
    })
    .catch(error => {
      console.error(error);
      // Handle the error
    });
  }

  return (  
    <body onLoad={move()}>
      <div className='container'>
      
          <h1 italics>@rise.unesp</h1>
          <div style={
            {
              position:'absolute',
              left:position[0][0], 
              top:position[0][1],
              zIndex: zIndex[0]
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
              left: position[0][0], 
              top: position[0][1],
              zIndex: zIndex[0]
            }
          } id="LoginDiv.0" className='windowHeadDiv'>

          </div>
          <div style={
            {
              position:'absolute',
              left: position[1][0], 
              top: position[1][1],
              zIndex: zIndex[1]
            }
          } className='windowBodyDiv'> 

          <div className='insideWindowBody'>
            <form method='POST' onSubmit={handleSubmit}>
            <text>Nome</text>
            <input type='text' placeholder='digite seu nome' name='name'></input>
            <text>Email</text>
            <input type='text' placeholder='Digite seu email' name='email'></input>
            <text>Registro de aluno (RA)</text>
            <input type='text' placeholder='Digite seu ra' name='ra'></input>
            <text>Senha</text>
            <input type='password' placeholder='Digite sua senha' name='password'></input>    
            <input type='password' placeholder='Repita sua senha' name='password-confirmation'></input> 
            <input type='submit' value='Cadastrar'></input>
            
            </form>      
          </div>
          </div>

          <div onMouseDownCapture={useTrue} ref={ref} style={
            {
              position:'absolute',
              left: position[1][0], 
              top: position[1][1],
              zIndex: zIndex[1]
            }
          } id="RegisterDiv.1" className='windowHeadDiv'>

          </div>
        
          <TaskBar/>
          
      </div>
    </body>
  );
}

export default App;
