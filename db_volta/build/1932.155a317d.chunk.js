"use strict";(self.webpackChunkdb_volta=self.webpackChunkdb_volta||[]).push([[1932],{81932:(J,v,t)=>{t.d(v,{ProtectedSettingsPage:()=>W});var e=t(74081),o=t(27279),O=t(73354),x=t(27875),y=t(74758),r=t(10701),T=t(93415),_=t(32370),h=t(23298),d=t(74577),c=t(12881),j=t(5627),R=t(78955),S=t(48102),i=t(87006),A=t(16543),C=t(61020),E=t(40464),I=t(72450),u=t(47853),L=t(14052);const f=u.Ry().shape({email:u.Z_().email(i.I0.email).required(i.I0.required)}),B=I.ZP.a`
  color: ${({theme:g})=>g.colors.primary600};
`,W=()=>(0,e.jsx)(i.O4,{permissions:L.P.settings,children:(0,e.jsx)(K,{})}),K=()=>{const g=(0,i.lm)(),{formatMessage:s}=(0,C.Z)(),{lockApp:U,unlockApp:b}=(0,i.o1)(),{get:Z,post:F}=(0,i.kY)(),[a,k]=o.useState(""),[N,M]=o.useState(!1),[P,V]=o.useState({}),{data:n,isLoading:D}=(0,E.useQuery)(["email","settings"],async()=>{const l=await Z("/email/settings"),{data:{config:m}}=l;return m}),p=(0,E.useMutation)(async l=>{await F("/email/test",l)},{onError(){g({type:"warning",message:s({id:"email.Settings.email.plugin.notification.test.error",defaultMessage:"Failed to send a test mail to {to}"},{to:a})})},onSuccess(){g({type:"success",message:s({id:"email.Settings.email.plugin.notification.test.success",defaultMessage:"Email test succeeded, check the {to} mailbox"},{to:a})})},retry:!1});(0,i.go)(),o.useEffect(()=>{f.validate({email:a},{abortEarly:!1}).then(()=>M(!0)).catch(()=>M(!1))},[a]);const $=l=>{k(()=>l.target.value)},z=async l=>{l.preventDefault();try{await f.validate({email:a},{abortEarly:!1})}catch(m){m instanceof u.p8&&V((0,i.CJ)(m))}U(),p.mutate({to:a}),b()};return(0,e.jsxs)(O.o,{labelledBy:"title","aria-busy":D||p.isLoading,children:[(0,e.jsx)(i.SL,{name:s({id:"email.Settings.email.plugin.title",defaultMessage:"Configuration"})}),(0,e.jsx)(x.T,{id:"title",title:s({id:"email.Settings.email.plugin.title",defaultMessage:"Configuration"}),subtitle:s({id:"email.Settings.email.plugin.subTitle",defaultMessage:"Test the settings for the Email plugin"})}),(0,e.jsx)(y.D,{children:D?(0,e.jsx)(i.dO,{}):n&&(0,e.jsx)("form",{onSubmit:z,children:(0,e.jsxs)(r.k,{direction:"column",alignItems:"stretch",gap:7,children:[(0,e.jsx)(T.x,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,children:(0,e.jsxs)(r.k,{direction:"column",alignItems:"stretch",gap:4,children:[(0,e.jsxs)(r.k,{direction:"column",alignItems:"stretch",gap:1,children:[(0,e.jsx)(_.Z,{variant:"delta",as:"h2",children:s({id:"email.Settings.email.plugin.title.config",defaultMessage:"Configuration"})}),(0,e.jsx)(_.Z,{children:s({id:"email.Settings.email.plugin.text.configuration",defaultMessage:"The plugin is configured through the {file} file, checkout this {link} for the documentation."},{file:"./config/plugins.js",link:(0,e.jsx)(B,{href:"https://docs.strapi.io/developer-docs/latest/plugins/email.html",target:"_blank",rel:"noopener noreferrer",children:s({id:"email.link",defaultMessage:"Link"})})})})]}),(0,e.jsxs)(h.r,{gap:5,children:[(0,e.jsx)(d.P,{col:6,s:12,children:(0,e.jsx)(c.o,{name:"shipper-email",label:s({id:"email.Settings.email.plugin.label.defaultFrom",defaultMessage:"Default sender email"}),placeholder:s({id:"email.Settings.email.plugin.placeholder.defaultFrom",defaultMessage:"ex: Strapi No-Reply '<'no-reply@strapi.io'>'"}),disabled:!0,value:n.settings.defaultFrom})}),(0,e.jsx)(d.P,{col:6,s:12,children:(0,e.jsx)(c.o,{name:"response-email",label:s({id:"email.Settings.email.plugin.label.defaultReplyTo",defaultMessage:"Default response email"}),placeholder:s({id:"email.Settings.email.plugin.placeholder.defaultReplyTo",defaultMessage:"ex: Strapi '<'example@strapi.io'>'"}),disabled:!0,value:n.settings.defaultReplyTo})}),(0,e.jsx)(d.P,{col:6,s:12,children:(0,e.jsx)(j.P,{name:"email-provider",label:s({id:"email.Settings.email.plugin.label.provider",defaultMessage:"Email provider"}),disabled:!0,value:n.provider,children:(0,e.jsx)(R.W,{value:n.provider,children:n.provider})})})]})]})}),(0,e.jsxs)(r.k,{alignItems:"stretch",background:"neutral0",direction:"column",gap:4,hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,children:[(0,e.jsx)(_.Z,{variant:"delta",as:"h2",children:s({id:"email.Settings.email.plugin.title.test",defaultMessage:"Test email delivery"})}),(0,e.jsxs)(h.r,{gap:5,children:[(0,e.jsx)(d.P,{col:6,s:12,children:(0,e.jsx)(c.o,{id:"test-address-input",name:"test-address",onChange:$,label:s({id:"email.Settings.email.plugin.label.testAddress",defaultMessage:"Recipient email"}),value:a,error:P.email?.id&&s({id:`email.${P.email?.id}`,defaultMessage:"This is an invalid email"}),placeholder:s({id:"email.Settings.email.plugin.placeholder.testAddress",defaultMessage:"ex: developer@example.com"})})}),(0,e.jsx)(d.P,{col:7,s:12,children:(0,e.jsx)(S.z,{loading:p.isLoading,disabled:!N,type:"submit",startIcon:(0,e.jsx)(A.Z,{}),children:s({id:"email.Settings.email.plugin.button.test-email",defaultMessage:"Send test email"})})})]})]})]})})})]})}}}]);