"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[640],{640:function(e,t,i){i.r(t),i.d(t,{default:function(){return l}});var n=i(439),r=i(791),a=i(87),o=i(243),s={headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNWZiNWI1MmI2NGZkZjQ5NTk2MTRkNmVlNjk2MzY2MSIsInN1YiI6IjY0MmRmOWRmYTZhNGMxMDBmNDJjODBmMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dh_81ToGYTWvWLZD2NmIMHPSCDMFiUURjqsMwgAMB-A"}},c=function(e){var t=e.movieSearh,i=e.setMovieData,n="https://api.themoviedb.org/3/search/movie?query=".concat(t);(0,r.useEffect)((function(){o.Z.get(n,s).then((function(e){return i(e.data)})).catch((function(e){return console.error("Error fetching movie details:",e)}))}),[t,i,n])},u=i(184),l=function(){var e,t,i=(0,r.useState)(""),o=(0,n.Z)(i,2),s=o[0],l=o[1],h=(0,r.useState)([]),d=(0,n.Z)(h,2),m=d[0],v=d[1];return(0,u.jsxs)("main",{children:[(0,u.jsx)("div",{children:(0,u.jsx)("input",{type:"text",value:s,onChange:function(e){l(e.target.value)}})}),(0,u.jsx)("div",{children:m&&(null===(e=m.results)||void 0===e?void 0:e.length)>0?(0,u.jsx)("ul",{children:m.results.map((function(e){var t=e.id,i=e.title,n=e.name;return(0,u.jsx)("li",{children:(0,u.jsx)(a.rU,{to:"/movies/".concat(t),children:i||n})},t)}))}):(0,u.jsx)("p",{children:0===(null===m||void 0===m||null===(t=m.results)||void 0===t?void 0:t.length)?"No hay resultados para esta b\xfasqueda":"Loading..."})}),(0,u.jsx)(c,{movieSearh:s,setMovieData:v})]})}}}]);
//# sourceMappingURL=640.6045ab05.chunk.js.map