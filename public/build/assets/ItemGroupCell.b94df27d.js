import{_ as v}from"./plugin-vue_export-helper.21dcd24c.js";import{k as f,o as a,a as _,w as p,b as m,t as V,j as h,g as C,d as u,e as x,F as g,n as b,q as k,E as M,i as S,m as E,x as N,p as T,f as I}from"./app.3ce0088d.js";import{f as y}from"./index.590f4998.js";const B={props:{value:{type:String,required:!0}},methods:{getFavicon(l){return l&&`https://www.google.com/s2/favicons?domain=${l}`},handleCommands(l){switch(l){case"copy":navigator.clipboard.writeText(this.value),this.$notify({type:"success",message:"URL copied"});break;case"edit":this.$emit("edit");break}}}},D=["title"],U=["href"],A=["src"],j={class:"w-full h-full flex align-middle text-left"},L=C("Edit"),O=C("Copy"),F=["href"];function G(l,t,i,c,e,s){const r=f("el-dropdown-item"),d=f("el-dropdown-menu"),n=f("el-dropdown");return a(),_(n,{placement:"bottom-start",size:"mini",onCommand:s.handleCommands},{default:p(()=>[m("span",{title:i.value,class:"cell-link h-7 w-full"},[m("a",{target:"_blank",href:i.value,class:"flex"},[m("img",{src:s.getFavicon(i.value),alt:"",srcset:"",class:"favicon"},null,8,A),m("span",j,V(i.value),1)],8,U)],8,D),h(d,{slot:"dropdown"},{default:p(()=>[h(r,{command:"edit",icon:"fa fa-edit"},{default:p(()=>[L]),_:1}),h(r,{command:"copy",icon:"fa fa-copy"},{default:p(()=>[O]),_:1}),h(r,{command:"go",icon:"fa fa-external-link-alt"},{default:p(()=>[m("a",{href:i.value,target:"_blank",rel:"noopener noreferrer"}," Go to link ",8,F)]),_:1})]),_:1})]),_:1},8,["onCommand"])}var q=v(B,[["render",G],["__scopeId","data-v-7cf86b8a"]]),w={props:{fieldName:{type:String},field:{type:Object,default(){return{}}},fieldType:{type:String,default:"text"},item:{type:Object},index:{type:Number},isNew:{type:Boolean},isTitle:{type:Boolean}},computed:{displayValue(){if(["select","label"].includes(this.field.type)){const l=this.field.options.find(t=>t.name==this.value);return l?l.label||l.name:this.item[this.fieldName]}else return["date"].includes(this.field.type)?this.item[this.fieldName]?typeof this.item[this.fieldName]=="string"?this.item[this.fieldName]:y(new Date(this.item[this.fieldName]),"yyyy-MM-dd"):"":this.item[this.fieldName]}},methods:{formatValue(l,t="default",i="read"){const c={date:{write:(e="")=>typeof e=="string"?e:y(e,"yyyy-MM-dd"),read:(e="")=>e&&typeof e=="string"?this.setDate(e):e},time:{write:(e="")=>typeof e=="string"?e:y(e,"HH:mm"),read:(e="")=>e&&typeof e=="string"?this.setTime(e):e},default:{read:e=>e,write:e=>e}};return c[t]?c[t][i](l):l},focusCell(){this.$refs.input&&(this.$refs.input.$el&&!this.$refs.input.focus?this.$refs.input.$el:this.$refs.input).focus()},focus(){this.$refs.input&&(this.$refs.input.$el&&!this.$refs.input.focus?this.$refs.input.$el:this.$refs.input).focus()},setDate(l){const t=l?l.split("-"):null;return t?new Date(t[0],t[1]-1,t[2]):null},setTime(l){let t=l?l.split(":"):null;const i=new Date;return i.setHours(t[0]),i.setMinutes(t[1]),i.setSeconds(0),i},toggleEditMode(){this.isEditMode=!this.isEditMode,this.$nextTick(()=>{this.$refs.input&&(this.$refs.input.$el&&!this.$refs.input.focus?this.$refs.input.$el:this.$refs.input).focus()})},saveChanges(l="default"){this.$emit("saved",this.formatValue(this.value,l,"write")),this.toggleEditMode()},saveItem(l){this.saveChanges(),this.$emit("keydown",l),this.toggleEditMode()}}};const H={mixins:[w],props:{value:{type:String},options:{type:Array,default(){return[]}}},data(){return{localValue:""}},watch:{value:{handler(){this.localValue=this.value},immediate:!0},localValue(){this.localValue!=this.value?(this.$emit("input",this.localValue),this.$emit("saved")):this.$emit("closed")}}};function P(l,t,i,c,e,s){const r=f("el-option"),d=f("el-select");return a(),_(d,{modelValue:e.localValue,"onUpdate:modelValue":t[0]||(t[0]=n=>e.localValue=n),ref:"input",placeholder:"Select",filterable:!0,"automatic-dropdown":!0,onVisibleChange:t[1]||(t[1]=n=>!n&&l.$emit("closed"))},{default:p(()=>[(a(!0),u(g,null,x(i.options,n=>(a(),_(r,{key:n.id,label:n.name,value:n.name},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])}var z=v(H,[["render",P]]);const K={mixins:[w],props:{value:{type:[Date,String]},users:{type:Array,default(){return[]}}},data(){return{localValue:""}},watch:{value:{handler(){this.value&&(this.localValue=this.formatValue(this.value,"date","read"))},immediate:!0},localValue(){this.formatValue(this.localValue,"date","read")!=this.formatValue(this.value,"date","read")?(this.$emit("input",this.localValue),this.$emit("saved","date")):this.$emit("closed")}}};function R(l,t,i,c,e,s){const r=f("el-date-picker");return a(),_(r,{modelValue:e.localValue,"onUpdate:modelValue":t[0]||(t[0]=d=>e.localValue=d),ref:"input",type:"date",onBlur:t[1]||(t[1]=d=>l.$emit("closed")),"input-class":"w-full",placeholder:"selecciona una fecha"},null,8,["modelValue"])}var J=v(K,[["render",R]]);const Q={mixins:[w],props:{value:{type:String},users:{type:Array,default(){return[]}}},data(){return{localValue:""}},watch:{value:{handler(){this.localValue=this.value},immediate:!0},localValue(){this.localValue!=this.value?(this.$emit("input",this.localValue),this.$emit("saved")):this.$emit("closed")}}};function W(l,t,i,c,e,s){const r=f("el-option"),d=f("el-select");return a(),_(d,{modelValue:e.localValue,"onUpdate:modelValue":t[0]||(t[0]=n=>e.localValue=n),ref:"input","value-key":"name",placeholder:"Select",filterable:!0,"automatic-dropdown":!0,onVisibleChange:t[1]||(t[1]=n=>!n&&l.$emit("closed"))},{default:p(()=>[(a(!0),u(g,null,x(i.users,n=>(a(),_(r,{ref_for:!0,ref:"input",key:n.id,label:n.name,value:n.name},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])}var X=v(Q,[["render",W]]);const Y={mixins:[w],props:{value:{type:[Date,String]},users:{type:Array,default(){return[]}}},data(){return{localValue:""}},watch:{value:{handler(){this.value&&(this.localValue=this.formatValue(this.value,"time","read"))},immediate:!0}},methods:{emitChange(){this.formatValue(this.localValue,"date","read")!=this.formatValue(this.value,"date","read")?(this.$emit("input",this.formatValue(this.localValue,"time","write")),this.$emit("saved","time")):this.$emit("closed")}}};function Z(l,t,i,c,e,s){const r=f("el-time-picker");return a(),_(r,{modelValue:e.localValue,"onUpdate:modelValue":t[0]||(t[0]=d=>e.localValue=d),ref:"input","picker-options":{selectableRange:"00:00:00 - 23:30:59"},onChange:s.emitChange,onBlur:t[1]||(t[1]=d=>l.$emit("closed")),placeholder:"Arbitrary time"},null,8,["modelValue","onChange"])}var ee=v(Y,[["render",Z]]);const te={props:{options:{type:Array,required:!0},value:{type:Object,required:!0},iconClass:{type:String,default:"fas fa-layer-group"},tooltip:{type:String,default:"Stage"},showLabel:{type:Boolean,default:!0}},data(){return{localValue:{},isEditMode:!1}},watch:{value:{handler(){this.localValue=this.value},immediate:!0},localValue(){this.localValue!=this.value&&this.$emit("input",this.localValue)}},methods:{toggleEditMode(){this.isEditMode=!this.isEditMode,this.$nextTick(()=>{this.$refs.input&&(this.$refs.input.$el&&!this.$refs.input.focus?this.$refs.input.$el:this.$refs.input).focus()})}}},le={class:"flex items-center"},ie={key:0,class:"ml-2 font-bold"},se={key:1,class:"selector"};function ae(l,t,i,c,e,s){const r=f("el-tooltip"),d=f("el-option"),n=f("el-select");return a(),u("div",null,[e.isEditMode?(a(),u("div",se,[h(n,{modelValue:e.localValue,"onUpdate:modelValue":t[1]||(t[1]=o=>e.localValue=o),ref:"input",placeholder:"Select",filterable:!0,"automatic-dropdown":!0,onVisibleChange:t[2]||(t[2]=o=>!o&&s.toggleEditMode())},{default:p(()=>[(a(!0),u(g,null,x(i.options,o=>(a(),_(d,{key:o.id,label:o.name,value:o},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])])):(a(),u("div",{key:0,class:"view",onClick:t[0]||(t[0]=o=>s.toggleEditMode())},[h(r,{effect:"dark",content:`${i.tooltip}: ${i.value.name}`,placement:"top"},{default:p(()=>[m("div",le,[m("i",{class:b(`${i.iconClass} mx-2`)},null,2),i.showLabel?(a(),u("div",ie,V(i.value.name),1)):k("",!0)])]),_:1},8,["content"])]))])}var ne=v(te,[["render",ae]]);const oe={name:"ItemGroupCell",inject:["users"],components:{InputDate:J,InputLabel:z,InputPerson:X,InputTime:ee,LinkPreview:q,BoardSelector:ne},props:{fieldName:{type:String},field:{type:Object,default(){return{}}},fieldType:{type:String,default:"text"},item:{type:Object},index:{type:Number},isNew:{type:Boolean},isTitle:{type:Boolean},showControls:{type:Boolean},boards:{type:Array,default(){return[]}},closeOnBlur:{type:Boolean,default:!0},placeholder:{type:String,default:"Add item"}},watch:{item:{handler(l){if(l[this.fieldName]!=this.value){const t=l.fields&&l.fields.find(i=>i.field_name==this.fieldName);l[this.fieldName]=l[this.fieldName]||t&&t.value,this.value=this.formatValue(l[this.fieldName],this.field?this.field.type:"default","read")}},deep:!0,immediate:!0},selectValue(){this.field.type=="person"&&(this.value=this.selectValue,this.saveChanges())}},data(){return{value:"",selectValue:"",isEditMode:!1}},computed:{displayValue(){return this.formatValue(this.value,this.field.type,"display")},component(){return`input-${this.field.type}`},itemStage(){return this.item&&this.item.stage&&this.item.board?`${this.item.stage.name}`:""},isCustomField(){return this.field.type&&["label","select","time","date","person"].includes(this.field.type)}},mounted(){},methods:{formatValue(l,t="default",i="read"){const c={date:{write:(e="")=>typeof e=="string"?e:y(e,"yyyy-MM-dd"),read:(e="")=>e&&typeof e=="string"?this.setDate(e):e,display:(e="")=>{if(typeof e=="string")return e;try{return y(e,"yyyy-MM-dd")}catch{return e}}},time:{write:(e="")=>typeof e=="string"?e:y(e,"hh:mm"),read:(e="")=>e&&typeof e=="string"?this.setTime(e):e,display:(e="")=>{if(typeof e=="string")return e;try{return y(e,"hh:mm")}catch{return e}}},label:{display:e=>{const s=this.field.options.find(r=>r.name==this.value);return s?s.label||s.name:e}},default:{read:e=>e,write:e=>e,display:e=>e}};return c[t]&&c[t][i]?c[t][i](l):l},setDate(l){const t=l?l.split("-"):null;return t?new Date(t[0],t[1]-1,t[2]):null},setTime(l){let t=l?l.split(":"):null;const i=new Date;return i.setHours(t[0]),i.setMinutes(t[1]),i.setSeconds(0),i},toggleEditMode(){this.isEditMode=!this.isEditMode,this.$nextTick(()=>{this.$refs.input&&(this.$refs.input.$el&&!this.$refs.input.focus?this.$refs.input.$el:this.$refs.input).focus()})},saveChanges(l="default"){this.$emit("saved",this.formatValue(this.value,l,"write")),this.closeOnBlur&&this.toggleEditMode()},saveItem(l){this.saveChanges(),this.$emit("keydown",l),this.toggleEditMode()}}},$=l=>(T("data-v-e9aaadaa"),l=l(),I(),l),re=$(()=>m("i",{class:"mr-3 fa fa-plus"},null,-1)),de=["title"],ue={key:0,class:"w-full h-8 px-2"},fe={key:1,class:"flex items-center w-full h-full"},ce={key:0,class:"controls"},me=["name","placeholder"],pe={key:1,class:"flex h-full controls"},he=$(()=>m("i",{class:"mx-2 fas fa-clock"},null,-1)),_e=$(()=>m("i",{class:"mx-2 fas fa-user"},null,-1)),ye=$(()=>m("i",{class:"mx-2 fas fa-tag"},null,-1));function ve(l,t,i,c,e,s){const r=f("link-preview"),d=f("board-selector"),n=f("el-tooltip");return a(),u("div",{class:b(["item-group-cell",{"editable-mode":e.isEditMode,"new-item":i.isTitle}]),ref:"ItemGroupCell"},[i.isTitle&&!e.isEditMode?(a(),u("div",{key:0,class:"new-item-button",onClick:t[0]||(t[0]=o=>s.toggleEditMode())},[re,m("span",null,V(i.placeholder),1)])):e.isEditMode?(a(),u(g,{key:2},[s.isCustomField?(a(),u("div",ue,[(a(),_(M(s.component),{modelValue:e.value,"onUpdate:modelValue":t[3]||(t[3]=o=>e.value=o),ref:"input",users:s.users,options:i.field.options,onSaved:s.saveChanges,onClosed:t[4]||(t[4]=o=>e.isEditMode=!1)},null,40,["modelValue","users","options","onSaved"]))])):(a(),u("div",fe,[i.showControls&&i.item.board?(a(),u("div",ce,[h(d,{options:i.item.board.stages,"icon-class":"fas fa-layer-group",modelValue:i.item.stage,"onUpdate:modelValue":t[5]||(t[5]=o=>i.item.stage=o)},null,8,["options","modelValue"])])):k("",!0),S(m("input",{ref:"input",type:"text",class:b(["w-full h-8 px-2 mx-0 border-none rounded-none form-input",{"new-item":i.isTitle}]),name:`${i.index}-${i.fieldName}`,id:"",placeholder:i.placeholder,"onUpdate:modelValue":t[6]||(t[6]=o=>e.value=o),onBlur:t[7]||(t[7]=o=>s.saveChanges()),onKeydown:t[8]||(t[8]=N((...o)=>s.saveItem&&s.saveItem(...o),["enter"]))},null,42,me),[[E,e.value]]),i.showControls?(a(),u("div",pe,[h(d,{options:i.boards,tooltip:"Board","icon-class":"fas fa-list","show-label":!1,modelValue:i.item.board,"onUpdate:modelValue":t[9]||(t[9]=o=>i.item.board=o)},null,8,["options","modelValue"]),h(n,{effect:"dark",content:"reminder date",placement:"top"},{default:p(()=>[he]),_:1}),h(n,{effect:"dark",content:"Delegate",placement:"top"},{default:p(()=>[_e]),_:1}),h(n,{effect:"dark",content:"Status",placement:"top"},{default:p(()=>[ye]),_:1})])):k("",!0)]))],64)):(a(),u(g,{key:1},[i.field.type=="url"&&s.displayValue?(a(),_(r,{key:0,value:s.displayValue,onEdit:t[1]||(t[1]=o=>s.toggleEditMode())},null,8,["value"])):(a(),u("span",{key:1,onClick:t[2]||(t[2]=o=>s.toggleEditMode()),title:s.displayValue,class:"inline-block w-full px-2 overflow-hidden text-sm border-2 border-transparent border-dashed cursor-pointer h-7 hover:border-gray-300"},V(s.displayValue),9,de))],64))],2)}var $e=v(oe,[["render",ve],["__scopeId","data-v-e9aaadaa"]]);export{$e as I};
