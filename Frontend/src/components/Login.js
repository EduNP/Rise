import axios from 'axios';
import pinComponent from './TaskBar';

export default function Login(props) {
  const {position, zIndex, useTrue, ref} = props
  

  const handleUserSignUp = (e) => {
    e.preventDefault()

    var userData = e.target.elements 
    const postData = {
      id: "",
      email: userData.email.value,
      password: userData.password.value
    }

    axios.post('https://rise.edunp.com.br/api/login', postData)
    .then(response => {
      console.log(response);

      const config = {
        headers: { Authorization: response.data.Authorization }
      };
   
      axios.get('https://rise.edunp.com.br/api/usuario/'+response.data.user,config)
      .then(responseNew => {
        console.log(responseNew.data);
        localStorage.setItem('userName', responseNew.data.name);
        props.setUser(responseNew.data.name);
      })
      .catch(error => {
        console.error(error);
      });

    })
    .catch(error => {
      console.error(error);
    });
  }

  return (
    <div className='container'>
      <div style={
        {
          position:'absolute',
          left:position[0][0], 
          top:position[0][1],
          zIndex: zIndex[0]
        }
      } className='windowBodyDiv'> 

        <div className='insideWindowBody'>
          <form method='POST' onSubmit={handleUserSignUp}>
          <text>Email</text>
          <input type='text' placeholder='Email' name='email' required></input>
          <text>Senha</text>
          <input type='password' placeholder='Senha' name='password' required></input>    
          <input type='submit' value='Entrar'></input>
          </form>      
        </div>
      </div>

      <div onMouseDownCapture={useTrue} ref={ref} style={
        {
          position:'absolute',
          left:position[0][0], 
          top:position[0][1],
          zIndex: zIndex[0]
        }
      } id="LoginDiv.0" className='windowHeadDiv'>
        
      </div>
    </div>
  );
}