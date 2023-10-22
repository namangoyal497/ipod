import React from 'react'
import '../css/theme.css'
class Theme extends React.Component{
   render(){
    const {active}=this.props;
    return(
        <div className='music'>
            <h2>Theme Select</h2>
        
            <ul>
                {["Snow White","Black","USC Gold","Space Gray","Pearl"].map((Element,index)=>{
                    return active===index?<li key={index} className="active theme-li">{Element}</li>:<li 
                    key={index} className="theme-li"> {Element}</li>
                })

                }
            </ul>
        </div>
    )
   }
}

export default Theme;