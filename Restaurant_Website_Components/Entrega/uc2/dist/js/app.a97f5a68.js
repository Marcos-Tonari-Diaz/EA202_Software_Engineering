(function(t){function e(e){for(var n,c,i=e[0],s=e[1],u=e[2],d=0,v=[];d<i.length;d++)c=i[d],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&v.push(r[c][0]),r[c]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);l&&l(e);while(v.length)v.shift()();return o.push.apply(o,u||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,i=1;i<a.length;i++){var s=a[i];0!==r[s]&&(n=!1)}n&&(o.splice(e--,1),t=c(c.s=a[0]))}return t}var n={},r={app:0},o=[];function c(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.m=t,c.c=n,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(a,n,function(e){return t[e]}.bind(null,n));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var l=s;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"38eb":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",{attrs:{justify:"space-around"}},[a("v-col",{attrs:{cols:"6"}},[a("v-card",{attrs:{outlined:""}},[a("v-card-title",[t._v("Viagem ...")]),a("v-img",{attrs:{"aspect-ratio":1,"max-height":"500",src:"https://i.stack.imgur.com/ddX9U.png"}}),a("v-card-actions",[a("v-btn",{attrs:{dark:"",color:"red lighten-2"},on:{click:function(e){return t.goToEspera()}}},[t._v(" CHEGUEI NO DESTINO ")])],1),a("v-card-text",[t._v(" (Placeholder para uma integracao com o google maps) ")])],1)],1)],1)],1)},r=[],o=a("bc3a"),c=a.n(o),i={name:"entregaCard",data:function(){return{msg:"card",show:!1}},props:["numero_da_entrega"],methods:{goToEspera:function(){var t={numero:this.$route.params.num,status:"esperando o cliente"};c.a.put("http://localhost:3000/entrega",t).then((function(t){console.log(t)})),this.$router.push({name:"espera",params:{num:this.$route.params.num}})}}},s=i,u=a("2877"),l=a("6544"),d=a.n(l),v=a("8336"),p=a("b0af"),m=a("99d9"),f=a("62ad"),g=a("a523"),h=a("adda"),_=a("0fd9"),b=Object(u["a"])(s,n,r,!1,null,null,null);e["a"]=b.exports;d()(b,{VBtn:v["a"],VCard:p["a"],VCardActions:m["a"],VCardText:m["b"],VCardTitle:m["c"],VCol:f["a"],VContainer:g["a"],VImg:h["a"],VRow:_["a"]})},"3dfd":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-main",{staticClass:"grey lighten-3"},[a("v-card",[a("v-app-bar",{attrs:{color:"#6A76AB",dark:""},scopedSlots:t._u([{key:"extension",fn:function(){return[a("v-tabs",[a("v-tab",[t._v("Estoque")]),a("v-tab",[t._v("Cardapio")]),a("v-tab",[t._v("Pedido")])],1)]},proxy:!0}])},[a("h1",[t._v("Entregas")]),a("v-spacer")],1)],1),a("v-col",[a("router-view")],1)],1)],1)},r=[],o={name:"App",data:function(){return{name:"app"}}},c=o,i=a("2877"),s=a("6544"),u=a.n(s),l=a("7496"),d=a("40dc"),v=a("b0af"),p=a("62ad"),m=a("f6c4"),f=a("2fa4"),g=a("71a3"),h=a("fe57"),_=Object(i["a"])(c,n,r,!1,null,null,null);e["a"]=_.exports;u()(_,{VApp:l["a"],VAppBar:d["a"],VCard:v["a"],VCol:p["a"],VMain:m["a"],VSpacer:f["a"],VTab:g["a"],VTabs:h["a"]})},"402c":function(t,e,a){"use strict";var n=a("2b0e"),r=a("f309");n["a"].use(r["a"]),e["a"]=new r["a"]({})},"4f8b":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"6"}},t._l(t.items,(function(e){return a("v-col",{key:e.name},[a("entregaItemCard",{attrs:{numero_da_entrega:e.numero_da_entrega,endereco:e.endereco,pratos:e.pratos,status:e.status},on:{confirm:t.confirm}})],1)})),1),a("v-divider",{attrs:{vertical:""}}),a("v-col",{attrs:{cols:"4"}},[a("v-col",[a("v-card",{staticClass:"mx-auto"},[a("v-card-text",[t._v("Entregador: "+t._s(t.entregador)+" "),a("v-avatar",{attrs:{color:"indigo"}},[a("v-icon",{attrs:{dark:""}},[t._v(" mdi-account-circle ")])],1)],1),a("v-divider"),a("v-card-text",[t._v("CONFIRMAR ENTREGA ")]),a("v-card-title",[t._v(" #"+t._s(t.numero)+" ")]),a("v-card-actions",[a("v-btn",{attrs:{dark:"",color:"indigo","x-large":""},on:{click:function(e){return t.goToMap()}}},[t._v(" SAIR PARA A ENTREGA ")])],1)],1)],1)],1)],1)],1)},r=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{attrs:{outlined:""}},[a("v-card-title",[t._v("PEDIDO #"+t._s(t.numero_da_entrega))]),a("v-card-text",[t._v(" "+t._s(t.endereco)+" ")]),a("v-divider",{staticClass:"mx-4"}),a("v-list",[t._l(t.pratos,(function(e){return a("v-list-item",{key:e.name},[a("v-list-item-title",[t._v(t._s(e.name))]),a("v-list-item-text",[t._v("x"+t._s(e.quantity)+" ")])],1)})),a("v-card-actions",[a("v-btn",{attrs:{dark:"",color:"blue lighten-3"},on:{click:function(e){return t.$emit("confirm",t.numero_da_entrega)}}},[t._v(" ACEITAR ENTREGA ")])],1)],2)],1)},c=[],i={name:"entregaCard",data:function(){return{msg:"card",show:!1}},props:["numero_da_entrega","pratos","endereco"],methods:{}},s=i,u=a("2877"),l=a("6544"),d=a.n(l),v=a("8336"),p=a("b0af"),m=a("99d9"),f=a("ce7e"),g=a("8860"),h=a("da13"),_=a("5d23"),b=Object(u["a"])(s,o,c,!1,null,null,null),V=b.exports;d()(b,{VBtn:v["a"],VCard:p["a"],VCardActions:m["a"],VCardText:m["b"],VCardTitle:m["c"],VDivider:f["a"],VList:g["a"],VListItem:h["a"],VListItemTitle:_["a"]});var C=a("bc3a"),E=a.n(C),x={name:"entregaHome",components:{entregaItemCard:V},data:function(){return{items:[],numero:0,entregador:""}},methods:{updateItems:function(){var t=this;E.a.get("http://localhost:3000/entrega").then((function(e){t.items=e.data}))},getEntregador:function(){var t=this;E.a.get("http://localhost:3000/entregadorLogin").then((function(e){t.entregador=e.data[0]["nome_entregador"]}))},confirm:function(t){this.numero=t;var e={numero:this.numero,nome_entregador:this.entregador};E.a.put("http://localhost:3000/entrega",e).then((function(t){console.log(t)}))},goToMap:function(){var t={numero:this.numero,status:"em viagem"};E.a.put("http://localhost:3000/entrega",t).then((function(t){console.log(t)})),this.$router.push({name:"mapa",params:{num:this.numero}})}},beforeMount:function(){this.updateItems(),this.getEntregador()}},A=x,y=a("8212"),T=a("62ad"),O=a("a523"),w=a("132d"),k=a("0fd9"),I=Object(u["a"])(A,n,r,!1,null,null,null);e["a"]=I.exports;d()(I,{VAvatar:y["a"],VBtn:v["a"],VCard:p["a"],VCardActions:m["a"],VCardText:m["b"],VCardTitle:m["c"],VCol:T["a"],VContainer:O["a"],VDivider:f["a"],VIcon:w["a"],VRow:k["a"]})},"56d7":function(t,e,a){"use strict";a.r(e),function(t){a("e260"),a("e6cf"),a("cca6"),a("a79d");var e=a("2b0e"),n=a("8c4f"),r=a("3dfd"),o=a("4f8b"),c=a("38eb"),i=a("9fdb"),s=a("402c");e["a"].config.productionTip=!1,e["a"].use(n["a"]);var u=new n["a"]({base:t,mode:"history",routes:[{path:"/",component:o["a"]},{path:"/mapa/:num",name:"mapa",component:c["a"]},{path:"/espera/:num",name:"espera",component:i["a"]}]});new e["a"]({vuetify:s["a"],router:u,render:function(t){return t(r["a"])}}).$mount("#app")}.call(this,"/")},"9fdb":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",{attrs:{justify:"space-around"}},[a("v-col",{attrs:{cols:"6"}},[a("v-card",{attrs:{outlined:""}},[a("v-card-text",[t._v("Esperando o cliente...")]),a("v-card-title",[t._v(t._s(t.nome_cliente))]),a("v-card-actions",[a("v-col",[a("v-btn",{attrs:{dark:"",color:"indigo","x-large":""},on:{click:function(e){return t.confirmaEntrega(!0)}}},[t._v(" ENTREGA REALIZADA ")]),a("v-btn",{attrs:{color:"red lighten-2",dark:"","x-large":""},on:{click:function(e){return t.confirmaEntrega(!1)}}},[t._v(" NÂO FOI POSSÍVEL REALIZAR A ENTREGA ")])],1)],1)],1)],1)],1)],1)},r=[],o=(a("7db0"),a("bc3a")),c=a.n(o),i={name:"entregaCard",data:function(){return{msg:"card",nome_cliente:"vazio",item:"vazio"}},props:["numero_da_entrega"],methods:{confirmaEntrega:function(t){var e={};e=t?{numero:this.$route.params.num,status:"entrega finalizada"}:{numero:this.$route.params.num,status:"falha na entrega"},c.a.put("http://localhost:3000/entrega",e).then((function(t){console.log(t)}))}},beforeMount:function(){var t=this;c.a.get("http://localhost:3000/entrega").then((function(e){t.nome_cliente=e.data.find((function(e){return e.numero_da_entrega==t.$route.params.num}))["nome_cliente"]}))}},s=i,u=a("2877"),l=a("6544"),d=a.n(l),v=a("8336"),p=a("b0af"),m=a("99d9"),f=a("62ad"),g=a("a523"),h=a("0fd9"),_=Object(u["a"])(s,n,r,!1,null,null,null);e["a"]=_.exports;d()(_,{VBtn:v["a"],VCard:p["a"],VCardActions:m["a"],VCardText:m["b"],VCardTitle:m["c"],VCol:f["a"],VContainer:g["a"],VRow:h["a"]})}});
//# sourceMappingURL=app.a97f5a68.js.map