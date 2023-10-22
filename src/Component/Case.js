import React from "react"
import Display from "./Display"
import Wheel from "./Wheel"

import '../css/case.css'
class Case extends React.Component{
    render(){
        const {songIndx,active, menuItems, musicList,currentmenu,
        changeMenuBackward, changeMenuForward, updateActiveMenu,
         togglePlayPause,musicName,playing,  theme, audio,currentsong, 
         currsongimg, seekSongForward, seekSongReverse, wheelColor,
          wallpaper,them,musicItems, wallpaperItems ,noty, setNoty,notifyText
      }=this.props;
        return(
            <div className="case-container">
                <div style={{backgroundColor:theme}} className="case">
                  <Display  songIndx={songIndx} active={active} menuItems={menuItems} musicList={musicList}
         musicName={musicName} playing={playing}  theme={theme} audio={audio} currentsong={currentsong} 
        currsongimg={currsongimg}  currentmenu={currentmenu}
         wallpaper={wallpaper}  musicItems={musicItems} them={them} wallpaperItems={wallpaperItems} noty={noty} setNoty={setNoty} notifyText={notifyText}/>

                  <Wheel   active={active} menuItems={menuItems} currentmenu={currentmenu}
       changeMenuBackward={changeMenuBackward} changeMenuForward={changeMenuForward} updateActiveMenu={updateActiveMenu}
        togglePlayPause={togglePlayPause} theme={theme}
        seekSongForward={seekSongForward} seekSongReverse={seekSongReverse} wheelColor={wheelColor}/>
     
                </div>
            </div>
        )
    }
}

export default Case;