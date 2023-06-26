import { useState } from 'react' 
import axios from 'axios';

export default function ChangePassword(props)  {
  const {position, zIndex, useTrue, ref} = props

  const [password, setPassword] = useState('')
  const [confirmedPassword, setConfirmedPassword] = useState('')

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const handlePasswordConfirmationChange = (e) => {
    setConfirmedPassword(e.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if(handlePasswordSubmit())  {
      var userData = event.target.elements 
      const postData = {
        id: "",
        email: userData.email.value,
        password: userData.oldPassword.value
      }
      axios.post('https://rise.edunp.com.br/api/login', postData)
      .then(response => {
        console.log(response.data);
        //Put alterar senha
        const postNewData = {
          id: response.data.user,
          password: userData.password.value
        };  
        console.log(postNewData);

        const config = {
          headers: { Authorization: response.data.Authorization }
        };

        axios.put('https://rise.edunp.com.br/api/usuario/'+response.data.user, postNewData,config)
          .then(responseNew => {
            console.log(responseNew.data);
          })
          .catch(error => {
            console.error(error);
          });


      })
      .catch(error => {
        console.error(error);
      });
      }
  }
  
  const handlePasswordSubmit = () => {
    if (password !== confirmedPassword) {
      alert('Senhas diferentes')
      return false
    } 
    if (password.length < 10) {
      alert('Senhas devem ter no mínimo 10 caracteres')
      return false
    }
    
    return true
  }

  return (
    <div className='container'>
      <div style={
        {
          position:'absolute',
          left:position[2][0], 
          top:position[2][1],
          zIndex: zIndex[2]
        }
      } className='windowBodyDiv'> 

        <div className='insideWindowBody'>
            <form method='POST' onSubmit={handleSubmit}>
            <text>Email</text>
            <input type='text' placeholder='Email' name='email' required></input>
            <text>Senha Antiga</text>
            <input type='password' placeholder='Senha Antiga' name='oldPassword' required></input>    
            <text>Nova Senha</text>
            <input
                type='password'
                placeholder='Nova senha'
                name='password'
                value={password}
                onChange={handlePasswordChange}
                required
              />
              <text>Repetir senha</text>
              <input
                type='password'
                placeholder='Repita sua senha'
                name='password-confirmation'
                value={confirmedPassword}
                onChange={handlePasswordConfirmationChange}
                required
              />
            <input type='submit' value='Alterar'></input>
          </form>      
        </div>
      </div>

      <div onMouseDownCapture={useTrue} ref={ref} style={
        {
          position:'absolute',
          left:position[2][0], 
          top:position[2][1],
          zIndex: zIndex[2]
        }
      } id="ChangePasswordDiv.2" className='windowHeadDiv'>

      </div>
    </div>
  );
}