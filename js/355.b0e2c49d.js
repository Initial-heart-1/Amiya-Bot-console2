"use strict";(self["webpackChunkamiyabot_console"]=self["webpackChunkamiyabot_console"]||[]).push([[355],{556:function(e,t,a){a.d(t,{E5:function(){return l},Yq:function(){return i},jQ:function(){return n},m7:function(){return u}});var o=a(3505);const r=new o.Z;async function l(){return await r.get({url:"/operator/getAllOperator"})}async function n(e){return await r.post({url:"/operator/getOperator",data:e})}async function i(e){return await r.post({url:"/operator/setOperator",data:e})}async function u(){return await r.get({url:"/operator/updateSetting"})}},4297:function(e,t,a){a.r(t),a.d(t,{default:function(){return W}});var o=a(8838),r=a(438),l=(a(3877),a(7960),a(8131)),n=(a(7113),a(9866)),i=(a(172),a(457)),u=a(5065),s=(a(3189),a(6605)),c=(a(6809),a(3396)),d=a(7139);const p=(0,c.Uk)("应用干员设置"),m=(0,c.Uk)("设定干员属性"),f=(0,c.Uk)("保存");function y(e,t,a,y,w,b){const g=s.mi,h=u.E2,_=i.Z,k=n.EZ,v=l.nH,Z=r.BT,V=r.km,W=o.Z;return(0,c.wg)(),(0,c.iD)("div",null,[(0,c.Wm)(_,{ref:"table",load:e.loadList},{header:(0,c.w5)((()=>[(0,c.Wm)(g,{type:"success",onClick:e.updateSetting},{default:(0,c.w5)((()=>[p])),_:1},8,["onClick"])])),operations:(0,c.w5)((({row:t})=>[(0,c.Wm)(h,{underline:!1,type:"primary",onClick:a=>e.setOperator(t)},{default:(0,c.w5)((()=>[m])),_:2},1032,["onClick"])])),cell:(0,c.w5)((({value:t,field:a})=>["operator_type"===a?((0,c.wg)(),(0,c.iD)(c.HY,{key:0},[(0,c.Uk)((0,d.zw)(e.operatorType[t]||"无"),1)],64)):(0,c.kq)("",!0)])),_:1},8,["load"]),(0,c.Wm)(W,{title:"编辑用户",form:e.form,ref:"dialog"},{footer:(0,c.w5)((()=>[(0,c.Wm)(g,{type:"primary",onClick:e.submit},{default:(0,c.w5)((()=>[f])),_:1},8,["onClick"])])),default:(0,c.w5)((()=>[(0,c.Wm)(v,{label:"干员代号"},{default:(0,c.w5)((()=>[(0,c.Wm)(k,{modelValue:e.form.name,"onUpdate:modelValue":t[0]||(t[0]=t=>e.form.name=t),disabled:""},null,8,["modelValue"])])),_:1}),(0,c.Wm)(v,{label:"干员英文代号"},{default:(0,c.w5)((()=>[(0,c.Wm)(k,{modelValue:e.form.en_name,"onUpdate:modelValue":t[1]||(t[1]=t=>e.form.en_name=t),disabled:""},null,8,["modelValue"])])),_:1}),(0,c.Wm)(v,{label:"卡池属性"},{default:(0,c.w5)((()=>[(0,c.Wm)(V,{modelValue:e.form.operator_type,"onUpdate:modelValue":t[2]||(t[2]=t=>e.form.operator_type=t),placeholder:"请选择卡池属性"},{default:(0,c.w5)((()=>[((0,c.wg)(!0),(0,c.iD)(c.HY,null,(0,c.Ko)(e.operatorType,((e,t)=>((0,c.wg)(),(0,c.j4)(Z,{label:e,value:t,key:e},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1})])),_:1},8,["form"])])}var w=a(2482),b=a(6520),g=a(556),h=a(8418),_=function(e,t,a,o){var r,l=arguments.length,n=l<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,a):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,a,o);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(n=(l<3?r(n):l>3?r(t,a,n):r(t,a))||n);return l>3&&n&&Object.defineProperty(t,a,n),n};let k=class extends b.w3{constructor(...e){super(...e),(0,w.Z)(this,"table",void 0),(0,w.Z)(this,"dialog",void 0),(0,w.Z)(this,"form",{}),(0,w.Z)(this,"operatorType",{0:"可抽取-限定干员",1:"可抽取-联动干员",2:"不可抽取-非常规途径",3:"不可抽取-销售",4:"不可抽取-公开招募",5:"不可抽取-活动奖励",6:"不可抽取-联动奖励",7:"不可抽取-危机合约奖励",8:"不可抽取-roguelike限定"})}async loadList(e){const t=await(0,g.jQ)(e);t&&this.table.setPaginationData(t.data)}async setOperator(e){const t=h.Z.deepCopy(e);t.operator_type=(t.operator_type||"").toString(),this.form=t,this.dialog.show()}async submit(){const e=await(0,g.Yq)(this.form);e&&(this.dialog.hide(),this.table.executeLoad())}async updateSetting(){await(0,g.m7)()}};k=_([(0,b.Ei)({components:{VTable:i.Z,VFormDialog:o.Z},computed:{table(){return this.$refs.table},dialog(){return this.$refs.dialog}},mounted(){this.table.setColumns({name:"干员代号",en_name:"干员英文代号",rarity:"星级",classes:"职业",classes_sub:"分支职业",operator_type:"卡池属性"})}})],k);var v=k,Z=a(89);const V=(0,Z.Z)(v,[["render",y]]);var W=V}}]);
//# sourceMappingURL=355.b0e2c49d.js.map