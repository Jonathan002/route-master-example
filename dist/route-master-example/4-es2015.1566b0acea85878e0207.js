(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"/v/b":function(l,n,u){"use strict";u.r(n);var t=u("8Y7J");class e{}var a=u("pMnS"),o=u("7BTq"),r=u("b3jE");class s{constructor(){}ngOnInit(){}}var i=t.qb({encapsulation:0,styles:[[""]],data:{}});function b(l){return t.Ob(0,[(l()(),t.sb(0,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),t.Mb(-1,null,["Lazy Modal"])),(l()(),t.sb(2,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Mb(-1,null,["Hello from Lazy Modal Component!"])),(l()(),t.sb(4,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Mb(-1,null,["Lazy Routing Demo is complete! Enjoy keeping Lazy Modules lazy and encapsulated since AppModule no longer needs to know about their components. :)"])),(l()(),t.sb(6,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Mb(-1,null,["For more information, please refer to the code in this example project to see how Route Master is set up."])),(l()(),t.sb(8,0,null,null,1,"app-close-modal-button",[],null,null,null,o.b,o.a)),t.rb(9,114688,null,0,r.a,[],null,null)],function(l,n){l(n,9,0)},null)}function c(l){return t.Ob(0,[(l()(),t.sb(0,0,null,null,1,"app-lazy-modal",[],null,null,null,b,i)),t.rb(1,114688,null,0,s,[],null,null)],function(l,n){l(n,1,0)},null)}var m=t.ob("app-lazy-modal",s,c,{},{},[]),p=u("SVse"),d=u("9AJC"),h=u("G0yt"),g=u("iInd");class f{constructor(){this.showErrorAlert=!1,this.mainFeature=[{description:"The anchor button below will fail as Angular does not allow lazy components to be routed outside it's own module.\n      See the browser console for error when the button is clicked.",routerLink:["",{outlets:{"ng-router-app-wide-modal":["lazy-modal"]}}],anchorText:"Open Lazy Modal - Outlet: 'ng-router-app-wide-modal'",onClick:()=>{this.showErrorAlert=!0}},{description:"Using Route Master, you may freely add a custom component from a lazy module and have it routed outside the\n      module.",routerLink:["",{outlets:{"rm-router-app-wide-modal":["lazy-modal"]}}],anchorText:"Open Lazy Modal - Outlet: 'rm-router-app-wide-modal'"}],this.otherFeatures=[{description:"404 Routing",routerLink:["",{outlets:{"rm-router-app-wide-modal":["lazy-404-modal","404-child"]}}],anchorText:"Open 404 Modal - Outlet: 'rm-router-app-wide-modal'"},{description:":Route-Parameters",routerLink:["",{outlets:{"rm-router-app-wide-modal":["route-param-modal","123"]}}],anchorText:"Open Route Parameters :id = 123 - Outlet: 'rm-router-app-wide-modal'"},{description:"Static Route Data",routerLink:["",{outlets:{"rm-router-app-wide-modal":["static-route-data-modal"]}}],anchorText:"Open Static Route Data Modal - Outlet: 'rm-router-app-wide-modal'"},{description:"Can Activate Guard",routerLink:["",{outlets:{"rm-router-app-wide-modal":["guarded-modal"]}}],anchorText:"Open Guarded Modal - Outlet: 'rm-router-app-wide-modal'"},{description:"Add Predefined Classes for Created Components",routerLink:["",{outlets:{"custom-classes-modal":["lazy-modal"]}}],anchorText:"Open Lazy Modal Again - Outlet: 'custom-classes-modal'"}],this.complexRouteTesting=[{description:"Test a Complex Route with Route Master",routerLink:["",{outlets:{"rm-router-app-wide-modal":["complex","456","demo","789",{matrixData:"red pill",fooBar:"barFoo"}]}}],queryParams:{foo:"bar",data:!0},fragment:"my-special-fragment",anchorText:"Test A Complex Route - Outlet: 'rm-router-app-wide-modal'"}]}ngOnInit(){}}var y=t.qb({encapsulation:0,styles:[[""]],data:{}});function v(l){return t.Ob(0,[(l()(),t.sb(0,16777216,null,null,2,null,null,null,null,null,null,null)),t.rb(1,540672,null,0,p.q,[t.N],{ngTemplateOutletContext:[0,"ngTemplateOutletContext"],ngTemplateOutlet:[1,"ngTemplateOutlet"]},null),t.Hb(2,{$implicit:0,isFirst:1}),(l()(),t.hb(0,null,null,0))],function(l,n){var u=l(n,2,0,n.context.$implicit,n.context.first);l(n,1,0,u,t.Eb(n.parent,20))},null)}function M(l){return t.Ob(0,[(l()(),t.sb(0,16777216,null,null,2,null,null,null,null,null,null,null)),t.rb(1,540672,null,0,p.q,[t.N],{ngTemplateOutletContext:[0,"ngTemplateOutletContext"],ngTemplateOutlet:[1,"ngTemplateOutlet"]},null),t.Hb(2,{$implicit:0}),(l()(),t.hb(0,null,null,0))],function(l,n){var u=l(n,2,0,n.context.$implicit);l(n,1,0,u,t.Eb(n.parent,20))},null)}function C(l){return t.Ob(0,[(l()(),t.sb(0,16777216,null,null,2,null,null,null,null,null,null,null)),t.rb(1,540672,null,0,p.q,[t.N],{ngTemplateOutletContext:[0,"ngTemplateOutletContext"],ngTemplateOutlet:[1,"ngTemplateOutlet"]},null),t.Hb(2,{$implicit:0}),(l()(),t.hb(0,null,null,0))],function(l,n){var u=l(n,2,0,n.context.$implicit);l(n,1,0,u,t.Eb(n.parent,20))},null)}function O(l){return t.Ob(0,[(l()(),t.sb(0,0,null,null,2,"ngb-alert",[["class","alert"],["role","alert"]],[[2,"alert-dismissible",null]],[[null,"close"]],function(l,n,u){var t=!0;return"close"===n&&(t=0!=(l.component.showErrorAlert=!1)&&t),t},d.d,d.c)),t.rb(1,638976,null,0,h.d,[h.e,t.C,t.k],{type:[0,"type"]},{close:"close"}),(l()(),t.Mb(-1,0,["Angular Lazy Route Error Occurred: Check the console for details"]))],function(l,n){l(n,1,0,"danger")},function(l,n){l(n,0,0,t.Eb(n,1).dismissible)})}function w(l){return t.Ob(0,[(l()(),t.sb(0,0,null,null,10,"div",[["class","mb-3"]],null,null,null,null,null)),(l()(),t.sb(1,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Mb(2,null,["",""])),(l()(),t.hb(16777216,null,null,1,null,O)),t.rb(4,16384,null,0,p.n,[t.N,t.K],{ngIf:[0,"ngIf"]},null),(l()(),t.sb(5,0,null,null,5,"a",[["class","btn"],["role","button"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t.Eb(l,6).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&e),"click"===n&&(e=!1!==(l.context.$implicit.onClick?l.context.$implicit.onClick():null)&&e),e},null,null)),t.rb(6,671744,null,0,g.o,[g.l,g.a,p.k],{queryParams:[0,"queryParams"],fragment:[1,"fragment"],routerLink:[2,"routerLink"]},null),t.Jb(512,null,p.D,p.E,[t.r,t.s,t.k,t.C]),t.rb(8,278528,null,0,p.l,[p.D],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),(l()(),t.Mb(9,null,["",""])),t.Ib(10,1)],function(l,n){l(n,4,0,n.context.isFirst&&n.component.showErrorAlert),l(n,6,0,n.context.$implicit.queryParams?n.context.$implicit.queryParams:null,n.context.$implicit.fragment?n.context.$implicit.fragment:null,n.context.$implicit.routerLink),l(n,8,0,"btn",n.context.isFirst?"btn-warning":"btn-primary")},function(l,n){l(n,2,0,n.context.$implicit.description),l(n,5,0,t.Eb(n,6).target,t.Eb(n,6).href);var u=t.Nb(n,9,0,l(n,10,0,t.Eb(n.parent,0),n.context.$implicit.anchorText));l(n,9,0,u)})}function x(l){return t.Ob(0,[t.Gb(0,p.v,[]),(l()(),t.sb(1,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),t.Mb(-1,null,["Welcome to LazyComponent"])),(l()(),t.sb(3,0,null,null,1,"div",[["class","mb-3"]],null,null,null,null,null)),(l()(),t.Mb(-1,null,[' Lazy Loaded From "Lazy Module"\n'])),(l()(),t.sb(5,0,null,null,4,"section",[["class","mb-4"]],null,null,null,null,null)),(l()(),t.sb(6,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),t.Mb(-1,null,["Main Feature"])),(l()(),t.hb(16777216,null,null,1,null,v)),t.rb(9,278528,null,0,p.m,[t.N,t.K,t.r],{ngForOf:[0,"ngForOf"]},null),(l()(),t.sb(10,0,null,null,4,"section",[],null,null,null,null,null)),(l()(),t.sb(11,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),t.Mb(-1,null,["Other Features to Explore"])),(l()(),t.hb(16777216,null,null,1,null,M)),t.rb(14,278528,null,0,p.m,[t.N,t.K,t.r],{ngForOf:[0,"ngForOf"]},null),(l()(),t.sb(15,0,null,null,4,"section",[],null,null,null,null,null)),(l()(),t.sb(16,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),t.Mb(-1,null,["Complex Route Testing"])),(l()(),t.hb(16777216,null,null,1,null,C)),t.rb(19,278528,null,0,p.m,[t.N,t.K,t.r],{ngForOf:[0,"ngForOf"]},null),(l()(),t.hb(0,[["divTemplate",2]],null,0,null,w))],function(l,n){var u=n.component;l(n,9,0,u.mainFeature),l(n,14,0,u.otherFeatures),l(n,19,0,u.complexRouteTesting)},null)}function T(l){return t.Ob(0,[(l()(),t.sb(0,0,null,null,1,"app-lazy",[],null,null,null,x,y)),t.rb(1,114688,null,0,f,[],null,null)],function(l,n){l(n,1,0)},null)}var A=t.ob("app-lazy",f,T,{},{},[]);class R{constructor(l,n,u){this.route=l,this.router=n,this.rm=u}ngOnInit(){console.log("--- Next 2 logs test Angular ActivatedRoute.paramMap & Angular ActivatedRoute.params: ----"),this.route.paramMap.subscribe(l=>{console.log("- Angular ActivatedRoute.paramMap 'id' is unavailable at RouteParamModalComponent - Captured Value: ",l.get("id"))}),this.route.params.subscribe(l=>{console.log("- Angular ActivatedRoute.params unavailable in RouteParamModalComponent - Captured Value: ",l)}),this.paramMapData=this.rm.paramMap("rm-router-app-wide-modal").get("id"),this.params=this.rm.params("rm-router-app-wide-modal"),this.paramDataType=typeof this.paramMapData}}var L=u("EL7e"),k=t.qb({encapsulation:0,styles:[[""]],data:{}});function z(l){return t.Ob(0,[(l()(),t.sb(0,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),t.Mb(-1,null,["Lazy Route Param Modal"])),(l()(),t.sb(2,0,null,null,16,"div",[["class","mb-3"]],null,null,null,null,null)),(l()(),t.sb(3,0,null,null,1,"p",[["class","mb-0"]],null,null,null,null,null)),(l()(),t.Mb(-1,null,["Use Route Master to capture Route Parameters"])),(l()(),t.sb(5,0,null,null,1,"small",[["class","mb-3 d-block"]],null,null,null,null,null)),(l()(),t.Mb(-1,null,[" Necessary as Angular's ActivatedRoute route parameters are not yet available for lazy components. "])),(l()(),t.sb(7,0,null,null,3,"p",[],null,null,null,null,null)),(l()(),t.sb(8,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),t.Mb(-1,null,["Route Param Key:"])),(l()(),t.Mb(-1,null,[" ':id'"])),(l()(),t.sb(11,0,null,null,3,"p",[],null,null,null,null,null)),(l()(),t.sb(12,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),t.Mb(-1,null,["Captured Route Param:"])),(l()(),t.Mb(14,null,[" '","'"])),(l()(),t.sb(15,0,null,null,3,"p",[],null,null,null,null,null)),(l()(),t.sb(16,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),t.Mb(-1,null,["Typeof Captured Route Param:"])),(l()(),t.Mb(18,null,[" ",""])),(l()(),t.sb(19,0,null,null,1,"app-close-modal-button",[],null,null,null,o.b,o.a)),t.rb(20,114688,null,0,r.a,[],null,null)],function(l,n){l(n,20,0)},function(l,n){var u=n.component;l(n,14,0,u.paramMapData),l(n,18,0,u.paramDataType)})}function D(l){return t.Ob(0,[(l()(),t.sb(0,0,null,null,1,"app-route-param-modal",[],null,null,null,z,k)),t.rb(1,114688,null,0,R,[g.a,g.l,L.g],null,null)],function(l,n){l(n,1,0)},null)}var E=t.ob("app-route-param-modal",R,D,{},{},[]);class F{constructor(l,n){this.route=l,this.rm=n}ngOnInit(){this.params=this.rm.params("rm-router-app-wide-modal"),this.routeData=this.rm.data("rm-router-app-wide-modal"),this.querySub=this.route.queryParams.subscribe(l=>this.queryParams=l),this.fragmentSub=this.route.fragment.subscribe(l=>this.fragment=l)}ngOnDestroy(){this.querySub.unsubscribe(),this.fragmentSub.unsubscribe()}}var N=t.qb({encapsulation:0,styles:[[""]],data:{}});function I(l){return t.Ob(0,[(l()(),t.sb(0,0,null,null,8,"li",[["class","p-2"]],null,null,null,null,null)),(l()(),t.sb(1,0,null,null,3,"div",[],null,null,null,null,null)),(l()(),t.sb(2,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),t.Mb(-1,null,["Route Param Key:"])),(l()(),t.Mb(4,null,[" ':","'"])),(l()(),t.sb(5,0,null,null,3,"div",[],null,null,null,null,null)),(l()(),t.sb(6,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),t.Mb(-1,null,["Captured Route Param:"])),(l()(),t.Mb(8,null,[" '","'"]))],null,function(l,n){l(n,4,0,n.context.$implicit.key),l(n,8,0,n.context.$implicit.value)})}function q(l){return t.Ob(0,[(l()(),t.sb(0,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),t.Mb(-1,null,["Complex Modal"])),(l()(),t.sb(2,0,null,null,1,"div",[["class","mb-2"]],null,null,null,null,null)),(l()(),t.Mb(-1,null,[" Test to confirm multiple route parameters, route data, and observable route guard all work.\n"])),(l()(),t.sb(4,0,null,null,16,"div",[["class","d-flex justify-content-between align-items-start"]],null,null,null,null,null)),(l()(),t.sb(5,0,null,null,7,"div",[["class","mr-3"]],null,null,null,null,null)),(l()(),t.sb(6,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),t.sb(7,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),t.Mb(-1,null,["Route-parameters"])),(l()(),t.sb(9,0,null,null,3,"ul",[],null,null,null,null,null)),(l()(),t.hb(16777216,null,null,2,null,I)),t.rb(11,278528,null,0,p.m,[t.N,t.K,t.r],{ngForOf:[0,"ngForOf"]},null),t.Gb(0,p.h,[t.s]),(l()(),t.sb(13,0,null,null,7,"div",[["class","mr-3"]],null,null,null,null,null)),(l()(),t.sb(14,0,null,null,3,"div",[],null,null,null,null,null)),(l()(),t.sb(15,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),t.Mb(-1,null,["Data"])),(l()(),t.Mb(-1,null,[": "])),(l()(),t.sb(18,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),t.Mb(19,null,[" "," "])),t.Gb(0,p.g,[]),(l()(),t.sb(21,0,null,null,0,"hr",[],null,null,null,null,null)),(l()(),t.sb(22,0,null,null,14,"div",[["class","mb-3"]],null,null,null,null,null)),(l()(),t.sb(23,0,null,null,1,"div",[["class","mb-2"]],null,null,null,null,null)),(l()(),t.Mb(-1,null,[" Test to confirm other native route functionality still works. "])),(l()(),t.sb(25,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),t.sb(26,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),t.Mb(-1,null,["ActivatedRoute Query Parameters:"])),(l()(),t.sb(28,0,null,null,2,"code",[],null,null,null,null,null)),(l()(),t.Mb(29,null,[" "," "])),t.Gb(0,p.g,[]),(l()(),t.sb(31,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),t.sb(32,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),t.Mb(-1,null,["ActivatedRoute Query Parameters:"])),(l()(),t.sb(34,0,null,null,2,"code",[],null,null,null,null,null)),(l()(),t.Mb(35,null,[" "," "])),t.Gb(0,p.g,[]),(l()(),t.sb(37,0,null,null,1,"app-close-modal-button",[],null,null,null,o.b,o.a)),t.rb(38,114688,null,0,r.a,[],null,null)],function(l,n){var u=n.component;l(n,11,0,t.Nb(n,11,0,t.Eb(n,12).transform(u.params))),l(n,38,0)},function(l,n){var u=n.component;l(n,19,0,t.Nb(n,19,0,t.Eb(n,20).transform(u.routeData))),l(n,29,0,t.Nb(n,29,0,t.Eb(n,30).transform(u.queryParams))),l(n,35,0,t.Nb(n,35,0,t.Eb(n,36).transform(u.fragment)))})}function P(l){return t.Ob(0,[(l()(),t.sb(0,0,null,null,1,"app-complex-modal",[],null,null,null,q,N)),t.rb(1,245760,null,0,F,[g.a,L.g],null,null)],function(l,n){l(n,1,0)},null)}var $=t.ob("app-complex-modal",F,P,{},{},[]);class S{constructor(l){this.rm=l}ngOnInit(){this.outletData$=this.rm.data$("rm-router-app-wide-modal"),this.outletDataSubscription=this.outletData$.subscribe(l=>{console.log("Subscribe to outlet data",l)}),this.outletCurrentData=this.rm.data("rm-router-app-wide-modal"),console.log("log outletCurrentData",this.outletCurrentData)}ngOnDestroy(){this.outletDataSubscription.unsubscribe()}}var j=t.qb({encapsulation:0,styles:[[""]],data:{}});function G(l){return t.Ob(0,[(l()(),t.sb(0,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),t.Mb(-1,null,["Static Route Data Modal"])),(l()(),t.sb(2,0,null,null,23,"div",[["class","mb-3"]],null,null,null,null,null)),(l()(),t.sb(3,0,null,null,1,"p",[["class","mb-0"]],null,null,null,null,null)),(l()(),t.Mb(-1,null,["2 ways to pass static data to lazy components:"])),(l()(),t.sb(5,0,null,null,9,"div",[["class","mb-3"]],null,null,null,null,null)),(l()(),t.sb(6,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),t.sb(7,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),t.Mb(-1,null,["Static Data:"])),(l()(),t.sb(9,0,null,null,5,"div",[],null,null,null,null,null)),(l()(),t.sb(10,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t.Mb(-1,null,["this.rm.data('outletName'):"])),(l()(),t.sb(12,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),t.Mb(13,null,["=> ",""])),t.Gb(0,p.g,[]),(l()(),t.sb(15,0,null,null,10,"div",[["class","mb-3"]],null,null,null,null,null)),(l()(),t.sb(16,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),t.sb(17,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),t.Mb(-1,null,["Stream Data:"])),(l()(),t.sb(19,0,null,null,6,"div",[],null,null,null,null,null)),(l()(),t.sb(20,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t.Mb(-1,null,["this.rm.data$('outletName').subscribe():"])),(l()(),t.sb(22,0,null,null,3,"div",[],null,null,null,null,null)),(l()(),t.Mb(23,null,["=> ",""])),t.Gb(131072,p.b,[t.h]),t.Gb(0,p.g,[]),(l()(),t.sb(26,0,null,null,1,"app-close-modal-button",[],null,null,null,o.b,o.a)),t.rb(27,114688,null,0,r.a,[],null,null)],function(l,n){l(n,27,0)},function(l,n){var u=n.component;l(n,13,0,t.Nb(n,13,0,t.Eb(n,14).transform(u.outletCurrentData))),l(n,23,0,t.Nb(n,23,0,t.Eb(n,25).transform(t.Nb(n,23,0,t.Eb(n,24).transform(u.outletData$)))))})}function K(l){return t.Ob(0,[(l()(),t.sb(0,0,null,null,1,"app-static-data",[],null,null,null,G,j)),t.rb(1,245760,null,0,S,[L.g],null,null)],function(l,n){l(n,1,0)},null)}var V=t.ob("app-static-data",S,K,{},{},[]);class Q{constructor(){}ngOnInit(){}useArtifact(){return"https://www.youtube.com/watch?v=dQw4w9WgXcQ"}}var U=t.qb({encapsulation:0,styles:[[".img-size[_ngcontent-%COMP%]{width:300px;height:auto}"]],data:{}});function J(l){return t.Ob(0,[(l()(),t.sb(0,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),t.Mb(-1,null,["Legendary Routing Artifact Found!"])),(l()(),t.sb(2,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Mb(-1,null,["Wait!! What are you doing here?!! There should of been a guard to stop you!! Do not use this artifact!! Turn away and close this modal! It is too powerful and has unpredictable routing powers!!"])),(l()(),t.sb(4,0,null,null,1,"figure",[],null,null,null,null,null)),(l()(),t.sb(5,0,null,null,0,"img",[["alt","your screen reader is in awe with the awesome power of the legendary routing artifact.. There can be no words to describe it.."],["class","img-size"],["src","/assets/legendary-routing-artifact.png"]],null,null,null,null,null)),(l()(),t.sb(6,0,null,null,1,"a",[["class","btn btn-success d-inline-block m-2"]],[[8,"href",4]],null,null,null,null)),(l()(),t.Mb(-1,null,["COLLECT ARTIFACT AND USE IT!"])),(l()(),t.sb(8,0,null,null,1,"app-close-modal-button",[["buttonText","CLOSE MODAL AND LEAVE ARTIFACT ALONE"],["class","d-inline-block m-2"]],null,null,null,o.b,o.a)),t.rb(9,114688,null,0,r.a,[],{buttonText:[0,"buttonText"]},null)],function(l,n){l(n,9,0,"CLOSE MODAL AND LEAVE ARTIFACT ALONE")},function(l,n){l(n,6,0,n.component.useArtifact())})}function H(l){return t.Ob(0,[(l()(),t.sb(0,0,null,null,1,"app-guarded-modal",[],null,null,null,J,U)),t.rb(1,114688,null,0,Q,[],null,null)],function(l,n){l(n,1,0)},null)}var W=t.ob("app-guarded-modal",Q,H,{},{},[]),B=u("s7LF"),X=u("LRne");let Y=(()=>{class l{canActivate(l,n){return Object(X.a)(!0)}}return l.ngInjectableDef=t.Rb({factory:function(){return new l},token:l,providedIn:"root"}),l})();const _=[{path:"lazy-modal",component:s},{path:"route-param-modal/:id",component:R},{path:"static-route-data-modal",component:S,data:[1,2,3,4,5]},{path:"guarded-modal",component:Q,canActivate:[(()=>{class l{canActivate(l,n){return!0}}return l.ngInjectableDef=t.Rb({factory:function(){return new l},token:l,providedIn:"root"}),l})(),(()=>{class l{constructor(l){this.router=l}canActivate(l,n){const u=this.router.parseUrl("lazy-module(rm-router-app-wide-modal:unauthorized)");return new Promise((l,n)=>setTimeout(()=>{console.log("about to resolve tree"),l(u)},1500))}}return l.ngInjectableDef=t.Rb({factory:function(){return new l(t.Sb(g.l))},token:l,providedIn:"root"}),l})()]},{path:"complex/:route/demo/:with-more-params",component:F,data:[1,2,3,4,5],canActivate:[Y]}],Z=[{path:"lazy-modal",component:s}];class ll{constructor(l,n,u){this.componentFactoryResolver=l,this.injector=n,this.rm=u,console.log("Lazy Module Initialized!"),this.rm.registerRoutes({moduleName:"LazyRoutingModule",moduleFactory:this.componentFactoryResolver,moduleInjector:this.injector,moduleRoutes:{"rm-router-app-wide-modal":_,"custom-classes-modal":Z}})}}var nl=u("i2L+");u.d(n,"LazyModuleNgFactory",function(){return ul});var ul=t.pb(e,[],function(l){return t.Bb([t.Cb(512,t.j,t.ab,[[8,[a.a,m,A,d.a,d.b,d.h,d.i,d.e,d.f,d.g,E,$,V,W]],[3,t.j],t.w]),t.Cb(4608,p.p,p.o,[t.t,[2,p.G]]),t.Cb(4608,B.f,B.f,[]),t.Cb(4608,h.t,h.t,[t.j,t.q,h.ib,h.u]),t.Cb(1073742336,g.p,g.p,[[2,g.v],[2,g.l]]),t.Cb(1073742336,ll,ll,[t.j,t.q,L.g]),t.Cb(1073742336,p.c,p.c,[]),t.Cb(1073742336,h.c,h.c,[]),t.Cb(1073742336,h.f,h.f,[]),t.Cb(1073742336,h.g,h.g,[]),t.Cb(1073742336,h.k,h.k,[]),t.Cb(1073742336,h.l,h.l,[]),t.Cb(1073742336,B.e,B.e,[]),t.Cb(1073742336,B.a,B.a,[]),t.Cb(1073742336,h.q,h.q,[]),t.Cb(1073742336,h.r,h.r,[]),t.Cb(1073742336,h.v,h.v,[]),t.Cb(1073742336,h.z,h.z,[]),t.Cb(1073742336,h.C,h.C,[]),t.Cb(1073742336,h.F,h.F,[]),t.Cb(1073742336,h.I,h.I,[]),t.Cb(1073742336,h.L,h.L,[]),t.Cb(1073742336,h.Q,h.Q,[]),t.Cb(1073742336,h.T,h.T,[]),t.Cb(1073742336,h.U,h.U,[]),t.Cb(1073742336,h.V,h.V,[]),t.Cb(1073742336,h.w,h.w,[]),t.Cb(1073742336,nl.a,nl.a,[]),t.Cb(1073742336,e,e,[]),t.Cb(1024,g.j,function(){return[[{path:"lazy-modal",outlet:"ng-router-app-wide-modal",component:s},{path:"",component:f}]]},[])])})}}]);