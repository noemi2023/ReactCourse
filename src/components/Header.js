import React from 'react'
import catsM from './assets/img/catsM.jpg'

function Header ()  {

    return ( 
        
        <header className="header">
        <div className="image">
        <img src={catsM} height={320} width={1020} alt=""/> 
        </div>
        </header>
     
    )  
 }

export default Header