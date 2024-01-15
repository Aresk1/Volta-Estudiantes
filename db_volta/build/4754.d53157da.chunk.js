"use strict";(self.webpackChunkdb_volta=self.webpackChunkdb_volta||[]).push([[4754],{84754:(_s,j,s)=>{s.d(j,{N:()=>p,ProtectedEditView:()=>J});var n=s(74081),C=s(27279),R=s(73354),K=s(74758),B=s(10701),S=s(93415),k=s(32370),N=s(23298),g=s(74577),V=s(27875),Z=s(48102),e=s(87006),F=s(59082),L=s(53532),Y=s(71563),I=s(61020),$=s(40464),U=s(59461),h=s(51447),D=s(47853),W=s(50942),z=s(44485),v=s(90114),d=s(50292),Es=s(64797),ds=s(85811),ls=s(93446),Ms=s(15816),Ps=s(97442),Ds=s(13576),Os=s(87830),Ts=s(47184),ms=s(364),fs=s(49204),cs=s(74919),gs=s(29206),vs=s(98934),As=s(43433),Ls=s(75719),Is=s(8175),hs=s(6078),Cs=s(51943),Rs=s(55783),Ks=s(92249),Bs=s(41942),Us=s(22919),Ws=s(53915),ps=s(75041),us=s(30200),ys=s(91379),xs=s(33299),js=s(33409),Ss=s(63645),ks=s(7988),Ns=s(7055),Vs=s(26757),Zs=s(58311),Fs=s(29510),Ys=s(16946),$s=s(10124),zs=s(69530),Gs=s(86961),Hs=s(51527),Js=s(19764),Qs=s(42982),Xs=s(26126);const G=D.Ry().shape({name:D.Z_().max(100).required(e.I0.required),description:D.Z_().nullable(),lifespan:D.Rx().integer().min(0).nullable().defined(e.I0.required),permissions:D.Z_().required(e.I0.required)}),H="Name already taken",p=()=>{(0,e.go)();const{formatMessage:r}=(0,I.Z)(),{lockApp:E,unlockApp:l}=(0,e.o1)(),_=(0,e.lm)(),M=(0,h.k6)(),{state:O}=(0,h.TH)(),[o,T]=C.useState(O&&"accessKey"in O.transferToken?{...O.transferToken}:null),{trackUsage:P}=(0,e.rS)(),{setCurrentStep:w}=(0,e.c1)(),b=(0,U.v9)(W.s),{allowedActions:{canCreate:q,canUpdate:ss,canRegenerate:ns}}=(0,e.ss)(b.settings["transfer-tokens"]),ts=(0,h.$B)("/settings/transfer-tokens/:id"),{get:as,post:es,put:os}=(0,e.kY)(),A=ts?.params?.id,i=A==="create",{formatAPIError:u}=(0,e.So)();C.useEffect(()=>{P(i?"didAddTokenFromList":"didEditTokenFromList",{tokenType:v.T})},[i,P]),(0,$.useQuery)(["transfer-token",A],async()=>{const{data:{data:t}}=await as(`/admin/transfer/tokens/${A}`);return T({...t}),t},{enabled:!i&&!o,onError(t){t instanceof L.d7&&(t.response.data.error.details?.code==="INVALID_TOKEN_SALT"?_({type:"warning",message:{id:"notification.error.invalid.configuration",defaultMessage:"You have an invalid configuration, check your server log for more information."}}):_({type:"warning",message:u(t)}))}});const is=async(t,m)=>{P(i?"willCreateToken":"willEditToken",{tokenType:v.T}),E();const f=t.permissions.split("-");if((a=>a.length===1?a[0]==="push"||a[0]==="pull":a[0]==="push"&&a[1]==="pull")(f))try{let a;if(i){const{data:c}=await es("/admin/transfer/tokens",{...t,permissions:f});a=c.data}else{const{data:c}=await os(`/admin/transfer/tokens/${A}`,{name:t.name,description:t.description,permissions:f});a=c.data}l(),i&&(M.replace(`/settings/transfer-tokens/${a.id}`,{transferToken:a}),w("transferTokens.success")),T({...a}),_({type:"success",message:r(i?{id:"notification.success.transfertokencreated",defaultMessage:"Transfer Token successfully created"}:{id:"notification.success.transfertokenedited",defaultMessage:"Transfer Token successfully edited"})}),P(i?"didCreateToken":"didEditToken",{type:o?.permissions,tokenType:v.T})}catch(a){if(a instanceof L.d7){const c=(0,z.f)(a.response.data);m.setErrors(c),a?.response?.data?.error?.message===H?_({type:"warning",message:a.response.data.message||"notification.error.tokennamenotunique"}):a?.response?.data?.error?.details?.code==="INVALID_TOKEN_SALT"?_({type:"warning",message:{id:"notification.error.invalid.configuration",defaultMessage:"You have an invalid configuration, check your server log for more information."}}):_({type:"warning",message:a?.response?.data?.message||"notification.error"})}l()}},y=ss&&!i||q&&i;if(!i&&!o)return(0,n.jsx)(X,{});const rs=t=>{t instanceof L.d7&&(t?.response?.data?.error?.details?.code==="INVALID_TOKEN_SALT"?_({type:"warning",message:{id:"notification.error.invalid.configuration",defaultMessage:"You have an invalid configuration, check your server log for more information."}}):_({type:"warning",message:u(t)}))};return(0,n.jsxs)(R.o,{children:[(0,n.jsx)(e.SL,{name:"Transfer Tokens"}),(0,n.jsx)(Y.J9,{validationSchema:G,validateOnChange:!1,initialValues:{name:o?.name||"",description:o?.description||"",lifespan:o?.lifespan??null,permissions:o?.permissions.join("-")??""},enableReinitialize:!0,onSubmit:(t,m)=>is(t,m),children:({errors:t,handleChange:m,isSubmitting:f,values:x})=>(0,n.jsxs)(e.l0,{children:[(0,n.jsx)(d.F,{backUrl:"/settings/transfer-tokens",title:{id:"Settings.transferTokens.createPage.title",defaultMessage:"TokenCreate Transfer Token"},token:o,setToken:T,canEditInputs:y,canRegenerate:ns,isSubmitting:f,regenerateUrl:"/admin/transfer/tokens/",onErrorRegenerate:rs}),(0,n.jsx)(K.D,{children:(0,n.jsxs)(B.k,{direction:"column",alignItems:"stretch",gap:6,children:[o&&Boolean(o?.name)&&"accessKey"in o&&(0,n.jsx)(d.c,{token:o.accessKey,tokenType:v.T}),(0,n.jsx)(Q,{errors:t,onChange:m,canEditInputs:y,isCreating:i,values:x,transferToken:o})]})})]})})]})},J=()=>{const r=(0,U.v9)(W.s);return(0,n.jsx)(e.O4,{permissions:r.settings?.["transfer-tokens"].read,children:(0,n.jsx)(p,{})})},Q=({errors:r={},onChange:E,canEditInputs:l,isCreating:_,values:M,transferToken:O={}})=>{const{formatMessage:o}=(0,I.Z)(),T=[{value:"push",label:{id:"Settings.transferTokens.types.push",defaultMessage:"Push"}},{value:"pull",label:{id:"Settings.transferTokens.types.pull",defaultMessage:"Pull"}},{value:"push-pull",label:{id:"Settings.transferTokens.types.push-pull",defaultMessage:"Full Access"}}];return(0,n.jsx)(S.x,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,children:(0,n.jsxs)(B.k,{direction:"column",alignItems:"stretch",gap:4,children:[(0,n.jsx)(k.Z,{variant:"delta",as:"h2",children:o({id:"global.details",defaultMessage:"Details"})}),(0,n.jsxs)(N.r,{gap:5,children:[(0,n.jsx)(g.P,{col:6,xs:12,children:(0,n.jsx)(d.T,{error:r.name,value:M.name,canEditInputs:l,onChange:E})},"name"),(0,n.jsx)(g.P,{col:6,xs:12,children:(0,n.jsx)(d.a,{error:r.description,value:M.description,canEditInputs:l,onChange:E})},"description"),(0,n.jsx)(g.P,{col:6,xs:12,children:(0,n.jsx)(d.L,{isCreating:_,error:r.lifespan,value:M.lifespan,onChange:E,token:O})},"lifespan"),(0,n.jsx)(g.P,{col:6,xs:12,children:(0,n.jsx)(d.b,{name:"permissions",value:M.permissions,error:r.permissions,label:{id:"Settings.tokens.form.type",defaultMessage:"Token type"},onChange:P=>{E({target:{name:"permissions",value:P}})},options:T,canEditInputs:l})},"permissions")]})]})})},X=({transferTokenName:r})=>{const{formatMessage:E}=(0,I.Z)();return(0,e.go)(),(0,n.jsxs)(R.o,{"aria-busy":"true",children:[(0,n.jsx)(e.SL,{name:"Transfer Tokens"}),(0,n.jsx)(V.T,{primaryAction:(0,n.jsx)(Z.z,{disabled:!0,startIcon:(0,n.jsx)(F.Z,{}),type:"button",size:"L",children:E({id:"global.save",defaultMessage:"Save"})}),title:r||E({id:"Settings.transferTokens.createPage.title",defaultMessage:"Create Transfer Token"})}),(0,n.jsx)(K.D,{children:(0,n.jsx)(e.dO,{})})]})}}}]);
