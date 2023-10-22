import React from 'react'
//
import '../css/music.css'

class Song extends React.Component{
   render(){
    const {active,musicName}=this.props;
    return(
        <div className="music">
            <h3>Songs</h3>
            <ul>
            {musicName.map((Element,index)=>{
                return active===index?<li key={index} className="active song">&nbsp; {Element}</li>:
                <li key={index} id="song">&nbsp; {Element}</li>
            })}
            </ul>
        
        </div>
    )
   }
}

export default Song;