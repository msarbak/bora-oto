import React from "react";
import audio from './bmw.mp3';
import {Button} from '@material-ui/core'
import {PlayArrow} from '@material-ui/icons'


class AudioTest extends React.Component{

  playAudio = () => {
    new Audio(audio).play();
  }

  render() {
    return (
        <div>
            <Button
            className="ses"
            color= "secondary"
            variant= "outlined" 
            size= "large"
            onClick={this.playAudio}
            startIcon={<PlayArrow/>} 
            >PLAY MUSIC</Button>
        </div>
    );
  }
}

export default AudioTest;