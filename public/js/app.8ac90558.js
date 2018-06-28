(function(e){function t(t){for(var o,l,r=t[0],s=t[1],p=t[2],c=0,d=[];c<r.length;c++)l=r[c],i[l]&&d.push(i[l][0]),i[l]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);u&&u(t);while(d.length)d.shift()();return a.push.apply(a,p||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,r=1;r<n.length;r++){var s=n[r];0!==i[s]&&(o=!1)}o&&(a.splice(t--,1),e=l(l.s=n[0]))}return e}var o={},i={1:0},a=[];function l(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=o,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)l.d(n,o,function(t){return e[t]}.bind(null,o));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],s=r.push.bind(r);r.push=t,r=r.slice();for(var p=0;p<r.length;p++)t(r[p]);var u=s;a.push([2,0]),n()})({2:function(e,t,n){e.exports=n("Vtdi")},EDI0:function(e,t,n){},Vtdi:function(e,t,n){"use strict";n.r(t);n("VRzm");var o=n("Kw5r"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"container"},[n("keep-alive",[n("router-view")],1)],1)])},a=[],l=(n("ZL7j"),n("KHd+")),r={},s=Object(l["a"])(r,i,a,!1,null,null,null),p=s.exports,u=n("jE9Z"),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"dashboard"}},[n("h3",[e._v("Dashboard - "+e._s(e.employeesCount)+" employees")]),n("ul",{staticClass:"collection with-header"},[e._m(0),e._l(e.employees,function(t){return n("li",{key:t._id,staticClass:"collection-item"},[n("div",{staticClass:"chip"},[e._v(e._s(t.dept))]),e._v(e._s(t.employee_id)+":"+e._s(t.name)+"\n              "),n("i",{staticClass:"fa fa-trash",on:{click:function(n){e.deleteEmployee(t._id)}}})])})],2),n("div",{attrs:{id:"new-employee"}},[n("div",{staticClass:"row"},[n("form",{staticClass:"col s12",on:{submit:function(t){return t.preventDefault(),e.addNewEmployee(t)}}},[n("div",{staticClass:"row"},[n("div",{staticClass:"input-field col s12"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.employee_id,expression:"employee_id"}],attrs:{type:"text",required:""},domProps:{value:e.employee_id},on:{input:function(t){t.target.composing||(e.employee_id=t.target.value)}}}),n("label",[e._v("Employee ID#")])])]),n("div",{staticClass:"row"},[n("div",{staticClass:"input-field col s12"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text",required:""},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),n("label",[e._v("Name")])])]),n("div",{staticClass:"row"},[n("div",{staticClass:"input-field col s12"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.dept,expression:"dept"}],attrs:{type:"text",required:""},domProps:{value:e.dept},on:{input:function(t){t.target.composing||(e.dept=t.target.value)}}}),n("label",[e._v("Department")])])]),n("div",{staticClass:"row"},[n("div",{staticClass:"input-field col s12"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.position,expression:"position"}],attrs:{type:"text",required:""},domProps:{value:e.position},on:{input:function(t){t.target.composing||(e.position=t.target.value)}}}),n("label",[e._v("Position")])])]),n("button",{staticClass:"btn",attrs:{type:"submit"}},[e._v("Submit")])])])])])},d=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",{staticClass:"collection-header"},[n("h4",[e._v("Employees")])])}],m=(n("f3/d"),n("yT7P")),f=n("L2JU"),y={name:"ViewEmployees",data:function(){return{employee_id:null,name:null,dept:null,position:null}},computed:Object(m["a"])({},Object(f["d"])(["employees"]),Object(f["c"])(["employeesCount"])),methods:Object(m["a"])({addNewEmployee:function(){var e=this;this.addEmployee({employee_id:this.employee_id,name:this.name,dept:this.dept,position:this.position}).then(function(){e.clear()})},clear:function(){this.employee_id=null,this.name=null,this.dept=null,this.position=null}},Object(f["b"])(["getEmployees","addEmployee","deleteEmployee"])),created:function(){this.getEmployees()}},v=y,_=(n("kgOJ"),Object(l["a"])(v,c,d,!1,null,"c965d6ca",null)),h=_.exports;o["a"].use(u["a"]);var b=new u["a"]({routes:[{path:"/",name:"ViewEmployees",component:h}]}),E=(n("rGqo"),n("oyJW")),g="GET_EMPLOYEE",w="ADD_EMPLOYEE",O="DELETE_EMPLOYEE",j=n("buwU"),C=n("lTCR"),x=n.n(C);function P(){var e=Object(j["a"])(["\nmutation ($_id: ID!) {\n    deleteEmployee (_id: $_id) {\n        _id\n    }\n}\n"]);return P=function(){return e},e}function $(){var e=Object(j["a"])(["\n    mutation ($employee_id: String!, $name: String!, $dept: String!, $position: String!) {\n        addEmployee (employee_id: $employee_id, name: $name, dept: $dept, position: $position) {\n            _id\n            employee_id\n            name\n            dept\n            position\n        }\n    }\n"]);return $=function(){return e},e}function S(){var e=Object(j["a"])(["\n    query {\n        employees {\n            _id\n            employee_id\n            name\n            dept\n            position\n        }\n    }\n"]);return S=function(){return e},e}var D,k=x()(S()),q=x()($()),M=x()(P()),N=n("J7Bk"),J=n("hEyz"),L=n("cfNM"),T=new N["a"]({link:new J["a"]({uri:"http://localhost:3000/graphql"}),cache:new L["a"]});o["a"].use(f["a"]);var V=new f["a"].Store({state:{employees:[]},getters:{employeesCount:function(e){return e.employees.length}},mutations:(D={},Object(E["a"])(D,g,function(e,t){var n=t.employee;e.employees.push({_id:n._id,employee_id:n.employee_id,name:n.name,dept:n.dept,position:n.position})}),Object(E["a"])(D,w,function(e,t){var n=t.newEmployee;e.employees.push(n)}),Object(E["a"])(D,O,function(e,t){for(var n=t.deletedEmployee,o=0;o<e.employees.length;o+=1)e.employees[o]._id===n._id&&e.employees.splice(o,1)}),D),actions:{getEmployees:function(e){var t=e.commit;T.query({query:k}).then(function(e){e.data.employees.forEach(function(e){t(g,{employee:e})})})},addEmployee:function(e,t){var n=e.commit,o=t.employee_id,i=t.name,a=t.dept,l=t.position;T.mutate({mutation:q,variables:{employee_id:o,name:i,dept:a,position:l}}).then(function(e){n(w,{newEmployee:e.data.addEmployee})})},deleteEmployee:function(e,t){var n=e.commit;T.mutate({mutation:M,variables:{_id:t}}).then(function(e){n(O,{deletedEmployee:e.data.deleteEmployee})})}}});o["a"].config.productionTip=!1,new o["a"]({el:"#app",router:b,store:V,render:function(e){return e(p)}})},ZL7j:function(e,t,n){"use strict";var o=n("EDI0"),i=n.n(o);i.a},gcyx:function(e,t,n){},kgOJ:function(e,t,n){"use strict";var o=n("gcyx"),i=n.n(o);i.a}});
//# sourceMappingURL=app.8ac90558.js.map