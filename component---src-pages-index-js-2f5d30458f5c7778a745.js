(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{143:function(e,t,n){"use strict";n.r(t),n.d(t,"query",function(){return T});var i=n(7),M=n.n(i),a=n(0),o=n.n(a),s=n(165),r=n.n(s),c=n(164),u=n.n(c),L=n(160),l=n(153),w=n(156),j=n(155),y=n.n(j),d=n(176),N=n.n(d),E=function(e){function t(t){var n;return(n=e.call(this,t)||this).updateWindowDimensions=function(){n.setState({width:window.innerWidth,height:window.innerHeight})},n.state={width:0},n}M()(t,e);var n=t.prototype;return n.componentDidMount=function(){this.updateWindowDimensions(),window.addEventListener("resize",this.updateWindowDimensions)},n.componentWillUnmount=function(){window.removeEventListener("resize",this.updateWindowDimensions)},n.render=function(){var e=r()(this,"props.data.site.siteMetadata.title"),t=r()(this,"props.data.site.siteMetadata.description");return o.a.createElement(L.a,null,o.a.createElement(u.a,null,o.a.createElement("title",null,e),o.a.createElement("meta",{name:"description",content:t})),o.a.createElement(D,{title:"Socialize without compromise",body:"We build services that empower anyone to communicate without being exploited — services that respect people's time, privacy and rights over their content."}),o.a.createElement("div",{style:{flex:1,display:"flex",flexDirection:this.state.width>l.a?"row":"column",justifyContent:"space-between",alignItems:"center"}},o.a.createElement(I,{title:"People first",body:"We focus on services that put people in control and empower free communication. We defend human attention adn privacy, not profit."}),o.a.createElement(I,{title:"Self-sustaining",body:"We use peer-to-peer storage and incentivize resource sharing to make structural consts trivial. No one has to trade their personal data."}),o.a.createElement(I,{title:"Future-proof",body:"A fully decentralized and open architecture makes the network stronger — no vulnerable hubs, no data loss, no downtime, and no censorship."})),o.a.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"center",paddingTop:40,paddingBottom:40}},o.a.createElement(w.a,{target:"/app",icon:y.a,label:"Get the app",border:!0}),o.a.createElement(w.a,{target:"/donate",icon:N.a,label:"Make a donation",border:!0})))},t}(o.a.Component),D=function(e){var t=e.title,n=e.body;return o.a.createElement("div",null,o.a.createElement("h1",{style:{fontSize:54}},t),o.a.createElement("p",{style:{fontSize:22}},n))},I=function(e){var t=e.title,n=e.body;return o.a.createElement("div",{style:{flex:1,display:"flex",flexDirection:"column",maxWidth:300}},o.a.createElement("h3",{style:{lineHeight:0}},t),o.a.createElement("p",null,n))};t.default=E;var T="3540649657"},151:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return j}),n.d(t,"StaticQueryContext",function(){return l}),n.d(t,"StaticQuery",function(){return w});var i=n(0),M=n.n(i),a=n(4),o=n.n(a),s=n(150),r=n.n(s);n.d(t,"Link",function(){return r.a}),n.d(t,"withPrefix",function(){return s.withPrefix}),n.d(t,"navigate",function(){return s.navigate}),n.d(t,"push",function(){return s.push}),n.d(t,"replace",function(){return s.replace}),n.d(t,"navigateTo",function(){return s.navigateTo});var c=n(154),u=n.n(c);n.d(t,"PageRenderer",function(){return u.a});var L=n(34);n.d(t,"parsePath",function(){return L.a});var l=M.a.createContext({}),w=function(e){return M.a.createElement(l.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):M.a.createElement("div",null,"Loading (StaticQuery)")})};function j(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}w.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},152:function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"b",function(){return c});var i=n(161),M=n.n(i),a=n(162),o=n.n(a);o.a.headerFontFamily=["Young Serif"],o.a.bodyFontFamily=["Nunito Sans"],o.a.overrideThemeStyles=function(){return{"a,h1,h2,h3,p,div":{boxShadow:"none",color:"#6200EA"},a:{fontWeight:"bold"},"h1,h2,h3":{fontFamily:"YoungSerif"},"h2,h3,p,div":{fontWeight:300},div:{lineHeight:1.35}}};var s=new M.a(o.a);var r=s.rhythm,c=s.scale},153:function(e,t,n){"use strict";n.d(t,"a",function(){return j});n(33);var i=n(7),M=n.n(i),a=n(0),o=n.n(a),s=n(151),r=(n(163),n(152)),c=n(158),u=n.n(c),L=n(155),l=n.n(L),w=n(156),j=650,y=function(e){function t(){return e.apply(this,arguments)||this}return M()(t,e),t.prototype.render=function(){return o.a.createElement("div",{style:{display:"flex",justifyContent:"space-around",alignItems:"center",marginLeft:"auto",marginRight:"auto",maxWidth:Object(r.a)(36)}},o.a.createElement("div",{style:{display:"flex",width:"100%",flexDirection:"row",justifyContent:"space-between",alignItems:"center",height:80,maxWidth:Object(r.a)(40)}},o.a.createElement(s.Link,{to:"/",style:{color:"#FFFFFF",flexDirection:"row",display:"flex",justifyContent:"center",alignItems:"center"}},o.a.createElement("img",{src:u.a,style:{width:100,marginBottom:0,fill:"#6200EA"}})),o.a.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between",paddingRight:10}},o.a.createElement(w.a,{icon:l.a,target:"/app",label:"Get the app"}),o.a.createElement(w.a,{target:"/donate",label:"Donate"}))))},t}(a.Component);t.b=y},154:function(e,t,n){var i;e.exports=(i=n(157))&&i.default||i},155:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMiIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDEyIDIwIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTS00IDBoMjB2MjBILTR6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iIzYyMDBFQSIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNMTAuMTY3Ljg0MkwxLjgzMy44MzNDLjkxNy44MzMuMTY3IDEuNTgzLjE2NyAyLjV2MTVjMCAuOTE3Ljc1IDEuNjY3IDEuNjY2IDEuNjY3aDguMzM0Yy45MTYgMCAxLjY2Ni0uNzUgMS42NjYtMS42Njd2LTE1YzAtLjkxNy0uNzUtMS42NTgtMS42NjYtMS42NTh6bTAgMTQuOTkxSDEuODMzVjQuMTY3aDguMzM0djExLjY2NnoiLz4KICAgIDwvZz4KPC9zdmc+Cg=="},156:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var i=n(0),M=n.n(i),a=n(151),o=function(e){var t=e.icon,n=e.label,i=e.target,o=e.border;return M.a.createElement(a.Link,{to:i},M.a.createElement("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",border:o?"solid 1px rgba(98, 0, 234, 0.25)":"",padding:12,margin:8,fontSize:16}},M.a.createElement("img",{src:t,height:16,style:{paddingRight:4,margin:0,color:"#6200EA"}}),n))}},157:function(e,t,n){"use strict";n.r(t);n(33);var i=n(0),M=n.n(i),a=n(4),o=n.n(a),s=n(48),r=n(2),c=function(e){var t=e.location,n=r.default.getResourcesForPathnameSync(t.pathname);return M.a.createElement(s.a,Object.assign({location:t,pageResources:n},n.json))};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},158:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNzM3LjYgNDAwIj48dGl0bGU+QXNzZXQgMTwvdGl0bGU+PGcgaWQ9IkxheWVyXzIiIGRhdGEtbmFtZT0iTGF5ZXIgMiI+PGcgaWQ9IkxheWVyXzEtMiIgZGF0YS1uYW1lPSJMYXllciAxIj48cGF0aCBmaWxsPSIjNjIwMEVBIiBkPSJNNTAsMzAwYTUwLDUwLDAsMSwwLDUwLDUwVjMwMFoiLz48cGF0aCBmaWxsPSIjNjIwMEVBIiBkPSJNMzUwLDBINTBhNTAsNTAsMCwwLDAsMCwxMDBIMzAwVjM1MGE1MCw1MCwwLDAsMCwxMDAsMFY1MEE1MCw1MCwwLDAsMCwzNTAsMFoiLz48cGF0aCBmaWxsPSIjNjIwMEVBIiBkPSJNNTAsMTUwYTUwLDUwLDAsMCwwLDAsMTAwSDE1MFYzNTBhNTAsNTAsMCwwLDAsMTAwLDBWMTUwWiIvPjxwYXRoIGZpbGw9IiM2MjAwRUEiIGQ9Ik01MDguNTcsMzQwLjE4cS05LTktOS0yMy42MXYtMjM0cTAtMTQuNjIsNy45NC0yMi41NnQyMi41Ni03Ljk0SDY3My44MnExNS44NywwLDIzLjQsNi4yN1Q3MDQuNzQsNzhxMCwxMy03LjUyLDE5LjIydC0yMy40LDYuMjdINTYzLjkzdjY3LjY5SDY2NS40N3ExNS44NywwLDIzLjQsNi4yN3Q3LjUyLDE5LjY0cTAsMTMtNy41MiwxOS4yMnQtMjMuNCw2LjI3SDU2My45M3Y5NHEwLDE1LTguNTYsMjMuODJ0LTIzLjE5LDguNzdRNTE3LjU1LDM0OS4xNiw1MDguNTcsMzQwLjE4WiIvPjxwYXRoIGZpbGw9IiM2MjAwRUEiIGQ9Ik05MDcuNiwyOTIuMzRxNS4yMiw2LjY5LDUuMjIsMTcuMTNhMjIuNzIsMjIuNzIsMCwwLDEtNC4xOCwxMy4xNiwzMy43NywzMy43NywwLDAsMS0xMS43LDEwLjI0LDE0OS41NCwxNDkuNTQsMCwwLDEtMzMsMTIuMzIsMTQxLDE0MSwwLDAsMS0zNC42OCw0LjhxLTMzLjQzLDAtNTguMjktMTNhOTAuNjIsOTAuNjIsMCwwLDEtMzguMjMtMzdxLTEzLjM4LTI0LTEzLjM3LTU2LjYxLDAtMzEuMzQsMTMtNTUuNTdhOTUsOTUsMCwwLDEsMzUuOTMtMzcuODFxMjMtMTMuNTcsNTIuMjMtMTMuNTgsMjgsMCw0OS4xLDEyLjMzdDMyLjgsMzUuMXExMS42OSwyMi43OCwxMS43LDUzLjI3LDAsOS4yLTQuMzksMTRUODk3LjM2LDI1NmgtMTE3cTIuOTIsMjQuNjYsMTUsMzUuNzN0MzQuNjgsMTEuMDdhNzQuNTEsNzQuNTEsMCwwLDAsMjEuNzMtMi45MiwyMDkuMjgsMjA5LjI4LDAsMCwwLDIxLjMxLTcuOTRxNS44NS0yLjUxLDExLjI4LTQuMzlhMjkuODcsMjkuODcsMCwwLDEsOS42MS0xLjg4QTE2LjQ2LDE2LjQ2LDAsMCwxLDkwNy42LDI5Mi4zNFpNNzkzLjMyLDE5MS40NHEtMTAuODcsMTEuNS0xMywzMy4yMkg4NjFxLTEuMjUtMjIuMTQtMTEuMDctMzMuNDN0LTI3Ljc5LTExLjI4UTgwNC4xOCwxNzkuOTQsNzkzLjMyLDE5MS40NFoiLz48cGF0aCBmaWxsPSIjNjIwMEVBIiBkPSJNOTYxLjA3LDM0MS42NHEtOS03LjUyLTktMjIuMTRWNzkuNjdxMC0xNC42Miw5LTIyLjE0VDk4My44NSw1MHExMy4zNywwLDIyLjM1LDcuNTJ0OSwyMi4xNFYzMTkuNXEwLDE0LjYzLTksMjIuMTR0LTIyLjM1LDcuNTJROTcwLjA2LDM0OS4xNiw5NjEuMDcsMzQxLjY0WiIvPjxwYXRoIGZpbGw9IiM2MjAwRUEiIGQ9Ik0xMTUwLjU2LDEwOC41cS03LjUyLDkuMi03LjUyLDI1LjkxdjcuMWgyOS4yNXEyOC40MSwwLDI4LjQxLDIzLjgyLDAsMjMuNDEtMjguNDEsMjMuNEgxMTQzVjMxOS4wOHEwLDE0LjYzLTksMjIuMTR0LTIyLjM2LDcuNTJxLTEzLjc5LDAtMjIuNzctNy41MnQtOS0yMi4xNFYxODguNzJoLTE2LjcxcS0yOCwwLTI4LTIzLjQsMC0yMy44MSwyOC0yMy44MmgxNi43MXEwLTQwLjExLDIyLjE0LTYzLjA5dDYxLTI1LjkxbDEwLjg2LS44NCw3LjUyLS40MnEyOC44MywwLDI4LjgzLDIyLjE1LDAsMjEuNzMtMjQuMjQsMjMuODJsLTEwLjg2Ljg0UTExNTguMDcsOTkuMywxMTUwLjU2LDEwOC41WiIvPjxwYXRoIGZpbGw9IiM2MjAwRUEiIGQ9Ik0xMzk2Ljg3LDI5Mi4zNHE1LjIyLDYuNjksNS4yMiwxNy4xM2EyMi43MiwyMi43MiwwLDAsMS00LjE4LDEzLjE2LDMzLjc3LDMzLjc3LDAsMCwxLTExLjcsMTAuMjQsMTQ5LjU0LDE0OS41NCwwLDAsMS0zMywxMi4zMiwxNDEsMTQxLDAsMCwxLTM0LjY4LDQuOHEtMzMuNDMsMC01OC4yOS0xM2E5MC42Miw5MC42MiwwLDAsMS0zOC4yMy0zN3EtMTMuMzgtMjQtMTMuMzctNTYuNjEsMC0zMS4zNCwxMy01NS41N2E5NSw5NSwwLDAsMSwzNS45My0zNy44MXEyMy0xMy41Nyw1Mi4yMy0xMy41OCwyOCwwLDQ5LjEsMTIuMzN0MzIuOCwzNS4xcTExLjY5LDIyLjc4LDExLjcsNTMuMjcsMCw5LjItNC4zOSwxNHQtMTIuMzMsNC44aC0xMTdxMi45MiwyNC42NiwxNSwzNS43M3QzNC42OCwxMS4wN2E3NC41MSw3NC41MSwwLDAsMCwyMS43My0yLjkyLDIwOS4yOCwyMDkuMjgsMCwwLDAsMjEuMzEtNy45NHE1Ljg1LTIuNTEsMTEuMjgtNC4zOWEyOS44NywyOS44NywwLDAsMSw5LjYxLTEuODhBMTYuNDYsMTYuNDYsMCwwLDEsMTM5Ni44NywyOTIuMzRabS0xMTQuMjgtMTAwLjlxLTEwLjg3LDExLjUtMTMsMzMuMjJoODAuNjRxLTEuMjUtMjIuMTQtMTEuMDctMzMuNDN0LTI3Ljc5LTExLjI4UTEyOTMuNDUsMTc5Ljk0LDEyODIuNTksMTkxLjQ0WiIvPjxwYXRoIGZpbGw9IiM2MjAwRUEiIGQ9Ik0xNDUwLjM1LDM0MS42NHEtOS03LjUyLTktMjIuMTRWNzkuNjdxMC0xNC42Miw5LTIyLjE0VDE0NzMuMTIsNTBxMTMuMzcsMCwyMi4zNSw3LjUydDksMjIuMTRWMzE5LjVxMCwxNC42My05LDIyLjE0dC0yMi4zNSw3LjUyUTE0NTkuMzMsMzQ5LjE2LDE0NTAuMzUsMzQxLjY0WiIvPjxwYXRoIGZpbGw9IiM2MjAwRUEiIGQ9Ik0xNzMxLjEzLDI5Mi4zNHE1LjIyLDYuNjksNS4yMiwxNy4xM2EyMi43MiwyMi43MiwwLDAsMS00LjE4LDEzLjE2LDMzLjc3LDMzLjc3LDAsMCwxLTExLjcsMTAuMjQsMTQ5LjU0LDE0OS41NCwwLDAsMS0zMywxMi4zMiwxNDEsMTQxLDAsMCwxLTM0LjY4LDQuOHEtMzMuNDMsMC01OC4yOS0xM2E5MC42Miw5MC42MiwwLDAsMS0zOC4yMy0zN3EtMTMuMzgtMjQtMTMuMzctNTYuNjEsMC0zMS4zNCwxMy01NS41N2E5NSw5NSwwLDAsMSwzNS45My0zNy44MXEyMy0xMy41Nyw1Mi4yMy0xMy41OCwyOCwwLDQ5LjEsMTIuMzN0MzIuOCwzNS4xcTExLjY5LDIyLjc4LDExLjcsNTMuMjcsMCw5LjItNC4zOSwxNHQtMTIuMzMsNC44aC0xMTdxMi45MiwyNC42NiwxNSwzNS43M3QzNC42OCwxMS4wN2E3NC41MSw3NC41MSwwLDAsMCwyMS43My0yLjkyLDIwOS4yOCwyMDkuMjgsMCwwLDAsMjEuMzEtNy45NHE1Ljg1LTIuNTEsMTEuMjgtNC4zOWEyOS44NywyOS44NywwLDAsMSw5LjYxLTEuODhBMTYuNDYsMTYuNDYsMCwwLDEsMTczMS4xMywyOTIuMzRabS0xMTQuMjgtMTAwLjlxLTEwLjg3LDExLjUtMTMsMzMuMjJoODAuNjRxLTEuMjUtMjIuMTQtMTEuMDctMzMuNDN0LTI3Ljc5LTExLjI4UTE2MjcuNzEsMTc5Ljk0LDE2MTYuODUsMTkxLjQ0WiIvPjwvZz48L2c+PC9zdmc+Cg=="},159:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAiIGhlaWdodD0iMjMiIHZpZXdCb3g9IjAgMCAxMjAgMjMiPgogICAgPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8cGF0aCBmaWxsPSIjNjIwMEVBIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGQ9Ik0wIDIwLjE0NmEyLjc5NSAyLjc5NSAwIDAgMSAyLjc5NC0yLjc5M2gyLjc5NHYyLjc5M2EyLjc5NSAyLjc5NSAwIDAgMS01LjU4OCAwek0yLjc5NCA4Ljk3SDEzLjk3djExLjE3NmEyLjc5NSAyLjc5NSAwIDAgMS01LjU5IDB2LTUuNTg4SDIuNzk1YTIuNzk1IDIuNzk1IDAgMCAxIDAtNS41ODh6TTE5LjU1OS41ODhhMi43OTUgMi43OTUgMCAwIDEgMi43OTQgMi43OTR2MTYuNzY0YTIuNzk1IDIuNzk1IDAgMCAxLTUuNTg4IDBWNi4xNzZIMi43OTRhMi43OTUgMi43OTUgMCAwIDEgMC01LjU4OGgxNi43NjV6Ii8+CiAgICA8L2c+Cjwvc3ZnPgo="},160:function(e,t,n){"use strict";n(33);var i=n(7),M=n.n(i),a=n(0),o=n.n(a),s=n(152),r=n(153),c=n(151),u=n(159),L=n.n(u),l=function(e){function t(t){var n;return(n=e.call(this,t)||this).updateWindowDimensions=function(){n.setState({width:window.innerWidth,height:window.innerHeight})},n.state={width:0},n}M()(t,e);var n=t.prototype;return n.componentDidMount=function(){this.updateWindowDimensions(),window.addEventListener("resize",this.updateWindowDimensions)},n.componentWillUnmount=function(){window.removeEventListener("resize",this.updateWindowDimensions)},n.render=function(){return o.a.createElement("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:this.state.width>r.a?"":"center",fontSize:10,paddingTop:40,marginLeft:"auto",marginRight:"auto",maxWidth:Object(s.a)(36)}},o.a.createElement("div",{style:{display:"flex",justifyContent:"space-evenly",flexDirection:this.state.width>r.a?"row":"column",paddingBottom:50}},o.a.createElement("div",{style:w.sectionContainer},o.a.createElement("div",{style:w.sectionTitle},"PRODUCT"),o.a.createElement("div",{style:w.sectionContent},o.a.createElement(c.Link,{to:"/donate"},"Download for iOS"),o.a.createElement("a",{href:"https://github.com/felfele/felfele/blob/master/CONTRIBUTING.md",target:"_new"},"Download for Android"),o.a.createElement("a",{href:"mailto:support@felfele.com"},"Support"))),o.a.createElement("div",{style:w.sectionContainer},o.a.createElement("div",{style:w.sectionTitle},"CONTRIBUTE"),o.a.createElement("div",{style:w.sectionContent},o.a.createElement(c.Link,{to:"/donate"},"Make a donation"),o.a.createElement(c.Link,{to:"/volunteer"},"Volunteer"))),o.a.createElement("div",{style:w.sectionContainer},o.a.createElement("div",{style:w.sectionTitle},"DEVELOPERS"),o.a.createElement("div",{style:w.sectionContent},o.a.createElement("a",{href:"https://github.com/felfele",target:"_new"},"Github"),o.a.createElement("a",{href:"https://github.com/felfele/felfele/blob/master/CONTRIBUTING.md",target:"_new"},"Guidelines"),o.a.createElement("a",{href:"https://github.com/felfele/felfele/blob/master/CODE_OF_CONDUCT.md",target:"_new"},"Code of Conduct"),o.a.createElement("a",{href:"https://gitter.im/felfele/purple-lounge",target:"_new"},"Gitter"))),o.a.createElement("div",{style:w.sectionContainer},o.a.createElement("div",{style:w.sectionTitle},"ABOUT US"),o.a.createElement("div",{style:w.sectionContent},o.a.createElement(c.Link,{to:"/"},"Mission"),o.a.createElement(c.Link,{to:"/team"},"Core team"),o.a.createElement(c.Link,{to:"/blog"},"Blog"))),o.a.createElement("div",{style:w.sectionContainer},o.a.createElement("div",{style:w.sectionTitle},"LEGAL"),o.a.createElement("div",{style:w.sectionContent},o.a.createElement("a",{href:"https://ariregister.rik.ee/index?lang=eng"},"Public Records"),o.a.createElement(c.Link,{to:"/privacy"},"Privacy Policy"))),o.a.createElement("div",{style:w.sectionContainer},o.a.createElement("div",{style:{width:this.state.width>r.a?200:100,display:"flex",justifyContent:"flex-end"}},o.a.createElement("img",{src:L.a,style:{marginBottom:0,fill:"#6200EA"}})))))},t}(a.Component),w={rootContainer:{display:"flex",flexDirection:"column",justifyContent:"center",fontSize:10,paddingTop:40,marginLeft:"auto",marginRight:"auto",maxWidth:Object(s.a)(36)},sectionContainer:{display:"flex",flexDirection:"column",padding:20},sectionContent:{display:"flex",flexDirection:"column",fontWeight:600},sectionTitle:{paddingBottom:5}},j=function(){return o.a.createElement("div",{style:{height:1,backgroundColor:"rgba(98, 0, 234, 0.25)"}})},y=function(e){function t(){return e.apply(this,arguments)||this}return M()(t,e),t.prototype.render=function(){var e=this.props.children,t=this.props.style,n={marginLeft:"auto",marginRight:"auto",padding:10,maxWidth:Object(s.a)(36)},i=Object.assign({},n,t);return o.a.createElement("div",null,o.a.createElement("div",{style:i},o.a.createElement(r.b,null)),o.a.createElement(j,null),o.a.createElement("div",{style:i},e),o.a.createElement(j,null),o.a.createElement("div",{style:i},o.a.createElement(l,null)))},t}(o.a.Component);t.a=y},176:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+DQo8c3ZnDQp4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciDQp4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayINCnZlcnNpb249IjEuMSIgaGVpZ2h0PSIzMTUiIHdpZHRoPSIzNDIiID4NCiA8ZGVmcz4NCiAgIDxnIGlkPSJoZWFydCI+DQogICA8cGF0aA0KICAgIGZpbGw9IiM2MjAwRUEiDQogICAgZD0iTTAgMjAwIHYtMjAwIGgyMDANCiAgICBhMTAwLDEwMCA5MCAwLDEgMCwyMDANCiAgICBhMTAwLDEwMCA5MCAwLDEgLTIwMCwwDQogICAgeiIgLz4NCiAgPC9nPg0KIDwvZGVmcz4NCiAgPHVzZSB4bGluazpocmVmPSIjaGVhcnQiIGNsYXNzPSJvdXRsaW5lICIgZmlsbD0icmVkIiB0cmFuc2Zvcm09InJvdGF0ZSgyMjUsMTUwLDEyMSkiIC8+DQo8L3N2Zz4NCg=="}}]);
//# sourceMappingURL=component---src-pages-index-js-2f5d30458f5c7778a745.js.map