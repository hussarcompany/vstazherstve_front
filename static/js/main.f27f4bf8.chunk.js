(this.webpackJsonpvstazherstve=this.webpackJsonpvstazherstve||[]).push([[0],{62:function(e,t,s){},82:function(e,t,s){"use strict";s.r(t);var c=s(0),a=s.n(c),n=s(18),i=s.n(n),l=s(21),r=s(101),o=s(97),j=s(98),d=s(100),b="/vstazherstve_front",m=s(2),h=function(){return Object(m.jsx)(r.a,{position:"static",children:Object(m.jsx)(o.a,{variant:"dense",children:Object(m.jsx)(j.a,{container:!0,justify:"flex-end",children:Object(m.jsx)(l.b,{to:b,children:Object(m.jsx)(d.a,{variant:"outlined",children:"Login"})})})})})},u=(s(62),s(5)),x=function(){return Object(m.jsx)("div",{children:"CreateProfile"})},O=function(){return Object(m.jsx)("div",{children:"Main"})},p=s(27),v=s(44),N=s.n(v);var f=function(){var e,t=Object(c.useState)({}),s=Object(p.a)(t,2),a=s[0],n=s[1];return Object(c.useEffect)((function(){var e;(e="61018900aed8ba40cce4d414",N.a.get("".concat("http://localhost:8080","/get_user/").concat(e)).then((function(e){return{error:!1,userData:e.data[0]}})).catch((function(e){return console.log(e),{error:!0,userData:e}}))).then((function(e){n(e)}))}),[]),console.log(a),Object(m.jsxs)("div",{children:["Profile",Object(m.jsx)("div",{children:null===a||void 0===a||null===(e=a.userData)||void 0===e?void 0:e.name})]})},g=function(){return Object(m.jsx)("div",{children:"ViewProfiles"})},C=s(26),y=s(31);var w=[{path:"/create_profile",Component:x},{path:"/profile",Component:f},{path:"/view_profiles",Component:g},{path:b,Component:O},{path:"/create_account",Component:function(){var e=c.useState({username:"",password:"",email:"",firstName:"",lastName:""}),t=Object(p.a)(e,2),s=t[0],a=t[1],n=function(e){var t=e.target,c=t.value,n=t.name;a(Object(y.a)(Object(y.a)({},s),{},Object(C.a)({},n,c)))};return Object(m.jsx)("section",{className:"hero",children:Object(m.jsxs)("div",{className:"hero-body container",children:[Object(m.jsx)("h3",{className:"title has-text-centered",children:"Let's gooooo"}),Object(m.jsxs)("form",{action:"post",className:"box",children:[Object(m.jsxs)("div",{className:"columns is-variable is-5",children:[Object(m.jsxs)("div",{className:"column",children:[Object(m.jsxs)("div",{className:"field",children:[Object(m.jsx)("label",{className:"label",children:"Email"}),Object(m.jsx)("div",{className:"control",children:Object(m.jsx)("input",{onChange:n,type:"email",name:"email",className:"input"})})]}),Object(m.jsxs)("div",{className:"field",children:[Object(m.jsx)("label",{className:"label",children:"Username"}),Object(m.jsx)("div",{className:"control",children:Object(m.jsx)("input",{onChange:n,name:"username",type:"text",className:"input"})})]}),Object(m.jsxs)("div",{className:"field",children:[Object(m.jsx)("label",{className:"label",children:"Password"}),Object(m.jsx)("div",{className:"control",children:Object(m.jsx)("input",{onChange:n,type:"password",name:"password",className:"input"})})]})]}),Object(m.jsxs)("div",{className:"column",children:[Object(m.jsxs)("div",{className:"field",children:[Object(m.jsx)("label",{className:"label",children:"First Name"}),Object(m.jsx)("div",{className:"control",children:Object(m.jsx)("input",{onChange:n,name:"firstName",type:"text",className:"input"})})]}),Object(m.jsxs)("div",{className:"field",children:[Object(m.jsx)("label",{className:"label",children:"Last Name"}),Object(m.jsx)("div",{className:"control",children:Object(m.jsx)("input",{onChange:n,name:"lastName",type:"text",className:"input"})})]})]})]}),Object(m.jsxs)("div",{className:"buttons",children:[Object(m.jsx)("button",{className:"button is-primary",type:"submit",children:"Sign up"}),Object(m.jsx)("button",{className:"button",children:"Cancel"})]})]})]})})}}],_=function(){return Object(m.jsxs)(u.d,{children:[w.map((function(e){var t=e.path,s=e.Component;return Object(m.jsx)(u.b,{path:t,component:s,exact:!0},t)})),Object(m.jsx)(u.a,{to:b})]})};s(99),s(81);var P=function(){return Object(m.jsxs)(l.a,{children:[Object(m.jsx)(h,{}),Object(m.jsx)(_,{})]})};i.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(P,{})}),document.getElementById("root"))}},[[82,1,2]]]);
//# sourceMappingURL=main.f27f4bf8.chunk.js.map