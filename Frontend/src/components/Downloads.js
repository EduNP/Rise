import '../styles/downloads.css'
export default function Events(props) {
  const {position, zIndex, useTrue, ref} = props
  
  return (
    <div className='container'>
      <div style={
        {
          position:'absolute',
          left:position[7][0], 
          top:position[7][1],
          zIndex: zIndex[7]
        }
      } className='windowBodyDiv'> 

        <div className='insideWindowBody'>
          <div className='downloadContent'>
            <a href="https://docs.google.com/presentation/d/1PMjBjy7iNBWg7EW42FEievy8qUm3i7p4kGuupv4y48o/edit?usp=sharing">Introdução a Cibersegurança</a><br/><br/>
            <a href="https://docs.google.com/presentation/d/1IKBNNYbniTflsnmDpnlLK4T9421Wf0cNyZQ5JDKSxmA/edit?usp=sharing">Programação em Python</a><br/><br/>
            <a href="https://docs.google.com/presentation/d/1-g499g2rzoU-nHoQkeirl20LP72tr1l-_nkdSPILpQ0/edit?usp=sharing">Princípios em Cibersegurança</a>
         
          </div>
        </div>
      </div>

      <div onMouseDownCapture={useTrue} ref={ref} style={
        {
          position:'absolute',
          left:position[7][0], 
          top:position[7][1],
          zIndex: zIndex[7]
        }
      } id="DownloadsDiv.7" className='windowHeadDiv'>
        
      </div>
    </div>
  );
}