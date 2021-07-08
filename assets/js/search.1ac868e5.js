(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"/+cc":function(e,t,n){
/*!
 * Fuse.js v3.6.1 - Lightweight fuzzy-search (http://fusejs.io)
 * 
 * Copyright (c) 2012-2017 Kirollos Risk (http://kiro.me)
 * All Rights Reserved. Apache Software License 2.0
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 */
e.exports=function(e){var t={};function n(o){if(t[o])return t[o].exports;var a=t[o]={i:o,l:!1,exports:{}};return e[o].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(o,a,function(t){return e[t]}.bind(null,a));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var r=n(1),i=n(7),c=i.get,s=(i.deepValue,i.isArray),h=function(){function e(t,n){var o=n.location,a=void 0===o?0:o,r=n.distance,i=void 0===r?100:r,s=n.threshold,h=void 0===s?.6:s,l=n.maxPatternLength,u=void 0===l?32:l,d=n.caseSensitive,p=void 0!==d&&d,v=n.tokenSeparator,f=void 0===v?/ +/g:v,g=n.findAllMatches,y=void 0!==g&&g,m=n.minMatchCharLength,b=void 0===m?1:m,k=n.id,x=void 0===k?null:k,S=n.keys,_=void 0===S?[]:S,w=n.shouldSort,C=void 0===w||w,M=n.getFn,A=void 0===M?c:M,I=n.sortFn,O=void 0===I?function(e,t){return e.score-t.score}:I,L=n.tokenize,P=void 0!==L&&L,E=n.matchAllTokens,D=void 0!==E&&E,j=n.includeMatches,T=void 0!==j&&j,q=n.includeScore,B=void 0!==q&&q,F=n.verbose,z=void 0!==F&&F;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options={location:a,distance:i,threshold:h,maxPatternLength:u,isCaseSensitive:p,tokenSeparator:f,findAllMatches:y,minMatchCharLength:b,id:x,keys:_,includeMatches:T,includeScore:B,shouldSort:C,getFn:A,sortFn:O,verbose:z,tokenize:P,matchAllTokens:D},this.setCollection(t),this._processKeys(_)}var t,n;return t=e,(n=[{key:"setCollection",value:function(e){return this.list=e,e}},{key:"_processKeys",value:function(e){if(this._keyWeights={},this._keyNames=[],e.length&&"string"==typeof e[0])for(var t=0,n=e.length;t<n;t+=1){var o=e[t];this._keyWeights[o]=1,this._keyNames.push(o)}else{for(var a=null,r=null,i=0,c=0,s=e.length;c<s;c+=1){var h=e[c];if(!h.hasOwnProperty("name"))throw new Error('Missing "name" property in key object');var l=h.name;if(this._keyNames.push(l),!h.hasOwnProperty("weight"))throw new Error('Missing "weight" property in key object');var u=h.weight;if(u<0||u>1)throw new Error('"weight" property in key must bein the range of [0, 1)');r=null==r?u:Math.max(r,u),a=null==a?u:Math.min(a,u),this._keyWeights[l]=u,i+=u}if(i>1)throw new Error("Total of weights cannot exceed 1")}}},{key:"search",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{limit:!1};this._log('---------\nSearch pattern: "'.concat(e,'"'));var n=this._prepareSearchers(e),o=n.tokenSearchers,a=n.fullSearcher,r=this._search(o,a);return this._computeScore(r),this.options.shouldSort&&this._sort(r),t.limit&&"number"==typeof t.limit&&(r=r.slice(0,t.limit)),this._format(r)}},{key:"_prepareSearchers",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=[];if(this.options.tokenize)for(var n=e.split(this.options.tokenSeparator),o=0,a=n.length;o<a;o+=1)t.push(new r(n[o],this.options));return{tokenSearchers:t,fullSearcher:new r(e,this.options)}}},{key:"_search",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=this.list,o={},a=[];if("string"==typeof n[0]){for(var r=0,i=n.length;r<i;r+=1)this._analyze({key:"",value:n[r],record:r,index:r},{resultMap:o,results:a,tokenSearchers:e,fullSearcher:t});return a}for(var c=0,s=n.length;c<s;c+=1)for(var h=n[c],l=0,u=this._keyNames.length;l<u;l+=1){var d=this._keyNames[l];this._analyze({key:d,value:this.options.getFn(h,d),record:h,index:c},{resultMap:o,results:a,tokenSearchers:e,fullSearcher:t})}return a}},{key:"_analyze",value:function(e,t){var n=this,o=e.key,a=e.arrayIndex,r=void 0===a?-1:a,i=e.value,c=e.record,h=e.index,l=t.tokenSearchers,u=void 0===l?[]:l,d=t.fullSearcher,p=t.resultMap,v=void 0===p?{}:p,f=t.results,g=void 0===f?[]:f;!function e(t,a,r,i){if(null!=a)if("string"==typeof a){var c=!1,h=-1,l=0;n._log("\nKey: ".concat(""===o?"--":o));var p=d.search(a);if(n._log('Full text: "'.concat(a,'", score: ').concat(p.score)),n.options.tokenize){for(var f=a.split(n.options.tokenSeparator),y=f.length,m=[],b=0,k=u.length;b<k;b+=1){var x=u[b];n._log('\nPattern: "'.concat(x.pattern,'"'));for(var S=!1,_=0;_<y;_+=1){var w=f[_],C=x.search(w),M={};C.isMatch?(M[w]=C.score,c=!0,S=!0,m.push(C.score)):(M[w]=1,n.options.matchAllTokens||m.push(1)),n._log('Token: "'.concat(w,'", score: ').concat(M[w]))}S&&(l+=1)}h=m[0];for(var A=m.length,I=1;I<A;I+=1)h+=m[I];h/=A,n._log("Token score average:",h)}var O=p.score;h>-1&&(O=(O+h)/2),n._log("Score average:",O);var L=!n.options.tokenize||!n.options.matchAllTokens||l>=u.length;if(n._log("\nCheck Matches: ".concat(L)),(c||p.isMatch)&&L){var P={key:o,arrayIndex:t,value:a,score:O};n.options.includeMatches&&(P.matchedIndices=p.matchedIndices);var E=v[i];E?E.output.push(P):(v[i]={item:r,output:[P]},g.push(v[i]))}}else if(s(a))for(var D=0,j=a.length;D<j;D+=1)e(D,a[D],r,i)}(r,i,c,h)}},{key:"_computeScore",value:function(e){this._log("\n\nComputing score:\n");for(var t=this._keyWeights,n=!!Object.keys(t).length,o=0,a=e.length;o<a;o+=1){for(var r=e[o],i=r.output,c=i.length,s=1,h=0;h<c;h+=1){var l=i[h],u=l.key,d=n?t[u]:1,p=0===l.score&&t&&t[u]>0?Number.EPSILON:l.score;s*=Math.pow(p,d)}r.score=s,this._log(r)}}},{key:"_sort",value:function(e){this._log("\n\nSorting...."),e.sort(this.options.sortFn)}},{key:"_format",value:function(e){var t=[];if(this.options.verbose){var n=[];this._log("\n\nOutput:\n\n",JSON.stringify(e,(function(e,t){if("object"===o(t)&&null!==t){if(-1!==n.indexOf(t))return;n.push(t)}return t}),2)),n=null}var a=[];this.options.includeMatches&&a.push((function(e,t){var n=e.output;t.matches=[];for(var o=0,a=n.length;o<a;o+=1){var r=n[o];if(0!==r.matchedIndices.length){var i={indices:r.matchedIndices,value:r.value};r.key&&(i.key=r.key),r.hasOwnProperty("arrayIndex")&&r.arrayIndex>-1&&(i.arrayIndex=r.arrayIndex),t.matches.push(i)}}})),this.options.includeScore&&a.push((function(e,t){t.score=e.score}));for(var r=0,i=e.length;r<i;r+=1){var c=e[r];if(this.options.id&&(c.item=this.options.getFn(c.item,this.options.id)[0]),a.length){for(var s={item:c.item},h=0,l=a.length;h<l;h+=1)a[h](c,s);t.push(s)}else t.push(c.item)}return t}},{key:"_log",value:function(){var e;this.options.verbose&&(e=console).log.apply(e,arguments)}}])&&a(t.prototype,n),e}();e.exports=h},function(e,t,n){function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var a=n(2),r=n(3),i=n(6),c=function(){function e(t,n){var o=n.location,a=void 0===o?0:o,r=n.distance,c=void 0===r?100:r,s=n.threshold,h=void 0===s?.6:s,l=n.maxPatternLength,u=void 0===l?32:l,d=n.isCaseSensitive,p=void 0!==d&&d,v=n.tokenSeparator,f=void 0===v?/ +/g:v,g=n.findAllMatches,y=void 0!==g&&g,m=n.minMatchCharLength,b=void 0===m?1:m,k=n.includeMatches,x=void 0!==k&&k;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options={location:a,distance:c,threshold:h,maxPatternLength:u,isCaseSensitive:p,tokenSeparator:f,findAllMatches:y,includeMatches:x,minMatchCharLength:b},this.pattern=p?t:t.toLowerCase(),this.pattern.length<=u&&(this.patternAlphabet=i(this.pattern))}var t,n;return t=e,(n=[{key:"search",value:function(e){var t=this.options,n=t.isCaseSensitive,o=t.includeMatches;if(n||(e=e.toLowerCase()),this.pattern===e){var i={isMatch:!0,score:0};return o&&(i.matchedIndices=[[0,e.length-1]]),i}var c=this.options,s=c.maxPatternLength,h=c.tokenSeparator;if(this.pattern.length>s)return a(e,this.pattern,h);var l=this.options,u=l.location,d=l.distance,p=l.threshold,v=l.findAllMatches,f=l.minMatchCharLength;return r(e,this.pattern,this.patternAlphabet,{location:u,distance:d,threshold:p,findAllMatches:v,minMatchCharLength:f,includeMatches:o})}}])&&o(t.prototype,n),e}();e.exports=c},function(e,t){var n=/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g;e.exports=function(e,t){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:/ +/g,a=new RegExp(t.replace(n,"\\$&").replace(o,"|")),r=e.match(a),i=!!r,c=[];if(i)for(var s=0,h=r.length;s<h;s+=1){var l=r[s];c.push([e.indexOf(l),l.length-1])}return{score:i?.5:1,isMatch:i,matchedIndices:c}}},function(e,t,n){var o=n(4),a=n(5);e.exports=function(e,t,n,r){for(var i=r.location,c=void 0===i?0:i,s=r.distance,h=void 0===s?100:s,l=r.threshold,u=void 0===l?.6:l,d=r.findAllMatches,p=void 0!==d&&d,v=r.minMatchCharLength,f=void 0===v?1:v,g=r.includeMatches,y=void 0!==g&&g,m=c,b=e.length,k=u,x=e.indexOf(t,m),S=t.length,_=[],w=0;w<b;w+=1)_[w]=0;if(-1!==x){var C=o(t,{errors:0,currentLocation:x,expectedLocation:m,distance:h});if(k=Math.min(C,k),-1!==(x=e.lastIndexOf(t,m+S))){var M=o(t,{errors:0,currentLocation:x,expectedLocation:m,distance:h});k=Math.min(M,k)}}x=-1;for(var A=[],I=1,O=S+b,L=1<<(S<=31?S-1:30),P=0;P<S;P+=1){for(var E=0,D=O;E<D;)o(t,{errors:P,currentLocation:m+D,expectedLocation:m,distance:h})<=k?E=D:O=D,D=Math.floor((O-E)/2+E);O=D;var j=Math.max(1,m-D+1),T=p?b:Math.min(m+D,b)+S,q=Array(T+2);q[T+1]=(1<<P)-1;for(var B=T;B>=j;B-=1){var F=B-1,z=n[e.charAt(F)];if(z&&(_[F]=1),q[B]=(q[B+1]<<1|1)&z,0!==P&&(q[B]|=(A[B+1]|A[B])<<1|1|A[B+1]),q[B]&L&&(I=o(t,{errors:P,currentLocation:F,expectedLocation:m,distance:h}))<=k){if(k=I,(x=F)<=m)break;j=Math.max(1,2*m-x)}}if(o(t,{errors:P+1,currentLocation:m,expectedLocation:m,distance:h})>k)break;A=q}var N={isMatch:x>=0,score:0===I?.001:I};return y&&(N.matchedIndices=a(_,f)),N}},function(e,t){e.exports=function(e,t){var n=t.errors,o=void 0===n?0:n,a=t.currentLocation,r=void 0===a?0:a,i=t.expectedLocation,c=void 0===i?0:i,s=t.distance,h=void 0===s?100:s,l=o/e.length,u=Math.abs(c-r);return h?l+u/h:u?1:l}},function(e,t){e.exports=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=[],o=-1,a=-1,r=0,i=e.length;r<i;r+=1){var c=e[r];c&&-1===o?o=r:c||-1===o||((a=r-1)-o+1>=t&&n.push([o,a]),o=-1)}return e[r-1]&&r-o>=t&&n.push([o,r-1]),n}},function(e,t){e.exports=function(e){for(var t={},n=e.length,o=0;o<n;o+=1)t[e.charAt(o)]=0;for(var a=0;a<n;a+=1)t[e.charAt(a)]|=1<<n-a-1;return t}},function(e,t){var n=function(e){return Array.isArray?Array.isArray(e):"[object Array]"===Object.prototype.toString.call(e)},o=function(e){return null==e?"":function(e){if("string"==typeof e)return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}(e)},a=function(e){return"string"==typeof e},r=function(e){return"number"==typeof e};e.exports={get:function(e,t){var i=[];return function e(t,c){if(c){var s=c.indexOf("."),h=c,l=null;-1!==s&&(h=c.slice(0,s),l=c.slice(s+1));var u=t[h];if(null!=u)if(l||!a(u)&&!r(u))if(n(u))for(var d=0,p=u.length;d<p;d+=1)e(u[d],l);else l&&e(u,l);else i.push(o(u))}else i.push(t)}(e,t),i},isArray:n,isString:a,isNum:r,toString:o}}])},qEAZ:function(e,t,n){"use strict";var o=n("EqoQ"),a=n("FTSP");o({target:"String",proto:!0,forced:n("o4SC")("anchor")},{anchor:function(e){return a(this,"a","name",e)}})},wQbG:function(e,t,n){"use strict";n.r(t);var o=n("VTBJ"),a=(n("vNVo"),n("FKdK"),n("1BWl"),n("7CcF"),n("DswY"),n("391k"),n("qEAZ"),n("/+cc")),r=n.n(a),i=n("CjXH"),c={components:{ChevronRightIcon:i.d,SearchIcon:i.j},data:function(){return{query:"",focusIndex:-1,focused:!1}},computed:{results:function(){return new r.a(this.headings,{keys:["value"],threshold:.25}).search(this.query).slice(0,15)},headings:function(){var e=[];return this.$static.allMarkdownPage.edges.map((function(e){return e.node})).forEach((function(t){t.headings.forEach((function(n){e.push(Object(o.a)(Object(o.a)({},n),{},{path:t.path,title:t.title}))}))})),e},showResult:function(){return this.focused&&this.query.length>0}},methods:{increment:function(){this.focusIndex<this.results.length-1&&this.focusIndex++},decrement:function(){this.focusIndex>=0&&this.focusIndex--},go:function(){var e;0!==this.results.length&&(e=-1===this.focusIndex?this.results[0]:this.results[this.focusIndex],this.$router.push(e.path+e.anchor),this.$refs.input.blur(),this.query="")}}},s=n("KHd+"),h=n("Kw5r"),l=h.a.config.optionMergeStrategies.computed,u={allMarkdownPage:{edges:[{node:{id:"c357b6fd454adefb6960a1f4beb62701",path:"/started/writing-content/",title:"커스텀 템플릿 만들기",headings:[{depth:1,value:"커스텀 템플릿 만들기",anchor:"#커스텀-템플릿-만들기"},{depth:2,value:"커스텀 템플릿 (Custom Template)",anchor:"#커스텀-템플릿-custom-template"},{depth:2,value:"개념",anchor:"#개념"},{depth:2,value:"템플릿 추가",anchor:"#템플릿-추가"},{depth:3,value:"템플릿 설명",anchor:"#템플릿-설명"},{depth:3,value:"템플릿 생성",anchor:"#템플릿-생성"},{depth:3,value:"템플릿 작성 변수",anchor:"#템플릿-작성-변수"},{depth:4,value:"공통 변수 (BoundedContext 제외)",anchor:"#공통-변수-boundedcontext-제외"},{depth:4,value:"BoundedContext 변수",anchor:"#boundedcontext-변수"},{depth:4,value:"Aggregate 변수",anchor:"#aggregate-변수"},{depth:4,value:"Event 변수",anchor:"#event-변수"},{depth:4,value:"Command 변수",anchor:"#command-변수"},{depth:4,value:"Policy 변수",anchor:"#policy-변수"},{depth:4,value:"View 변수",anchor:"#view-변수"},{depth:4,value:"fieldDescriptors",anchor:"#fielddescriptors"},{depth:4,value:"viewFieldDescriptors",anchor:"#viewfielddescriptors"},{depth:5,value:"CQRS",anchor:"#cqrs"},{depth:5,value:"UI Mashup",anchor:"#ui-mashup"}]}},{node:{id:"8ac60ab1a13e6805dd62d975a6c308f6",path:"/started/sidebar/",title:"Sidebar",headings:[{depth:1,value:"Sidebar",anchor:"#sidebar"},{depth:2,value:"Global Configuration",anchor:"#global-configuration"},{depth:3,value:"The Sidebar Config Object",anchor:"#the-sidebar-config-object"},{depth:2,value:"Frontmatter setup",anchor:"#frontmatter-setup"}]}},{node:{id:"186b5648a57992eb80418c40b8f3e328",path:"/started/settings/",title:"이벤트스토밍 학습",headings:[{depth:1,value:"이벤트스토밍 학습",anchor:"#이벤트스토밍-학습"},{depth:1,value:"오프라인 이벤트스토밍(Event-Storming) 기반 MSA 개발",anchor:"#오프라인-이벤트스토밍event-storming-기반-msa-개발"},{depth:2,value:"개념",anchor:"#개념"},{depth:2,value:"수행 방법",anchor:"#수행-방법"},{depth:3,value:"스티커 유형",anchor:"#스티커-유형"},{depth:4,value:"Event (Orange Sticker)",anchor:"#event-orange-sticker"},{depth:4,value:"Policy (Lilac Sticker)",anchor:"#policy-lilac-sticker"},{depth:4,value:"Command (Blue Sticker)",anchor:"#command-blue-sticker"},{depth:4,value:"Actor (Yellow Sticker)",anchor:"#actor-yellow-sticker"},{depth:4,value:"Aggregate (Yellow Sticker)",anchor:"#aggregate-yellow-sticker"},{depth:3,value:"Bounded Context 도출",anchor:"#bounded-context-도출"},{depth:3,value:"Context Mapping",anchor:"#context-mapping"},{depth:4,value:"Orchestration",anchor:"#orchestration"},{depth:4,value:"Choreography",anchor:"#choreography"},{depth:3,value:"마이크로서비스 구현",anchor:"#마이크로서비스-구현"},{depth:4,value:"Hexagonal Architecture",anchor:"#hexagonal-architecture"},{depth:4,value:"MSA Chassis",anchor:"#msa-chassis"},{depth:4,value:"이벤트스토밍 스티키 노트별 구현기술 적용",anchor:"#이벤트스토밍-스티키-노트별-구현기술-적용"},{depth:5,value:"Aggregate - Yellow",anchor:"#aggregate---yellow"},{depth:5,value:"Command – Sky Blue",anchor:"#command--sky-blue"},{depth:5,value:"Event - Orange",anchor:"#event---orange"},{depth:5,value:"Policy - Lilac",anchor:"#policy---lilac"},{depth:5,value:"Bounded Context",anchor:"#bounded-context"}]}},{node:{id:"e2d579c841c3d2f8e1149168e8549fa5",path:"/started/installation/",title:"도구 사용법",headings:[{depth:1,value:"도구 사용법",anchor:"#도구-사용법"},{depth:2,value:"MSAEasy로 MSA 개발하기",anchor:"#msaeasy로-msa-개발하기"},{depth:2,value:"서비스 접속",anchor:"#서비스-접속"},{depth:2,value:"예제 프로젝트",anchor:"#예제-프로젝트"},{depth:2,value:"UI 소개",anchor:"#ui-소개"},{depth:3,value:"UI 레이아웃",anchor:"#ui-레이아웃"},{depth:3,value:"Event",anchor:"#event"},{depth:4,value:"Event 추가하기",anchor:"#event-추가하기"},{depth:4,value:"Event 속성 설정",anchor:"#event-속성-설정"},{depth:3,value:"Policy",anchor:"#policy"},{depth:4,value:"Policy 추가하기",anchor:"#policy-추가하기"},{depth:4,value:"Policy 속성 설정",anchor:"#policy-속성-설정"},{depth:3,value:"Command",anchor:"#command"},{depth:4,value:"Command 추가하기",anchor:"#command-추가하기"},{depth:4,value:"Command 속성 설정",anchor:"#command-속성-설정"},{depth:3,value:"어그리게잇 (Aggregate)",anchor:"#어그리게잇-aggregate"},{depth:4,value:"어그리게잇 추가하기",anchor:"#어그리게잇-추가하기"},{depth:4,value:"어그리게잇 속성 설정",anchor:"#어그리게잇-속성-설정"},{depth:3,value:"Bounded Context",anchor:"#bounded-context"},{depth:4,value:"Bounded Context 추가하기",anchor:"#bounded-context-추가하기"},{depth:4,value:"Bounded Context 속성 설정",anchor:"#bounded-context-속성-설정"},{depth:3,value:"Relation",anchor:"#relation"},{depth:4,value:"Relation 추가",anchor:"#relation-추가"},{depth:4,value:"Relation 속성 설정",anchor:"#relation-속성-설정"},{depth:3,value:"EventStorming 결과",anchor:"#eventstorming-결과"},{depth:3,value:"코드 프리뷰",anchor:"#코드-프리뷰"},{depth:4,value:"코드 프리뷰 레이아웃",anchor:"#코드-프리뷰-레이아웃"},{depth:3,value:"다운로드 아카이브",anchor:"#다운로드-아카이브"},{depth:3,value:"빌드",anchor:"#빌드"},{depth:4,value:"다운로드 파일 구조 설명",anchor:"#다운로드-파일-구조-설명"},{depth:4,value:"선행사항",anchor:"#선행사항"},{depth:4,value:"실행",anchor:"#실행"},{depth:3,value:"클라우드 배포",anchor:"#클라우드-배포"},{depth:4,value:"Git 연동",anchor:"#git-연동"},{depth:4,value:"GCB Trigger 생성",anchor:"#gcb-trigger-생성"},{depth:4,value:"쿠버네티스 배포",anchor:"#쿠버네티스-배포"},{depth:5,value:"쿠버네티스 배포 확인",anchor:"#쿠버네티스-배포-확인"},{depth:5,value:"배포 실패시 해결방법",anchor:"#배포-실패시-해결방법"}]}},{node:{id:"b98d41e3f9616d594784c2e059cf0c14",path:"/started/",title:"소개",headings:[{depth:1,value:"소개",anchor:"#소개"},{depth:3,value:"주요 Features",anchor:"#주요-features"},{depth:3,value:"도구의 배경과 목적",anchor:"#도구의-배경과-목적"},{depth:4,value:"EDA(Event Driven Architecture) 기반 3세대 MSA의 유행",anchor:"#edaevent-driven-architecture-기반-3세대-msa의-유행"},{depth:4,value:"이벤트스토밍 애자일 기법의 유행",anchor:"#이벤트스토밍-애자일-기법의-유행"},{depth:4,value:"MSA 코드 자동 생성",anchor:"#msa-코드-자동-생성"},{depth:4,value:"Polyglot MSA를 위한 User-defined 템플릿",anchor:"#polyglot-msa를-위한-user-defined-템플릿"},{depth:3,value:"도입 효과",anchor:"#도입-효과"},{depth:3,value:"실행 환경",anchor:"#실행-환경"}]}},{node:{id:"ecafd76601fdacbed1d89798ad658e2c",path:"/started/deploying/",title:"도메인 주도 설계 학습",headings:[{depth:1,value:"도메인 주도 설계 학습",anchor:"#도메인-주도-설계-학습"},{depth:2,value:"MSA 분석기법 – DDD(Domain Driven Design)",anchor:"#msa-분석기법--ddddomain-driven-design"},{depth:2,value:"DDD 개요",anchor:"#ddd-개요"},{depth:3,value:"도메인 모델",anchor:"#도메인-모델"},{depth:3,value:"Bounded Context (한정된 문맥)",anchor:"#bounded-context-한정된-문맥"},{depth:4,value:"도메인 모델과 경계",anchor:"#도메인-모델과-경계"},{depth:4,value:"Bounded Context",anchor:"#bounded-context"},{depth:3,value:"Ubiquitous Language (도메인 언어)",anchor:"#ubiquitous-language-도메인-언어"},{depth:2,value:"DDD구현을 위한 이벤트스토밍 (EventStorming)",anchor:"#ddd구현을-위한-이벤트스토밍-eventstorming"}]}}]}},d=function(e){var t=e.options;t.__staticData?t.__staticData.data=u:(t.__staticData=h.a.observable({data:u}),t.computed=l({$static:function(){return t.__staticData.data}},t.computed))},p=Object(s.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"relative",on:{keydown:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"down",40,t.key,["Down","ArrowDown"])?null:e.increment(t)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"up",38,t.key,["Up","ArrowUp"])?null:e.decrement(t)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.go(t)}]}},[n("label",{staticClass:"relative block"},[n("span",{staticClass:"sr-only"},[e._v("Search Documentation")]),n("div",{staticClass:"absolute inset-y-0 left-0 flex items-center justify-center px-3 py-2 opacity-50"},[n("SearchIcon",{staticClass:"text-ui-typo",attrs:{size:"1.25x"}})],1),n("input",{ref:"input",staticClass:"block w-full py-2 pl-10 pr-4 border-2 rounded-lg bg-ui-sidebar border-ui-sidebar focus:bg-ui-background",class:{"rounded-b-none":e.showResult},attrs:{type:"search",placeholder:"Search Documentation..."},domProps:{value:e.query},on:{focus:function(t){e.focused=!0},blur:function(t){e.focused=!1},input:function(t){e.focusIndex=-1,e.query=t.target.value},change:function(t){e.query=t.target.value}}})]),e.showResult?n("div",{staticClass:"fixed inset-x-0 z-50 overflow-y-auto border-2 border-t-0 rounded-lg rounded-t-none shadow-lg results bg-ui-background bottom:0 sm:bottom-auto sm:absolute border-ui-sidebar",staticStyle:{"max-height":"calc(100vh - 120px)"}},[n("ul",{staticClass:"px-4 py-2 m-0"},[0===e.results.length?n("li",{staticClass:"px-2"},[e._v("\n        No results for "),n("span",{staticClass:"font-bold"},[e._v(e._s(e.query))]),e._v(".\n      ")]):e._l(e.results,(function(t,o){return n("li",{key:t.path+t.anchor,staticClass:"border-ui-sidebar",class:{"border-b":o+1!==e.results.length},on:{mouseenter:function(t){e.focusIndex=o},mousedown:e.go}},[n("g-link",{staticClass:"block p-2 -mx-2 text-base font-bold rounded-lg",class:{"bg-ui-sidebar text-ui-primary":e.focusIndex===o},attrs:{to:t.path+t.anchor}},[t.value===t.title?n("span",[e._v("\n            "+e._s(t.value)+"\n          ")]):n("span",{staticClass:"flex items-center"},[e._v("\n            "+e._s(t.title)+"\n            "),n("ChevronRightIcon",{staticClass:"mx-1",attrs:{size:"1x"}}),n("span",{staticClass:"font-normal opacity-75"},[e._v(e._s(t.value))])],1)])],1)}))],2)]):e._e()])}),[],!1,null,null,null);"function"==typeof d&&d(p);t.default=p.exports}}]);