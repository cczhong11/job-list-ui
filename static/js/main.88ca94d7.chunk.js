(this.webpackJsonpjunior_job=this.webpackJsonpjunior_job||[]).push([[0],{77:function(e,t,n){},78:function(e,t,n){},93:function(e,t,n){"use strict";n.r(t);var c,a=n(2),s=n.n(a),i=n(67),r=n.n(i),j=(n(77),n(78),n(68)),o=n(34),l=n(114),b=n(117),d=n(118),h=n(112),p=n(115),x=n(116),O=n(113),u=n(5),f=Object(o.gql)(c||(c=Object(j.a)(["\n  query FindJob(\n    $experience: String!\n    $job_type: String!\n    $location: String!\n    $date: Int!\n  ) {\n    Job(\n      experience: $experience\n      job_type: $job_type\n      location: $location\n      date: $date\n    ) {\n      Id\n      Date\n      Title\n      Company\n      Experience\n      City\n      State\n      Link\n      Type\n      ApplyLink\n    }\n  }\n"])));function m(e){var t,n=Object(o.useQuery)(f,{variables:{experience:e.type.includes("senior")?"senior":"junior",job_type:e.type,date:100,location:""}}),c=n.loading,a=n.data;return Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{children:"Available Jobs"}),c?Object(u.jsx)("p",{children:"Loading ..."}):Object(u.jsx)(h.a,{component:O.a,className:"wrapper",children:Object(u.jsxs)(l.a,{className:"class","aria-label":"simple table",children:[Object(u.jsx)(p.a,{children:Object(u.jsxs)(x.a,{children:[Object(u.jsx)(d.a,{children:" Date "}),Object(u.jsx)(d.a,{children:"Job Title"}),Object(u.jsx)(d.a,{children:"Company"}),Object(u.jsx)(d.a,{children:"City"}),Object(u.jsx)(d.a,{children:"State"}),Object(u.jsx)(d.a,{children:"Link"})]})}),Object(u.jsx)(b.a,{children:(null!==(t=null===a||void 0===a?void 0:a.Job)&&void 0!==t?t:[]).map((function(e){return Object(u.jsxs)(x.a,{children:[Object(u.jsx)(d.a,{component:"th",scope:"row",children:e.Date}),Object(u.jsx)(d.a,{children:e.Title}),Object(u.jsx)(d.a,{children:e.Company}),Object(u.jsx)(d.a,{children:e.City}),Object(u.jsx)(d.a,{children:e.State}),Object(u.jsx)(d.a,{children:""!==e.ApplyLink?Object(u.jsx)("a",{href:e.ApplyLink,children:"link"}):Object(u.jsx)("a",{href:e.Link,children:"link"})})]},e.Id)}))})]})})]})}function y(e){var t="";switch(e.name){case"ux":t="Product Designer";break;case"software":t="Software Engineer";break;case"software_senior":t="Seinor Software Engineer";break;case"data":t="Data Scientist"}return Object(u.jsx)("div",{className:"wrapper",children:Object(u.jsxs)("div",{className:"row",children:[Object(u.jsxs)("div",{className:"col1",children:[Object(u.jsxs)("h1",{className:"hero-heading-2",children:[t,Object(u.jsxs)("span",{className:"text-span-h1-punct",children:[Object(u.jsx)("br",{}),e.name.includes("senior")?"Senior Jobs in US":"Junior Jobs in US"]})]}),Object(u.jsxs)("p",{className:"hero-paragraph-ver2",children:["It is ",Object(u.jsx)("strong",{children:"hard"})," to find a ",t," now. I created this site to help people to find their jobs."]}),Object(u.jsx)("br",{}),Object(u.jsx)("p",{children:"If you find this website useful, please support my development."}),Object(u.jsx)("a",{href:"https://www.buymeacoffee.com/cczhong",target:"_blank",children:Object(u.jsx)("img",{src:"https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png",alt:"Buy Me A Coffee",className:"buymecoffee"})}),Object(u.jsx)("br",{})]}),Object(u.jsx)("div",{className:"col2"}),Object(u.jsx)("div",{className:"col3",children:Object(u.jsx)("img",{src:"https://cdn.aarp.net/content/dam/aarp/work/job-search/2020/08/1140-new-job-keyboard.web.jpg",alt:"",height:"300"})})]})})}function g(e){return Object(u.jsxs)("div",{children:[Object(u.jsx)(y,{name:e.type}),Object(u.jsx)(m,{type:e.type})]})}var v=n(71),w=n(11);var k=function(){var e=new o.ApolloClient({uri:"https://job_server.tczhong.com/graphql",cache:new o.InMemoryCache});return Object(u.jsx)(o.ApolloProvider,{client:e,children:Object(u.jsx)("div",{className:"App",children:Object(u.jsx)(v.a,{children:Object(u.jsxs)("div",{children:[Object(u.jsx)(w.a,{path:"/software",children:Object(u.jsx)(g,{type:"software"})}),Object(u.jsx)(w.a,{path:"/software_senior",children:Object(u.jsx)(g,{type:"software_senior"})}),Object(u.jsx)(w.a,{path:"/ux",children:Object(u.jsx)(g,{type:"ux"})}),Object(u.jsx)(w.a,{path:"/data",children:Object(u.jsx)(g,{type:"data"})})]})})})})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,119)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),s(e),i(e)}))};r.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(k,{})}),document.getElementById("root")),S()}},[[93,1,2]]]);
//# sourceMappingURL=main.88ca94d7.chunk.js.map