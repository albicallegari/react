"use strict";(self.webpackChunkreact=self.webpackChunkreact||[]).push([[639],{7634:function(e,t,n){n.d(t,{E9:function(){return a}});var r=JSON.parse('{"global":{"aboutAlb":"About Alberto","aboutCode":"Code","bubbleChart":"Bubble Chart","watches":"Watches","test":"TEST"},"aboutAlberto":{"title":"Who i am?","title1":"...And why i am?!","linkedin":"https://www.linkedin.com/in/alberto-callegari-756314142/","profileCard":{"name":"Alberto Callegari","bDay":"06/09/1993","nationality":"Treviso, Italy","role":"Software Developer Engineer","secondRole":"FE Developer"},"aboutDescription":{"feDev":"Front-end developer","swEng":"Software developer Engineer","aboutDesc":"In my academic experience I have attended several courses in computer science and software engineering always trying to keep myself updated and learn new things. In my work experience instead I practiced the entire software lifecycle, from requirements discussions with customers to UI and UX analysis and processing with the design team to software distribution and maintenance. I have collaborated on interesting projects for big clients in Italy where I have learned a lot, I love my job day by day. I worked with many technologies, from simple landing pages with simple html, css and javascript to single page application using frameworks like React.js or Angular and I have had experiences with CMS such as Magnolia CMS, Open CMS, Wordpress and Adobe Experience Manager. Right now I\'m using React/Typescript, Node, Html, SASS (CSS), React.js or Angular as Frontend Framework, i also used in the past some html template engines like Pug/Jade to make the html templates building faster.","aboutDesc2":"This react project is meant to be a set of components that I have made over time."},"techCorner":{"title":"Tech-corner"}},"aboutCode":{"title":"I collected some","code":"{code}"}}'),a=function(e){var t,n=r;null===e||void 0===e||null===(t=e.split("."))||void 0===t||t.map((function(e){return n[e]&&(n=n[e]),e}));var a=(null===e||void 0===e?void 0:e.split(".").length)>1?n:null;return Object.keys(r).map((function(t){return a||(a=r[t][e]),t})),a||e}},6961:function(e,t,n){var r=n(1413),a=n(7394),i=n(5921),o=n(7689),c=n(3811),s=n(9434),l=n(3329);t.Z=function(e){var t=e.top,n=e.bottom,u=e.right,d=e.left,h=(0,s.v9)((function(e){return e.session})).theme,f=(0,o.s0)();return(0,l.jsx)(c.Z,{"aria-label":"go-back",name:"go-back",onClick:function(){return f(-1)},sx:(0,r.Z)((0,r.Z)((0,r.Z)((0,r.Z)((0,r.Z)((0,r.Z)({position:"fixed"},!(t||n)&&{top:"16px"}),!(u||d)&&{right:"16px"}),t&&{top:t}),n&&{bottom:n}),u&&{right:u}),d&&{left:d}),children:(0,l.jsx)(a.Z,{sx:{color:"dark"===h?i.Z["color-white"]:i.Z["color-black"]}})})}},4639:function(e,t,n){n.r(t),n.d(t,{default:function(){return R}});var r=n(885),a=n(2797),i=n(6015),o=n(4882),c=n(166),s=n(7634),l=n(6961),u=function(e){return{display:"flex",marginTop:"24px",flexDirection:e?"row":"column"}},d=function(e){return{maxWidth:"200px",".MuiTab-root":{color:"dark"===e?"white":"black",textTransform:"capitalize"},".MuiTab-root.Mui-selected":{color:"dark"===e?"white":"black"}}},h=n(562),f=n(4165),m=n(5861),p=n(2982),x=n(2791),v=n(8744),g=n(763),b=n.n(g),w=n(5921);function Z(){var e=window;return{width:e.innerWidth,height:e.innerHeight}}function j(){var e=(0,x.useState)(Z()),t=(0,r.Z)(e,2),n=t[0],a=t[1];return(0,x.useEffect)((function(){function e(){a(Z())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),n}var k,y=n(9434),S=n(8202),T=(0,S.wEe)(S.kKJ,S.xbD),E=n(3329),C="large",A=function(e){var t=e.containerStyle,n=e.size,r=(0,y.v9)((function(e){return"dark"===e.session.theme}));return(0,E.jsx)("div",{className:"loader_container",style:t,children:(0,E.jsx)("div",{className:"loader loader--".concat(n),style:{background:r?"conic-gradient(#000, #e70060)":"conic-gradient(#fff, #e70060)"}})})},B=function(e){var t=e.data,n=void 0===t?[]:t,i=e.hasLabels,o=void 0!==i&&i,c=e.width,s=void 0===c?void 0:c,l=e.height,u=void 0===l?void 0:l,d=(0,x.useRef)({minValue:1,maxValue:100,mounted:!1,simulation:void 0}),h=(0,y.v9)((function(e){return e.loader.visible})),f=j(),m=f.height,g=f.width,Z=(0,y.v9)((function(e){return"dark"===e.session.theme})),k=(0,a.Z)("(min-width:".concat(w.Z["breakpoint-md"],")")),S=(0,a.Z)("(max-width:".concat(w.Z["breakpoint-sm"],")")),B=(0,x.useState)(600),D=(0,r.Z)(B,2),_=D[0],M=D[1],H=(0,x.useState)(600),I=(0,r.Z)(H,2),W=I[0],N=I[1],U=(0,x.useState)([]),V=(0,r.Z)(U,2),R=V[0],z=V[1];(0,x.useEffect)((function(){s&&u?(M(s),N(u)):k?(M(L(85,g)),N(L(85,m))):S||k?(M(L(84,g)),N(L(65,m))):(M(400),N(400))}),[s,u,k,S]),(0,x.useEffect)((function(){return d.current.mounted=!0,n.length>0&&(d.current.minValue=.95*Math.min.apply(Math,(0,p.Z)(n.map((function(e){return e.v})))),d.current.maxValue=1.05*Math.max.apply(Math,(0,p.Z)(n.map((function(e){return e.v})))),F(n)),function(){d.current.mounted=!1}}),[n]);var L=function(e,t){return e*t/100},P=function(e){(0,v.PUr)().range([25,130]).domain([d.current.minValue,d.current.maxValue]);return(S?(0,v.PUr)().range([15,30]).domain([d.current.minValue,d.current.maxValue]):S||k?(0,v.PUr)().range([20,100]).domain([d.current.minValue,d.current.maxValue]):(0,v.PUr)().range([20,40]).domain([d.current.minValue,d.current.maxValue]))(e)},F=function(e){var t=b().clone(e);d.current.simulation=(0,v.A4v)().nodes(t).velocityDecay(.5).force("x",(0,v.RUJ)().strength(.05)).force("y",(0,v.Mrm)().strength(.05)).force("collide",(0,v.Hh)((function(e){return P(e.v)+2}))).on("tick",(function(){d.current.mounted&&z(b().clone(t))}))};return h||!R.length?(0,E.jsx)(A,{containerStyle:{width:_,height:W},size:C}):(0,E.jsx)("svg",{width:_,height:W,children:function(e){var t=d.current,n=t.minValue,r=t.maxValue,a=(0,v.BYU)().domain([n,r]).interpolate(v.JHv).range(["#db8fae","#e70060"]);if(!o){var i=b().map(e,(function(e,t){return(0,E.jsx)("circle",{r:P(e.v),cx:e.x,cy:e.y,fill:a(e.v),fillOpacity:"0.2",stroke:(0,v.B8C)(a(e.v)).toString(),strokeWidth:"2"},t)}));return(0,E.jsx)("g",{transform:"translate(".concat(_/2,", ").concat(W/2,")"),children:i})}return b().map(e,(function(e,t){var n,r=P(e.v)/3,i=e.l2?function(e){var t="".concat(e.split(".")[0],".").concat(e.split(".")[1].substring(0,2));return t.startsWith("-")?t:"+".concat(t)}(e.l2):"-",o=e.l?(n=e.l,T(n.split(" ")[1])?n:"".concat(n.split(" ")[0]," ").concat(n.split(" ")[1].charAt(0))):"-";return(0,E.jsxs)("g",{transform:"translate(".concat(_/2+e.x,", ").concat(W/2+e.y,")"),children:[(0,E.jsx)("circle",{r:P(e.v),fill:a(e.v),fillOpacity:"0.2",stroke:(0,v.B8C)(a(e.v)).toString(),strokeWidth:"2"}),r<=22&&(0,E.jsx)("image",{width:"20",height:"20",xlinkHref:e.img,x:"-0.6em",y:r>10?"-30px":"-10px"}),r>22&&(0,E.jsx)("image",{width:"20",height:"20",xlinkHref:e.img,x:"-0.6em",y:"-50px"}),r>10&&(0,E.jsxs)("text",{dy:"6",fill:Z?"#fff":w.Z["color-magenta2"],textAnchor:"middle",fontSize:"".concat(r,"px"),fontWeight:"bold",x:"0",y:"0",children:[(0,E.jsx)("tspan",{children:e.l?"".concat(o):"-"}),(0,E.jsx)("tspan",{x:"0",dy:"1.2em",children:e.l2?"".concat(i,"%"):"-"})]})]},t)}))}(R)})},D=n(2388),_=function(){var e=(0,x.useState)([]),t=(0,r.Z)(e,2),n=t[0],a=t[1],i=(0,x.useMemo)((function(){var e=[];return null===n||void 0===n||n.forEach((function(t){var n={l:t.name,l2:"".concat(t.price_change_percentage_24h),img:t.image,v:t.price_change_percentage_24h};e.push(n)})),e}),[n]),o=function(){var e=(0,m.Z)((0,f.Z)().mark((function e(){var t,n;return(0,f.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.Z.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=".concat("eur","&order=market_cap_desc&per_page=100&page=1&sparkline=false"));case 2:t=e.sent,n=t.data,a(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,x.useEffect)((function(){o()}),[]),(0,E.jsx)(B,{data:i,hasLabels:!0})},M=n(4565),H=function(){var e=(0,a.Z)("(min-width:".concat(w.Z["breakpoint-md"],")"));return(0,E.jsxs)(i.Z,{sx:{display:"flex",flexDirection:e?"row":"column",justifyContent:"center",gap:1},children:[(0,E.jsx)(M.Z,{sx:{fontSize:"2rem",fontWeight:"500",fontFamily:"Nunito, sans-serif"},children:(0,s.E9)("aboutCode.title")}),(0,E.jsx)(M.Z,{sx:{fontSize:"2rem"},fontFamily:"fira code, monospace",children:(0,s.E9)("aboutCode.code")})]})},I=n(1413),W=n(5987),N=["index","children","selectedTab"],U=function(e){var t=e.index,n=e.children,r=e.selectedTab,a=(0,W.Z)(e,N);return(0,E.jsx)("div",(0,I.Z)((0,I.Z)({className:"TabPanel",role:"tabpanel",hidden:r!==t,id:"simple-tabpanel-".concat(t),"aria-labelledby":"simple-tab-".concat(t)},a),{},{children:r===t&&n}))},V=function(){var e=j(),t=e.height,n=e.width,o=(0,a.Z)("(min-width:".concat(w.Z["breakpoint-md"],")")),c=(0,x.useState)(),s=(0,r.Z)(c,2),l=s[0],u=s[1],d=(0,x.useState)(),h=(0,r.Z)(d,2),f=h[0],m=h[1],p=(0,x.useState)(),v=(0,r.Z)(p,2),g=v[0],b=v[1],Z=(0,x.useState)(),k=(0,r.Z)(Z,2),y=k[0],S=k[1],T=function(e,t){return e*t/100},C=function(){var e=(new Date).getHours(),t=(new Date).getMinutes(),n=(new Date).getSeconds();u(e),m(t),b(n),S(e>=12?"PM":"AM")};return(0,x.useEffect)((function(){var e=(new Date).getHours(),t=(new Date).getMinutes(),n=(new Date).getSeconds();u(e),m(t),b(n),u(e>12?e-12:e),S(e>=12?"PM":"AM");var r=setInterval(C,1e3);return function(){clearInterval(r)}}),[]),(0,E.jsxs)(i.Z,{className:"watches",sx:{width:T(o?85:84,n),height:T(o?85:65,t),boxSizing:"border-box",display:"flex",flexDirection:o?"row":"column",gap:"40px",justifyContent:"center",alignItems:"center"},children:[(0,E.jsx)("div",{className:"watches_circle",children:(0,E.jsx)("div",{id:"hour",children:l})}),(0,E.jsx)("div",{className:"watches_circle",children:(0,E.jsx)("div",{id:"minutes",children:f})}),(0,E.jsx)("div",{className:"watches_circle",children:(0,E.jsx)("div",{id:"seconds",children:g})}),(0,E.jsx)("div",{className:"ap",children:(0,E.jsx)("div",{className:"ampm",children:y})})]})};!function(e){e.BUBBLE_CHART="BUBBLE_CHART",e.WATCHES="WATCHES",e.TEST="TEST"}(k||(k={}));var R=function(){var e=(0,a.Z)("(prefers-color-scheme: dark)"),t=(0,a.Z)("(min-width:".concat(w.Z["breakpoint-md"],")")),n=(0,y.v9)((function(e){return e.session})).theme,f=(0,y.I0)(),m=(0,x.useState)(k.BUBBLE_CHART),p=(0,r.Z)(m,2),v=p[0],g=p[1];(0,x.useEffect)((function(){f(e?(0,h.Dc)("dark"):(0,h.Dc)("light"))}),[]),(0,x.useEffect)((function(){f(e?(0,h.Dc)("dark"):(0,h.Dc)("light"))}),[e]);return(0,E.jsx)(i.Z,{className:"aboutCode",children:(0,E.jsxs)(i.Z,{className:"aboutCode_container",children:[(0,E.jsx)(H,{}),(0,E.jsx)(l.Z,{}),(0,E.jsxs)(i.Z,{sx:u(t),children:[(0,E.jsx)(i.Z,{children:(0,E.jsxs)(o.Z,{sx:d(n),value:v,onChange:function(e,t){g(t)},"aria-label":"tab dettaglio elemento",orientation:t?"vertical":"horizontal",children:[(0,E.jsx)(c.Z,{value:k.BUBBLE_CHART,label:(0,s.E9)("global.bubbleChart")}),(0,E.jsx)(c.Z,{value:k.WATCHES,label:(0,s.E9)("global.watches")}),(0,E.jsx)(c.Z,{value:k.TEST,label:(0,s.E9)("global.test")})]})}),(0,E.jsxs)(i.Z,{children:[(0,E.jsx)(U,{value:k.BUBBLE_CHART,index:k.BUBBLE_CHART,selectedTab:v,children:(0,E.jsx)(_,{})}),(0,E.jsx)(U,{value:k.WATCHES,index:k.WATCHES,selectedTab:v,children:(0,E.jsx)(V,{})}),(0,E.jsx)(U,{value:k.TEST,index:k.TEST,selectedTab:v,children:(0,E.jsx)("p",{children:"TEST-TEST-TEST-TEST-TEST"})})]})]})]})})}},5921:function(e,t){t.Z={"breakpoint-xs":"0","breakpoint-sm":"576px","breakpoint-md":"768px","breakpoint-lg":"992px","breakpoint-xl":"1200px","breakpoint-xxl":"1400px","color-white":"#fff","color-black":"#000","color-white50":"#8c8d93","color-white20":"#2c2e34"}}}]);
//# sourceMappingURL=639.a432ac50.chunk.js.map