"use strict";(self.webpackChunkdb_volta=self.webpackChunkdb_volta||[]).push([[6340],{96340:(Te,$,s)=>{s.d($,{ProtectedSettingsPage:()=>je});var e=s(74081),f=s(27279),H=s(51926),J=s(8295),X=s(61121),p=s(5938),A=s(6918),m=s(32370),B=s(15244),I=s(69878),y=s(10701),x=s(94098),S=s(84366),W=s(93415),P=s(61908),U=s(35250),O=s(48102),R=s(23298),C=s(74577),K=s(12881),G=s(22572),Z=s(63738),w=s(70774),k=s(38101),N=s(93153),M=s(50086),q=s(10989),ee=s(86967),z=s(4987),se=s(73354),ae=s(27875),te=s(74758),le=s(6191),r=s(87006),F=s(59082),ne=s(26784),ie=s(78665),V=s(36938),oe=s(52448),h=s(61020),j=s(71563),L=s(47853),de=s(53532),ce=s(59461),a=s(33029),re=s(40464),pe=s(98934),Ae=s(29206),Be=s(8175),Ie=s(87830),Se=s(43433),We=s(74919);const ge=()=>{const[t,n]=f.useState(!1),d=(0,ce.I0)(),l=(0,r.lm)(),{post:c}=(0,r.kY)(),{formatAPIError:i}=(0,r.So)();return{isAdding:t,addLocale:async g=>{n(!0);try{const{data:_}=await c("/i18n/locales",g);l({type:"success",message:{id:(0,a.g)("Settings.locales.modal.create.success")}}),d({type:a.A,newLocale:_})}catch(_){throw _ instanceof de.d7?l({type:"warning",message:i(_)}):l({type:"warning",message:{id:"notification.error"}}),_}finally{n(!1)}}}},Y=()=>{const{formatMessage:t}=(0,h.Z)(),{notifyStatus:n}=(0,H.G)(),d=(0,r.lm)(),{get:l}=(0,r.kY)(),{isLoading:c,data:i}=(0,re.useQuery)(["plugin-i18n","locales"],async()=>{const{data:o}=await l("/i18n/iso-locales");if(Array.isArray(o))return o;throw new Error("The response is not an array.")},{onSuccess(){n(t({id:(0,a.g)("Settings.locales.modal.locales.loaded"),defaultMessage:"The locales have been successfully loaded."}))},onError(){d({type:"warning",message:{id:"notification.error"}})},initialData:[]});return{defaultLocales:i,isLoading:c}},_e=({value:t,onClear:n,onLocaleChange:d,error:l})=>{const{formatMessage:c}=(0,h.Z)(),{defaultLocales:i=[],isLoading:o}=Y(),{locales:g}=(0,a.u)(),_=i.map(E=>({label:E.name,value:E.code})).filter(E=>{const D=g.find(({code:u})=>u===E.value);return!D||D.code===t}),T=t||"";return(0,e.jsx)(J.hQ,{"aria-busy":o,error:l,label:c({id:(0,a.g)("Settings.locales.modal.locales.label"),defaultMessage:"Locales"}),value:T,onClear:n,onChange:E=>{const D=_.find(u=>u.value===E);D&&d({code:D.value,name:D.label})},placeholder:c({id:"components.placeholder.select",defaultMessage:"Select"}),children:_.map(E=>(0,e.jsx)(X.O,{value:E.value,children:E.label},E.value))})},b=L.Ry().shape({code:L.Z_().required(),name:L.Z_().max(50,"Settings.locales.modal.locales.displayName.error").required(r.I0.required),isDefault:L.O7()}),Ee={code:"",name:"",isDefault:!1},me=({onClose:t})=>{const{isAdding:n,addLocale:d}=ge(),{formatMessage:l}=(0,h.Z)(),{refetchPermissions:c}=(0,r.vn)();return(0,e.jsx)(p.P,{onClose:t,labelledBy:"add-locale-title",children:(0,e.jsx)(j.J9,{initialValues:Ee,onSubmit:async i=>{await d(i),await c()},validationSchema:b,validateOnChange:!1,children:(0,e.jsxs)(r.l0,{children:[(0,e.jsx)(A.x,{children:(0,e.jsx)(m.Z,{fontWeight:"bold",textColor:"neutral800",as:"h2",id:"add-locale-title",children:l({id:(0,a.g)("Settings.list.actions.add"),defaultMessage:"Add new locale"})})}),(0,e.jsx)(B.f,{children:(0,e.jsxs)(I.v,{label:l({id:(0,a.g)("Settings.locales.modal.title"),defaultMessage:"Configurations"}),id:"tabs",variant:"simple",children:[(0,e.jsxs)(y.k,{justifyContent:"space-between",children:[(0,e.jsx)(m.Z,{as:"h2",variant:"beta",children:l({id:(0,a.g)("Settings.locales.modal.title"),defaultMessage:"Configurations"})}),(0,e.jsxs)(x.m,{children:[(0,e.jsx)(x.O,{children:l({id:(0,a.g)("Settings.locales.modal.base"),defaultMessage:"Basic settings"})}),(0,e.jsx)(x.O,{children:l({id:(0,a.g)("Settings.locales.modal.advanced"),defaultMessage:"Advanced settings"})})]})]}),(0,e.jsx)(S.i,{}),(0,e.jsx)(W.x,{paddingTop:7,paddingBottom:7,children:(0,e.jsxs)(P.n,{children:[(0,e.jsx)(P.x,{children:(0,e.jsx)(he,{})}),(0,e.jsx)(P.x,{children:(0,e.jsx)(Q,{})})]})})]})}),(0,e.jsx)(U.m,{startActions:(0,e.jsx)(O.z,{variant:"tertiary",onClick:t,children:l({id:"app.components.Button.cancel",defaultMessage:"Cancel"})}),endActions:(0,e.jsx)(O.z,{type:"submit",startIcon:(0,e.jsx)(F.Z,{}),disabled:n,children:l({id:"global.save",defaultMessage:"Save"})})})]})})})},he=()=>{const{formatMessage:t}=(0,h.Z)(),{values:n,handleChange:d,setFieldValue:l,errors:c}=(0,j.u6)(),i=g=>{l("name",g.name),l("code",g.code)},o=()=>{l("displayName",""),l("code","")};return(0,e.jsxs)(R.r,{gap:4,children:[(0,e.jsx)(C.P,{col:6,children:(0,e.jsx)(_e,{error:c.code,value:n.code,onLocaleChange:i,onClear:o})}),(0,e.jsx)(C.P,{col:6,children:(0,e.jsx)(K.o,{name:"name",label:t({id:(0,a.g)("Settings.locales.modal.locales.displayName"),defaultMessage:"Locale display name"}),hint:t({id:(0,a.g)("Settings.locales.modal.locales.displayName.description"),defaultMessage:"Locale will be displayed under that name in the administration panel"}),error:c.name?t({id:(0,a.g)("Settings.locales.modal.locales.displayName.error"),defaultMessage:"The locale display name can only be less than 50 characters."}):void 0,value:n.name,onChange:d})})]})},Q=({isDefaultLocale:t})=>{const{values:n,setFieldValue:d}=(0,j.u6)(),{formatMessage:l}=(0,h.Z)();return(0,e.jsx)(G.X,{name:"isDefault",hint:l({id:(0,a.g)("Settings.locales.modal.advanced.setAsDefault.hint"),defaultMessage:"One default locale is required, change it by selecting another one"}),onChange:()=>d("isDefault",!n.isDefault),value:n.isDefault,disabled:t,children:l({id:(0,a.g)("Settings.locales.modal.advanced.setAsDefault"),defaultMessage:"Set as default locale"})})},Me=()=>{const[t,n]=(0,f.useState)(!1),d=(0,a.a)(),l=(0,r.lm)(),{del:c}=(0,r.kY)();return{isDeleting:t,deleteLocale:async o=>{try{n(!0),await c(`/i18n/locales/${o}`),l({type:"success",message:{id:(0,a.g)("Settings.locales.modal.delete.success")}}),d({type:a.D,id:o})}catch{l({type:"warning",message:{id:"notification.error"}})}finally{n(!1)}}}},De=({localeToDelete:t,onClose:n})=>{const{isDeleting:d,deleteLocale:l}=Me(),c=Boolean(t),i=()=>l(t.id).then(n);return(0,e.jsx)(r.QH,{isConfirmButtonLoading:d,onConfirm:i,onToggleDialog:n,isOpen:c})},ue=()=>{const[t,n]=(0,f.useState)(!1),d=(0,a.a)(),l=(0,r.lm)(),{put:c}=(0,r.kY)();return{isEditing:t,editLocale:async(o,g)=>{try{n(!0);const{data:_}=await c(`/i18n/locales/${o}`,g);if("id"in _)l({type:"success",message:{id:(0,a.g)("Settings.locales.modal.edit.success")}}),d({type:a.U,editedLocale:_});else throw new Error("Invalid response")}catch{l({type:"warning",message:{id:"notification.error"}})}finally{n(!1)}}}},fe=({locale:t,onClose:n})=>{const{refetchPermissions:d}=(0,r.vn)(),{isEditing:l,editLocale:c}=ue(),{formatMessage:i}=(0,h.Z)(),o=async({name:g,isDefault:_})=>{await c(t.id,{name:g,isDefault:_}),await d()};return(0,e.jsx)(p.P,{onClose:n,labelledBy:"edit-locale-title",children:(0,e.jsx)(j.J9,{initialValues:{code:t.code??"",name:t.name??"",isDefault:Boolean(t.isDefault)},onSubmit:o,validationSchema:b,children:(0,e.jsxs)(r.l0,{children:[(0,e.jsx)(A.x,{children:(0,e.jsx)(m.Z,{fontWeight:"bold",textColor:"neutral800",as:"h2",id:"edit-locale-title",children:i({id:(0,a.g)("Settings.list.actions.edit"),defaultMessage:"Edit a locale"})})}),(0,e.jsx)(B.f,{children:(0,e.jsxs)(I.v,{label:i({id:(0,a.g)("Settings.locales.modal.title"),defaultMessage:"Configurations"}),id:"tabs",variant:"simple",children:[(0,e.jsxs)(y.k,{justifyContent:"space-between",children:[(0,e.jsx)(m.Z,{as:"h2",children:i({id:(0,a.g)("Settings.locales.modal.title"),defaultMessage:"Configurations"})}),(0,e.jsxs)(x.m,{children:[(0,e.jsx)(x.O,{children:i({id:(0,a.g)("Settings.locales.modal.base"),defaultMessage:"Basic settings"})}),(0,e.jsx)(x.O,{children:i({id:(0,a.g)("Settings.locales.modal.advanced"),defaultMessage:"Advanced settings"})})]})]}),(0,e.jsx)(S.i,{}),(0,e.jsx)(W.x,{paddingTop:7,paddingBottom:7,children:(0,e.jsxs)(P.n,{children:[(0,e.jsx)(P.x,{children:(0,e.jsx)(xe,{locale:t})}),(0,e.jsx)(P.x,{children:(0,e.jsx)(Q,{isDefaultLocale:Boolean(t&&t.isDefault)})})]})})]})}),(0,e.jsx)(U.m,{startActions:(0,e.jsx)(O.z,{variant:"tertiary",onClick:n,children:i({id:"app.components.Button.cancel",defaultMessage:"Cancel"})}),endActions:(0,e.jsx)(O.z,{type:"submit",startIcon:(0,e.jsx)(F.Z,{}),disabled:l,children:i({id:"global.save",defaultMessage:"Save"})})})]})})})},xe=({locale:t})=>{const{formatMessage:n}=(0,h.Z)(),{values:d,handleChange:l,errors:c}=(0,j.u6)(),{defaultLocales:i=[]}=Y(),o=i.find(g=>g.code===t.code);return(0,e.jsxs)(R.r,{gap:4,children:[(0,e.jsx)(C.P,{col:6,children:(0,e.jsx)(Z.q4,{label:n({id:(0,a.g)("Settings.locales.modal.locales.label"),defaultMessage:"Locales"}),value:o?.code||t.code,disabled:!0,children:(0,e.jsx)(Z.ag,{value:o?.code||t.code,children:o?.name||t.code})})}),(0,e.jsx)(C.P,{col:6,children:(0,e.jsx)(K.o,{name:"name",label:n({id:(0,a.g)("Settings.locales.modal.locales.displayName"),defaultMessage:"Locale display name"}),hint:n({id:(0,a.g)("Settings.locales.modal.locales.displayName.description"),defaultMessage:"Locale will be displayed under that name in the administration panel"}),error:c.name?n({id:(0,a.g)("Settings.locales.modal.locales.displayName.error"),defaultMessage:"The locale display name can only be less than 50 characters."}):void 0,value:d.name,onChange:l})})]})},Pe=({locales:t=[],onDeleteLocale:n,onEditLocale:d,canDelete:l=!0,canEdit:c=!0})=>{const{formatMessage:i}=(0,h.Z)();return(0,e.jsxs)(w.i,{colCount:4,rowCount:t.length+1,children:[(0,e.jsx)(k.h,{children:(0,e.jsxs)(N.Tr,{children:[(0,e.jsx)(M.Th,{children:(0,e.jsx)(m.Z,{variant:"sigma",textColor:"neutral600",children:i({id:(0,a.g)("Settings.locales.row.id"),defaultMessage:"ID"})})}),(0,e.jsx)(M.Th,{children:(0,e.jsx)(m.Z,{variant:"sigma",textColor:"neutral600",children:i({id:(0,a.g)("Settings.locales.row.displayName"),defaultMessage:"Display name"})})}),(0,e.jsx)(M.Th,{children:(0,e.jsx)(m.Z,{variant:"sigma",textColor:"neutral600",children:i({id:(0,a.g)("Settings.locales.row.default-locale"),defaultMessage:"Default locale"})})}),(0,e.jsx)(M.Th,{children:(0,e.jsx)(q.T,{children:"Actions"})})]})}),(0,e.jsx)(ee.p,{children:t.map(o=>(0,e.jsxs)(N.Tr,{...(0,r.X7)({fn:()=>d(o),condition:Boolean(d)}),children:[(0,e.jsx)(M.Td,{children:(0,e.jsx)(m.Z,{textColor:"neutral800",children:o.id})}),(0,e.jsx)(M.Td,{children:(0,e.jsx)(m.Z,{textColor:"neutral800",children:o.name})}),(0,e.jsx)(M.Td,{children:(0,e.jsx)(m.Z,{textColor:"neutral800",children:o.isDefault?i({id:(0,a.g)("Settings.locales.default"),defaultMessage:"Default"}):null})}),(0,e.jsx)(M.Td,{children:(0,e.jsxs)(y.k,{gap:1,justifyContent:"flex-end",onClick:g=>g.stopPropagation(),children:[c&&(0,e.jsx)(z.h,{onClick:()=>d(o),label:i({id:(0,a.g)("Settings.list.actions.edit"),defaultMessage:"Edit"}),icon:(0,e.jsx)(ne.Z,{}),borderWidth:0}),l&&!o.isDefault&&(0,e.jsx)(z.h,{onClick:()=>n(o),label:i({id:(0,a.g)("Settings.list.actions.delete"),defaultMessage:"Delete"}),icon:(0,e.jsx)(ie.Z,{}),borderWidth:0})]})})]},o.id))})]})},Oe=()=>{const[t,n]=f.useState(!1),[d,l]=f.useState(),[c,i]=f.useState(),{locales:o}=(0,a.u)(),{formatMessage:g}=(0,h.Z)(),{isLoading:_,allowedActions:{canUpdate:T,canCreate:E,canDelete:D}}=(0,r.ss)(a.P),u=()=>{n(v=>!v)};(0,r.go)();const ve=()=>l(void 0),Ce=v=>{l(v)},Le=()=>i(void 0),ye=v=>{i(v)};return _?(0,e.jsx)(r.dO,{}):(0,e.jsxs)(se.o,{tabIndex:-1,children:[(0,e.jsx)(ae.T,{primaryAction:(0,e.jsx)(O.z,{disabled:!E,startIcon:(0,e.jsx)(V.Z,{}),onClick:u,size:"S",children:g({id:(0,a.g)("Settings.list.actions.add"),defaultMessage:"Add new locale"})}),title:g({id:(0,a.g)("plugin.name"),defaultMessage:"Internationalization"}),subtitle:g({id:(0,a.g)("Settings.list.description"),defaultMessage:"Configure the settings"})}),(0,e.jsx)(te.D,{children:o?.length>0?(0,e.jsx)(Pe,{locales:o,canDelete:D,canEdit:T,onDeleteLocale:Ce,onEditLocale:ye}):(0,e.jsx)(le.x,{icon:(0,e.jsx)(oe.Z,{width:void 0,height:void 0}),content:g({id:(0,a.g)("Settings.list.empty.title"),defaultMessage:"There are no locales"}),action:(0,e.jsx)(O.z,{disabled:!E,variant:"secondary",startIcon:(0,e.jsx)(V.Z,{}),onClick:u,children:g({id:(0,a.g)("Settings.list.actions.add"),defaultMessage:"Add new locale"})})})}),t&&(0,e.jsx)(me,{onClose:u}),c&&(0,e.jsx)(fe,{onClose:Le,locale:c}),d&&(0,e.jsx)(De,{localeToDelete:d,onClose:ve})]})},je=()=>(0,e.jsx)(r.O4,{permissions:a.P.read,children:(0,e.jsx)(Oe,{})})}}]);
