import{_ as m}from"./AppLayout.8ec9311d.js";import{k as l,o as d,a as c,w as a,b as t,i as _,m as u}from"./app.3ce0088d.js";import{_ as f}from"./plugin-vue_export-helper.21dcd24c.js";import"./ConfirmationModal.60162698.js";import"./Modal.09035abd.js";import"./DangerButton.6c27673a.js";import"./SecondaryButton.9fb1985c.js";import"./DialogModal.7ab1b676.js";import"./Button.2e6d22da.js";const g={name:"Integrations",props:{okrs:{type:Array,default(){return[]}}},data(){return{message:"Hello World"}},components:{AppLayout:m},methods:{greet(){const s=new SpeechSynthesisUtterance(this.message);speechSynthesis.speak(s)}}},h=t("h2",{class:"text-xl font-semibold leading-tight text-gray-800"}," Dashboard ",-1),y={class:"py-12"};function x(s,e,n,k,o,p){const i=l("app-layout");return d(),c(i,{boards:n.okrs},{header:a(()=>[h]),default:a(()=>[t("div",y,[_(t("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=r=>o.message=r)},null,512),[[u,o.message]]),t("button",{class:"btn",onClick:e[1]||(e[1]=r=>p.greet())}," Greet ")])]),_:1},8,["boards"])}var V=f(g,[["render",x]]);export{V as default};
