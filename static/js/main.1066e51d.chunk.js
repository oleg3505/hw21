(this.webpackJsonphw21=this.webpackJsonphw21||[]).push([[0],{20:function(e,s,c){},26:function(e,s,c){},27:function(e,s,c){},28:function(e,s,c){},30:function(e,s,c){},39:function(e,s,c){"use strict";c.r(s);var a=c(1),t=c.n(a),n=c(17),i=c.n(n),r=(c(26),c(2)),j=c(12),l=(c(27),c(8)),o=c(9),m=c(11),h=c(10),d=(c(28),c(0)),b=[{firstName:"\u0411\u0430\u0440\u043d\u0435\u0439",lastName:"\u0421\u0442\u0438\u043d\u0441\u043e\u0432\u0441\u044c\u043a\u0438\u0439",phone:"+380956319521",gender:"male"},{firstName:"\u0420\u043e\u0431\u0456\u043d",lastName:"\u0429\u0435\u0440\u0431\u0430\u0442\u0441\u044c\u043a\u0430",phone:"+380931460123",gender:"female"},{firstName:"\u0410\u043d\u043e\u043d\u0456\u043c\u043d\u0438\u0439",lastName:"\u0410\u043d\u043e\u043d\u0456\u043c\u0443\u0441",phone:"+380666666666"},{firstName:"\u041b\u0456\u043b\u0456\u044f",lastName:"\u041e\u043b\u0434\u0440\u043e\u0432\u043d\u0430",phone:"+380504691254",gender:"female"},{firstName:"\u041c\u0430\u0440\u0448\u0435\u043d",lastName:"\u0415\u0440\u0456\u043a\u0441\u043e\u043d\u044f\u043d",phone:"+380739432123",gender:"male"},{firstName:"\u0422\u0435\u043e\u0434\u043e\u0440",lastName:"\u041c\u043e\u0442\u0441\u0431\u0435\u0441",phone:"+380956319521",gender:"male"}],O=function(e){Object(m.a)(c,e);var s=Object(h.a)(c);function c(){return Object(l.a)(this,c),s.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"contact",children:[Object(d.jsxs)("div",{children:["male"===this.props.contact.gender&&Object(d.jsx)("img",{className:"icon",src:"male.jpg",alt:"male"}),"female"===this.props.contact.gender&&Object(d.jsx)("img",{className:"icon",src:"female.png",alt:"male"}),void 0===this.props.contact.gender&&Object(d.jsx)("img",{className:"icon",src:"anonim.png",alt:"male"})]}),Object(d.jsxs)("div",{className:"name",children:[Object(d.jsxs)("div",{children:[" ",this.props.contact.firstName,"  "]}),Object(d.jsx)("div",{children:this.props.contact.lastName})]}),Object(d.jsx)("div",{className:"number",children:this.props.contact.phone})]})}}]),c}(t.a.Component),p=function(e){Object(m.a)(c,e);var s=Object(h.a)(c);function c(){var e;Object(l.a)(this,c);for(var a=arguments.length,t=new Array(a),n=0;n<a;n++)t[n]=arguments[n];return(e=s.call.apply(s,[this].concat(t))).state={contacts:b,search:"",male:"male",female:"female",none:void 0},e.handleSearchChange=function(s){e.setState({search:s.target.value},(function(){var s=b.filter((function(s){var c=s.firstName.toLowerCase().includes(e.state.search.toLowerCase()),a=s.lastName.toLowerCase().includes(e.state.search.toLowerCase()),t=s.phone.toLowerCase().includes(e.state.search.toLowerCase());return!!(c||a||t)}));e.state.search.length<1?e.setState({contacts:b}):s.length>0?e.setState({contacts:s}):e.setState({contacts:[]})}))},e}return Object(o.a)(c,[{key:"render",value:function(){return Object(d.jsx)("div",{children:Object(d.jsxs)("div",{className:"app",children:[Object(d.jsx)("div",{className:"search",children:Object(d.jsx)("input",{className:"input",type:"text",value:this.state.search,onChange:this.handleSearchChange,placeholder:"\u041f\u043e\u0448\u0443\u043a"})}),this.state.contacts.map((function(e){return Object(d.jsx)(O,{contact:e},e.firstName)}))]})})}}]),c}(t.a.Component),x=(c(20),function(e){Object(m.a)(c,e);var s=Object(h.a)(c);function c(){return Object(l.a)(this,c),s.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:"h1",children:Object(d.jsx)("h1",{children:"Home Page"})}),Object(d.jsx)("div",{className:"homeImgBlock",children:Object(d.jsx)("img",{className:"homeImg",src:"5.jpg"})})]})}}]),c}(t.a.Component)),N=c(7),g=(c(30),"Anakin skywalker"),u="https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg",f="@dart_vader",v="WTF? Who is Ray? Why she is Skywalker? Luke...?",k="https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale",w="29 \u041b\u044e\u0442.";var y=function(){var e,s,c,a;return Object(d.jsx)("div",{className:"to_post",children:Object(d.jsxs)("div",{className:"post",children:[Object(d.jsx)("div",{className:"left",children:Object(d.jsx)("img",{className:"anakin_img",src:u})}),Object(d.jsxs)("div",{className:"right",children:[Object(d.jsxs)("div",{className:"author_info",children:[Object(d.jsx)("name",{className:"name",children:g}),Object(d.jsx)("official",{children:Object(d.jsx)("img",{className:"official",src:"official.png"})}),Object(d.jsx)("nickname",{className:"nickname",children:f}),Object(d.jsx)("date",{className:"date",children:w}),Object(d.jsx)("arrow",{children:Object(d.jsx)("img",{className:"arrow",src:"arrow.png"})})]}),Object(d.jsxs)("div",{className:"author_post",children:[Object(d.jsx)("content",{className:"content",children:v}),Object(d.jsx)("img",{className:"ray_img",src:k})]}),Object(d.jsxs)("div",{className:"footer",children:[Object(d.jsxs)("div",(e={className:"comment"},Object(N.a)(e,"className","footer_icon"),Object(N.a)(e,"children",[Object(d.jsx)("img",{className:"footer_element",src:"comment.png"}),Object(d.jsx)("div",{className:"number",children:"482"})]),e)),Object(d.jsxs)("div",(s={className:"reload"},Object(N.a)(s,"className","footer_icon"),Object(N.a)(s,"children",[Object(d.jsx)("img",{className:"footer_element",src:"reload.png"}),Object(d.jsx)("div",{className:"number",children:"146"})]),s)),Object(d.jsxs)("div",(c={className:"like"},Object(N.a)(c,"className","footer_icon"),Object(N.a)(c,"children",[Object(d.jsx)("img",{className:"footer_element",src:"like.png"}),Object(d.jsx)("div",{className:"number",children:"887"})]),c)),Object(d.jsx)("div",(a={className:"download"},Object(N.a)(a,"className","footer_icon"),Object(N.a)(a,"children",Object(d.jsx)("img",{className:"footer_element",src:"download.png"})),a))]})]})]})})},P=function(e){Object(m.a)(c,e);var s=Object(h.a)(c);function c(){return Object(l.a)(this,c),s.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:"h1",children:Object(d.jsx)("h1",{children:"Some photo"})}),Object(d.jsxs)("div",{className:"photos",children:[Object(d.jsx)("img",{className:"photo",src:"1.jpg"}),Object(d.jsx)("img",{className:"photo",src:"2.jpg"}),Object(d.jsx)("img",{className:"photo",src:"3.jpg"}),Object(d.jsx)("img",{className:"photo",src:"4.jpg"}),Object(d.jsx)("img",{className:"photo",src:"5.jpg"})]})]})}}]),c}(t.a.Component);var C=function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("header",{className:"header",children:Object(d.jsxs)("ul",{className:"nav",children:[Object(d.jsxs)("li",{className:"link",children:[" ",Object(d.jsx)(j.b,{to:"/homePage",children:"Home Page"})]}),Object(d.jsxs)("li",{className:"link",children:[" ",Object(d.jsx)(j.b,{to:"/postPage",children:"Post Page"})]}),Object(d.jsxs)("li",{className:"link",children:[" ",Object(d.jsx)(j.b,{to:"/photoPage",children:"Photo Page"})]}),Object(d.jsxs)("li",{className:"link",children:[" ",Object(d.jsx)(j.b,{to:"/contactPage",children:"Contact Page"})]})]})}),Object(d.jsx)("main",{className:"main",children:Object(d.jsxs)(r.c,{children:[Object(d.jsx)(r.a,{path:"/homePage",children:Object(d.jsx)(x,{})}),Object(d.jsxs)(r.a,{path:"/postPage",children:[Object(d.jsx)(y,{}),Object(d.jsx)(y,{}),Object(d.jsx)(y,{}),Object(d.jsx)(y,{}),Object(d.jsx)(y,{})]}),Object(d.jsx)(r.a,{path:"/photoPage",children:Object(d.jsx)(P,{})}),Object(d.jsx)(r.a,{path:"/contactPage",children:Object(d.jsx)(p,{})})]})})]})};i.a.render(Object(d.jsx)(t.a.StrictMode,{children:Object(d.jsx)(j.a,{children:Object(d.jsx)(C,{})})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.1066e51d.chunk.js.map