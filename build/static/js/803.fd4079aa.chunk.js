"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[803],{77062:function(e,n,t){t.d(n,{x6:function(){return m},Lk:function(){return d},tf:function(){return p},S8:function(){return C},q3:function(){return A}});var a=t(1413),i=t(72791),r=t(57689),o=[{path:"/",exact:!0,name:"Home"},{path:"/Category/AddCategory",name:"AddCategory",element:i.lazy((function(){return Promise.all([t.e(336),t.e(890)]).then(t.bind(t,73890))}))},{path:"/",name:"Categories",element:i.lazy((function(){return Promise.all([t.e(336),t.e(260)]).then(t.bind(t,66260))}))},{path:"/Movies/AddMovies",name:"AddMovies",element:i.lazy((function(){return Promise.all([t.e(336),t.e(810)]).then(t.bind(t,9810))}))},{path:"/Movies/MovieList",name:"MovieList",element:i.lazy((function(){return Promise.all([t.e(336),t.e(70)]).then(t.bind(t,17070))}))}],s=t(78983),c=t(80184),l=function(){var e=(0,r.TH)().pathname,n=function(e){var n=[];return e.split("/").reduce((function(e,t,a,i){var r="".concat(e,"/").concat(t),s=function(e,n){var t=n.find((function(n){return n.path===e}));return!!t&&t.name}(r,o);return s&&n.push({pathname:r,name:s,active:a+1===i.length}),r})),n}(e);return(0,c.jsxs)(s.fj,{className:"m-0 ms-2",children:[(0,c.jsx)(s.Sd,{href:"/",children:"Home"}),n.map((function(e,n){return(0,i.createElement)(s.Sd,(0,a.Z)((0,a.Z)({},e.active?{active:!0}:{href:e.pathname}),{},{key:n}),e.name)}))]})},m=i.memo(l),u=function(){return(0,c.jsx)(s.KB,{lg:!0,children:(0,c.jsx)(i.Suspense,{fallback:(0,c.jsx)(s.LQ,{color:"primary"}),children:(0,c.jsxs)(r.Z5,{children:[o.map((function(e,n){return e.element&&(0,c.jsx)(r.AW,{path:e.path,exact:e.exact,name:e.name,element:(0,c.jsx)(e.element,{})},n)})),(0,c.jsx)(r.AW,{path:"/",element:(0,c.jsx)(r.Fg,{to:"dashboard",replace:!0})})]})})})},d=i.memo(u),h=t(59434),f=t(24846),x=t(50612),p=(t.p,function(){var e=(0,h.I0)(),n=(0,h.v9)((function(e){return e.sidebarShow}));return(0,c.jsxs)(s.PO,{position:"sticky",className:"mb-4",children:[(0,c.jsx)(s.KB,{fluid:!0,children:(0,c.jsx)(s.X4,{className:"ps-1",onClick:function(){return e({type:"set",sidebarShow:!n})},children:(0,c.jsx)(f.Z,{icon:x.N,size:"lg"})})}),(0,c.jsx)(s.rc,{}),(0,c.jsx)(s.KB,{fluid:!0,children:(0,c.jsx)(m,{})})]})}),v=t(44925),j=t(11087),b=["component","name","badge","icon"],g=["component","name","icon","to"],y=function(e){var n=e.items,t=(0,r.TH)(),o=function(e,n,t){return(0,c.jsxs)(c.Fragment,{children:[n&&n,e&&e,t&&(0,c.jsx)(s.C_,{color:t.color,className:"ms-auto",children:t.text})]})},l=function(e,n){var t=e.component,r=e.name,s=e.badge,c=e.icon,l=(0,v.Z)(e,b),m=t;return(0,i.createElement)(m,(0,a.Z)((0,a.Z)({},l.to&&!l.items&&{component:j.OL}),{},{key:n},l),o(r,c,s))},m=function e(n,i){var r,s=n.component,m=n.name,u=n.icon,d=n.to,h=(0,v.Z)(n,g),f=s;return(0,c.jsx)(f,(0,a.Z)((0,a.Z)({idx:String(i),toggler:o(m,u),visible:t.pathname.startsWith(d)},h),{},{children:null===(r=n.items)||void 0===r?void 0:r.map((function(n,t){return n.items?e(n,t):l(n,t)}))}),i)};return(0,c.jsx)(i.Fragment,{children:n&&n.map((function(e,n){return e.items?m(e,n):l(e,n)}))})},Z=["160 160",'\n  <title>coreui logo</title>\n  <g>\n    <g style="fill:#fff;">\n      <path d="M125,47.091,86,24.5743a12,12,0,0,0-12,0L35,47.091a12.0336,12.0336,0,0,0-6,10.3923v45.0334a12.0335,12.0335,0,0,0,6,10.3923l39,22.5166a11.9993,11.9993,0,0,0,12,0l39-22.5166a12.0335,12.0335,0,0,0,6-10.3923V57.4833A12.0336,12.0336,0,0,0,125,47.091Zm-2,55.4257a4,4,0,0,1-2,3.464L82,128.4974a4,4,0,0,1-4,0L39,105.9807a4,4,0,0,1-2-3.464V57.4833a4,4,0,0,1,2-3.4641L78,31.5025a4,4,0,0,1,4,0l39,22.5167a4,4,0,0,1,2,3.4641Z"/>\n      <path d="M103.0216,93.0379h-2.866a4,4,0,0,0-1.9246.4935L80.95,103.0167,61,91.4981V68.5206L80.95,57.002l17.2894,9.455a4,4,0,0,0,1.9192.4905h2.8632a2,2,0,0,0,2-2V62.2357a2,2,0,0,0-1.04-1.7547L84.793,49.9854a8.0391,8.0391,0,0,0-7.8428.09L57,61.5929A8.0243,8.0243,0,0,0,53,68.5216v22.976a8,8,0,0,0,4,6.9283l19.95,11.5185a8.0422,8.0422,0,0,0,7.8433.0879l19.19-10.5311a2,2,0,0,0,1.0378-1.7534v-2.71A2,2,0,0,0,103.0216,93.0379Z"/>\n    </g>\n  </g>\n'],L=t(34358),N=(t(82454),t(47632)),k=[{component:s.dw,name:"Pages",icon:(0,c.jsx)(f.Z,{icon:N.m,customClassName:"nav-icon"}),items:[{component:s.U6,name:"Categories",to:"/"},{component:s.U6,name:"Movies",to:"/Movies/MovieList"}]}],_=function(){var e=(0,h.I0)(),n=(0,h.v9)((function(e){return e.sidebarUnfoldable})),t=(0,h.v9)((function(e){return e.sidebarShow}));return(0,c.jsxs)(s.z3,{position:"fixed",unfoldable:n,visible:t,onVisibleChange:function(n){e({type:"set",sidebarShow:n})},children:[(0,c.jsxs)(s.Dl,{className:"d-none d-md-flex",to:"/",children:[(0,c.jsx)("h4",{children:"Admin"}),(0,c.jsx)(f.Z,{className:"sidebar-brand-narrow",icon:Z,height:35})]}),(0,c.jsx)(s.Xk,{children:(0,c.jsx)(L.Z,{children:(0,c.jsx)(y,{items:k})})}),(0,c.jsx)(s.iv,{className:"d-none d-lg-flex",onClick:function(){return e({type:"set",sidebarUnfoldable:!n})}})]})},C=i.memo(_),w=function(e){var n=e.children,t=e.href;"https://coreui.io/react/docs/".concat(t);return(0,c.jsx)("div",{className:"example",children:(0,c.jsx)(s.gr,{className:"rounded-bottom",children:(0,c.jsx)(s.IA,{className:"p-3 preview",visible:!0,children:n})})})},A=i.memo(w)},66265:function(e,n,t){t.r(n);t(72791);var a=t(77062),i=t(80184);n.default=function(){return(0,i.jsxs)("div",{children:[(0,i.jsx)(a.S8,{}),(0,i.jsxs)("div",{className:"wrapper d-flex flex-column min-vh-100 bg-light",children:[(0,i.jsx)(a.tf,{}),(0,i.jsx)("div",{className:"body flex-grow-1 px-3",children:(0,i.jsx)(a.Lk,{})})]})]})}}}]);
//# sourceMappingURL=803.fd4079aa.chunk.js.map