(this.webpackJsonp1st_app=this.webpackJsonp1st_app||[]).push([[0],[,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),s=c(4),r=c.n(s),l=(c(9),c(2)),o=(c(10),c(11),c(0));var i=function(e){return Object(o.jsxs)("div",{className:"themes",children:[Object(o.jsx)("div",{onClick:function(t){"dark"===e.bgTheme?document.body.style.background="#7158e2":alert("Please Enable dark mode")},id:"blue"}),Object(o.jsx)("div",{onClick:function(t){"dark"===e.bgTheme?document.body.style.background="#2c2c54":alert("Please Enable dark mode")},id:"black"}),Object(o.jsx)("div",{onClick:function(t){"dark"===e.bgTheme?document.body.style.background="#aaa69d":alert("Please Enable dark mode")},id:"darkGrey"})]})};function b(e){return Object(o.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(o.jsxs)("div",{className:"container-fluid",children:[Object(o.jsx)("a",{className:"navbar-brand",href:"#",children:e.title}),Object(o.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","ffaria-expanded":"false","aria-label":"Toggle navigation",children:Object(o.jsx)("span",{className:"navbar-toggler-icon"})}),Object(o.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(o.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#",children:e.home})})}),Object(o.jsx)("div",{children:Object(o.jsx)(i,{bgTheme:e.mode})}),Object(o.jsxs)("div",{className:"form-check form-switch",children:[Object(o.jsx)("input",{className:"form-check-input",type:"checkbox",id:"flexSwitchCheckDefault",onClick:e.darkMode}),Object(o.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:"light"===e.mode?"set Black mode":"set Light mode"})]})]})]})})}function d(e){var t=Object(a.useState)(""),c=Object(l.a)(t,2),n=c[0],s=c[1],r=Object(a.useState)(""),i=Object(l.a)(r,2),b=i[0],d=i[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{className:"mb-3",children:[Object(o.jsx)("h2",{children:"Enter the Text and Use below Option"}),Object(o.jsx)("textarea",{className:"form-control",style:e.textArea,id:"capitalize",rows:"7",value:n,onChange:function(e){s(e.target.value);var t=n.split(/[ ]+/);d(t.join(""))}})]}),Object(o.jsx)("button",{className:"btn btn-primary",onClick:function(){s(n.toUpperCase()),e.showAlerts("Converted to Upper case","success")},children:"Convert to Uppercase"}),Object(o.jsx)("button",{className:"btn btn-primary mx-3",onClick:function(){s(n.toLowerCase()),e.showAlerts("Converted to Lower case","success")},children:"Convert to Lowercase"}),Object(o.jsx)("button",{className:"btn btn-primary mx-3",onClick:function(){s(""),e.showAlerts("cleared text to textarea","success")},children:"Clear text"}),Object(o.jsx)("button",{className:"btn btn-primary mx-3",onClick:function(){var t=document.getElementById("capitalize");navigator.clipboard.writeText(t.value),e.showAlerts("copied to clipboard","success")},children:"Copy Text"}),Object(o.jsx)("button",{className:"btn btn-primary mx-3",onClick:function(){var t=n.split(/[ ]+/);s(t.join(" ")),e.showAlerts("Extra spaces removed","success")},children:"Remove Extra Space"})]}),Object(o.jsxs)("div",{className:"container my-4",children:[Object(o.jsx)("h3",{children:"Your text summary"}),Object(o.jsxs)("p",{children:[" ",n.split(" ").filter((function(e){return 0!==e.length})).length," word and ",b.length," character"]}),Object(o.jsxs)("p",{children:[" ",.008*n.split(" ").filter((function(e){return 0!==e.length})).lengthz," Reading time"]}),Object(o.jsx)("h3",{children:"Preview content"}),Object(o.jsxs)("p",{children:[" ",n.length>0?n:" Nothing Preveiw"]})]})]})}b.defaultProps={title:"us_TextUtils form KUSHA",home:"Home"};var j=function(e){return Object(o.jsx)("div",{className:"mb-4",style:{height:"50px"},children:e.alert&&Object(o.jsxs)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:[Object(o.jsx)("strong",{children:function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)})," : ",e.alert.msg]})})};var u=function(){var e=Object(a.useState)("light"),t=Object(l.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)({background:"white",color:"black"}),r=Object(l.a)(s,2),i=r[0],u=r[1],h=Object(a.useState)(null),m=Object(l.a)(h,2),x=m[0],p=m[1],g=function(e,t){p({msg:e,type:t}),setTimeout((function(){p(null)}),2e3)};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(b,{about:"About",contact:"CONTACT",mode:c,darkMode:function(){"light"===c?(n("dark"),u({background:"rgb(50 67 86)",color:"white"}),document.body.style.background="rgb(4 23 42)",document.body.style.color="white",g("dark mode has been enbled","success")):(document.body.style.background="white",document.body.style.color="black",n("light"),u({background:"white",color:"black"}),g("light mode has been enabled","success"))}}),Object(o.jsx)(j,{alert:x}),Object(o.jsx)("div",{className:"container",children:Object(o.jsx)(d,{showAlerts:g,textArea:i})})]})},h=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,14)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),a(e),n(e),s(e),r(e)}))};r.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(u,{})}),document.getElementById("root")),h()}],[[13,1,2]]]);
//# sourceMappingURL=main.8b48896b.chunk.js.map