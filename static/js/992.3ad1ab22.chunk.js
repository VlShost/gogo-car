"use strict";(self.webpackChunkgogo_car=self.webpackChunkgogo_car||[]).push([[992],{992:function(e,r,t){t.r(r),t.d(r,{default:function(){return j}});var n,a=t(439),s=t(791),i=t(165),c=t(861),d=t(243);d.Z.defaults.baseURL="https://650564b4ef808d3c66effc0d.mockapi.io";var o=function(){return(n=n||(0,c.Z)((0,i.Z)().mark((function e(){var r;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.Z.get("/adverts");case 3:return r=e.sent,e.abrupt("return",r.data);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",console.log(e.t0.message));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)},l={container:"AdvertCard_container__EEfh1",imgWrapper:"AdvertCard_imgWrapper__t7B3O",img:"AdvertCard_img__2ljDI",test:"AdvertCard_test__lwmfP",infoWrapper:"AdvertCard_infoWrapper__KI1Lg",infoModel:"AdvertCard_infoModel__Da-fM",model:"AdvertCard_model__Qr15y",rentalPrice:"AdvertCard_rentalPrice__8eed3"},u={btn:"Button_btn__RBtNK"},v=t(184);function f(e){var r=e.text;return(0,v.jsx)(v.Fragment,{children:(0,v.jsx)("button",{className:u.btn,children:r})})}var m=t(164),_=document.querySelector("#modal-root");function p(e){var r=e.advert,t=e.toggleModal;return(0,s.useEffect)((function(){var e=function(e){"Escape"===e.key&&t()};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[t]),(0,m.createPortal)((0,v.jsx)(v.Fragment,{children:(0,v.jsx)("div",{children:(0,v.jsx)("img",{src:r.img,alt:"alt"})})}),_)}function h(e){var r=e.advert,t=(0,s.useState)(!1),n=(0,a.Z)(t,2),i=n[0],c=n[1],d=r.img,o=r.make,u=r.model,m=r.year,_=r.rentalPrice;return(0,v.jsxs)("div",{className:l.container,children:[(0,v.jsx)("div",{className:l.imgWrapper,children:(0,v.jsx)("img",{className:l.img,src:d,alt:o+u+"Photo"})}),(0,v.jsxs)("div",{className:l.infoWrapper,children:[(0,v.jsxs)("div",{className:l.infoModel,children:[(0,v.jsx)("p",{children:o}),(0,v.jsxs)("p",{className:l.model,children:[u,","]}),(0,v.jsx)("p",{children:m})]}),(0,v.jsx)("div",{children:(0,v.jsx)("p",{className:l.rentalPrice,children:_})})]}),(0,v.jsx)(f,{text:"Learn more"}),i&&(0,v.jsx)(p,{advert:r,toggleModal:function(){c((function(e){return!e}))}})]})}var x={container:"AdvertsList_container__ZhqYE",list:"AdvertsList_list__vknfo"};function g(e){var r=e.adverts;return(0,v.jsx)("div",{className:x.container,children:r&&(0,v.jsx)("ul",{className:x.list,children:r.map((function(e){return(0,v.jsx)("li",{children:(0,v.jsx)(h,{advert:e})},e.id)}))})})}function j(){var e=(0,s.useState)([]),r=(0,a.Z)(e,2),t=r[0],n=r[1];return(0,s.useEffect)((function(){o().then((function(e){n(e)}))}),[]),(0,v.jsx)(v.Fragment,{children:(0,v.jsx)(g,{adverts:t})})}}}]);
//# sourceMappingURL=992.3ad1ab22.chunk.js.map