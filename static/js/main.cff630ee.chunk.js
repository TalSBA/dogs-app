(this["webpackJsonpdogs-app"]=this["webpackJsonpdogs-app"]||[]).push([[0],{101:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c(22),r=c.n(n),s=(c(67),c(26)),i=c(7),o=c(42),j=c(18),d=c(29),b=c.n(d),l=c(103),u=c(104),h=c(105),m=c(110),O=(c(86),c.p+"static/media/dog.f2dc1593.png"),f=c(4);var x=function(e){var t=e.breed,c=e.image;return Object(f.jsx)("div",{className:"c-dog-card",children:Object(f.jsxs)(m.a,{children:[Object(f.jsx)(m.a.Img,{variant:"top",src:c}),Object(f.jsxs)(m.a.Body,{children:[Object(f.jsxs)(m.a.Title,{children:[t," "]})," ",Object(f.jsx)("span",{className:"dog-icon",children:Object(f.jsx)("img",{src:O})})]})]})})},g=c(107);c(88);var p=function(e){var t=e.placeholder,c=e.searchText,a=e.onSearchChange;return Object(f.jsx)("div",{className:"c-searchBox",children:Object(f.jsx)(g.a.Control,{type:"text",placeholder:t,value:c,onChange:function(e){return a(e.target.value)}})})},v=c(35),N=function e(t,c){Object(v.a)(this,e),this.breedName=t,this.image=c},k=(c(92),c(40));var y=function(e){var t,c=Object(a.useState)([]),n=Object(j.a)(c,2),r=n[0],i=n[1],d=Object(a.useState)(""),m=Object(j.a)(d,2),O=m[0],g=m[1],v=Object(a.useState)(!0),y=Object(j.a)(v,2),B=y[0],C=y[1];function w(){C(!0),i([]);var e=10;b.a.get("https://dog.ceo/api/breeds/list/all").then((function(t){var c=function(t){if(0===e)return"break";e--,b.a.get("https://dog.ceo/api/breed/"+t+"/images/random").then((function(e){i((function(c){return[].concat(Object(o.a)(c),[new N(t,e.data.message)])}))}))};for(var a in t.data.message){if("break"===c(a))break}})).then((function(){setTimeout((function(){C(!1)}),3e3)}))}return Object(a.useEffect)((function(){w()}),[]),r&&(t=r.filter((function(e){return e.breedName.toLowerCase().includes(O.toLowerCase())}))),Object(f.jsxs)(l.a,{className:"p-breeds",children:[Object(f.jsxs)("div",{className:"head-page",children:[Object(f.jsx)(p,{placeholder:"Search...",searchText:O,onSearchChange:function(e){g(e)}}),Object(f.jsx)(u.a,{onClick:function(){return w()},children:"Update Images"})]}),Object(f.jsx)(k.a,{breakpointCols:3,className:"my-masonry-grid",columnClassName:"my-masonry-grid_column",children:t&&t.map((function(e,t){return Object(f.jsx)(s.b,{to:"/Breeds/".concat(e.breedName),children:Object(f.jsx)(x,{breed:e.breedName,image:e.image},t)})}))}),B&&Object(f.jsx)(h.a,{animation:"grow"})]})},B=c(60),C=c(106);var w=function(e){var t=e.show,c=e.breedImage,a=e.onHide;return Object(f.jsx)(C.a,{onHide:a,show:t,size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:Object(f.jsx)(C.a.Body,{children:Object(f.jsx)("img",{width:"100%",height:"100%",src:c})})})};c(96);var S=function(){var e=Object(i.g)().breed,t=Object(a.useState)([]),c=Object(j.a)(t,2),n=c[0],r=c[1],s=Object(a.useState)({state:!1,image:""}),d=Object(j.a)(s,2),l=d[0],u=d[1];return Object(a.useEffect)((function(){var t=10;b.a.get("https://dog.ceo/api/breed/"+e+"/images").then((function(e){var c,a=Object(B.a)(e.data.message);try{var n=function(){var e=c.value;if(0===t)return"break";t--,r((function(t){return[].concat(Object(o.a)(t),[e])}))};for(a.s();!(c=a.n()).done;){if("break"===n())break}}catch(s){a.e(s)}finally{a.f()}}))}),[]),Object(f.jsxs)("div",{className:"p-breed",children:[Object(f.jsx)("h1",{children:e}),Object(f.jsx)(k.a,{breakpointCols:3,className:"my-masonry-grid",columnClassName:"my-masonry-grid_column",children:n&&n.map((function(e,t){return Object(f.jsx)(m.a,{onClick:function(){return u({state:!0,image:e})},children:Object(f.jsx)(m.a.Img,{variant:"top",src:e})},t)}))}),Object(f.jsx)(w,{show:l.state,breedImage:l.image,onHide:function(){return u({state:!1,image:""})}})]})};c(97);var I=function(e){return Object(f.jsxs)("div",{className:"p-home",children:[Object(f.jsx)("h1",{children:"Dogs Book"}),Object(f.jsx)("h4",{children:"Man's Best Friend"}),Object(f.jsx)(s.b,{to:"/Breeds",children:Object(f.jsx)(u.a,{children:"Woof!"})})]})},H=(c(98),c(109)),T=c(108),E=c(62);c(99);var L=function(e){var t=e.items,c=Object(a.useState)(),n=Object(j.a)(c,2),r=n[0];return n[1],r?Object(f.jsx)(i.a,{to:r}):Object(f.jsx)("div",{className:"c-menu",children:Object(f.jsxs)(H.a,{bg:"dark",variant:"dark",children:[Object(f.jsx)(H.a.Brand,{href:"#/",children:Object(f.jsx)(E.a,{className:"icon",fontSize:"24px"})}),Object(f.jsx)(T.a,{className:"mr-auto",children:t.map((function(e){return Object(f.jsx)(T.a.Link,{href:"#/".concat(e),children:e})}))})]})})};var z=function(){return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)(L,{items:["Home","Breeds"]}),Object(f.jsx)(s.a,{children:Object(f.jsxs)(i.d,{children:[Object(f.jsx)(i.b,{exact:!0,path:["/","/Home"],children:Object(f.jsx)(I,{})}),Object(f.jsx)(i.b,{exact:!0,path:"/Breeds",children:Object(f.jsx)(y,{})}),Object(f.jsx)(i.b,{exact:!0,path:"/Breeds/:breed",children:Object(f.jsx)(S,{})})]})})]})};c(100);r.a.render(Object(f.jsx)(z,{}),document.getElementById("root"))},67:function(e,t,c){},86:function(e,t,c){},88:function(e,t,c){},92:function(e,t,c){},96:function(e,t,c){},97:function(e,t,c){},98:function(e,t,c){},99:function(e,t,c){}},[[101,1,2]]]);
//# sourceMappingURL=main.cff630ee.chunk.js.map