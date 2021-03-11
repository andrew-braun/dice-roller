(this["webpackJsonpdice-roller"]=this["webpackJsonpdice-roller"]||[]).push([[0],[,,,,,,function(e,t,n){e.exports={rollHistoryContainer:"roll-history_rollHistoryContainer__2orb2",rollHistoryHeader:"roll-history_rollHistoryHeader__Pukmf",rollsList:"roll-history_rollsList__28aPf",rollItem:"roll-history_rollItem__1aESg",rollItemDie:"roll-history_rollItemDie__2LOJz",diceSum:"roll-history_diceSum__2VaE_"}},,function(e,t,n){e.exports={layout:"layout_layout__2sJGf",header:"layout_header__19-Ct",main:"layout_main__3J_yn",footer:"layout_footer__3XF1J"}},function(e,t,n){e.exports={app:"app_app__45Q3M",rollContainer:"app_rollContainer__18km1",diceContainer:"app_diceContainer__1Ny5P",rollHistoryContainer:"app_rollHistoryContainer__EogHM"}},,,,function(e,t,n){e.exports={die:"die_die__1io9P"}},function(e,t,n){e.exports={button:"button_button__2urIV"}},,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var i=n(1),a=n.n(i),r=n(12),l=n.n(r),o=(n(20),n(11)),c=n(2),s=n(3),u=n(7),h=n(5),d=n(4),j=n(8),b=n.n(j),p=n(0),O=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(p.jsxs)("div",{className:b.a.layout,children:[Object(p.jsx)("header",{className:b.a.header,children:Object(p.jsx)("h1",{children:"Dice Roller"})}),Object(p.jsx)("main",{className:b.a.main,children:this.props.children}),Object(p.jsxs)("footer",{className:b.a.footer,children:["Made with"," ",Object(p.jsx)("span",{role:"img","aria-label":"heart-emoji",children:"\u2764\ufe0f"}),"by Andrew Braun"]})]})}}]),n}(i.Component),_=n(15),m=n(13),y=n.n(m),f=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=a.a.createElement(_["FaDice".concat({1:"One",2:"Two",3:"Three",4:"Four",5:"Five",6:"Six"}[this.props.number])]);return Object(p.jsx)("button",{className:y.a.die,onClick:this.props.onClick,children:e})}}]),n}(i.Component),x=n(14),v=n.n(x),D=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(p.jsx)("button",{className:v.a.button,onClick:this.props.onClick,children:this.props.text})}}]),n}(i.Component),C=n(6),k=n.n(C),g=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this.props.rolls.map((function(e){return Object(p.jsxs)("li",{className:k.a.rollItem,children:[Object(p.jsx)("span",{children:e.map((function(e){return Object(p.jsx)("span",{className:k.a.rollItemDie,children:e})}))}),Object(p.jsxs)("span",{className:k.a.diceSum,children:["= ",e.reduce((function(e,t){return t+e}))]})]})}));return Object(p.jsxs)("div",{className:k.a.rollHistoryContainer,children:[Object(p.jsx)("h3",{className:k.a.rollHistoryHeader,children:"Roll History"}),Object(p.jsx)("ul",{className:k.a.rollsList,children:e})]})}}]),n}(i.Component),H=n(9),N=n.n(H),V=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var i;return Object(c.a)(this,n),(i=t.call(this,e)).state={diceValues:[1,1],rollHistory:[],currentDice:[]},i.handleRoll=i.handleRoll.bind(Object(u.a)(i)),i.handleAddDie=i.handleAddDie.bind(Object(u.a)(i)),i.handleDeleteDie=i.handleDeleteDie.bind(Object(u.a)(i)),i}return Object(s.a)(n,[{key:"rollDice",value:function(e){return Math.floor(Math.random()*e)+1}},{key:"generateDice",value:function(){var e=this,t=this.state.diceValues.map((function(t,n){return Object(p.jsx)(f,{number:t,onClick:e.handleDeleteDie},"die-".concat(e.state.rollHistory.length+n))}));this.setState({currentDice:t})}},{key:"handleRoll",value:function(){var e=this;try{for(var t=[],n=0;n<this.state.diceValues.length;n++)t.push(this.rollDice(6));this.setState({diceValues:t,rollHistory:[].concat(Object(o.a)(this.state.rollHistory),[t])},(function(){e.generateDice()}))}catch(i){console.log(i)}}},{key:"componentDidMount",value:function(){this.generateDice()}},{key:"handleAddDie",value:function(){var e=this;this.setState({diceValues:[].concat(Object(o.a)(this.state.diceValues),[1])},(function(){e.generateDice()}))}},{key:"handleDeleteDie",value:function(){var e=this,t=this.state.diceValues.length>1?this.state.diceValues.slice(0,this.state.diceValues.length-1):this.state.diceValues;this.setState({diceValues:t},(function(){e.generateDice()}))}},{key:"render",value:function(){return Object(p.jsx)(O,{children:Object(p.jsxs)("div",{className:N.a.app,children:[Object(p.jsxs)("div",{className:N.a.rollContainer,children:[Object(p.jsx)("div",{className:N.a.diceContainer,children:this.state.currentDice}),Object(p.jsx)(D,{onClick:this.handleRoll,text:"Roll!"}),Object(p.jsx)(D,{onClick:this.handleAddDie,text:"Add Die"})]}),Object(p.jsx)("div",{className:N.a.rollHistoryContainer,children:Object(p.jsx)(g,{rolls:this.state.rollHistory})})]})})}}]),n}(i.Component),S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,23)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,r=t.getLCP,l=t.getTTFB;n(e),i(e),a(e),r(e),l(e)}))};l.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(V,{})}),document.getElementById("root")),S()}],[[22,1,2]]]);
//# sourceMappingURL=main.cd64516a.chunk.js.map