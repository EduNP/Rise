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
            <div className='taskbar'>
              <div className='icon'>
                <div className='box-container'>
                  <img src={riseroundlogo} alt="RISEROUNDLOGO" onClick={onShow}/>
                  <img src={Internet} alt="INTERNET" onClick={onShow}/>
                  <img src={folders} alt="FOLDERS" onClick={onShow}/> 
                  <img src={opentask} alt="OPENTASK" onClick={onShow}/>
                </div>
              </div>
            </div>  
          {hasRender && <Window/>}
        </div>
    );
}