

export default function ChangePassword(props)  {
  const {position, zIndex, useTrue, ref} = props
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
          <form method='GET'>
          <text>Nova Senha</text>
          <input type='text' placeholder='Senha' name='password'></input>
          <text>Repetir senha</text>
          <input type='password' placeholder='Senha' name='password'></input>    
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