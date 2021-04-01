(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{128:function(e,t,a){},188:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(11),o=a.n(c),s=(a(128),a(37)),i=a(14),l=a(8),u=a(20),d=a(13),j=a(234),h=a(231),p=a(249),m=a(70),b=a(224),x=a(235),g=a(113),f=a.n(g),O=a(245),v=a(2);var y=function(e){var t=e.name,a=e.label,n=e.handleChange,r=e.autoFocus,c=e.type;return Object(v.jsx)(b.a,{item:!0,xs:12,children:Object(v.jsx)(O.a,{name:t,onChange:n,variant:"outlined",required:!0,fullWidth:!0,label:a,autoFocus:r,type:c})})},w=a(233),C=Object(w.a)((function(e){return{paper:{display:"flex",flexDirection:"column",alignItems:"center",padding:e.spacing(2)},root:{width:"100%",height:"100%","& .MuiTextField-root":{margin:e.spacing(1)}},form:{marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main}}})),S=function(e,t){switch(t.type){case"AUTH":return localStorage.setItem("profile",JSON.stringify(Object(u.a)({},t.payload))),{errorMessage:"",user:t.payload.result};case"SIGNED":return{errorMessage:"",user:JSON.parse(t.payload).result};case"LOGOUT":return localStorage.clear(),{errorMessage:"",user:{_id:"",name:"",email:""}};case"ERROR":return Object(u.a)(Object(u.a)({},e),{},{errorMessage:t.payload});default:return e}},N=a(40),k=a.n(N),R=a(61),T=a(54),I=a.n(T);I.a.interceptors.request.use((function(e){return localStorage.getItem("profile")&&(e.headers.Authorization="Bearer ".concat(JSON.parse(localStorage.getItem("profile")).token),e.headers.userId=JSON.parse(localStorage.getItem("profile")).result._id),e}));var W=function(e){return I.a.post("/user/signin",e)},M=function(e){return I.a.post("/user/signup",e)},B=function(e){return{signup:function(){var t=Object(R.a)(k.a.mark((function t(a,n){var r,c;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,M(a);case 3:r=t.sent,c=r.data,e({type:"AUTH",payload:c}),n.push("/"),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),e({type:"ERROR",payload:t.t0.response.data.message});case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e,a){return t.apply(this,arguments)}}(),signin:function(){var t=Object(R.a)(k.a.mark((function t(a,n){var r,c;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,W(a);case 3:r=t.sent,c=r.data,e({type:"AUTH",payload:c}),n.push("/"),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),e({type:"ERROR",payload:t.t0.response.data.message});case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e,a){return t.apply(this,arguments)}}(),logout:function(t){e({type:"LOGOUT"}),t.push("/")}}},U={errorMessage:"",user:{_id:"",email:"",name:""}},E=Object(n.createContext)(U),F=function(e){var t=e.children,a=Object(n.useReducer)(S,U),r=Object(d.a)(a,2),c=r[0],o=r[1],s=B(o);return Object(n.useEffect)((function(){if(!c.user.name){var e=localStorage.getItem("profile");e&&o({type:"SIGNED",payload:e})}}),[c]),Object(v.jsx)(E.Provider,{value:{auth:c,actions:s},children:t})},H={name:"",email:"",password:"",confirmPassword:""};var A=function(e){var t=e.elevation,a=Object(n.useState)(!1),r=Object(d.a)(a,2),c=r[0],o=r[1],s=Object(n.useState)(H),g=Object(d.a)(s,2),O=g[0],w=g[1],S=C(),N=Object(i.f)(),k=Object(n.useContext)(E),R=k.actions,T=R.signin,I=R.signup,W=k.auth.errorMessage,M=function(e){w(Object(u.a)(Object(u.a)({},O),{},Object(l.a)({},e.target.name,e.target.value)))};return Object(v.jsx)(j.a,{component:"main",maxWidth:"xs",className:S.root,style:{marginTop:0===t?"0":"100px"},children:Object(v.jsxs)(h.a,{elevation:t,className:S.paper,children:[Object(v.jsx)(p.a,{className:S.avatar,children:Object(v.jsx)(f.a,{})}),Object(v.jsx)(m.a,{variant:"h5",children:c?"Sign Up":"Sign In"}),Object(v.jsx)(m.a,{variant:"h6",style:{color:"#ed4337"},children:W}),Object(v.jsxs)("form",{onSubmit:function(e){e.preventDefault(),c?I(O,N):T(O,N)},className:S.form,children:[Object(v.jsxs)(b.a,{container:!0,spacing:2,children:[c&&Object(v.jsx)(v.Fragment,{children:Object(v.jsx)(y,{name:"name",label:"Name",handleChange:M,autoFocus:c})}),Object(v.jsx)(y,{name:"email",label:"Email Address",handleChange:M,type:"email",autoFocus:!c}),Object(v.jsx)(y,{name:"password",label:"Password",handleChange:M,type:"password"}),c&&Object(v.jsx)(y,{name:"confirmPassword",label:"Confirm Password",handleChange:M,type:"password"})]}),Object(v.jsx)(x.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:S.submit,children:c?"Sign Up":"Sign In"}),Object(v.jsx)(b.a,{container:!0,justify:"flex-end",children:Object(v.jsx)(b.a,{item:!0,children:Object(v.jsx)(x.a,{onClick:function(){o((function(e){return!e}))},children:c?"Already have an account? Sign In":"Don't have an account? Sign Up"})})})]})]})})},D=a(236),_=Object(w.a)((function(e){return{container:{height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"},root:{minHeight:"600px",boxShadow:"5px 5px 20px rgba(0,0,0,0.6)",borderRadius:"4px"},left:{height:"100%",width:"100%",display:"flex",flexDirection:"column",padding:"20px 0",justifyContent:"center",alignItems:"center",backgroundColor:D.a[500],color:e.palette.getContrastText(D.a[500]),borderRadius:"4px 0 0 4px"},right:{height:"100%",width:"100%",padding:"20px 0",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",borderRadius:"0 4px 4px 0"},welcomeFirst:{letterSpacing:".1rem",textTransform:"uppercase",fontWeight:"300"},welcomeSecond:{marginTop:"1em",letterSpacing:".2rem",textTransform:"uppercase",fontWeight:"800"}}})),P=a(230),J=a(242),z=a(237),L=Object(w.a)((function(e){return{root:{height:"100%",maxWidth:"250px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},seperator:{fontSize:"1.2rem",margin:"1em auto"}}}));var G=function(e){var t=e.rooms,a=e.user,r=L(),c=Object(i.f)(),o=Object(n.useState)(""),s=Object(d.a)(o,2),l=s[0],u=s[1],j=Object(n.useState)(""),p=Object(d.a)(j,2),g=p[0],f=p[1];Object(n.useEffect)((function(){t.length>0&&u(t[0])}),[t]);var y=function(){g?c.push("/chatRooms/".concat(g)):c.push("/chatRooms/".concat(l))};return Object(v.jsxs)(h.a,{elevation:0,className:r.root,children:[Object(v.jsxs)(m.a,{variant:"h3",align:"center",style:{fontWeight:"300"},children:["Hello ",a.name]}),Object(v.jsx)(m.a,{variant:"h6",align:"center",style:{marginTop:"30px"},children:"Select The Room"}),Object(v.jsxs)(b.a,{container:!0,children:[Object(v.jsx)(b.a,{item:!0,xs:12,children:Object(v.jsx)(P.a,{variant:"outlined",fullWidth:!0,children:Object(v.jsx)(J.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:l,onChange:function(e){return u(e.target.value)},children:t.map((function(e){return Object(v.jsx)(z.a,{value:e,children:e},e)}))})})}),Object(v.jsx)(b.a,{item:!0,xs:12,children:Object(v.jsx)(x.a,{variant:"contained",color:"secondary",fullWidth:!0,onClick:y,children:"Join Room"})}),Object(v.jsx)("p",{className:r.seperator,children:"or"}),Object(v.jsxs)(b.a,{item:!0,xs:12,children:[Object(v.jsx)(m.a,{variant:"h6",align:"center",children:"Create a new one"}),Object(v.jsx)(O.a,{value:g,onChange:function(e){return f(e.target.value)},label:"Room name",variant:"outlined",fullWidth:!0,onKeyPress:function(e){return"Enter"===e.key?y():null}})]}),Object(v.jsx)(b.a,{item:!0,xs:12,children:Object(v.jsx)(x.a,{variant:"contained",color:"primary",fullWidth:!0,onClick:y,children:"Create new room"})})]})]})};var q=function(){var e=_(),t=Object(n.useState)([]),a=Object(d.a)(t,2),r=a[0],c=a[1],o=Object(i.f)(),s=Object(n.useContext)(E),l=s.auth.user,u=s.actions.logout,p=function(){var e=Object(R.a)(k.a.mark((function e(){var t,a;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I.a.get("/chatRooms");case 3:t=e.sent,a=t.data.rooms,c(a),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){l.name&&p()}),[l]),Object(v.jsx)("div",{className:e.container,children:Object(v.jsx)(j.a,{maxWidth:"md",children:Object(v.jsxs)(b.a,{container:!0,spacing:0,className:e.root,children:[Object(v.jsx)(b.a,{item:!0,xs:12,md:6,children:Object(v.jsxs)(h.a,{elevation:0,className:e.left,children:[Object(v.jsx)(m.a,{variant:"h4",className:e.welcomeFirst,children:"welcome to the"}),Object(v.jsx)(m.a,{variant:"h4",className:e.welcomeSecond,children:"web chat"}),l.name&&Object(v.jsx)(x.a,{variant:"outlined",color:"inherit",size:"large",style:{marginTop:"20%"},onClick:function(){return u(o)},children:"Logout"})]})}),Object(v.jsx)(b.a,{item:!0,xs:12,md:6,children:Object(v.jsx)(h.a,{elevation:0,className:e.right,children:l.name?Object(v.jsx)(G,{rooms:r,user:l}):Object(v.jsx)(A,{elevation:0})})})]})})})},Y=a(241),K=a(244),V=a(247),$=a(243),Q=Object(w.a)((function(e){return{root:{width:"100%","& > * + *":{marginTop:e.spacing(2)}}}}));var X=function(e){var t=e.setSnackbarAlert,a=e.snackbarAlert,n=a.open,r=a.user,c=a.text,o=Q();return Object(v.jsx)("div",{className:o.root,children:Object(v.jsx)(V.a,{anchorOrigin:{vertical:"bottom",horizontal:"right"},open:n,autoHideDuration:5e3,onClose:function(e,n){"clickaway"!==n&&t(Object(u.a)(Object(u.a)({},a),{},{open:!1}))},children:Object(v.jsx)($.a,{severity:"success",elevation:6,variant:"filled",children:"".concat(r,": ").concat(c)})})})},Z=function(e,t){switch(t.type){case"FETCH_ROOM":return t.payload.result;case"UPDATE_ROOM":return t.payload.updatedRoom;default:return e}},ee=function(e){return{joinChat:function(e,t){try{t.open(),t.emit("join",e)}catch(a){console.log(a)}},updateRoom:function(t){try{t.on("updateRoom",(function(t){e({type:"UPDATE_ROOM",payload:t})}))}catch(a){console.log(a)}},leaveChat:function(e){try{e.disconnect(),e.off()}catch(t){console.log(t)}},sendMessage:function(e,t,a){a.emit("sendMessage",{message:e,roomName:t})}}},te={_id:"",users:[{_id:"",name:""}],name:"",messages:[{id:"",body:"",createdAt:"",user:""}]},ae=Object(n.createContext)(te),ne=function(e){var t=e.children,a=Object(n.useReducer)(Z,te),r=Object(d.a)(a,2),c=r[0],o=r[1],s=ee(o);return Object(v.jsx)(ae.Provider,{value:{chatRoom:c,actions:s},children:t})},re=a(114),ce=function(e){return localStorage.getItem("profile")?JSON.parse(localStorage.getItem("profile"))[e]:""},oe=a(69),se=a(238),ie=Object(w.a)((function(e){return{root:{display:"flex",flexDirection:"column"},currentUserMessage:{position:"relative",maxWidth:"80%",margin:"5px 10px",borderRadius:"5px",padding:"5px 10px",backgroundColor:oe.a[300],opacity:"0.9",alignSelf:"flex-end",overflowWrap:"break-word"},otherUserMessage:{position:"relative",maxWidth:"80%",margin:"5px 10px",borderRadius:"5px",padding:"5px 10px",backgroundColor:se.a[300],opacity:"0.9",alignSelf:"flex-start",overflowWrap:"break-word"},messageHeader:{letterSpacing:".1rem"},messageBody:{fontWeight:"400",paddingRight:"50px"},messageTime:{position:"absolute",bottom:"3px",right:"3px",color:e.palette.text.secondary},iframeContainer:{position:"relative",overflow:"hidden",width:"100%",paddingTop:"56.25%"},iframe:{position:"absolute",top:0,left:0,bottom:0,right:0,width:"100%",height:"100%"}}})),le=a(115),ue=a.n(le);var de=function(e){var t=e.user,a=t.name,n=t._id,r=e.body,c=e.createdAt,o=e.currentUser,s=ie(),i=o._id===n,l=r.match(/^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/);return Object(v.jsx)("div",{className:s.root,children:Object(v.jsxs)("div",{className:i?s.currentUserMessage:s.otherUserMessage,children:[l?Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("h4",{className:s.messageHeader,children:i?"Me":a}),Object(v.jsx)("iframe",{width:"100%",height:"200",src:"https://www.youtube.com/embed/".concat(l[1]),title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),Object(v.jsx)("a",{href:r,target:"_blank",rel:"noreferrer",children:r})]}):Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("h4",{className:s.messageHeader,children:i?"Me":a}),Object(v.jsx)("h3",{className:s.messageBody,children:r})]}),Object(v.jsx)("p",{className:s.messageTime,children:ue()(c).format("hh:mm")})]})})},je=a(232),he=a(189),pe=a(239),me=a(240),be=Object(w.a)((function(e){return{current:{color:e.palette.getContrastText(oe.a[300]),backgroundColor:oe.a[300]},others:{color:e.palette.getContrastText(se.a[500]),backgroundColor:se.a[500]}}}));var xe=function(e){var t=e.users,a=e.currentUserId,n=be();return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)(je.a,{children:t.map((function(e){return Object(v.jsxs)(he.a,{button:!0,children:[Object(v.jsx)(pe.a,{children:Object(v.jsx)(p.a,{className:a===e._id?n.current:n.others,children:e.name?e.name[0]:""})}),Object(v.jsx)(me.a,{primary:e.name})]},e._id)}))})})},ge=a(68),fe=a.p+"static/media/chat-background.10f91aa9.jpg",Oe="60px",ve="550px",ye=Object(w.a)((function(e){return{container:Object(l.a)({paddingTop:"100px"},e.breakpoints.down("xs"),{paddingTop:"10px"}),root:Object(l.a)({height:"700px",maxWidth:"800px",margin:"0 auto",backgroundColor:D.a[400],borderRadius:"5px",display:"flex"},e.breakpoints.down("xs"),{margin:"0 10px"}),left:{height:"100%",maxWidth:"30%",flexBasis:"30%",color:e.palette.getContrastText(D.a[400])},right:Object(l.a)({height:"100%",maxWidth:"70%",flexBasis:"70%"},e.breakpoints.down("xs"),{maxWidth:"100%",flexBasis:"100%"}),leftHeader:{height:Oe,margin:"0 5px 0 10px",borderBottom:"1px solid #fff",display:"flex",justifyContent:"center",alignItems:"center","& h6":{fontWeight:"300"}},rightHeader:{height:Oe,display:"flex",justifyContent:"space-between",alignItems:"center",color:e.palette.getContrastText(D.a[400]),padding:"0 10px","& h5":{textTransform:"uppercase"}},leftBody:{height:ve,overflowY:"auto"},rightBody:{height:ve,width:"inherit",margin:"0 10px",overflowY:"auto",background:"url(".concat(fe,")"),backgroundColor:D.a[100],backgroundBlendMode:"lighten",backgroundSize:"cover",borderRadius:"3px",boxShadow:"2px 2px 2px rgba(0,0,0,0.7) inset"},leftFooter:{margin:"30px 20px 0 20px"},rightFooter:{backgroundColor:"#fff",margin:"20px 10px",padding:"10px 20px",borderRadius:"5px",boxShadow:"2px 2px 2px rgba(0,0,0,0.7) inset"},logoutButton:{backgroundColor:ge.a[600],color:"#fff","&:hover":{backgroundColor:ge.a[700]}},submitButton:{color:e.palette.getContrastText(D.a[400]),backgroundColor:D.a[500],"&:hover":{backgroundColor:D.a[700]}},progress:{height:"50px",maxWidth:"100px",margin:"100px auto"}}}));var we=function(e){var t=e.match.params,a=ye(),r=Object(i.f)(),c=Object(n.useContext)(ae),o=c.chatRoom,l=c.actions,j=l.updateRoom,h=l.joinChat,p=l.leaveChat,g=l.sendMessage,f=Object(n.useContext)(E),y=f.auth.user,w=f.actions.logout,C=Object(n.useState)(""),S=Object(d.a)(C,2),N=S[0],k=S[1],R=Object(n.useState)({user:"",text:"",open:!1}),T=Object(d.a)(R,2),I=T[0],W=T[1],M=Object(n.useState)(null),B=Object(d.a)(M,2),U=B[0],F=B[1],H=Object(n.useRef)();return Object(n.useEffect)((function(){!function(){var e=Object(re.io)({allowCredentials:!0,extraHeaders:{token:"Bearer ".concat(ce("token")),userProfile:JSON.stringify(ce("result"))}});F(e)}()}),[]),Object(n.useEffect)((function(){t&&y.name&&U&&h(t.name,U)}),[y,t,U]),Object(n.useEffect)((function(){if(U)return j(U),U.on("botMessage",(function(e){W({user:e.user,text:e.text,open:!0})})),function(){p(U)}}),[U]),Object(n.useEffect)((function(){setTimeout((function(){H.current&&H.current.scrollIntoView({alignToTop:!0})}),100)}),[o]),y.name?(null===t||void 0===t?void 0:t.name)!==o.name?Object(v.jsx)("div",{className:a.progress,children:Object(v.jsx)(Y.a,{color:"secondary",size:60})}):Object(v.jsxs)("div",{className:a.container,children:[Object(v.jsx)(X,{snackbarAlert:I,setSnackbarAlert:W}),Object(v.jsxs)("div",{className:a.root,children:[Object(v.jsx)(K.a,{xsDown:!0,children:Object(v.jsxs)("div",{className:a.left,children:[Object(v.jsx)("div",{className:a.leftHeader,children:Object(v.jsx)(m.a,{variant:"h6",align:"center",children:"People in Room"})}),Object(v.jsx)("div",{className:a.leftBody,children:Object(v.jsx)(xe,{users:o.users,currentUserId:y._id})}),Object(v.jsx)("div",{className:a.leftFooter,children:Object(v.jsx)(x.a,{variant:"outlined",color:"inherit",fullWidth:!0,component:s.b,to:"/",children:"Leave Room"})})]})}),Object(v.jsxs)("div",{className:a.right,children:[Object(v.jsxs)("div",{className:a.rightHeader,children:[Object(v.jsx)(K.a,{smUp:!0,children:Object(v.jsx)(x.a,{variant:"outlined",color:"inherit",component:s.b,to:"/",children:"Leave Room"})}),Object(v.jsxs)(m.a,{variant:"h5",color:"inherit",children:["#",o.name]}),Object(v.jsx)(x.a,{variant:"contained",className:a.logoutButton,onClick:function(){return w(r)},children:"Logout"})]}),Object(v.jsx)("div",{className:a.rightBody,children:Object(v.jsxs)("div",{className:a.messagesContainer,children:[o.messages.map((function(e,t){return Object(v.jsx)(de,Object(u.a)(Object(u.a)({},e),{},{currentUser:y}),t)})),Object(v.jsx)("div",{ref:H,style:{height:"30px",width:"100%"}})]})}),Object(v.jsx)("div",{className:a.rightFooter,children:Object(v.jsx)("form",{onSubmit:function(e){e.preventDefault(),g(N,o.name,U),k("")},children:Object(v.jsxs)(b.a,{container:!0,spacing:1,alignItems:"flex-end",className:a.input,children:[Object(v.jsx)(b.a,{item:!0,xs:8,children:Object(v.jsx)(O.a,{fullWidth:!0,placeholder:"type a message",autoFocus:!0,required:!0,value:N,onChange:function(e){return k(e.target.value)}})}),Object(v.jsx)(b.a,{item:!0,xs:4,children:Object(v.jsx)(x.a,{variant:"outlined",type:"submit",fullWidth:!0,className:a.submitButton,children:"Send"})})]})})})]})]})]}):Object(v.jsx)(q,{})};var Ce=function(){return Object(v.jsx)(s.a,{children:Object(v.jsxs)(i.c,{children:[Object(v.jsx)(i.a,{exact:!0,path:"/",component:q}),Object(v.jsx)(i.a,{exact:!0,path:"/signin",component:A}),Object(v.jsx)(i.a,{exact:!0,path:"/chatRooms/:name",component:we})]})})};o.a.render(Object(v.jsx)(r.a.StrictMode,{children:Object(v.jsx)(F,{children:Object(v.jsx)(ne,{children:Object(v.jsx)(Ce,{})})})}),document.getElementById("root"))}},[[188,1,2]]]);
//# sourceMappingURL=main.ee97d806.chunk.js.map