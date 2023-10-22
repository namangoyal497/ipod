import React from "react"
import Case from "./Case";
import song1 from "../static/song/Post Malone - White Iverson.mp3"
import song2 from "../static/song/John Denver - Country Roads.mp3"
import song3 from "../static/song/Sigrid - High Five.mp3"
import song4 from "../static/song/Khalid - Young Dumb Broke.mp3"
import song5 from "../static/song/Rick Astley - Never Gonna Give You Up.mp3"
// import song1 from "../static/song/Blue Eyes Yo Yo Honey Singh 128 Kbps.mp3"

import song1img from "../static/images/Post Malone - White Iverson.png";
import song2img from "../static/images/John Denver - Country Roads.jpg";
import song3img from "../static/images/Sigrid - High Five.png";
import song4img from "../static/images/Khalid - Young Dumb Broke.jpg";
import song5img from "../static/images/Never Gonna Give You Up.png";

import wall1 from "../static/wallpaper/wallpaper1.jpg"
import wall2 from "../static/wallpaper/wallpaper2.jpg"
import wall3 from "../static/wallpaper/wallpaper3.jpg"


class App extends React.Component{
  constructor(){
    super();
    this.state={
      active:0, //Active list items
      menuItems:["Now Playing","Music","Games","Settings"],
      musicItems: ["All Songs", "Artist", "Albums"],
      musicList:[song1,song2,song3,song4,song5],
      musicimg:[song1img,song2img,song3img,song4img,song5img],
      wallpaperItems:[wall1,wall2,wall3],
      musicName:["Post Malone - White Iverson", "John Denver - Country Roads", 
      "Sigrid Raabe - High Five","Khalid - Young Dumb Broke","Rick Astley -Never Gonna Give You"],
      songIndx:0,  // current song
      lengthMenuKey:{ "-1": 3, 1:2,4:4,8:4,3:2,9:3,10:2}, // -2 -> locked  -1 ->menu  
      menuMapping:{ "-1": [0, 1, 2, 3], 1: [4, 5, 6], 3: [8, 9, 10] },  // -1 -> 4 things display  1(music)->3 elements  2(games) 3->3 settiings  
      currentmenu: -2,
      navigationStack:[] ,// used for forward and backward
      currentsong:song1,
      playing:false,
      theme:"rgb(210,210,210)",
      audio: new Audio(song1),
      currsongimg:song1img,
      wheelColor:"white",
      wallpaper:0,
      noty:false,
      notifyText:"Wallpaper changed"
    }
  }
  
  seekSongForward = (e)=>{
    if(this.state.currentmenu===-2)
    return;

    if(this.state.playing===false)
    return;
    
    if(e.detail.interval<250){
      this.state.audio.pause();
      let songIndx= this.state.songIndx;
      if(songIndx === this.state.musicimg.length-1){
        songIndx=0;
      }else
        songIndx++; 
    const currentsong= this.state.musicList[songIndx];
    const currsongimg= this.state.musicimg[songIndx];
    this.setState({
      songIndx:songIndx,currsongimg:currsongimg,currentsong:currentsong,
      audio:new Audio(currentsong)
    },()=>{
      this.state.audio.play();
    })
  }  else if(e.detail.interval>250&& e.detail.interval<10000){
      const interval = e.detail.interval/100;
      this.setState((prevState)=>{
        prevState.audio.currentTime+=interval;
        return prevState;
      })
  }
  }  
  
  seekSongReverse = (e)=>{
    if(this.state.currentmenu===-2)
    return;

    if(this.state.playing===false)
    return;
    
    if(e.detail.interval<250){
      this.state.audio.pause();
      let songIndx= this.state.songIndx;
      if(songIndx === 0){
        songIndx=this.state.musicimg.length-1;
      }else
        songIndx--; 
    const currentsong= this.state.musicList[songIndx];
    const currsongimg= this.state.musicimg[songIndx];

    this.setState({
      songIndx:songIndx,currsongimg:currsongimg,currentsong:currentsong,
      audio:new Audio(currentsong)
    },()=>{
      this.state.audio.play();
    })
  }  else if(e.detail.interval>250&& e.detail.interval<10000){
      const interval = e.detail.interval/100;
      this.setState((prevState)=>{
        prevState.audio.currentTime-=interval;
        return prevState;
      })
  }
  }  
  
  togglePlayPause=()=>{
    if(this.state.currentmenu===-2)
    return;
    if(this.state.playing===true){
      this.setState({playing:false});
      this.state.audio.pause();
    }
    if(this.state.playing===false){
      this.setState({playing:true});
      this.state.audio.play();
    }
  }
  // function for acive menu
  updateActiveMenu =(direction,menu)=>{
    if(menu!==-1 &&menu !==1 && menu!==4 &&menu !==3&& menu!==8 &&menu!==9 && menu!==10){
      return;
    }
    let min=0;
    let max=0;

    max=this.state.lengthMenuKey[menu];
    if(direction ===1){
      if(this.state.active>=max){
        this.setState({active:min});
      }
      else{
        this.setState({active:this.state.active+1})
      }
    }
    else{
      if(this.state.active<=min){
        this.setState({active:max});
      }
      else{
        this.setState({active:this.state.active-1})
      }
    }
  }

  // function for changing themes
  setThemes=(id)=>{
    let theme="";
    if(id===0){
      theme="#f0f0f0"
    }
    else if(id===1){
      theme="#555d50"
    }
    else if(id===3){
      theme="#c4aeea"
    }

    

    this.setState({theme:theme,notf:true,notifyText:"Theme Changed"})
    return;
  }
   

  setWallpaper=(id)=>{
    this.setState({wallpaper:id,notf:true,notifyText:"Wallpaper changed"})
    return ;
  }

  setWheelColor=(id)=>{
    let wheelColor="";
    if(id===0){
     wheelColor="#212121";
    }
    else if(id===1){
      wheelColor="white";
     }
    
     this.setState({wheelColor:wheelColor,noty:true,notifyText:"wheel color changed"})
  }

  changeMenuBackward=()=>{
   const navigationStack=this.state.navigationStack.slice();
    
   if(this.state.currentmenu===-2)
   return;
  else{
    const previd= navigationStack.pop();
    this.setState({currentmenu:previd,navigationStack:navigationStack,active:0});
    return;
  }
  } 

   changePlayingSong =(id,navigationStack)=>{
    const currentsong= this.state.musicList[id];
    const currsongimg= this.state.musicimg[id];
    this.state.audio.pause();
    this.setState({currentmenu:7,currentsong:currentsong,navigationStack:navigationStack,active:0,playing:true,songIndx:id,audio:new Audio(currentsong),
    currsongimg:currsongimg},()=>{
      this.state.audio.play();  
    })
    return;
   }
   
   changeMenuForward=(id,fromMenu)=>{
    const navigationStack=this.state.navigationStack.slice();
    if(fromMenu !== -2 && fromMenu !== -1 && fromMenu !== 1 && fromMenu !== 4 && fromMenu !== 3 && 
      fromMenu !== 8 && fromMenu !== 9 && fromMenu !== 0 && fromMenu !== 7 && 
      fromMenu !== 10)
    return;
     
    if(fromMenu === -2){
      navigationStack.push(this.state.currentmenu);
      this.setState({currentmenu: -1 ,navigationStack : navigationStack,active:0})
     
      return;
    }
   

    if(fromMenu=== -1){
      navigationStack.push(this.state.currentmenu);
      this.setState({currentmenu:id,navigationStack:navigationStack,active:0})
      return;
    }
    if(fromMenu=== 7 || fromMenu=== 0){
      this.togglePlayPause();
      return;
    }
    if(fromMenu === 8){
      this.setThemes(id)
      return;
    }
    if(fromMenu=== 9){
      this.setWheelColor(id);
      return;
    }
    if(fromMenu=== 10){
      this.setWallpaper(id);
      return;
    }
    navigationStack.push(this.state.currentmenu);

    if(fromMenu=== 4){
      this.changePlayingSong(id,navigationStack,fromMenu);
      return;
    }
    const currentmenuId= this.state.menuMapping[fromMenu][id];
    this.setState({currentmenu:currentmenuId,navigationStack:navigationStack,active:0});
  
   } 
   
   setNoty=()=>{
    this.setState({noty:false});
    return;
   }


  render(){
    const{audio,active,menuItems,musicItems,wallpaperItems,musicName,songIndx,musicList,
    currentmenu,currentsong,playing,theme,currsongimg,wheelColor,wallpaper,noty,
  notifyText}=this.state;
    return(
      <>
      <Case songIndx={songIndx} active={active} menuItems={menuItems} musicList={musicList} currentmenu={currentmenu}
       changeMenuBackward={this.changeMenuBackward} changeMenuForward={this.changeMenuForward} updateActiveMenu={this.updateActiveMenu}
        togglePlayPause={this.togglePlayPause} musicName={musicName} playing={playing}  theme={theme} audio={audio} currentsong={currentsong} 
        currsongimg={currsongimg} seekSongForward={this.seekSongForward} seekSongReverse={this.seekSongReverse} wheelColor={wheelColor}
         wallpaper={wallpaper} musicItems={musicItems} wallpaperItems={wallpaperItems} noty={noty} setNoty={this.setNoty} notifyText={notifyText}/>
      </>
    )
  }
}

export default App;
