"use strict";(self["webpackChunkamiyabot_console"]=self["webpackChunkamiyabot_console"]||[]).push([[359],{9643:function(e,t,a){a.r(t),a.d(t,{default:function(){return V}});var o=a(8838),n=a(8131),r=(a(7113),a(9866)),l=(a(172),a(457)),i=a(5065),d=(a(3189),a(6605)),c=(a(6809),a(3396));const s=(0,c.Uk)("添加管理员"),u=(0,c.Uk)("删除"),m=(0,c.Uk)("保存");function f(e,t,a,f,w,p){const b=d.mi,h=i.E2,k=l.Z,y=r.EZ,g=n.nH,v=o.Z;return(0,c.wg)(),(0,c.iD)("div",null,[(0,c.Wm)(k,{ref:"table",load:e.loadList},{header:(0,c.w5)((()=>[(0,c.Wm)(b,{type:"primary",onClick:t[0]||(t[0]=t=>e.$refs.dialog.show())},{default:(0,c.w5)((()=>[s])),_:1})])),operations:(0,c.w5)((({row:t})=>[(0,c.Wm)(h,{underline:!1,type:"danger",onClick:a=>e.delAdmin(t)},{default:(0,c.w5)((()=>[u])),_:2},1032,["onClick"])])),_:1},8,["load"]),(0,c.Wm)(v,{title:"添加管理员",form:e.form,ref:"dialog"},{footer:(0,c.w5)((()=>[(0,c.Wm)(b,{type:"primary",onClick:e.submit},{default:(0,c.w5)((()=>[m])),_:1},8,["onClick"])])),default:(0,c.w5)((()=>[(0,c.Wm)(g,{label:"管理员ID"},{default:(0,c.w5)((()=>[(0,c.Wm)(y,{modelValue:e.form.account,"onUpdate:modelValue":t[1]||(t[1]=t=>e.form.account=t)},null,8,["modelValue"])])),_:1}),(0,c.Wm)(g,{label:"备注"},{default:(0,c.w5)((()=>[(0,c.Wm)(y,{modelValue:e.form.remark,"onUpdate:modelValue":t[2]||(t[2]=t=>e.form.remark=t)},null,8,["modelValue"])])),_:1})])),_:1},8,["form"])])}var w=a(2482),p=a(6520),b=a(3505);const h=new b.Z;async function k(e){return await h.post({url:"/admin/getAdmin",data:e})}async function y(e){return await h.post({url:"/admin/addAdmin",data:e})}async function g(e){return await h.post({url:"/admin/deleteAdmin",data:e})}var v=function(e,t,a,o){var n,r=arguments.length,l=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,a):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)l=Reflect.decorate(e,t,a,o);else for(var i=e.length-1;i>=0;i--)(n=e[i])&&(l=(r<3?n(l):r>3?n(t,a,l):n(t,a))||l);return r>3&&l&&Object.defineProperty(t,a,l),l};let Z=class extends p.w3{constructor(...e){super(...e),(0,w.Z)(this,"table",void 0),(0,w.Z)(this,"dialog",void 0),(0,w.Z)(this,"form",{account:"",remark:""})}async loadList(e){const t=await k(e);t&&this.table.setPaginationData(t.data)}async delAdmin(e){const t=await g(e);t&&this.table.executeLoad()}async submit(){const e=await y(this.form);e&&(this.dialog.hide(),this.table.executeLoad(),this.form={account:"",remark:""})}};Z=v([(0,p.Ei)({components:{VTable:l.Z,VFormDialog:o.Z},computed:{table(){return this.$refs.table},dialog(){return this.$refs.dialog}},mounted(){this.table.setColumns({account:"管理员ID",remark:"备注"})}})],Z);var W=Z,_=a(89);const C=(0,_.Z)(W,[["render",f]]);var V=C}}]);
//# sourceMappingURL=359.ab82ad60.js.map