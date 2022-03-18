(this.webpackJsonpjammming=this.webpackJsonpjammming||[]).push([[0],[,,,,,,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n,s=a(2),c=a.n(s),r=a(8),i=a.n(r),o=(a(13),a(3)),l=a(4),h=a(1),u=a(6),d=a(5),p=(a(14),a(15),a(0)),m=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={term:""},n.search=n.search.bind(Object(h.a)(n)),n.handleTermChange=n.handleTermChange.bind(Object(h.a)(n)),n.handleKeyPress=n.handleKeyPress.bind(Object(h.a)(n)),n}return Object(l.a)(a,[{key:"search",value:function(){this.props.onSearch(this.state.term)}},{key:"handleTermChange",value:function(e){this.setState({term:e.target.value})}},{key:"handleKeyPress",value:function(e){"Enter"===e.key&&this.search()}},{key:"render",value:function(){return Object(p.jsxs)("div",{className:"SearchBar",children:[Object(p.jsx)("input",{placeholder:"Enter A Song, Album, or Artist",onChange:this.handleTermChange,onKeyPress:this.handleKeyPress}),Object(p.jsx)("button",{className:"SearchButton",onClick:this.search,children:"SEARCH"})]})}}]),a}(c.a.Component),j=(a(17),a(18),a(19),function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).addTrack=n.addTrack.bind(Object(h.a)(n)),n.removeTrack=n.removeTrack.bind(Object(h.a)(n)),n}return Object(l.a)(a,[{key:"renderAction",value:function(){return this.props.isRemoval?Object(p.jsx)("button",{className:"Track-action",onClick:this.removeTrack,children:"-"}):Object(p.jsx)("button",{className:"Track-action",onClick:this.addTrack,children:"+"})}},{key:"addTrack",value:function(){this.props.onAdd(this.props.track)}},{key:"removeTrack",value:function(){this.props.onRemove(this.props.track)}},{key:"render",value:function(){return Object(p.jsxs)("div",{className:"Track",children:[Object(p.jsxs)("div",{className:"Track-information",children:[Object(p.jsx)("h3",{children:this.props.track.name}),Object(p.jsxs)("p",{children:[this.props.track.artist," | ",this.props.track.album]})]}),this.renderAction()]})}}]),a}(c.a.Component)),b=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return Object(p.jsx)("div",{className:"TrackList",children:this.props.tracks.map((function(t){return Object(p.jsx)(j,{track:t,onAdd:e.props.onAdd,onRemove:e.props.onRemove,isRemoval:e.props.isRemoval},t.id)}))})}}]),a}(c.a.Component),v=b,f=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(p.jsxs)("div",{className:"SearchResults",children:[Object(p.jsx)("h2",{children:"Results"}),Object(p.jsx)(v,{tracks:this.props.searchResults,onAdd:this.props.onAdd,isRemoval:!1})]})}}]),a}(c.a.Component),y=f,k=(a(20),function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleNameChange=n.handleNameChange.bind(Object(h.a)(n)),n}return Object(l.a)(a,[{key:"handleNameChange",value:function(e){this.props.onNameChange(e.target.value)}},{key:"render",value:function(){return Object(p.jsxs)("div",{className:"Playlist",children:[Object(p.jsx)("input",{value:this.props.playlistName,onChange:this.handleNameChange}),Object(p.jsx)(v,{tracks:this.props.playlistTracks,onRemove:this.props.onRemove,isRemoval:!0}),Object(p.jsx)("button",{className:"Playlist-save",onClick:this.props.onSave,children:"SAVE TO SPOTIFY"})]})}}]),a}(c.a.Component)),O={getAccessToken:function(){if(n)return n;var e=window.location.href.match(/access_token=([^&]*)/),t=window.location.href.match(/expires_in=([^&]*)/);if(e&&t){n=e[1];var a=Number(t[1]);return window.setTimeout((function(){return n=""}),1e3*a),window.history.pushState("Access Token",null,"/"),n}var s="https://accounts.spotify.com/authorize?client_id=".concat("b5f5294b858246e297395f07b9373725","&response_type=token&scope=playlist-modify-public&redirect_uri=").concat("http://localhost:3000/");window.location.href=s},search:function(e){var t=O.getAccessToken();return fetch("https://api.spotify.com/v1/search?type=track&q=".concat(e),{headers:{Authorization:"Bearer ".concat(t)}}).then((function(e){return e.json()})).then((function(e){return e.tracks?e.tracks.items.map((function(e){return{id:e.id,name:e.name,artist:e.artists[0].name,album:e.album.name,uri:e.uri}})):[]}))},savePlaylist:function(e,t){if(e&&t.length){var a,n=O.getAccessToken(),s={Authorization:"Bearer ".concat(n)};return fetch("https://api.spotify.com/v1/me",{headers:s}).then((function(e){return e.json()})).then((function(n){return a=n.id,fetch("https://api.spotify.com/v1/users/".concat(a,"/playlists"),{method:"POST",headers:s,body:JSON.stringify({name:e})}).then((function(e){return e.json()})).then((function(e){var a=e.id;return fetch("https://api.spotify.com/v1/playlists/".concat(a,"/tracks"),{method:"POST",headers:s,body:JSON.stringify({uris:t})})}))}))}}},T=O,N=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={searchResults:[],playlistName:"My playlist",playlistTracks:[]},n.addTrack=n.addTrack.bind(Object(h.a)(n)),n.removeTrack=n.removeTrack.bind(Object(h.a)(n)),n.updatePlaylistName=n.updatePlaylistName.bind(Object(h.a)(n)),n.savePlaylist=n.savePlaylist.bind(Object(h.a)(n)),n.search=n.search.bind(Object(h.a)(n)),n}return Object(l.a)(a,[{key:"addTrack",value:function(e){var t=this.state.playlistTracks;t.find((function(t){return t.id===e.id}))||(t.push(e),this.setState({playlistTracks:t}))}},{key:"removeTrack",value:function(e){var t=this.state.playlistTracks.filter((function(t){return t.id!==e.id}));this.setState({playlistTracks:t})}},{key:"updatePlaylistName",value:function(e){this.setState({playlistName:e})}},{key:"savePlaylist",value:function(){var e=this,t=this.state.playlistTracks.map((function(e){return e.uri}));T.savePlaylist(this.state.playlistName,t).then((function(){e.setState({playlistName:"New Playlist",playlistTracks:[]})}))}},{key:"search",value:function(e){var t=this;T.search(e).then((function(e){t.setState({searchResults:e})}))}},{key:"render",value:function(){return Object(p.jsxs)("div",{children:[Object(p.jsxs)("h1",{children:["Ja",Object(p.jsx)("span",{className:"highlight",children:"mmm"}),"ing"]}),Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(m,{onSearch:this.search}),Object(p.jsxs)("div",{className:"App-playlist",children:[Object(p.jsx)(y,{searchResults:this.state.searchResults,onAdd:this.addTrack}),Object(p.jsx)(k,{playlistName:this.state.playlistName,playlistTracks:this.state.playlistTracks,onRemove:this.removeTrack,onNameChange:this.updatePlaylistName,onSave:this.savePlaylist})]})]})]})}}]),a}(c.a.Component),g=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,22)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),n(e),s(e),c(e),r(e)}))};i.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(N,{})}),document.getElementById("root")),g()}],[[21,1,2]]]);
//# sourceMappingURL=main.68959b57.chunk.js.map