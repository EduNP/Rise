import React from 'react';
import { useState } from 'react';
import { render } from "react-dom";
import Window from './Window';
import Login from './Login';
import Register from './Register';
import ChangePassword from './ChangePassword';
import "../styles/taskbar.css"
import folders from '../assets/folders.png';
import Internet from '../assets/Internet.png';
import opentask from '../assets/opentask.png';
import riseroundlogo from '../assets/riseroundlogo.png';
import lhama from "../images/lhama-196031198.jpg"



export default function TaskBar(props) {
  
  const {position, zIndex, useTrue, ref, handleSubmit} = props

 
  var visibleWindows = [];
  var windowNumber = 4;


  if(visibleWindows.length != windowNumber){
    for(var i=0; i<windowNumber; i++) {
      visibleWindows.push(false);
    }
  }

  const [isVisible, setIsVisible] = useState(visibleWindows);

  const Menu = () => {
    return (
      <div className="menu" id="idMenu.0">
        
        <ul>
            <li id="LoginLi.1" onClick={pinComponent} >Entrar</li>
            <li id="RegisterLi.2" onClick={pinComponent} >Cadastrar</li>
            <li id="ChangePassword.3" onClick={pinComponent} >Alterar senha</li>
            <li onClick={pinComponent} ><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><img src={lhama} /></a></li>
        </ul>
      </div>
    );
  };
  

    const [isHovering, setIsHovering] = useState(false);
    const handleMouseOver = () => {
      setIsHovering(true);
    };
  
    const handleMouseOut = () => {
      setIsHovering(false);
    };


    const pinComponent = (component) => {
      
      
      const index = component.target.id.split('.')[1];

      for(var i=0; i<windowNumber; i++){
         
        if (index==i) {
          visibleWindows[index] = !visibleWindows[index];
        }else{
          visibleWindows[index] = visibleWindows[index];
        }
      }
      setIsVisible(visibleWindows)
    };
  
  
    return(
      <div className='container'>
            <div className='taskbar'>
              <div className='icon'>
                <div className='box-container'>
                
                  <img id="menuButton.0" src={riseroundlogo} alt="RISEROUNDLOGO" onClick={pinComponent} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}/>
                  <img src={Internet} alt="INTERNET" onClick={pinComponent} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}/>
                  <img src={folders} alt="FOLDERS" onClick={pinComponent} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}/> 
                  <img src={opentask} alt="OPENTASK" onClick={pinComponent} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}/>
                </div>
              </div>
              
            </div>  
 
            {(isVisible[0] || isHovering) && <Menu/>}
 
            {/*LOGIN*/}
            {isVisible[1] && <Login position={position} zIndex={zIndex} useTrue={useTrue} ref={ref}/>}
            {/*LOGIN*/}
            {/*REGISTER*/}
            {isVisible[2] && <Register position={position} zIndex={zIndex} useTrue={useTrue} ref={ref} handleSubmit={handleSubmit}/>}
            {/*REGISTER*/}
            {/*CHANGE PASSWORD*/}
            {isVisible[3] &&  <ChangePassword position={position} zIndex={zIndex} useTrue={useTrue } ref={ref}/>}
            {/*CHANGE PASSWORD*/}
            

        </div>
    );
}