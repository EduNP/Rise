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
            <a href="https://docs.google.com/presentation/d/1PMjBjy7iNBWg7EW42FEievy8qUm3i7p4kGuupv4y48o/edit?usp=sharing">Introdução</a>
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