(this.webpackJsonpmoviefavz=this.webpackJsonpmoviefavz||[]).push([[0],{149:function(e){e.exports=JSON.parse('{"primary":"#db0000","primaryDark":"#831010","secondary":"#564d4d","dark":"#1d1d1d","text":"#7f8c8d","textSecondary":"#95a5a6","silver":"#bdc3c7","grey":"#d9d9d9","clouds":"#ecf0f1","light":"#ffffff","success":"#2ecc71","warning":"#f1c40f","error":"#db0000"}')},168:function(e,t,n){e.exports=n.p+"static/media/home-banner-bg-2.b5875739.jpg"},174:function(e,t,n){e.exports=n(276)},186:function(e,t,n){},276:function(e,t,n){"use strict";n.r(t);n(175);var a=n(0),r=n.n(a),i=n(9),o=n.n(i),c=n(43),l=n(11),s=n(14);function u(){var e=Object(s.a)(["\n  * {\n    box-sizing: border-box;\n  }\n\n  body {\n    margin: 0;\n    padding: 0;\n    min-height: 100vh;\n    font-family: ",", sans-serif;\n  }\n"]);return u=function(){return e},e}var m=Object(l.b)(u(),(function(e){return e.theme.fonts.primary})),d=n(69),v=n(149),f={colors:Object(d.a)({},v),fonts:{primary:"Poppins"},layouts:{bannerHeight:"55vh"}};function g(){var e=Object(s.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n"]);return g=function(){return e},e}Object(l.c)(g()),n(186);var h={baseUrl:"https://www.omdbapi.com"},p={inactive:"inactive",pending:"pending",done:"done",error:"error"},b={favorites:"movie_favz_favorites",findings:"movie_favz_findings"},E={isProduction:!0,appBaseUrl:"https://poviolabs.github.io/moviefavz",appBaseName:"/moviefavz"},y=n(75),j=n(33),x=n(58),O=n(102),w=n(48),k=n(45),P=n.n(k),M=n(73),z=n(150),I=n(151),F=n(5),S=n(59),C=n(117),R=n.n(C);R.a.defaults.baseURL=h.baseUrl,R.a.defaults.headers.common["Content-Type"]="application/json";var B=function(){var e=Object(M.a)(P.a.mark((function e(t){var n,a,r,i,o,c,l,s,u,m;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.url,a=t.method,r=void 0===a?"GET":a,i=t.params,o=void 0===i?{}:i,e.prev=1,"1cddbc12",(c={url:n,method:r}).params=Object(d.a)(Object(d.a)({},o),{},{apiKey:"1cddbc12"}),e.prev=6,e.next=9,R.a.request(c);case 9:return l=e.sent,s=l.data,u=l.status,m=!!s.Response&&JSON.parse(s.Response.toLowerCase()),s.Response=m,s.Status=m?u:400,e.abrupt("return",s);case 18:throw e.prev=18,e.t0=e.catch(6),new Error("API request failed: ".concat(e.t0.messagee));case 21:e.next=24;break;case 23:throw new Error("No OMDb API key specified in .env file under REACT_APP_OMDB_API_KEY key.");case 24:e.next=29;break;case 26:e.prev=26,e.t1=e.catch(1),console.error(e.t1);case 29:case"end":return e.stop()}}),e,null,[[1,26],[6,18]])})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=Object(M.a)(P.a.mark((function e(t){var n,a,r,i,o,c,l,s,u,m,d;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.query,a=t.type,r=void 0===a?"movie":a,i=t.page,o=void 0===i?1:i,e.prev=1,e.next=4,B({url:"/",params:{s:"".concat(n,"*"),t:r,page:o}});case 4:if(c=e.sent,l=c.Search,s=c.Response,u=c.Status,m=c.totalResults,d=c.Error,!s){e.next=14;break}return e.abrupt("return",{status:u,data:Object(w.a)(l),totalResults:parseInt(m),nextPage:o+1});case 14:return e.abrupt("return",{status:u,data:[],error:d});case 15:e.next=20;break;case 17:e.prev=17,e.t0=e.catch(1),console.log("Request for searchMovies has failed.",e.t0.message);case 20:case"end":return e.stop()}}),e,null,[[1,17]])})));return function(t){return e.apply(this,arguments)}}(),T=function(){var e=Object(M.a)(P.a.mark((function e(t){var n,a,r,i,o,c;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.id,e.prev=1,e.next=4,B({url:"/",params:{i:n}});case 4:if(a=e.sent,r=a.Response,i=a.Status,o=a.Error,c=Object(S.a)(a,["Response","Status","Error"]),!r){e.next=13;break}return e.abrupt("return",{status:i,data:c});case 13:return e.abrupt("return",{status:i,data:null,error:o});case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(1),console.log("Request for searchMovies has failed.",e.t0.message);case 19:case"end":return e.stop()}}),e,null,[[1,16]])})));return function(t){return e.apply(this,arguments)}}(),A=function(e){return e&&e>=200&&e<300},L=function(){function e(){var t=this;Object(z.a)(this,e),this.movies=[],this.singleMoviesById={},this.query="",this.totalResults=null,this.state=p.inactive,this.searching=p.inactive,this.searchResults=[],this.searchNextPage=null,this.error=null,this.latestFindings=[],this.favorites=[],this.searchMovies=function(){var e=Object(M.a)(P.a.mark((function e(n){var a,r,i,o,c,l,s;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.query,t.searching=p.pending,e.prev=2,e.next=5,N({query:a});case 5:if(r=e.sent,i=r.data,o=r.nextPage,c=r.totalResults,l=r.status,s=r.error,!A(l)){e.next=15;break}Object(F.runInAction)((function(){t.query=a,t.searchResults=i,t.totalResults=c,t.searchNextPage=o,t.searching=p.done})),e.next=16;break;case 15:throw new Error(s);case 16:e.next=22;break;case 18:e.prev=18,e.t0=e.catch(2),console.error(e.t0),Object(F.runInAction)((function(){t.error=e.t0.message,t.searching=p.error}));case 22:case"end":return e.stop()}}),e,null,[[2,18]])})));return function(t){return e.apply(this,arguments)}}(),this.searchMoviesNextPage=function(){var e=Object(M.a)(P.a.mark((function e(n){var a,r,i,o,c,l;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.page,t.searching=p.pending,e.prev=2,e.next=5,N({query:t.query,page:a});case 5:if(r=e.sent,i=r.data,o=r.nextPage,c=r.status,l=r.error,!A(c)){e.next=14;break}Object(F.runInAction)((function(){var e;(e=t.searchResults).push.apply(e,Object(w.a)(i)),t.searchNextPage=o,t.searching=p.done})),e.next=15;break;case 14:throw new Error(l);case 15:e.next=21;break;case 17:e.prev=17,e.t0=e.catch(2),console.error(e.t0),Object(F.runInAction)((function(){t.error=e.t0.message,t.searching=p.error}));case 21:case"end":return e.stop()}}),e,null,[[2,17]])})));return function(t){return e.apply(this,arguments)}}(),this.clearSearchResults=function(){t.searchResults=[],t.searchNextPage=null,t.totalResults=null,t.query=""},this.fetchMovieById=function(){var e=Object(M.a)(P.a.mark((function e(n){var a,r,i,o,c;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.id,t.state=p.pending,e.prev=2,e.next=5,T({id:a});case 5:if(r=e.sent,i=r.data,o=r.status,c=r.error,!A(o)){e.next=14;break}t.singleMoviesById=Object(d.a)(Object(d.a)({},t.singleMoviesById),{},Object(O.a)({},i.imdbID,i)),t.state=p.done,e.next=15;break;case 14:throw new Error(c);case 15:e.next=21;break;case 17:e.prev=17,e.t0=e.catch(2),console.error(e.t0),Object(F.runInAction)((function(){t.error=e.t0.message,t.state=p.error}));case 21:case"end":return e.stop()}}),e,null,[[2,17]])})));return function(t){return e.apply(this,arguments)}}(),this.addToLatestFidings=function(e){var n=e.id,a=e.user;t.latestFindings.includes(n)||(t.latestFindings=[n].concat(Object(w.a)(t.latestFindings.splice(0,3))),localStorage.setItem("".concat(b.findings,"_").concat(a),JSON.stringify(t.latestFindings)))},this.toggleFavoriteMovie=function(e){var n=e.id,a=e.user;t.favorites.includes(n)?t.favorites=Object(w.a)(t.favorites.filter((function(e){return e!==n}))):(Object.keys(t.singleMoviesById).includes(n)||t.fetchMovieById({id:n}),t.favorites=[n].concat(Object(w.a)(t.favorites))),localStorage.setItem("".concat(b.favorites,"_").concat(a),JSON.stringify(t.favorites))},this.removeErrors=function(){t.searching=p.inactive,t.state=p.inactive,t.error=null},this.initializeFromStorage=function(e){var n=e.user,a=localStorage.getItem("".concat(b.favorites,"_").concat(n)),r=localStorage.getItem("".concat(b.findings,"_").concat(n));t.favorites=JSON.parse(a)||[],t.latestFindings=JSON.parse(r)||[],[].concat(Object(w.a)(t.favorites),Object(w.a)(t.latestFindings)).forEach((function(e){t.fetchMovieById({id:e})}))}}return Object(I.a)(e,[{key:"hasSearchResults",get:function(){return this.searchResults.length>0}},{key:"hasNextPage",get:function(){return this.totalResults>this.searchResults.length*(this.searchNextPage-1)}},{key:"latestFindingsPreviews",get:function(){var e=this;return Object.keys(this.singleMoviesById).filter((function(t){return e.latestFindings.includes(t)})).reduce((function(t,n){var a=e.singleMoviesById[n];return[{Title:a.Title,Poster:a.Poster,Type:a.Type,Year:a.Year,imdbID:a.imdbID}].concat(Object(w.a)(t))}),[])}},{key:"favoritesPreviews",get:function(){var e=this;return Object.keys(this.singleMoviesById).filter((function(t){return e.favorites.includes(t)})).reduce((function(t,n){var a=e.singleMoviesById[n],r=a.Title,i=a.Poster,o=a.Type,c=a.Year,l=a.imdbID;return[].concat(Object(w.a)(t),[{Title:r,Poster:i,Type:o,Year:c,imdbID:l}])}),[])}}]),e}();Object(F.decorate)(L,{movies:F.observable,state:F.observable,searching:F.observable,searchResults:F.observable,searchNextPage:F.observable,error:F.observable,latestFindings:F.observable,latestFindingsPreviews:F.computed,favoritesPreviews:F.computed,favorites:F.observable,singleMoviesById:F.observable,hasNextPage:F.computed,hasSearchResults:F.computed,searchMovies:F.action,searchMoviesNextPage:F.action,clearSearchResults:F.action,fetchMovieById:F.action,toggleFavoriteMovie:F.action,addToLatestFidings:F.action,removeErrors:F.action});var Y=L,q=r.a.createContext({moviesStore:new Y}),D=function(){return r.a.useContext(q)},_=n(152),H=n.n(_),J=n(279),W=n(282),U=n(289),V=n(170),G=n(287),K=n(290);function Q(){var e=Object(s.a)(["\n  max-width: 1024px;\n  margin: 0 auto;\n  padding: 0 50px;\n\n  @media screen and (max-width: 768px) {\n    padding: 0 16px;\n  }\n"]);return Q=function(){return e},e}var Z=l.d.div(Q()),X=function(e){var t=e.children,n=Object(S.a)(e,["children"]);return r.a.createElement(Z,n,t)};function $(){var e=Object(s.a)(["\n  padding: 45px 0;\n"]);return $=function(){return e},e}var ee=l.d.section($()),te=function(e){var t=e.children,n=Object(S.a)(e,["children"]);return r.a.createElement(ee,n,t)};function ne(){var e=Object(s.a)(["\n  display: grid;\n  grid-template-columns: repeat(\n    auto-fill,\n    minmax(\n      ",",\n      1fr\n    )\n  );\n  grid-gap: ",";\n  margin: "," 0;\n\n  ",";\n"]);return ne=function(){return e},e}function ae(){var e=Object(s.a)(["\n  @media screen and (max-width: 768px) {\n    grid-template-columns: repeat(\n      auto-fill,\n      minmax(",", 1fr)\n    );\n  }\n"]);return ae=function(){return e},e}var re=Object(l.c)(ae(),(function(e){return e.minColWidth.sm})),ie=l.d.div(ne(),(function(e){var t=e.minColWidth;return"object"===typeof t?t.lg:t}),(function(e){return e.gutter}),(function(e){return e.outerSpacing}),(function(e){return"object"===typeof e.minColWidth&&re})),oe=function(e){var t=e.children,n=Object(S.a)(e,["children"]);return r.a.createElement(ie,n,t)};oe.defaultProps={minColWidth:"256px",gutter:"1rem",outerSpacing:"1rem"};var ce=oe,le=function(e){var t=e.label,n=e.emoji;return r.a.createElement("span",{role:"img","aria-label":t},n)};le.defaultProps={label:"Emoji"};var se=le;function ue(){var e=Object(s.a)(["\n  button {\n    width: 100%;\n  }\n"]);return ue=function(){return e},e}function me(){var e=Object(s.a)(["\n  &.ant-typography {\n    color: ",";\n  }\n"]);return me=function(){return e},e}function de(){var e=Object(s.a)(["\n  background-image: url(",");\n  background-size: cover;\n  background-position: center center;\n  box-shadow: inset 0 0 0 50vw\n    ",";\n  min-height: ",";\n  margin-bottom: 45px;\n\n  .banner-container {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    height: ",";\n  }\n"]);return de=function(){return e},e}var ve=W.a.Title,fe=G.a.Search,ge=l.d.div(de(),(function(e){return e.image}),(function(e){var t=e.theme;return Object(V.a)(.6,t.colors.dark)}),(function(e){return e.theme.layouts.bannerHeight}),(function(e){return e.theme.layouts.bannerHeight})),he=Object(l.d)(ve)(me(),(function(e){return e.theme.colors.light})),pe=Object(l.d)(fe)(ue()),be=Object(x.a)((function(e){var t=e.image,n=D().moviesStore;return r.a.createElement(ge,{image:t},r.a.createElement(X,{className:"banner-container"},r.a.createElement(he,null,r.a.createElement(se,{label:"popcorn",emoji:"\ud83c\udf7f"})," Looking for a movie?"),r.a.createElement(he,{level:3},"Find and save your favorite movie with MovieFavz."),r.a.createElement(pe,{onSearch:function(e){var t;(t=e)?n.searchMovies({query:t}):n.clearSearchResults()},size:"large",enterButton:"Search",placeholder:"Your favorite movie title...",allowClear:!0,loading:n.searching===p.pending,prefix:r.a.createElement(K.a,null)})))})),Ee=n(128),ye=n(281),je=n(291),xe=n(292),Oe=function(e){var t=e.poster,n=e.title,a=Object(S.a)(e,["poster","title"]),i=r.a.useMemo((function(){return"N/A"===t?"https://via.placeholder.com/213x260.png?text=Poster+not+provided":t}),[t]);return r.a.createElement("img",Object.assign({alt:n,src:i},a))};function we(){var e=Object(s.a)(["\n  width: 100%;\n  position: relative;\n\n  .ant-card-cover {\n    height: 260px;\n\n    @media screen and (max-width: 768px) {\n      height: 220px;\n    }\n\n    img {\n      object-fit: cover;\n      width: 100%;\n      height: 100%;\n    }\n  }\n\n  .ant-card-meta-description {\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    overflow: hidden;\n  }\n"]);return we=function(){return e},e}function ke(){var e=Object(s.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: ",";\n  background-color: ",";\n  padding: 0.75rem;\n  border-radius: 50%;\n  position: absolute;\n  top: 0.5rem;\n  right: 0.5rem;\n  font-size: 18px;\n  box-shadow: 0 1px 2px -2px rgba(0, 0, 0, 0.16),\n    0 3px 6px 0 rgba(0, 0, 0, 0.12), 0 5px 12px 4px rgba(0, 0, 0, 0.09);\n"]);return ke=function(){return e},e}var Pe=ye.a.Meta,Me=l.d.div(ke(),(function(e){return e.theme.colors.primary}),(function(e){return e.theme.colors.light})),ze=Object(l.d)(ye.a)(we()),Ie=function(e){var t=e.Title,n=e.Poster,a=e.Type,i=e.Year,o=e.imdbID,c=e.onPress,l=e.favorited,s=e.onFavoritePress;return r.a.createElement(ze,{hoverable:!0,cover:r.a.createElement(Oe,{title:t,poster:n}),onClick:function(){c&&c(o)}},r.a.createElement(Me,{onClick:function(e){e.stopPropagation(),s&&s(o)}},l?r.a.createElement(je.a,null):r.a.createElement(xe.a,null)),r.a.createElement(Pe,{title:t,description:"".concat(i," \u2022 ").concat(a)}))},Fe=n(283),Se=n(284),Ce=n(96),Re=n(57),Be=n(79),Ne=n(50),Te=n(277),Ae=n(293);function Le(){var e=Object(s.a)(["\n  font-size: 0.85rem;\n  color: ",";\n"]);return Le=function(){return e},e}var Ye=Object(l.d)(W.a.Paragraph)(Le(),(function(e){return e.theme.colors.textSecondary})),qe=function(e){var t=e.source,n=e.value;return r.a.createElement(Ye,null,r.a.createElement("strong",null,t,":")," ",n)};function De(){var e=Object(s.a)(["\n  font-size: 0.85rem;\n  color: ",";\n"]);return De=function(){return e},e}function _e(){var e=Object(s.a)(["\n  object-fit: cover;\n  width: 100%;\n  height: auto;\n  margin-bottom: 24px;\n"]);return _e=function(){return e},e}var He=W.a.Title,Je=W.a.Paragraph,We=Object(l.d)(Oe)(_e()),Ue=Object(l.d)(Je)(De(),(function(e){return e.theme.colors.textSecondary})),Ve=function(e){var t,n=e.visible,a=e.loading,i=e.movie,o=e.favorited,c=e.onClose,l=e.onFavoritesPress;return r.a.createElement(Fe.a,{title:null===i||void 0===i?void 0:i.Title,visible:n,onCancel:c,footer:null,width:720},a?r.a.createElement(Se.a,{paragraph:{rows:10},active:!0}):i&&r.a.createElement(r.a.Fragment,null,r.a.createElement(Ce.a,{gutter:16},r.a.createElement(Re.a,{sm:{span:24},lg:{span:10}},r.a.createElement(We,{poster:i.Poster,title:i.Title}),r.a.createElement(Be.a,{placement:"top",title:o?"Click to remove from favorites":""},r.a.createElement(Ne.a,{type:"primary",block:!0,icon:o?r.a.createElement(je.a,null):r.a.createElement(xe.a,null),size:"large",onClick:function(){return l(i.imdbID)}},o?"Favorited":"Add to Favorites")),r.a.createElement(Ne.a,{icon:r.a.createElement(Ae.a,null),block:!0,size:"large",onClick:function(){return window.open("https://www.imdb.com/title/".concat(i.imdbID,"/"),"_blank")}},"View on IMDB"),r.a.createElement(Te.a,null)),r.a.createElement(Re.a,{sm:{span:24},lg:{span:14}},r.a.createElement(He,{level:3},i.Title," (",i.Year,")"),r.a.createElement(Ue,null,"Awards: ",i.Awards),r.a.createElement(Je,null,i.Plot),r.a.createElement(Te.a,null),r.a.createElement(He,{level:4},"Genres"),r.a.createElement(Ue,null,i.Genre),r.a.createElement(Te.a,null),r.a.createElement(He,{level:4},"Cast"),r.a.createElement(Ue,null,r.a.createElement("strong",null,"Actors:")," ",i.Actors),r.a.createElement(Ue,null,r.a.createElement("strong",null,"Director:")," ",i.Director),r.a.createElement(Te.a,null),r.a.createElement(He,{level:4},"Ratings"),null===(t=i.Ratings)||void 0===t?void 0:t.map((function(e){var t=e.Source,n=e.Value;return r.a.createElement(qe,{key:t,source:t,value:n})})),r.a.createElement(qe,{source:"IMDB Rating",value:"".concat(i.imdbRating," (").concat(i.imdbVotes," votes)")})))))},Ge=function(e){return a.createElement("svg",Object.assign({"data-name":"Layer 1",width:462,height:265,viewBox:"0 0 924.256 530.591"},e),a.createElement("path",{d:"M16.126 159.262a12.416 12.416 0 01-15.82-14.588C7.53 114.622 34.998 41.128 135.064 10.217c43.345-13.39 84.914-13.619 123.5-.685 31.744 10.596 52.817 27.178 62.897 35.193a12.313 12.313 0 012.017 17.296l-.076.095a12.603 12.603 0 01-17.56 1.994c-18.264-14.39-73.685-58.105-163.508-30.358-87.706 27.093-111.53 90.466-117.71 116.393a12.231 12.231 0 01-8.498 9.117z",fill:"#db0000"}),a.createElement("path",{d:"M288.866 329.481a12.346 12.346 0 01-3.067.577c-78.175 4.21-127.914-60.736-129.956-63.443l-.378-.625c-1.247-1.934-31.342-47.723-18.093-84.088 6.086-16.625 19.544-28.294 40.116-34.65 19.133-5.91 34.79-4.162 48.116 5.354 10.926 7.753 17.93 19.315 24.717 30.48 14.116 23.182 22.767 34.977 49.6 28.172 11.78-2.99 17.282-12.201 19.795-19.377 6.766-19.524.77-46.142-15.096-66.28-20.498-26.126-77.86-69.52-148.635-47.658-30.223 9.337-54.957 27.735-71.521 53.068-13.722 21.025-21.7 47.137-21.874 71.488-.276 45.34 36.884 104.991 37.236 105.532a12.29 12.29 0 01-3.906 16.936l-.114.07a12.584 12.584 0 01-17.235-3.856c-1.677-2.728-41.356-66.33-41.036-118.732.445-56.8 34.961-124.589 111.154-148.125 35.218-10.88 72.229-9.051 107.058 5.229 26.995 11.136 51.979 29.57 68.497 50.62 21.097 26.867 28.53 62.037 18.926 89.487-6.403 18.3-19.66 30.926-37.276 35.44-45.913 11.68-63.9-17.726-77.018-39.177-13.47-21.99-20.92-32.301-44.202-25.11-12.783 3.95-20.659 10.277-23.971 19.369-4.507 12.428-.236 28.357 4.141 39.525l.137.35a100.946 100.946 0 0025.613 37.252c18.012 16.633 51.451 40.347 94.07 38.06a12.309 12.309 0 0113.048 11.522l.007.118a12.579 12.579 0 01-8.853 12.472z",fill:"#db0000"}),a.createElement("path",{d:"M194.068 352.83a12.616 12.616 0 01-9.87-1.031c-38.558-21.846-65.625-51.229-85.116-92.41l-.079-.255c-12.284-27.458-19.679-69.409-3.367-104.866 12.042-26.162 34.646-44.551 67.07-54.567 38.35-11.847 74.06-3.125 103.367 25.102a153.17 153.17 0 0131.984 45.299 12.516 12.516 0 01-23.03 9.803 128.26 128.26 0 00-26.967-37.76c-22.59-21.492-48.85-27.847-78.142-18.798-25.313 7.819-42.743 21.642-51.666 41.091-12.867 27.994-6.242 62.95 3.37 84.463 17.187 36.423 41.026 62.258 74.962 81.451a12.255 12.255 0 014.654 16.695l-.095.166a12.569 12.569 0 01-7.075 5.617z",fill:"#db0000"}),a.createElement("circle",{cx:198.128,cy:213.768,r:15.949,fill:"#e6e6e6"}),a.createElement("path",{d:"M485.703 408.52a6.57 6.57 0 01-.984-.074 6.46 6.46 0 01-4.26-2.57l-8.761-11.878a6.499 6.499 0 011.373-9.09l74.899-55.24a6.5 6.5 0 019.09 1.374l8.76 11.878a6.5 6.5 0 01-1.372 9.09l-74.9 55.24a6.454 6.454 0 01-3.845 1.27z",fill:"#db0000"}),a.createElement("path",{d:"M538.897 364.044l-11.464-15.543a6 6 0 011.268-8.39l43.86-38.43a6 6 0 018.39 1.267l20.964 25.043a6 6 0 01-1.267 8.39l-53.361 28.93a6 6 0 01-8.39-1.267z",fill:"#2f2e41"}),a.createElement("path",{d:"M609.373 530.252h-14.758a6.508 6.508 0 01-6.5-6.5V400.737a6.508 6.508 0 016.5-6.5h14.758a6.508 6.508 0 016.5 6.5v123.015a6.508 6.508 0 01-6.5 6.5zM638.566 530.252h-14.76a6.508 6.508 0 01-6.5-6.5V400.737a6.508 6.508 0 016.5-6.5h14.76a6.508 6.508 0 016.5 6.5v123.015a6.508 6.508 0 01-6.5 6.5z",fill:"#db0000"}),a.createElement("path",{fill:"#3f3d56",d:"M452.923 528.351h324.033v2.241H452.923z"}),a.createElement("circle",{cx:610.216,cy:195.742,r:53.519,fill:"#db0000"}),a.createElement("path",{d:"M693.072 467.175l-30.994-137.646v-32.521a8 8 0 00-8-8h-29.69v-20.913a8 8 0 00-8-8h-16a8 8 0 00-8 8v20.913h-29.69a8 8 0 00-8 8v171.087a7.968 7.968 0 00.584 2.993 7.834 7.834 0 007.377 6.206l125.424 4.182c7.496.197 10.897-9.553 4.99-14.301zM610.73 214.757c-3.305-.093-7.42-.208-10.588-2.524a8.131 8.131 0 01-3.2-6.07 5.471 5.471 0 011.86-4.495c1.657-1.399 4.076-1.726 6.678-.961l-2.7-19.727 1.983-.271 3.172 23.19-1.654-.759c-1.92-.88-4.552-1.328-6.188.055a3.513 3.513 0 00-1.152 2.896 6.143 6.143 0 002.38 4.527c2.467 1.802 5.747 2.035 9.466 2.139zM582.21 182.682h10.771v2H582.21zM616.21 182.682h10.771v2H616.21z",fill:"#2f2e41"}),a.createElement("path",{d:"M563.35 161.15c-9.507-5.762-13.985-16.691-13.993-27.5a39.637 39.637 0 0114.012-30.276c9.792-8.469 22.832-12.613 35.57-13.666 15.414-1.274 30.727 2.076 45.446 6.352 15.762 4.579 31.206 10.34 47.34 13.545 15.656 3.11 31.354 3.417 46.768-1.08 14.227-4.152 28.668-11.488 43.864-10.217 13.124 1.098 23.092 9.832 29.797 20.623 13.311 21.423 14.363 50.178 33.506 68.018 8.277 7.714 19.06 11.208 29.836 13.82 10.334 2.504 21.358 4.109 30.841 9.177 10.169 5.435 16.325 15.65 14.734 27.354-1.807 13.294-11.266 24.735-21.681 32.545a91.73 91.73 0 01-77.395 15.126c-27.632-7.331-50.087-28.746-79.527-30.089-16.424-.748-32.594 3.726-49.015 2.984-11.381-.514-23.63-4.721-31.557-13.185a24.709 24.709 0 01-6.757-14.537c-.18-1.906-3.181-1.924-3 0 1.125 11.957 9.927 20.789 20.43 25.644a56.355 56.355 0 0017.48 4.812c8.036.888 16.229.048 24.228-.829 8.455-.927 16.924-2.069 25.448-1.966a72.74 72.74 0 0122.837 4.061c14.106 4.838 26.813 12.865 40.288 19.116 13.043 6.05 26.7 9.802 41.146 9.895a96.211 96.211 0 0040.368-8.657c12.477-5.684 24.203-14.17 31.972-25.608 7.284-10.724 11.108-24.793 4.553-36.799-5.138-9.41-14.936-14.172-24.816-17.103-10.952-3.25-22.4-4.735-33.12-8.782a45.593 45.593 0 01-15.172-9.1 57.003 57.003 0 01-11.53-15.91c-6.138-11.974-9.275-25.124-14.444-37.491-4.788-11.456-11.34-23.003-21.893-30.063a37.244 37.244 0 00-19.058-6.151c-7.517-.34-14.988 1.386-22.133 3.56-7.561 2.302-14.94 5.176-22.558 7.294a81.672 81.672 0 01-24.668 2.946c-17.122-.557-33.662-5.644-49.872-10.772-28.395-8.983-59.976-18.6-88.524-4.753-11.124 5.396-20.546 14.448-24.519 26.335-3.515 10.519-3.029 22.787 2.39 32.587a30.455 30.455 0 0010.863 11.33c1.655 1.003 3.165-1.59 1.514-2.59z",fill:"#2f2e41"}),a.createElement("path",{d:"M646.088 428.594h-14.76a6.508 6.508 0 01-6.5-6.5V336.84a6.508 6.508 0 016.5-6.5h14.76a6.508 6.508 0 016.5 6.5v85.254a6.508 6.508 0 01-6.5 6.5z",fill:"#db0000"}),a.createElement("path",{d:"M589.116 147.907a12.736 12.736 0 0021.659 7.201l-2.507-.662a21.205 21.205 0 0037.151 4.397c1.13-1.57-1.471-3.069-2.59-1.514a18.21 18.21 0 01-31.668-3.68 1.522 1.522 0 00-2.507-.662 9.758 9.758 0 01-16.645-5.877c-.268-1.904-3.159-1.094-2.893.797z",fill:"#2f2e41"}),a.createElement("path",{"data-name":"Path 33",d:"M494.552 360.893l-.313.212-5.807-8.567a5.99 5.99 0 00-8.32-1.597l-18.15 12.305a5.99 5.99 0 00-1.596 8.319l31.861 46.998a5.99 5.99 0 008.32 1.597l18.15-12.305a5.99 5.99 0 001.596-8.319l-21.92-32.333.313-.212z",fill:"#3f3d56"}),a.createElement("path",{"data-name":"Path 34",d:"M481.485 353.166l-2.293 1.554a2.057 2.057 0 01.014 3.415l-10.064 6.823a2.057 2.057 0 01-3.167-1.277l-2.142 1.452a4.33 4.33 0 00-1.154 6.014l30.793 45.422a4.33 4.33 0 006.014 1.154l17.651-11.966a4.33 4.33 0 001.155-6.014l-30.794-45.423a4.33 4.33 0 00-6.013-1.154z",fill:"#fff"}))};function Ke(){var e=Object(s.a)(["\n  display: flex;\n  justify-content: center;\n  margin: 2rem 0;\n\n  svg {\n    width: 75%;\n    height: auto;\n  }\n"]);return Ke=function(){return e},e}var Qe=W.a.Title,Ze=W.a.Paragraph,Xe=l.d.div(Ke()),$e=function(e){var t=e.visible,n=e.onCancel,a=e.onConfirm;return r.a.createElement(Fe.a,{title:"You are not logged in",visible:t,onCancel:n,onOk:a,footer:null},r.a.createElement(Xe,null,r.a.createElement(Ge,null)),r.a.createElement(Qe,{level:3},"Hey there, you are not logged in ",r.a.createElement(se,{emoji:"\ud83d\udc40",label:"eyes"})),r.a.createElement(Ze,null,"In order to add movies to favorites and view your recent searches, you need to authenticate. Click the Login button bellow, to start saving your movies."),r.a.createElement(Te.a,null),r.a.createElement(Ne.a,{type:"primary",block:!0,size:"large",onClick:a},"Log In"))},et=Object(x.a)((function(e){var t=e.movies,n=void 0===t?[]:t,a=r.a.useState(!1),i=Object(Ee.a)(a,2),o=i[0],l=i[1],s=r.a.useState(null),u=Object(Ee.a)(s,2),m=u[0],d=u[1],v=D().moviesStore,f=Object(c.b)(),g=f.user,h=f.isAuthenticated,b=f.loginWithRedirect,E=function(e){d(e),h&&v.addToLatestFidings({id:e,user:g.sub})},y=function(e){h?v.toggleFavoriteMovie({id:e,user:g.sub}):l(!0)};return r.a.useEffect((function(){m&&!Object.prototype.hasOwnProperty.call(v.singleMoviesById,m)&&v.fetchMovieById({id:m})}),[m,v]),r.a.createElement(r.a.Fragment,null,r.a.createElement(ce,{minColWidth:{sm:"160px",lg:"215px"}},n.map((function(e){return r.a.createElement(Ie,Object.assign({key:e.imdbID,onPress:E,onFavoritePress:y,favorited:v.favorites.includes(e.imdbID)},e))}))),r.a.createElement(Ve,{loading:v.state===p.pending,visible:!!m,movie:v.singleMoviesById[m],favorited:v.favorites.includes(m),onClose:function(){return d(null)},onFavoritesPress:y}),r.a.createElement($e,{visible:o,onCancel:function(){return l(!1)},onConfirm:b}))})),tt=n(278),nt=n(288),at=n(285),rt=n(286),it=n(294),ot=n(295);function ct(){var e=Object(s.a)(["\n  color: ",";\n\n  &:hover {\n    color: ",";\n  }\n"]);return ct=function(){return e},e}var lt=l.d.a(ct(),(function(e){return e.theme.colors.text}),(function(e){return e.theme.colors.primary})),st=function(e){var t=e.user,n=e.onLogout;return r.a.createElement(nt.a,{overlay:r.a.createElement(at.a,null,r.a.createElement(at.a.Item,null,r.a.createElement("span",{onClick:n},"Log out"))),trigger:["click"]},r.a.createElement(lt,{className:"ant-dropdown-link",onClick:function(e){return e.preventDefault()}},r.a.createElement(tt.a,null,r.a.createElement(rt.a,{size:"small",src:t.picture,icon:t.picture?null:r.a.createElement(it.a,null)}),r.a.createElement("span",null,"Hi, ",t.given_name||t.nickname),r.a.createElement(ot.a,null))))};function ut(){var e=Object(s.a)(["\n  color: ",";\n\n  &.active {\n    color: ",";\n  }\n"]);return ut=function(){return e},e}function mt(){var e=Object(s.a)(["\n  background-color: ",";\n  display: flex;\n  justify-content: space-between;\n\n  @media screen and (max-width: 768px) {\n    padding-left: 16px;\n    padding-right: 16px;\n  }\n"]);return mt=function(){return e},e}var dt=Object(l.d)(J.a.Header)(mt(),(function(e){return e.theme.colors.light})),vt=Object(l.d)(y.b)(ut(),(function(e){return e.theme.colors.text}),(function(e){return e.theme.colors.primary})),ft=function(){var e=Object(c.b)(),t=e.isAuthenticated,n=e.user,a=e.isLoading,i=e.loginWithRedirect,o=e.logout;return r.a.createElement(dt,null,r.a.createElement("div",{className:"logo"},r.a.createElement(vt,{to:"/",exact:!0},r.a.createElement("strong",null,"MovieFavz"))),!a&&r.a.createElement("nav",{className:"navigation"},r.a.createElement(tt.a,{size:"large"},t?r.a.createElement(r.a.Fragment,null,r.a.createElement(vt,{to:"/your-favz",exact:!0},"Your Favz"),r.a.createElement(st,{user:n,onLogout:o})):r.a.createElement(Ne.a,{size:"middle",danger:!0,onClick:i},"Log In"))))};function gt(){var e=Object(s.a)(["\n  text-align: center;\n  font-size: 0.8rem;\n  background-color: ",";\n  margin-top: 45px;\n"]);return gt=function(){return e},e}var ht=Object(l.d)(J.a.Footer)(gt(),(function(e){return e.theme.colors.clouds})),pt=function(){return r.a.createElement(ht,null,"Povio Labs \xa9 2020")},bt=function(){var e=Object(c.b)(),t=e.isAuthenticated,n=e.isLoading,a=e.loginWithRedirect;return t||n?null:r.a.createElement(r.a.Fragment,null,r.a.createElement(Te.a,null),r.a.createElement(Ne.a,{type:"primary",size:"large",onClick:a},"Log in"))},Et=function(){var e=Object(j.f)();return r.a.createElement(r.a.Fragment,null,r.a.createElement(Te.a,null),r.a.createElement(Ne.a,{size:"large",type:"primary",onClick:function(){return e.push("/")}},"Back to home"))},yt=n(280);function jt(){var e=Object(s.a)(["\n  display: flex;\n  justify-content: center;\n  padding: 1rem 0;\n"]);return jt=function(){return e},e}var xt=l.d.div(jt()),Ot=function(){return r.a.createElement(xt,null,r.a.createElement(yt.a,{size:"large"}))},wt=n(168),kt=n.n(wt),Pt=J.a.Content,Mt=W.a.Title,zt=W.a.Paragraph,It=Object(x.a)((function(){var e=D().moviesStore,t=Object(c.b)().isAuthenticated,n=r.a.useMemo((function(){return e.favoritesPreviews.slice(0,4)}),[e.favoritesPreviews]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(be,{image:kt.a}),r.a.createElement(Pt,null,r.a.createElement(X,null,e.searching===p.error&&r.a.createElement(U.a,{message:"Search error: ".concat(e.error),description:"Try searching with different search query. Make sure that search query is at least 3 characters long.",type:"error",closable:!0,onClose:e.removeErrors}),e.hasSearchResults?r.a.createElement(r.a.Fragment,null,r.a.createElement(H.a,{pageStart:1,loadMore:function(t){e.searchMoviesNextPage({page:t})},hasMore:e.hasNextPage,loader:r.a.createElement(Ot,{key:0})},r.a.createElement(et,{movies:e.searchResults}))):r.a.createElement(r.a.Fragment,null,r.a.createElement(te,null,r.a.createElement(Mt,null,"Your latest findings"),e.latestFindings.length>0?r.a.createElement(et,{movies:e.latestFindingsPreviews}):r.a.createElement(r.a.Fragment,null,r.a.createElement(zt,null,t?"Your search history is empty. Start searching for your favorite movies and review your latest findings later on.":"You are not logged in. In order to keep track of your findings, you need to log in first."),r.a.createElement(bt,null))),r.a.createElement(te,null,r.a.createElement(Mt,null,"Your latest favorites"),n.length>0?r.a.createElement(et,{movies:n}):r.a.createElement(r.a.Fragment,null,r.a.createElement(zt,null,t?"Your favorites list is empty. Start adding movies to your favorites list and review your latest findings later on.":"You are not logged in. In order to save movies to favorites, you need to log in first."),r.a.createElement(bt,null)))))))})),Ft=n(169),St=n(296),Ct=J.a.Content,Rt=W.a.Title,Bt=W.a.Paragraph,Nt=Object(x.a)((function(){var e=D().moviesStore,t=Object(c.b)(),n=t.isAuthenticated,a=t.isLoading,i=t.user,o=r.a.useMemo((function(){return e.favoritesPreviews.length>0}),[e.favoritesPreviews]),l=r.a.useMemo((function(){return e.state===p.pending||a}),[e.state,a]);return r.a.createElement(Ct,null,r.a.createElement(X,null,r.a.createElement(te,null,r.a.createElement(Ce.a,{align:"middle"},r.a.createElement(Re.a,{flex:"auto"},r.a.createElement(Rt,{level:1},"Your Favz"),o||l?r.a.createElement(Bt,null,"Here are your favorited movies. It's always smart to keep track of things you like"," ",r.a.createElement(se,{emoji:"\ud83d\udc47",label:"pointing finger"})):n?r.a.createElement(r.a.Fragment,null,r.a.createElement(Bt,null,"Looks like you don't have any favorited movies just yet"," ",r.a.createElement(se,{emoji:"\ud83e\udd37\u200d\u2642\ufe0f",label:"man shrugging"}),". Return to the app home and find some movies you like."),e.state===p.done&&r.a.createElement(Et,null)):r.a.createElement(r.a.Fragment,null,r.a.createElement(Bt,null,"In order to add movies to favorites and view your recent searches, you need to authenticate. Click the Login button bellow, to start saving your movies."),r.a.createElement(bt,null))),r.a.createElement(Re.a,{flex:"200px"},n&&o&&r.a.createElement(Ne.a,{block:!0,size:"large",type:"primary",onClick:function(){var t=e.favorites.reduce((function(t,n){return[].concat(Object(w.a)(t),[e.singleMoviesById[n]])}),[]),n="".concat(i.given_name?i.given_name:i.nickname,"_Movie_Favz.json"),a=new Blob([JSON.stringify(t,null,2)],{type:"application/json"});Object(Ft.saveAs)(a,n)}},"Export your Favz ",r.a.createElement(St.a,null))))),o&&r.a.createElement(et,{movies:e.favoritesPreviews})))})),Tt=J.a.Content,At=W.a.Title,Lt=W.a.Paragraph,Yt=function(){var e=Object(j.f)();return r.a.createElement(Tt,null,r.a.createElement(X,null,r.a.createElement(te,null,r.a.createElement(tt.a,{direction:"vertical",size:"large"},r.a.createElement("div",{className:"content-group"},r.a.createElement(At,null,"Page not found"),r.a.createElement(Lt,null,"Your search history is empty. Start searching for your favorite movies and review your latest findings later on.")),r.a.createElement(Ne.a,{onClick:function(){return e.push("/")},type:"primary",size:"large"},"Back to home page")))))},qt=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(j.c,null,r.a.createElement(j.a,{path:"/",exact:!0,component:It}),r.a.createElement(j.a,{path:"/your-favz",exact:!0,component:Nt}),r.a.createElement(j.a,{path:"*",component:Yt})))};function Dt(){var e=Object(s.a)(["\n  min-height: 100vh;\n"]);return Dt=function(){return e},e}var _t=Object(l.d)(J.a)(Dt()),Ht=Object(x.a)((function(){var e=Object(c.b)(),t=e.user,n=e.isLoading,a=e.isAuthenticated,i=D().moviesStore;return r.a.useEffect((function(){a&&!n&&i.initializeFromStorage({user:t.sub})}),[a,n,t]),r.a.createElement(_t,null,r.a.createElement(y.a,{basename:E.appBaseName},r.a.createElement(ft,null),r.a.createElement(qt,null),r.a.createElement(pt,null)))}));o.a.render(r.a.createElement(c.a,{domain:"moviefavz.eu.auth0.com",clientId:"gs3QJm3RUynqfPJ0f7qH7NPYHkZkq2Qs",redirectUri:E.appBaseUrl},r.a.createElement(l.a,{theme:f},r.a.createElement(m,null),r.a.createElement(Ht,null))),document.getElementById("root"))}},[[174,1,2]]]);
//# sourceMappingURL=main.9d905977.chunk.js.map