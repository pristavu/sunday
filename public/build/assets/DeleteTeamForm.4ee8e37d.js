import{J as p}from"./ActionSection.db1e9f2b.js";import{J as _}from"./Button.da32a217.js";import{J as u}from"./ConfirmationModal.16a6db1c.js";import{J as g}from"./DangerButton.22cb1572.js";import{J as T}from"./SecondaryButton.bbb9e25c.js";import{_ as h}from"./_plugin-vue_export-helper.cdc0426e.js";import{j as D,b as e,r as a,o as y,f as t,d as m,a as i,n as b}from"./app.1f7f3af2.js";import"./SectionTitle.f3f98c1a.js";import"./Modal.9e8c7387.js";const C={props:["team"],components:{JetActionSection:p,JetButton:_,JetConfirmationModal:u,JetDangerButton:g,JetSecondaryButton:T},data(){return{confirmingTeamDeletion:!1,deleting:!1,form:this.$inertia.form({},{bag:"deleteTeam"})}},methods:{confirmTeamDeletion(){this.confirmingTeamDeletion=!0},deleteTeam(){this.form.delete("/teams/"+this.team.id,{preserveScroll:!0})}}},J=m("div",{class:"max-w-xl text-sm text-gray-600"}," Once a team is deleted, all of its resources and data will be permanently deleted. Before deleting this team, please download any data or information regarding this team that you wish to retain. ",-1),j={class:"mt-5"};function w(x,n,k,v,o,r){const s=a("jet-danger-button"),l=a("jet-secondary-button"),c=a("jet-confirmation-modal"),d=a("jet-action-section");return y(),D(d,null,{title:e(()=>[t(" Delete Team ")]),description:e(()=>[t(" Permanently delete this team. ")]),content:e(()=>[J,m("div",j,[i(s,{onClick:r.confirmTeamDeletion},{default:e(()=>[t(" Delete Team ")]),_:1},8,["onClick"])]),i(c,{show:o.confirmingTeamDeletion,onClose:n[1]||(n[1]=f=>o.confirmingTeamDeletion=!1)},{title:e(()=>[t(" Delete Team ")]),content:e(()=>[t(" Are you sure you want to delete this team? Once a team is deleted, all of its resources and data will be permanently deleted. ")]),footer:e(()=>[i(l,{onClick:n[0]||(n[0]=f=>o.confirmingTeamDeletion=!1)},{default:e(()=>[t(" Nevermind ")]),_:1}),i(s,{class:b(["ml-2",{"opacity-25":o.form.processing}]),onClick:r.deleteTeam,disabled:o.form.processing},{default:e(()=>[t(" Delete Team ")]),_:1},8,["onClick","class","disabled"])]),_:1},8,["show"])]),_:1})}const P=h(C,[["render",w]]);export{P as default};