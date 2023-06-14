

export default function Register(props)  {
  const {position, zIndex, useTrue, ref, handleSubmit} = props
  return (
    <div className='container'>
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
    </div>
  );
}