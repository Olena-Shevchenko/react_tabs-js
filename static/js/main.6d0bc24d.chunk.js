(this["webpackJsonpreact_tabs-js"]=this["webpackJsonpreact_tabs-js"]||[]).push([[0],{11:function(t,e,c){},13:function(t,e,c){"use strict";c.r(e);var a=c(3),n=c.n(a),i=c(4),s=c(1),d=(c(9),c(10),c(11),c(0)),b=function(t){var e=t.tabs,c=t.selectedTabId,a=t.onTabSelected,n=t.selectedTab;return Object(d.jsxs)("div",{"data-cy":"TabsComponent",children:[Object(d.jsx)("div",{className:"tabs is-boxed",children:Object(d.jsx)("ul",{children:e.map((function(t){return Object(d.jsx)("li",{className:"".concat(c===t.id?"is-active":""),"data-cy":"Tab",children:Object(d.jsx)("a",{onClick:function(){a(t)},href:"#".concat(t.id),"data-cy":"TabLink",children:t.title})},t.id)}))})}),Object(d.jsx)("div",{className:"block","data-cy":"TabContent",children:n.content})]})},o=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],l=function(){var t=Object(s.useState)(o[0].id),e=Object(i.a)(t,2),c=e[0],a=e[1],n=o.find((function(t){return t.id===c}));void 0===n&&(n=[].concat(o)[0]);return Object(d.jsxs)("div",{className:"section",children:[Object(d.jsxs)("h1",{className:"title",children:["Selected tab is"," ",n.title]}),Object(d.jsx)(b,{tabs:o,selectedTabId:c,selectedTab:n,onTabSelected:function(t){a(t.id)}})]})};n.a.render(Object(d.jsx)(l,{}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.6d0bc24d.chunk.js.map