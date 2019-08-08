(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,n,t){e.exports=t(37)},37:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(13),o=t.n(c),u=t(2),s=t(3),i=t.n(s),l="/api/persons",m=function(){return i.a.get(l).then(function(e){return e.data})},d=function(e){return i.a.post(l,e).then(function(e){return e.data})},f=function(e){return i.a.delete(l+"/".concat(e))},g=function(e){return i.a.put(l+"/".concat(e.id),e).then(function(e){return e.data})},p=function(e){var n=e.contacts,t=e.filteredPersons,a=e.setFilteredPersons,c=e.newFilter,o=e.setContacts,u=function(e){return function(){window.confirm("Delete ".concat(e.name,"?"))&&f(e.id).then(function(){o(n.filter(function(n){return n.id!==e.id})),t.length>0&&a(t.filter(function(n){return n.id!==e.id}))}).catch("Could not delete ".concat(e))}},s=n.map(function(e){return r.a.createElement("div",{key:e.name},e.name," ",e.number," ",r.a.createElement("button",{onClick:u(e)},"delete"))}),i=t.map(function(e){return r.a.createElement("div",{key:e.name},e.name," ",e.number," ",r.a.createElement("button",{onClick:u(e)},"delete"))}),l=c.length>0&&t.length>0||!(0===t.length&&0===c.length);return r.a.createElement("div",null,l?i:s)},b=function(e){var n=e.newFilter,t=e.setNewFilter,a=e.setFilteredPersons,c=e.persons;return r.a.createElement("div",null,"filter shown with:",r.a.createElement("input",{value:n,onChange:function(e){t(e.target.value);var n=e.target.value,r=c.filter(function(e){return e.name.toLowerCase().includes(n.toLowerCase())});a(r)}}))},h=function(e){var n=e.addPerson,t=e.newName,a=e.setNewName,c=e.newNumber,o=e.setNewNumber;return r.a.createElement("form",{onSubmit:n},r.a.createElement("div",null,"name: ",r.a.createElement("input",{value:t,onChange:function(e){return a(e.target.value)}})),r.a.createElement("div",null,"number:",r.a.createElement("input",{value:c,onChange:function(e){return o(e.target.value)}})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add")))},w={color:"#270",backgroundColor:"#dff2bf",margin:"10px 0",marginRight:"75%",padding:"10px",borderRadius:"3px 3px 3px 3px"},v={color:"#D8000C",backgroundColor:"#FFBABA",margin:"10px 0",marginRight:"75%",padding:"10px",borderRadius:"3px 3px 3px 3px"},E=function(e){var n=e.message;return null===n.message?null:r.a.createElement("div",{className:"success",style:n.isSuccess?w:v},n.message)},N=function(){var e=Object(a.useState)([]),n=Object(u.a)(e,2),t=n[0],c=n[1],o=Object(a.useState)(""),s=Object(u.a)(o,2),i=s[0],l=s[1],f=Object(a.useState)(""),w=Object(u.a)(f,2),v=w[0],N=w[1],S=Object(a.useState)(""),C=Object(u.a)(S,2),j=C[0],x=C[1],O=Object(a.useState)([]),k=Object(u.a)(O,2),y=k[0],F=k[1],P=Object(a.useState)({message:null,isSuccess:!0}),R=Object(u.a)(P,2),A=R[0],B=R[1];Object(a.useEffect)(function(){m().then(function(e){c(e)})},[]);return r.a.createElement("div",null,r.a.createElement("h1",null,"Phonebook"),r.a.createElement(b,{value:j,setNewFilter:x,setFilteredPersons:F,persons:t}),r.a.createElement("h2",null,"Add a new contact"),r.a.createElement(E,{message:A}),r.a.createElement(h,{addPerson:function(e){e.preventDefault();var n=t.map(function(e){return e.name});0===j.length&&F([]);var a={name:i,number:v,id:t.length+1};console.log("new contact before id change",a),n.includes(i)?window.confirm("".concat(i," is already added to the phonebook, would you like to update the number?"))&&(a.id=t.filter(function(e){return e.name===a.name})[0].id,function(e){F(y.map(function(n){return n.id===e.id?e:n}))}(a),console.log("new contact after id change",a),g(a).then(function(){console.log("contact in async",a),c(t.map(function(e){return e.id===a.id?a:e})),console.log("persons after change",t)}).catch(function(e){404===e.response.status?(console.log(e),B({message:"Information of ".concat(a.name," has already been removed from the server."),isSucess:!1}),setTimeout(function(){return B({message:null,isSuccess:!1})},5e3)):(B({message:"Could not update number",isSucess:!1}),setTimeout(function(){return B({message:null,isSuccess:!1})},5e3))})):""!==i&&""!==v?(function(e){i.includes(j)&&j.length>0&&F(y.concat(e))}(a),l(""),N(""),function(e){c(t.concat(e))}(a),d(a).then(function(e){B({message:"Successfully added ".concat(i),isSuccess:!0}),setTimeout(function(){return B({message:null,isSuccess:!1})},5e3)}).catch(function(e){alert("Could not add ".concat(a.name))})):alert("You cannot add an empty string")},newName:i,setNewName:l,newNumber:v,setNewNumber:N}),r.a.createElement("h2",null,"Numbers"),r.a.createElement(p,{contacts:t,filteredPersons:y,setFilteredPersons:F,newFilter:j,setContacts:c}))};o.a.render(r.a.createElement(N,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.cd945326.chunk.js.map