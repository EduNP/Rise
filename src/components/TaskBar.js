import React from 'react';
import { useState } from 'react';
import Window from './Window';
import "../styles/taskbar.css"
import folders from '../assets/folders.png';
import Internet from '../assets/Internet.png';
import opentask from '../assets/opentask.png';
import riseroundlogo from '../assets/riseroundlogo.png';

export default function TaskBar() {
  const [hasRender, setRender] = useState(false);
  const onShow = React.useCallback(() => setRender(true), []);

    return(
        <div className='container'> 
            <div className='PinkBox'>
              <div className='icon'>
                <div className='box-container'>
                  <img src={riseroundlogo} alt="RISEROUNDLOGO" onClick={onShow}/>
                  {hasRender && <Window/>}
                  <img src={Internet} alt="INTERNET" onClick={onShow}/>
                  {hasRender && <Window/>}
                  <img src={folders} alt="FOLDERS" onClick={onShow}/>
                  {hasRender && <Window/>} 
                  <img src={opentask} alt="OPENTASK" onClick={onShow}/>
                  {hasRender && <Window/>}
                </div>
              </div>
            </div>  
        </div>
    );
}