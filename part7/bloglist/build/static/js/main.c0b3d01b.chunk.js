(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,n){e.exports=n(40)},40:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),u=n(15),c=n.n(u),o=n(1),l=n.n(o),i=n(2),s=n(4),p=n(5),d=n.n(p),f=null,m=function(){var e=Object(i.a)(l.a.mark(function e(){var t;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("/api/blogs");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),v=function(){var e=Object(i.a)(l.a.mark(function e(t){var n,r;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:f}},e.next=3,d.a.post("/api/blogs",t,n);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=Object(i.a)(l.a.mark(function e(t){var n,r;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:f}},e.next=3,d.a.delete("".concat("/api/blogs","/").concat(t.id),n);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),g={getAll:m,addBlog:v,setToken:function(e){f="bearer ".concat(e)},addLike:function(){var e=Object(i.a)(l.a.mark(function e(t){var n,r;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:f}},e.next=3,d.a.put("".concat("/api/blogs","/").concat(t.id),t,n);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),removePost:b},E={login:function(){var e=Object(i.a)(l.a.mark(function e(t,n){var r;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.post("/api/login",{username:t,password:n});case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}()},h=n(16);function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}var k=function(e){var t=e.blog,n=e.likeHandler,u=e.removeHandler,c=e.user,o=Object(r.useState)(!1),l=Object(s.a)(o,2),i=l[0],p=l[1],d={paddingTop:10,paddingLeft:2,border:"solid",borderRadius:5,borderWidth:1,marginBottom:5},f=function(e){e.preventDefault(),window.confirm("Remove post ".concat(t.title," by ").concat(t.author,"?"))&&(u(t),p(!1)),e.stopPropagation()};return i?a.a.createElement("div",{style:d},a.a.createElement("div",{onClick:function(){return p(!1)}},a.a.createElement("div",null,t.title," by ",t.author),a.a.createElement("div",null,t.url),a.a.createElement("div",null,t.likes," likes ",a.a.createElement("button",{onClick:function(e){e.preventDefault(),e.stopPropagation(),n(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(n,!0).forEach(function(t){Object(h.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},t,{likes:t.likes+1}))}},"Like")),a.a.createElement("div",null,"Added by ",t.user.name),a.a.createElement(function(){return c.username===t.user.username?a.a.createElement("div",null,a.a.createElement("button",{onClick:f},"Remove")):null},null))):a.a.createElement("div",{style:d},a.a.createElement("div",{onClick:function(){return p(!0)}},t.title," by ",t.author))},x=function(e){var t=e.loginHandler,n=e.username,r=e.password;return a.a.createElement("form",{onSubmit:t},a.a.createElement("div",null,"Username ",a.a.createElement("input",n.bind)),a.a.createElement("div",null,"Password ",a.a.createElement("input",r.bind)),a.a.createElement("div",null,a.a.createElement("input",{type:"submit",value:"Login"})))},O=function(e){var t=e.handleSubmit,n=e.blogTitle,r=e.blogAuthor,u=e.blogUrl;return a.a.createElement("div",null,a.a.createElement("h3",null,"Create new post"),a.a.createElement("form",{onSubmit:t},a.a.createElement("div",null,"title: ",a.a.createElement("input",n.bind)),a.a.createElement("div",null,"author: ",a.a.createElement("input",r.bind)),a.a.createElement("div",null,"url: ",a.a.createElement("input",u.bind)),a.a.createElement("input",{type:"submit",value:"submit"})))},y=function(e){var t=e.notification;if(null===t.status)return null;return a.a.createElement("div",{style:t.success?{margin:"10px 0",padding:"10px",borderRadius:"3px 3px 3px 3px",color:"#270",backgroundColor:"#DFF2BF",width:"500px"}:{margin:"10px 0",padding:"10px",borderRadius:"3px 3px 3px 3px",color:"#D8000C",backgroundColor:"#FFBABA",width:"500px"}},t.message)},j=function(e){var t=Object(r.useState)(!1),n=Object(s.a)(t,2),u=n[0],c=n[1],o={display:u?"none":""},l={display:u?"":"none"},i=function(){return c(!u)};return a.a.createElement("div",null,a.a.createElement("div",{style:o},a.a.createElement("button",{onClick:i},e.buttonLabel)),a.a.createElement("div",{style:l},e.children,a.a.createElement("button",{onClick:i},"Cancel")))},S=function(e){var t=Object(r.useState)(""),n=Object(s.a)(t,2),a=n[0],u=n[1];return{bind:{type:e,value:a,onChange:function(e){u(e.target.value)}},reset:function(){u("")},value:a}};var C=function(){var e=Object(r.useState)([{}]),t=Object(s.a)(e,2),n=t[0],u=t[1],c=Object(r.useState)(null),o=Object(s.a)(c,2),p=o[0],d=o[1],f=Object(r.useState)({status:null,success:!0,message:""}),m=Object(s.a)(f,2),v=m[0],b=m[1],h=S("text"),w=S("password"),C=S("text"),P=S("text"),A=S("text");Object(r.useEffect)(function(){!function(){var e=Object(i.a)(l.a.mark(function e(){var t;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.getAll();case 2:t=e.sent,u(t);case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()()},[]),Object(r.useEffect)(function(){var e=window.localStorage.getItem("loggedUser");if(e){var t=JSON.parse(e);g.setToken(t.token),d(t)}},[]);var D=function(e,t){b({status:!0,success:e,message:t}),setTimeout(function(){b({status:null})},5e3)},B=function(){var e=Object(i.a)(l.a.mark(function e(t){var n;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,E.login(h.value,w.value);case 4:n=e.sent,window.localStorage.setItem("loggedUser",JSON.stringify(n)),g.setToken(n.token),d(n),h.reset(),w.reset(),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),D(!1,"Wrong username or password");case 15:case"end":return e.stop()}},e,null,[[1,12]])}));return function(t){return e.apply(this,arguments)}}(),L=function(){var e=Object(i.a)(l.a.mark(function e(){return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:window.localStorage.clear(),d(null);case 2:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),T=function(){var e=Object(i.a)(l.a.mark(function e(t){var n,r,a;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=t.target,r={title:C.value,author:P.value,url:A.value},e.prev=3,e.next=6,g.addBlog(r);case 6:return e.next=8,g.getAll();case 8:a=e.sent,u(a),C.reset(),P.reset(),A.reset(),n.reset(),D(!0,"A new blog added: ".concat(r.title," by ").concat(r.author)),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(3),console.log(e.t0);case 20:case"end":return e.stop()}},e,null,[[3,17]])}));return function(t){return e.apply(this,arguments)}}(),H=function(){var e=Object(i.a)(l.a.mark(function e(t){var r,a;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.addLike(t);case 3:r=e.sent,a=n.map(function(e){return e.id===r.id?r:e}),u(a),D(!0,"Liked post"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}},e,null,[[0,9]])}));return function(t){return e.apply(this,arguments)}}(),F=function(){var e=Object(i.a)(l.a.mark(function e(t){var r,a;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.removePost(t);case 3:r=e.sent,a=n.filter(function(e){return e.id!==r.id}),u(a),D(!0,"Post removed"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}},e,null,[[0,9]])}));return function(t){return e.apply(this,arguments)}}();n.sort(function(e,t){return t.likes-e.likes});var R=n.map(function(e,t){return a.a.createElement(k,{key:t,blog:e,likeHandler:H,removeHandler:F,user:p})});return null===p?a.a.createElement("div",null,a.a.createElement("h2",null,"Log in"),a.a.createElement(y,{notification:v}),a.a.createElement(x,{loginHandler:B,username:h,password:w})):a.a.createElement("div",{className:"App"},a.a.createElement("div",null,a.a.createElement("h2",null,"Blogs"),a.a.createElement(y,{notification:v}),a.a.createElement("div",null,p.name," logged in",a.a.createElement("input",{type:"button",value:"logout",onClick:L})),a.a.createElement("br",null),a.a.createElement(j,{buttonLabel:"Create new post"},a.a.createElement(O,{handleSubmit:T,blogTitle:C,blogAuthor:P,blogUrl:A})),a.a.createElement("br",null),a.a.createElement("h3",null,"Blog posts"),a.a.createElement("div",null,R)))};c.a.render(a.a.createElement(C,null),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.c0b3d01b.chunk.js.map