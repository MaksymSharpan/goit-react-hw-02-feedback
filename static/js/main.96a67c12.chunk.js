(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{17:function(t,e,n){"use strict";n.r(e);var c=n(1),a=n.n(c),o=n(4),i=n.n(o),r=n(5),s=n(6),d=n(11),b=n(10),l=n(2),u=n.n(l),j=n(0),h=function(t){var e=t.onIncrementGood,n=t.onIncrementNeutral,c=t.onIncrementBad;return Object(j.jsxs)("div",{className:u.a.controls,children:[Object(j.jsx)("button",{className:u.a.btn,type:"button",onClick:e,children:"Good"}),Object(j.jsx)("button",{className:u.a.btn2,type:"button",onClick:n,children:"Neutral"}),Object(j.jsx)("button",{className:u.a.btn3,type:"button",onClick:c,children:"Bad"})]})},f=n(7),x=n.n(f),O=function(t){var e=t.good,n=t.neutral,c=t.bad,a=t.total,o=t.positiveFeedback;return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:x.a.statistics,children:[Object(j.jsxs)("p",{children:["Good: ",e]}),Object(j.jsxs)("p",{children:["Neutral: ",n]}),Object(j.jsxs)("p",{children:["Bad: ",c]}),Object(j.jsxs)("p",{className:"total",children:["Total: ",a," "]}),Object(j.jsxs)("p",{className:"percentage",children:["Positive feedback: ",o," %"]})]})})},p=n(8),m=n.n(p),v=function(t){var e=t.title,n=t.children;return Object(j.jsxs)("div",{className:m.a.sectionContainer,children:[Object(j.jsx)("h2",{children:e}),n]})},k=n(9),g=n.n(k),_=function(t){var e=t.title;return Object(j.jsx)("div",{className:g.a.notification,children:Object(j.jsx)("p",{children:e})})},N=function(t){Object(d.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(r.a)(this,n);for(var c=arguments.length,a=new Array(c),o=0;o<c;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))).state={good:0,neutral:0,bad:0},t.incrementGood=function(){t.setState((function(t){return{good:t.good+1}}))},t.incrementNeutral=function(){t.setState((function(t){return{neutral:t.neutral+1}}))},t.incrementBad=function(){t.setState((function(t){return{bad:t.bad+1}}))},t.countTotalFeedback=function(){var e=t.state;return e.good+e.neutral+e.bad},t.countPositiveFeedbackPercentage=function(){var e=t.countTotalFeedback();return(100*t.state.good/e).toFixed(0)},t}return Object(s.a)(n,[{key:"render",value:function(){var t=this.countTotalFeedback(),e=this.countPositiveFeedbackPercentage();return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(v,{title:"Please leave feedback",children:Object(j.jsx)(h,{onIncrementGood:this.incrementGood,onIncrementNeutral:this.incrementNeutral,onIncrementBad:this.incrementBad})}),Object(j.jsx)(v,{title:"Statistics",children:t?Object(j.jsx)(O,{good:this.state.good,neutral:this.state.neutral,bad:this.state.bad,total:t,positiveFeedback:e}):Object(j.jsx)(_,{title:"No feedback given"})})]})}}]),n}(c.Component);N.defaultProps={good:0,neutral:0,bad:0};var F=N,I=function(){return Object(j.jsx)(F,{})};i.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(I,{})}),document.getElementById("root"))},2:function(t,e,n){t.exports={btn:"FeedbackOptions_btn__28WV0",btn2:"FeedbackOptions_btn2__2ET8D",btn3:"FeedbackOptions_btn3__1s-Px"}},7:function(t,e,n){t.exports={statistics:"Statistics_statistics__2Iqvp"}},8:function(t,e,n){t.exports={sectionContainer:"Section_sectionContainer__2iZG9"}},9:function(t,e,n){t.exports={notification:"Notification_notification__gXxbV"}}},[[17,1,2]]]);
//# sourceMappingURL=main.96a67c12.chunk.js.map