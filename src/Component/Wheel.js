import React from "react"
import "../css/wheel.css"
import {AiOutlineForward} from 'react-icons/ai'
import {BsFillPlayFill} from 'react-icons/bs'
 import  {BiPause} from 'react-icons/bi'
  import {AiFillBackward} from 'react-icons/ai'

import ZingTouch from 'zingtouch';
  class Wheel extends React.Component{
    constructor(){
        super();
        // this.state={
        //     angle:0
        // }
        this.angle=0;
    }
    render(){
        const {active,currentmenu, changeMenuForward,theme, wheelColor}=this.props; 
        return(

            <div className="wheel-container" id="wheel-container">
            <div className="wheel" id="wheel" style={{backgroundColor:wheelColor}}>
                <div className="control" id="menu">
                    <div  style={{color:theme}}>Menu</div>
                </div>
                <div className="control" id="forward">
                <AiOutlineForward style={{color:theme}}/>
                </div>
                <div className="control" id="play-pause">
                    <div>
                        <BsFillPlayFill style={{color:theme}}/>
                        <BiPause style={{color:theme}}/>
                    </div>
                </div>
                <div className="control" id="reverse">
                    <AiFillBackward style={{color:theme}}/>
                </div>
            </div>
            <div style={{backgroundColor:theme}} className="blank" id="blank" onClick={() => { changeMenuForward(active, currentmenu) }}></div>
             </div>
        )
    }
    
    wheelControll=(e)=>{
        const {updateActiveMenu,currentmenu}=this.props;
        if(e.detail.distanceFromOrigin===0){
           this.angle=e.detail.angle;

        }
        if(Math.abs(this.angle-e.detail.angle)>300){
            this.angle=Math.abs(e.detail.angle);
            if(e.detail.distanceFromLast===0){
                return;
            }
            else if(e.detail.distanceFromLast<0){
                updateActiveMenu(1,currentmenu);
            }
            else{
                updateActiveMenu(0,currentmenu);
            }
        }
        else if(Math.abs(this.angle-e.detail.angle)>15){
            this.angle=Math.abs(e.detail.angle);
            if(e.detail.distanceFromLast ===0 )
            return;
            else if(e.detail.distanceFromLast>0)
            updateActiveMenu(1,currentmenu);
            else{
                updateActiveMenu(0,currentmenu);
            }
        }
    }

    componentDidMount(){
        const {changeMenuBackward,togglePlayPause,seekSongForward,seekSongReverse}=this.props; 

        const wheelControll=this.wheelControll;
        const wheel=document.getElementById("wheel");
        const activeRegion=ZingTouch.Region(wheel);
        const menuicon=document.getElementById("menu");
        const playpause=document.getElementById("play-pause");
        const reverse=document.getElementById("reverse");
        const forward=document.getElementById("forward");

        const longTapGesture=new ZingTouch.Tap({
            maxDelay:10000,
            numInput :1,
            tolerance:1,
        })
          activeRegion.bind(menuicon,"tap",function(e){
            changeMenuBackward();
          })
          activeRegion.bind(wheel,"rotate",function(e){
            wheelControll(e);
          });
          activeRegion.bind(playpause,"tap",function(e){
            togglePlayPause();
          });

          activeRegion.bind(reverse,longTapGesture,function(e){
            seekSongReverse(e);
          });
          activeRegion.bind(forward, longTapGesture, function (e) {
            seekSongForward(e);
        });
    }
}


export default Wheel;