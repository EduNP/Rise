
export default function Login(props) {
  return 
    <div>
      <div style={
        {
          position:'absolute',
          left:props.position[0][0], 
          top:props.position[0][1],
          zIndex: props.zIndex[0]
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

      <div onMouseDownCapture={props.useTrue} ref={props.ref} style={
        {
          position:'absolute',
          left:props.position[0][0], 
          top:props.position[0][1],
          zIndex: props.zIndex[0]
        }
      } id="LoginDiv.0" className='windowHeadDiv'>

      </div>
    </div>
}