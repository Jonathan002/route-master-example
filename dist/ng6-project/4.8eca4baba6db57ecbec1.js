(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"/v/b":function(l,n,u){"use strict";u.r(n);var t=u("CcnG"),e=function(){},a=u("pMnS"),o=u("7BTq"),r=u("b3jE"),i=function(){function l(){}return l.prototype.ngOnInit=function(){},l}(),s=t.qb({encapsulation:0,styles:[[""]],data:{}});function b(l){return t.Mb(0,[(l()(),t.sb(0,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),t.Kb(-1,null,["Lazy Modal"])),(l()(),t.sb(2,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Kb(-1,null,["Hello from Lazy Modal Component!"])),(l()(),t.sb(4,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Kb(-1,null,["Lazy Routing Demo is complete! Enjoy keeping Lazy Modules lazy and encapsulated since AppModule no longer needs to know about their components. :)"])),(l()(),t.sb(6,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Kb(-1,null,["For more information, please refer to the code in this example project to see how Route Master is set up."])),(l()(),t.sb(8,0,null,null,1,"app-close-modal-button",[],null,null,null,o.b,o.a)),t.rb(9,114688,null,0,r.a,[],null,null)],function(l,n){l(n,9,0)},null)}var c=t.ob("app-lazy-modal",i,function(l){return t.Mb(0,[(l()(),t.sb(0,0,null,null,1,"app-lazy-modal",[],null,null,null,b,s)),t.rb(1,114688,null,0,i,[],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),p=u("Ip0R"),m=u("4lDY"),d=u("o1U6"),f=u("e5OV"),h=u("ZYCi"),g=function(){function l(){var l=this;this.showErrorAlert=!1,this.mainFeature=[{description:"The anchor button below will fail as Angular does not allow lazy components to be routed outside it's own module.\n      See the browser console for error when the button is clicked.",routerLink:["",{outlets:{"ng-router-app-wide-modal":["lazy-modal"]}}],anchorText:"Open Lazy Modal - Outlet: 'ng-router-app-wide-modal'",onClick:function(){l.showErrorAlert=!0}},{description:"Using Route Master, you may freely add a custom component from a lazy module and have it routed outside the\n      module.",routerLink:["",{outlets:{"rm-router-app-wide-modal":["lazy-modal"]}}],anchorText:"Open Lazy Modal - Outlet: 'rm-router-app-wide-modal'"}],this.otherFeatures=[{description:"404 Routing",routerLink:["",{outlets:{"rm-router-app-wide-modal":["lazy-404-modal","404-child"]}}],anchorText:"Open 404 Modal - Outlet: 'rm-router-app-wide-modal'"},{description:":Route-Parameters",routerLink:["",{outlets:{"rm-router-app-wide-modal":["route-param-modal","123"]}}],anchorText:"Open Route Parameters :id = 123 - Outlet: 'rm-router-app-wide-modal'"},{description:"Static Route Data",routerLink:["",{outlets:{"rm-router-app-wide-modal":["static-route-data-modal"]}}],anchorText:"Open Static Route Data Modal - Outlet: 'rm-router-app-wide-modal'"},{description:"Can Activate Guard",routerLink:["",{outlets:{"rm-router-app-wide-modal":["guarded-modal"]}}],anchorText:"Open Guarded Modal - Outlet: 'rm-router-app-wide-modal'"},{description:"Add Predefined Classes for Created Components",routerLink:["",{outlets:{"custom-classes-modal":["lazy-modal"]}}],anchorText:"Open Lazy Modal Again - Outlet: 'custom-classes-modal'"}],this.complexRouteTesting=[{description:"Test a Complex Route with Route Master",routerLink:["",{outlets:{"rm-router-app-wide-modal":["complex","456","demo","789",{matrixData:"red pill",fooBar:"barFoo"}]}}],queryParams:{foo:"bar",data:!0},fragment:"my-special-fragment",anchorText:"Test A Complex Route - Outlet: 'rm-router-app-wide-modal'"}]}return l.prototype.ngOnInit=function(){},l}(),y=t.qb({encapsulation:0,styles:[[""]],data:{}});function v(l){return t.Mb(0,[(l()(),t.sb(0,16777216,null,null,2,null,null,null,null,null,null,null)),t.rb(1,540672,null,0,p.r,[t.R],{ngTemplateOutletContext:[0,"ngTemplateOutletContext"],ngTemplateOutlet:[1,"ngTemplateOutlet"]},null),t.Fb(2,{$implicit:0,isFirst:1}),(l()(),t.jb(0,null,null,0))],function(l,n){l(n,1,0,l(n,2,0,n.context.$implicit,n.context.first),t.Cb(n.parent,20))},null)}function A(l){return t.Mb(0,[(l()(),t.sb(0,16777216,null,null,2,null,null,null,null,null,null,null)),t.rb(1,540672,null,0,p.r,[t.R],{ngTemplateOutletContext:[0,"ngTemplateOutletContext"],ngTemplateOutlet:[1,"ngTemplateOutlet"]},null),t.Fb(2,{$implicit:0}),(l()(),t.jb(0,null,null,0))],function(l,n){l(n,1,0,l(n,2,0,n.context.$implicit),t.Cb(n.parent,20))},null)}function w(l){return t.Mb(0,[(l()(),t.sb(0,16777216,null,null,2,null,null,null,null,null,null,null)),t.rb(1,540672,null,0,p.r,[t.R],{ngTemplateOutletContext:[0,"ngTemplateOutletContext"],ngTemplateOutlet:[1,"ngTemplateOutlet"]},null),t.Fb(2,{$implicit:0}),(l()(),t.jb(0,null,null,0))],function(l,n){l(n,1,0,l(n,2,0,n.context.$implicit),t.Cb(n.parent,20))},null)}function O(l){return t.Mb(0,[(l()(),t.sb(0,0,null,null,2,"ngb-alert",[],null,[[null,"close"]],function(l,n,u){var t=!0;return"close"===n&&(t=0!=(l.component.showErrorAlert=!1)&&t),t},m.c,m.b)),t.rb(1,49152,null,0,d.a,[f.a],{type:[0,"type"]},{close:"close"}),(l()(),t.Kb(-1,0,["Angular Lazy Route Error Occurred: Check the console for details"]))],function(l,n){l(n,1,0,"danger")},null)}function C(l){return t.Mb(0,[(l()(),t.sb(0,0,null,null,9,"div",[["class","mb-3"]],null,null,null,null,null)),(l()(),t.sb(1,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Kb(2,null,["",""])),(l()(),t.jb(16777216,null,null,1,null,O)),t.rb(4,16384,null,0,p.o,[t.R,t.O],{ngIf:[0,"ngIf"]},null),(l()(),t.sb(5,0,null,null,4,"a",[["class","btn"],["role","button"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t.Cb(l,6).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&e),"click"===n&&(e=!1!==(l.context.$implicit.onClick?l.context.$implicit.onClick():null)&&e),e},null,null)),t.rb(6,671744,null,0,h.o,[h.l,h.a,p.l],{queryParams:[0,"queryParams"],fragment:[1,"fragment"],routerLink:[2,"routerLink"]},null),t.rb(7,278528,null,0,p.m,[t.u,t.v,t.l,t.F],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),(l()(),t.Kb(8,null,["",""])),t.Gb(9,1)],function(l,n){l(n,4,0,n.context.isFirst&&n.component.showErrorAlert),l(n,6,0,n.context.$implicit.queryParams?n.context.$implicit.queryParams:null,n.context.$implicit.fragment?n.context.$implicit.fragment:null,n.context.$implicit.routerLink),l(n,7,0,"btn",n.context.isFirst?"btn-warning":"btn-primary")},function(l,n){l(n,2,0,n.context.$implicit.description),l(n,5,0,t.Cb(n,6).target,t.Cb(n,6).href),l(n,8,0,t.Lb(n,8,0,l(n,9,0,t.Cb(n.parent,0),n.context.$implicit.anchorText)))})}function M(l){return t.Mb(0,[t.Eb(0,p.w,[]),(l()(),t.sb(1,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),t.Kb(-1,null,["Welcome to LazyComponent"])),(l()(),t.sb(3,0,null,null,1,"div",[["class","mb-3"]],null,null,null,null,null)),(l()(),t.Kb(-1,null,[' Lazy Loaded From "Lazy Module"\n'])),(l()(),t.sb(5,0,null,null,4,"section",[["class","mb-4"]],null,null,null,null,null)),(l()(),t.sb(6,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),t.Kb(-1,null,["Main Feature"])),(l()(),t.jb(16777216,null,null,1,null,v)),t.rb(9,278528,null,0,p.n,[t.R,t.O,t.u],{ngForOf:[0,"ngForOf"]},null),(l()(),t.sb(10,0,null,null,4,"section",[],null,null,null,null,null)),(l()(),t.sb(11,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),t.Kb(-1,null,["Other Features to Explore"])),(l()(),t.jb(16777216,null,null,1,null,A)),t.rb(14,278528,null,0,p.n,[t.R,t.O,t.u],{ngForOf:[0,"ngForOf"]},null),(l()(),t.sb(15,0,null,null,4,"section",[],null,null,null,null,null)),(l()(),t.sb(16,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),t.Kb(-1,null,["Complex Route Testing"])),(l()(),t.jb(16777216,null,null,1,null,w)),t.rb(19,278528,null,0,p.n,[t.R,t.O,t.u],{ngForOf:[0,"ngForOf"]},null),(l()(),t.jb(0,[["divTemplate",2]],null,0,null,C))],function(l,n){var u=n.component;l(n,9,0,u.mainFeature),l(n,14,0,u.otherFeatures),l(n,19,0,u.complexRouteTesting)},null)}var x=t.ob("app-lazy",g,function(l){return t.Mb(0,[(l()(),t.sb(0,0,null,null,1,"app-lazy",[],null,null,null,M,y)),t.rb(1,114688,null,0,g,[],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),K=u("qcfG"),R=u("xaNE"),T=u("FNNE"),L=u("gW6t"),k=u("u4HF"),z=u("aq8m"),D=function(){function l(l,n,u){this.route=l,this.router=n,this.rm=u}return l.prototype.ngOnInit=function(){console.log("--- Next 2 logs test Angular ActivatedRoute.paramMap & Angular ActivatedRoute.params: ----"),this.route.paramMap.subscribe(function(l){console.log("- Angular ActivatedRoute.paramMap 'id' is unavailable at RouteParamModalComponent - Captured Value: ",l.get("id"))}),this.route.params.subscribe(function(l){console.log("- Angular ActivatedRoute.params unavailable in RouteParamModalComponent - Captured Value: ",l)}),this.paramMapData=this.rm.paramMap("rm-router-app-wide-modal").get("id"),this.params=this.rm.params("rm-router-app-wide-modal"),this.paramDataType=typeof this.paramMapData},l}(),F=u("vg0k"),E=t.qb({encapsulation:0,styles:[[""]],data:{}});function P(l){return t.Mb(0,[(l()(),t.sb(0,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),t.Kb(-1,null,["Lazy Route Param Modal"])),(l()(),t.sb(2,0,null,null,16,"div",[["class","mb-3"]],null,null,null,null,null)),(l()(),t.sb(3,0,null,null,1,"p",[["class","mb-0"]],null,null,null,null,null)),(l()(),t.Kb(-1,null,["Use Route Master to capture Route Parameters"])),(l()(),t.sb(5,0,null,null,1,"small",[["class","mb-3 d-block"]],null,null,null,null,null)),(l()(),t.Kb(-1,null,[" Necessary as Angular's ActivatedRoute route parameters are not yet available for lazy components. "])),(l()(),t.sb(7,0,null,null,3,"p",[],null,null,null,null,null)),(l()(),t.sb(8,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),t.Kb(-1,null,["Route Param Key:"])),(l()(),t.Kb(-1,null,[" ':id'"])),(l()(),t.sb(11,0,null,null,3,"p",[],null,null,null,null,null)),(l()(),t.sb(12,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),t.Kb(-1,null,["Captured Route Param:"])),(l()(),t.Kb(14,null,[" '","'"])),(l()(),t.sb(15,0,null,null,3,"p",[],null,null,null,null,null)),(l()(),t.sb(16,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),t.Kb(-1,null,["Typeof Captured Route Param:"])),(l()(),t.Kb(18,null,[" ",""])),(l()(),t.sb(19,0,null,null,1,"app-close-modal-button",[],null,null,null,o.b,o.a)),t.rb(20,114688,null,0,r.a,[],null,null)],function(l,n){l(n,20,0)},function(l,n){var u=n.component;l(n,14,0,u.paramMapData),l(n,18,0,u.paramDataType)})}var j=t.ob("app-route-param-modal",D,function(l){return t.Mb(0,[(l()(),t.sb(0,0,null,null,1,"app-route-param-modal",[],null,null,null,P,E)),t.rb(1,114688,null,0,D,[h.a,h.l,F.g],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),I=function(){function l(l,n){this.route=l,this.rm=n}return l.prototype.ngOnInit=function(){var l=this;this.params=this.rm.params("rm-router-app-wide-modal"),this.routeData=this.rm.data("rm-router-app-wide-modal"),this.querySub=this.route.queryParams.subscribe(function(n){return l.queryParams=n}),this.fragmentSub=this.route.fragment.subscribe(function(n){return l.fragment=n})},l.prototype.ngOnDestroy=function(){this.querySub.unsubscribe(),this.fragmentSub.unsubscribe()},l}(),$=t.qb({encapsulation:0,styles:[[""]],data:{}});function q(l){return t.Mb(0,[(l()(),t.sb(0,0,null,null,8,"li",[["class","p-2"]],null,null,null,null,null)),(l()(),t.sb(1,0,null,null,3,"div",[],null,null,null,null,null)),(l()(),t.sb(2,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),t.Kb(-1,null,["Route Param Key:"])),(l()(),t.Kb(4,null,[" ':","'"])),(l()(),t.sb(5,0,null,null,3,"div",[],null,null,null,null,null)),(l()(),t.sb(6,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),t.Kb(-1,null,["Captured Route Param:"])),(l()(),t.Kb(8,null,[" '","'"]))],null,function(l,n){l(n,4,0,n.context.$implicit.key),l(n,8,0,n.context.$implicit.value)})}function S(l){return t.Mb(0,[(l()(),t.sb(0,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),t.Kb(-1,null,["Complex Modal"])),(l()(),t.sb(2,0,null,null,1,"div",[["class","mb-2"]],null,null,null,null,null)),(l()(),t.Kb(-1,null,[" Test to confirm multiple route parameters, route data, and observable route guard all work.\n"])),(l()(),t.sb(4,0,null,null,16,"div",[["class","d-flex justify-content-between align-items-start"]],null,null,null,null,null)),(l()(),t.sb(5,0,null,null,7,"div",[["class","mr-3"]],null,null,null,null,null)),(l()(),t.sb(6,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),t.sb(7,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),t.Kb(-1,null,["Route-parameters"])),(l()(),t.sb(9,0,null,null,3,"ul",[],null,null,null,null,null)),(l()(),t.jb(16777216,null,null,2,null,q)),t.rb(11,278528,null,0,p.n,[t.R,t.O,t.u],{ngForOf:[0,"ngForOf"]},null),t.Eb(0,p.i,[t.v]),(l()(),t.sb(13,0,null,null,7,"div",[["class","mr-3"]],null,null,null,null,null)),(l()(),t.sb(14,0,null,null,3,"div",[],null,null,null,null,null)),(l()(),t.sb(15,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),t.Kb(-1,null,["Data"])),(l()(),t.Kb(-1,null,[": "])),(l()(),t.sb(18,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),t.Kb(19,null,[" "," "])),t.Eb(0,p.h,[]),(l()(),t.sb(21,0,null,null,0,"hr",[],null,null,null,null,null)),(l()(),t.sb(22,0,null,null,14,"div",[["class","mb-3"]],null,null,null,null,null)),(l()(),t.sb(23,0,null,null,1,"div",[["class","mb-2"]],null,null,null,null,null)),(l()(),t.Kb(-1,null,[" Test to confirm other native route functionality still works. "])),(l()(),t.sb(25,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),t.sb(26,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),t.Kb(-1,null,["ActivatedRoute Query Parameters:"])),(l()(),t.sb(28,0,null,null,2,"code",[],null,null,null,null,null)),(l()(),t.Kb(29,null,[" "," "])),t.Eb(0,p.h,[]),(l()(),t.sb(31,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),t.sb(32,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),t.Kb(-1,null,["ActivatedRoute Query Parameters:"])),(l()(),t.sb(34,0,null,null,2,"code",[],null,null,null,null,null)),(l()(),t.Kb(35,null,[" "," "])),t.Eb(0,p.h,[]),(l()(),t.sb(37,0,null,null,1,"app-close-modal-button",[],null,null,null,o.b,o.a)),t.rb(38,114688,null,0,r.a,[],null,null)],function(l,n){var u=n.component;l(n,11,0,t.Lb(n,11,0,t.Cb(n,12).transform(u.params))),l(n,38,0)},function(l,n){var u=n.component;l(n,19,0,t.Lb(n,19,0,t.Cb(n,20).transform(u.routeData))),l(n,29,0,t.Lb(n,29,0,t.Cb(n,30).transform(u.queryParams))),l(n,35,0,t.Lb(n,35,0,t.Cb(n,36).transform(u.fragment)))})}var N=t.ob("app-complex-modal",I,function(l){return t.Mb(0,[(l()(),t.sb(0,0,null,null,1,"app-complex-modal",[],null,null,null,S,$)),t.rb(1,245760,null,0,I,[h.a,F.g],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),V=function(){function l(l){this.rm=l}return l.prototype.ngOnInit=function(){this.outletData$=this.rm.data$("rm-router-app-wide-modal"),this.outletDataSubscription=this.outletData$.subscribe(function(l){console.log("Subscribe to outlet data",l)}),this.outletCurrentData=this.rm.data("rm-router-app-wide-modal"),console.log("log outletCurrentData",this.outletCurrentData)},l.prototype.ngOnDestroy=function(){this.outletDataSubscription.unsubscribe()},l}(),U=t.qb({encapsulation:0,styles:[[""]],data:{}});function W(l){return t.Mb(0,[(l()(),t.sb(0,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),t.Kb(-1,null,["Static Route Data Modal"])),(l()(),t.sb(2,0,null,null,23,"div",[["class","mb-3"]],null,null,null,null,null)),(l()(),t.sb(3,0,null,null,1,"p",[["class","mb-0"]],null,null,null,null,null)),(l()(),t.Kb(-1,null,["2 ways to pass static data to lazy components:"])),(l()(),t.sb(5,0,null,null,9,"div",[["class","mb-3"]],null,null,null,null,null)),(l()(),t.sb(6,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),t.sb(7,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),t.Kb(-1,null,["Static Data:"])),(l()(),t.sb(9,0,null,null,5,"div",[],null,null,null,null,null)),(l()(),t.sb(10,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t.Kb(-1,null,["this.rm.data('outletName'):"])),(l()(),t.sb(12,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),t.Kb(13,null,["=> ",""])),t.Eb(0,p.h,[]),(l()(),t.sb(15,0,null,null,10,"div",[["class","mb-3"]],null,null,null,null,null)),(l()(),t.sb(16,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),t.sb(17,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),t.Kb(-1,null,["Stream Data:"])),(l()(),t.sb(19,0,null,null,6,"div",[],null,null,null,null,null)),(l()(),t.sb(20,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t.Kb(-1,null,["this.rm.data$('outletName').subscribe():"])),(l()(),t.sb(22,0,null,null,3,"div",[],null,null,null,null,null)),(l()(),t.Kb(23,null,["=> ",""])),t.Eb(131072,p.b,[t.i]),t.Eb(0,p.h,[]),(l()(),t.sb(26,0,null,null,1,"app-close-modal-button",[],null,null,null,o.b,o.a)),t.rb(27,114688,null,0,r.a,[],null,null)],function(l,n){l(n,27,0)},function(l,n){var u=n.component;l(n,13,0,t.Lb(n,13,0,t.Cb(n,14).transform(u.outletCurrentData))),l(n,23,0,t.Lb(n,23,0,t.Cb(n,25).transform(t.Lb(n,23,0,t.Cb(n,24).transform(u.outletData$)))))})}var G=t.ob("app-static-data",V,function(l){return t.Mb(0,[(l()(),t.sb(0,0,null,null,1,"app-static-data",[],null,null,null,W,U)),t.rb(1,245760,null,0,V,[F.g],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),Q=function(){function l(){}return l.prototype.ngOnInit=function(){},l.prototype.useArtifact=function(){return"https://www.youtube.com/watch?v=dQw4w9WgXcQ"},l}(),Y=t.qb({encapsulation:0,styles:[[".img-size[_ngcontent-%COMP%]{width:300px;height:auto}"]],data:{}});function Z(l){return t.Mb(0,[(l()(),t.sb(0,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),t.Kb(-1,null,["Legendary Routing Artifact Found!"])),(l()(),t.sb(2,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Kb(-1,null,["Wait!! What are you doing here?!! There should of been a guard to stop you!! Do not use this artifact!! Turn away and close this modal! It is too powerful and has unpredictable routing powers!!"])),(l()(),t.sb(4,0,null,null,1,"figure",[],null,null,null,null,null)),(l()(),t.sb(5,0,null,null,0,"img",[["alt","your screen reader is in awe with the awesome power of the legendary routing artifact.. There can be no words to describe it.."],["class","img-size"],["src","/assets/legendary-routing-artifact.png"]],null,null,null,null,null)),(l()(),t.sb(6,0,null,null,1,"a",[["class","btn btn-success d-inline-block m-2"]],[[8,"href",4]],null,null,null,null)),(l()(),t.Kb(-1,null,["COLLECT ARTIFACT AND USE IT!"])),(l()(),t.sb(8,0,null,null,1,"app-close-modal-button",[["buttonText","CLOSE MODAL AND LEAVE ARTIFACT ALONE"],["class","d-inline-block m-2"]],null,null,null,o.b,o.a)),t.rb(9,114688,null,0,r.a,[],{buttonText:[0,"buttonText"]},null)],function(l,n){l(n,9,0,"CLOSE MODAL AND LEAVE ARTIFACT ALONE")},function(l,n){l(n,6,0,n.component.useArtifact())})}var X=t.ob("app-guarded-modal",Q,function(l){return t.Mb(0,[(l()(),t.sb(0,0,null,null,1,"app-guarded-modal",[],null,null,null,Z,Y)),t.rb(1,114688,null,0,Q,[],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),B=u("gIcY"),H=u("iCtU"),J=u("Ovjw"),_=u("F/XL"),ll=function(){function l(){}return l.prototype.canActivate=function(l,n){return Object(_.a)(!0)},l.ngInjectableDef=t.V({factory:function(){return new l},token:l,providedIn:"root"}),l}(),nl=[{path:"lazy-modal",component:i},{path:"route-param-modal/:id",component:D},{path:"static-route-data-modal",component:V,data:[1,2,3,4,5]},{path:"guarded-modal",component:Q,canActivate:[function(){function l(){}return l.prototype.canActivate=function(l,n){return!0},l.ngInjectableDef=t.V({factory:function(){return new l},token:l,providedIn:"root"}),l}(),function(){function l(l){this.router=l}return l.prototype.canActivate=function(l,n){var u=this.router.parseUrl("lazy-module(rm-router-app-wide-modal:unauthorized)");return new Promise(function(l,n){return setTimeout(function(){console.log("about to resolve tree"),l(u)},1500)})},l.ngInjectableDef=t.V({factory:function(){return new l(t.Z(h.l))},token:l,providedIn:"root"}),l}()]},{path:"complex/:route/demo/:with-more-params",component:I,data:[1,2,3,4,5],canActivate:[ll]}],ul=[{path:"lazy-modal",component:i}],tl=function(l,n,u){this.componentFactoryResolver=l,this.injector=n,this.rm=u,console.log("Lazy Module Initialized!"),this.rm.registerRoutes({moduleName:"LazyRoutingModule",moduleFactory:this.componentFactoryResolver,moduleInjector:this.injector,moduleRoutes:{"rm-router-app-wide-modal":nl,"custom-classes-modal":ul}})},el=u("LKjY"),al=u("bt6x"),ol=u("0XGt"),rl=u("PsaP"),il=u("nhl2"),sl=u("InZo"),bl=u("C9m0"),cl=u("+NDo"),pl=u("4WQT"),ml=u("wtSO"),dl=u("gpiN"),fl=u("NlYj"),hl=u("neuq"),gl=u("y+WT"),yl=u("MVL9"),vl=u("j2fZ"),Al=u("eUd/"),wl=u("i2L+");u.d(n,"LazyModuleNgFactory",function(){return Ol});var Ol=t.pb(e,[],function(l){return t.zb([t.Ab(512,t.k,t.eb,[[8,[a.a,c,x,m.a,K.a,R.a,T.a,L.a,k.a,z.a,j,N,G,X]],[3,t.k],t.z]),t.Ab(4608,p.q,p.p,[t.w,[2,p.C]]),t.Ab(4608,B.f,B.f,[]),t.Ab(4608,H.a,H.a,[t.k,t.s,J.a]),t.Ab(1073742336,h.p,h.p,[[2,h.w],[2,h.l]]),t.Ab(1073742336,tl,tl,[t.k,t.s,F.g]),t.Ab(1073742336,p.c,p.c,[]),t.Ab(1073742336,el.a,el.a,[]),t.Ab(1073742336,al.a,al.a,[]),t.Ab(1073742336,ol.a,ol.a,[]),t.Ab(1073742336,rl.a,rl.a,[]),t.Ab(1073742336,il.a,il.a,[]),t.Ab(1073742336,B.e,B.e,[]),t.Ab(1073742336,B.a,B.a,[]),t.Ab(1073742336,sl.a,sl.a,[]),t.Ab(1073742336,bl.a,bl.a,[]),t.Ab(1073742336,cl.a,cl.a,[]),t.Ab(1073742336,pl.a,pl.a,[]),t.Ab(1073742336,ml.a,ml.a,[]),t.Ab(1073742336,dl.a,dl.a,[]),t.Ab(1073742336,fl.a,fl.a,[]),t.Ab(1073742336,hl.a,hl.a,[]),t.Ab(1073742336,gl.a,gl.a,[]),t.Ab(1073742336,yl.a,yl.a,[]),t.Ab(1073742336,vl.a,vl.a,[]),t.Ab(1073742336,Al.a,Al.a,[]),t.Ab(1073742336,wl.a,wl.a,[]),t.Ab(1073742336,e,e,[]),t.Ab(1024,h.j,function(){return[[{path:"lazy-modal",outlet:"ng-router-app-wide-modal",component:i},{path:"",component:g}]]},[])])})}}]);