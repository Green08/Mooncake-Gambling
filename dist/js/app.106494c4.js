(function(t){function e(e){for(var i,c,r=e[0],o=e[1],l=e[2],d=0,f=[];d<r.length;d++)c=r[d],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&f.push(a[c][0]),a[c]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i]);u&&u(e);while(f.length)f.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],i=!0,r=1;r<n.length;r++){var o=n[r];0!==a[o]&&(i=!1)}i&&(s.splice(e--,1),t=c(c.s=n[0]))}return t}var i={},a={app:0},s=[];function c(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=i,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)c.d(n,i,function(e){return t[e]}.bind(null,i));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],o=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=o;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0a19":function(t,e,n){t.exports=n.p+"img/start-into.0ae62649.png"},"1a0c":function(t,e,n){"use strict";n("2295")},2295:function(t,e,n){},"274d":function(t,e,n){},3462:function(t,e,n){t.exports=n.p+"img/yyy.acef4af6.png"},"4b57":function(t,e,n){t.exports=n.p+"img/rules.debebbd1.png"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},s=[],c={created:function(){document.title="中秋博饼"}},r=c,o=(n("5c0b"),n("2877")),l=Object(o["a"])(r,a,s,!1,null,null,null),u=l.exports,d=n("8c4f"),f=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"rule-container"},[i("div",{staticClass:"box"}),i("img",{staticClass:"btn-into",attrs:{src:n("0a19"),alt:""},on:{click:t.goGame}}),i("div",{staticClass:"btn-rule",on:{click:t.goRule}})])},p=[],h={methods:{goGame:function(){this.$router.push({name:"Mode"})},goRule:function(){this.$router.push({name:"Rule"})}}},b=h,m=(n("c54b"),Object(o["a"])(b,f,p,!1,null,"1bd9a53f",null)),v=m.exports,g=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"play"},[i("div",{staticClass:"bowl-container",attrs:{id:"bowl"},on:{click:t.handleStart}},[i("div",{staticClass:"dice dice4 dice-position1"}),i("div",{staticClass:"dice dice4 dice-position2"}),i("div",{staticClass:"dice dice1 dice-position3"}),i("div",{staticClass:"dice dice1 dice-position4"}),i("div",{staticClass:"dice dice4 dice-position5"}),i("div",{staticClass:"dice dice4 dice-position6"})]),i("div",{staticClass:"nav"},[t._v("单机模式")]),i("img",{staticClass:"btn-yyy",attrs:{src:n("3462"),alt:""},on:{click:t.handleStart}}),i("img",{staticClass:"bbjl",attrs:{src:n("b928"),alt:""}}),i("div",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],staticClass:"award"},[t._v(t._s(this.newTitle))]),i("div",{staticClass:"record-box"})])},w=[],C=(n("a434"),n("99af"),n("d4ec")),x=n("bee2"),y=n("ade3"),j=(n("cb29"),n("159b"),n("d3b7"),n("6062"),n("3ca3"),n("ddb0"),function(){function t(){Object(C["a"])(this,t),Object(y["a"])(this,"result",[]),Object(y["a"])(this,"award",[])}return Object(x["a"])(t,[{key:"generateResult",value:function(){this.result=[];for(var t=0;t<6;t++)this.result.push(Math.floor(6*Math.random())+1);return this._judgeAward()}},{key:"_countResult",value:function(){var t=this;return this.award=new Array(6).fill(0),this.result.forEach((function(e){t.award[e-1]++})),this}},{key:"_judgeAward",value:function(){this._countResult();var t=this.award,e="",n=-1;return 4===t[3]&&2===t[0]?(e="状元插金花",n=1):6===t[3]?(e="状元红六勃",n=2):6===t[0]?(e="状元遍地锦",n=3):6===t[1]||6===t[2]||6===t[4]||6===t[5]?(e="状元黑六勃",n=4):5===t[3]?(e="状元五红",n=5):5===t[0]||5===t[1]||5===t[2]||5===t[4]||5===t[5]?(e="状元五子登科",n=6):4===t[3]?(e="状元四红",n=7):6===new Set(this.result).size?(e="对堂",n=8):3===t[3]?(e="三红",n=9):4===t[0]||4===t[1]||4===t[2]||4===t[4]||4===t[5]?(e="四进",n=10):2===t[3]?(e="二举",n=11):1===t[3]?(e="一秀",n=12):e="落榜",{awardTitle:e,rank:n,result:this.result}}}]),t}()),_=n("1157"),k=n.n(_),O={name:"Home",components:{},data:function(){return{result:[],rank:-1,awardTitle:"",newTitle:"",game:new j,loading:!1,content:"",isShow:!1}},methods:{handleStart:function(){if(!this.loading){var t=this.game.generateResult();this.result=t.result,this.rank=t.rank,this.awardTitle=t.awardTitle,this.setDice(),this.isShow=!1}},getPosition:function(){for(var t=[1,2,3,4,5,6,7,8],e=[],n=0;n<6;n++)e.push(t.splice(Math.floor(Math.random()*t.length),1)[0]);return e},setDice:function(){var t=this;this.loading=!0,k()("#bowl").removeClass("active"),k()("#bowl").addClass("inactive");var e=this.getPosition();k.a.each(k()("#bowl .dice"),(function(n,i){k()(i).removeClass(),k()(i).addClass("dice dice".concat(t.result[n]," dice-position").concat(e[n]))})),setTimeout((function(){k()("#bowl").removeClass("inactive"),k()("#bowl").addClass("active"),t.showAwardTitle()}),200)},showAwardTitle:function(){var t=this;setTimeout((function(){t.loading=!1,t.newTitle=t.awardTitle,t.isShow=!0}),1200)},go2Rule:function(){this.$router.push({name:"Rule"})}}},S=O,T=(n("b0a5"),Object(o["a"])(S,g,w,!1,null,"609bde03",null)),$=T.exports,G=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"rule-container"},[i("div",{staticClass:"title"},[t._v("活动规则")]),i("img",{staticClass:"rule-img",attrs:{src:n("4b57"),alt:""}}),i("div",{staticClass:"btn-back",on:{click:t.back2Home}},[t._v("返回首页")])])},M=[],R={methods:{back2Home:function(){this.$router.go(-1)}}},z=R,P=(n("c365"),Object(o["a"])(z,G,M,!1,null,"2d519b5d",null)),E=P.exports,A=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"mode"},[i("div",{staticClass:"container"},[i("img",{staticClass:"button",attrs:{src:n("cd1a"),alt:""},on:{click:t.goDjms}}),i("img",{staticClass:"button",attrs:{src:n("92a4"),alt:""},on:{click:t.goGrzx}}),i("img",{staticClass:"button",attrs:{src:n("e94f"),alt:""},on:{click:t.goGrzx}}),i("img",{staticClass:"button",attrs:{src:n("7d0c"),alt:""},on:{click:t.goGrzx}}),i("img",{staticClass:"button",attrs:{src:n("cb94"),alt:""},on:{click:t.goGrzx}}),i("img",{staticClass:"button",attrs:{src:n("dbc6"),alt:""},on:{click:t.goGrzx}})])])},D=[],H={methods:{goDjms:function(){this.$router.push({name:"Game"})}}},J=H,N=(n("1a0c"),Object(o["a"])(J,A,D,!1,null,"f564c714",null)),q=N.exports;i["a"].use(d["a"]);var B=[{path:"/Game",name:"Game",component:$},{path:"/rule",name:"Rule",component:E},{path:"/mode",name:"Mode",component:q},{path:"/",name:"Start",component:v}],F=new d["a"]({routes:B}),I=F;n("499a");i["a"].config.productionTip=!1;var K=d["a"].prototype.push;d["a"].prototype.push=function(t){return K.call(this,t).catch((function(t){return t}))},new i["a"]({router:I,render:function(t){return t(u)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("9c0c")},"5ec6":function(t,e,n){},"7d0c":function(t,e,n){t.exports=n.p+"img/jrfj.32769c64.png"},"92a4":function(t,e,n){t.exports=n.p+"img/grzx.d485e7ea.png"},"9c0c":function(t,e,n){},a418:function(t,e,n){},b0a5:function(t,e,n){"use strict";n("274d")},b928:function(t,e,n){t.exports=n.p+"img/博饼记录.59933922.png"},c365:function(t,e,n){"use strict";n("5ec6")},c54b:function(t,e,n){"use strict";n("a418")},cb94:function(t,e,n){t.exports=n.p+"img/bz.5adfadc0.png"},cd1a:function(t,e,n){t.exports=n.p+"img/djms.38380ad2.png"},dbc6:function(t,e,n){t.exports=n.p+"img/sz.87c259df.png"},e94f:function(t,e,n){t.exports=n.p+"img/cjfj.13874815.png"}});