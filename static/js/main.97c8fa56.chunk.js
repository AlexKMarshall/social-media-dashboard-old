(this["webpackJsonpsocial-media-dashboard"]=this["webpackJsonpsocial-media-dashboard"]||[]).push([[0],[,,,,function(e,a,n){e.exports=n.p+"static/media/icon-facebook.a7383764.svg"},function(e,a,n){e.exports=n.p+"static/media/icon-youtube.8499da12.svg"},function(e,a,n){e.exports=n.p+"static/media/icon-twitter.810ccee8.svg"},function(e,a,n){e.exports=n.p+"static/media/icon-instagram.991487fe.svg"},function(e,a,n){e.exports=n.p+"static/media/icon-down.69a5c77f.svg"},function(e,a,n){e.exports=n.p+"static/media/icon-up.95f916a5.svg"},function(e,a,n){e.exports=n(21)},,,,,function(e,a,n){},function(e,a,n){},function(e,a,n){},function(e,a,n){},function(e,a,n){},function(e,a,n){},function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),l=n(3),c=n.n(l),o=(n(15),n(16),n(17),n(18),n(19),n(20),n(1)),i=function(e){var a=e.count;return r.a.createElement("div",null,"Total Followers: ",function(e){return e.toLocaleString(void 0)}(a))},u=n(4),s=n.n(u),m=n(5),d=n.n(m),f=n(6),h=n.n(f),p=n(7),v=n.n(p),E={facebook:s.a,youtube:d.a,twitter:h.a,instagram:v.a},w=function(e){var a=e.brand;return r.a.createElement("img",{src:E[a],alt:""})},g=n(8),b=n.n(g),y=n(9),C=n.n(y),N=function(e){var a=e.direction,n="up"===a?C.a:b.a;return r.a.createElement("img",{src:n,alt:"".concat(a," arrow")})},k=function(e){var a=e.change,n=e.label,t=e.className,l=a>0?"up":"down",c=Math.abs(a),o="%"===n?n:" ".concat(n);return r.a.createElement("div",{className:"value-change ".concat(l," ").concat(t)},r.a.createElement(N,{direction:l}),r.a.createElement("p",null,"".concat(c).concat(o)))},x=function(e){if(e<1e4)return e;var a=Math.floor(e/1e3);return"".concat(a,"k")},F=function(e){return r.a.createElement("div",{className:"rounded-corner"},e.children)},D=function(e){var a=e.channel,n=e.userName,t=e.followerCount,l=e.followerDescription,c=e.dailyFollowerChange;return r.a.createElement(F,null,r.a.createElement("section",{className:"card headline ".concat(a)},r.a.createElement("header",null,r.a.createElement(w,{brand:a}),r.a.createElement("div",null,n)),r.a.createElement("div",{className:"big-number impact-text"},x(t)),r.a.createElement("div",{className:"stat-label"},l||"followers"),r.a.createElement("footer",null,r.a.createElement(k,{change:c,label:"Today",className:"daily-follower-change"}))))},L=function(e){var a=e.followerData;return r.a.createElement("ul",{className:"grid-container"},a.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(D,{channel:e.channel,userName:e.userName,followerCount:e.followerCount,followerDescription:e.followerDescription,dailyFollowerChange:e.dailyFollowerChange}))})))},O=[{id:1,channel:"facebook",userName:"@nathanf",followerCount:1987,dailyFollowerChange:12},{id:2,channel:"twitter",userName:"@nathanf",followerCount:1044,dailyFollowerChange:99},{id:3,channel:"instagram",userName:"@realnathanf",followerCount:11734,dailyFollowerChange:1099},{id:4,channel:"youtube",userName:"Nathan F.",followerCount:"8239",followerDescription:"subscribers",dailyFollowerChange:-144}],S=[{id:1,type:"Page Views",channel:"facebook",value:87,percentChange:3},{id:2,type:"Likes",channel:"facebook",value:52,percentChange:-2},{id:3,type:"Likes",channel:"instagram",value:5462,percentChange:2257},{id:4,type:"Profile Views",channel:"instagram",value:52396,percentChange:1375},{id:5,type:"Retweets",channel:"twitter",value:117,percentChange:303},{id:6,type:"Likes",channel:"twitter",value:507,percentChange:553},{id:7,type:"Likes",channel:"youtube",value:107,percentChange:-19},{id:8,type:"Total Views",channel:"youtube",value:1407,percentChange:-12}],j=function(e){var a=e.overview,n=a.type,t=a.channel,l=a.value,c=a.percentChange;return r.a.createElement(F,null,r.a.createElement("section",{className:"card overview"},r.a.createElement("header",null,r.a.createElement("h3",null,n),r.a.createElement(w,{brand:t})),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"big-number impact-text"},x(l)),r.a.createElement(k,{change:c,label:"%"}))))},M=function(){var e=Object(t.useState)(S),a=Object(o.a)(e,1)[0];return r.a.createElement("ul",{className:"grid-container"},a.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(j,{overview:e}))})))},T=function(){var e=Object(t.useState)(O),a=Object(o.a)(e,1)[0],n=a.map((function(e){return Number.parseInt(e.followerCount)})).reduce((function(e,a){return e+a}));return r.a.createElement("div",{className:"dashboard dark-theme"},r.a.createElement("header",null,r.a.createElement("h1",{className:"impact-text"},"Social Media Dashboard"),r.a.createElement(i,{count:n})),r.a.createElement("section",{id:"headlines"},r.a.createElement(L,{followerData:a})),r.a.createElement("section",{id:"overview"},r.a.createElement("header",null,r.a.createElement("h2",null,"Overview - Today")),r.a.createElement(M,null)))};var V=function(){return r.a.createElement(T,null)};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(V,null)),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.97c8fa56.chunk.js.map