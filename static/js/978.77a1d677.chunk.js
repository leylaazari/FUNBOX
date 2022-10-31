"use strict";(self.webpackChunkfe_hiring=self.webpackChunkfe_hiring||[]).push([[978],{2629:function(e,t,r){var n;r.d(t,{R:function(){return n}}),function(e){e[e.Search=0]="Search",e[e.Watch=1]="Watch",e[e.Favourite=2]="Favourite",e[e.Popular=3]="Popular"}(n||(n={}))},5966:function(e,t,r){var n;r.d(t,{J:function(){return n}}),function(e){e.kids="the most popular kids movies",e.year2010="the best movies from 2010",e.movie="the most popular movies"}(n||(n={}))},8884:function(e,t,r){r.d(t,{Z:function(){return v}});var n=r(2982),a=r(885),i=r(2791),s=r(4627),c=r(7430),o=r(600),u=r(2436),l=r(1357),d=r(2629),f=r(184),h=function(e){var t=e.item,r=e.toggleFavourite,n=e.toggleWatchList,a=e.type;return a===d.R.Search||a===d.R.Favourite&&t.isFavourite||a===d.R.Watch&&t.isWatchLater?(0,f.jsx)("div",{className:"row mt-5 w-100",children:(0,f.jsx)("div",{className:"col-xs-12",children:(0,f.jsx)("li",{"data-testid":"item-list",children:(0,f.jsx)("a",{href:"#","data-type":"movies","data-id":t.id,children:(0,f.jsxs)("div",{className:"d-flex flex-sm-column flex-lg-row flex-xl-row  flex-xs-column item-list",children:[(0,f.jsx)("div",{className:"left-side flex-lg-{grow|shrink}-1 ",children:(0,f.jsx)(l.Z,{"data-testid":"backdrop_path",src:t.backdrop_path,alt:t.original_title,className:"w100"})}),(0,f.jsxs)("div",{className:" right-side",children:[(0,f.jsxs)("div",{className:"d-flex",children:[(0,f.jsx)("div",{className:"w-100",children:(0,f.jsx)("h2",{className:"movie-title","data-testid":"original_title",children:t.original_title})}),(0,f.jsx)("div",{className:"flex-shrink-2 p-2",children:(0,f.jsxs)("div",{className:"d-flex",children:[a===d.R.Search||a===d.R.Favourite?t.isFavourite?(0,f.jsx)(c.Z,{className:"heart","data-testid":"heart",color:"rgb(161, 7, 7)",size:30,title:"delete from favourite",onClick:function(){return r(!1,t)}}):(0,f.jsx)(s.Z,{className:"heart","data-testid":"heart",color:"gray",size:30,title:"add to favourite",onClick:function(){return r(!0,t)}}):(0,f.jsx)(f.Fragment,{}),a===d.R.Search||a===d.R.Watch?t.isWatchLater?(0,f.jsx)(u.Z,{className:"watch","data-testid":"watch",color:"rgb(55, 129, 55)",size:30,title:"delete from watch later",onClick:function(){return n(!1,t)}}):(0,f.jsx)(o.Z,{className:"watch","data-testid":"watch",color:"gray",size:30,title:"add to watch later",onClick:function(){return n(!0,t)}}):(0,f.jsx)(f.Fragment,{})]})})]}),(0,f.jsx)("div",{className:"movie-details","data-testid":"release_date",children:t.release_date}),(0,f.jsxs)("div",{className:"movie-details","data-testid":"popularity",children:["popularity : ",t.popularity]}),(0,f.jsxs)("div",{className:"movie-details","data-testid":"vote_average",children:["vote_average : ",t.vote_average]}),(0,f.jsx)("div",{className:"movie-description","data-testid":"overview",children:t.overview})]})]})})})})}):(0,f.jsx)(f.Fragment,{})},p=r(6102),v=function(e){var t=e.items,r=e.type,s=(0,i.useState)([]),c=(0,a.Z)(s,2),o=c[0],u=c[1];(0,i.useEffect)((function(){u(t)}),[t]);var l=function(e,t){var r=(0,n.Z)(o),a=r.find((function(e){return e.id===t.id}));a&&(a.isFavourite=e,u(r),e?p.Z.addToFavouriteList(t):p.Z.deleteFromFavouriteList(t.id))},d=function(e,t){var r=(0,n.Z)(o),a=r.find((function(e){return e.id===t.id}));a&&(a.isWatchLater=e,u(r),e?p.Z.addToWatchList(t):p.Z.deleteFromWatchList(t.id))};return t&&(null===t||void 0===t?void 0:t.length)>0?(0,f.jsx)("div",{className:"row mt-5",children:(0,f.jsx)("div",{className:"col-xs-12",children:(0,f.jsx)("ul",{className:"d-flex flex-column justify-content-between align-items-center header-search-result-wrapper","data-testid":"ul-list",children:t.map((function(e){return(0,f.jsx)(h,{item:e,type:r,toggleFavourite:l,toggleWatchList:d},null===e||void 0===e?void 0:e.id)}))})})}):(0,f.jsx)("div",{className:"list-is-empty-container",children:(0,f.jsx)("div",{className:"list-is-empty",children:(0,f.jsx)("span",{"data-testid":"empty-list",children:"List is empty."})})})}},1357:function(e,t,r){var n=r(1198),a=r(7087),i=r(184);t.Z=function(e){return(0,i.jsx)(a.LazyLoadImage,{"data-testid":e["data-testid"],src:"".concat(n.Io,"/w500").concat(e.src),alt:e.alt,className:e.className,effect:"blur",width:"100%",height:"100%"})}},1198:function(e,t,r){r.d(t,{$h:function(){return a},Io:function(){return i},JA:function(){return n}});var n="https://api.themoviedb.org/3",a="71894e11fe3699efd12fc718b8a73fbb",i="https://image.tmdb.org/t/p"},6102:function(e,t,r){var n=r(2982),a=r(4165),i=r(5861),s={getFavouriteList:function(){var e=(0,i.Z)((0,a.Z)().mark((function e(){var t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=JSON.parse(localStorage.getItem("favouriteList")||"[]"),e.abrupt("return",t);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),getWatchList:function(){var e=(0,i.Z)((0,a.Z)().mark((function e(){var t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=JSON.parse(localStorage.getItem("watchList")||"[]"),e.abrupt("return",t);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),getDataFromLS:function(){var e=(0,i.Z)((0,a.Z)().mark((function e(t){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("favourite"!==t){e.next=6;break}return e.next=3,s.getFavouriteList();case 3:case 8:return e.abrupt("return",e.sent);case 6:return e.next=8,s.getWatchList();case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),addToFavouriteList:function(){var e=(0,i.Z)((0,a.Z)().mark((function e(t){var r;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(r=JSON.parse(localStorage.getItem("favouriteList")||"[]")).push(t),localStorage.setItem("favouriteList",JSON.stringify(r));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),addToWatchList:function(){var e=(0,i.Z)((0,a.Z)().mark((function e(t){var r;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(r=JSON.parse(localStorage.getItem("watchList")||"[]")).push(t),localStorage.setItem("watchList",JSON.stringify(r));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),deleteFromFavouriteList:function(){var e=(0,i.Z)((0,a.Z)().mark((function e(t){var r;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=JSON.parse(localStorage.getItem("favouriteList")||"[]"),localStorage.setItem("favouriteList",JSON.stringify((0,n.Z)(r.filter((function(e){return e.id!==t})))));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),deleteFromWatchList:function(){var e=(0,i.Z)((0,a.Z)().mark((function e(t){var r;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=JSON.parse(localStorage.getItem("watchList")||"[]"),localStorage.setItem("watchList",JSON.stringify((0,n.Z)(r.filter((function(e){return e.id!==t})))));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};t.Z=s},8663:function(e,t,r){r.d(t,{Z:function(){return p}});var n=r(4165),a=r(5861),i=r(4569),s=r.n(i),c=r(9085),o=r(1198),u=1e5;function l(e,t,r,n,a,i){return d.apply(this,arguments)}function d(){return(d=(0,a.Z)((0,n.Z)().mark((function e(t,r,a,i,l,d){var f,h,p,v,m;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(window.navigator.onLine){e.next=3;break}return c.Am.error("check your internet connection!"),e.abrupt("return",Promise.reject({isTimeout:!1,error:12029}));case 3:return f=null,h=s().CancelToken,p=h.source(),d&&d(p),f=setTimeout((function(){p.cancel()}),u),v=o.JA,e.prev=9,e.next=12,s()({url:"".concat(v).concat(t),method:"post"===r&&i?"POST":r,params:a});case 12:if(!((m=e.sent).status>=200&&m.status<300)){e.next=18;break}return f&&clearTimeout(f),e.abrupt("return",m.data);case 18:return f&&clearTimeout(f),c.Am.error("server error"),e.abrupt("return",Promise.reject({isTimeout:!1,error:101}));case 21:e.next=28;break;case 23:return e.prev=23,e.t0=e.catch(9),f&&clearTimeout(f),c.Am.error("server error"),e.abrupt("return",Promise.reject({isTimeout:s().isCancel(e.t0),response:e.t0,status:e.t0.response&&e.t0.response.status}));case 28:case"end":return e.stop()}}),e,null,[[9,23]])})))).apply(this,arguments)}var f=r(5966),h={getHighestRatedMovies:function(){var e=(0,a.Z)((0,n.Z)().mark((function e(){var t;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l("/discover/movie/","GET",{sort_by:"popularity.desc",api_key:o.$h});case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),getHighestRatedChild:function(){var e=(0,a.Z)((0,n.Z)().mark((function e(){var t;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l("/discover/movie/","GET",{certification_country:"US","certification.lte":"G",sort_by:"popularity.desc",api_key:o.$h});case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),getHighestRatedMovies2010:function(){var e=(0,a.Z)((0,n.Z)().mark((function e(){var t;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l("/discover/movie/","GET",{primary_release_year:"2010",sort_by:"vote_average.desc",api_key:o.$h});case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),getHighestRated:function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t!==f.J.movie){e.next=6;break}return e.next=3,h.getHighestRatedMovies();case 3:case 9:case 14:return e.abrupt("return",e.sent);case 6:if(t!==f.J.kids){e.next=12;break}return e.next=9,h.getHighestRatedChild();case 12:return e.next=14,h.getHighestRatedMovies2010();case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),getSearchByName:function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){var r;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l("/search/movie/","GET",{query:t,api_key:o.$h});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},p=h},2978:function(e,t,r){r.r(t),r.d(t,{default:function(){return w}});var n=r(4165),a=r(5861),i=r(885),s=r(2791),c=r(1413),o=r(5290),u=r(184),l=function(e){var t=e.handleSubmitForm,r=(0,o.cI)({}),n=r.register,a=r.handleSubmit,i=(r.formState.errors,a((function(e){t(e)})));return(0,u.jsx)("div",{className:"row",children:(0,u.jsx)("div",{className:"col-xs-12 col-sm-12 col-md-12 col-lg-12",children:(0,u.jsx)("div",{className:"search-result-wrapper",children:(0,u.jsx)("div",{className:"search-suggest-gradient",children:(0,u.jsx)("form",{className:"search-suggest-form",onSubmit:i,children:(0,u.jsx)("div",{className:"search-result-input-wrapper",children:(0,u.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:[(0,u.jsx)("div",{className:"flex-grow-2 w-100",children:(0,u.jsx)("input",(0,c.Z)({"data-testid":"input-search",type:"searchText",id:"js__search-text",placeholder:"Search in film, actor, ..."},n("searchText",{maxLength:500})))}),(0,u.jsx)("div",{className:"flex-grow-1",children:(0,u.jsx)("button",{"data-testid":"btn-search",type:"submit",className:"c-btn-Search ml-5 mr-5 text-white",children:"Search"})})]})})})})})})})},d=r(8884),f=r(8663),h=r(5646),p=r(2629),v=r(2982),m=r(6102),x=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){var r,a,i;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.Z.getFavouriteList();case 2:return r=e.sent,e.next=5,m.Z.getWatchList();case 5:return a=e.sent,i=(0,v.Z)(t),r&&t.filter((function(e){return r.some((function(t){return t.id===e.id}))})).forEach((function(e){var t=i.find((function(t){return t.id===e.id}));t&&(t.isFavourite=!0)})),a&&t.filter((function(e){return a.some((function(t){return t.id===e.id}))})).forEach((function(e){var t=i.find((function(t){return t.id===e.id}));t&&(t.isWatchLater=!0)})),e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=x,Z=function(){var e=(0,s.useState)([]),t=(0,i.Z)(e,2),r=t[0],c=t[1],o=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){var r,a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.Z.getSearchByName(t.searchText);case 2:if(!(r=e.sent)){e.next=12;break}return a=null===r||void 0===r?void 0:r.results.filter((function(e){return null!=e.backdrop_path})),e.t0=c,e.next=8,g(a);case 8:e.t1=e.sent,(0,e.t0)(e.t1),e.next=13;break;case 12:c([]);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(l,{handleSubmitForm:o}),(0,u.jsx)(s.Suspense,{fallback:(0,u.jsx)(h.Z,{}),children:r&&(0,u.jsx)(d.Z,{items:r,type:p.R.Search})})]})},w=function(){return(0,u.jsx)(Z,{})}}}]);
//# sourceMappingURL=978.77a1d677.chunk.js.map