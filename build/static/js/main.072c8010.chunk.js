(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(t,e,n){t.exports=n(19)},17:function(t,e,n){},19:function(t,e,n){"use strict";n.r(e);var s=n(0),i=n.n(s),a=n(3),c=n.n(a),o=n(4),r=n(9),u=n(5),l=n(6),g=n(10),m=n(7),p=n(8),h=function(t){return i.a.createElement("img",{src:t,alt:"wojack",style:{margin:"3vh",width:"41vh",height:"41vh"}})},f=function(t){return i.a.createElement("div",{id:"container",style:{display:"flex",flexFlow:"row wrap",justifyContent:"center"}},t.map(function(t){return h(t)}))},k=function(t){function e(t){var n;return Object(u.a)(this,e),(n=Object(g.a)(this,Object(m.a)(e).call(this,t))).state={urlList:["images/stocks/1.jpg","images/stocks/2.png","images/stocks/3.jpg","images/stocks/4.jpg","images/stocks/5.png","images/stocks/6.jpg","images/stocks/7.jpg","images/stocks/8.png"]},n}return Object(p.a)(e,t),Object(l.a)(e,[{key:"componentDidMount",value:function(){this.switchImage()}},{key:"componentWillUnmount",value:function(){this.switchImage()}},{key:"nextImages",value:function(){var t=Object(o.a)(Array,Object(r.a)(this.state.urlList));t.unshift(t.pop()),this.setState(function(e){return{urlList:t}})}},{key:"switchImage",value:function(){var t=this;setInterval(function(){return t.nextImages()},3e3)}},{key:"render",value:function(){return f(this.state.urlList)}}]),e}(s.Component);n(17);c.a.render(i.a.createElement(k,null),document.getElementById("root"))}},[[11,2,1]]]);
//# sourceMappingURL=main.072c8010.chunk.js.map