import{J as b}from"./ActionMessage.114a7227.js";import{J as g}from"./Button.2e6d22da.js";import{J as j,a as v}from"./Label.63bee86a.js";import{J as T,a as J}from"./InputError.2a52f420.js";import{_ as S}from"./plugin-vue_export-helper.21dcd24c.js";import{k as s,o as w,a as x,K as N,w as o,j as a,n as V,b as e,t as c,g as m}from"./app.3ce0088d.js";import"./SectionTitle.e7792249.js";const y={components:{JetActionMessage:b,JetButton:g,JetFormSection:j,JetInput:T,JetInputError:J,JetLabel:v},props:["team","permissions"],data(){return{form:this.$inertia.form({name:this.team.name},{bag:"updateTeamName",resetOnSuccess:!1})}},methods:{updateTeamName(){this.form.put("/teams/"+this.team.id,{preserveScroll:!0})}}},k=m(" Team Name "),B=m(" The team's name and owner information. "),U={class:"col-span-6"},C={class:"flex items-center mt-2"},F=["src"],I={class:"ml-4 leading-tight"},O={class:"text-sm text-gray-700"},z={class:"col-span-6 sm:col-span-4"},A=m(" Saved. "),D=m(" Save ");function E(K,r,n,L,t,l){const i=s("jet-label"),_=s("jet-input"),d=s("jet-input-error"),p=s("jet-action-message"),u=s("jet-button"),f=s("jet-form-section");return w(),x(f,{onSubmitted:l.updateTeamName},N({title:o(()=>[k]),description:o(()=>[B]),form:o(()=>[e("div",U,[a(i,{value:"Team Owner"}),e("div",C,[e("img",{class:"w-12 h-12 rounded-full",src:n.team.owner.profile_photo_url},null,8,F),e("div",I,[e("div",null,c(n.team.owner.name),1),e("div",O,c(n.team.owner.email),1)])])]),e("div",z,[a(i,{for:"name",value:"Team Name"}),a(_,{id:"name",type:"text",class:"block w-full mt-1",modelValue:t.form.name,"onUpdate:modelValue":r[0]||(r[0]=h=>t.form.name=h),disabled:!n.permissions.canUpdateTeam},null,8,["modelValue","disabled"]),a(d,{message:t.form.errors.name,class:"mt-2"},null,8,["message"])])]),_:2},[n.permissions.canUpdateTeam?{name:"actions",fn:o(()=>[a(p,{on:t.form.recentlySuccessful,class:"mr-3"},{default:o(()=>[A]),_:1},8,["on"]),a(u,{class:V({"opacity-25":t.form.processing}),disabled:t.form.processing},{default:o(()=>[D]),_:1},8,["class","disabled"])])}:void 0]),1032,["onSubmitted"])}var W=S(y,[["render",E]]);export{W as default};
