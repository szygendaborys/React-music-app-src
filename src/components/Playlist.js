import React, { Component } from 'react';
import '../css/playlist.css'

class Playlist extends Component {
  render() {
    
    let types = this.props.playlist.playlistType;
    let number = this.props.playlist.playlistNum;
    let delay = this.props.playlist.playlistDelay;
    let index = this.props.playlist.playlistIndex;
    
    let playlist = index;

    playlist = playlist.map((val,index) => {
        return (
           <div id={index+`box`} key={index} className="item" value={val}> 
            <button className="btn delete-btn" index={index} onClick={(e) => this.deleteItem(e)}><span>X</span></button>
            <div className="item-description">
                <p className="text-center">{types[index]+` `+number[index]}</p>
                <div className="btn btn-item-move">
                    <button index={index} onClick={(e) => this.movePrev(e)}> &larr; </button>
                    <button index={index} onClick={(e) => this.moveNext(e)}> &rarr; </button>
                </div>
            </div>
            <div className="time-stamp">
                <p className="text-center">{delay[index]} ms &rarr; </p> 
                <div className="btn btn-time-adjust">
                    <button index={index} onClick={(e) => this.decreaseDelay(e)}>-</button>
                    <button index={index} onClick={(e) => this.increaseDelay(e)}>+</button>
                </div>                
            </div>
        </div> 
        );
    });

    // you will have {list} in return as a list of separate items
    return (
    <div>
        <ul className="list">{playlist}</ul>
    </div>
    );
  }

  //custom functions
   
  increaseDelay(e) {
      this.props.increaseDelay(e);
  }

  decreaseDelay(e) {
      this.props.decreaseDelay(e);
  }

  moveNext(e) {
    this.props.moveNext(e);
  }

  movePrev(e) {
    this.props.movePrev(e);
  }

  deleteItem(e) {
    this.props.deleteItem(e);
  }

}

export default Playlist;
