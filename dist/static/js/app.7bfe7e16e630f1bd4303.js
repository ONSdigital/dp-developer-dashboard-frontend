webpackJsonp([1],{"/V9h":function(e,t){},"2KlF":function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[e.isLoading?s("div",{staticClass:"loader"},[s("p",{staticClass:"loader__text"},[e._v("Loading...")]),e._v(" "),e._m(0,!1,!1)]):s("div",[s("BuildStatuses",{attrs:{buildStatuses:e.buildBuildStatuses()}}),e._v(" "),s("PullRequests",{attrs:{pullRequests:e.buildPullRequests()}}),e._v(" "),s("Releases",{attrs:{releases:e.releases}})],1)])},n=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"loader__icon"},[s("div",{staticClass:"ferry"},[s("div",{staticClass:"chimney"}),e._v(" "),s("div",{staticClass:"waves"})])])}],r={render:a,staticRenderFns:n};t.a=r},"8VK7":function(e,t,s){"use strict";function a(e){s("/V9h")}var n=s("t+kj"),r=s("AYXz"),i=s("VU/8"),u=a,l=i(n.a,r.a,!1,u,"data-v-39678322",null);t.a=l.exports},AYXz:function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"releases"},[s("div",{staticClass:"releases__column"},[s("h2",[e._v("\n            Today's releases\n            "),s("span",{staticClass:"releases__heading-date"},[e._v("("+e._s(e.todaysDate)+")")])]),e._v(" "),e.releases.today?s("ol",{staticClass:"releases__list"},e._l(e.releases.today,function(t){return s("li",{key:t.title,staticClass:"releases__item"},[e._v("\n                "+e._s(t.title)+"\n                "),t.isFinalised?e._e():s("span",[s("strong",[e._v("(Release date not finalised)")])]),e._v(" "),t.isCancelled?s("span",[s("strong",[e._v("Cancelled")])]):e._e()])})):s("p",[e._v("No releases today")])]),e._v(" "),s("div",{staticClass:"releases__column"},[s("h2",[e._v("\n            Tomorrow's releases\n            "),s("span",{staticClass:"releases__heading-date"},[e._v("("+e._s(e.tomorrowsDate)+")")])]),e._v(" "),e.releases.tomorrow?s("ol",{staticClass:"releases__list"},e._l(e.releases.tomorrow,function(t){return s("li",{key:t.title,staticClass:"releases__item"},[e._v("\n                "+e._s(t.title)+"\n                "),t.isFinalised?e._e():s("span",[s("strong",[e._v("(Release date not finalised)")])]),e._v(" "),t.isCancelled?s("span",[s("strong",[e._v("Cancelled")])]):e._e()])})):s("p",[e._v("No releases tomorrow")])])])},n=[],r={render:a,staticRenderFns:n};t.a=r},BqDf:function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.buildStatuses.length?s("div",{staticClass:"statuses"},e._l(e.buildStatuses,function(t){return s("div",{key:t.repo+"-"+t.branch,staticClass:"statuses__column"},[s("span",{staticClass:"statuses__type"},[e._v("Failed build")]),e._v(" "),s("h2",{staticClass:"statuses__name"},[e._v(e._s(t.repo)+": "+e._s(t.branch))])])})):e._e()},n=[],r={render:a,staticRenderFns:n};t.a=r},DRNG:function(e,t,s){"use strict";t.a={name:"PullRequests",props:{pullRequests:{type:Array,required:!0}}}},Fs8J:function(e,t,s){"use strict";var a=s("Dd8w"),n=s.n(a),r=s("8VK7"),i=s("dxwm"),u=s("SRfN"),l=s("Sazm"),o=s.n(l),c=s("CqLJ"),d=s.n(c),_={databaseURL:"https://dp-developer-dashboard.firebaseio.com"},f=o.a.initializeApp(_),v=f.database(),p=v.ref("pull_requests"),m=v.ref("releases"),h=v.ref("build_statuses");t.a={name:"Home",components:{Releases:r.a,BuildStatuses:i.a,PullRequests:u.a},data:function(){return{isLoading:!0}},firebase:{pullRequests:{source:p,readyCallback:function(){this.isLoading=!1}},releases:{source:m,readyCallback:function(){this.isLoading=!1},asObject:!0},buildStatuses:{source:h,readyCallback:function(){this.isLoading=!1}}},ready:function(){this.isLoading=!1},methods:{buildBuildStatuses:function(){var e=[];return this.buildStatuses.forEach(function(t){t[".value"].forEach(function(s){"succeeded"!==s.status&&e.push({repo:t[".key"],branch:s.name,key:t+s.name})})}),e},buildPullRequests:function(){var e=[];return this.pullRequests.forEach(function(t){try{t[".value"].forEach(function(t){e.push({id:t[".key"],type:"Pull request",name:t.repo,sub:t.title,date:d()(t.created_date,"dd mmm yy (h:MM:ss tt)"),user:n()({},t.user)})})}catch(e){console.error("Error trying to loop through pull requests for "+t)}}),e},buildWarningItems:function(){var e=[];return this.pullRequests.forEach(function(t){try{t[".value"].forEach(function(t){e.push({id:t[".key"],type:"Pull request",name:t.repo,sub:t.title,date:d()(t.created_date,"dd mmm yy (h:MM:ss tt)"),user:n()({},t.user)})})}catch(e){console.error("Error trying to loop through pull requests for "+t)}}),[].concat(e)}}}},"H+kX":function(e,t){},M93x:function(e,t,s){"use strict";function a(e){s("b9F0")}var n=s("xJD8"),r=s("ZGoi"),i=s("VU/8"),u=a,l=i(n.a,r.a,!1,u,null,null);t.a=l.exports},NHnr:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s("7+uW"),n=s("M93x"),r=s("1mcD"),i=s.n(r);a.a.config.productionTip=!1,a.a.use(i.a),new a.a({el:"#app",template:"<App/>",components:{App:n.a}})},Nn2X:function(e,t){},"Op/y":function(e,t){},SRfN:function(e,t,s){"use strict";function a(e){s("H+kX")}var n=s("DRNG"),r=s("mQoa"),i=s("VU/8"),u=a,l=i(n.a,r.a,!1,u,"data-v-0a93eba9",null);t.a=l.exports},ZGoi:function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("Home")],1)},n=[],r={render:a,staticRenderFns:n};t.a=r},b9F0:function(e,t){},dxwm:function(e,t,s){"use strict";function a(e){s("Nn2X")}var n=s("l642"),r=s("BqDf"),i=s("VU/8"),u=a,l=i(n.a,r.a,!1,u,"data-v-30a47f1c",null);t.a=l.exports},faAD:function(e,t){},l642:function(e,t,s){"use strict";t.a={name:"BuildStatuses",props:{buildStatuses:{type:Array,required:!0}}}},lO7g:function(e,t,s){"use strict";function a(e){s("Op/y"),s("faAD")}var n=s("Fs8J"),r=s("2KlF"),i=s("VU/8"),u=a,l=i(n.a,r.a,!1,u,"data-v-410513ea",null);t.a=l.exports},mQoa:function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.pullRequests.length?s("div",[s("h2",[e._v("Pull requests")])]):e._e()},n=[],r={render:a,staticRenderFns:n};t.a=r},"t+kj":function(e,t,s){"use strict";var a=s("CqLJ"),n=s.n(a);t.a={name:"Releases",props:{releases:{type:Object,required:!0}},methods:{dateFormat:n.a},data:function(){return{todaysDate:n()("","dddd dd mmmm"),tomorrowsDate:n()(new Date((new Date).getTime()+864e5),"dddd dd mmmm")}}}},xJD8:function(e,t,s){"use strict";var a=s("lO7g");t.a={name:"app",components:{Home:a.a}}}},["NHnr"]);
//# sourceMappingURL=app.7bfe7e16e630f1bd4303.js.map