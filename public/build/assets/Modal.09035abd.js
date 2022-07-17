import{k as u,o as h,a as f,w as a,j as i,i as c,v as n,b as t,T as r,n as v,h as y}from"./app.3ce0088d.js";import{_ as x}from"./plugin-vue_export-helper.21dcd24c.js";const p={props:{show:{default:!1},maxWidth:{default:"2xl"},closeable:{default:!0}},methods:{close(){this.closeable&&this.$emit("close")}},watch:{show:{immediate:!0,handler:e=>{e?document.body.style.overflow="hidden":document.body.style.overflow=null}}},created(){const e=s=>{s.key==="Escape"&&this.show&&this.close()};document.addEventListener("keydown",e),this.$once("hook:destroyed",()=>{document.removeEventListener("keydown",e)})},computed:{maxWidthClass(){return{sm:"sm:max-w-sm",md:"sm:max-w-md",lg:"sm:max-w-lg",xl:"sm:max-w-xl","2xl":"sm:max-w-2xl"}[this.maxWidth]}}},w={class:"fixed top-0 inset-x-0 px-4 pt-6 sm:px-0 sm:flex sm:items-top sm:justify-center",style:{"z-index":"1004"}},_=t("div",{class:"absolute inset-0 bg-gray-500 opacity-75"},null,-1),b=[_];function k(e,s,l,g,C,o){const d=u("portal");return h(),f(d,{to:"modal"},{default:a(()=>[i(r,{"leave-active-class":"duration-200"},{default:a(()=>[c(t("div",w,[i(r,{"enter-active-class":"ease-out duration-300","enter-class":"opacity-0","enter-to-class":"opacity-100","leave-active-class":"ease-in duration-200","leave-class":"opacity-100","leave-to-class":"opacity-0"},{default:a(()=>[c(t("div",{class:"fixed inset-0 transform transition-all",onClick:s[0]||(s[0]=(...m)=>o.close&&o.close(...m))},b,512),[[n,l.show]])]),_:1}),i(r,{"enter-active-class":"ease-out duration-300","enter-class":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95","enter-to-class":"opacity-100 translate-y-0 sm:scale-100","leave-active-class":"ease-in duration-200","leave-class":"opacity-100 translate-y-0 sm:scale-100","leave-to-class":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"},{default:a(()=>[c(t("div",{class:v(["bg-white rounded-lg shadow-xl transform transition-all sm:w-full",o.maxWidthClass])},[y(e.$slots,"default")],2),[[n,l.show]])]),_:3})],512),[[n,l.show]])]),_:3})]),_:3})}var B=x(p,[["render",k]]);export{B as M};
