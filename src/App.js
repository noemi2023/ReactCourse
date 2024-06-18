
import React, {useEffect, useState} from 'react'
import './App.css'
import GetGifs from './components/GetGifs'
import Header from './components/Header'
import Footer from './components/Footer'

  export default function App() {
  
  const [gifs, setGifs] = useState([])
  
  useEffect(function() {
     GetGifs().then(gifs => setGifs(gifs))
      }, []) 
      
    
      return(  
        <div className="App-content">
        <div className="header">
          <Header/>
        </div>  
        <h1 className="title">
            Del 19 al 28 de Julio en Buenos Aires 
        </h1>
            <section className="gifs">
              {gifs.map(singleGif => <img src={singleGif} alt=""/>)}  
              </section>
              <div className="header">
          <Footer/>
        </div>     
            
           </div>
           )   
           }