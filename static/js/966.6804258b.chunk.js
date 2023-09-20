"use strict";(self.webpackChunkgogo_car=self.webpackChunkgogo_car||[]).push([[966],{187:function(e,i,s){s.d(i,{Z:function(){return g}});var t=s(433),n=s(439),r=s(791),l=s(459),a=s(164),c=s(87);function d(e){var i=e.split(", ");return{city:i[1],country:i[2]}}var o=s(561),h={backdrop:"Modal_backdrop__xTnIT",modalWindow:"Modal_modalWindow__CzUCW",accent:"Modal_accent__A4oOo",img:"Modal_img__20InI",closeBtn:"Modal_closeBtn__mlOa4",title:"Modal_title__3HkNf",tagsWrapper:"Modal_tagsWrapper__zOdvE",list:"Modal_list__EF-Lt",description:"Modal_description__zKB3H",subTitle:"Modal_subTitle__xAChn",rentalConditionsList:"Modal_rentalConditionsList__Lm-fH",callBtn:"Modal_callBtn__ODo1W"},u=s(184),_=document.querySelector("#modal-root");function m(e){var i=e.advert,s=e.toggleModal,t=i.address,n=i.img,l=i.id,m=i.year,x=i.make,j=i.model,p=i.type,g=i.fuelConsumption,v=i.engineSize,f=i.description,N=i.accessories,C=i.functionalities,k=i.rentalConditions,y=i.mileage,M=i.rentalPrice,S=d(t),W=k.split("\n"),b=W[0].split(": "),A=M.split("$"),w=y.toLocaleString("en-US"),B=function(e){"Escape"===e.code&&s()};return(0,r.useEffect)((function(){return window.addEventListener("keydown",B),function(){window.addEventListener("keydown",B)}})),(0,a.createPortal)((0,u.jsx)("div",{className:h.backdrop,onClick:function(e){e.currentTarget===e.target&&s()},children:(0,u.jsxs)("div",{className:h.modalWindow,children:[(0,u.jsx)("img",{className:h.img,src:n,alt:"alt"}),(0,u.jsx)("button",{className:h.closeBtn,onClick:s,children:(0,u.jsx)("svg",{width:24,height:24,children:(0,u.jsx)("use",{href:o.Z+"#cross"})})}),(0,u.jsxs)("h2",{className:h.title,children:[x," ",(0,u.jsx)("span",{className:h.accent,children:j}),", ",m]}),(0,u.jsxs)("div",{className:h.tagsWrapper,children:[(0,u.jsxs)("ul",{className:h.list,children:[(0,u.jsx)("li",{children:S.city}),(0,u.jsx)("li",{children:S.country}),(0,u.jsxs)("li",{children:["Id: ",l]}),(0,u.jsxs)("li",{children:["Year: ",m]}),(0,u.jsxs)("li",{children:["Type: ",p]})]}),(0,u.jsxs)("ul",{className:h.list,children:[(0,u.jsxs)("li",{children:["Fuel Consumption: ",g]}),(0,u.jsxs)("li",{children:["Engine Size: ",v]})]})]}),(0,u.jsx)("p",{className:h.description,children:f}),(0,u.jsx)("h3",{className:h.subTitle,children:"Accessories and functionalities:"}),(0,u.jsxs)("div",{className:h.tagsWrapper,children:[(0,u.jsx)("ul",{className:h.list,children:N.map((function(e){return(0,u.jsx)("li",{children:e},e)}))}),(0,u.jsx)("ul",{className:h.list,children:C.map((function(e){return(0,u.jsx)("li",{children:e},e)}))})]}),(0,u.jsx)("h3",{className:h.subTitle,children:"Rental Conditions: "}),(0,u.jsxs)("ul",{className:h.rentalConditionsList,children:[(0,u.jsxs)("li",{children:["Minimum age: ",(0,u.jsx)("span",{children:b[1]})]}),(0,u.jsx)("li",{children:W[1]}),(0,u.jsx)("li",{children:W[2]}),(0,u.jsxs)("li",{children:["Mileage: ",(0,u.jsx)("span",{children:w})]}),(0,u.jsxs)("li",{children:["Price: ",(0,u.jsxs)("span",{children:[A,"$"]})]})]}),(0,u.jsx)(c.rU,{className:h.callBtn,to:"tel:+380730000000",children:"Rental car"})]})}),_)}var x={container:"AdvertCard_container__EEfh1",imgWrapper:"AdvertCard_imgWrapper__t7B3O",img:"AdvertCard_img__2ljDI",likeBtn:"AdvertCard_likeBtn__+M+sY",titleWrapper:"AdvertCard_titleWrapper__YcURU",titleModel:"AdvertCard_titleModel__7naIQ",model:"AdvertCard_model__Qr15y",rentalPrice:"AdvertCard_rentalPrice__8eed3",tagsWrapper:"AdvertCard_tagsWrapper__APVTG",list:"AdvertCard_list__1Tbhj"};function j(e){var i=e.advert,s=(0,r.useState)(!1),a=(0,n.Z)(s,2),c=a[0],h=a[1],_=(0,r.useState)((function(){return JSON.parse(localStorage.getItem("favorite"))||[]})),j=(0,n.Z)(_,2),p=j[0],g=j[1],v=p.some((function(e){return e.id===i.id})),f=function(){h(!c)},N=i.address,C=i.img,k=i.id,y=i.year,M=i.make,S=i.model,W=i.type,b=i.functionalities,A=i.rentalCompany,w=i.rentalPrice,B=d(N);return(0,u.jsxs)("div",{className:x.container,children:[(0,u.jsx)("div",{className:x.imgWrapper,children:(0,u.jsx)("img",{className:x.img,src:C,alt:M+S+"Photo"})}),(0,u.jsx)("button",{className:x.likeBtn,onClick:function(){try{var e,s=JSON.parse(localStorage.getItem("favorite"))||[],n=s.some((function(e){return e.id===i.id}));e=n?s.filter((function(e){return e.id!==i.id})):[].concat((0,t.Z)(s),[i]),localStorage.setItem("favorite",JSON.stringify(e)),g(e)}catch(r){console.log(r.message)}},children:v?(0,u.jsx)("svg",{width:18,height:18,children:(0,u.jsx)("use",{href:o.Z+"#active"})}):(0,u.jsx)("svg",{width:18,height:18,children:(0,u.jsx)("use",{href:o.Z+"#heart"})})}),(0,u.jsxs)("div",{className:x.titleWrapper,children:[(0,u.jsxs)("div",{className:x.titleModel,children:[M,M.length<=5&&(0,u.jsxs)("span",{className:x.model,children:[" ",S]}),", ",y]}),(0,u.jsx)("div",{children:(0,u.jsx)("p",{className:x.rentalPrice,children:w})})]}),(0,u.jsxs)("div",{className:x.tagsWrapper,children:[(0,u.jsxs)("ul",{className:x.list,children:[(0,u.jsx)("li",{children:B.city}),(0,u.jsx)("li",{children:B.country}),(0,u.jsx)("li",{children:A})]}),(0,u.jsxs)("ul",{className:x.list,children:[(0,u.jsx)("li",{children:W}),(0,u.jsx)("li",{children:S}),(0,u.jsx)("li",{children:k}),(0,u.jsx)("li",{children:b[0]})]})]}),(0,u.jsx)(l.Z,{text:"Learn more",onClick:f}),c&&(0,u.jsx)(m,{toggleModal:f,advert:i})]})}var p={container:"AdvertsList_container__ZhqYE",list:"AdvertsList_list__vknfo"};function g(e){var i=e.adverts;return(0,u.jsx)("div",{className:p.container,children:i&&(0,u.jsx)("ul",{className:p.list,children:i.map((function(e){return(0,u.jsx)("li",{children:(0,u.jsx)(j,{advert:e})},e.id)}))})})}},459:function(e,i,s){s.d(i,{Z:function(){return r}});var t={btn:"Button_btn__RBtNK"},n=s(184);function r(e){var i=e.text,s=e.onClick;return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("button",{className:t.btn,onClick:s,children:i})})}},966:function(e,i,s){s.r(i),s.d(i,{default:function(){return c}});var t=s(439),n=s(791),r=s(187),l={container:"Favorites_container__dZNlb"},a=s(184);function c(){var e=(0,n.useState)([]),i=(0,t.Z)(e,2),s=i[0],c=i[1];return(0,n.useEffect)((function(){var e=JSON.parse(localStorage.getItem("favorite"))||[];JSON.stringify(s)!==JSON.stringify(e)&&c(e)}),[s]),(0,a.jsx)("section",{className:l.container,children:s&&(0,a.jsx)(r.Z,{adverts:s})})}}}]);
//# sourceMappingURL=966.6804258b.chunk.js.map