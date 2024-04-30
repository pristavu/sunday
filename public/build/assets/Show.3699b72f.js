import p from"./TeamMemberManager.de58da89.js";import{_}from"./AppLayout.286cd52b.js";import d from"./DeleteTeamForm.4ee8e37d.js";import{J as f}from"./SectionBorder.ee5ab371.js";import u from"./UpdateTeamNameForm.b7a10f43.js";import{_ as x}from"./_plugin-vue_export-helper.cdc0426e.js";import{j as b,b as o,r as t,o as s,d as a,a as m,c as g,F as h,e as v}from"./app.1f7f3af2.js";import"./ActionMessage.2337fecd.js";import"./ActionSection.db1e9f2b.js";import"./SectionTitle.f3f98c1a.js";import"./Button.da32a217.js";import"./ConfirmationModal.16a6db1c.js";import"./Modal.9e8c7387.js";import"./DangerButton.22cb1572.js";import"./DialogModal.55009861.js";import"./Label.f51efc9a.js";import"./InputError.0f634cbb.js";import"./SecondaryButton.bbb9e25c.js";const y={props:["team","availableRoles","permissions"],components:{AppLayout:_,DeleteTeamForm:d,JetSectionBorder:f,TeamMemberManager:p,UpdateTeamNameForm:u}},B=a("h2",{class:"text-xl font-semibold leading-tight text-gray-800"}," Team Settings ",-1),T={class:"py-10 mx-auto max-w-8xl sm:px-6 lg:px-8"};function k(F,N,e,j,w,C){const r=t("update-team-name-form"),n=t("team-member-manager"),i=t("jet-section-border"),l=t("delete-team-form"),c=t("app-layout");return s(),b(c,null,{header:o(()=>[B]),default:o(()=>[a("div",null,[a("div",T,[m(r,{team:e.team,permissions:e.permissions},null,8,["team","permissions"]),m(n,{class:"mt-10 sm:mt-0",team:e.team,"available-roles":e.availableRoles,"user-permissions":e.permissions},null,8,["team","available-roles","user-permissions"]),e.permissions.canDeleteTeam&&!e.team.personal_team?(s(),g(h,{key:0},[m(i),m(l,{class:"mt-10 sm:mt-0",team:e.team},null,8,["team"])],64)):v("",!0)])])]),_:1})}const Q=x(y,[["render",k]]);export{Q as default};