"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[549],{549:function(e,i,t){t.r(i),t.d(i,{default:function(){return u}});var n=t(439),r=t(791),o=t(689),s=t(243),c={headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNWZiNWI1MmI2NGZkZjQ5NTk2MTRkNmVlNjk2MzY2MSIsInN1YiI6IjY0MmRmOWRmYTZhNGMxMDBmNDJjODBmMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dh_81ToGYTWvWLZD2NmIMHPSCDMFiUURjqsMwgAMB-A"}},l=function(e){var i=e.movieId,t=e.setMovieReviews,n="https://api.themoviedb.org/3/movie/".concat(i,"/reviews");(0,r.useEffect)((function(){s.Z.get(n,c).then((function(e){return t(e.data)})).catch((function(e){return console.error("Error fetching movie details:",e)}))}),[n,t])},a=t(184),u=function(){var e,i,t=(0,o.UO)().id,s=(0,r.useState)(null),c=(0,n.Z)(s,2),u=c[0],h=c[1];return(0,a.jsxs)("main",{children:[console.log(u),u&&(null===(e=u.results)||void 0===e?void 0:e.length)>0?(0,a.jsx)("ul",{children:u.results.map((function(e){var i=e.author,t=e.content,n=e.id;return(0,a.jsxs)("li",{children:[(0,a.jsxs)("h3",{children:["Author: ",i]}),(0,a.jsx)("p",{children:t})]},n)}))}):(0,a.jsx)("p",{children:0===(null===u||void 0===u||null===(i=u.results)||void 0===i?void 0:i.length)?"No hay reviews para esta pel\xedcula":"Loading..."}),(0,a.jsx)(l,{setMovieReviews:h,movieId:t})]})}}}]);
//# sourceMappingURL=549.78ce1375.chunk.js.map