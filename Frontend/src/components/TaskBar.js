import React from 'react';
import { useState } from 'react';
import { render } from "react-dom";
import Window from './Window';
import "../styles/taskbar.css"
import folders from '../assets/folders.png';
import Internet from '../assets/Internet.png';
import opentask from '../assets/opentask.png';
import riseroundlogo from '../assets/riseroundlogo.png';

export default function TaskBar() {
  const [hasRender, setRender] = useState(false);
  const onShow = React.useCallback(() => setRender(true), []);
  
  const Menu = () => {
    return (
      <div className="menu">
        <ul>
            <li>Cadastrar</li>
            <li>Entrar</li>
            <li>Alterar senha</li>
            <li><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><img src="https://www.infoescola.com/wp-content/uploads/2008/05/lhama-196031198.jpg" /></a></li>
        </ul>
        {/* <img src={opentask} alt="OPENTASK" onClick={onShow} />
        <img src={opentask} alt="OPENTASK" onClick={onShow} />
        <img src={opentask} alt="OPENTASK" onClick={onShow} />
        <img src={opentask} alt="OPENTASK" onClick={onShow} />
        <img src={opentask} alt="OPENTASK" onClick={onShow} /> */}
      </div>
    );
  };
  

    const [isHovering, setIsHovering] = useState(false);
    const handleMouseOver = () => {
      setIsHovering(true);
    };
  
    const handleMouseOut = () => {
      setTimeout(() => setIsHovering(false), 5000);
    };
  
    return(
      <div className='container'>
            <div className='taskbar'>
              <div className='icon'>
                <div className='box-container'>
                
                  <img src={riseroundlogo} alt="RISEROUNDLOGO" onClick={onShow} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}/>
                  <img src={Internet} alt="INTERNET" onClick={onShow} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}/>
                  <img src={folders} alt="FOLDERS" onClick={onShow} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}/> 
                  <img src={opentask} alt="OPENTASK" onClick={onShow} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}/>
                </div>
              </div>
              
            </div>  
            <Menu />
          {hasRender && <Window/>}
        </div>
    );
}