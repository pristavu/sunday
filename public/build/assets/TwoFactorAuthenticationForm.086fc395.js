import{J as p}from"./ActionSection.db1e9f2b.js";import{J as f}from"./Button.da32a217.js";import{J as w}from"./DangerButton.22cb1572.js";import{J as v}from"./SecondaryButton.bbb9e25c.js";import{_ as C}from"./_plugin-vue_export-helper.cdc0426e.js";import{j as l,b as a,r as i,o as e,f as r,c as o,d as n,e as d,F as x,g as k,a as h,n as m,t as F}from"./app.1f7f3af2.js";import"./SectionTitle.f3f98c1a.js";const T={components:{JetActionSection:p,JetButton:f,JetDangerButton:w,JetSecondaryButton:v},data(){return{enabling:!1,disabling:!1,qrCode:null,recoveryCodes:[]}},methods:{enableTwoFactorAuthentication(){this.enabling=!0,this.$inertia.post("/user/two-factor-authentication",{},{preserveScroll:!0}).then(()=>Promise.all([this.showQrCode(),this.showRecoveryCodes()])).then(()=>{this.enabling=!1})},showQrCode(){return axios.get("/user/two-factor-qr-code").then(c=>{this.qrCode=c.data.svg})},showRecoveryCodes(){return axios.get("/user/two-factor-recovery-codes").then(c=>{this.recoveryCodes=c.data})},regenerateRecoveryCodes(){axios.post("/user/two-factor-recovery-codes").then(c=>{this.showRecoveryCodes()})},disableTwoFactorAuthentication(){this.disabling=!0,this.$inertia.delete("/user/two-factor-authentication",{preserveScroll:!0}).then(()=>{this.disabling=!1})}},computed:{twoFactorEnabled(){return!this.enabling&&this.$page.props.user.two_factor_enabled}}},R={key:0,class:"text-lg font-medium text-gray-900"},j={key:1,class:"text-lg font-medium text-gray-900"},A=n("div",{class:"max-w-xl mt-3 text-sm text-gray-600"},[n("p",null," When two factor authentication is enabled, you will be prompted for a secure, random token during authentication. You may retrieve this token from your phone's Google Authenticator application. ")],-1),J={key:2},S={key:0},B=n("div",{class:"max-w-xl mt-4 text-sm text-gray-600"},[n("p",{class:"font-semibold"}," Two factor authentication is now enabled. Scan the following QR code using your phone's authenticator application. ")],-1),E=["innerHTML"],q={key:1},N=n("div",{class:"max-w-xl mt-4 text-sm text-gray-600"},[n("p",{class:"font-semibold"}," Store these recovery codes in a secure password manager. They can be used to recover access to your account if your two factor authentication device is lost. ")],-1),V={class:"grid max-w-xl gap-1 px-4 py-4 mt-4 font-mono text-sm bg-gray-100 rounded-lg"},D={class:"mt-5"},L={key:0},Q={key:1};function Y(c,H,M,z,t,s){const _=i("jet-button"),u=i("jet-secondary-button"),y=i("jet-danger-button"),g=i("jet-action-section");return e(),l(g,null,{title:a(()=>[r(" Two Factor Authentication ")]),description:a(()=>[r(" Add additional security to your account using two factor authentication. ")]),content:a(()=>[s.twoFactorEnabled?(e(),o("h3",R," You have enabled two factor authentication. ")):(e(),o("h3",j," You have not enabled two factor authentication. ")),A,s.twoFactorEnabled?(e(),o("div",J,[t.qrCode?(e(),o("div",S,[B,n("div",{class:"mt-4",innerHTML:t.qrCode},null,8,E)])):d("",!0),t.recoveryCodes.length>0?(e(),o("div",q,[N,n("div",V,[(e(!0),o(x,null,k(t.recoveryCodes,b=>(e(),o("div",null,F(b),1))),256))])])):d("",!0)])):d("",!0),n("div",D,[s.twoFactorEnabled?(e(),o("div",Q,[t.recoveryCodes.length>0?(e(),l(u,{key:0,class:"mr-3",onClick:s.regenerateRecoveryCodes},{default:a(()=>[r(" Regenerate Recovery Codes ")]),_:1},8,["onClick"])):(e(),l(u,{key:1,class:"mr-3",onClick:s.showRecoveryCodes},{default:a(()=>[r(" Show Recovery Codes ")]),_:1},8,["onClick"])),h(y,{onClick:s.disableTwoFactorAuthentication,class:m({"opacity-25":t.disabling}),disabled:t.disabling},{default:a(()=>[r(" Disable ")]),_:1},8,["onClick","class","disabled"])])):(e(),o("div",L,[h(_,{type:"button",onClick:s.enableTwoFactorAuthentication,class:m({"opacity-25":t.enabling}),disabled:t.enabling},{default:a(()=>[r(" Enable ")]),_:1},8,["onClick","class","disabled"])]))])]),_:1})}const X=C(T,[["render",Y]]);export{X as default};