import axios from 'axios';

export default function Events(props) {
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
          left:position[6][0], 
          top:position[6][1],
          zIndex: zIndex[6]
        }
      } className='windowBodyDiv'> 

        <div className='insideWindowBody'>
          EVENTOS DHR
        </div>
      </div>

      <div onMouseDownCapture={useTrue} ref={ref} style={
        {
          position:'absolute',
          left:position[6][0], 
          top:position[6][1],
          zIndex: zIndex[6]
        }
      } id="EventsDiv.6" className='windowHeadDiv'>
        
      </div>
    </div>
  );
}