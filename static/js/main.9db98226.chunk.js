(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{10:function(e,t,a){e.exports={Overlay:"Modal_Overlay__2SHwb",Modal:"Modal_Modal__2YcKR",Image:"Modal_Image__1AKVS"}},23:function(e,t,a){e.exports={App:"App_App__1Z-fl"}},28:function(e,t,a){e.exports={imageGallery:"ImageGallery_imageGallery__178sH"}},29:function(e,t,a){e.exports={imageGalleryItemImage:"ImageGalleryItem_imageGalleryItemImage__2quHt"}},30:function(e,t,a){e.exports={button:"Button_button__jkpZD"}},38:function(e,t,a){},5:function(e,t,a){e.exports={searchbar:"Searchbar_searchbar__1woXI",searchForm:"Searchbar_searchForm__3yf7C",searchFormButton:"Searchbar_searchFormButton__1wPnd",searchFormButtonLabel:"Searchbar_searchFormButtonLabel__2bxQj",searchFormInput:"Searchbar_searchFormInput__3LvT0"}},80:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(22),o=a.n(r),s=(a(38),a(13)),i=a(4),u=a(23),l=a.n(u),m=(a(39),a(12)),b=a.n(m),j=a(24),h=a(25),g=a.n(h),p=function(){var e=Object(j.a)(b.a.mark((function e(t){var a,n,c,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.images,n=t.pageNumber,c=void 0===n?1:n,"https://pixabay.com/api/","photo","horizontal","12","23000349-69c2b90ac6d14094754d4ad57",e.next=8,g.a.get("".concat("https://pixabay.com/api/","?image_type=").concat("photo","&orientation=").concat("horizontal","&q=").concat(a,"&page=").concat(c,"&per_page=").concat("12","&key=").concat("23000349-69c2b90ac6d14094754d4ad57"));case 8:return r=e.sent,e.abrupt("return",r);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=a(26),f=a(27),O=a(33),_=a(32),x=a(5),v=a.n(x),y=a(1),I=function(e){Object(O.a)(a,e);var t=Object(_.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={images:""},e.change=function(t){e.setState({images:t.currentTarget.value.toLowerCase()})},e.submit=function(t){t.preventDefault(),""!==e.state.images.trim()&&(e.props.onSubmit(e.state),e.reset())},e.reset=function(){e.setState({images:""})},e}return Object(f.a)(a,[{key:"render",value:function(){return Object(y.jsx)("div",{children:Object(y.jsx)("header",{className:v.a.searchbar,children:Object(y.jsxs)("form",{className:v.a.searchForm,onSubmit:this.submit,children:[Object(y.jsx)("button",{type:"submit",className:v.a.searchFormButton,children:Object(y.jsx)("span",{className:v.a.searchFormButtonLabel,children:"Search"})}),Object(y.jsx)("input",{className:v.a.searchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:this.state.images,onChange:this.change})]})})})}}]),a}(n.Component),S=I,k=a(28),w=a.n(k),F=a(29),C=a.n(F),N=function(e){var t=e.cards,a=e.onClickImage;return t.map((function(e){var t=e.id,n=e.webformatURL,c=e.tags,r=e.largeImageURL;return Object(y.jsx)("li",{children:Object(y.jsx)("img",{src:n,alt:c,className:C.a.imageGalleryItemImage,onClick:function(){return a(r,c)}})},t)}))},L=function(e){var t=e.cards,a=e.onClickImage;return Object(y.jsx)("ul",{className:w.a.imageGallery,children:Object(y.jsx)(N,{cards:t,onClickImage:a})})},B=a(30),G=a.n(B),M=function(e){var t=e.onClick;return Object(y.jsx)("button",{type:"button",className:G.a.button,onClick:t,children:Object(y.jsx)("span",{children:"Load more"})})},A=a(10),E=a.n(A),R=function(e){var t=e.toggle,a=e.largeImage,c=e.tags;Object(n.useEffect)((function(){return window.addEventListener("keydown",r),function(){window.removeEventListener("keydown",r)}}),[t]);var r=function(e){"Escape"===e.code&&t()};return Object(y.jsx)("div",{className:E.a.Overlay,onClick:function(e){e.currentTarget===e.target&&t()},children:Object(y.jsx)("div",{className:E.a.Modal,children:Object(y.jsx)("img",{src:a,alt:c,className:E.a.Image})})})},T=a(31),D=a.n(T),H=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),o=Object(i.a)(r,2),u=o[0],m=o[1],b=Object(n.useState)(""),j=Object(i.a)(b,2),h=j[0],g=j[1],d=Object(n.useState)(""),f=Object(i.a)(d,2),O=f[0],_=f[1],x=Object(n.useState)(1),v=Object(i.a)(x,2),I=v[0],k=v[1],w=Object(n.useState)(!1),F=Object(i.a)(w,2),C=F[0],N=F[1],B=Object(n.useState)(!1),G=Object(i.a)(B,2),A=G[0],E=G[1],T=Object(n.useState)(!1),H=Object(i.a)(T,2),q=H[0],z=H[1],J=Object(n.useRef)(!0);Object(n.useEffect)((function(){J.current?J.current=!1:(N(!0),p({images:u,pageNumber:I}).then((function(e){c((function(t){return[].concat(Object(s.a)(t),Object(s.a)(e.data.hits))}))})).catch((function(e){return console.log(e)})).finally((function(){N(!1)})))}),[u,I]);return a.length>11&&!1===q?z(!0):a.length<12&&!0===q&&z(!1),Object(y.jsxs)("div",{className:l.a.App,children:[Object(y.jsx)(S,{onSubmit:function(e){var t=e.images;c([]),m(t),g(""),_(""),k(1),z(!1)}}),C&&Object(y.jsx)(D.a,{type:"ThreeDots",color:"#00BFFF",height:100,width:100,timeout:3e3}),Object(y.jsx)(L,{cards:a,onClickImage:function(e,t){g(e),_(t),E(!A)}}),q&&Object(y.jsx)(M,{onClick:function(){return k((function(e){return e+1}))}}),A&&Object(y.jsx)(R,{largeImage:h,tags:O,toggle:function(){return E(!A)}})]})};o.a.render(Object(y.jsx)(c.a.StrictMode,{children:Object(y.jsx)(H,{})}),document.getElementById("root"))}},[[80,1,2]]]);
//# sourceMappingURL=main.9db98226.chunk.js.map