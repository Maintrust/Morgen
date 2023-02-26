"use strict";(self.webpackChunkmy_project=self.webpackChunkmy_project||[]).push([[5199],{57338:(x,E,t)=>{t.d(E,{Z:()=>r});const r={firstname:"",lastname:"",email:"",roles:[]}},55867:(x,E,t)=>{t.d(E,{Z:()=>r});const r=[]},46903:(x,E,t)=>{t.r(E),t.d(E,{default:()=>pt});var e=t(67294),r=t(68547),m=t(87751),L=t(67838),h=t(36989),D=t(49066),d=t(29728),A=t(185),p=t(14087),c=t(23293),l=t(49656),g=t(97132),v=t(23724),te=t(45697),o=t.n(te),ae=t(41451),S=t(35961),q=t(12028),I=t(46273),B=t(72735),X=t(550),se=t(47144),H=t(18374),ne=t(4585),$=t(20022),w=t(38683),U=Object.defineProperty,K=Object.getOwnPropertySymbols,oe=Object.prototype.hasOwnProperty,ie=Object.prototype.propertyIsEnumerable,z=(a,s,n)=>s in a?U(a,s,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[s]=n,ce=(a,s)=>{for(var n in s||(s={}))oe.call(s,n)&&z(a,n,s[n]);if(K)for(var n of K(s))ie.call(s,n)&&z(a,n,s[n]);return a},Fe=(a,s)=>{var n={};for(var i in a)oe.call(a,i)&&s.indexOf(i)<0&&(n[i]=a[i]);if(a!=null&&K)for(var i of K(a))s.indexOf(i)<0&&ie.call(a,i)&&(n[i]=a[i]);return n};const fe=({canDelete:a,headers:s,entriesToDelete:n,onClickDelete:i,onSelectRow:P,withMainAction:b,withBulkActions:O,rows:M})=>{const{push:u,location:{pathname:T}}=(0,l.useHistory)(),{formatMessage:_}=(0,g.useIntl)();return e.createElement(X.p,null,M.map(f=>{const V=n.findIndex(G=>G===f.id)!==-1;return e.createElement(se.Tr,ce({key:f.id},(0,r.onRowClick)({fn:()=>u(`${T}/${f.id}`),condition:O})),b&&e.createElement(H.Td,ce({},r.stopPropagation),e.createElement(ae.C,{"aria-label":_({id:"app.component.table.select.one-entry",defaultMessage:"Select {target}"},{target:(0,w.Pp)(f.firstname,f.lastname)}),checked:V,onChange:()=>{P({name:f.id,value:!V})}})),s.map(G=>{var j=G,{key:W,cellFormatter:ee,name:Y}=j,Z=Fe(j,["key","cellFormatter","name"]);return e.createElement(H.Td,{key:W},typeof ee=="function"?ee(f,ce({key:W,name:Y,formatMessage:_},Z)):e.createElement(B.Z,{textColor:"neutral800"},f[Y]||"-"))}),O&&e.createElement(H.Td,null,e.createElement(I.k,{justifyContent:"end"},e.createElement(q.h,{onClick:()=>u(`${T}/${f.id}`),label:_({id:"app.component.table.edit",defaultMessage:"Edit {target}"},{target:(0,w.Pp)(f.firstname,f.lastname)}),noBorder:!0,icon:e.createElement(ne.Z,null)}),a&&e.createElement(S.x,ce({paddingLeft:1},r.stopPropagation),e.createElement(q.h,{onClick:()=>i(f.id),label:_({id:"global.delete-target",defaultMessage:"Delete {target}"},{target:(0,w.Pp)(f.firstname,f.lastname)}),noBorder:!0,icon:e.createElement($.default,null)})))))}))};fe.defaultProps={canDelete:!1,entriesToDelete:[],onClickDelete(){},onSelectRow(){},rows:[],withBulkActions:!1,withMainAction:!1},fe.propTypes={canDelete:o().bool,entriesToDelete:o().array,headers:o().array.isRequired,onClickDelete:o().func,onSelectRow:o().func,rows:o().array,withBulkActions:o().bool,withMainAction:o().bool};const Ke=fe;var xe=t(89597);const De=({displayedFilters:a})=>{const[s,n]=(0,e.useState)(!1),{formatMessage:i}=(0,g.useIntl)(),P=(0,e.useRef)(),b=()=>{n(O=>!O)};return e.createElement(e.Fragment,null,e.createElement(S.x,{paddingTop:1,paddingBottom:1},e.createElement(d.z,{variant:"tertiary",ref:P,startIcon:e.createElement(xe.Z,null),onClick:b,size:"S"},i({id:"app.utils.filters",defaultMessage:"Filters"})),s&&e.createElement(r.FilterPopoverURLQuery,{displayedFilters:a,isVisible:s,onToggle:b,source:P})),e.createElement(r.FilterListURLQuery,{filtersSchema:a}))};De.propTypes={displayedFilters:o().arrayOf(o().shape({name:o().string.isRequired,metadatas:o().shape({label:o().string}),fieldSchema:o().shape({type:o().string})})).isRequired};const $e=De;var de=t(87462),Te=t(15861),Ee=t(70885),we=t(64687),ue=t.n(we),ze=t(42866),je=t(24969),Ne=t(59946),Qe=t(36856),Ce=t(11276),ve=t(74571),Le=t(2407),Ae=t(7681),Xe=t(80831),ye=t(23998),He=t(81288);const Ve=[[{intlLabel:{id:"Auth.form.firstname.label",defaultMessage:"First name"},name:"firstname",placeholder:{id:"Auth.form.firstname.placeholder",defaultMessage:"e.g. Kai"},type:"text",size:{col:6,xs:12},required:!0},{intlLabel:{id:"Auth.form.lastname.label",defaultMessage:"Last name"},name:"lastname",placeholder:{id:"Auth.form.lastname.placeholder",defaultMessage:"e.g. Doe"},type:"text",size:{col:6,xs:12}}],[{intlLabel:{id:"Auth.form.email.label",defaultMessage:"Email"},name:"email",placeholder:{id:"Auth.form.email.placeholder",defaultMessage:"e.g. kai.doe@strapi.io"},type:"email",size:{col:6,xs:12},required:!0}]];var re=t(53209);const Ge=re.Ry().shape({firstname:re.Z_().trim().required(r.translatedErrors.required),lastname:re.Z_(),email:re.Z_().email(r.translatedErrors.email).required(r.translatedErrors.required),roles:re.IX().min(1,r.translatedErrors.required).required(r.translatedErrors.required)}),Je={create:{buttonSubmitLabel:{id:"app.containers.Users.ModalForm.footer.button-success",defaultMessage:"Invite user"},isDisabled:!1,next:"magic-link"},"magic-link":{buttonSubmitLabel:{id:"global.finish",defaultMessage:"Finish"},isDisabled:!0,next:null}};var Ye=function(){return window&&window.strapi&&window.strapi.isEE?t(97083).Z:t(57338).Z}(),ke=function(){return window&&window.strapi&&window.strapi.isEE?t(810).Z:t(55867).Z}(),qe=function(){return window&&window.strapi&&window.strapi.isEE?t(12201).Z:t(31605).Z}(),Se=function(s){var n=s.queryName,i=s.onToggle,P=(0,e.useState)("create"),b=(0,Ee.Z)(P,2),O=b[0],M=b[1],u=(0,e.useState)(!1),T=(0,Ee.Z)(u,2),_=T[0],f=T[1],V=(0,e.useState)(null),G=(0,Ee.Z)(V,2),j=G[0],W=G[1],ee=(0,v.useQueryClient)(),Y=(0,g.useIntl)(),Z=Y.formatMessage,me=(0,r.useNotification)(),pe=(0,r.useOverlayBlocker)(),C=pe.lockApp,le=pe.unlockApp,ge=(0,v.useMutation)(function(F){return ye.be.post("/admin/users",F)},{onSuccess:function(N){return(0,Te.Z)(ue().mark(function J(){var Q;return ue().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return Q=N.data,W(Q.data.registrationToken),y.next=4,ee.invalidateQueries(n);case 4:ft(),f(!1);case 6:case"end":return y.stop()}},J)}))()},onError:function(N){throw f(!1),me({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}}),N},onSettled:function(){le()}}),_e=Z({id:"Settings.permissions.users.create",defaultMessage:"Invite new user"}),gt=function(){var F=(0,Te.Z)(ue().mark(function N(J,Q){var k,y,Oe;return ue().wrap(function(R){for(;;)switch(R.prev=R.next){case 0:return k=Q.setErrors,C(),f(!0),R.prev=3,R.next=6,ge.mutateAsync(J);case 6:R.next=12;break;case 8:R.prev=8,R.t0=R.catch(3),le(),(R.t0===null||R.t0===void 0||(y=R.t0.response)===null||y===void 0||(Oe=y.data)===null||Oe===void 0?void 0:Oe.error.message)==="Email already taken"&&k({email:R.t0.response.data.error.message});case 12:case"end":return R.stop()}},N,null,[[3,8]])}));return function(J,Q){return F.apply(this,arguments)}}(),ft=function(){Ze?M(Ze):i()},Me=Je[O],We=Me.buttonSubmitLabel,he=Me.isDisabled,Ze=Me.next,Et=O==="create"?e.createElement(d.z,{type:"submit",loading:_},Z(We)):e.createElement(d.z,{type:"button",loading:_,onClick:i},Z(We));return e.createElement(ze.P,{onClose:i,labelledBy:"title"},e.createElement(je.x,null,e.createElement(Le.O,{label:_e},e.createElement(Le.$,null,_e))),e.createElement(Xe.Formik,{initialValues:Ye,onSubmit:gt,validationSchema:Ge,validateOnChange:!1},function(F){var N=F.errors,J=F.handleChange,Q=F.values;return e.createElement(r.Form,null,e.createElement(Ne.f,null,e.createElement(Ae.K,{spacing:6},O!=="create"&&e.createElement(qe,{registrationToken:j}),e.createElement(S.x,null,e.createElement(B.Z,{variant:"beta",as:"h2"},Z({id:"app.components.Users.ModalCreateBody.block-title.details",defaultMessage:"User details"})),e.createElement(S.x,{paddingTop:4},e.createElement(Ae.K,{spacing:1},e.createElement(Ce.r,{gap:5},Ve.map(function(k){return k.map(function(y){return e.createElement(ve.P,(0,de.Z)({key:y.name},y.size),e.createElement(r.GenericInput,(0,de.Z)({},y,{disabled:he,error:N[y.name],onChange:J,value:Q[y.name]})))})}))))),e.createElement(S.x,null,e.createElement(B.Z,{variant:"beta",as:"h2"},Z({id:"global.roles",defaultMessage:"User's role"})),e.createElement(S.x,{paddingTop:4},e.createElement(Ce.r,{gap:5},e.createElement(ve.P,{col:6,xs:12},e.createElement(He.Z,{disabled:he,error:N.roles,onChange:J,value:Q.roles})),ke.map(function(k){return k.map(function(y){return e.createElement(ve.P,(0,de.Z)({key:y.name},y.size),e.createElement(r.GenericInput,(0,de.Z)({},y,{disabled:he,onChange:J,value:Q[y.name]})))})})))))),e.createElement(Qe.m,{startActions:e.createElement(d.z,{variant:"tertiary",onClick:i,type:"button"},Z({id:"app.components.Button.cancel",defaultMessage:"Cancel"})),endActions:Et}))}))};Se.propTypes={onToggle:o().func.isRequired,queryName:o().array.isRequired};const et=Se,Pe=({pagination:a})=>e.createElement(S.x,{paddingTop:4},e.createElement(I.k,{alignItems:"flex-end",justifyContent:"space-between"},e.createElement(r.PageSizeURLQuery,null),e.createElement(r.PaginationURLQuery,{pagination:a})));Pe.defaultProps={pagination:{pageCount:0,pageSize:10,total:0}},Pe.propTypes={pagination:o().shape({page:o().number,pageCount:o().number,pageSize:o().number,total:o().number})};const tt=Pe;var be=(a,s,n)=>new Promise((i,P)=>{var b=u=>{try{M(n.next(u))}catch(T){P(T)}},O=u=>{try{M(n.throw(u))}catch(T){P(T)}},M=u=>u.done?i(u.value):Promise.resolve(u.value).then(b,O);M((n=n.apply(a,s)).next())});const at=(a,s)=>be(void 0,null,function*(){const{data:{data:n}}=yield ye.be.get(`/admin/users${a}`);return s(),n}),st=a=>be(void 0,null,function*(){yield ye.be.post("/admin/users/batch-delete",{ids:a})}),nt=[{name:"firstname",metadatas:{label:"Firstname"},fieldSchema:{type:"string"}},{name:"lastname",metadatas:{label:"Lastname"},fieldSchema:{type:"string"}},{name:"email",metadatas:{label:"Email"},fieldSchema:{type:"email"}},{name:"username",metadatas:{label:"Username"},fieldSchema:{type:"string"}},{name:"isActive",metadatas:{label:"Active user"},fieldSchema:{type:"boolean"}}],rt=[{name:"firstname",key:"firstname",metadatas:{label:{id:"Settings.permissions.users.firstname",defaultMessage:"Firstname"},sortable:!0}},{name:"lastname",key:"lastname",metadatas:{label:{id:"Settings.permissions.users.lastname",defaultMessage:"Lastname"},sortable:!0}},{key:"email",name:"email",metadatas:{label:{id:"Settings.permissions.users.email",defaultMessage:"Email"},sortable:!0}},{key:"roles",name:"roles",metadatas:{label:{id:"Settings.permissions.users.roles",defaultMessage:"Roles"},sortable:!1},cellFormatter({roles:a},{formatMessage:s}){return e.createElement(B.Z,{textColor:"neutral800"},a.map(n=>s({id:`Settings.permissions.users.${n.code}`,defaultMessage:n.name})).join(`,
`))}},{key:"username",name:"username",metadatas:{label:{id:"Settings.permissions.users.username",defaultMessage:"Username"},sortable:!0}},{key:"isActive",name:"isActive",metadatas:{label:{id:"Settings.permissions.users.user-status",defaultMessage:"User status"},sortable:!1},cellFormatter({isActive:a},{formatMessage:s}){return e.createElement(I.k,null,e.createElement(r.Status,{isActive:a,variant:a?"success":"danger"}),e.createElement(B.Z,{textColor:"neutral800"},s({id:a?"Settings.permissions.users.active":"Settings.permissions.users.inactive",defaultMessage:a?"Active":"Inactive"})))}}];var lt=Object.defineProperty,ot=Object.defineProperties,it=Object.getOwnPropertyDescriptors,Re=Object.getOwnPropertySymbols,ct=Object.prototype.hasOwnProperty,dt=Object.prototype.propertyIsEnumerable,Ie=(a,s,n)=>s in a?lt(a,s,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[s]=n,Be=(a,s)=>{for(var n in s||(s={}))ct.call(s,n)&&Ie(a,n,s[n]);if(Re)for(var n of Re(s))dt.call(s,n)&&Ie(a,n,s[n]);return a},Ue=(a,s)=>ot(a,it(s)),ut=(a,s,n)=>new Promise((i,P)=>{var b=u=>{try{M(n.next(u))}catch(T){P(T)}},O=u=>{try{M(n.throw(u))}catch(T){P(T)}},M=u=>u.done?i(u.value):Promise.resolve(u.value).then(b,O);M((n=n.apply(a,s)).next())});const mt=()=>{const[a,s]=(0,e.useState)(!1),{allowedActions:{canCreate:n,canDelete:i,canRead:P}}=(0,r.useRBAC)(m.Z.settings.users),b=(0,v.useQueryClient)(),O=(0,r.useNotification)(),{formatMessage:M}=(0,g.useIntl)(),{search:u}=(0,l.useLocation)();(0,r.useFocusWhenNavigate)();const{notifyStatus:T}=(0,p.G)(),_=["users",u],f=rt.map(C=>Ue(Be({},C),{metadatas:Ue(Be({},C.metadatas),{label:M(C.metadatas.label)})})),V=M({id:"global.users",defaultMessage:"Users"}),G=()=>{T(M({id:"app.utils.notify.data-loaded",defaultMessage:"The {target} has loaded"},{target:V}))},{status:j,data:W,isFetching:ee}=(0,v.useQuery)(_,()=>at(u,G),{enabled:P,keepPreviousData:!0,retry:!1,staleTime:1e3*20,onError(){O({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}}),Y=()=>{s(C=>!C)},Z=(0,v.useMutation)(C=>st(C),{onSuccess(){return ut(this,null,function*(){yield b.invalidateQueries(_)})},onError(C){var le,ge;(ge=(le=C==null?void 0:C.response)==null?void 0:le.data)!=null&&ge.data?O({type:"warning",message:C.response.data.data}):O({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}}),me=j!=="success"&&j!=="error"||j==="success"&&ee,pe=n?e.createElement(d.z,{"data-testid":"create-user-button",onClick:Y,startIcon:e.createElement(c.Z,null),size:"S"},M({id:"Settings.permissions.users.create",defaultMessage:"Invite new user"})):void 0;return e.createElement(A.o,{"aria-busy":me},e.createElement(r.SettingsPageTitle,{name:"Users"}),e.createElement(L.T,{primaryAction:pe,title:V,subtitle:M({id:"Settings.permissions.users.listview.header.subtitle",defaultMessage:"All the users who have access to the Strapi admin panel"})}),P&&e.createElement(h.Z,{startActions:e.createElement(e.Fragment,null,e.createElement(r.SearchURLQuery,{label:M({id:"app.component.search.label",defaultMessage:"Search for {target}"},{target:V})}),e.createElement($e,{displayedFilters:nt}))}),e.createElement(D.D,{canRead:P},!P&&e.createElement(r.NoPermissions,null),j==="error"&&e.createElement("div",null,"TODO: An error occurred"),P&&e.createElement(e.Fragment,null,e.createElement(r.DynamicTable,{contentType:"Users",isLoading:me,onConfirmDeleteAll:Z.mutateAsync,onConfirmDelete:C=>Z.mutateAsync([C]),headers:f,rows:W==null?void 0:W.results,withBulkActions:!0,withMainAction:i},e.createElement(Ke,{canDelete:i,headers:f,rows:(W==null?void 0:W.results)||[],withBulkActions:!0,withMainAction:i})),e.createElement(tt,{pagination:W==null?void 0:W.pagination}))),a&&e.createElement(et,{onToggle:Y,queryName:_}))},pt=()=>e.createElement(r.CheckPagePermissions,{permissions:m.Z.settings.users.main},e.createElement(mt,null))},82464:(x,E,t)=>{t.d(E,{Z:()=>v});var e=t(67294),r=t(45697),m=t.n(r),L=t(12028),h=t(68547),D=t.n(h),d=t(65186),A=t(74855),p=t.n(A),c=t(97132);const l=()=>e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg"},e.createElement("text",{transform:"translate(-23 -9)",fill:"#4B515A",fillRule:"evenodd",fontSize:"32",fontFamily:"AppleColorEmoji, Apple Color Emoji"},e.createElement("tspan",{x:"23",y:"36"},"\u2709\uFE0F"))),g=({children:te,target:o})=>{const ae=(0,h.useNotification)(),{formatMessage:S}=(0,c.useIntl)(),q=()=>{ae({type:"info",message:{id:"notification.link-copied"}})},I=S({id:"app.component.CopyToClipboard.label",defaultMessage:"Copy to clipboard"});return e.createElement(h.ContentBox,{endAction:e.createElement(A.CopyToClipboard,{onCopy:q,text:o},e.createElement(L.h,{label:I,noBorder:!0,icon:e.createElement(d.Z,null)})),title:o,titleEllipsis:!0,subtitle:te,icon:e.createElement(l,null),iconBackground:"neutral100"})};g.propTypes={children:m().oneOfType([m().element,m().string]).isRequired,target:m().string.isRequired};const v=g},31605:(x,E,t)=>{t.d(E,{Z:()=>A});var e=t(67294),r=t(97132),m=t(45697),L=t.n(m),h=t(63871),D=t(82464);const d=({registrationToken:p})=>{const{formatMessage:c}=(0,r.useIntl)(),l=`${window.location.origin}${h.Z}auth/register?registrationToken=${p}`;return e.createElement(D.Z,{target:l},c({id:"app.components.Users.MagicLink.connect",defaultMessage:"Copy and share this link to give access to this user"}))};d.defaultProps={registrationToken:""},d.propTypes={registrationToken:L().string};const A=d},81288:(x,E,t)=>{t.d(E,{Z:()=>q});var e=t(67294),r=t(45697),m=t.n(r),L=t(97132),h=t(91216),D=t(82562),d=t(23724),A=t.n(d),p=t(27821),c=t(86647),l=t(23998),g=(I,B,X)=>new Promise((se,H)=>{var ne=U=>{try{w(X.next(U))}catch(K){H(K)}},$=U=>{try{w(X.throw(U))}catch(K){H(K)}},w=U=>U.done?se(U.value):Promise.resolve(U.value).then(ne,$);w((X=X.apply(I,B)).next())});const v=p.keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`,te=p.default.div`
  animation: ${v} 2s infinite linear;
`,o=()=>e.createElement(te,null,e.createElement(c.default,null)),ae=()=>g(void 0,null,function*(){const{data:I}=yield l.be.get("/admin/roles");return I.data}),S=({disabled:I,error:B,onChange:X,value:se})=>{const{status:H,data:ne}=(0,d.useQuery)(["roles"],ae,{staleTime:5e4}),{formatMessage:$}=(0,L.useIntl)(),w=B?$({id:B,defaultMessage:B}):"",U=$({id:"app.components.Users.ModalCreateBody.block-title.roles",defaultMessage:"User's roles"}),K=$({id:"app.components.Users.ModalCreateBody.block-title.roles.description",defaultMessage:"A user can have one or several roles"}),oe=$({id:"app.components.Select.placeholder",defaultMessage:"Select"}),ie=H==="loading"?e.createElement(o,null):void 0;return e.createElement(h.P,{id:"roles",disabled:I,error:w,hint:K,label:U,name:"roles",onChange:z=>{X({target:{name:"roles",value:z}})},placeholder:oe,multi:!0,startIcon:ie,value:se,withTags:!0,required:!0},(ne||[]).map(z=>e.createElement(D.W,{key:z.id,value:z.id},$({id:`global.${z.code}`,defaultMessage:z.name}))))};S.defaultProps={disabled:!1,error:void 0},S.propTypes={disabled:m().bool,error:m().string,onChange:m().func.isRequired,value:m().array.isRequired};const q=S},97083:(x,E,t)=>{t.d(E,{Z:()=>c});var e=t(57338),r=Object.defineProperty,m=Object.getOwnPropertySymbols,L=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,D=(l,g,v)=>g in l?r(l,g,{enumerable:!0,configurable:!0,writable:!0,value:v}):l[g]=v,d=(l,g)=>{for(var v in g||(g={}))L.call(g,v)&&D(l,v,g[v]);if(m)for(var v of m(g))h.call(g,v)&&D(l,v,g[v]);return l};const A=strapi.features.isEnabled(strapi.features.SSO)?{useSSORegistration:!0}:{},c=d(d({},e.Z),A)},810:(x,E,t)=>{t.d(E,{Z:()=>r});const r=strapi.features.isEnabled(strapi.features.SSO)?[[{intlLabel:{id:"Settings.permissions.users.form.sso",defaultMessage:"Connect with SSO"},hint:{id:"Settings.permissions.users.form.sso.description",defaultMessage:"When enabled (ON), users can login via SSO"},name:"useSSORegistration",type:"bool",size:{col:6,xs:12}}]]:[]},12201:(x,E,t)=>{t.d(E,{Z:()=>A});var e=t(67294),r=t(97132),m=t(45697),L=t.n(m),h=t(63871),D=t(82464);const d=({registrationToken:p})=>{const{formatMessage:c}=(0,r.useIntl)();return p?e.createElement(D.Z,{target:`${window.location.origin}${h.Z}auth/register?registrationToken=${p}`},c({id:"app.components.Users.MagicLink.connect",defaultMessage:"Copy and share this link to give access to this user"})):e.createElement(D.Z,{target:`${window.location.origin}${h.Z}auth/login`},c({id:"app.components.Users.MagicLink.connect.sso",defaultMessage:"Send this link to the user, the first login can be made via a SSO provider."}))};d.defaultProps={registrationToken:""},d.propTypes={registrationToken:L().string};const A=d},23293:(x,E,t)=>{t.d(E,{Z:()=>A});var e=t(67294),r=Object.defineProperty,m=Object.getOwnPropertySymbols,L=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,D=(p,c,l)=>c in p?r(p,c,{enumerable:!0,configurable:!0,writable:!0,value:l}):p[c]=l,d=(p,c)=>{for(var l in c||(c={}))L.call(c,l)&&D(p,l,c[l]);if(m)for(var l of m(c))h.call(c,l)&&D(p,l,c[l]);return p};function A(p){return e.createElement("svg",d({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},p),e.createElement("path",{d:"M0 2.8A.8.8 0 01.8 2h22.4a.8.8 0 01.8.8v2.71a1 1 0 01-1 1H1a1 1 0 01-1-1V2.8z",fill:"#32324D"}),e.createElement("path",{d:"M1.922 7.991C.197 6.675 0 6.252 0 5.289h23.953c.305 1.363-1.594 2.506-2.297 3.125-1.953 1.363-6.253 4.36-7.828 5.45-1.575 1.09-3.031.455-3.562 0-2.063-1.41-6.62-4.557-8.344-5.873zM22.8 18H1.2c-.663 0-1.2.471-1.2 1.053v1.894C0 21.529.537 22 1.2 22h21.6c.663 0 1.2-.471 1.2-1.053v-1.894c0-.582-.537-1.053-1.2-1.053z",fill:"#32324D"}),e.createElement("path",{d:"M0 9.555v10.972h24V9.554c-2.633 1.95-8.367 6.113-9.96 7.166-1.595 1.052-3.352.438-4.032 0L0 9.555z",fill:"#32324D"}))}}}]);
