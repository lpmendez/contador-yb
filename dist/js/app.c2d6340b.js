(function(e){function t(t){for(var o,i,s=t[0],c=t[1],u=t[2],f=0,m=[];f<s.length;f++)i=s[f],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&m.push(a[i][0]),a[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);l&&l(t);while(m.length)m.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,s=1;s<n.length;s++){var c=n[s];0!==a[c]&&(o=!1)}o&&(r.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},a={app:0},r=[];function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var l=c;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var o=n("64a9"),a=n.n(o);a.a},"0c06":function(e,t,n){},"206d":function(e,t,n){"use strict";var o=n("930f"),a=n.n(o);a.a},"28f5":function(e,t,n){},"301e":function(e,t,n){"use strict";var o=n("5183"),a=n.n(o);a.a},"516f":function(e,t,n){"use strict";var o=n("0c06"),a=n.n(o);a.a},5183:function(e,t,n){},"533f":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var o,a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("router-view")],1)},i=[],s={name:"app"},c=s,u=(n("034f"),n("2877")),l=Object(u["a"])(c,r,i,!1,null,null,null),f=l.exports,m=n("5f30"),p=n.n(m),d=n("8c4f"),g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("img",{attrs:{src:"config.png",alt:""},on:{click:e.goToConfig}}),n("section",{staticClass:"todo"},[n("ul",{staticClass:"todo-list"},[n("li",{staticClass:"right date"},[e._v(e._s(e.date))]),"-"!=e.timePerPersonString?n("li",{staticClass:"time"},[e._v("\n        Para que todas puedan pasar,\n        "),n("br"),e._v("\n        cada una tiene "+e._s(e.timePerPersonString)+"\n      ")]):n("li",{staticClass:"separator"}),""!=e.infoText?n("li",{domProps:{innerHTML:e._s(e.infoText)}}):e._e(),n("div",{staticClass:"pending-list"},[n("List",{attrs:{items:e.pending,nameProp:"pending",status:!1},on:{disable:e.disablePeople}})],1),n("div",{staticClass:"add-list"},[n("li",[n("input",{attrs:{type:"checkbox",id:"pnew"}}),n("label",{staticClass:"toggle",attrs:{for:"pnew"}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.people,expression:"people"}],attrs:{type:"text",placeholder:"Escribe tu nombre.."},domProps:{value:e.people},on:{focusout:e.addPeople,keydown:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.addPeople(t):null},input:function(t){t.target.composing||(e.people=t.target.value)}}})])]),n("li"),n("div",{staticClass:"done-list"},[n("List",{attrs:{items:e.done,nameProp:"done",status:!0}})],1)])])])},h=[],v=(n("ac6a"),n("7514"),n("a481"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",e._l(e.items,function(t,o){return n("li",{key:e.nameProp+o},[n("input",{attrs:{type:"checkbox",id:e.nameProp+o,disabled:e.status},domProps:{checked:e.status},on:{change:function(n){e.$emit("disable",t,n)}}}),n("label",{staticClass:"toggle",attrs:{for:e.nameProp+o}}),n("div",{staticClass:"names"},[e._v(e._s(t.name))]),e.isLogged&&!t.twoHours?n("span",{staticClass:"time2"},[e._v(e._s(t.time))]):e._e(),e.isLogged&&t.twoHours?n("span",{staticClass:"time2 specialTime",domProps:{innerHTML:e._s(t.time)}}):e._e()])}))}),b=[],T=n("8aa5"),_=n.n(T),C={props:["items","status","nameProp"],data:function(){return{isLogged:null!=_.a.auth().currentUser}}},w=C,x=(n("301e"),Object(u["a"])(w,v,b,!1,null,null,null)),y=x.exports,P={apiKey:"AIzaSyBM_gzoDhM_1PzIJu9wkr8mVJjWdwuYwK8",authDomain:"contador-f1626.firebaseapp.com",databaseURL:"https://contador-f1626.firebaseio.com",projectId:"contador-f1626",storageBucket:"contador-f1626.appspot.com",messagingSenderId:"417151475130"},D=_.a.initializeApp(P).database(),S=D.ref("people"),k={components:{List:y},data:function(){return{people:"",curDate:new Date,infoText:""}},created:function(){var e=this,t=D.ref("config/infoText");t.once("value",function(t){e.infoText=t.val().replace(/\n/g,"<br>")})},firebase:function(){return{list:S.orderByChild("date").equalTo(this.shortDate),from:{source:D.ref("config/from"),asObject:!0},to:{source:D.ref("config/to"),asObject:!0},events:D.ref("config/events")}},computed:{done:function(){return this.list.filter(function(e){return e.status})},pending:function(){var e=this,t=this.list.filter(function(e){return!e.status}),n=t.length;if(n>1){var o=this.totalTime(),a=this.transformToDate(this.from).getTime(),r=this.transformToDate(this.to).getTime();this.curDate.getTime()>a&&this.curDate.getTime()<r&&(a=this.curDate.getTime());var i={hour12:!0,hour:"numeric",minute:"numeric"};o/=n,t=t.map(function(t){var n=new Date(a),r=n.toLocaleTimeString("es-SV",i);a+=o;var s=new Date(a),c=e,u=e.events.find(function(e){var t=c.transformToDate(e.from),o=c.transformToDate(e.to);return n.getTime()<=o.getTime()&&s.getTime()>=t.getTime()});if(u){var l=e.transformToDate(u.from),f=e.transformToDate(u.to);if(l>n){s=l;var m=a-s.getTime();a=s.getTime();var p=s.toLocaleTimeString("es-SV",i),d=r+" - "+p;t["time"]=d.replace("p. m.","").replace("a. m.",""),n=f,r=n.toLocaleTimeString("es-SV",i),a=n.getTime()+m,s=new Date(a),p=s.toLocaleTimeString("es-SV",i),d=r+" - "+p,t["time"]="<div>"+t.time+"</div><div>"+d.replace("p. m.","").replace("a. m.","")+"</div>",t["twoHours"]=!0}else{console.log("entro else"),n=f,r=n.toLocaleTimeString("es-SV",i),a=n.getTime()+o,s=new Date(a);var g=s.toLocaleTimeString("es-SV",i),h=r+" - "+g;t["time"]=h.replace("p. m.","").replace("a. m.","")}}else{var v=s.toLocaleTimeString("es-SV",i),b=r+" - "+v;t["time"]=b.replace("p. m.","").replace("a. m.","")}return t})}return t},date:function(){var e={weekday:"long",year:"numeric",month:"long",day:"numeric"};return this.curDate.toLocaleDateString("es-SV",e)},shortDate:function(){var e={year:"2-digit",month:"2-digit",day:"2-digit"};return this.curDate.toLocaleDateString("es-SV",e)},time:function(){return this.curDate.toLocaleTimeString("es-SV")},timePerPersonString:function(){var e=this.list.filter(function(e){return!e.status}).length;if(e>1){var t=this.totalTime()/e;console.log("totalInMilSec",t);var n=t/6e4,o=t/36e5;if(n<60){var a=Math.floor(n);return a+" min"}var r=Math.floor(o),i=o%1;return i>0?(i*=60,i=Math.round(100*i)/100,i=Math.floor(i),r+"h "+i+"m"):r+"h"}return"-"}},methods:{addPeople:function(){if(""!=this.people){var e={name:this.people,status:!1,date:this.shortDate,hour:this.time};S.push(e),this.people=""}},disablePeople:function(e,t){t.target.checked&&S.child(e[".key"]).child("status").set(!0)},goToConfig:function(){this.$router.replace("/config")},totalTime:function(){var e=this,t=this.totalEstimatedTime(this.from,this.to),n=0;return this.events.forEach(function(t){console.log("accEvent",n),n+=e.totalEstimatedTime(t.from,t.to),console.log("accEvent",n)}),t-n},totalEstimatedTime:function(e,t){if(!e||!t)return 0;var n=this.transformToDate(e).getTime(),o=this.transformToDate(t).getTime();return this.curDate.getTime()>n&&this.curDate.getTime()<o&&(n=this.curDate.getTime()),o-n},transformToDate:function(e){var t=new Date,n=parseInt(e.hour);return"PM"==e.ampm&&12!=n&&(n+=12),t.setHours(n,e.minutes),t}}},j=k,O=(n("516f"),Object(u["a"])(j,g,h,!1,null,"b5989fba",null)),E=O.exports,L=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login-page"},[n("div",{staticClass:"form"},[n("h3",[e._v("Login")]),n("form",{staticClass:"login-form"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],attrs:{type:"text",placeholder:"username"},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",placeholder:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),n("button",{on:{click:e.signIn}},[e._v("Ingresar")]),n("p",{staticClass:"message"},[n("router-link",{attrs:{to:"/"}},[e._v("Inicio")])],1)])])])},M=[],$=D.ref("admin"),I={data:function(){return{username:"",password:""}},firebase:{users:$},computed:{findByUser:function(){var e=this;this.username=this.username.toLowerCase();var t=this.users.filter(function(t){return t.username==e.username});return 1==t.length?this.users.filter(function(t){return t.username==e.username})[0].email:""}},methods:{signIn:function(){var e=this;if(""!=this.username&&""!=this.password){var t=this.findByUser;_.a.auth().signInWithEmailAndPassword(t,this.password).then(function(t){e.$router.replace("/config")},function(e){alert("Credenciales incorrectas"),console.log("Error ")})}}}},A=I,V=(n("90cd"),Object(u["a"])(A,L,M,!1,null,"b60cdf48",null)),N=V.exports,H=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wrapper"},[n("div",{staticClass:"form"},[n("form",[n("Time",{attrs:{time:e.from,label:"Desde",name:"from"},on:{changeConfig:e.changeConfig}}),n("br"),n("Time",{attrs:{time:e.to,label:"Hasta",name:"to"},on:{changeConfig:e.changeConfig}}),n("br"),n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.infoText,expression:"infoText"}],attrs:{placeholder:"Texto informativo"},domProps:{value:e.infoText},on:{focusout:e.setInfoText,input:function(t){t.target.composing||(e.infoText=t.target.value)}}}),n("br"),n("Events"),n("router-link",{attrs:{to:"/",tag:"button"}},[e._v("Regresar")])],1)])])},q=[],B=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("label",[e._v(e._s(e.label))]),n("Number",{attrs:{name:"hour",value:e.time.hour,min:"1",max:"11"},on:{changeConfig:e.changeConfig}}),e._v(":\n    "),n("Number",{attrs:{name:"minutes",value:e.time.minutes,min:"0",max:"59"},on:{changeConfig:e.changeConfig}}),n("am-pm",{attrs:{value:e.time.ampm,name:e.name},on:{changeConfig:e.changeConfig}})],1)},U=[],z=(n("7f7f"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"switch-field"},[n("input",{attrs:{type:"radio",id:e.name+"switch_left",value:"AM"},domProps:{checked:"AM"==e.value},on:{input:function(t){e.$emit("changeConfig","ampm",t.target.value)}}}),n("label",{attrs:{for:e.name+"switch_left"}},[e._v("AM")]),n("input",{attrs:{type:"radio",id:e.name+"switch_right",value:"PM"},domProps:{checked:"PM"==e.value},on:{input:function(t){e.$emit("changeConfig","ampm",t.target.value)}}}),n("label",{attrs:{for:e.name+"switch_right"}},[e._v("PM")])])}),J=[],K={props:["value","name"],data:function(){return{}}},R=K,W=(n("c591"),Object(u["a"])(R,z,J,!1,null,null,null)),Y=W.exports,F=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("input",{attrs:{type:"number",min:e.min,max:e.max},on:{input:function(t){e.$emit("changeConfig",e.name,t.target.value)}}})},G=[],Q={props:["min","max","name"]},X=Q,Z=(n("206d"),Object(u["a"])(X,F,G,!1,null,"f41e8924",null)),ee=Z.exports,te={data:function(){return{}},props:["time","label","name"],components:{AmPm:Y,Number:ee},mounted:function(){console.log(this.name),console.log(this.time)},methods:{changeConfig:function(e,t){console.log("entre en time "+t),this.$emit("changeConfig",this.name+"/"+e,t)}}},ne=te,oe=(n("cf90"),Object(u["a"])(ne,B,U,!1,null,"69616edc",null)),ae=oe.exports,re=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._l(e.events,function(t,o){return n("div",{key:o,staticClass:"prueba"},[n("input",{staticClass:"eliminar",attrs:{type:"button",value:"Eliminar"},on:{click:function(n){e.deleteConfig(t[".key"])}}}),n("Time",{attrs:{time:t.from,label:"Desde",name:t[".key"]+"/from"},on:{changeConfig:e.changeConfig}}),n("br"),n("Time",{attrs:{time:t.to,label:"Hasta",name:t[".key"]+"/to"},on:{changeConfig:e.changeConfig}}),n("hr")],1)}),n("input",{staticClass:"addNew",attrs:{type:"button",value:"Agregar horas a bloquear"},on:{click:e.addNewEvent}})],2)},ie=[],se={components:{Time:ae},firebase:{events:D.ref("config/events"),from:{source:D.ref("config/from"),asObject:!0},to:{source:D.ref("config/to"),asObject:!0}},props:["min","max"],methods:{changeConfig:function(e,t){console.log("entre en events name ",e," val ",t),this.$emit("changeConfig",e,t),D.ref("config/events").child(e).set(t)},deleteConfig:function(e){console.log("entre en delete name",e),D.ref("config/events").child(e).remove()},addNewEvent:function(){D.ref("config").child("events").push({from:{ampm:this.from.ampm,hour:this.from.hour,minutes:this.from.minutes},to:{ampm:this.from.ampm,hour:this.from.hour,minutes:this.from.minutes}})}}},ce=se,ue=(n("e90c"),Object(u["a"])(ce,re,ie,!1,null,"bd0e1616",null)),le=ue.exports,fe={data:function(){return{infoText:""}},created:function(){var e=this,t=D.ref("config/infoText");t.once("value",function(t){e.infoText=t.val()})},components:{Time:ae,Events:le},firebase:{from:{source:D.ref("config/from"),asObject:!0},to:{source:D.ref("config/to"),asObject:!0}},methods:{changeConfig:function(e,t){console.log("entre en config"),D.ref("config").child(e).set(t)},setInfoText:function(){console.log("entre en info text"),D.ref("config").child("infoText").set(this.infoText)}}},me=fe,pe=(n("80fd"),Object(u["a"])(me,H,q,!1,null,"6c873cca",null)),de=pe.exports,ge=[{path:"*",redirect:"/"},{path:"/",component:E},{path:"/login",name:"login",component:N},{path:"/config",component:de,meta:{requiresAuth:!0}}];a["a"].use(p.a),a["a"].use(d["a"]),a["a"].config.productionTip=!1;var he=new d["a"]({routes:ge});he.beforeEach(function(e,t,n){var o=_.a.auth().currentUser,a=e.matched.some(function(e){return e.meta.requiresAuth});a&&!o?n("/login"):n()}),_.a.auth().onAuthStateChanged(function(){o||(o=new a["a"]({render:function(e){return e(f)},router:he}).$mount("#app"))})},"64a9":function(e,t,n){},7208:function(e,t,n){},"7f53":function(e,t,n){},"80fd":function(e,t,n){"use strict";var o=n("533f"),a=n.n(o);a.a},"90cd":function(e,t,n){"use strict";var o=n("7208"),a=n.n(o);a.a},"930f":function(e,t,n){},a22b:function(e,t,n){},c591:function(e,t,n){"use strict";var o=n("28f5"),a=n.n(o);a.a},cf90:function(e,t,n){"use strict";var o=n("a22b"),a=n.n(o);a.a},e90c:function(e,t,n){"use strict";var o=n("7f53"),a=n.n(o);a.a}});
//# sourceMappingURL=app.c2d6340b.js.map