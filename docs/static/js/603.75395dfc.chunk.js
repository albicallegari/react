"use strict";(self.webpackChunkreact_portfolio=self.webpackChunkreact_portfolio||[]).push([[603],{5603:function(e,t,n){n.r(t),n.d(t,{default:function(){return ge}});var r=n(9439),i=n(5193),a=n(4554),c=n(5228),s=n(7913),o=n(7634),l=n(6961),u=n(1413),d=function(e,t){return(0,u.Z)({display:"flex",marginTop:"24px",flexDirection:e?"row":"column"},!e&&!t&&{height:"calc(100vh - 144px)",overflowY:"scroll"})},h=function(e){return{".MuiTab-root":{color:"dark"===e?"white":"black",textTransform:"capitalize"},".MuiTab-root.Mui-selected":{color:"dark"===e?"white":"black"}}},f=n(562),x=n(4165),m=n(5861),v=n(4963),p=n(3433),g=n(2791),j=n(5790),w=n(763),b=n.n(w),Z=n(5921);function y(){var e=window;return{width:e.innerWidth,height:e.innerHeight}}function E(){var e=(0,g.useState)(y()),t=(0,r.Z)(e,2),n=t[0],i=t[1];return(0,g.useEffect)((function(){function e(){i(y())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),n}var _=n(9434),k=n(4523),C=n(3329),S="large",D=function(e){var t=e.containerStyle,n=e.size,r=(0,_.v9)((function(e){return"dark"===e.session.theme}));return(0,C.jsx)("div",{className:"loader_container",style:t,children:(0,C.jsx)("div",{className:"loader loader--".concat(n),style:{background:r?"conic-gradient(#000, #e70060)":"conic-gradient(#fff, #e70060)"}})})},T=function(e){var t="".concat(e.split(".")[0],".").concat(e.split(".")[1].substring(0,2));return t.startsWith("-")?t:"+".concat(t)},N=function(e){var t=e.data,n=void 0===t?[]:t,a=e.hasLabels,c=void 0!==a&&a,s=e.width,o=void 0===s?void 0:s,l=e.height,u=void 0===l?void 0:l,d=e.onSelect,h=(0,g.useRef)({minValue:1,maxValue:100,mounted:!1,simulation:void 0}),f=(0,_.v9)((function(e){return e.loader.visible})),x=E(),m=x.height,v=x.width,w=(0,_.v9)((function(e){return"dark"===e.session.theme})),y=(0,i.Z)("(min-width:".concat(Z.Z["breakpoint-lg"],")")),N=(0,i.Z)("(min-width:".concat(Z.Z["breakpoint-md"],")")),A=(0,i.Z)("(max-width:".concat(Z.Z["breakpoint-sm"],")")),L=(0,g.useState)(600),M=(0,r.Z)(L,2),H=M[0],O=M[1],B=(0,g.useState)(600),R=(0,r.Z)(B,2),I=R[0],V=R[1],W=(0,g.useState)([]),F=(0,r.Z)(W,2),U=F[0],J=F[1];(0,g.useEffect)((function(){o&&u?(O(o),V(u)):y?(O(P(85,v)),V(P(85,m))):N&&!y?(O(P(80,v)),V(P(85,m))):A||N?(O(P(84,v)),V(P(65,m))):(O(400),V(400))}),[o,u,N,A]),(0,g.useEffect)((function(){return h.current.mounted=!0,n.length>0&&(h.current.minValue=.95*Math.min.apply(Math,(0,p.Z)(n.map((function(e){return e.v})))),h.current.maxValue=1.05*Math.max.apply(Math,(0,p.Z)(n.map((function(e){return e.v})))),K(n)),function(){h.current.mounted=!1}}),[n]);var P=function(e,t){return e*t/100},z=function(e){var t=h.current,n=t.minValue,r=t.maxValue;return e<0?(0,j.BYU)().domain([n,0]).interpolate(j.JHv).range(["#fc0000","#f7cbcb"])(e):(0,j.BYU)().domain([0,r]).interpolate(j.JHv).range(["#b3e8bc","#02db26"])(e)},G=function(e){(0,j.PUr)().range([25,130]).domain([h.current.minValue,h.current.maxValue]);return(A?(0,j.PUr)().range([15,30]).domain([h.current.minValue,h.current.maxValue]):A||N?(0,j.PUr)().range([20,100]).domain([h.current.minValue,h.current.maxValue]):(0,j.PUr)().range([20,40]).domain([h.current.minValue,h.current.maxValue]))(e)},K=function(e){var t=b().clone(e);h.current.simulation=(0,j.A4v)().nodes(t).velocityDecay(.5).force("x",(0,j.RUJ)().strength(.051)).force("y",(0,j.Mrm)().strength(.051)).force("collide",(0,j.Hh)((function(e){return G(e.v)+3}))).on("tick",(function(){h.current.mounted&&J(b().clone(t))}))};return f||!U.length?(0,C.jsx)(D,{containerStyle:{width:H,height:I},size:S}):(0,C.jsx)("svg",{width:H,height:I,children:function(e){var t=h.current,n=t.minValue,r=t.maxValue,i=(0,j.BYU)().domain([n,r]).interpolate(j.JHv).range(["#fc0000","#02db26"]);if(!c){var a=b().map(e,(function(e,t){return(0,C.jsx)("circle",{r:G(e.v),cx:e.x,cy:e.y,fill:i(e.v),fillOpacity:"0.2",stroke:(0,j.B8C)(i(e.v)).toString(),strokeWidth:"2",onClick:function(){return d(e.id)}},t)}));return(0,C.jsx)("g",{transform:"translate(".concat(H/2,", ").concat(I/2,")"),children:a})}return b().map(e,(function(e,t){var n,r=G(e.v)/3,i=e.l2?T(e.l2):"-",a=e.l?(n=e.l,(0,k.Z)(n.split(" ")[1])?n:"".concat(n.split(" ")[0]," ").concat(n.split(" ")[1].charAt(0))):"-";return(0,C.jsxs)("g",{transform:"translate(".concat(H/2+e.x,", ").concat(I/2+e.y,")"),onClick:function(){return d(e.id)},children:[(0,C.jsx)("circle",{r:G(e.v),fill:z(e.v),fillOpacity:"0.2",stroke:(0,j.B8C)(z(e.v)).toString(),strokeWidth:"2"}),r<=22&&(0,C.jsx)("image",{width:"20",height:"20",xlinkHref:e.img,x:"-0.6em",y:r>10?"-30px":"-10px"}),r>22&&(0,C.jsx)("image",{width:"20",height:"20",xlinkHref:e.img,x:"-0.6em",y:"-50px"}),r>10&&(0,C.jsxs)("text",{dy:"6",fill:w?"#fff":Z.Z["color-magenta2"],textAnchor:"middle",fontSize:"".concat(r,"px"),fontWeight:"bold",x:"0",y:"0",children:[(0,C.jsx)("tspan",{children:e.l?"".concat(a):"-"}),(0,C.jsx)("tspan",{x:"0",dy:"1.2em",children:e.l2?"".concat(i,"%"):"-"})]})]},t)}))}(U)})},A=function(e){return"https://api.coingecko.com/api/v3/coins/".concat(e)},L=n(4722),M=n(890),H=n(3263),O=function(e){return{".MuiPaper-root.MuiDialog-paper":{backgroundColor:e?Z.Z["color-grey-hover"]:Z.Z["color-white"],backdropFilter:"blur(15px)"}}},B=function(e){return{color:e?Z.Z["color-white"]:Z.Z["color-black"],fontWeight:"700",textAlign:"center"}},R=function(e){return{color:e?Z.Z["color-white"]:Z.Z["color-black"],textAlign:"center"}},I=function(){var e=(0,_.v9)((function(e){return"dark"===e.session.theme})),t=(0,g.useState)([]),n=(0,r.Z)(t,2),i=n[0],c=n[1],s=(0,_.I0)(),o=(0,_.v9)((function(e){return e.dialog})),l=o.open,u=o.title,d=o.logo,h=o.currentPrice,f=o.percentage24,p=(0,g.useMemo)((function(){var e=[];return null===i||void 0===i||i.forEach((function(t){var n={l:t.name,l2:"".concat(t.price_change_percentage_24h),img:t.image,v:t.price_change_percentage_24h,id:t.id};e.push(n)})),e}),[i]),j=function(){var e=(0,m.Z)((0,x.Z)().mark((function e(){var t,n;return(0,x.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H.Z.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=".concat("eur","&order=market_cap_desc&per_page=100&page=1&sparkline=false"));case 2:t=e.sent,n=t.data,c(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=function(){var e=(0,m.Z)((0,x.Z)().mark((function e(t){var n,r;return(0,x.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H.Z.get(A(t));case 2:n=e.sent,r=n.data,console.log("data.market_data.price_change_percentage_24h",r.market_data.price_change_percentage_24h),s((0,v.vC)({title:r.name,logo:r.image.small,currentPrice:r.market_data.current_price.eur,percentage24:T("".concat(r.market_data.price_change_percentage_24h_in_currency.eur))}));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,g.useEffect)((function(){j()}),[]),(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(N,{data:p,hasLabels:!0,onSelect:w}),(0,C.jsx)(L.Z,{open:l,onClose:function(){return s((0,v.Wr)())},sx:O(e),children:(0,C.jsxs)(a.Z,{sx:{padding:"24px",display:"flex",flexDirection:"column",gap:"16px"},component:"div",children:[(0,C.jsx)(a.Z,{sx:{display:"flex",justifyContent:"center"},component:"div",children:(0,C.jsx)("img",{src:d,alt:"logo"})}),(0,C.jsx)(M.Z,{sx:B(e),id:"dialog-coin-name",children:u}),(0,C.jsx)(M.Z,{sx:R(e),id:"coin-current-price",children:"Current price: ".concat(h,"\u20ac")}),(0,C.jsx)(M.Z,{sx:R(e),id:"coin-percentage-24",children:"24h: ".concat(f,"%")})]})})]})};var V,W=n.p+"static/media/coingecko.977d6a0aa89b1300865c1e9b164d475f.svg";!function(e){e.BUBBLE_CHART="BUBBLE_CHART",e.GAME_OF_LIFE="GAME_OF_LIFE",e.WATCHES="WATCHES",e.WORD_CLOCK="WORD_CLOCK",e.THREE_JS="THREE_JS",e.TEST="TEST"}(V||(V={}));var F=function(e){var t=e.tabSelected,n=(0,i.Z)("(prefers-color-scheme: dark)"),r=(0,i.Z)("(min-width:".concat(Z.Z["breakpoint-md"],")"));return(0,C.jsxs)(a.Z,{component:"div",sx:{display:"flex",flexDirection:r?"row":"column",justifyContent:"center",gap:1},children:[(0,C.jsx)(M.Z,{sx:{fontSize:"2rem",fontWeight:"500",fontFamily:"Nunito, sans-serif"},children:(0,o.E9)("aboutCode.title")}),(0,C.jsx)(M.Z,{sx:{fontSize:"2rem"},fontFamily:"fira code, monospace",children:(0,o.E9)("aboutCode.code")}),t===V.BUBBLE_CHART&&r&&(0,C.jsx)(a.Z,{component:"div",sx:{position:"absolute",left:"16px",img:{width:"120px"},a:{display:"flex",gap:"8px",color:n?"white":"black"}},children:(0,C.jsxs)("a",{href:"https://www.coingecko.com/",children:[(0,C.jsx)("p",{children:"Powered by"}),(0,C.jsx)("img",{src:W,alt:"cg-logo"})]})})]})},U=n(5987),J=["index","children","selectedTab"],P=function(e){var t=e.index,n=e.children,r=e.selectedTab,i=(0,U.Z)(e,J);return(0,C.jsx)("div",(0,u.Z)((0,u.Z)({className:"TabPanel",role:"tabpanel",hidden:r!==t,id:"simple-tabpanel-".concat(t),"aria-labelledby":"simple-tab-".concat(t)},i),{},{children:r===t&&n}))},z=function(){var e=E(),t=e.height,n=e.width,c=(0,i.Z)("(min-width:".concat(Z.Z["breakpoint-md"],")")),s=(0,g.useState)(),o=(0,r.Z)(s,2),l=o[0],u=o[1],d=(0,g.useState)(),h=(0,r.Z)(d,2),f=h[0],x=h[1],m=(0,g.useState)(),v=(0,r.Z)(m,2),p=v[0],j=v[1],w=(0,g.useState)(),b=(0,r.Z)(w,2),y=b[0],_=b[1],k=function(e,t){return e*t/100},S=function(e){return e<10?"0".concat(e):"".concat(e)},D=function(){var e=(new Date).getHours(),t=(new Date).getMinutes(),n=(new Date).getSeconds();x(S(t)),j(S(n)),u(S(e>12?e-12:e)),_(e>=12?"PM":"AM")};return(0,g.useEffect)((function(){var e=(new Date).getHours(),t=(new Date).getMinutes(),n=(new Date).getSeconds();x(S(t)),j(S(n)),u(S(e>12?e-12:e)),_(e>=12?"PM":"AM");var r=setInterval(D,1e3);return function(){clearInterval(r)}}),[]),(0,C.jsxs)(a.Z,{component:"div",className:"watches",sx:{width:c?k(85,n):"unset",height:c?k(85,t):"unset",boxSizing:"border-box",display:"flex",flexWrap:"wrap",flexDirection:c?"row":"column",gap:c?"40px":"20px",justifyContent:"center",alignItems:"center"},children:[(0,C.jsxs)("div",{className:"watches_circle",children:[(0,C.jsx)("div",{className:"dots hrs-dot",style:{transform:"rotate(".concat(30*(new Date).getHours(),"deg)")}}),(0,C.jsxs)("svg",{children:[(0,C.jsx)("circle",{cx:"70",cy:"70",r:"70"}),(0,C.jsx)("circle",{style:{strokeDashoffset:(new Date).getHours()>12?440-440*((new Date).getHours()-12)/12:440-440*(new Date).getHours()/12},cx:"70",cy:"70",r:"70",id:"hh"})]}),(0,C.jsxs)("div",{id:"hour",children:[l,(0,C.jsx)("br",{}),(0,C.jsx)("span",{children:"Hours"})]})]}),(0,C.jsxs)("div",{className:"watches_circle",children:[(0,C.jsx)("div",{className:"dots min-dot",style:{transform:"rotate(".concat(6*(new Date).getMinutes(),"deg)")}}),(0,C.jsxs)("svg",{children:[(0,C.jsx)("circle",{cx:"70",cy:"70",r:"70"}),(0,C.jsx)("circle",{style:{strokeDashoffset:440-440*(new Date).getMinutes()/60},cx:"70",cy:"70",r:"70",id:"mm"})]}),(0,C.jsxs)("div",{id:"minutes",children:[f,(0,C.jsx)("br",{}),(0,C.jsx)("span",{children:"Minutes"})]})]}),(0,C.jsxs)("div",{className:"watches_circle",children:[(0,C.jsx)("div",{className:"dots sec-dot",style:{transform:"rotate(".concat(6*(new Date).getSeconds(),"deg)")}}),(0,C.jsxs)("svg",{children:[(0,C.jsx)("circle",{cx:"70",cy:"70",r:"70"}),(0,C.jsx)("circle",{style:{strokeDashoffset:440-440*(new Date).getSeconds()/60},cx:"70",cy:"70",r:"70",id:"ss"})]}),(0,C.jsxs)("div",{id:"seconds",children:[p,(0,C.jsx)("br",{}),(0,C.jsx)("span",{children:"Seconds"})]})]}),c&&(0,C.jsx)("div",{className:"watches_ap",children:(0,C.jsx)("div",{className:"ampm",children:y})})]})},G=function(){var e=new Date,t=new Date(e.valueOf()+3e4),n=5*Math.ceil(t.getMinutes()/5),r=new Date(t.valueOf());return r.setMinutes(n),r.setSeconds(0),r.setMilliseconds(0),r.valueOf()-e.valueOf()},K={1:"one",2:"two",3:"three",4:"four",5:"five",6:"six",7:"seven",8:"eight",9:"nine",10:"ten",11:"eleven",12:"twelve"},Y={5:"five",55:"five",10:"ten",50:"ten",15:"quarter",45:"quarter",20:"twenty",40:"twenty",25:"twenty five",30:"half"},q=function(e){var t=e.getHours();return t=(t%=12)||12},Q=function(){var e=new Date,t=e.getMinutes(),n=5*Math.floor(t/5);return{minutes:Y[n],hour:n>30?K[q(e)+1]:K[q(e)],verb:n>30?"to":"past"}},X=function(){var e=(0,g.useState)(Q()),t=(0,r.Z)(e,2),n=t[0],i=t[1];(0,g.useEffect)((function(){i(Q());var e=setTimeout(u,G());return function(){clearInterval(e)}}),[]);var c=function(e,t){return(0,C.jsx)("div",{className:"col-sm ".concat(e?"active":""),children:t})},s=function(e){var t=(null===n||void 0===n?void 0:n.minutes)===e.toLowerCase()||"twenty five"===n.minutes&&("twenty"===e.toLowerCase()||"five"===e.toLowerCase());return c(t,e)},o=function(e){var t=n.minutes;return c(!!t&&n.verb===e.toLowerCase(),e)},l=function(e){return c(n.hour===e.toLowerCase(),e)},u=function(){i(Q())};return(0,C.jsx)(a.Z,{component:"div",sx:{width:"100%",display:"flex",justifyContent:"center"},children:(0,C.jsxs)("div",{className:"clock container",children:[(0,C.jsxs)("div",{className:"row",children:[(0,C.jsx)("div",{className:"col-sm active",children:"It"}),(0,C.jsx)("div",{className:"col-sm active",children:"Is"}),s("Half"),s("Ten")]}),(0,C.jsxs)("div",{className:"row",children:[s("Quarter"),s("Twenty")]}),(0,C.jsxs)("div",{className:"row",children:[s("Five"),(0,C.jsx)("div",{className:"col-sm ".concat(n.minutes&&"quarter"!==n.minutes&&"half"!==n.minutes?"active":""),children:"Minutes"}),o("To")]}),(0,C.jsxs)("div",{className:"row",children:[o("Past"),l("One"),l("Two")]}),(0,C.jsxs)("div",{className:"row",children:[l("Three"),l("Four"),l("Five")]}),(0,C.jsxs)("div",{className:"row",children:[l("Six"),l("Seven"),l("Eight")]}),(0,C.jsxs)("div",{className:"row",children:[l("Nine"),l("Ten"),l("Eleven")]}),(0,C.jsxs)("div",{className:"row",children:[l("Twelve"),(0,C.jsx)("div",{className:"col-sm active",children:"O'Clock"})]})]})})},$=n(3520),ee=n(2981),te=n(5712),ne=n(5892),re=function(){var e=(0,g.useRef)(null),t=function(){return(0,C.jsxs)("mesh",{position:[0,2,0],children:[(0,C.jsx)("boxBufferGeometry",{attach:"geometry"}),(0,C.jsx)("meshLambertMaterial",{attach:"material",color:"hotpink"})]})},n=function(){return(0,C.jsxs)("mesh",{position:[0,0,0],rotation:[-Math.PI/2,0,0],children:[(0,C.jsx)("planeBufferGeometry",{attach:"geometry",args:[100,100]}),(0,C.jsx)("meshLambertMaterial",{attach:"material",color:"lightblue"})]})};return(0,C.jsxs)("div",{className:"threeJs_wrapper",ref:e,children:[(0,C.jsx)(a.Z,{sx:{textAlign:"center"},component:"div",children:(0,C.jsx)("p",{children:"Trying React-Three.JS"})}),(0,C.jsxs)(ne.Xz,{className:"threeJs_wrapper_canvas",children:[(0,C.jsx)($.z,{}),(0,C.jsx)(ee.t,{}),(0,C.jsx)("ambientLight",{intensity:.5}),(0,C.jsx)("spotLight",{position:[10,15,10],angle:.3}),(0,C.jsxs)(te.wI,{children:[(0,C.jsx)(t,{}),(0,C.jsx)(n,{})]})]})]})},ie={ALIVE:1,DEAD:0},ae=n(5671),ce=n(3144),se=function(){function e(t){if((0,ae.Z)(this,e),-1===Object.values(ie).indexOf(t))throw new Error("Invalid State");this.state=t}return(0,ce.Z)(e,[{key:"getNextState",value:function(e){if(this.state===ie.ALIVE){if(2===e||3===e)return this.state}else if(3===e)return ie.ALIVE;return ie.DEAD}}]),e}(),oe=n(4942),le=function(){function e(t){(0,ae.Z)(this,e),this.numRows=t.length,this.numCols=t[0].length,this.state=t.map((function(e){return e.map((function(e){return new se(e)}))}))}return(0,ce.Z)(e,[{key:"getCell",value:function(e,t){return this.state[e][t]}},{key:"getNumberOfAliveNeighbors",value:function(e,t){var n,r=(n={},(0,oe.Z)(n,ie.ALIVE,1),(0,oe.Z)(n,ie.DEAD,0),n),i=0;return this.state.forEach((function(n,a){n.forEach((function(n,c){(function(n,r){return r===t-1&&n===e-1||r===t&&n===e-1||r===t+1&&n===e-1}(a,c)||function(n,r){return r===t-1&&n===e||r===t+1&&n===e}(a,c)||function(n,r){return r===t-1&&n===e+1||r===t&&n===e+1||r===t+1&&n===e+1}(a,c))&&(i+=r[n.state])}))})),i}},{key:"nextState",value:function(){var e=this;return this.state.map((function(t,n){return t.map((function(t,r){return new se(t.getNextState(e.getNumberOfAliveNeighbors(n,r)))}))}))}}]),e}(),ue={CellState:ie,Cell:se,Game:le},de=ue.Game,he=ue.CellState,fe=ue.Cell,xe=he.ALIVE,me=he.DEAD,ve=new de([[me,me,me,me,me,me,me,me,me,me,me,me,me,me,me],[me,me,xe,me,me,me,me,me,me,me,me,me,me,me,me],[me,me,me,xe,xe,xe,me,me,me,me,me,me,me,me,me],[me,xe,xe,xe,me,me,me,me,me,me,me,me,me,me,me],[me,me,me,me,me,me,me,me,me,me,me,me,me,me,me],[me,me,me,me,me,me,me,me,me,me,me,me,me,me,me],[me,me,me,me,me,me,me,me,me,me,me,me,me,me,me],[me,me,me,me,me,me,me,me,me,me,me,me,me,me,me],[me,me,me,me,me,me,me,me,me,me,me,me,me,me,me],[me,me,me,me,me,me,me,me,me,me,me,me,me,me,me],[me,me,me,me,me,me,me,me,me,me,me,me,me,me,me],[me,me,me,me,me,me,me,me,me,me,me,me,me,me,me],[me,me,me,me,me,me,me,me,me,me,me,me,me,me,me],[me,me,me,me,me,me,me,me,me,me,me,me,me,me,me],[me,me,me,me,me,me,me,me,me,me,me,me,me,me,me]]),pe=function(){var e=(0,i.Z)("(prefers-color-scheme: dark)"),t=(0,g.useState)(ve.state),n=(0,r.Z)(t,2),a=n[0],c=n[1];return(0,C.jsxs)("div",{className:"min-h-[80vh] h-full flex flex-col gap-5 items-center mt-6",children:[(0,C.jsx)("p",{className:"gol_title",children:(0,o.E9)("aboutCode.gameOfLife")}),(0,C.jsx)("table",{children:(0,C.jsx)("tbody",{children:g.Children.toArray(a.map((function(t,n){return(0,C.jsx)("tr",{children:g.Children.toArray(t.map((function(t,r){return(0,C.jsx)("td",{className:"gol_cell",style:{background:(i=t.state,e?i===xe?"#fff":"#000":i===xe?"#000":"#fff")},onClick:function(){return function(e,t){c((function(){var n=a.map((function(n,r){return n.map((function(n,i){return r===e&&i===t?new fe(n.state===xe?me:xe):n}))}));return ve.state=n,n}))}(n,r)}});var i})))})})))})}),(0,C.jsx)("button",{onClick:function(){var e=ve.nextState();ve.state=e,c(e)},children:"Next"})]})},ge=function(){var e=(0,i.Z)("(prefers-color-scheme: dark)"),t=(0,i.Z)("(min-width:".concat(Z.Z["breakpoint-md"],")")),n=(0,i.Z)("(min-width:".concat(Z.Z["breakpoint-lg"],")")),u=(0,_.v9)((function(e){return e.session})).theme,x=(0,_.I0)(),m=(0,g.useState)(V.BUBBLE_CHART),v=(0,r.Z)(m,2),p=v[0],j=v[1];(0,g.useEffect)((function(){x(e?(0,f.Dc)("dark"):(0,f.Dc)("light"))}),[]),(0,g.useEffect)((function(){x(e?(0,f.Dc)("dark"):(0,f.Dc)("light"))}),[e]);return(0,C.jsx)(a.Z,{className:"aboutCode",component:"div",children:(0,C.jsxs)(a.Z,{className:"aboutCode_container",component:"div",children:[(0,C.jsx)(F,{tabSelected:p}),(0,C.jsx)(l.Z,{}),(0,C.jsxs)(a.Z,{sx:d(t,n),component:"div",children:[(0,C.jsx)(a.Z,{component:"div",children:(0,C.jsxs)(c.Z,{sx:h(u),variant:t?"standard":"scrollable",value:p,onChange:function(e,t){j(t)},"aria-label":"tab dettaglio elemento",orientation:t?"vertical":"horizontal",children:[(0,C.jsx)(s.Z,{value:V.BUBBLE_CHART,label:(0,o.E9)("global.bubbleChart")}),(0,C.jsx)(s.Z,{value:V.GAME_OF_LIFE,label:(0,o.E9)("global.gameOfLife")}),(0,C.jsx)(s.Z,{value:V.WATCHES,label:(0,o.E9)("global.watches")}),(0,C.jsx)(s.Z,{value:V.WORD_CLOCK,label:(0,o.E9)("global.wordClock")}),(0,C.jsx)(s.Z,{value:V.THREE_JS,label:(0,o.E9)("global.threeJs")})]})}),(0,C.jsxs)(a.Z,{sx:{width:"100%",height:"100%"},component:"div",children:[(0,C.jsx)(P,{value:V.BUBBLE_CHART,index:V.BUBBLE_CHART,selectedTab:p,children:(0,C.jsx)(I,{})}),(0,C.jsx)(P,{value:V.GAME_OF_LIFE,index:V.GAME_OF_LIFE,selectedTab:p,children:(0,C.jsx)(pe,{})}),(0,C.jsx)(P,{value:V.WATCHES,index:V.WATCHES,selectedTab:p,children:(0,C.jsx)(z,{})}),(0,C.jsx)(P,{value:V.WORD_CLOCK,index:V.WORD_CLOCK,selectedTab:p,children:(0,C.jsx)(X,{})}),(0,C.jsx)(P,{value:V.THREE_JS,index:V.THREE_JS,selectedTab:p,children:(0,C.jsx)(re,{})})]})]})]})})}}}]);
//# sourceMappingURL=603.75395dfc.chunk.js.map