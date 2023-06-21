
export default function About(props) {
  const {position, zIndex, useTrue, ref} = props

  return (
    <div className='container'>
      <div style={
            {
              position:'absolute',
              left: position[4][0], 
              top: position[4][1],
              zIndex: zIndex[4]
            }
          } className='windowBodyDiv'> 

        <div className='insideWindowBody'>
            <h3>Venha conhecer o RISE</h3>
            <p>
              Somos um grupo de estudos da UNESP de Rio Claro, dedicado a disseminar
              conhecimentos sobre Segurança da Informação para qualquer pessoa, independente do npivel de conhecimento prévio
            </p>
            <p>
              Acreditamos que todos devem ter acesso a informações que possam ajudá-losa proteger seus dados pessoais
              e profissionais no mundo digital em que vivemos.
            </p>
            <p>
              No RISE, você terá a oportunidade de aprender, com ética, a segurança, ofensiva e defensiva, 
              compartilhar suas experiências e se divertir ao mesmo tempo.
            </p>
            <p>
              Junte-se a nós e faça parte da nossa comunidade de Segurança da Informação! 
              Siga nosso Instagram @rise.unesp e venha ser membro! Ou hackeamos você, R1S3.
            </p>
        </div>
      </div>
      <div onMouseDownCapture={useTrue} ref={ref} style={
            {
              position:'absolute',
              left: position[4][0], 
              top: position[4][1],
              zIndex: zIndex[4]
            }
          } id='AboutDiv.4' className='windowHeadDiv'>
      </div>
    </div>
  );
};