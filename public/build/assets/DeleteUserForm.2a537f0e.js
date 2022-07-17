import{J as y}from"./ActionSection.f517c342.js";import{J as h}from"./Button.2e6d22da.js";import{J as w}from"./DialogModal.7ab1b676.js";import{J as g}from"./DangerButton.6c27673a.js";import{J as D,a as U}from"./InputError.2a52f420.js";import{J as j}from"./SecondaryButton.9fb1985c.js";import{k as n,o as J,a as b,w as e,b as a,j as r,x as k,n as v,g as t}from"./app.3ce0088d.js";import{_ as x}from"./plugin-vue_export-helper.21dcd24c.js";import"./SectionTitle.e7792249.js";import"./Modal.09035abd.js";const C={components:{JetActionSection:y,JetButton:h,JetDangerButton:g,JetDialogModal:w,JetInput:D,JetInputError:U,JetSecondaryButton:j},data(){return{confirmingUserDeletion:!1,deleting:!1,form:this.$inertia.form({_method:"DELETE",password:""},{bag:"deleteUser"})}},methods:{confirmUserDeletion(){this.form.password="",this.confirmingUserDeletion=!0,setTimeout(()=>{this.$refs.password.focus()},250)},deleteUser(){this.form.post("/user",{preserveScroll:!0}).then(d=>{this.form.hasErrors()||(this.confirmingUserDeletion=!1)})}}},B=t(" Delete Account "),A=t(" Permanently delete your account. "),V=a("div",{class:"max-w-xl text-sm text-gray-600"}," Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain. ",-1),E={class:"mt-5"},N=t(" Delete Account "),K=t(" Delete Account "),P=t(" Are you sure you want to delete your account? Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account. "),S={class:"mt-4"},T=t(" Nevermind "),I=t(" Delete Account ");function O(d,s,z,F,o,i){const c=n("jet-danger-button"),m=n("jet-input"),u=n("jet-input-error"),p=n("jet-secondary-button"),_=n("jet-dialog-modal"),f=n("jet-action-section");return J(),b(f,null,{title:e(()=>[B]),description:e(()=>[A]),content:e(()=>[V,a("div",E,[r(c,{onClick:i.confirmUserDeletion},{default:e(()=>[N]),_:1},8,["onClick"])]),r(_,{show:o.confirmingUserDeletion,onClose:s[2]||(s[2]=l=>o.confirmingUserDeletion=!1)},{title:e(()=>[K]),content:e(()=>[P,a("div",S,[r(m,{type:"password",class:"block w-3/4 mt-1",placeholder:"Password",ref:"password",modelValue:o.form.password,"onUpdate:modelValue":s[0]||(s[0]=l=>o.form.password=l),onKeyup:k(i.deleteUser,["enter","native"])},null,8,["modelValue","onKeyup"]),r(u,{message:o.form.errors.passwords,class:"mt-2"},null,8,["message"])])]),footer:e(()=>[r(p,{onClick:s[1]||(s[1]=l=>o.confirmingUserDeletion=!1)},{default:e(()=>[T]),_:1}),r(c,{class:v(["ml-2",{"opacity-25":o.form.processing}]),onClick:i.deleteUser,disabled:o.form.processing},{default:e(()=>[I]),_:1},8,["onClick","class","disabled"])]),_:1},8,["show"])]),_:1})}var Z=x(C,[["render",O]]);export{Z as default};
