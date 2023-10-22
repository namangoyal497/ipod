import React from 'react'
import Navbar from './Navbar';
import '../css/Display.css'
import Lockscreen from './Lockscreen';
import Music from './Music';
import Settings from './Setting';
import Song from './Song';
import Menu from './Menu';
import Theme from './Theme';

import WheelColor from './WheelColor';

import Wallpaper from './Wallpaper';
import Playing from './Playing';

// Key for displaying menu
// {-2: lock screen, -1 : main menu, 0 : now playing, 1: music menu, 2,5,6 : dummy menu, 3: setings menu,4:songs menu, 7:music playing, 8 :themes menu, 9:wheel color menu, 10:wallpaper menu}


class Display extends React.Component{
    render(){
        const {musicItems,songIndx,active, menuItems,currentmenu,musicName,playing,
            audio,currentsong,currsongimg, wallpaper, wallpaperItems, noty, setNoty, notifyText}=this.props;
        return(
         <div style={{backgroundImage:`url(${wallpaperItems[wallpaper]})`}} className="display">

            <Navbar noty={noty} setNoty={setNoty} playing={playing} notifyText={notifyText}/>
            {currentmenu===-2 &&<Lockscreen wallpaper={wallpaper} wallpaperItems={wallpaperItems}/>}
            {currentmenu===-1 && <Menu currsongimg={currsongimg} menuItems={menuItems} active={active}/>}
            {currentmenu===1  && <Music musicItems={musicItems} active={active}/>}
            {currentmenu===2 && <div className="blank-div"><h1 className="empty-text">Games</h1></div>}
            {currentmenu===3 && <Settings active={active}/>}
            {currentmenu===4 && <Song  musicName={musicName} active={active}/> }
            {currentmenu===5 && <div className='blank-div'><h1 className='empty-text'>Artist</h1></div> }
            {currentmenu===6 && <div className='blank-div'><h1 className='empty-text'>Album</h1></div> }
            {(currentmenu===0 ||currentmenu===7)&& <Playing currsongimg={currsongimg} audio={audio} currentsong={currentsong}
            playing={playing} songIndx={songIndx} musicName={musicName}/>}
           
            {currentmenu===8 && <Theme active={active}/>}
            {currentmenu===9 && <WheelColor active={active}/>}
            {currentmenu===10 && <Wallpaper wallpaperItems={wallpaperItems}active={active}/>}
            
           
            </div>
        )
    }
}

export default Display;