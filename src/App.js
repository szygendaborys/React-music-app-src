import React, { Component } from 'react';
import './css/App.css';
import $ from 'jquery';
import Playlist from './components/Playlist.js';
import Drum1 from './audio/Drum1.wav';
import Drum2 from './audio/Drum2.wav';
import Drum3 from './audio/Drum3.wav';
import Piano1 from './audio/Piano1.mp3';
import Piano2 from './audio/Piano2.mp3';
import Piano3 from './audio/Piano3.mp3';
import Trumpet1 from './audio/Trumpet1.wav';
import Trumpet2 from './audio/Trumpet2.wav';
import Trumpet3 from './audio/Trumpet3.wav';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      playlistType: [],
      playlistNum:[],
      playlistDelay:[],
      playlistIndex:[],
      items:0,
      defaultDelay:600
    }
  }

  render() {
    return (
      <div className="container-fluid main-container">
        <div className="container-fluid playlist-container">
        <h2>Your playlist below:</h2>
          <div className="playlist-items">
            <Playlist 
              playlist={this.state} 
              increaseDelay={(e) => this.increaseDelay(e)} 
              decreaseDelay={(e) => this.decreaseDelay(e)} 
              moveNext={(e) => this.moveNext(e)}
              movePrev={(e) => this.movePrev(e)}
              deleteItem={(e) => this.deleteItem(e)}/>
          </div>
        </div>

        <div className="main-panel row">
          <div className="col-md-9 buttons-container">
            <h2 className="text-center">Choose the button to add it to your playlist!</h2>
            <div className="container">
              <div className="row">
                <div className="col-md-4 drums text-center">
                  <div className="buttons">
                    <button type={'Drum'} number={1} onClick={(e) => this.addItem(e)}>DRUM 1</button>
                    <button type={'Drum'} number={2} onClick={(e) => this.addItem(e)}>DRUM 2</button>
                    <button type={'Drum'} number={3} onClick={(e) => this.addItem(e)}>DRUM 3</button>
                  </div>
                </div>
                
                <div className="col-md-4 trumpets text-center">
                <div className="buttons">
                    <button type={'Trumpet'} number={1} onClick={(e) => this.addItem(e)}>TRUMPET 1</button>
                    <button type={'Trumpet'} number={2} onClick={(e) => this.addItem(e)}>TRUMPET 2</button>
                    <button type={'Trumpet'} number={3} onClick={(e) => this.addItem(e)}>TRUMPET 3</button>
                  </div>
                </div>
                
                <div className="col-md-4 piano text-center">
                <div className="buttons">
                    <button type={'Piano'} number={1} onClick={(e) => this.addItem(e)}>PIANO 1</button>
                    <button type={'Piano'} number={2} onClick={(e) => this.addItem(e)}>PIANO 2</button>
                    <button type={'Piano'} number={3} onClick={(e) => this.addItem(e)}>PIANO 3</button>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="buttons col-md-12">
                  <div className="defaultdelay-button">
                    <p className="defaultdelay">Default Delay: <button onClick={(e) => this.decreaseDefaultDelay()}>-</button> {this.state.defaultDelay}ms <button onClick={(e) => this.increaseDefaultDelay()}>+</button></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3"><div className="buttons">
            <button id="play-button" className="btn-menu playbtn" onClick={(e) => this.playMusic(e)}>PLAY</button>
            <button className="btn-menu" onClick={(e) => this.saveAll()}>SAVE</button>
            <button className="btn-menu" onClick={(e) => this.loadAll()}>LOAD</button>
            <button className="btn-menu" onClick={(e) => this.resetAll()}>RESET</button>
          </div></div>
        </div>
      </div>
    );
  }

  //custom functions

  addItem(e) {
    let type = e.currentTarget.getAttribute("type"); // drum
    let number = e.currentTarget.getAttribute("number"); // 1
    
    let CurPlaylistIndex = this.state.playlistIndex; // 0
    let CurPlaylistType = this.state.playlistType; // 
    let CurPlaylistNum = this.state.playlistNum;
    let CurPlaylistDelay = this.state.playlistDelay;

    CurPlaylistIndex.push(this.state.items); // 0,1,2,3...
    CurPlaylistDelay.push(this.state.defaultDelay);
    CurPlaylistType.push(type);
    CurPlaylistNum.push(number);

    this.setState({
      playlistIndex:CurPlaylistIndex,
      items: this.state.items +1,
      playlistDelay: CurPlaylistDelay,
      playlistType: CurPlaylistType,
      playlistNum: CurPlaylistNum
    });
  }

  increaseDelay(e) {
    let index = e.currentTarget.getAttribute('index');
    let playlistDelay = this.state.playlistDelay;
    playlistDelay[index] = parseInt(playlistDelay[index]) + 100; // PARSEINT? CZEMU JEST 1000 ->1100 ->1100100
    if(playlistDelay[index] > 2500) {
      playlistDelay[index] = 2500;
    }
    this.setState({
      playlistDelay: playlistDelay
    });
   }

   decreaseDelay(e) {
    let index = e.currentTarget.getAttribute('index');
    let playlistDelay = this.state.playlistDelay;
    playlistDelay[index] = parseInt(playlistDelay[index]) - 100; 
    if(playlistDelay[index] < 0) {
      playlistDelay[index] = 0;
    }
    this.setState({
      playlistDelay: playlistDelay
    });
   }

   moveNext(e) {
     let index = e.currentTarget.getAttribute('index'); // 0, 1, 2 
     let nextIndex = parseInt(index) + 1; // 1, 2, 3
     let playlistType = this.state.playlistType;
     let playlistNum = this.state.playlistNum;
     let playlistDelay = this.state.playlistDelay;
     let playlistIndex = this.state.playlistIndex;

     let curType = playlistType[index]; // 1
     let nextType = playlistType[nextIndex]; // 2
     let curNum = playlistNum[index]; // 1 
     let nextNum = playlistNum[nextIndex]; // 2 
     let curDelay = playlistDelay[index];
     let nextDelay = playlistDelay[nextIndex];

    if(playlistIndex[nextIndex]) {   
      playlistType[nextIndex] = curType;
      playlistType[index] = nextType;
      playlistNum[nextIndex] = curNum;
      playlistNum[index] = nextNum;
      playlistDelay[nextIndex] = curDelay;
      playlistDelay[index] = nextDelay;
      this.setState({
        playlistType: playlistType,
        playlistNum: playlistNum,
        playlistDelay: playlistDelay
      });
    }
   }

   movePrev(e) { 
    let index = e.currentTarget.getAttribute('index'); // 0, 1, 2 
    let nextIndex = parseInt(index) - 1; // -1, 0, 1
    let playlistType = this.state.playlistType;
    let playlistNum = this.state.playlistNum;
    let playlistDelay = this.state.playlistDelay;

    let curType = playlistType[index]; // 2
    let nextType = playlistType[nextIndex]; // 1
    let curNum = playlistNum[index]; // 2
    let nextNum = playlistNum[nextIndex]; // 1 
    let curDelay = playlistDelay[index];
    let nextDelay = playlistDelay[nextIndex];

   if(index > 0) {   
     playlistType[nextIndex] = curType;
     playlistType[index] = nextType;
     playlistNum[nextIndex] = curNum;
     playlistNum[index] = nextNum;
     playlistDelay[nextIndex] = curDelay;
     playlistDelay[index] = nextDelay;
     this.setState({
       playlistType: playlistType,
       playlistNum: playlistNum,
       playlistDelay: playlistDelay
     });
   }
  }

  playMusic(e) {
    let $playButton = $('.playbtn');
    let totalDelay = 0;
    let audio1 = new Audio (Drum1);
    let audio2 = new Audio (Drum2);
    let audio3 = new Audio (Drum3);
    let audio4 = new Audio (Trumpet1);
    let audio5 = new Audio (Trumpet2);
    let audio6 = new Audio (Trumpet3);
    let audio7 = new Audio (Piano1);
    let audio8 = new Audio (Piano2);
    let audio9 = new Audio (Piano3);

    $playButton.css({
      "filter":"brightness(1.5)"
    });

    if(this.state.items > 0) {

      for(let i=0;i<this.state.items;i++) { // for each id   

        let instrumentName = this.state.playlistType[i];
        let instrumentNumber = this.state.playlistNum[i];

      // OD DELAYA TUTAJ
        setTimeout( () => {    
          
        if(i > 0) {
          $(`#`+(i-1)+`box`).css("filter","brightness(1)");
        }
        $(`#`+i+`box`).css('filter','brightness(1.2)');
        
        switch(instrumentName) {
          case 'Drum':
            switch(instrumentNumber) {
              case `1`:
                audio1.currentTime = 0;
                audio1.play();
                break;
              case `2`:
                audio2.currentTime = 0;
                audio2.play();
                break;
              case `3`:
                audio3.currentTime = 0;
                audio3.play();
                break;
              default:
                alert('Something happened - an error');
                break;
            }
            break;
          case 'Trumpet':
            switch(instrumentNumber) {
              case `1`:
                audio4.currentTime = 0;
                audio4.play();
                break;
              case `2`:
                audio5.currentTime = 0;
                audio5.play();
                break;
              case `3`:
                audio6.currentTime = 0;
                audio6.play();
                break;
              default:
                alert('Something happened - an error');
                break;
            }
            break;
          case 'Piano':
            switch(instrumentNumber) {
              case `1`:
                audio7.currentTime = 0;
                audio7.play();
                break;
              case `2`:
                audio8.currentTime = 0;
                audio8.play();
                break;
              case `3`:
                audio9.currentTime = 0;
                audio9.play();
                break;
              default:
                alert('Something happened - an error');
                break;
            }
            break;
          default:
              alert('Something happened - an error');
              break;
        }

        // end playing
        }, totalDelay);
      
        totalDelay = totalDelay + this.state.playlistDelay[i]; 

        if (i === (this.state.items-1)) {  // return playbutton colour and return color of the last div
          setTimeout( () => {
            $(`#`+(i)+`box`).css("filter","brightness(1)");
            $playButton.css({
              "filter":"brightness(1.0)"
            });
          }, totalDelay);
        }
      }
      // KONIEC DELAYA = DELAY[i]
    }

  }

  resetAll() {
    this.setState({
      playlistType: [],
      playlistDelay: [],
      playlistNum: [],
      playlistIndex: [],
      items: 0
    });
  }

  saveAll() {
    localStorage.setItem('localState', JSON.stringify(this.state));
    alert('Saved! :)');
  }

  loadAll() {
    const savedState = JSON.parse(localStorage.getItem('localState'));
    this.setState(savedState);
    alert('Loaded! :)');
  }

  increaseDefaultDelay() {
    if(this.state.defaultDelay < 2500){
      this.setState({
        defaultDelay: this.state.defaultDelay + 100
      });
    }
  }

  decreaseDefaultDelay() {
    if(this.state.defaultDelay > 100) {
      this.setState({
        defaultDelay: this.state.defaultDelay - 100
      });
    }
  }

  deleteItem(e) {
    let index = e.currentTarget.getAttribute("index"); //0, 1, 2

    let playlistType = this.state.playlistType;
    let playlistDelay = this.state.playlistDelay;
    let playlistNum = this.state.playlistNum;
    let playlistIndex = this.state.playlistIndex; 

  }
}

export default App;
