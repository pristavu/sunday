import{S as B}from"./controls.94abbb5d.js";import{_ as F}from"./plugin-vue_export-helper.21dcd24c.js";import{r as p,t as f,f as g}from"./index.590f4998.js";import{i as S}from"./index.41fb7a9b.js";import{o as d,d as u,b as a,t as m,g as k,F as x,e as b,q as y,n as M,k as v,a as q,j as A}from"./app.3ce0088d.js";function C(l,t){p(2,arguments);var e=f(l),i=f(t);return e.getTime()>i.getTime()}function I(l,t){p(2,arguments);var e=f(l),i=f(t);return e.getTime()<i.getTime()}function E(l,t){p(2,arguments);var e=f(l),i=f(t);return e.getTime()===i.getTime()}const P={props:{daySlot:{type:Object,required:!0},allowUpdate:{type:Boolean,default:!1},allowDelete:{type:Boolean,default:!1},currentTime:{type:Date,required:!0},showAll:{type:Boolean},dateField:{type:String,default:"date"},timeField:{type:String,default:"time"},timeEndField:{type:String,default:"end_time"},linkFields:{type:Object,default(){return{}}},dateEndField:{type:String,default:"due_date"}},computed:{isCurrent(){if(this.daySlot[this.timeField]&&this.daySlot[this.timeEndField]&&this.currentTime){const t=this.setTime(this.daySlot[this.timeField],this.setDate(this.daySlot[this.dateField])),e=this.setTime(this.daySlot[this.timeEndField],this.setDate(this.daySlot[this.dateEndField]||this.daySlot[this.dateField])),i=C(this.currentTime,t)||E(this.currenTime,t),n=I(this.currentTime,e)||E(this.currentTime,e);return i&&n}return!1},hasPassed(){if(typeof this.daySlot[this.timeField]=="string"&&this.daySlot[this.timeEndField]){const t=this.setTime(this.daySlot[this.timeEndField],this.setDate(this.daySlot[this.dateEndField]||this.daySlot[this.dateField]));return C(this.currentTime,t)&&S(this.currentTime)&&!this.showAll}else return Number(this.daySlot[this.timeField])<this.daySlot[this.timeField]&&S(this.currentTime)&&!this.showAll}},methods:{formatHour(l){if(l){const t=new Date,e=l.split(":");return t.setHours(e[0]),t.setMinutes(e[1]),g(t,"hh:mm a")}},setDate(l){const t=l?l.split("-"):null;return t?new Date(t[0],t[1]-1,t[2]):null},setTime(l,t){const e=t||new Date,i=l.split(":");return e.setHours(i[0]),e.setMinutes(i[1]),e.setSeconds(0),e}}},U={class:"content-body"},N={class:"image_cover"},V={class:"program-name"},j={class:"pl-1s"},G={class:"day-slot__title"},O={class:""},L=["href"],z=a("i",{class:"fa fa-external-link-alt"},null,-1),R={class:"crud-controls"},J=a("i",{class:"fa fa-edit"},null,-1),K=[J],Q=a("i",{class:"fa fa-trash"},null,-1),W=[Q],X={class:"day-slot__description pl-1"},Y={class:"hours-container"},Z={class:"hours-container__left"},$=a("div",{class:"hours-container__divider"},null,-1),ee={class:"hours-container__item"},te={key:0,class:"block"},le={class:"block"},se={key:1,class:"block"},ie={key:2,class:"block mx-2"},ae={class:"block"};function ne(l,t,e,i,n,s){return d(),u("div",{class:M(["day-slot",{"on-air-program":s.isCurrent,"past-hour":s.hasPassed}])},[a("div",U,[a("div",N,[a("span",null,m(e.daySlot.title[0]),1)]),a("div",V,[a("div",j,[a("h4",G,[a("div",O,[k(m(e.daySlot.title)+" ",1),(d(!0),u(x,null,b(e.linkFields,(o,c)=>(d(),u("a",{class:"day-slot__links",target:"_blank",href:e.daySlot[c],key:c},[z,k(" "+m(o),1)],8,L))),128))]),a("div",R,[e.daySlot.id&&e.allowUpdate?(d(),u("span",{key:0,class:"mx-2 px-2 cursor-pointer hover:text-blue-500",onClick:t[0]||(t[0]=o=>l.$emit("update-called",e.daySlot))},K)):y("",!0),e.daySlot.id&&e.allowDelete?(d(),u("span",{key:1,class:"mx-2 px-2 cursor-pointer rounded transition-all hover:text-red-700",onClick:t[1]||(t[1]=o=>l.$emit("delete-called",e.daySlot))},W)):y("",!0)])])]),a("div",X,m(e.daySlot.descripcion&&e.daySlot.descripcion.slice(0,150))+" "+m(e.daySlot.descripcion&&e.daySlot.descripcion.length>150?"...":""),1)])]),a("div",Y,[a("div",Z,[$,a("div",ee,[s.isCurrent?(d(),u("span",te," From")):y("",!0),a("span",le,m(s.formatHour(e.daySlot[this.timeField])),1),s.isCurrent?(d(),u("span",se," to ")):(d(),u("span",ie," - ")),a("span",ae,m(s.formatHour(e.daySlot[this.timeEndField])),1)])])])],2)}var re=F(P,[["render",ne]]);const oe=!1,de={components:{GridItem:re},props:{selectedDate:{type:Date,required:!0},allowUpdate:{type:Boolean,default:!1},allowDelete:{type:Boolean,default:!1},schedule:{type:Array,required:!0},timeField:{type:String,default:"time"},dateField:{type:String,default:"date"},timeEndField:{type:String,default:"end_time"},dateEndField:{type:String,default:"due_date"},linkFields:{type:Object,default(){}}},data(){return{currentTime:new Date,agenda:[],modoManual:!1,showAll:!1}},created(){setInterval(()=>{this.currentTime=new Date},1e3)},computed:{horaActual(){return this.modoManual?this.horaActiva:new Date().getHours()},isToday(){return S(this.selectedDate)},textToggleMostrar(){return this.showAll?"Current":"Past Events"},iconToggleMostrar(){return this.showAll?"Current":"Past Events"},formattedAgenda(){const l=[];let t={};for(let e=0;e<24;e++){let i=e,n=e+1;e<10&&(i="0"+i),n<10&&(n="0"+n),n==24&&(n="00");const s=this.schedule.filter(r=>{var D;let w=(D=r[this.timeField])==null?void 0:D.slice(0,2);return w=w||0,w==i}),o=new Date,c=s.length-1,_=c>=0?s[c][this.timeField]:t.horaFinal||n+":00",h=_==null?void 0:_.split(":"),T=this.schedule.find(r=>(o.setHours(h?h[0]:0),o.setMinutes(h?h[1]:0),o.setSeconds(0),this.isHourBetween(r.hora,r.hora_final,o,!0,"aqui"))),H=`${e}:00`;if(!s.length&&oe){const r={hora:t.hora_final?t.hora_final.slice(0,5):e,horaExacta:t.hora_final?t.hora_final.slice(0,5):H,descripcion:"Sin descripcion ",horaFinal:T?T.hora.slice(0,5):n+":00",nombre:"N / A"};r.hora!=r.horaFinal&&(t=r,l.push(r))}else s.forEach(r=>{r[this.timeField]=r[this.timeField]?r[this.timeField].slice(0,5):"00:00",r[this.timeEndField]&&(r[this.timeEndField]=r[this.timeEndField].slice(0,5)),l.push(r),t=r})}return l}},methods:{hourHasPassed(l){if(typeof l.hora=="string"&&l.horaFinal){const t=l.horaFinal.replaceAll(":","").slice(0,4),e=g(this.currentTime,"HHmm");return t<e&&this.isToday&&!this.showAll}else{const t=l.hora;return Number(t)<this.horaActual&&this.isToday&&!this.showAll}},toggleViewAll(){this.showAll=!this.showAll},isHourBetween(l="",t="",e,i){if(l&&t&&e){const n=l.replace(":",""),s=t.replace(":",""),o=g(e,"HHmm");return(i?n>o:o>=n)&&o<=s}return!1}}},ce={class:"toggle-show__container"};function ue(l,t,e,i,n,s){const o=v("grid-item");return d(),u("div",null,[a("div",ce,[a("div",null,[s.isToday?(d(),u("button",{key:0,class:"text-button",onClick:t[0]||(t[0]=(...c)=>s.toggleViewAll&&s.toggleViewAll(...c))},m(s.textToggleMostrar),1)):y("",!0)])]),(d(!0),u(x,null,b(s.formattedAgenda,(c,_)=>(d(),q(o,{key:`${c.horaExacta}-${_}`,"day-slot":c,"show-all":n.showAll,"link-fields":e.linkFields,"current-time":n.currentTime,"allow-delete":e.allowDelete,"allow-update":e.allowUpdate,onUpdateCalled:t[1]||(t[1]=h=>l.$emit("update-called",h)),onDeleteCalled:t[2]||(t[2]=h=>l.$emit("delete-called",h))},null,8,["day-slot","show-all","link-fields","current-time","allow-delete","allow-update"]))),128))])}var he=F(de,[["render",ue]]);const me={props:{allowAdd:{type:Boolean,default:!1},allowUpdate:{type:Boolean,default:!1},allowDelete:{type:Boolean,default:!1},schedule:{type:Array,default(){return[]}},linkFields:{type:Object,default(){}},value:{type:[Date,null],required:!0}},components:{Controls:B,Grid:he},data(){return{formData:{},currentTime:new Date,selectedDay:null,horaActiva:0,modoManual:!1,mostrarTodos:!1}},created(){setInterval(()=>{this.currentTime=new Date},1e3)},computed:{horaActual(){return new Date().getHours()},currentProgram(){return this.schedule.find(l=>this.isHourBetween(l.hora,l.hora_final,this.currentTime))},nextProgram(){return{}}},methods:{isHourBetween(l="",t="",e){const i=l.replace(":",""),n=t.replace(":",""),s=g(e,"HHmm");return s>=i&&s<=n},deleteItem(l){this.$emit("delete",l)},editItem(l){this.$emit("edit",l)}}},_e={class:"w-full overflow-hidden"},fe={class:"w-full"};function ye(l,t,e,i,n,s){const o=v("controls"),c=v("grid");return d(),u("div",_e,[a("div",fe,[A(o,{value:e.value,onInput:t[0]||(t[0]=_=>l.$emit("input",_))},null,8,["value"]),A(c,{"selected-date":e.value,schedule:e.schedule,"allow-add":e.allowAdd,"link-fields":e.linkFields,"allow-delete":e.allowDelete,"allow-update":e.allowUpdate,onDeleteCalled:s.deleteItem,onUpdateCalled:s.editItem},null,8,["selected-date","schedule","allow-add","link-fields","allow-delete","allow-update","onDeleteCalled","onUpdateCalled"])])])}var pe=F(me,[["render",ye]]);export{pe as S};
