(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/Drum1.b32361a3.wav"},function(e,t,a){e.exports=a.p+"static/media/Drum2.e3f315df.wav"},function(e,t,a){e.exports=a.p+"static/media/Drum3.bb065940.wav"},function(e,t,a){e.exports=a.p+"static/media/Piano1.e90e24b6.mp3"},function(e,t,a){e.exports=a.p+"static/media/Piano2.eb819532.mp3"},function(e,t,a){e.exports=a.p+"static/media/Piano3.8c0c78ec.mp3"},function(e,t,a){e.exports=a.p+"static/media/Trumpet1.cd90aa1e.wav"},function(e,t,a){e.exports=a.p+"static/media/Trumpet2.032791a9.wav"},function(e,t,a){e.exports=a.p+"static/media/Trumpet3.78408ae1.wav"},function(e,t,a){e.exports=a(33)},,,,,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);a(20),a(22);var n=a(0),l=a.n(n),s=a(9),i=a.n(s),r=(a(27),a(2)),c=a(3),u=a(5),o=a(4),m=a(6),p=(a(29),a(1)),y=a.n(p),d=(a(31),function(e){function t(){return Object(r.a)(this,t),Object(u.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props.playlist.playlistType,a=this.props.playlist.playlistNum,n=this.props.playlist.playlistDelay,s=this.props.playlist.playlistIndex;return s=s.map(function(s,i){return l.a.createElement("div",{id:i+"box",key:i,className:"item",value:s},l.a.createElement("div",{className:"item-description"},l.a.createElement("p",{className:"text-center"},t[i]+" "+a[i]),l.a.createElement("div",{className:"btn btn-item-move"},l.a.createElement("button",{index:i,onClick:function(t){return e.movePrev(t)}}," \u2190 "),l.a.createElement("button",{index:i,onClick:function(t){return e.moveNext(t)}}," \u2192 "))),l.a.createElement("div",{className:"time-stamp"},l.a.createElement("p",{className:"text-center"},n[i]," ms \u2192 "),l.a.createElement("div",{className:"btn btn-time-adjust"},l.a.createElement("button",{index:i,onClick:function(t){return e.decreaseDelay(t)}},"-"),l.a.createElement("button",{index:i,onClick:function(t){return e.increaseDelay(t)}},"+"))))}),l.a.createElement("div",null,l.a.createElement("ul",{className:"list"},s))}},{key:"increaseDelay",value:function(e){this.props.increaseDelay(e)}},{key:"decreaseDelay",value:function(e){this.props.decreaseDelay(e)}},{key:"moveNext",value:function(e){this.props.moveNext(e)}},{key:"movePrev",value:function(e){this.props.movePrev(e)}}]),t}(n.Component)),f=a(10),b=a.n(f),v=a(11),h=a.n(v),E=a(12),D=a.n(E),k=a(13),N=a.n(k),x=a(14),w=a.n(x),T=a(15),g=a.n(T),A=a(16),I=a.n(A),C=a(17),S=a.n(C),P=a(18),O=a.n(P),j=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(u.a)(this,Object(o.a)(t).call(this,e))).state={playlistType:[],playlistNum:[],playlistDelay:[],playlistIndex:[],items:0,defaultDelay:600},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"container-fluid main-container"},l.a.createElement("div",{className:"container-fluid playlist-container"},l.a.createElement("h2",null,"Your playlist below:"),l.a.createElement("div",{className:"playlist-items"},l.a.createElement(d,{playlist:this.state,increaseDelay:function(t){return e.increaseDelay(t)},decreaseDelay:function(t){return e.decreaseDelay(t)},moveNext:function(t){return e.moveNext(t)},movePrev:function(t){return e.movePrev(t)}}))),l.a.createElement("div",{className:"main-panel row"},l.a.createElement("div",{className:"col-md-9 buttons-container"},l.a.createElement("h2",{className:"text-center"},"Choose the button to add it to your playlist!"),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-4 drums text-center"},l.a.createElement("div",{className:"buttons"},l.a.createElement("button",{type:"Drum",number:1,onClick:function(t){return e.addItem(t)}},"DRUM 1"),l.a.createElement("button",{type:"Drum",number:2,onClick:function(t){return e.addItem(t)}},"DRUM 2"),l.a.createElement("button",{type:"Drum",number:3,onClick:function(t){return e.addItem(t)}},"DRUM 3"))),l.a.createElement("div",{className:"col-md-4 trumpets text-center"},l.a.createElement("div",{className:"buttons"},l.a.createElement("button",{type:"Trumpet",number:1,onClick:function(t){return e.addItem(t)}},"TRUMPET 1"),l.a.createElement("button",{type:"Trumpet",number:2,onClick:function(t){return e.addItem(t)}},"TRUMPET 2"),l.a.createElement("button",{type:"Trumpet",number:3,onClick:function(t){return e.addItem(t)}},"TRUMPET 3"))),l.a.createElement("div",{className:"col-md-4 piano text-center"},l.a.createElement("div",{className:"buttons"},l.a.createElement("button",{type:"Piano",number:1,onClick:function(t){return e.addItem(t)}},"PIANO 1"),l.a.createElement("button",{type:"Piano",number:2,onClick:function(t){return e.addItem(t)}},"PIANO 2"),l.a.createElement("button",{type:"Piano",number:3,onClick:function(t){return e.addItem(t)}},"PIANO 3")))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"buttons col-md-12"},l.a.createElement("div",{className:"defaultdelay-button"},l.a.createElement("p",{className:"defaultdelay"},"Default Delay: ",l.a.createElement("button",{onClick:function(t){return e.decreaseDefaultDelay()}},"-")," ",this.state.defaultDelay,"ms ",l.a.createElement("button",{onClick:function(t){return e.increaseDefaultDelay()}},"+"))))))),l.a.createElement("div",{className:"col-md-3"},l.a.createElement("div",{className:"buttons"},l.a.createElement("button",{id:"play-button",className:"btn-menu playbtn",onClick:function(t){return e.playMusic(t)}},"PLAY"),l.a.createElement("button",{className:"btn-menu",onClick:function(t){return e.saveAll()}},"SAVE"),l.a.createElement("button",{className:"btn-menu",onClick:function(t){return e.loadAll()}},"LOAD"),l.a.createElement("button",{className:"btn-menu",onClick:function(t){return e.resetAll()}},"RESET")))))}},{key:"addItem",value:function(e){var t=e.currentTarget.getAttribute("type"),a=e.currentTarget.getAttribute("number"),n=this.state.playlistIndex,l=this.state.playlistType,s=this.state.playlistNum,i=this.state.playlistDelay;n.push(this.state.items),i.push(this.state.defaultDelay),l.push(t),s.push(a),this.setState({playlistIndex:n,items:this.state.items+1,playlistDelay:i,playlistType:l,playlistNum:s})}},{key:"increaseDelay",value:function(e){var t=e.currentTarget.getAttribute("index"),a=this.state.playlistDelay;a[t]=parseInt(a[t])+100,a[t]>2500&&(a[t]=2500),this.setState({playlistDelay:a})}},{key:"decreaseDelay",value:function(e){var t=e.currentTarget.getAttribute("index"),a=this.state.playlistDelay;a[t]=parseInt(a[t])-100,a[t]<0&&(a[t]=0),this.setState({playlistDelay:a})}},{key:"moveNext",value:function(e){var t=e.currentTarget.getAttribute("index"),a=parseInt(t)+1,n=this.state.playlistType,l=this.state.playlistNum,s=this.state.playlistDelay,i=this.state.playlistIndex,r=n[t],c=n[a],u=l[t],o=l[a],m=s[t],p=s[a];i[a]&&(n[a]=r,n[t]=c,l[a]=u,l[t]=o,s[a]=m,s[t]=p,this.setState({playlistType:n,playlistNum:l,playlistDelay:s}))}},{key:"movePrev",value:function(e){var t=e.currentTarget.getAttribute("index"),a=parseInt(t)-1,n=this.state.playlistType,l=this.state.playlistNum,s=this.state.playlistDelay,i=n[t],r=n[a],c=l[t],u=l[a],o=s[t],m=s[a];t>0&&(n[a]=i,n[t]=r,l[a]=c,l[t]=u,s[a]=o,s[t]=m,this.setState({playlistType:n,playlistNum:l,playlistDelay:s}))}},{key:"playMusic",value:function(e){var t=this,a=y()(".playbtn"),n=0,l=new Audio(b.a),s=new Audio(h.a),i=new Audio(D.a),r=new Audio(I.a),c=new Audio(S.a),u=new Audio(O.a),o=new Audio(N.a),m=new Audio(w.a),p=new Audio(g.a);if(a.css({filter:"brightness(1.5)"}),this.state.items>0)for(var d=function(e){var d=t.state.playlistType[e],f=t.state.playlistNum[e];setTimeout(function(){switch(e>0&&y()("#"+(e-1)+"box").css("filter","brightness(1)"),y()("#"+e+"box").css("filter","brightness(1.2)"),d){case"Drum":switch(f){case"1":l.play();break;case"2":s.play();break;case"3":i.play();break;default:alert("Something happened - an error")}break;case"Trumpet":switch(f){case"1":r.currentTime=0,r.play();break;case"2":c.play();break;case"3":u.play();break;default:alert("Something happened - an error")}break;case"Piano":switch(f){case"1":o.currentTime=0,o.play();break;case"2":m.play();break;case"3":p.play();break;default:alert("Something happened - an error")}break;default:alert("Something happened - an error")}},n),n+=t.state.playlistDelay[e],e===t.state.items-1&&setTimeout(function(){y()("#"+e+"box").css("filter","brightness(1)"),a.css({filter:"brightness(1.0)"})},n)},f=0;f<this.state.items;f++)d(f)}},{key:"resetAll",value:function(){this.setState({playlistType:[],playlistDelay:[],playlistNum:[],playlistIndex:[],items:0})}},{key:"saveAll",value:function(){localStorage.setItem("localState",JSON.stringify(this.state)),alert("Saved! :)")}},{key:"loadAll",value:function(){var e=JSON.parse(localStorage.getItem("localState"));this.setState(e),alert("Loaded! :)")}},{key:"increaseDefaultDelay",value:function(){this.state.defaultDelay<2500&&this.setState({defaultDelay:this.state.defaultDelay+100})}},{key:"decreaseDefaultDelay",value:function(){this.state.defaultDelay>0&&this.setState({defaultDelay:this.state.defaultDelay-100})}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[19,2,1]]]);
//# sourceMappingURL=main.2735ea03.chunk.js.map