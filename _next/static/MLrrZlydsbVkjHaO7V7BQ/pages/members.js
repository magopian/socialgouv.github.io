(window.webpackJsonp=window.webpackJsonp||[]).push([["a2b8"],{Hr8E:function(e,t,a){"use strict";a.r(t);var n=a("0iUn"),r=a("sLSF"),u=a("MI3g"),c=a("a7VT"),l=a("Tit0"),i=a("q1tI"),s=a.n(i),m=a("m/Pd"),o=a.n(m),d=a("YFqc"),p=a.n(d),f=a("tKWW"),b=a("W09b"),E=function(e){function t(){return Object(n.default)(this,t),Object(u.default)(this,Object(c.default)(t).apply(this,arguments))}return Object(l.default)(t,e),Object(r.default)(t,[{key:"render",value:function(){return s.a.createElement(f.k,null,s.a.createElement(o.a,null,s.a.createElement("title",null,"Les acteurs de l'incubateur")),s.a.createElement(f.j,{title:"Les acteurs de l'incubateur",tagline:"Ils contribuent à l'incubateur des ministères Sociaux"}),s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row cards cards--small",style:{padding:"2em 0",color:"black",flexWrap:"wrap",justifyContent:"space-around"}},this.props.members.map(function(e){return s.a.createElement(f.e,{key:e.name,img:e.picture,title:e.name,meta:e.structure,style:{flex:"1 0 auto",margin:"5px auto"},description:e.role},e.startups.map(function(t){return s.a.createElement(p.a,{href:"/startups/".concat(t),key:t+e.name},s.a.createElement("a",{className:"label"},t))}))}))))}}],[{key:"getInitialProps",value:function(){return{members:(e=b,e.map(function(e){return[Math.random(),e]}).sort(function(e,t){return e[0]-t[0]}).map(function(e){return e[1]}))};var e}}]),t}(s.a.Component);E.defaultProps={members:[]},t.default=E},mNA6:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/members",function(){var e=a("Hr8E");return{page:e.default||e}}])}},[["mNA6","5d41","9da1"]]]);