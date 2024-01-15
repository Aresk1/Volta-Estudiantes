"use strict";(self.webpackChunkdb_volta=self.webpackChunkdb_volta||[]).push([[531],{5560:(os,Y,s)=>{s.d(Y,{F:()=>M});var t=s(74081),E=s(27279),C=s(93415),V=s(48102),U=s(87006),f=s(57121),g=s(61020);const M=({displayedFilters:c})=>{const[L,v]=E.useState(!1),{formatMessage:Q}=(0,g.Z)(),S=E.useRef(null),F=()=>{v(x=>!x)};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(C.x,{paddingTop:1,paddingBottom:1,children:[(0,t.jsx)(V.z,{variant:"tertiary",ref:S,startIcon:(0,t.jsx)(f.Z,{}),onClick:F,size:"S",children:Q({id:"app.utils.filters",defaultMessage:"Filters"})}),L&&(0,t.jsx)(U.J5,{displayedFilters:c,isVisible:L,onToggle:F,source:S})]}),(0,t.jsx)(U.W$,{filtersSchema:c})]})}},20531:(os,Y,s)=>{s.d(Y,{ProtectedListPage:()=>Rs,i:()=>_s});var t=s(74081),E=s(27279),C=s(48102),V=s(5938),U=s(6918),f=s(15244),g=s(10701),M=s(93415),c=s(32370),L=s(23298),v=s(74577),Q=s(35250),S=s(86967),F=s(93153),x=s(50086),ns=s(73411),u=s(4987),P=s(73354),R=s(27875),H=s(37472),J=s(74758),e=s(87006),X=s(29206),m=s(61020),G=s(40464),w=s(59461),q=s(51447),I=s(93446),l=s(50942),ms=s(5560),Ms=s(16543),cs=s(26784),Ps=s(78665),Os=s(89486),Ds=s(82298),gs=s(53532),hs=s(71563),b=s(47853),ls=s(9670),js=s(15816),Ws=s(97442),ys=s(13576),Ks=s(87830),ps=s(47184),Ss=s(364),Fs=s(49204),Zs=s(74919),zs=s(98934),$s=s(43433),Ns=s(75719),Ys=s(8175),Vs=s(6078),Qs=s(51943),Hs=s(55783),Js=s(92249),Xs=s(41942),Gs=s(22919),bs=s(53915),ks=s(75041),ws=s(30200),qs=s(91379),st=s(33299),tt=s(33409),et=s(63645),at=s(7988),nt=s(7055),it=s(26757),ot=s(58311),lt=s(29510),rt=s(16946),dt=s(10124),_t=s(69530),Et=s(86961),mt=s(51527),Mt=s(19764),ct=s(42982),Pt=s(26126),Ot=s(64797),Dt=s(85811);const As=({onClick:n})=>{const{formatMessage:r}=(0,m.Z)();return(0,t.jsx)(C.z,{onClick:n,startIcon:(0,t.jsx)(Ms.Z,{}),size:"S",children:r({id:"Settings.permissions.users.create",defaultMessage:"Invite new user"})})},Cs=({onSuccess:n,onToggle:r})=>{const[O,Z]=E.useState("create"),[B,z]=E.useState(!1),[j,T]=E.useState(""),{formatMessage:d}=(0,m.Z)(),W=(0,e.lm)(),{lockApp:_,unlockApp:a}=(0,e.o1)(),{post:$}=(0,e.kY)(),{formatAPIError:h}=(0,e.So)(),N=(0,I.j)(fs,async()=>(await s.e(879).then(s.bind(s,30879))).ROLE_LAYOUT,{combine(o,A){return[...o,...A]},defaultValue:[]}),y=(0,I.j)(rs,async()=>(await s.e(879).then(s.bind(s,30879))).FORM_INITIAL_VALUES,{combine(o,A){return{...o,...A}},defaultValue:rs}),K=(0,I.j)(ls.M,async()=>(await s.e(3294).then(s.bind(s,53294))).MagicLinkEE),ss=(0,G.useMutation)(o=>$("/admin/users",o),{onMutate(){_&&_(),z(!0)},async onSuccess({data:{data:o}}){o.registrationToken?(T(o.registrationToken),await n(),as()):W({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})},onError(o){throw W({type:"warning",message:h(o)}),o},onSettled(){a&&a(),z(!1)}}),ts=d({id:"Settings.permissions.users.create",defaultMessage:"Invite new user"}),es=async(o,{setErrors:A})=>{try{await ss.mutateAsync({...o,roles:o.roles??[]})}catch(p){p instanceof gs.d7&&p.response?.data?.error.message==="Email already taken"&&A({email:p.response.data.error.message})}},as=()=>{Es?Z(Es):r()},{buttonSubmitLabel:k,isDisabled:i,next:Es}=us[O],Bs=O==="create"?(0,t.jsx)(C.z,{type:"submit",loading:B,children:d(k)}):(0,t.jsx)(C.z,{type:"button",loading:B,onClick:r,children:d(k)});return K?(0,t.jsxs)(V.P,{onClose:r,labelledBy:"title",children:[(0,t.jsx)(U.x,{children:(0,t.jsx)(Os.O,{label:ts,children:(0,t.jsx)(Ds.$,{isCurrent:!0,children:ts})})}),(0,t.jsx)(hs.J9,{enableReinitialize:!0,initialValues:y??{},onSubmit:es,validationSchema:vs,validateOnChange:!1,children:({errors:o,handleChange:A,values:p})=>(0,t.jsxs)(e.l0,{children:[(0,t.jsx)(f.f,{children:(0,t.jsxs)(g.k,{direction:"column",alignItems:"stretch",gap:6,children:[O!=="create"&&(0,t.jsx)(K,{registrationToken:j}),(0,t.jsxs)(M.x,{children:[(0,t.jsx)(c.Z,{variant:"beta",as:"h2",children:d({id:"app.components.Users.ModalCreateBody.block-title.details",defaultMessage:"User details"})}),(0,t.jsx)(M.x,{paddingTop:4,children:(0,t.jsx)(g.k,{direction:"column",alignItems:"stretch",gap:1,children:(0,t.jsx)(L.r,{gap:5,children:Ls.map(is=>is.map(D=>(0,t.jsx)(v.P,{...D.size,children:(0,t.jsx)(e.jm,{...D,disabled:i,error:o[D.name],onChange:A,value:p[D.name]})},D.name)))})})})]}),(0,t.jsxs)(M.x,{children:[(0,t.jsx)(c.Z,{variant:"beta",as:"h2",children:d({id:"global.roles",defaultMessage:"User's role"})}),(0,t.jsx)(M.x,{paddingTop:4,children:(0,t.jsxs)(L.r,{gap:5,children:[(0,t.jsx)(v.P,{col:6,xs:12,children:(0,t.jsx)(ls.S,{disabled:i,error:o.roles,onChange:A,value:p.roles??[]})}),N.map(is=>is.map(D=>(0,t.jsx)(v.P,{...D.size,children:(0,t.jsx)(e.jm,{...D,disabled:i,onChange:A,value:p[D.name]})},D.name)))]})})]})]})}),(0,t.jsx)(Q.m,{startActions:(0,t.jsx)(C.z,{variant:"tertiary",onClick:r,type:"button",children:d({id:"app.components.Button.cancel",defaultMessage:"Cancel"})}),endActions:Bs})]})})]}):null},rs={firstname:"",lastname:"",email:"",roles:[]},fs=[],Ls=[[{intlLabel:{id:"Auth.form.firstname.label",defaultMessage:"First name"},name:"firstname",placeholder:{id:"Auth.form.firstname.placeholder",defaultMessage:"e.g. Kai"},type:"text",size:{col:6,xs:12},required:!0},{intlLabel:{id:"Auth.form.lastname.label",defaultMessage:"Last name"},name:"lastname",placeholder:{id:"Auth.form.lastname.placeholder",defaultMessage:"e.g. Doe"},type:"text",size:{col:6,xs:12}}],[{intlLabel:{id:"Auth.form.email.label",defaultMessage:"Email"},name:"email",placeholder:{id:"Auth.form.email.placeholder",defaultMessage:"e.g. kai.doe@strapi.io"},type:"email",size:{col:6,xs:12},required:!0}]],vs=b.Ry().shape({firstname:b.Z_().trim().required(e.I0.required),lastname:b.Z_(),email:b.Z_().email(e.I0.email).required(e.I0.required),roles:b.IX().min(1,e.I0.required).required(e.I0.required)}),us={create:{buttonSubmitLabel:{id:"app.containers.Users.ModalForm.footer.button-success",defaultMessage:"Invite user"},isDisabled:!1,next:"magic-link"},"magic-link":{buttonSubmitLabel:{id:"global.finish",defaultMessage:"Finish"},isDisabled:!0,next:null}},Is=({canDelete:n,headers:r=[],entriesToDelete:O=[],onClickDelete:Z,onSelectRow:B,withMainAction:z,withBulkActions:j,rows:T=[]})=>{const{push:d,location:{pathname:W}}=(0,q.k6)(),{formatMessage:_}=(0,m.Z)();return(0,t.jsx)(S.p,{children:T.map(a=>{const $=O.findIndex(h=>h===a.id)!==-1;return(0,t.jsxs)(F.Tr,{...(0,e.X7)({fn:()=>d(`${W}/${a.id}`),condition:j}),children:[z&&(0,t.jsx)(x.Td,{...e.UW,children:(0,t.jsx)(ns.C,{"aria-label":_({id:"app.component.table.select.one-entry",defaultMessage:"Select {target}"},{target:(0,l.g)(a?.firstname??"",a.lastname)}),checked:$,onChange:()=>{B&&B({name:a.id,value:!$})}})}),r.map(({key:h,cellFormatter:N,name:y,...K})=>(0,t.jsx)(x.Td,{children:typeof N=="function"?N(a,{key:h,name:y,formatMessage:_,...K}):(0,t.jsx)(c.Z,{textColor:"neutral800",children:a[y]||"-"})},h)),j&&(0,t.jsx)(x.Td,{children:(0,t.jsxs)(g.k,{justifyContent:"end",children:[(0,t.jsx)(u.h,{onClick:()=>d(`${W}/${a.id}`),label:_({id:"app.component.table.edit",defaultMessage:"Edit {target}"},{target:(0,l.g)(a.firstname??"",a.lastname)}),noBorder:!0,icon:(0,t.jsx)(cs.Z,{})}),n&&(0,t.jsx)(M.x,{paddingLeft:1,...e.UW,children:(0,t.jsx)(u.h,{onClick:()=>{Z&&Z(a.id)},label:_({id:"global.delete-target",defaultMessage:"Delete {target}"},{target:(0,l.g)(a.firstname??"",a.lastname)}),noBorder:!0,icon:(0,t.jsx)(Ps.Z,{})})})]})})]},a.id)})})},ds=["ee","license-limit-info"],_s=()=>{const{post:n}=(0,e.kY)(),{formatAPIError:r}=(0,e.So)(),[O,Z]=E.useState(!1),B=(0,w.v9)(l.s),{allowedActions:{canCreate:z,canDelete:j,canRead:T}}=(0,e.ss)(B.settings?.users),d=(0,G.useQueryClient)(),W=(0,e.lm)(),{formatMessage:_}=(0,m.Z)(),{search:a}=(0,q.TH)();(0,e.go)();const{users:$,pagination:h,isError:N,isLoading:y,refetch:K}=(0,I.g)(X.parse(a,{ignoreQueryPrefix:!0}),{cacheTime:0,enabled:T}),ss=(0,I.j)(As,async()=>(await s.e(4536).then(s.bind(s,54536))).CreateActionEE),ts=Ts.map(i=>({...i,metadatas:{...i.metadatas,label:_(i.metadatas.label)}})),es=_({id:"global.users",defaultMessage:"Users"}),as=()=>{Z(i=>!i)},k=(0,G.useMutation)(async i=>n("/admin/users/batch-delete",{ids:i}),{async onSuccess(){await K(),await d.refetchQueries(ds)},onError(i){W({type:"warning",message:r(i)})}});return ss?(0,t.jsxs)(P.o,{"aria-busy":y,children:[(0,t.jsx)(e.SL,{name:"Users"}),(0,t.jsx)(R.T,{primaryAction:z&&(0,t.jsx)(ss,{onClick:as}),title:es,subtitle:_({id:"Settings.permissions.users.listview.header.subtitle",defaultMessage:"All the users who have access to the Strapi admin panel"})}),T&&(0,t.jsx)(H.Z,{startActions:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.m,{label:_({id:"app.component.search.label",defaultMessage:"Search for {target}"},{target:es})}),(0,t.jsx)(ms.F,{displayedFilters:Us})]})}),(0,t.jsxs)(J.D,{children:[!T&&(0,t.jsx)(e.ZF,{}),N&&(0,t.jsx)("div",{children:"TODO: An error occurred"}),T&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.tM,{contentType:"Users",isLoading:y,onConfirmDeleteAll:async i=>{await k.mutateAsync(i)},onConfirmDelete:async i=>{await k.mutateAsync([i])},headers:ts,rows:$,withBulkActions:!0,withMainAction:j,children:(0,t.jsx)(Is,{canDelete:j})}),h&&(0,t.jsx)(M.x,{paddingTop:4,children:(0,t.jsxs)(g.k,{alignItems:"flex-end",justifyContent:"space-between",children:[(0,t.jsx)(e.v4,{}),(0,t.jsx)(e.tU,{pagination:h})]})})]})]}),O&&(0,t.jsx)(Cs,{onSuccess:async()=>{await K(),await d.refetchQueries(ds)},onToggle:as})]}):null},Ts=[{name:"firstname",key:"firstname",metadatas:{label:{id:"Settings.permissions.users.firstname",defaultMessage:"Firstname"},sortable:!0}},{name:"lastname",key:"lastname",metadatas:{label:{id:"Settings.permissions.users.lastname",defaultMessage:"Lastname"},sortable:!0}},{key:"email",name:"email",metadatas:{label:{id:"Settings.permissions.users.email",defaultMessage:"Email"},sortable:!0}},{key:"roles",name:"roles",metadatas:{label:{id:"Settings.permissions.users.roles",defaultMessage:"Roles"},sortable:!1},cellFormatter({roles:n},{formatMessage:r}){return(0,t.jsx)(c.Z,{textColor:"neutral800",children:n.map(O=>r({id:`Settings.permissions.users.${O.code}`,defaultMessage:O.name})).join(`,
`)})}},{key:"username",name:"username",metadatas:{label:{id:"Settings.permissions.users.username",defaultMessage:"Username"},sortable:!0}},{key:"isActive",name:"isActive",metadatas:{label:{id:"Settings.permissions.users.user-status",defaultMessage:"User status"},sortable:!1},cellFormatter({isActive:n},{formatMessage:r}){return(0,t.jsxs)(g.k,{children:[(0,t.jsx)(e.qb,{variant:n?"success":"danger"}),(0,t.jsx)(c.Z,{textColor:"neutral800",children:r({id:n?"Settings.permissions.users.active":"Settings.permissions.users.inactive",defaultMessage:n?"Active":"Inactive"})})]})}}],Us=[{name:"firstname",metadatas:{label:"Firstname"},fieldSchema:{type:"string"}},{name:"lastname",metadatas:{label:"Lastname"},fieldSchema:{type:"string"}},{name:"email",metadatas:{label:"Email"},fieldSchema:{type:"email"}},{name:"username",metadatas:{label:"Username"},fieldSchema:{type:"string"}},{name:"isActive",metadatas:{label:"Active user"},fieldSchema:{type:"boolean"}}],xs=()=>{const n=(0,I.j)(_s,async()=>(await s.e(9889).then(s.bind(s,59889))).UserListPageEE);return n?(0,t.jsx)(n,{}):null},Rs=()=>{const n=(0,w.v9)(l.s);return(0,t.jsx)(e.O4,{permissions:n.settings?.users.main,children:(0,t.jsx)(xs,{})})}},9670:(os,Y,s)=>{s.d(Y,{M:()=>Q,S:()=>S,a:()=>v});var t=s(74081),E=s(61020),C=s(93446),V=s(4987),U=s(97232),f=s(87006),g=s(78031),M=s(34547),c=s(40464),L=s(72450);const v=({children:u,target:P})=>{const R=(0,f.lm)(),{formatMessage:H}=(0,E.Z)(),{copy:J}=(0,f.VP)(),e=H({id:"app.component.CopyToClipboard.label",defaultMessage:"Copy to clipboard"}),X=async()=>{await J(P)&&R({type:"info",message:{id:"notification.link-copied"}})};return(0,t.jsx)(f.Y_,{endAction:(0,t.jsx)(V.h,{label:e,noBorder:!0,icon:(0,t.jsx)(g.Z,{}),onClick:X}),title:P,titleEllipsis:!0,subtitle:u,icon:(0,t.jsx)("span",{style:{fontSize:32},children:"\u2709\uFE0F"}),iconBackground:"neutral100"})},Q=({registrationToken:u})=>{const{formatMessage:P}=(0,E.Z)(),R=`${window.location.origin}${(0,C.p)()}/auth/register?registrationToken=${u}`;return(0,t.jsx)(v,{target:R,children:P({id:"app.components.Users.MagicLink.connect",defaultMessage:"Copy and share this link to give access to this user"})})},S=({disabled:u,error:P,onChange:R,value:H})=>{const{get:J}=(0,f.kY)(),{isLoading:e,data:X}=(0,c.useQuery)(["roles"],async()=>{const{data:{data:l}}=await J("/admin/roles");return l},{staleTime:5e4}),{formatMessage:m}=(0,E.Z)(),G=P?m({id:P,defaultMessage:P}):"",w=m({id:"app.components.Users.ModalCreateBody.block-title.roles",defaultMessage:"User's roles"}),q=m({id:"app.components.Users.ModalCreateBody.block-title.roles.description",defaultMessage:"A user can have one or several roles"}),I=m({id:"app.components.Select.placeholder",defaultMessage:"Select"});return(0,t.jsx)(U.NU,{id:"roles",disabled:u,error:G,hint:q,label:w,name:"roles",onChange:l=>{R({target:{name:"roles",value:l}})},placeholder:I,startIcon:e?(0,t.jsx)(ns,{}):void 0,value:H.map(l=>l.toString()),withTags:!0,required:!0,children:(X??[]).map(l=>(0,t.jsx)(U.ML,{value:l.id.toString(),children:m({id:`global.${l.code}`,defaultMessage:l.name})},l.id))})},F=(0,L.F4)`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`,x=L.ZP.div`
  animation: ${F} 2s infinite linear;
`,ns=()=>(0,t.jsx)(x,{children:(0,t.jsx)(M.Z,{})})}}]);