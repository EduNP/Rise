import React from 'react';
import { useState } from 'react';
import { render } from "react-dom";
import Window from './Window';
import About from './About';
import Login from './Login';
import Register from './Register';
import Donation from './Donation';
import ChangePassword from './ChangePassword';
import Events from './Events';
import Downloads from './Downloads'
import "../styles/taskbar.css"
import folders from '../assets/folders.png';
import Internet from '../assets/Internet.png';
import opentask from '../assets/opentask.png';
import riseroundlogo from '../assets/riseroundlogo.png';
import lhama from "../images/lhama-196031198.jpg"
import { createElement } from 'react';


export default function TaskBar(props) {
  
  const {position, zIndex, useTrue, ref} = props

 
  var visibleWindows = [];
  var windowNumber = 9;


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
            <li id="About.4" onClick={pinComponent} >Sobre nós</li>
            <li id="Donation.5" onClick={pinComponent} >Doação</li>
            <li id="Events.6" onClick={pinComponent} >Eventos</li>
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
      
      //<button onClick={pinComponent}>x</button>

      const index = component.target.id.split('.')[1];

      for(var i=0; i<windowNumber; i++){
         
        if (index==i) {
          if(isVisible[index]){
            visibleWindows[index] = false;
            
          }else{
            visibleWindows[index] = true;
            
          }
        }else{
          visibleWindows[i] = isVisible[i];
        }
      }
      setIsVisible(visibleWindows)
    };
  
    const date = new Date();
    let clockDate = date.toLocaleString('pt-BR',{hour12:false, year: 'numeric', month: 'numeric', day: 'numeric'});
    let clockTime = date.toLocaleString('pt-BR',{hour12:false, hour: '2-digit', minute: '2-digit'});
    let clock = clockDate + " " + clockTime
    
    return(
      <div className='container'>
        
            <div className='taskbar'>
            <div className="clock">{clock}</div>
              <div className='icon'>
                <div className='box-container'>
                  <img draggable="false" style={{filter: (isVisible[0]==0) ? 'none': `drop-shadow(0 0 0.75rem #db338a)`, transitionDuration: '1000ms'}} id="menuButton.0" src={riseroundlogo} alt="RISEROUNDLOGO" onClick={pinComponent} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}/>
                  <a href="https://pt.wikipedia.org/wiki/Especial:Aleat%C3%B3ria" target="_blank" rel="noopener noreferrer"><img draggable="false" src={Internet} alt="INTERNET" onClick={pinComponent} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}/></a>
                  <img draggable="false" src={folders} alt="FOLDERS" id="Downloads.7" onClick={pinComponent} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}/> 
                </div>
                
              </div> 
              
            </div>
           
            {(isVisible[0] /*|| isHovering*/) && <Menu/>}
 
            {/*LOGIN*/}
            {isVisible[1] && <Login setUser={props.setUser} position={position} zIndex={zIndex} useTrue={useTrue} ref={ref}/>}
            {/*LOGIN*/}
            {/*REGISTER*/}
            {isVisible[2] && <Register position={position} zIndex={zIndex} useTrue={useTrue} ref={ref}/>}
            {/*REGISTER*/}
            {/*CHANGE PASSWORD*/}
            {isVisible[3] &&  <ChangePassword position={position} zIndex={zIndex} useTrue={useTrue } ref={ref}/>}
            {/*CHANGE PASSWORD*/}
            {isVisible[4] && <About position={position} zIndex={zIndex} useTrue={useTrue } ref={ref}/>}

            {isVisible[5] &&  <Donation position={position} zIndex={zIndex} useTrue={useTrue } ref={ref}/>}

            {isVisible[6] &&  <Events position={position} zIndex={zIndex} useTrue={useTrue } ref={ref}/>}

            {isVisible[7] &&  <Downloads position={position} zIndex={zIndex} useTrue={useTrue } ref={ref}/>}

        </div>
    );
}