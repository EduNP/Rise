import monki from "../images/monki-flip-monkey.gif"

export default function Donation(props) {
    const {position, zIndex, useTrue, ref} = props
    
    var audio = document.getElementById("audioDonation");

    return (
      <div className='container'>
        <div style={
              {
                position:'absolute',
                left: position[5][0], 
                top: position[5][1],
                zIndex: zIndex[5]
              }
            } className='windowBodyDiv'> 
  
          <div className='insideWindowBody'>

          <audio id="audioDonation" src="https://cdn.pixabay.com/audio/2022/03/13/audio_3f98c317f0.mp3" autoPlay loop></audio>
            <p>Contribua com nosso grupo de estudos, clique no monki flip!</p><br/>
            <div className="donationButton">
                <form action="https://www.paypal.com/donate" method="post" target="_top">
                    <input type="hidden" name="business" value="ZSBNG524MHKF8" />
                    <input type="hidden" name="no_recurring" value="0" />
                    <input type="hidden" name="item_name" value="Grupo de estudos RISE" />
                    <input type="hidden" name="currency_code" value="BRL" />
                    <input type="image"src={monki} border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                    <img alt="" border="0" src="https://www.paypal.com/en_BR/i/scr/pixel.gif" width="1" height="1" />
                </form>
            </div>
          </div>
          </div>
        <div onMouseDownCapture={useTrue} ref={ref} style={
              {
                position:'absolute',
                left: position[5][0], 
                top: position[5][1],
                zIndex: zIndex[5]
              }
            } id='DonationDiv.5' className='windowHeadDiv'>
        </div>
      </div>
    );
  };