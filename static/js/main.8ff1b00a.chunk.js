(this["webpackJsonpcsc642-personal"]=this["webpackJsonpcsc642-personal"]||[]).push([[0],{111:function(e,a,t){},112:function(e,a,t){},239:function(e,a,t){"use strict";t.r(a);var s=t(0),c=t.n(s),l=t(30),i=t.n(l),n=(t(111),t(112),t(113),t(14)),r=t(12),o=t(2),d=t(241),j=t(103),h=t(242),b=t(105),u=t(15),x=t(100),m=t.n(x),O=t(49),p=t(101),v=t.n(p),N=t(1),f=u.b().shape({firstName:u.c().required("*First name is a required field").min(2,"*Must be longer then 2 characters").max(40,"*Must be less then 40 characters long"),lastName:u.c().required("*Last name is a required field").min(2,"Must be longer then 2 characters").max(40,"*Must be less then 40 characters long"),perferredTitle:u.c().required("*Your perferred title is a required field"),heightFeet:u.c(),heightInches:u.c(),phoneNumber:u.c().matches(/^(\+?\d{0,1})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)$/,"Must be a valid phone number"),address:u.c().required("*Your address is a required field"),address2:u.c(),city:u.c().required("*Your city is a required field"),state:u.c().required("*Your state is a required field"),zip:u.c().required("*Your zip code is a required field").matches(/^[0-9]{5}(-?[0-9]{4})?$/,"*Must be 5 or 9 digits"),monthlyBudget:u.c().required("*Your monthly budget is a required field"),email:u.c().email("*Invalid email address").required("*Your email address is a required field"),Terms:u.a().required().oneOf([!0],"*Terms must be accepted")});var g=function(){var e=Object(s.useState)({}),a=Object(r.a)(e,2),t=a[0],c=a[1],l=Object(s.useState)({}),i=Object(r.a)(l,2),u=i[0],x=i[1],p=Object(s.useState)(!1),g=Object(r.a)(p,2),y=g[0],C=g[1],k=Object(s.useState)(!1),B=Object(r.a)(k,2),F=B[0],T=(B[1],Object(s.useRef)(null)),S=Object(s.useRef)();return Object(s.useEffect)((function(){var e=document.createElement("script");e.src="https://www.google.com/recaptcha/api.js",e.async=!0,e.defer=!0,document.body.appendChild(e)}),[]),Object(s.useEffect)((function(){console.log(t),JSON.stringify(t)!==JSON.stringify({})&&v.a.get("https://maps.googleapis.com/maps/api/geocode/json",{params:{address:"".concat(t.address," ").concat(t.address2,". ").concat(t.city,", ").concat(t.state,", ").concat(t.zip),key:"AIzaSyA9pciXesTSavl3XWhwkhVsizl9es5m8yI"}}).then((function(e){x(e.data.results[0].geometry.location)})).then((function(e){C(!0),function(){var e;null===(e=T.current)||void 0===e||e.scrollIntoView({behavior:"smooth"})}()}))}),[t]),Object(N.jsxs)("div",{children:[Object(N.jsx)(b.a,{validationSchema:f,validator:function(){return{}},onSubmit:function(e,a){var t=a.setSubmitting;a.resetForm;t(!0),S.current.execute(),c(e),t(!1)},initialValues:{firstName:"",lastName:"",phoneNumber:"",address:"",address2:"",heightFeet:"",heightInches:"",city:"",state:"",zip:"",monthlyBudget:"",email:"",Terms:!1,perferredTitle:"",recaptcha:"",EmailCheckBox:"",PhoneCheckBox:"",FacebookCheckBox:"",TweeterCheckBox:"","Surface MailCheckBox":"","Personal VisitCheckBox":""},children:function(e){var a,t,s,c=e.handleSubmit,l=e.handleChange,i=e.handleBlur,r=e.values,b=e.touched,u=(e.isValid,e.errors),x=e.isSubmitting;return Object(N.jsxs)(o.a,{className:"survey-form",noValidate:!0,onSubmit:c,children:[Object(N.jsx)("h3",{className:"title",children:"CSC 642 848 Fall 2021 Individual Assignment Austin Powers"}),Object(N.jsx)("h4",{className:"title2",children:"Data survey form"}),Object(N.jsxs)(d.a,{className:"nameField",children:[Object(N.jsxs)(o.a.Group,{as:j.a,className:"mb-3",children:[Object(N.jsx)(o.a.Label,{children:"Last Name*"}),Object(N.jsx)(o.a.Control,{type:"text",placeholder:"Last name",name:"lastName",value:r.lastName,onChange:l,onBlur:i,isValid:b.lastName&&!u.lastName,className:u.lastName?"errorBox":null,required:!0}),Object(N.jsx)(o.a.Control.Feedback,{children:"Looks good!"}),Object(N.jsx)(o.a.Control.Feedback,{className:"error",type:"invalid-feedback",children:b.lastName&&u.lastName})]}),Object(N.jsxs)(o.a.Group,{as:j.a,className:"mb-3",children:[Object(N.jsx)(o.a.Label,{children:"First Name*"}),Object(N.jsx)(o.a.Control,{type:"text",placeholder:"First name",name:"firstName",value:r.firstName,onChange:l,onBlur:i,isValid:b.firstName&&!u.firstName,className:u.firstName?"errorBox":null,required:!0}),Object(N.jsx)(o.a.Control.Feedback,{children:"Looks good!"}),Object(N.jsx)(o.a.Control.Feedback,{className:"error",type:"invalid-feedback",children:b.firstName&&u.firstName})]})]}),Object(N.jsx)(d.a,{className:"perferredTitleField",children:Object(N.jsxs)(o.a.Group,{className:"mb-3",children:[Object(N.jsx)(o.a.Label,{children:"Choose perferred title*"}),Object(N.jsxs)(o.a.Select,{name:"perferredTitle",value:r.perferredTitle,onChange:l,onBlur:i,isValid:b.perferredTitle&&!u.perferredTitle,className:u.perferredTitle?"errorBox":null,children:[Object(N.jsx)("option",{value:"",children:"Choose..."}),Object(N.jsx)("option",{value:"None",children:"None"}),Object(N.jsx)("option",{value:"Student",children:"Student"}),Object(N.jsx)("option",{value:"Professor",children:"Professor"}),Object(N.jsx)("option",{value:"Staff",children:"Staff"}),Object(N.jsx)("option",{value:"Retired",children:"Retired"})]}),Object(N.jsx)(o.a.Control.Feedback,{children:"Looks good!"}),Object(N.jsx)(o.a.Control.Feedback,{className:"error",type:"invalid-feedback",children:b.perferredTitle&&u.perferredTitle})]})}),Object(N.jsxs)(d.a,{className:"heightField",children:[Object(N.jsx)(o.a.Label,{children:"Your Height"}),Object(N.jsx)(o.a.Group,{as:j.a,className:"",children:Object(N.jsxs)(o.a.Select,{name:"heightFeet",value:r.heightFeet,onChange:l,onBlur:i,isValid:b.heightFeet&&!u.heightFeet,children:[Object(N.jsx)("option",{value:"",children:"---------"}),Object(N.jsx)("option",{value:"2",children:"2 ft"}),Object(N.jsx)("option",{value:"3",children:"3 ft"}),Object(N.jsx)("option",{value:"4",children:"4 ft"}),Object(N.jsx)("option",{value:"5",children:"5 ft"}),Object(N.jsx)("option",{value:"6",children:"6 ft"}),Object(N.jsx)("option",{value:"7",children:"7 ft"}),Object(N.jsx)("option",{value:"8",children:"8 ft"})]})}),Object(N.jsx)(o.a.Group,{as:j.a,className:"",children:Object(N.jsxs)(o.a.Select,{name:"heightInches",value:r.heightInches,onChange:l,onBlur:i,isValid:b.heightInches&&!u.heightInches,children:[Object(N.jsx)("option",{value:"",children:"---------"}),Object(N.jsx)("option",{value:"0",children:"0 inches"}),Object(N.jsx)("option",{value:"1",children:"1 inches"}),Object(N.jsx)("option",{value:"2",children:"2 inches"}),Object(N.jsx)("option",{value:"3",children:"3 inches"}),Object(N.jsx)("option",{value:"4",children:"4 inches"}),Object(N.jsx)("option",{value:"5",children:"5 inches"}),Object(N.jsx)("option",{value:"6",children:"6 inches"}),Object(N.jsx)("option",{value:"7",children:"7 inches"}),Object(N.jsx)("option",{value:"8",children:"8 inches"}),Object(N.jsx)("option",{value:"9",children:"9 inches"}),Object(N.jsx)("option",{value:"10",children:"10 inches"}),Object(N.jsx)("option",{value:"11",children:"11 inches"}),Object(N.jsx)("option",{value:"12",children:"12 inches"})]})}),Object(N.jsx)(o.a.Text,{className:"text-muted mb-3",children:"In feet-inch measurements"})]}),Object(N.jsx)(d.a,{className:"phoneField",children:Object(N.jsxs)(o.a.Group,{className:"mb-3",children:[Object(N.jsx)(o.a.Label,{children:"Phone Number"}),Object(N.jsx)(o.a.Control,{type:"text",placeholder:"Enter your Phone Number",name:"phoneNumber",value:r.phoneNumber,onChange:l,onBlur:i,isValid:b.phoneNumber&&!u.phoneNumber,className:u.phoneNumber?"errorBox":null}),Object(N.jsx)(o.a.Text,{className:"text-muted",children:"+x (xxx) xxx-xxxx Parentheses, dashes, and international code optional"}),Object(N.jsx)(o.a.Control.Feedback,{className:"error",type:"invalid-feedback",children:b.phoneNumber&&u.phoneNumber})]})}),Object(N.jsxs)(o.a.Group,{className:"mb-3",children:[Object(N.jsx)(o.a.Label,{children:"Address*"}),Object(N.jsx)(o.a.Control,{placeholder:"1234 Main St",name:"address",value:r.address,onChange:l,onBlur:i,className:u.address?"errorBox":null,isValid:b.address&&!u.address}),Object(N.jsx)(o.a.Control.Feedback,{className:"error",type:"invalid-feedback",children:b.address&&u.address})]}),Object(N.jsxs)(o.a.Group,{className:"mb-3",children:[Object(N.jsx)(o.a.Label,{children:"Address 2"}),Object(N.jsx)(o.a.Control,{placeholder:"Apartment, studio, or floor",name:"address2",value:r.address2,onChange:l,onBlur:i,className:u.address2?"errorBox":null,isValid:b.address2&&!u.address2})]}),Object(N.jsxs)(d.a,{className:"mb-3",children:[Object(N.jsxs)(o.a.Group,{as:j.a,children:[Object(N.jsx)(o.a.Label,{children:"City*"}),Object(N.jsx)(o.a.Control,(a={className:"addressBox",name:"city",value:r.city,onChange:l,onBlur:i},Object(n.a)(a,"className",u.city?"errorBox":null),Object(n.a)(a,"isValid",b.city&&!u.city),a)),Object(N.jsx)(o.a.Control.Feedback,{className:"error",type:"invalid-feedback",children:b.city&&u.city})]}),Object(N.jsxs)(o.a.Group,{as:j.a,children:[Object(N.jsx)(o.a.Label,{children:"State*"}),Object(N.jsxs)(o.a.Select,(t={className:"addressBox",name:"state",value:r.state,onChange:l,onBlur:i},Object(n.a)(t,"className",u.state?"errorBox":null),Object(n.a)(t,"isValid",b.state&&!u.state),Object(n.a)(t,"required",!0),Object(n.a)(t,"children",[Object(N.jsx)("option",{children:"Choose..."}),Object(N.jsx)("option",{value:"AL",children:"Alabama"}),Object(N.jsx)("option",{value:"AK",children:"Alaska"}),Object(N.jsx)("option",{value:"AZ",children:"Arizona"}),Object(N.jsx)("option",{value:"AR",children:"Arkansas"}),Object(N.jsx)("option",{value:"CA",children:"California"}),Object(N.jsx)("option",{value:"CO",children:"Colorado"}),Object(N.jsx)("option",{value:"CT",children:"Connecticut"}),Object(N.jsx)("option",{value:"DE",children:"Delaware"}),Object(N.jsx)("option",{value:"DC",children:"District Of Columbia"}),Object(N.jsx)("option",{value:"FL",children:"Florida"}),Object(N.jsx)("option",{value:"GA",children:"Georgia"}),Object(N.jsx)("option",{value:"HI",children:"Hawaii"}),Object(N.jsx)("option",{value:"ID",children:"Idaho"}),Object(N.jsx)("option",{value:"IL",children:"Illinois"}),Object(N.jsx)("option",{value:"IN",children:"Indiana"}),Object(N.jsx)("option",{value:"IA",children:"Iowa"}),Object(N.jsx)("option",{value:"KS",children:"Kansas"}),Object(N.jsx)("option",{value:"KY",children:"Kentucky"}),Object(N.jsx)("option",{value:"LA",children:"Louisiana"}),Object(N.jsx)("option",{value:"ME",children:"Maine"}),Object(N.jsx)("option",{value:"MD",children:"Maryland"}),Object(N.jsx)("option",{value:"MA",children:"Massachusetts"}),Object(N.jsx)("option",{value:"MI",children:"Michigan"}),Object(N.jsx)("option",{value:"MN",children:"Minnesota"}),Object(N.jsx)("option",{value:"MS",children:"Mississippi"}),Object(N.jsx)("option",{value:"MO",children:"Missouri"}),Object(N.jsx)("option",{value:"MT",children:"Montana"}),Object(N.jsx)("option",{value:"NE",children:"Nebraska"}),Object(N.jsx)("option",{value:"NV",children:"Nevada"}),Object(N.jsx)("option",{value:"NH",children:"New Hampshire"}),Object(N.jsx)("option",{value:"NJ",children:"New Jersey"}),Object(N.jsx)("option",{value:"NM",children:"New Mexico"}),Object(N.jsx)("option",{value:"NY",children:"New York"}),Object(N.jsx)("option",{value:"NC",children:"North Carolina"}),Object(N.jsx)("option",{value:"ND",children:"North Dakota"}),Object(N.jsx)("option",{value:"OH",children:"Ohio"}),Object(N.jsx)("option",{value:"OK",children:"Oklahoma"}),Object(N.jsx)("option",{value:"OR",children:"Oregon"}),Object(N.jsx)("option",{value:"PA",children:"Pennsylvania"}),Object(N.jsx)("option",{value:"RI",children:"Rhode Island"}),Object(N.jsx)("option",{value:"SC",children:"South Carolina"}),Object(N.jsx)("option",{value:"SD",children:"South Dakota"}),Object(N.jsx)("option",{value:"TN",children:"Tennessee"}),Object(N.jsx)("option",{value:"TX",children:"Texas"}),Object(N.jsx)("option",{value:"UT",children:"Utah"}),Object(N.jsx)("option",{value:"VT",children:"Vermont"}),Object(N.jsx)("option",{value:"VA",children:"Virginia"}),Object(N.jsx)("option",{value:"WA",children:"Washington"}),Object(N.jsx)("option",{value:"WV",children:"West Virginia"}),Object(N.jsx)("option",{value:"WI",children:"Wisconsin"}),Object(N.jsx)("option",{value:"WY",children:"Wyoming"})]),t)),Object(N.jsx)(o.a.Control.Feedback,{children:"Looks good!"}),Object(N.jsx)(o.a.Control.Feedback,{className:"error",type:"invalid-feedback",children:b.state&&u.state})]}),Object(N.jsxs)(o.a.Group,{as:j.a,children:[Object(N.jsx)(o.a.Label,{children:"Zip*"}),Object(N.jsx)(o.a.Control,(s={type:"text",className:"addressBox",name:"zip",value:r.zip,onChange:l,onBlur:i},Object(n.a)(s,"className",u.zip?"errorBox":null),Object(n.a)(s,"isValid",b.zip&&!u.zip),Object(n.a)(s,"required",!0),s)),!(b.zip&&u.zip)&&!(b.zip&&!u.zip)&&Object(N.jsx)(o.a.Text,{className:"text-muted",children:"xxxxx or xxxxx-xxxx"}),Object(N.jsx)(o.a.Control.Feedback,{children:"Looks good!"}),Object(N.jsx)(o.a.Control.Feedback,{className:"error",type:"invalid-feedback",children:b.zip&&u.zip})]})]}),Object(N.jsx)(d.a,{className:"CheckboxGroupField",children:Object(N.jsxs)(o.a.Group,{className:"mb-3",children:[Object(N.jsx)(o.a.Label,{children:"Check all services you require"}),["Email","Phone","Facebook","Tweeter","Surface Mail","Personal Visit"].map((function(e){return Object(N.jsx)("div",{children:Object(N.jsx)(o.a.Check,{name:"".concat(e,"CheckBox"),value:r["".concat(e,"CheckBox")],onChange:l,type:"checkbox",className:"checkbox",id:"".concat(e,"CheckBox"),label:"".concat(e),required:!0})},"".concat(e))}))]})}),Object(N.jsx)(d.a,{className:"budgetField",children:Object(N.jsxs)(o.a.Group,{className:"mb-3",children:[Object(N.jsx)(o.a.Label,{children:"Your monthly service budget for services*"}),Object(N.jsxs)(o.a.Select,{name:"monthlyBudget",value:r.monthlyBudget,onChange:l,className:u.monthlyBudget?"errorBox":null,isValid:b.monthlyBudget&&!u.monthlyBudget,children:[Object(N.jsx)("option",{value:"",children:"-- None Selected --"}),Object(N.jsx)("option",{value:"1",children:"Less than $50"}),Object(N.jsx)("option",{value:"2",children:"Between $50 and $100"}),Object(N.jsx)("option",{value:"3",children:"Above $100"})]}),Object(N.jsx)(o.a.Control.Feedback,{children:"Looks good!"}),Object(N.jsx)(o.a.Control.Feedback,{className:"error",type:"invalid-feedback",children:b.monthlyBudget&&u.monthlyBudget})]})}),Object(N.jsx)(d.a,{className:"emailField",children:Object(N.jsxs)(o.a.Group,{className:"mb-3",children:[Object(N.jsx)(o.a.Label,{children:"Your Email*"}),Object(N.jsx)(o.a.Control,{type:"email",placeholder:"Enter your email",name:"email",value:r.email,onChange:l,className:u.email?"errorBox":null,isValid:b.email&&!u.email}),!(b.email&&u.email)&&Object(N.jsx)(o.a.Text,{className:"text-muted",children:"We'll never share your email with anyone else."}),Object(N.jsx)(o.a.Control.Feedback,{className:"error",type:"invalid-feedback",children:b.email&&u.email})]})}),Object(N.jsx)(d.a,{className:"termsField",children:Object(N.jsxs)(o.a.Group,{className:"mb-3",children:[Object(N.jsx)(o.a.Check,{id:"Terms",label:Object(N.jsxs)("div",{children:["I Agree to the ",Object(N.jsx)("a",{href:"/Terms",children:"Terms"})]}),name:"Terms",value:r.Terms,onChange:l,className:u.Terms?"errorBox":null,isValid:b.Terms&&!u.Terms}),Object(N.jsx)(o.a.Control.Feedback,{className:"error",type:"invalid-feedback",children:b.Terms&&u.Terms})]})}),Object(N.jsx)(m.a,{ref:S,sitekey:"6LcfLwQdAAAAAK56cTz0rQ1bQkKRJjfd-X3GMWhr",onChange:function(e){console.log(e)},size:"invisible"}),Object(N.jsx)("div",{style:{display:"flex",margin:"50px 0 0 0"},children:Object(N.jsx)(h.a,{class:"g-recaptcha","data-sitekey":"your_site_key","data-callback":"onSubmit",className:"submitButton",type:"submit",disabled:x||F,children:"Submit form"})})]})}}),y&&Object(N.jsxs)("div",{className:"review-form",children:[Object(N.jsx)("h3",{className:"title2",children:"Results verification page Austin Powers"}),Object(N.jsxs)("div",{className:"singleNameField",children:[" LastName: ",Object(N.jsx)(o.a.Control,{className:"mb-3",type:"text",value:t.lastName,readOnly:!0})]}),Object(N.jsxs)("div",{className:"singleNameField",children:[" First Name",Object(N.jsx)(o.a.Control,{className:"mb-3",type:"text",value:t.firstName,readOnly:!0})]}),Object(N.jsxs)("div",{className:"perferredTitleField",children:[" Perferred Title: ",Object(N.jsx)(o.a.Control,{className:"mb-3",type:"text",value:t.perferredTitle,readOnly:!0})]}),Object(N.jsxs)("div",{className:"heightField",children:[" Your Height: ",Object(N.jsx)(o.a.Control,{className:"mb-3",type:"text",value:""==t.heightFeet&&""==t.heightInches?"N/A":"".concat(t.heightFeet,"'").concat(t.heightInches,"''"),readOnly:!0})]}),Object(N.jsxs)("div",{className:"budgetField",children:[" Phone Number: ",Object(N.jsx)(o.a.Control,{className:"mb-3",type:"text",value:t.phoneNumber.length>0?t.phoneNumber:"N/A",readOnly:!0})]}),Object(N.jsxs)("div",{className:"singleNameField",children:[" Address: ",Object(N.jsx)(o.a.Control,{className:"mb-3",type:"text",value:"".concat(t.address).concat(t.address2.length>0?" ":"").concat(t.address2,". ").concat(t.city,", ").concat(t.state,", ").concat(t.zip),readOnly:!0})]}),Object(N.jsx)("div",{className:"mb-3",children:Object(N.jsx)(O.b,{googleMapsApiKey:"AIzaSyA9pciXesTSavl3XWhwkhVsizl9es5m8yI",children:Object(N.jsx)(O.a,{mapContainerStyle:{width:"400px",height:"400px"},center:u,zoom:10,children:Object(N.jsx)(O.c,{position:u},"marker")})})}),Object(N.jsxs)("div",{className:"mb-3",children:[" Services you Require: ",Object(N.jsx)(o.a.Control,{className:"selections",type:"text",value:"".concat(t.EmailCheckBox?"Email, ":"").concat(t.PhoneCheckBox?"Phone, ":"").concat(t.FacebookCheckBox?"Facebook, ":"").concat(t.TweeterCheckBox?"Tweeter, ":"").concat(t["Surface MailCheckBox"]?"Surface Mail, ":"").concat(t["Personal VisitCheckBox"]?"Personal Visit, ":""),readOnly:!0})]}),Object(N.jsxs)("div",{className:"budgetField",children:[" Your monthly budget for services: ",Object(N.jsx)(o.a.Control,{className:"mb-3",type:"text",value:{1:"Less than $50",2:"Between $50 and $100",3:"Above $100"}[t.monthlyBudget],readOnly:!0})]}),Object(N.jsxs)("div",{ref:T,className:"singleNameField",children:[" Your email: ",Object(N.jsx)(o.a.Control,{className:"mb-3",type:"text",value:t.email,readOnly:!0})]})]})]})},y=t(106);var C=function(){return Object(N.jsxs)("div",{className:"App",children:[Object(N.jsx)(g,{}),Object(N.jsx)(y.a,{})]})},k=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,243)).then((function(a){var t=a.getCLS,s=a.getFID,c=a.getFCP,l=a.getLCP,i=a.getTTFB;t(e),s(e),c(e),l(e),i(e)}))};i.a.render(Object(N.jsx)(c.a.StrictMode,{children:Object(N.jsx)(C,{})}),document.getElementById("root")),k()}},[[239,1,2]]]);
//# sourceMappingURL=main.8ff1b00a.chunk.js.map