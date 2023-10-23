import React from 'react'
import "../css/theme.css"
class WheelColor extends React.Component{
   render(){
    const {active}=this.props;
    return(
        <div className="music">
            <h2>Wheel Color Select</h2>
            <ul>
            {["Black","White","Red"].map((Element,index)=>{
                    return active===index?<li key={index} className="active theme-li">{Element}</li>:<li 
                    key={index}>{Element}</li>
                })

                } 
            </ul>
        
        </div>
    )
   }
}

export default WheelColor;