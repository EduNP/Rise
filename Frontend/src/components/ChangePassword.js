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

      axios.post('https://rise.edunp.com.br/api/usuario/', postData)
        .then(response => {
          console.log(response.data);
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
    if (password.length() < 10) {
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
          <form method='GET' onSubmit={handleSubmit}>
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