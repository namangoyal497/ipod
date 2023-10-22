import React from 'react'
import "../css/playing.css"
class Playing extends React.Component{
   
    constructor(){
        super();
        this.state={
            currentTime:0,
        }
        this.intervalId="";
    }
  // logic for updating the current music playbreak
    componentDidMount(){
        const{audio}=this.props;
        this.setState({currentTime:audio.currentTime});
      this.intervalId=setInterval(()=>{
        this.setState({currentTime:this.props.audio.currentTime});
      },100);
    }
    
    componentWillUnmount(){
        clearInterval(this.intervalId);
    }

   render(){
    const {currsongimg,audio
           , playing,songIndx, musicName}=this.props;
      var currentTimerender=Math.floor(this.state.currentTime/60)+":"+ Math.floor(this.state.currentTime%60);

      var durationRender=Math.floor(audio.duration/60)+":"+ Math.floor(audio.duration%60);

      const percentageRender= {width:(this.state.current/audio.duration*100)+"%"};
      if(durationRender==="NaN:NaN"){
        durationRender="0:00";
      }
      if(Math.floor(this.state.currentTime%60<10)){
        currentTimerender=Math.floor(this.state.currentTime/60)+":0"+ Math.floor(this.state.currentTime%60);

      }
return(
        <div className='now-playing-container'>
            <div className='song-details'>
                     <img src={currsongimg} alt="songimg"/>
                     <div>
                        <h6>{musicName[songIndx]}</h6>
                        {playing&& < h4 className='play-pause-nav'>Playing</h4>}
                        {!playing && <h4 className='play-pause-nav'>Pause</h4>}

                     </div>
            </div>
            <div className='status'> 
                {currentTimerender}
                <div id="progress">
                    <div style={percentageRender} id="progress-bar">

                    </div>
                </div>
                {durationRender}
            </div>
        </div>
    )
   }
}

export default Playing;