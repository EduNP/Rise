
export default function Login(props) {
  const {position, zIndex, useTrue, ref} = props
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
          left:position[0][0], 
          top:position[0][1],
          zIndex: zIndex[0]
        }
      } id="LoginDiv.0" className='windowHeadDiv'>

      </div>
    </div>
  );
}