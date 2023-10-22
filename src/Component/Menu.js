import React from 'react'
import "../css/menu.css"
import game from "../static/game.jpg"
import music from "../static/music.jpg"
import Setting from "../static/setting.png"
// import "../css/menu.css"
class Menu extends React.Component{
   render(){
    const {currsongimg,menuItems,active}=this.props;
    return(
        <div className="menu-container">
            <div className="menu">
                <ul>
                    {
                        menuItems.map((element,indx)=>{
                            return active===indx?<li key={indx} className="active"> &nbsp;{element}</li>:
                            <li key={indx}> &nbsp;{element}</li>
                        })
                    }
                </ul>

            </div>
            <div className="leaf">
                {active===0 && <img src={currsongimg} alt="" className='leaf-img'></img>}
                {active===1 && <img src={music} alt="" className='leaf-img'></img>}
                {active===2 && <img src={game} alt="" className='leaf-img'></img>}
                {active===3 && <img src={Setting} alt="" className='leaf-img'></img>}

            </div>
        
        </div>
    )
   }
}

export default Menu;