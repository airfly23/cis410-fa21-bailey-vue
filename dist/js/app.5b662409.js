(function(t){function e(e){for(var r,o,l=e[0],s=e[1],u=e[2],b=0,m=[];b<l.length;b++)o=l[b],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&m.push(a[o][0]),a[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);i&&i(e);while(m.length)m.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],r=!0,l=1;l<n.length;l++){var s=n[l];0!==a[s]&&(r=!1)}r&&(c.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},a={app:0},c=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var i=s;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"2c76":function(t,e,n){},"2dd2":function(t,e,n){},"3dcf":function(t,e,n){"use strict";n("2dd2")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),a={class:"container-fluid"},c={class:"row justify-content-center"},o=Object(r["g"])("div",{class:"col-md-10 col-lg-7"},null,-1);function l(t,e,n,l,s,u){var i=Object(r["y"])("my-header"),b=Object(r["y"])("router-view");return Object(r["r"])(),Object(r["f"])(r["a"],null,[Object(r["i"])(i),Object(r["g"])("div",a,[Object(r["g"])("div",c,[o,Object(r["i"])(b)])])],64)}var s=function(t){return Object(r["u"])("data-v-0b1dedb8"),t=t(),Object(r["s"])(),t},u={class:"navbar navbar-expand-lg navbar-light bg-light"},i={class:"container-fluid"},b=Object(r["h"])("Bailey's Gym Payment"),m=s((function(){return Object(r["g"])("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(r["g"])("span",{class:"navbar-toggler-icon"})],-1)})),d={class:"collapse navbar-collapse",id:"navbarNav"},j={class:"navbar-nav ms-auto"},O={class:"nav-item"},p=Object(r["h"])("Gyms"),g={key:0,class:"nav-item"},f=Object(r["h"])("My Account"),y={key:1,class:"nav-item"},h=s((function(){return Object(r["g"])("button",{class:"btn btn-warning"},"Login",-1)})),v={key:2,class:"nav-item"},k=s((function(){return Object(r["g"])("button",{class:"btn btn-outline-warning text-dark"}," Sign Up ",-1)})),w={key:3,class:"nav-item"};function P(t,e,n,a,c,o){var l=Object(r["y"])("router-link");return Object(r["r"])(),Object(r["f"])("nav",u,[Object(r["g"])("div",i,[Object(r["i"])(l,{class:"navbar-brand",to:"/"},{default:Object(r["E"])((function(){return[b]})),_:1}),m,Object(r["g"])("div",d,[Object(r["g"])("ul",j,[Object(r["g"])("li",O,[Object(r["i"])(l,{class:"nav-link active","aria-current":"page",to:"/movies"},{default:Object(r["E"])((function(){return[p]})),_:1})]),o.auth?(Object(r["r"])(),Object(r["f"])("li",g,[Object(r["i"])(l,{class:"nav-link active","aria-current":"page",to:"/account"},{default:Object(r["E"])((function(){return[f]})),_:1})])):Object(r["e"])("",!0),o.auth?Object(r["e"])("",!0):(Object(r["r"])(),Object(r["f"])("li",y,[Object(r["i"])(l,{class:"nav-link active","aria-current":"page",to:"/login"},{default:Object(r["E"])((function(){return[h]})),_:1})])),o.auth?Object(r["e"])("",!0):(Object(r["r"])(),Object(r["f"])("li",v,[Object(r["i"])(l,{class:"nav-link active","aria-current":"page",to:"/signup"},{default:Object(r["E"])((function(){return[k]})),_:1})])),o.auth?(Object(r["r"])(),Object(r["f"])("li",w,[Object(r["g"])("button",{class:"btn btn-warning",onClick:e[0]||(e[0]=function(){return o.onLogout&&o.onLogout.apply(o,arguments)})},"Logout")])):Object(r["e"])("",!0)])])])])}var E={computed:{auth:function(){return this.$store.state.token}},methods:{onLogout:function(){this.$store.dispatch("logout")}}},x=(n("5cbf"),n("6b0d")),A=n.n(x);const F=A()(E,[["render",P],["__scopeId","data-v-0b1dedb8"]]);var G=F,S={name:"App",components:{"my-header":G},created:function(){this.$store.dispatch("getGym")}};n("3dcf");const $=A()(S,[["render",l]]);var M=$,U=n("bc3a"),_=n.n(U),L=n("6c02"),B=Object(r["g"])("h1",null,"Home",-1),C=[B];function D(t,e,n,a,c,o){return Object(r["r"])(),Object(r["f"])("div",null,C)}var I={};const N=A()(I,[["render",D]]);var q=N,V=Object(r["g"])("h1",null,"Login",-1),T={key:0,class:"alert alert-success"},z={class:"mb-3"},K=Object(r["g"])("label",{for:"email-input",class:"form-label"},"Password",-1),J={class:"mb-3"},H=Object(r["g"])("label",{for:"password-input",class:"form-label"},"Password",-1),R=Object(r["g"])("button",{type:"submit",class:"btn btn-primary"},"Submit",-1),Q={key:0,class:"form-text text-danger"},W={key:1,class:"form-text text-danger"};function X(t,e,n,a,c,o){return Object(r["r"])(),Object(r["f"])("div",null,[V,this.$route.query.signupsuccess?(Object(r["r"])(),Object(r["f"])("div",T," Thanks for signing up, please login now. ")):Object(r["e"])("",!0),Object(r["g"])("form",null,[Object(r["g"])("div",z,[K,Object(r["F"])(Object(r["g"])("input",{type:"email",class:"form-control",id:"email-input",required:"",placeholder:"Enter email","onUpdate:modelValue":e[0]||(e[0]=function(t){return c.email=t})},null,512),[[r["C"],c.email]])]),Object(r["g"])("div",J,[H,Object(r["F"])(Object(r["g"])("input",{type:"password",class:"form-control",id:"password-input",placeholder:"Password",required:"","onUpdate:modelValue":e[1]||(e[1]=function(t){return c.password=t})},null,512),[[r["C"],c.password]])]),R,c.credentialsError?(Object(r["r"])(),Object(r["f"])("p",Q," Invalid credentials ")):Object(r["e"])("",!0),c.loginError?(Object(r["r"])(),Object(r["f"])("p",W," Could not log you in, please try again later ")):Object(r["e"])("",!0)])])}n("ac1f"),n("5319");var Y={data:function(){return{email:"",password:"",loginError:!1,credentialsError:!1}},method:{onSubmit:function(){var t=this,e={email:this.email,password:this.password};_.a.post("/GymMember/login",e).then((function(e){t.$store.commit("storeTokenInApp",e.data.token),t.$store.commit("storeUserInApp",e.data.user),t.$router.replace("/account")})).catch((function(e){console.log("error in /GymMember/Login",e),401==e.response.status?t.credentialsError=!0:t.loginError=!0}))}}};const Z=A()(Y,[["render",X]]);var tt=Z,et={class:"card"},nt={class:"card-body"},rt={class:"text-primary"},at=Object(r["g"])("br",null,null,-1),ct=Object(r["h"])(" Budget: "),ot=Object(r["g"])("br",null,null,-1),lt=Object(r["g"])("br",null,null,-1),st=Object(r["g"])("button",{class:"btn btn-success"},"Make a Payment",-1),ut=Object(r["g"])("button",{class:"btn btn-outline-success"}," Sign in to Make a Payment ",-1),it=Object(r["g"])("br",null,null,-1),bt=Object(r["g"])("br",null,null,-1);function mt(t,e,n,a,c,o){var l=Object(r["y"])("router-link"),s=Object(r["y"])("router-view");return Object(r["r"])(),Object(r["f"])("div",null,[Object(r["g"])("div",et,[Object(r["g"])("div",nt,[Object(r["g"])("h2",rt,Object(r["A"])(o.gym.Name),1),at,Object(r["g"])("p",null,[ct,ot,Object(r["g"])("strong",null,Object(r["A"])(o.formattedBudget),1)])])]),lt,o.auth?(Object(r["r"])(),Object(r["d"])(l,{key:0,to:"/gym/".concat(this.$route.params.pk,"/payment")},{default:Object(r["E"])((function(){return[st]})),_:1},8,["to"])):(Object(r["r"])(),Object(r["d"])(l,{key:1,to:"/login"},{default:Object(r["E"])((function(){return[ut]})),_:1})),it,bt,Object(r["i"])(s)])}n("7db0"),n("d3b7");var dt={computed:{gym:function(){var t=this,e=this.$store.state.gym,n=e.find((function(e){return e.GymID==t.$route.params.pk}));return n},formattedBudget:function(){return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).Format(this.Gym.Budget)},auth:function(){return this.$store.state.token}}};const jt=A()(dt,[["render",mt]]);var Ot=jt,pt=Object(r["g"])("h1",null,"Gym",-1),gt=Object(r["g"])("hr",null,null,-1),ft={class:"table"},yt=Object(r["g"])("thead",null,[Object(r["g"])("tr",null,[Object(r["g"])("th",null,"Name"),Object(r["g"])("th",null,"Budget"),Object(r["g"])("th")])],-1),ht=Object(r["g"])("button",{class:"btn btn-primary"},"Details",-1);function vt(t,e,n,a,c,o){var l=Object(r["y"])("router-link");return Object(r["r"])(),Object(r["f"])("div",null,[pt,gt,Object(r["g"])("table",ft,[yt,Object(r["g"])("tbody",null,[(Object(r["r"])(!0),Object(r["f"])(r["a"],null,Object(r["x"])(o.theGym,(function(t){return Object(r["r"])(),Object(r["f"])("tr",{key:t.GymID},[Object(r["g"])("th",null,Object(r["A"])(t.Name),1),Object(r["g"])("th",null,Object(r["A"])(t.Budget),1),Object(r["g"])("th",null,[Object(r["i"])(l,{to:"/Gym/".concat(t.GymID)},{default:Object(r["E"])((function(){return[ht]})),_:2},1032,["to"])])])})),128))])])])}var kt={computed:{theGym:function(){return this.$store.state.gym}}};const wt=A()(kt,[["render",vt]]);var Pt=wt,Et=Object(r["g"])("h1",null,"Not Found",-1),xt=Object(r["g"])("h4",null,"Sorry, this page can't be found.",-1),At=[Et,xt];function Ft(t,e,n,a,c,o){return Object(r["r"])(),Object(r["f"])("div",null,At)}var Gt={};const St=A()(Gt,[["render",Ft]]);var $t=St,Mt={class:"row justify-content-center"},Ut={class:"col-lg-10"},_t={class:"card"},Lt={class:"card-body"},Bt=Object(r["g"])("h4",null,"Make a Payment",-1),Ct={class:"mb-3"},Dt=Object(r["g"])("label",{for:"rating-input",class:"form-label"},"Amount",-1),It={class:"mb-3"},Nt=Object(r["g"])("label",{for:"summary-input",class:"form-label"},"Date",-1),qt=Object(r["g"])("button",{type:"submit",class:"btn btn-primary"}," Submit Payment",-1),Vt={key:0,class:"form-text text-danger"};function Tt(t,e,n,a,c,o){return Object(r["r"])(),Object(r["f"])("div",null,[Object(r["g"])("div",Mt,[Object(r["g"])("div",Ut,[Object(r["g"])("div",_t,[Object(r["g"])("div",Lt,[Bt,Object(r["g"])("form",{id:"review-form",onSubmit:e[3]||(e[3]=Object(r["G"])((function(){return o.submitPayment&&o.submitPayment.apply(o,arguments)}),["prevent"]))},[Object(r["g"])("div",Ct,[Dt,Object(r["F"])(Object(r["g"])("input",{type:"number",class:"form-control",id:"rating-input",required:"",min:"1",max:"9999","onUpdate:modelValue":e[0]||(e[0]=function(t){return c.amount=t})},null,512),[[r["C"],c.amount]])]),Object(r["g"])("div",It,[Nt,Object(r["F"])(Object(r["g"])("input",{type:"text",row:"3",class:"form-control",id:"summary-input",required:"","onUpdate:modelValue":e[1]||(e[1]=function(t){return c.date=t})},null,512),[[r["C"],c.date]])]),qt,Object(r["g"])("button",{onClick:e[2]||(e[2]=function(){return o.cancelPayment&&o.cancelPayment.apply(o,arguments)}),type:"clear",class:"btn btn-outline-danger"}," Cancel "),c.errorMessage?(Object(r["r"])(),Object(r["f"])("p",Vt,Object(r["A"])(c.errorMessage),1)):Object(r["e"])("",!0)],32)])])])])])}var zt={data:function(){return{amount:null,date:"",errorMessage:null}},methods:{submitPayment:function(){var t=this,e={amount:this.amount,date:this.date,gymIDFK:this.$route.params.pk};_.a.post("/Payment",e,{headers:{Authorization:"Bearer ".concat(this.$store.state.token)}}).then((function(){t.$router.replace("/account")})).catch((function(){t.errorMessage="Unable to make a payment, please try again later"}))},cancelPayment:function(){this.$router.go(-1)}}};n("d28d");const Kt=A()(zt,[["render",Tt]]);var Jt=Kt,Ht=Object(r["g"])("h1",null,"Signup",-1),Rt={class:"mb-3"},Qt=Object(r["g"])("label",{for:"fname-input",class:"form-label"},"First name",-1),Wt={class:"mb-3"},Xt=Object(r["g"])("label",{for:"lname-input",class:"form-label"},"Last name",-1),Yt={class:"mb-3"},Zt=Object(r["g"])("label",{for:"email-input",class:"form-label"},"Email",-1),te={key:0,class:"text-danger"},ee={class:"mb-3"},ne=Object(r["g"])("label",{for:"password-input",class:"form-label"},"Password",-1),re=Object(r["g"])("button",{type:"submit",class:"btn btn-primary"},"Submit",-1),ae={id:"error-signup",class:"text-danger"};function ce(t,e,n,a,c,o){return Object(r["r"])(),Object(r["f"])("div",null,[Ht,Object(r["g"])("form",{onSubmit:e[4]||(e[4]=Object(r["G"])((function(){return o.onSubmit&&o.onSubmit.apply(o,arguments)}),["prevent"]))},[Object(r["g"])("div",Rt,[Qt,Object(r["F"])(Object(r["g"])("input",{type:"text",class:"form-control",id:"fname-input",required:"",placeholder:"First name","onUpdate:modelValue":e[0]||(e[0]=function(t){return c.nameFirst=t})},null,512),[[r["C"],c.nameFirst]])]),Object(r["g"])("div",Wt,[Xt,Object(r["F"])(Object(r["g"])("input",{type:"text",class:"form-control",id:"lname-input",required:"",placeholder:"Last name","onUpdate:modelValue":e[1]||(e[1]=function(t){return c.nameLast=t})},null,512),[[r["C"],c.nameLast]])]),Object(r["g"])("div",Yt,[Zt,Object(r["F"])(Object(r["g"])("input",{type:"email",class:"form-control",id:"email-input",required:"",placeholder:"Enter email","onUpdate:modelValue":e[2]||(e[2]=function(t){return c.email=t})},null,512),[[r["C"],c.email]]),c.dupEmail?(Object(r["r"])(),Object(r["f"])("small",te,"Please choose a different email")):Object(r["e"])("",!0)]),Object(r["g"])("div",ee,[ne,Object(r["F"])(Object(r["g"])("input",{type:"password",class:"form-control",id:"password-input",placeholder:"Password",required:"","onUpdate:modelValue":e[3]||(e[3]=function(t){return c.password=t})},null,512),[[r["C"],c.password]])]),re,Object(r["g"])("p",ae,Object(r["A"])(c.errorMessage),1)],32)])}var oe={data:function(){return{nameFirst:"",nameLast:"",email:"",password:"",errorMessage:"",dupEmail:!1}},methods:{onSubmit:function(){var t=this,e={nameFirst:this.NameFirst,nameLast:this.NameLast,email:this.Email,password:this.Password};_.a.post("/GymMember",e).then((function(e){console.log("the response",e),t.$router.replace("/login?signupsuccess=true")})).catch((function(e){409===e.response.status?t.dupEmail=!0:t.errorMessage="Cannot sign you up, please try again later"}))}}};const le=A()(oe,[["render",ce]]);var se=le,ue=Object(r["g"])("h1",null,"Account",-1),ie=Object(r["g"])("hr",null,null,-1),be={key:0,class:"text-danger"},me={key:1,class:"table"},de=Object(r["g"])("thead",null,[Object(r["g"])("th",null,"Payment ID"),Object(r["g"])("th",null,"Amount"),Object(r["g"])("th",null,"Date")],-1);function je(t,e,n,a,c,o){var l=Object(r["y"])("router-link");return Object(r["r"])(),Object(r["f"])("div",null,[ue,ie,Object(r["g"])("h3",null,Object(r["A"])(o.firstName)+"'s Payments",1),c.accountError?(Object(r["r"])(),Object(r["f"])("p",be," Cannot get your account information, please try again later ")):Object(r["e"])("",!0),c.paymentsByUser?(Object(r["r"])(),Object(r["f"])("table",me,[de,Object(r["g"])("tbody",null,[(Object(r["r"])(!0),Object(r["f"])(r["a"],null,Object(r["x"])(c.paymentsByUser,(function(e){return Object(r["r"])(),Object(r["f"])("tr",{key:e.PaymentPK},[Object(r["g"])("th",null,[Object(r["i"])(l,{to:"/gym/".concat(t.thisGym.gymIDFK)},{default:Object(r["E"])((function(){return[Object(r["h"])(Object(r["A"])(e.paymentID),1)]})),_:2},1032,["to"])]),Object(r["g"])("th",null,Object(r["A"])(e.amount),1),Object(r["g"])("th",null,Object(r["A"])(e.Date),1)])})),128))])])):Object(r["e"])("",!0)])}var Oe={data:function(){return{paymentsByUser:null,accountError:!1}},computed:{firstName:function(){return console.log("here is the store so far",this.$store.state),this.$store.state.user.NameFirst}},created:function(){var t=this;_.a.get("/Payment/me",{headers:{Authorization:"Bearer ".concat(this.$store.state.token)}}).then((function(e){console.log("here is the response",e),t.paymentsByUser=e.data})).catch((function(){t.accountError=!0}))}};const pe=A()(Oe,[["render",je]]);var ge=pe,fe=n("5502"),ye=Object(fe["a"])({state:{token:null,user:null,gym:[]},mutations:{storeTokenInApp:function(t,e){t.token=e},storeUserInApp:function(t,e){t.user=e},storeGym:function(t,e){t.gym=e},clearAuthData:function(t){t.token=null,t.user=null}},actions:{getGym:function(t){var e=t.commit;_.a.get("/gym").then((function(t){console.log("response in /gym",t),e("storeGym",t.data)}))},logout:function(t){var e=t.commit,n=t.state;_.a.post("/GymMember/logout",null,{headers:{Authorization:"Bearer ".concat(n.token)}}).then((function(){e("clearAuthData"),ve.replace("/")})).catch((function(){console.log("error in logging out")}))}}}),he=Object(L["a"])({history:Object(L["b"])(),routes:[{path:"/",component:q},{path:"/account",component:ge,beforeEnter:function(t,e,n){ye.state.token?n():n("/login")}},{path:"/login",component:tt},{path:"/gym",component:Pt},{path:"/gym/:pk",component:Ot,children:[{path:"payment",component:Jt}]},{path:"/signup",component:se},{path:"/:invalidroute(.*)",component:$t}]}),ve=he;_.a.defaults.baseURL="https://cis410-fa21-bailey-api.azurewebsites.net";var ke=Object(r["c"])(M);ke.use(ve),ke.use(ye),ke.mount("#app")},"5cbf":function(t,e,n){"use strict";n("2c76")},cb4e:function(t,e,n){},d28d:function(t,e,n){"use strict";n("cb4e")}});
//# sourceMappingURL=app.5b662409.js.map