(this.webpackJsonpchinese=this.webpackJsonpchinese||[]).push([[0],{143:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(16),o=n.n(c),i=(n(83),n(33)),h=n(34),s=n(38),l=n(35),u=n(22),d=n(39),p=(n(84),n(55)),m=n(36),f=n.n(m),b=n(25),g=n.n(b),v=(n(88),p.a.TabPane),O=function(e){function t(e,n){var a;return Object(i.a)(this,t),a=Object(s.a)(this,Object(l.a)(t).call(this,e,n)),f()(Object(u.a)(a)),a}return Object(d.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=o.a.findDOMNode(this);g.a.create(e,this.props.character,{width:200,height:200,padding:0,strokeColor:"#168F16",showOutline:!0,delayBetweenLoops:1e3}).loopCharacterAnimation()}},{key:"render",value:function(){return r.a.createElement("div",{style:{height:"70vh",width:"80%"}})}}]),t}(a.Component),w=function(e){function t(e,n){var a;return Object(i.a)(this,t),a=Object(s.a)(this,Object(l.a)(t).call(this,e,n)),f()(Object(u.a)(a)),a}return Object(d.a)(t,e),Object(h.a)(t,[{key:"renderFanningStrokes",value:function(e,t){var n=e.getBoundingClientRect().width,a=Math.floor(n/5-3);console.log(a);var r="http://www.w3.org/2000/svg",c=document.createElementNS(r,"svg");c.style.width="".concat(a,"px"),c.style.height="".concat(a,"px"),c.style.border="1px solid #EEE",c.style.marginLeft="".concat(3,"px"),e.appendChild(c);var o=document.createElementNS(r,"g"),i=g.a.getScalingTransform(a,a);o.setAttributeNS(null,"transform",i.transform),c.appendChild(o),t.forEach((function(e){var t=document.createElementNS(r,"path");t.setAttributeNS(null,"d",e),t.style.fill="#555",o.appendChild(t)}))}},{key:"componentDidMount",value:function(){var e=this,t=o.a.findDOMNode(this);g.a.loadCharacterData(this.props.character).then((function(n){for(var a=0;a<n.strokes.length;a++){var r=n.strokes.slice(0,a+1);e.renderFanningStrokes(t,r)}g.a.create(t,e.props.character,{width:200,height:200,padding:0}).quiz()}))}},{key:"render",value:function(){return r.a.createElement("div",null)}}]),t}(a.Component),j=function(e){function t(e,n){var a;return Object(i.a)(this,t),a=Object(s.a)(this,Object(l.a)(t).call(this,e,n)),f()(Object(u.a)(a)),a.chineseCharacter="\u6c49",a}return Object(d.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return r.a.createElement(a.Fragment,null,r.a.createElement(p.a,{tabPosition:"right",onChange:this.changeTab},r.a.createElement(v,{tab:"\u7b14\u987a\u52a8\u753b",key:"1"},r.a.createElement(O,{character:this.chineseCharacter})),r.a.createElement(v,{tab:"\u63cf\u5199\u7ec3\u4e60",key:"3"},r.a.createElement(w,{character:this.chineseCharacter}))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},78:function(e,t,n){e.exports=n(143)},83:function(e,t,n){},88:function(e,t,n){}},[[78,1,2]]]);
//# sourceMappingURL=main.ab8a6bba.chunk.js.map