module.exports=__NEXT_REGISTER_PAGE("/project",function(){return{page:webpackJsonp([2],{23:function(e,t,r){"use strict";var n=r(24),o=r(61),i="function"==typeof Symbol&&"symbol"==typeof Symbol(),a=Object.prototype.toString,c=Object.defineProperty&&function(){var e={};try{for(var t in Object.defineProperty(e,"x",{enumerable:!1,value:e}),e)return!1;return e.x===e}catch(e){return!1}}(),u=function(e,t,r,n){var o;t in e&&("function"!=typeof(o=n)||"[object Function]"!==a.call(o)||!n())||(c?Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:r,writable:!0}):e[t]=r)},s=function(e,t){var r=arguments.length>2?arguments[2]:{},a=n(t);i&&(a=a.concat(Object.getOwnPropertySymbols(t))),o(a,function(n){u(e,n,t[n],r[n])})};s.supportsDescriptors=!!c,e.exports=s},24:function(e,t,r){"use strict";var n=Object.prototype.hasOwnProperty,o=Object.prototype.toString,i=Array.prototype.slice,a=r(60),c=Object.prototype.propertyIsEnumerable,u=!c.call({toString:null},"toString"),s=c.call(function(){},"prototype"),l=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],p=function(e){var t=e.constructor;return t&&t.prototype===e},f={$applicationCache:!0,$console:!0,$external:!0,$frame:!0,$frameElement:!0,$frames:!0,$innerHeight:!0,$innerWidth:!0,$outerHeight:!0,$outerWidth:!0,$pageXOffset:!0,$pageYOffset:!0,$parent:!0,$scrollLeft:!0,$scrollTop:!0,$scrollX:!0,$scrollY:!0,$self:!0,$webkitIndexedDB:!0,$webkitStorageInfo:!0,$window:!0},d=function(){if("undefined"==typeof window)return!1;for(var e in window)try{if(!f["$"+e]&&n.call(window,e)&&null!==window[e]&&"object"==typeof window[e])try{p(window[e])}catch(e){return!0}}catch(e){return!0}return!1}(),h=function(e){var t=null!==e&&"object"==typeof e,r="[object Function]"===o.call(e),i=a(e),c=t&&"[object String]"===o.call(e),f=[];if(!t&&!r&&!i)throw new TypeError("Object.keys called on a non-object");var h=s&&r;if(c&&e.length>0&&!n.call(e,0))for(var m=0;m<e.length;++m)f.push(String(m));if(i&&e.length>0)for(var y=0;y<e.length;++y)f.push(String(y));else for(var g in e)h&&"prototype"===g||!n.call(e,g)||f.push(String(g));if(u)for(var b=function(e){if("undefined"==typeof window||!d)return p(e);try{return p(e)}catch(e){return!1}}(e),v=0;v<l.length;++v)b&&"constructor"===l[v]||!n.call(e,l[v])||f.push(l[v]);return f};h.shim=function(){if(Object.keys){if(!function(){return 2===(Object.keys(arguments)||"").length}(1,2)){var e=Object.keys;Object.keys=function(t){return a(t)?e(i.call(t)):e(t)}}}else Object.keys=h;return Object.keys||h},e.exports=h},25:function(e,t,r){"use strict";var n=r(24),o=r(26),i=r(63)(),a=Object,c=o.call(Function.call,Array.prototype.push),u=o.call(Function.call,Object.prototype.propertyIsEnumerable),s=i?Object.getOwnPropertySymbols:null;e.exports=function(e,t){if(void 0===(r=e)||null===r)throw new TypeError("target must be an object");var r,o,l,p,f,d,h,m,y=a(e);for(o=1;o<arguments.length;++o){l=a(arguments[o]),f=n(l);var g=i&&(Object.getOwnPropertySymbols||s);if(g)for(d=g(l),p=0;p<d.length;++p)m=d[p],u(l,m)&&c(f,m);for(p=0;p<f.length;++p)h=l[m=f[p]],u(l,m)&&(y[m]=h)}return y}},26:function(e,t,r){"use strict";var n=r(62);e.exports=Function.prototype.bind||n},27:function(e,t,r){"use strict";var n=r(25);e.exports=function(){return Object.assign?function(){if(!Object.assign)return!1;for(var e="abcdefghijklmnopqrst",t=e.split(""),r={},n=0;n<t.length;++n)r[t[n]]=t[n];var o=Object.assign({},r),i="";for(var a in o)i+=a;return e!==i}()?n:function(){if(!Object.assign||!Object.preventExtensions)return!1;var e=Object.preventExtensions({1:2});try{Object.assign(e,"xy")}catch(t){return"y"===e[1]}return!1}()?n:Object.assign:n}},340:function(e,t,r){e.exports=r(341)},341:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(46),o=r.n(n),i=r(0),a=r.n(i),c=r(22),u=(r.n(c),r(51)),s=(r.n(u),r(52)),l=(r.n(s),r(38));r.n(l);function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function d(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}var h=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),d(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}var r,n,i,c,u;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.a.Component),r=t,n=[{key:"render",value:function(){return a.a.createElement("div",{id:"project"},this.props.id)}}],i=[{key:"getInitialProps",value:(c=o.a.mark(function e(t){var r;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.query.id,e.abrupt("return",{id:r});case 2:case"end":return e.stop()}},e,this)}),u=function(){var e=this,t=arguments;return new Promise(function(r,n){var o=c.apply(e,t);function i(e,t){try{var i=o[e](t),c=i.value}catch(e){return void n(e)}i.done?r(c):Promise.resolve(c).then(a,u)}function a(e){i("next",e)}function u(e){i("throw",e)}a()})},function(e){return u.apply(this,arguments)})}],n&&f(r.prototype,n),i&&f(r,i),t}();t.default=h},38:function(e,t,r){e.exports=r(55)},51:function(e,t){e.exports={fileMap:{"output/activities.json":{title:"Professional Activities",dir:"output",base:"activities.json",ext:".json",sourceBase:"activities.md",sourceExt:".md"},"output/awards.json":{title:"Awards and Honors",dir:"output",base:"awards.json",ext:".json",sourceBase:"awards.md",sourceExt:".md"},"output/news.json":[{date:"2017-12-16",image:"",text:"Spring and Summer Intern for [**ERATO Project**](http://www.jst.go.jp/erato/kawahara/projects/) at the University of Tokyo with [**Yasuaki Kakehi**](http://www.xlab.sfc.keio.ac.jp/) and [**Yoshihiro Kawahara**](http://www.akg.t.u-tokyo.ac.jp/)."},{date:"2017-12-11",image:"",text:"Two [**CHI 2018**](https://chi2018.acm.org/) full-papers have been accepted (25%)."},{date:"2017-06-27",image:"",text:"One [**VL/HCC 2017**](https://sites.google.com/site/vlhcc2017/) full-paper has been accepted (29%)."},{date:"2017-06-21",image:"",text:"One [**ASSETS 2017**](https://assets17.sigaccess.org/) full-paper has been accepted (26%)."},{date:"2017-02-11",image:"",text:"One [**CHI 2017**](https://chi2017.acm.org/) LBW paper has been accepted (38%)."},{date:"2016-12-16",image:"",text:"One [**L@S 2017**](http://learningatscale.acm.org/las2017/) full paper has been accepted (22%)."},{date:"2016-12-12",image:"",text:"One [**ICSE 2017**](http://icse2017.gatech.edu/) full-paper has been accepted (19%)."},{date:"2016-05-23",image:"",text:"Summer at [**UC Berkeley**](http://bid.berkeley.edu/) with [**Bjoern Hartmann**](http://people.eecs.berkeley.edu/~bjoern/)."},{date:"2016-01-15",image:"",text:"One [**CHI 2016**](https://chi2016.acm.org/wp/) full-paper has been accepted (23%)."},{date:"2015-10-01",image:"",text:"I will serve as a web and social media chair for [**UIST 2016**](http://uist.acm.org/uist2016/)"},{date:"2015-05-20",image:"",text:"Summer at [**Stanford**](http://hci.stanford.edu/) with [**Michael Bernstein**](http://hci.stanford.edu/msb/)."}],"output/news/2017-12-11.json":{date:"2017-12-11",image:"",title:'Two <a href="https://chi2018.acm.org/"><strong>CHI 2018',dir:"output/news",base:"2017-12-11.json",ext:".json",sourceBase:"2017-12-11.md",sourceExt:".md"},"output/news/2017-12-16.json":{date:"2017-12-16",image:"",title:'Spring and Summer Intern for <a href="http://www.jst.go.jp/erato/kawahara/projects/"><strong>ERATO Project',dir:"output/news",base:"2017-12-16.json",ext:".json",sourceBase:"2017-12-16.md",sourceExt:".md"},"output/experience.json":{title:"Research Experience",dir:"output",base:"experience.json",ext:".json",sourceBase:"experience.md",sourceExt:".md"},"output/profile.json":{title:"Profile",dir:"output",base:"profile.json",ext:".json",sourceBase:"profile.md",sourceExt:".md"},"output/projects/atelier.json":{id:"Atelier",title:"Atelier: Repurposing Expert Crowdsourcing Tasks as Micro-internships",authors:"Ryo Suzuki**, Niloufar Salehi, Michelle S. Lam, Juan C. Marroquin, and Michael S. Bernstein",image:"atelier.jpg",conference:{name:"CHI 2016",url:"https://chi2016.acm.org/wp/"},pdf:"chi-2016-atelier.pdf",video:"https://www.youtube.com/satch-v=tBojZejtFQo",slide:"chi-2016-atelier-slide.pdf","acm-dl":"http://dl.acm.org/citation.cfm?id=2858121",arxiv:"https://arxiv.org/abs/1602.06634",dir:"output/projects",base:"atelier.json",ext:".json",sourceBase:"atelier.md",sourceExt:".md"},"output/projects/flux-marker.json":{id:"flux-marker",title:"FluxMarker: Enhancing Tactile Graphics with Dynamic Tactile Markers",authors:["Ryo Suzuki","Abigale Stangl","Mark D. Gross","Tom Yeh"],image:"fluxmarker.png",conference:{name:"ASSETS 2017",url:"https://assets17.sigaccess.org/"},pdf:"assets-2017-fluxmarker.pdf",video:"https://www.youtube.com/watch?v=VbwIZ9V6i_g",slide:"assets-2017-fluxmarker-slide.pdf","acm-dl":"https://dl.acm.org/citation.cfm?id=3132548",arxiv:"https://arxiv.org/abs/1708.03783",dir:"output/projects",base:"flux-marker.json",ext:".json",sourceBase:"flux-marker.md",sourceExt:".md"},"output/projects/mixed-initiative.json":{id:"mixed-initiative",title:"Writing Reusable Code Feedback at Scale with Mixed-Initiative Program Synthesis",authors:"Andrew Head, Elena Glassman, Gustavo Soares, **Ryo Suzuki**, Lucas Figueredo, Loris D’Antoni, Bjoern Hartmann",image:"las2017.png",conference:{name:"L@S",url:"http://learningatscale.acm.org/las2017"},pdf:"las-2017-mixed.pdf","acm-dl":"http://dl.acm.org/citation.cfm?id=3051467",dir:"output/projects",base:"mixed-initiative.json",ext:".json",sourceBase:"mixed-initiative.md",sourceExt:".md"},"output/projects/reactile.json":{id:"reactile",title:"Reactile: Programming Swarm User Interfaces through Direct Physical Manipulation",authors:["Ryo Suzuki","Jun Kato","Mark D. Gross","Tom Yeh"],image:"reactile.jpg",conference:[{name:"CHI 2018"},{url:"https://chi2018.acm.org/"}],pdf:"chi-2018-reactile.pdf",video:"https://www.youtube.com/watch?v=Gb7brajKCVE","short-video":"https://www.youtube.com/watch?v=YT7vMJZjohU",slide:"chi-2018-reactile-slide.pdf","acm-dl":"https://dl.acm.org/citation.cfm?id=3173773",github:"https://github.com/ryosuzuki/reactile",dir:"output/projects",base:"reactile.json",ext:".json",sourceBase:"reactile.md",sourceExt:".md"},"output/projects/pep.json":{id:"pep,",title:"PEP (3D Printed Electronic Papercrafts): An Integrated Approach for 3D Sculpting Paper-based Electronic Devices",authors:["Hyunjoo Oh","Tung D. Ta","Ryo Suzuki","Mark D. Gross","Yoshihiro Kawahara","Lining Yao"],image:"pep.png",conference:{name:"CHI 2018",url:"https://chi2018.acm.org/"},pdf:"chi-2018-pep.pdf",video:"https://vimeo.com/252080903","short-video":"https://www.youtube.com/watch?v=DTd863suDN0","acm-dl":"https://dl.acm.org/citation.cfm?id=3174015",dir:"output/projects",base:"pep.json",ext:".json",sourceBase:"pep.md",sourceExt:".md"},"output/projects/refazer.json":{id:"refazer",title:"Learning Syntactic Program Transformations from Examples",authors:"Reudismam Rolim, Gustavo Soares, Loris D’Antoni, Oleksandr Polozov, Sumit Gulwani, Rohit Gheyi, **Ryo Suzuki**, and Bjoern Hartmann",image:"refazer.png",conference:{name:"ICSE 2017",url:"http://icse2017.gatech.edu/"},pdf:"icse-2017-refazer.pdf","acm-dl":"http://dl.acm.org/citation.cfm?id=3097417",arxiv:"https://arxiv.org/abs/1608.09000",dir:"output/projects",base:"refazer.json",ext:".json",sourceBase:"refazer.md",sourceExt:".md"},"output/projects/trace-diff.json":{id:"trace-diff",title:"TraceDiff: Debugging Unexpected Code Behavior Using Trace Divergences",authors:"**Ryo Suzuki**, Gustavo Soares, Andrew Head, Elena Glassman, Ruan Reis, Melina Mongiovi, Loris D’Antoni, Bjoern Hartmann",image:"tracediff.png",conference:null,name:"VL/HCC",url:"https://sites.google.com/site/vlhcc",pdf:"vlhcc-2017-tracediff.pdf",slide:"vlhcc-2017-tracediff-slide.pdf",github:"https://github.com/ryosuzuki/trace-diff",demo:"https://ryosuzuki.github.io/trace-diff/",ieee:"http://ieeexplore.ieee.org/document/8103457/",arxiv:"https://arxiv.org/abs/1708.03786a",dir:"output/projects",base:"trace-diff.json",ext:".json",sourceBase:"trace-diff.md",sourceExt:".md"},"output/updates.json":{title:"Recent Updates",dir:"output",base:"updates.json",ext:".json",sourceBase:"updates.md",sourceExt:".md"}},sourceFileArray:["content/activities.md","content/awards.md","content/experience.md","content/news.yaml","content/news/2017-12-11.md","content/news/2017-12-16.md","content/profile.md","content/projects/atelier.md","content/projects/flux-marker.md","content/projects/mixed-initiative.md","content/projects/pep.md","content/projects/reactile.md","content/projects/refazer.md","content/projects/trace-diff.md","content/updates.md"]}},52:function(e,t,r){var n=r(53);e.exports=n().add("/static/publications/:id","/publications/:id").add("/:id","project")},53:function(e,t,r){"use strict";var n=u(r(54)),o=u(r(0)),i=r(31),a=u(r(38)),c=u(r(67));function u(e){return e&&e.__esModule?e:{default:e}}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){l(e,t,r[t])})}return e}function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function d(e,t,r){return t&&f(e.prototype,t),r&&f(e,r),e}e.exports=function(e){return new h(e)};var h=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.Link,n=void 0===r?a.default:r,o=t.Router,i=void 0===o?c.default:o;p(this,e),this.routes=[],this.Link=this.getLink(n),this.Router=this.getRouter(i)}return d(e,[{key:"add",value:function(e,t,r){var n;if(e instanceof Object?e=(n=e).name:("/"===e[0]&&(r=t,t=e,e=null),n={name:e,pattern:t,page:r}),this.findByName(e))throw new Error('Route "'.concat(e,'" already exists'));return this.routes.push(new m(n)),this}},{key:"findByName",value:function(e){if(e)return this.routes.filter(function(t){return t.name===e})[0]}},{key:"match",value:function(e){var t=(0,i.parse)(e,!0),r=t.pathname,n=t.query;return this.routes.reduce(function(e,t){if(e.route)return e;var o=t.match(r);return o?s({},e,{route:t,params:o,query:s({},n,o)}):e},{query:n,parsedUrl:t})}},{key:"findAndGetUrls",value:function(e,t){var r=this.findByName(e);if(r)return{route:r,urls:r.getUrls(t),byName:!0};var n=this.match(e),o=n.route,i=n.query;return{route:o,urls:{href:o?o.getHref(i):e,as:e}}}},{key:"getRequestHandler",value:function(e,t){var r=this,n=e.getRequestHandler();return function(o,i){var a=r.match(o.url),c=a.route,u=a.query,s=a.parsedUrl;c?t?t({req:o,res:i,route:c,query:u}):e.render(o,i,c.page,u):n(o,i,s)}}},{key:"getLink",value:function(e){var t=this;return function(r){var n=r.route,i=r.params,a=r.to,c=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(r,["route","params","to"]),u=n||a;return u&&Object.assign(c,t.findAndGetUrls(u,i).urls),o.default.createElement(e,c)}}},{key:"getRouter",value:function(e){var t=this,r=function(r){return function(n,o,i){var a=t.findAndGetUrls(n,o),c=a.byName,u=a.urls,s=u.as,l=u.href;return e[r](l,s,c?i:o)}};return e.pushRoute=r("push"),e.replaceRoute=r("replace"),e.prefetchRoute=r("prefetch"),e}}]),e}(),m=function(){function e(t){var r=t.name,o=t.pattern,i=t.page,a=void 0===i?r:i;if(p(this,e),!r&&!a)throw new Error('Missing page to render for route "'.concat(o,'"'));this.name=r,this.pattern=o||"/".concat(r),this.page=a.replace(/(^|\/)index$/,"").replace(/^\/?/,"/"),this.regex=(0,n.default)(this.pattern,this.keys=[]),this.keyNames=this.keys.map(function(e){return e.name}),this.toPath=n.default.compile(this.pattern)}return d(e,[{key:"match",value:function(e){var t=this.regex.exec(e);if(t)return this.valuesToParams(t.slice(1))}},{key:"valuesToParams",value:function(e){var t=this;return e.reduce(function(e,r,n){return void 0===r?e:Object.assign(e,l({},t.keys[n].name,decodeURIComponent(r)))},{})}},{key:"getHref",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return"".concat(this.page,"?").concat(y(e))}},{key:"getAs",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=this.toPath(t)||"/",n=Object.keys(t).filter(function(t){return-1===e.keyNames.indexOf(t)});if(!n.length)return r;var o=n.reduce(function(e,r){return Object.assign(e,l({},r,t[r]))},{});return"".concat(r,"?").concat(y(o))}},{key:"getUrls",value:function(e){return{as:this.getAs(e),href:this.getHref(e)}}}]),e}(),y=function(e){return Object.keys(e).filter(function(t){return null!==e[t]&&void 0!==e[t]}).map(function(t){var r=e[t];return Array.isArray(r)&&(r=r.join("/")),[encodeURIComponent(t),encodeURIComponent(r)].join("=")}).join("&")}},54:function(e,t){e.exports=p,e.exports.parse=i,e.exports.compile=function(e,t){return a(i(e,t))},e.exports.tokensToFunction=a,e.exports.tokensToRegExp=l;var r="/",n="./",o=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function i(e,t){for(var i,a=[],s=0,l=0,p="",f=t&&t.delimiter||r,d=t&&t.delimiters||n,h=!1;null!==(i=o.exec(e));){var m=i[0],y=i[1],g=i.index;if(p+=e.slice(l,g),l=g+m.length,y)p+=y[1],h=!0;else{var b="",v=e[l],j=i[2],w=i[3],x=i[4],O=i[5];if(!h&&p.length){var k=p.length-1;d.indexOf(p[k])>-1&&(b=p[k],p=p.slice(0,k))}p&&(a.push(p),p="",h=!1);var S=""!==b&&void 0!==v&&v!==b,E="+"===O||"*"===O,P="?"===O||"*"===O,T=b||f,R=w||x;a.push({name:j||s++,prefix:b,delimiter:T,optional:P,repeat:E,partial:S,pattern:R?u(R):"[^"+c(T)+"]+?"})}}return(p||l<e.length)&&a.push(p+e.substr(l)),a}function a(e){for(var t=new Array(e.length),r=0;r<e.length;r++)"object"==typeof e[r]&&(t[r]=new RegExp("^(?:"+e[r].pattern+")$"));return function(r,n){for(var o="",i=n&&n.encode||encodeURIComponent,a=0;a<e.length;a++){var c=e[a];if("string"!=typeof c){var u,s=r?r[c.name]:void 0;if(Array.isArray(s)){if(!c.repeat)throw new TypeError('Expected "'+c.name+'" to not repeat, but got array');if(0===s.length){if(c.optional)continue;throw new TypeError('Expected "'+c.name+'" to not be empty')}for(var l=0;l<s.length;l++){if(u=i(s[l]),!t[a].test(u))throw new TypeError('Expected all "'+c.name+'" to match "'+c.pattern+'"');o+=(0===l?c.prefix:c.delimiter)+u}}else if("string"!=typeof s&&"number"!=typeof s&&"boolean"!=typeof s){if(!c.optional)throw new TypeError('Expected "'+c.name+'" to be '+(c.repeat?"an array":"a string"));c.partial&&(o+=c.prefix)}else{if(u=i(String(s)),!t[a].test(u))throw new TypeError('Expected "'+c.name+'" to match "'+c.pattern+'", but got "'+u+'"');o+=c.prefix+u}}else o+=c}return o}}function c(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$/()])/g,"\\$1")}function s(e){return e&&e.sensitive?"":"i"}function l(e,t,o){for(var i=(o=o||{}).strict,a=!1!==o.end,u=c(o.delimiter||r),l=o.delimiters||n,p=[].concat(o.endsWith||[]).map(c).concat("$").join("|"),f="",d=!1,h=0;h<e.length;h++){var m=e[h];if("string"==typeof m)f+=c(m),d=h===e.length-1&&l.indexOf(m[m.length-1])>-1;else{var y=c(m.prefix),g=m.repeat?"(?:"+m.pattern+")(?:"+y+"(?:"+m.pattern+"))*":m.pattern;t&&t.push(m),m.optional?m.partial?f+=y+"("+g+")?":f+="(?:"+y+"("+g+"))?":f+=y+"("+g+")"}}return a?(i||(f+="(?:"+u+")?"),f+="$"===p?"$":"(?="+p+")"):(i||(f+="(?:"+u+"(?="+p+"))?"),d||(f+="(?="+u+"|"+p+")")),new RegExp("^"+f,s(o))}function p(e,t,r){return e instanceof RegExp?function(e,t){if(!t)return e;var r=e.source.match(/\((?!\?)/g);if(r)for(var n=0;n<r.length;n++)t.push({name:n,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null});return e}(e,t):Array.isArray(e)?function(e,t,r){for(var n=[],o=0;o<e.length;o++)n.push(p(e[o],t,r).source);return new RegExp("(?:"+n.join("|")+")",s(r))}(e,t,r):function(e,t,r){return l(i(e,r),t,r)}(e,t,r)}},55:function(e,t,r){"use strict";var n=r(13),o=r(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=o(r(36)),a=o(r(56)),c=o(r(17)),u=o(r(6)),s=o(r(7)),l=o(r(18)),p=o(r(19)),f=o(r(50)),d=r(31),h=n(r(0)),m=o(r(32)),y=o(r(58)),g=n(r(15)),b=r(16),v=function(e){function t(e){var r,n;(0,u.default)(this,t);for(var o=arguments.length,i=new Array(o>1?o-1:0),a=1;a<o;a++)i[a-1]=arguments[a];return(n=(0,l.default)(this,(r=t.__proto__||(0,c.default)(t)).call.apply(r,[this,e].concat(i)))).linkClicked=n.linkClicked.bind((0,f.default)(n)),n.formatUrls(e),n}return(0,p.default)(t,e),(0,s.default)(t,[{key:"componentWillReceiveProps",value:function(e){this.formatUrls(e)}},{key:"linkClicked",value:function(e){var t=this;if("A"!==e.currentTarget.nodeName||!(e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var r=this.props.shallow,n=this.href,o=this.as;if(function(e){var t=(0,d.parse)(e,!1,!0),r=(0,d.parse)((0,b.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===r.protocol&&t.host===r.host}(n)){var i=window.location.pathname;n=(0,d.resolve)(i,n),o=o?(0,d.resolve)(i,o):n,e.preventDefault();var a=this.props.scroll;null==a&&(a=o.indexOf("#")<0);var c=this.props.replace?"replace":"push";g.default[c](n,o,{shallow:r}).then(function(e){e&&a&&(window.scrollTo(0,0),document.body.focus())}).catch(function(e){t.props.onError&&t.props.onError(e)})}}}},{key:"prefetch",value:function(){if(this.props.prefetch&&"undefined"!=typeof window){var e=window.location.pathname,t=(0,d.resolve)(e,this.href);g.default.prefetch(t)}}},{key:"componentDidMount",value:function(){this.prefetch()}},{key:"componentDidUpdate",value:function(e){(0,a.default)(this.props.href)!==(0,a.default)(e.href)&&this.prefetch()}},{key:"formatUrls",value:function(e){this.href=e.href&&"object"===(0,i.default)(e.href)?(0,d.format)(e.href):e.href,this.as=e.as&&"object"===(0,i.default)(e.as)?(0,d.format)(e.as):e.as}},{key:"render",value:function(){var e=this,t=this.props.children,r=this.href,n=this.as;"string"==typeof t&&(t=h.default.createElement("a",null,t));var o=h.Children.only(t),i={onClick:function(t){o.props&&"function"==typeof o.props.onClick&&o.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==o.type||"href"in o.props)||(i.href=n||r),i.href&&"undefined"!=typeof __NEXT_DATA__&&__NEXT_DATA__.nextExport&&(i.href=(0,g._rewriteUrlForNextExport)(i.href)),h.default.cloneElement(o,i)}}]),t}(h.Component);t.default=v,Object.defineProperty(v,"propTypes",{configurable:!0,enumerable:!0,writable:!0,value:(0,y.default)({href:m.default.oneOfType([m.default.string,m.default.object]).isRequired,as:m.default.oneOfType([m.default.string,m.default.object]),prefetch:m.default.bool,replace:m.default.bool,shallow:m.default.bool,passHref:m.default.bool,scroll:m.default.bool,children:m.default.oneOfType([m.default.element,function(e,t){return"string"==typeof e[t]&&j("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>"),null}]).isRequired})});var j=(0,b.execOnce)(b.warn)},56:function(e,t,r){e.exports=r(57)},57:function(e,t,r){var n=r(1),o=n.JSON||(n.JSON={stringify:JSON.stringify});e.exports=function(e){return o.stringify.apply(o,arguments)}},58:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(!(0,i.default)(e))throw new TypeError("given propTypes must be an object");if((0,o.default)(e,u)&&(t=e[u],!t||t[u]!==s))throw new TypeError("Against all odds, you created a propType for a prop that uses both the zero-width space and our custom string - which, sadly, conflicts with `prop-types-exact`");var t;return(0,n.default)({},e,c({},u,(r=function(){return function(t,r,n){var i=Object.keys(t).filter(function(t){return!(0,o.default)(e,t)});if(i.length>0)return new TypeError(String(n)+": unknown props found: "+String(i.join(", ")));return null}}(),(0,n.default)(r,c({},u,s)))));var r};var n=a(r(59)),o=a(r(65)),i=a(r(66));function a(e){return e&&e.__esModule?e:{default:e}}function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var u="prop-types-exact: ​",s={};e.exports=t.default},59:function(e,t,r){"use strict";var n=r(23),o=r(25),i=r(27),a=r(64),c=i();n(c,{getPolyfill:i,implementation:o,shim:a}),e.exports=c},60:function(e,t,r){"use strict";var n=Object.prototype.toString;e.exports=function(e){var t=n.call(e),r="[object Arguments]"===t;return r||(r="[object Array]"!==t&&null!==e&&"object"==typeof e&&"number"==typeof e.length&&e.length>=0&&"[object Function]"===n.call(e.callee)),r}},61:function(e,t){var r=Object.prototype.hasOwnProperty,n=Object.prototype.toString;e.exports=function(e,t,o){if("[object Function]"!==n.call(t))throw new TypeError("iterator must be a function");var i=e.length;if(i===+i)for(var a=0;a<i;a++)t.call(o,e[a],a,e);else for(var c in e)r.call(e,c)&&t.call(o,e[c],c,e)}},62:function(e,t,r){"use strict";var n=Array.prototype.slice,o=Object.prototype.toString;e.exports=function(e){var t=this;if("function"!=typeof t||"[object Function]"!==o.call(t))throw new TypeError("Function.prototype.bind called on incompatible "+t);for(var r,i=n.call(arguments,1),a=Math.max(0,t.length-i.length),c=[],u=0;u<a;u++)c.push("$"+u);if(r=Function("binder","return function ("+c.join(",")+"){ return binder.apply(this,arguments); }")(function(){if(this instanceof r){var o=t.apply(this,i.concat(n.call(arguments)));return Object(o)===o?o:this}return t.apply(e,i.concat(n.call(arguments)))}),t.prototype){var s=function(){};s.prototype=t.prototype,r.prototype=new s,s.prototype=null}return r}},63:function(e,t,r){"use strict";e.exports=function(){if("function"!=typeof Symbol||"function"!=typeof Object.getOwnPropertySymbols)return!1;if("symbol"==typeof Symbol.iterator)return!0;var e={},t=Symbol("test"),r=Object(t);if("string"==typeof t)return!1;if("[object Symbol]"!==Object.prototype.toString.call(t))return!1;if("[object Symbol]"!==Object.prototype.toString.call(r))return!1;for(t in e[t]=42,e)return!1;if("function"==typeof Object.keys&&0!==Object.keys(e).length)return!1;if("function"==typeof Object.getOwnPropertyNames&&0!==Object.getOwnPropertyNames(e).length)return!1;var n=Object.getOwnPropertySymbols(e);if(1!==n.length||n[0]!==t)return!1;if(!Object.prototype.propertyIsEnumerable.call(e,t))return!1;if("function"==typeof Object.getOwnPropertyDescriptor){var o=Object.getOwnPropertyDescriptor(e,t);if(42!==o.value||!0!==o.enumerable)return!1}return!0}},64:function(e,t,r){"use strict";var n=r(23),o=r(27);e.exports=function(){var e=o();return n(Object,{assign:e},{assign:function(){return Object.assign!==e}}),e}},65:function(e,t,r){"use strict";var n=r(26);e.exports=n.call(Function.call,Object.prototype.hasOwnProperty)},66:function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default=function(e){return e&&"object"===(void 0===e?"undefined":r(e))&&!Array.isArray(e)},e.exports=t.default},67:function(e,t,r){e.exports=r(15)}},[340]).default}});