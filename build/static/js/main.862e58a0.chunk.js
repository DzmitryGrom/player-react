(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(e,t,a){e.exports=a(63)},36:function(e,t,a){},57:function(e,t,a){},59:function(e,t,a){},61:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"setTracks",function(){return m}),a.d(n,"setTrack",function(){return d});var i=a(0),s=a.n(i),c=a(22),r=a.n(c),l=a(5),o=(a(36),a(2)),u=a(1),m=function(e){return{type:"TRACKS",payload:e}},d=function(e){return{type:"PLAY_TRACK",payload:e}},p=a(6),k=a(7),h=a(9),v=a(8),f=a(10),y=a(25),b=a.n(y),T=new(function(){function e(){var t=this;Object(p.a)(this,e),this.getPositonSelectTrack=function(e,a){t.allTracks=a.items.length;for(var n=0;n<a.items.length;n++)a.items[n].id===e.id&&(t.curPosition=n)},this.prevPlayTrack=function(){return t.curPosition>=1?t.curPosition--:t.curPosition},this.nextPlayTrack=function(){return t.curPosition<t.allTracks?t.curPosition++:t.curPosition};var a=document.getElementById("audio");this.curPosition=null,this.allTracks=null,this.stream?this.stream=a:((a=document.createElement("audio")).setAttribute("id","audio"),document.body.appendChild(a),this.stream=a)}return Object(k.a)(e,[{key:"onTime",value:function(e){var t=this;this.stream.addEventListener("timeupdate",function(a){var n=new Date(1e3*t.stream.currentTime),i=n.getUTCHours()?n.toUTCString().slice(17,25):n.toUTCString().slice(20,25),s=(100*t.stream.currentTime/t.stream.duration).toFixed(1)+"%";e(i,s)})}},{key:"endedTrack",value:function(e){this.stream.addEventListener("ended",function(){return e()})}},{key:"trackRewind",value:function(e,t){this.stream.currentTime=(t.pageX-e.offsetLeft)/e.offsetWidth*this.stream.duration}},{key:"select",value:function(e){this.stream.src="https://api.soundcloud.com/tracks/".concat(e,"/stream?client_id=7172aa9d8184ed052cf6148b4d6b8ae6"),this.play()}},{key:"play",value:function(){this.stream.play()}},{key:"pause",value:function(){this.stream.pause()}},{key:"togglePLay",value:function(){this.stream.paused?this.play():this.pause()}}]),e}()),E=(a(57),function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(a=Object(h.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(i)))).state={isPlay:!0,isLoopTrack:!1,curTime:"00:00",curWidth:"0"},a.onPlayPrev=function(){T.curPosition>0&&(T.prevPlayTrack(),a.props.setTrack(a.props.tracks.items[T.curPosition]),T.select(a.props.tracks.items[T.curPosition].id))},a.onPlayButton=function(){a.setState({isPlay:!a.state.isPlay}),T.togglePLay()},a.onPlayNext=function(){T.curPosition+1<T.allTracks&&(T.nextPlayTrack(),a.props.setTrack(a.props.tracks.items[T.curPosition]),T.select(a.props.tracks.items[T.curPosition].id))},a.onTrackLoop=function(){a.setState({isLoopTrack:!a.state.isLoopTrack})},a.rewindTrack=function(e){T.trackRewind(a.timeline,e)},a}return Object(f.a)(t,e),Object(k.a)(t,[{key:"componentDidMount",value:function(){var e=this;T.endedTrack(function(){e.state.isLoopTrack||e.onPlayNext(),e.state.isLoopTrack&&e.onPlayButton()}),T.onTime(function(t,a){e.setState({curTime:t,curWidth:a})})}},{key:"render",value:function(){var e=this,t=this.props,a=t.isOpenList,n=t.playTrack;return s.a.createElement("div",{className:n.id?null:" disabled"},s.a.createElement("div",{className:"background",style:{backgroundImage:n.id?"url(".concat(n.user.avatar_url,")"):null}}),s.a.createElement("div",{className:a?"state state-cover state-cover-up":"state state-cover"},s.a.createElement("div",{className:"panel panel_top"},s.a.createElement("span",{className:"panel-side-title"},s.a.createElement("i",{className:"i i_arrow"}),s.a.createElement("span",{className:"panel-side-tittle-text"},"Now Playing ",n.id?s.a.createElement("span",{className:"panel-side-tittle-genre"},n.genre):null))),s.a.createElement("div",{className:"track-cover"},n.id?s.a.createElement("div",{className:"track-cover-author",style:{backgroundImage:"url(".concat(n.user.avatar_url,")")}}):null),s.a.createElement("h2",{className:"track-albom"},n.id?n.user.username:"Author name"),s.a.createElement("h3",{className:"track-caption"},s.a.createElement("span",{className:"track-caption-text"},n.id?n.title:"Track name")),s.a.createElement("div",{id:"defaultBar",className:"track-bar",onClick:n.id?this.rewindTrack:null,ref:function(t){e.timeline=t}},s.a.createElement("span",{id:"progressBar",style:{width:"".concat(this.state.curWidth)},className:"track-bar-line"},s.a.createElement("span",{id:"curTime",className:"track-bar-value"},this.state.curTime))),s.a.createElement("div",{className:"controller"},s.a.createElement("div",{className:"controller-btn"+(!T.curPosition>0?" disabled":"")},s.a.createElement("i",{className:"i icon-backward",onClick:this.onPlayPrev})),s.a.createElement("div",{className:"controller-btn"},s.a.createElement("i",{className:this.state.isPlay?"i icon-play":"i icon-pause",onClick:n.id?this.onPlayButton:null})),s.a.createElement("div",{className:"controller-btn"+(T.curPosition+1===T.allTracks?" disabled":"")},s.a.createElement("i",{className:"i icon-forward",onClick:this.onPlayNext})),s.a.createElement("div",{className:"controller-btn"},s.a.createElement("i",{className:this.state.isLoopTrack?"i icon-loop icon-loop-active":"i icon-loop",onClick:this.onTrackLoop})))))}}]),t}(i.PureComponent)),N=Object(l.b)(function(e){return Object(o.a)({},e)},function(e){return Object(o.a)({},Object(u.b)(n,e))})(E),P=(a(59),function(e){var t=e.user,a=e.duration,n=e.title,i=e.isSelect,c=new Date;return c.setTime(a),s.a.createElement("div",{className:i?"playlist-item playlist-item-select":"playlist-item"},s.a.createElement("div",{className:"pl-side_left"},s.a.createElement("span",{className:"pl-text_top"},t.username),s.a.createElement("span",{className:"pl-text_botton"},n)),s.a.createElement("div",{className:"pl-side_right"},s.a.createElement("div",{className:"pl-time-side_right"},s.a.createElement("span",{className:"pl-item-time"},c.getUTCHours()?c.toUTCString().slice(17,25):c.toUTCString().slice(20,25))),s.a.createElement("div",{className:"i i_scale"},s.a.createElement("span",{className:"i_scale-bar"}),s.a.createElement("span",{className:"i_scale-bar"}),s.a.createElement("span",{className:"i_scale-bar"}))))}),O=(a(61),function(e){var t=e.onButtonClick,a=e.isOpenList,n=e.tracks,i=e.setTrack,c=e.playTrack;return s.a.createElement("div",{className:a?"state state-playlist state-playlist-active":"state state-playlist"},s.a.createElement("div",{className:"panel panel_top panel_bg",onClick:t},s.a.createElement("span",{className:"top-panel-text"},"Playlist")),s.a.createElement("ul",{className:"playlist"},n.isReady?n.items.map(function(e,t){return s.a.createElement("li",{key:t,onClick:function(e){T.getPositonSelectTrack(e,n),i(e),T.select(e.id)}.bind(void 0,e)},s.a.createElement(P,Object.assign({},e,{isSelect:c.id===e.id})))}):"LOAD"))}),g=Object(l.b)(function(e){return Object(o.a)({},e)},function(e){return Object(o.a)({},Object(u.b)(n,e))})(O),j=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(a=Object(h.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(i)))).state={isOpenList:!1},a.handleClick=function(e){return a.setState({isOpenList:!a.state.isOpenList})},a}return Object(f.a)(t,e),Object(k.a)(t,[{key:"componentWillMount",value:function(){var e=this.props.setTracks;b.a.get("https://api.soundcloud.com/tracks?client_id=7172aa9d8184ed052cf6148b4d6b8ae6&genres=dnb&offset=1000").then(function(t){e(t.data)})}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(N,{isOpenList:this.state.isOpenList}),s.a.createElement(g,{isOpenList:this.state.isOpenList,onButtonClick:this.handleClick.bind(this)}))}}]),t}(i.PureComponent),L=Object(l.b)(function(e){return Object(o.a)({},e)},function(e){return Object(o.a)({},Object(u.b)(n,e))})(j),C=a(26),w=a.n(C),_={items:null,isReady:!1};var S=Object(u.c)({tracks:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;return"TRACKS"===t.type?Object(o.a)({},e,{items:t.payload,isReady:!0}):e},playTrack:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return"PLAY_TRACK"===t.type?Object(o.a)({},t.payload):e}}),x=Object(u.d)(S,Object(u.a)(w.a));r.a.render(s.a.createElement(l.a,{store:x},s.a.createElement(L,null)),document.getElementById("root"))}},[[27,2,1]]]);
//# sourceMappingURL=main.862e58a0.chunk.js.map