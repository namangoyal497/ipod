import React from 'react'
import '../css/music.css'
class Music extends React.Component{
   render(){
    const {musicItems,active}=this.props;
    return(
        <div className="music" >
           <h3>Music</h3>
               
          <ul>
           {musicItems.map((Element,index)=>{
                return active===index?<li key={index} className='active'>&nbsp; {Element}</li>:
                <li key={index}>&nbsp; {Element}</li>
            })}
          </ul>
        </div>
    )
   }
}

export default Music;