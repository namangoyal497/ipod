import React from 'react'
// import '../css/theme.css'
class Wallpaper extends React.Component{
   render(){
    const {active}=this.props;
    return(
        <div className="music">
            <h2>Wallpaper Select</h2>
            <ul>
            {["Wallpaper 1","Wallpaper 2","Wallpaper 3"].map((Element,index)=>{
                    return active===index?<li key={index} className="active theme-li"> {Element}</li>:<li 
                    key={index} className='theme-li'> {Element}</li>
                })

                } 
            </ul>
        
        </div>
    )
   }
}

export default Wallpaper ;
