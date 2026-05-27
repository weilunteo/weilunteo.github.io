(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function t(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(a){if(a.ep)return;a.ep=!0;const s=t(a);fetch(a.href,s)}})();(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&t(s)}).observe(document,{childList:!0,subtree:!0});function e(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function t(i){if(i.ep)return;i.ep=!0;const a=e(i);fetch(i.href,a)}})();(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&t(s)}).observe(document,{childList:!0,subtree:!0});function e(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function t(i){if(i.ep)return;i.ep=!0;const a=e(i);fetch(i.href,a)}})();(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&t(s)}).observe(document,{childList:!0,subtree:!0});function e(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function t(i){if(i.ep)return;i.ep=!0;const a=e(i);fetch(i.href,a)}})();(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&t(s)}).observe(document,{childList:!0,subtree:!0});function e(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function t(i){if(i.ep)return;i.ep=!0;const a=e(i);fetch(i.href,a)}})();(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&t(s)}).observe(document,{childList:!0,subtree:!0});function e(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function t(i){if(i.ep)return;i.ep=!0;const a=e(i);fetch(i.href,a)}})();function rr(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function ud(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var mi={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Cs={duration:.5,overwrite:!1,delay:0},gc,Ot,lt,bi=1e8,et=1/bi,dl=Math.PI*2,Uf=dl/4,Of=0,dd=Math.sqrt,Nf=Math.cos,Ff=Math.sin,Dt=function(r){return typeof r=="string"},ft=function(r){return typeof r=="function"},cr=function(r){return typeof r=="number"},_c=function(r){return typeof r>"u"},Hi=function(r){return typeof r=="object"},$t=function(r){return r!==!1},vc=function(){return typeof window<"u"},qs=function(r){return ft(r)||Dt(r)},pd=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},kt=Array.isArray,zf=/random\([^)]+\)/g,Bf=/,\s*/g,Nh=/(?:-?\.?\d|\.)+/gi,fd=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Fa=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Mo=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,md=/[+-]=-?[.\d]+/,kf=/[^,'"\[\]\s]+/gi,Gf=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,ut,zi,pl,xc,gi={},zn={},gd,_d=function(r){return(zn=Ka(r,gi))&&ri},yc=function(r,e){return console.warn("Invalid property",r,"set to",e,"Missing plugin? gsap.registerPlugin()")},Ps=function(r,e){return!e&&console.warn(r)},vd=function(r,e){return r&&(gi[r]=e)&&zn&&(zn[r]=e)||gi},Ls=function(){return 0},Vf={suppressEvents:!0,isStart:!0,kill:!1},bn={suppressEvents:!0,kill:!1},Hf={suppressEvents:!0},Mc={},wr=[],fl={},xd,hi={},So={},Fh=30,wn=[],Sc="",Ec=function(r){var e=r[0],t,i;if(Hi(e)||ft(e)||(r=[r]),!(t=(e._gsap||{}).harness)){for(i=wn.length;i--&&!wn[i].targetTest(e););t=wn[i]}for(i=r.length;i--;)r[i]&&(r[i]._gsap||(r[i]._gsap=new Gd(r[i],t)))||r.splice(i,1);return r},ra=function(r){return r._gsap||Ec(wi(r))[0]._gsap},yd=function(r,e,t){return(t=r[e])&&ft(t)?r[e]():_c(t)&&r.getAttribute&&r.getAttribute(e)||t},Qt=function(r,e){return(r=r.split(",")).forEach(e)||r},vt=function(r){return Math.round(r*1e5)/1e5||0},ht=function(r){return Math.round(r*1e7)/1e7||0},Ga=function(r,e){var t=e.charAt(0),i=parseFloat(e.substr(2));return r=parseFloat(r),t==="+"?r+i:t==="-"?r-i:t==="*"?r*i:r/i},Wf=function(r,e){for(var t=e.length,i=0;r.indexOf(e[i])<0&&++i<t;);return i<t},Bn=function(){var r=wr.length,e=wr.slice(0),t,i;for(fl={},wr.length=0,t=0;t<r;t++)i=e[t],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},bc=function(r){return!!(r._initted||r._startAt||r.add)},Md=function(r,e,t,i){wr.length&&!Ot&&Bn(),r.render(e,t,!!(Ot&&e<0&&bc(r))),wr.length&&!Ot&&Bn()},Sd=function(r){var e=parseFloat(r);return(e||e===0)&&(r+"").match(kf).length<2?e:Dt(r)?r.trim():r},Ed=function(r){return r},_i=function(r,e){for(var t in e)t in r||(r[t]=e[t]);return r},Xf=function(r){return function(e,t){for(var i in t)i in e||i==="duration"&&r||i==="ease"||(e[i]=t[i])}},Ka=function(r,e){for(var t in e)r[t]=e[t];return r},zh=function r(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=Hi(t[i])?r(e[i]||(e[i]={}),t[i]):t[i]);return e},kn=function(r,e){var t={},i;for(i in r)i in e||(t[i]=r[i]);return t},bs=function(r){var e=r.parent||ut,t=r.keyframes?Xf(kt(r.keyframes)):_i;if($t(r.inherit))for(;e;)t(r,e.vars.defaults),e=e.parent||e._dp;return r},jf=function(r,e){for(var t=r.length,i=t===e.length;i&&t--&&r[t]===e[t];);return t<0},bd=function(r,e,t,i,a){var s=r[i],n;if(a)for(n=e[a];s&&s[a]>n;)s=s._prev;return s?(e._next=s._next,s._next=e):(e._next=r[t],r[t]=e),e._next?e._next._prev=e:r[i]=e,e._prev=s,e.parent=e._dp=r,e},Zn=function(r,e,t,i){t===void 0&&(t="_first"),i===void 0&&(i="_last");var a=e._prev,s=e._next;a?a._next=s:r[t]===e&&(r[t]=s),s?s._prev=a:r[i]===e&&(r[i]=a),e._next=e._prev=e.parent=null},Pr=function(r,e){r.parent&&(!e||r.parent.autoRemoveChildren)&&r.parent.remove&&r.parent.remove(r),r._act=0},aa=function(r,e){if(r&&(!e||e._end>r._dur||e._start<0))for(var t=r;t;)t._dirty=1,t=t.parent;return r},Yf=function(r){for(var e=r.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return r},ml=function(r,e,t,i){return r._startAt&&(Ot?r._startAt.revert(bn):r.vars.immediateRender&&!r.vars.autoRevert||r._startAt.render(e,!0,i))},qf=function r(e){return!e||e._ts&&r(e.parent)},Bh=function(r){return r._repeat?Za(r._tTime,r=r.duration()+r._rDelay)*r:0},Za=function(r,e){var t=Math.floor(r=ht(r/e));return r&&t===r?t-1:t},Gn=function(r,e){return(r-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Jn=function(r){return r._end=ht(r._start+(r._tDur/Math.abs(r._ts||r._rts||et)||0))},$n=function(r,e){var t=r._dp;return t&&t.smoothChildTiming&&r._ts&&(r._start=ht(t._time-(r._ts>0?e/r._ts:((r._dirty?r.totalDuration():r._tDur)-e)/-r._ts)),Jn(r),t._dirty||aa(t,r)),r},wd=function(r,e){var t;if((e._time||!e._dur&&e._initted||e._start<r._time&&(e._dur||!e.add))&&(t=Gn(r.rawTime(),e),(!e._dur||Gs(0,e.totalDuration(),t)-e._tTime>et)&&e.render(t,!0)),aa(r,e)._dp&&r._initted&&r._time>=r._dur&&r._ts){if(r._dur<r.duration())for(t=r;t._dp;)t.rawTime()>=0&&t.totalTime(t._tTime),t=t._dp;r._zTime=-et}},ki=function(r,e,t,i){return e.parent&&Pr(e),e._start=ht((cr(t)?t:t||r!==ut?Mi(r,t,e):r._time)+e._delay),e._end=ht(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),bd(r,e,"_first","_last",r._sort?"_start":0),gl(e)||(r._recent=e),i||wd(r,e),r._ts<0&&$n(r,r._tTime),r},Td=function(r,e){return(gi.ScrollTrigger||yc("scrollTrigger",e))&&gi.ScrollTrigger.create(e,r)},Ad=function(r,e,t,i,a){if(Tc(r,e,a),!r._initted)return 1;if(!t&&r._pt&&!Ot&&(r._dur&&r.vars.lazy!==!1||!r._dur&&r.vars.lazy)&&xd!==di.frame)return wr.push(r),r._lazy=[a,i],1},Kf=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},gl=function(r){var e=r.data;return e==="isFromStart"||e==="isStart"},Zf=function(r,e,t,i){var a=r.ratio,s=e<0||!e&&(!r._start&&Kf(r)&&!(!r._initted&&gl(r))||(r._ts<0||r._dp._ts<0)&&!gl(r))?0:1,n=r._rDelay,o=0,l,c,h;if(n&&r._repeat&&(o=Gs(0,r._tDur,e),c=Za(o,n),r._yoyo&&c&1&&(s=1-s),c!==Za(r._tTime,n)&&(a=1-s,r.vars.repeatRefresh&&r._initted&&r.invalidate())),s!==a||Ot||i||r._zTime===et||!e&&r._zTime){if(!r._initted&&Ad(r,e,i,t,o))return;for(h=r._zTime,r._zTime=e||(t?et:0),t||(t=e&&!h),r.ratio=s,r._from&&(s=1-s),r._time=0,r._tTime=o,l=r._pt;l;)l.r(s,l.d),l=l._next;e<0&&ml(r,e,t,!0),r._onUpdate&&!t&&pi(r,"onUpdate"),o&&r._repeat&&!t&&r.parent&&pi(r,"onRepeat"),(e>=r._tDur||e<0)&&r.ratio===s&&(s&&Pr(r,1),!t&&!Ot&&(pi(r,s?"onComplete":"onReverseComplete",!0),r._prom&&r._prom()))}else r._zTime||(r._zTime=e)},Jf=function(r,e,t){var i;if(t>e)for(i=r._first;i&&i._start<=t;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=r._last;i&&i._start>=t;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},Ja=function(r,e,t,i){var a=r._repeat,s=ht(e)||0,n=r._tTime/r._tDur;return n&&!i&&(r._time*=s/r._dur),r._dur=s,r._tDur=a?a<0?1e10:ht(s*(a+1)+r._rDelay*a):s,n>0&&!i&&$n(r,r._tTime=r._tDur*n),r.parent&&Jn(r),t||aa(r.parent,r),r},kh=function(r){return r instanceof Jt?aa(r):Ja(r,r._dur)},$f={_start:0,endTime:Ls,totalDuration:Ls},Mi=function r(e,t,i){var a=e.labels,s=e._recent||$f,n=e.duration()>=bi?s.endTime(!1):e._dur,o,l,c;return Dt(t)&&(isNaN(t)||t in a)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?s:i).totalDuration()/100:1)):o<0?(t in a||(a[t]=n),a[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&i&&(l=l/100*(kt(i)?i[0]:i).totalDuration()),o>1?r(e,t.substr(0,o-1),i)+l:n+l)):t==null?n:+t},ws=function(r,e,t){var i=cr(e[1]),a=(i?2:1)+(r<2?0:1),s=e[a],n,o;if(i&&(s.duration=e[1]),s.parent=t,r){for(n=s,o=t;o&&!("immediateRender"in n);)n=o.vars.defaults||{},o=$t(o.vars.inherit)&&o.parent;s.immediateRender=$t(n.immediateRender),r<2?s.runBackwards=1:s.startAt=e[a-1]}return new Mt(e[0],s,e[a+1])},Or=function(r,e){return r||r===0?e(r):e},Gs=function(r,e,t){return t<r?r:t>e?e:t},Bt=function(r,e){return!Dt(r)||!(e=Gf.exec(r))?"":e[1]},Qf=function(r,e,t){return Or(t,function(i){return Gs(r,e,i)})},_l=[].slice,Rd=function(r,e){return r&&Hi(r)&&"length"in r&&(!e&&!r.length||r.length-1 in r&&Hi(r[0]))&&!r.nodeType&&r!==zi},em=function(r,e,t){return t===void 0&&(t=[]),r.forEach(function(i){var a;return Dt(i)&&!e||Rd(i,1)?(a=t).push.apply(a,wi(i)):t.push(i)})||t},wi=function(r,e,t){return lt&&!e&&lt.selector?lt.selector(r):Dt(r)&&!t&&(pl||!$a())?_l.call((e||xc).querySelectorAll(r),0):kt(r)?em(r,t):Rd(r)?_l.call(r,0):r?[r]:[]},vl=function(r){return r=wi(r)[0]||Ps("Invalid scope")||{},function(e){var t=r.current||r.nativeElement||r;return wi(e,t.querySelectorAll?t:t===r?Ps("Invalid scope")||xc.createElement("div"):r)}},Cd=function(r){return r.sort(function(){return .5-Math.random()})},Pd=function(r){if(ft(r))return r;var e=Hi(r)?r:{each:r},t=sa(e.ease),i=e.from||0,a=parseFloat(e.base)||0,s={},n=i>0&&i<1,o=isNaN(i)||n,l=e.axis,c=i,h=i;return Dt(i)?c=h={center:.5,edges:.5,end:1}[i]||0:!n&&o&&(c=i[0],h=i[1]),function(u,d,p){var g=(p||e).length,_=s[g],f,m,S,x,M,C,T,w,R;if(!_){if(R=e.grid==="auto"?0:(e.grid||[1,bi])[1],!R){for(T=-bi;T<(T=p[R++].getBoundingClientRect().left)&&R<g;);R<g&&R--}for(_=s[g]=[],f=o?Math.min(R,g)*c-.5:i%R,m=R===bi?0:o?g*h/R-.5:i/R|0,T=0,w=bi,C=0;C<g;C++)S=C%R-f,x=m-(C/R|0),_[C]=M=l?Math.abs(l==="y"?x:S):dd(S*S+x*x),M>T&&(T=M),M<w&&(w=M);i==="random"&&Cd(_),_.max=T-w,_.min=w,_.v=g=(parseFloat(e.amount)||parseFloat(e.each)*(R>g?g-1:l?l==="y"?g/R:R:Math.max(R,g/R))||0)*(i==="edges"?-1:1),_.b=g<0?a-g:a,_.u=Bt(e.amount||e.each)||0,t=t&&g<0?pm(t):t}return g=(_[u]-_.min)/_.max||0,ht(_.b+(t?t(g):g)*_.v)+_.u}},xl=function(r){var e=Math.pow(10,((r+"").split(".")[1]||"").length);return function(t){var i=ht(Math.round(parseFloat(t)/r)*r*e);return(i-i%1)/e+(cr(t)?0:Bt(t))}},Ld=function(r,e){var t=kt(r),i,a;return!t&&Hi(r)&&(i=t=r.radius||bi,r.values?(r=wi(r.values),(a=!cr(r[0]))&&(i*=i)):r=xl(r.increment)),Or(e,t?ft(r)?function(s){return a=r(s),Math.abs(a-s)<=i?a:s}:function(s){for(var n=parseFloat(a?s.x:s),o=parseFloat(a?s.y:0),l=bi,c=0,h=r.length,u,d;h--;)a?(u=r[h].x-n,d=r[h].y-o,u=u*u+d*d):u=Math.abs(r[h]-n),u<l&&(l=u,c=h);return c=!i||l<=i?r[c]:s,a||c===s||cr(s)?c:c+Bt(s)}:xl(r))},Dd=function(r,e,t,i){return Or(kt(r)?!e:t===!0?!!(t=0):!i,function(){return kt(r)?r[~~(Math.random()*r.length)]:(t=t||1e-5)&&(i=t<1?Math.pow(10,(t+"").length-2):1)&&Math.floor(Math.round((r-t/2+Math.random()*(e-r+t*.99))/t)*t*i)/i})},tm=function(){for(var r=arguments.length,e=new Array(r),t=0;t<r;t++)e[t]=arguments[t];return function(i){return e.reduce(function(a,s){return s(a)},i)}},im=function(r,e){return function(t){return r(parseFloat(t))+(e||Bt(t))}},rm=function(r,e,t){return Ud(r,e,0,1,t)},Id=function(r,e,t){return Or(t,function(i){return r[~~e(i)]})},am=function r(e,t,i){var a=t-e;return kt(e)?Id(e,r(0,e.length),t):Or(i,function(s){return(a+(s-e)%a)%a+e})},sm=function r(e,t,i){var a=t-e,s=a*2;return kt(e)?Id(e,r(0,e.length-1),t):Or(i,function(n){return n=(s+(n-e)%s)%s||0,e+(n>a?s-n:n)})},Ds=function(r){return r.replace(zf,function(e){var t=e.indexOf("[")+1,i=e.substring(t||7,t?e.indexOf("]"):e.length-1).split(Bf);return Dd(t?i:+i[0],t?0:+i[1],+i[2]||1e-5)})},Ud=function(r,e,t,i,a){var s=e-r,n=i-t;return Or(a,function(o){return t+((o-r)/s*n||0)})},nm=function r(e,t,i,a){var s=isNaN(e+t)?0:function(p){return(1-p)*e+p*t};if(!s){var n=Dt(e),o={},l,c,h,u,d;if(i===!0&&(a=1)&&(i=null),n)e={p:e},t={p:t};else if(kt(e)&&!kt(t)){for(h=[],u=e.length,d=u-2,c=1;c<u;c++)h.push(r(e[c-1],e[c]));u--,s=function(p){p*=u;var g=Math.min(d,~~p);return h[g](p-g)},i=t}else a||(e=Ka(kt(e)?[]:{},e));if(!h){for(l in t)wc.call(o,e,l,"get",t[l]);s=function(p){return Cc(p,o)||(n?e.p:e)}}}return Or(i,s)},Gh=function(r,e,t){var i=r.labels,a=bi,s,n,o;for(s in i)n=i[s]-e,n<0==!!t&&n&&a>(n=Math.abs(n))&&(o=s,a=n);return o},pi=function(r,e,t){var i=r.vars,a=i[e],s=lt,n=r._ctx,o,l,c;if(a)return o=i[e+"Params"],l=i.callbackScope||r,t&&wr.length&&Bn(),n&&(lt=n),c=o?a.apply(l,o):a.call(l),lt=s,c},Ms=function(r){return Pr(r),r.scrollTrigger&&r.scrollTrigger.kill(!!Ot),r.progress()<1&&pi(r,"onInterrupt"),r},za,Od=[],Nd=function(r){if(r)if(r=!r.name&&r.default||r,vc()||r.headless){var e=r.name,t=ft(r),i=e&&!t&&r.init?function(){this._props=[]}:r,a={init:Ls,render:Cc,add:wc,kill:Em,modifier:Sm,rawVars:0},s={targetTest:0,get:0,getSetter:Rc,aliases:{},register:0};if($a(),r!==i){if(hi[e])return;_i(i,_i(kn(r,a),s)),Ka(i.prototype,Ka(a,kn(r,s))),hi[i.prop=e]=i,r.targetTest&&(wn.push(i),Mc[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}vd(e,i),r.register&&r.register(ri,i,ei)}else Od.push(r)},Qe=255,Ss={aqua:[0,Qe,Qe],lime:[0,Qe,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Qe],navy:[0,0,128],white:[Qe,Qe,Qe],olive:[128,128,0],yellow:[Qe,Qe,0],orange:[Qe,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Qe,0,0],pink:[Qe,192,203],cyan:[0,Qe,Qe],transparent:[Qe,Qe,Qe,0]},Eo=function(r,e,t){return r+=r<0?1:r>1?-1:0,(r*6<1?e+(t-e)*r*6:r<.5?t:r*3<2?e+(t-e)*(2/3-r)*6:e)*Qe+.5|0},Fd=function(r,e,t){var i=r?cr(r)?[r>>16,r>>8&Qe,r&Qe]:0:Ss.black,a,s,n,o,l,c,h,u,d,p;if(!i){if(r.substr(-1)===","&&(r=r.substr(0,r.length-1)),Ss[r])i=Ss[r];else if(r.charAt(0)==="#"){if(r.length<6&&(a=r.charAt(1),s=r.charAt(2),n=r.charAt(3),r="#"+a+a+s+s+n+n+(r.length===5?r.charAt(4)+r.charAt(4):"")),r.length===9)return i=parseInt(r.substr(1,6),16),[i>>16,i>>8&Qe,i&Qe,parseInt(r.substr(7),16)/255];r=parseInt(r.substr(1),16),i=[r>>16,r>>8&Qe,r&Qe]}else if(r.substr(0,3)==="hsl"){if(i=p=r.match(Nh),!e)o=+i[0]%360/360,l=+i[1]/100,c=+i[2]/100,s=c<=.5?c*(l+1):c+l-c*l,a=c*2-s,i.length>3&&(i[3]*=1),i[0]=Eo(o+1/3,a,s),i[1]=Eo(o,a,s),i[2]=Eo(o-1/3,a,s);else if(~r.indexOf("="))return i=r.match(fd),t&&i.length<4&&(i[3]=1),i}else i=r.match(Nh)||Ss.transparent;i=i.map(Number)}return e&&!p&&(a=i[0]/Qe,s=i[1]/Qe,n=i[2]/Qe,h=Math.max(a,s,n),u=Math.min(a,s,n),c=(h+u)/2,h===u?o=l=0:(d=h-u,l=c>.5?d/(2-h-u):d/(h+u),o=h===a?(s-n)/d+(s<n?6:0):h===s?(n-a)/d+2:(a-s)/d+4,o*=60),i[0]=~~(o+.5),i[1]=~~(l*100+.5),i[2]=~~(c*100+.5)),t&&i.length<4&&(i[3]=1),i},zd=function(r){var e=[],t=[],i=-1;return r.split(Tr).forEach(function(a){var s=a.match(Fa)||[];e.push.apply(e,s),t.push(i+=s.length+1)}),e.c=t,e},Vh=function(r,e,t){var i="",a=(r+i).match(Tr),s=e?"hsla(":"rgba(",n=0,o,l,c,h;if(!a)return r;if(a=a.map(function(u){return(u=Fd(u,e,1))&&s+(e?u[0]+","+u[1]+"%,"+u[2]+"%,"+u[3]:u.join(","))+")"}),t&&(c=zd(r),o=t.c,o.join(i)!==c.c.join(i)))for(l=r.replace(Tr,"1").split(Fa),h=l.length-1;n<h;n++)i+=l[n]+(~o.indexOf(n)?a.shift()||s+"0,0,0,0)":(c.length?c:a.length?a:t).shift());if(!l)for(l=r.split(Tr),h=l.length-1;n<h;n++)i+=l[n]+a[n];return i+l[h]},Tr=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Ss)r+="|"+e+"\\b";return new RegExp(r+")","gi")}(),om=/hsl[a]?\(/,Bd=function(r){var e=r.join(" "),t;if(Tr.lastIndex=0,Tr.test(e))return t=om.test(e),r[1]=Vh(r[1],t),r[0]=Vh(r[0],t,zd(r[1])),!0},Is,di=function(){var r=Date.now,e=500,t=33,i=r(),a=i,s=1e3/240,n=s,o=[],l,c,h,u,d,p,g=function _(f){var m=r()-a,S=f===!0,x,M,C,T;if((m>e||m<0)&&(i+=m-t),a+=m,C=a-i,x=C-n,(x>0||S)&&(T=++u.frame,d=C-u.time*1e3,u.time=C=C/1e3,n+=x+(x>=s?4:s-x),M=1),S||(l=c(_)),M)for(p=0;p<o.length;p++)o[p](C,d,T,f)};return u={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(_){return d/(1e3/(_||60))},wake:function(){gd&&(!pl&&vc()&&(zi=pl=window,xc=zi.document||{},gi.gsap=ri,(zi.gsapVersions||(zi.gsapVersions=[])).push(ri.version),_d(zn||zi.GreenSockGlobals||!zi.gsap&&zi||{}),Od.forEach(Nd)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&u.sleep(),c=h||function(_){return setTimeout(_,n-u.time*1e3+1|0)},Is=1,g(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),Is=0,c=Ls},lagSmoothing:function(_,f){e=_||1/0,t=Math.min(f||33,e)},fps:function(_){s=1e3/(_||240),n=u.time*1e3+s},add:function(_,f,m){var S=f?function(x,M,C,T){_(x,M,C,T),u.remove(S)}:_;return u.remove(_),o[m?"unshift":"push"](S),$a(),S},remove:function(_,f){~(f=o.indexOf(_))&&o.splice(f,1)&&p>=f&&p--},_listeners:o},u}(),$a=function(){return!Is&&di.wake()},ze={},lm=/^[\d.\-M][\d.\-,\s]/,cm=/["']/g,hm=function(r){for(var e={},t=r.substr(1,r.length-3).split(":"),i=t[0],a=1,s=t.length,n,o,l;a<s;a++)o=t[a],n=a!==s-1?o.lastIndexOf(","):o.length,l=o.substr(0,n),e[i]=isNaN(l)?l.replace(cm,"").trim():+l,i=o.substr(n+1).trim();return e},um=function(r){var e=r.indexOf("(")+1,t=r.indexOf(")"),i=r.indexOf("(",e);return r.substring(e,~i&&i<t?r.indexOf(")",t+1):t)},dm=function(r){var e=(r+"").split("("),t=ze[e[0]];return t&&e.length>1&&t.config?t.config.apply(null,~r.indexOf("{")?[hm(e[1])]:um(r).split(",").map(Sd)):ze._CE&&lm.test(r)?ze._CE("",r):t},pm=function(r){return function(e){return 1-r(1-e)}},sa=function(r,e){return r&&(ft(r)?r:ze[r]||dm(r))||e},ua=function(r,e,t,i){t===void 0&&(t=function(n){return 1-e(1-n)}),i===void 0&&(i=function(n){return n<.5?e(n*2)/2:1-e((1-n)*2)/2});var a={easeIn:e,easeOut:t,easeInOut:i},s;return Qt(r,function(n){ze[n]=gi[n]=a,ze[s=n.toLowerCase()]=t;for(var o in a)ze[s+(o==="easeIn"?".in":o==="easeOut"?".out":".inOut")]=ze[n+"."+o]=a[o]}),a},kd=function(r){return function(e){return e<.5?(1-r(1-e*2))/2:.5+r((e-.5)*2)/2}},bo=function r(e,t,i){var a=t>=1?t:1,s=(i||(e?.3:.45))/(t<1?t:1),n=s/dl*(Math.asin(1/a)||0),o=function(c){return c===1?1:a*Math.pow(2,-10*c)*Ff((c-n)*s)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:kd(o);return s=dl/s,l.config=function(c,h){return r(e,c,h)},l},wo=function r(e,t){t===void 0&&(t=1.70158);var i=function(s){return s?--s*s*((t+1)*s+t)+1:0},a=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:kd(i);return a.config=function(s){return r(e,s)},a};Qt("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;ua(r+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});ze.Linear.easeNone=ze.none=ze.Linear.easeIn;ua("Elastic",bo("in"),bo("out"),bo());(function(r,e){var t=1/e,i=2*t,a=2.5*t,s=function(n){return n<t?r*n*n:n<i?r*Math.pow(n-1.5/e,2)+.75:n<a?r*(n-=2.25/e)*n+.9375:r*Math.pow(n-2.625/e,2)+.984375};ua("Bounce",function(n){return 1-s(1-n)},s)})(7.5625,2.75);ua("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});ua("Circ",function(r){return-(dd(1-r*r)-1)});ua("Sine",function(r){return r===1?1:-Nf(r*Uf)+1});ua("Back",wo("in"),wo("out"),wo());ze.SteppedEase=ze.steps=gi.SteppedEase={config:function(r,e){r===void 0&&(r=1);var t=1/r,i=r+(e?0:1),a=e?1:0,s=1-et;return function(n){return((i*Gs(0,s,n)|0)+a)*t}}};Cs.ease=ze["quad.out"];Qt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Sc+=r+","+r+"Params,"});var Gd=function(r,e){this.id=Of++,r._gsap=this,this.target=r,this.harness=e,this.get=e?e.get:yd,this.set=e?e.getSetter:Rc},Us=function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Ja(this,+t.duration,1,1),this.data=t.data,lt&&(this._ctx=lt,lt.data.push(this)),Is||di.wake()}var e=r.prototype;return e.delay=function(t){return t||t===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+t-this._delay),this._delay=t,this):this._delay},e.duration=function(t){return arguments.length?this.totalDuration(this._repeat>0?t+(t+this._rDelay)*this._repeat:t):this.totalDuration()&&this._dur},e.totalDuration=function(t){return arguments.length?(this._dirty=0,Ja(this,this._repeat<0?t:(t-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(t,i){if($a(),!arguments.length)return this._tTime;var a=this._dp;if(a&&a.smoothChildTiming&&this._ts){for($n(this,t),!a._dp||a.parent||wd(a,this);a&&a.parent;)a.parent._time!==a._start+(a._ts>=0?a._tTime/a._ts:(a.totalDuration()-a._tTime)/-a._ts)&&a.totalTime(a._tTime,!0),a=a.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&t<this._tDur||this._ts<0&&t>0||!this._tDur&&!t)&&ki(this._dp,this,this._start-this._delay)}return(this._tTime!==t||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===et||!this._initted&&this._dur&&t||!t&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=t),Md(this,t,i)),this},e.time=function(t,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),t+Bh(this))%(this._dur+this._rDelay)||(t?this._dur:0),i):this._time},e.totalProgress=function(t,i){return arguments.length?this.totalTime(this.totalDuration()*t,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(t,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-t:t)+Bh(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(t,i){var a=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(t-1)*a,i):this._repeat?Za(this._tTime,a)+1:1},e.timeScale=function(t,i){if(!arguments.length)return this._rts===-et?0:this._rts;if(this._rts===t)return this;var a=this.parent&&this._ts?Gn(this.parent._time,this):this._tTime;return this._rts=+t||0,this._ts=this._ps||t===-et?0:this._rts,this.totalTime(Gs(-Math.abs(this._delay),this.totalDuration(),a),i!==!1),Jn(this),Yf(this)},e.paused=function(t){return arguments.length?(this._ps!==t&&(this._ps=t,t?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):($a(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==et&&(this._tTime-=et)))),this):this._ps},e.startTime=function(t){if(arguments.length){this._start=ht(t);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&ki(i,this,this._start-this._delay),this}return this._start},e.endTime=function(t){return this._start+($t(t)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(t){var i=this.parent||this._dp;return i?t&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Gn(i.rawTime(t),this):this._tTime:this._tTime},e.revert=function(t){t===void 0&&(t=Hf);var i=Ot;return Ot=t,bc(this)&&(this.timeline&&this.timeline.revert(t),this.totalTime(-.01,t.suppressEvents)),this.data!=="nested"&&t.kill!==!1&&this.kill(),Ot=i,this},e.globalTime=function(t){for(var i=this,a=arguments.length?t:i.rawTime();i;)a=i._start+a/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(t):a},e.repeat=function(t){return arguments.length?(this._repeat=t===1/0?-2:t,kh(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(t){if(arguments.length){var i=this._time;return this._rDelay=t,kh(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(t){return arguments.length?(this._yoyo=t,this):this._yoyo},e.seek=function(t,i){return this.totalTime(Mi(this,t),$t(i))},e.restart=function(t,i){return this.play().totalTime(t?-this._delay:0,$t(i)),this._dur||(this._zTime=-et),this},e.play=function(t,i){return t!=null&&this.seek(t,i),this.reversed(!1).paused(!1)},e.reverse=function(t,i){return t!=null&&this.seek(t||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(t,i){return t!=null&&this.seek(t,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(t){return arguments.length?(!!t!==this.reversed()&&this.timeScale(-this._rts||(t?-et:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-et,this},e.isActive=function(){var t=this.parent||this._dp,i=this._start,a;return!!(!t||this._ts&&this._initted&&t.isActive()&&(a=t.rawTime(!0))>=i&&a<this.endTime(!0)-et)},e.eventCallback=function(t,i,a){var s=this.vars;return arguments.length>1?(i?(s[t]=i,a&&(s[t+"Params"]=a),t==="onUpdate"&&(this._onUpdate=i)):delete s[t],this):s[t]},e.then=function(t){var i=this,a=i._prom;return new Promise(function(s){var n=ft(t)?t:Ed,o=function(){var l=i.then;i.then=null,a&&a(),ft(n)&&(n=n(i))&&(n.then||n===i)&&(i.then=l),s(n),i.then=l};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?o():i._prom=o})},e.kill=function(){Ms(this)},r}();_i(Us.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-et,_prom:0,_ps:!1,_rts:1});var Jt=function(r){ud(e,r);function e(i,a){var s;return i===void 0&&(i={}),s=r.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=$t(i.sortChildren),ut&&ki(i.parent||ut,rr(s),a),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&Td(rr(s),i.scrollTrigger),s}var t=e.prototype;return t.to=function(i,a,s){return ws(0,arguments,this),this},t.from=function(i,a,s){return ws(1,arguments,this),this},t.fromTo=function(i,a,s,n){return ws(2,arguments,this),this},t.set=function(i,a,s){return a.duration=0,a.parent=this,bs(a).repeatDelay||(a.repeat=0),a.immediateRender=!!a.immediateRender,new Mt(i,a,Mi(this,s),1),this},t.call=function(i,a,s){return ki(this,Mt.delayedCall(0,i,a),s)},t.staggerTo=function(i,a,s,n,o,l,c){return s.duration=a,s.stagger=s.stagger||n,s.onComplete=l,s.onCompleteParams=c,s.parent=this,new Mt(i,s,Mi(this,o)),this},t.staggerFrom=function(i,a,s,n,o,l,c){return s.runBackwards=1,bs(s).immediateRender=$t(s.immediateRender),this.staggerTo(i,a,s,n,o,l,c)},t.staggerFromTo=function(i,a,s,n,o,l,c,h){return n.startAt=s,bs(n).immediateRender=$t(n.immediateRender),this.staggerTo(i,a,n,o,l,c,h)},t.render=function(i,a,s){var n=this._time,o=this._dirty?this.totalDuration():this._tDur,l=this._dur,c=i<=0?0:ht(i),h=this._zTime<0!=i<0&&(this._initted||!l),u,d,p,g,_,f,m,S,x,M,C,T;if(this!==ut&&c>o&&i>=0&&(c=o),c!==this._tTime||s||h){if(n!==this._time&&l&&(c+=this._time-n,i+=this._time-n),u=c,x=this._start,S=this._ts,f=!S,h&&(l||(n=this._zTime),(i||!a)&&(this._zTime=i)),this._repeat){if(C=this._yoyo,_=l+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(_*100+i,a,s);if(u=ht(c%_),c===o?(g=this._repeat,u=l):(M=ht(c/_),g=~~M,g&&g===M&&(u=l,g--),u>l&&(u=l)),M=Za(this._tTime,_),!n&&this._tTime&&M!==g&&this._tTime-M*_-this._dur<=0&&(M=g),C&&g&1&&(u=l-u,T=1),g!==M&&!this._lock){var w=C&&M&1,R=w===(C&&g&1);if(g<M&&(w=!w),n=w?0:c%l?l:c,this._lock=1,this.render(n||(T?0:ht(g*_)),a,!l)._lock=0,this._tTime=c,!a&&this.parent&&pi(this,"onRepeat"),this.vars.repeatRefresh&&!T&&(this.invalidate()._lock=1,M=g),n&&n!==this._time||f!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(l=this._dur,o=this._tDur,R&&(this._lock=2,n=w?l:-1e-4,this.render(n,!0),this.vars.repeatRefresh&&!T&&this.invalidate()),this._lock=0,!this._ts&&!f)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(m=Jf(this,ht(n),ht(u)),m&&(c-=u-(u=m._start))),this._tTime=c,this._time=u,this._act=!!S,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,n=0),!n&&c&&l&&!a&&!M&&(pi(this,"onStart"),this._tTime!==c))return this;if(u>=n&&i>=0)for(d=this._first;d;){if(p=d._next,(d._act||u>=d._start)&&d._ts&&m!==d){if(d.parent!==this)return this.render(i,a,s);if(d.render(d._ts>0?(u-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(u-d._start)*d._ts,a,s),u!==this._time||!this._ts&&!f){m=0,p&&(c+=this._zTime=-et);break}}d=p}else{d=this._last;for(var V=i<0?i:u;d;){if(p=d._prev,(d._act||V<=d._end)&&d._ts&&m!==d){if(d.parent!==this)return this.render(i,a,s);if(d.render(d._ts>0?(V-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(V-d._start)*d._ts,a,s||Ot&&bc(d)),u!==this._time||!this._ts&&!f){m=0,p&&(c+=this._zTime=V?-et:et);break}}d=p}}if(m&&!a&&(this.pause(),m.render(u>=n?0:-et)._zTime=u>=n?1:-1,this._ts))return this._start=x,Jn(this),this.render(i,a,s);this._onUpdate&&!a&&pi(this,"onUpdate",!0),(c===o&&this._tTime>=this.totalDuration()||!c&&n)&&(x===this._start||Math.abs(S)!==Math.abs(this._ts))&&(this._lock||((i||!l)&&(c===o&&this._ts>0||!c&&this._ts<0)&&Pr(this,1),!a&&!(i<0&&!n)&&(c||n||!o)&&(pi(this,c===o&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(c<o&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,a){var s=this;if(cr(a)||(a=Mi(this,a,i)),!(i instanceof Us)){if(kt(i))return i.forEach(function(n){return s.add(n,a)}),this;if(Dt(i))return this.addLabel(i,a);if(ft(i))i=Mt.delayedCall(0,i);else return this}return this!==i?ki(this,i,a):this},t.getChildren=function(i,a,s,n){i===void 0&&(i=!0),a===void 0&&(a=!0),s===void 0&&(s=!0),n===void 0&&(n=-bi);for(var o=[],l=this._first;l;)l._start>=n&&(l instanceof Mt?a&&o.push(l):(s&&o.push(l),i&&o.push.apply(o,l.getChildren(!0,a,s)))),l=l._next;return o},t.getById=function(i){for(var a=this.getChildren(1,1,1),s=a.length;s--;)if(a[s].vars.id===i)return a[s]},t.remove=function(i){return Dt(i)?this.removeLabel(i):ft(i)?this.killTweensOf(i):(i.parent===this&&Zn(this,i),i===this._recent&&(this._recent=this._last),aa(this))},t.totalTime=function(i,a){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=ht(di.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,a),this._forcing=0,this):this._tTime},t.addLabel=function(i,a){return this.labels[i]=Mi(this,a),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,a,s){var n=Mt.delayedCall(0,a||Ls,s);return n.data="isPause",this._hasPause=1,ki(this,n,Mi(this,i))},t.removePause=function(i){var a=this._first;for(i=Mi(this,i);a;)a._start===i&&a.data==="isPause"&&Pr(a),a=a._next},t.killTweensOf=function(i,a,s){for(var n=this.getTweensOf(i,s),o=n.length;o--;)Sr!==n[o]&&n[o].kill(i,a);return this},t.getTweensOf=function(i,a){for(var s=[],n=wi(i),o=this._first,l=cr(a),c;o;)o instanceof Mt?Wf(o._targets,n)&&(l?(!Sr||o._initted&&o._ts)&&o.globalTime(0)<=a&&o.globalTime(o.totalDuration())>a:!a||o.isActive())&&s.push(o):(c=o.getTweensOf(n,a)).length&&s.push.apply(s,c),o=o._next;return s},t.tweenTo=function(i,a){a=a||{};var s=this,n=Mi(s,i),o=a,l=o.startAt,c=o.onStart,h=o.onStartParams,u=o.immediateRender,d,p=Mt.to(s,_i({ease:a.ease||"none",lazy:!1,immediateRender:!1,time:n,overwrite:"auto",duration:a.duration||Math.abs((n-(l&&"time"in l?l.time:s._time))/s.timeScale())||et,onStart:function(){if(s.pause(),!d){var g=a.duration||Math.abs((n-(l&&"time"in l?l.time:s._time))/s.timeScale());p._dur!==g&&Ja(p,g,0,1).render(p._time,!0,!0),d=1}c&&c.apply(p,h||[])}},a));return u?p.render(0):p},t.tweenFromTo=function(i,a,s){return this.tweenTo(a,_i({startAt:{time:Mi(this,i)}},s))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Gh(this,Mi(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Gh(this,Mi(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+et)},t.shiftChildren=function(i,a,s){s===void 0&&(s=0);var n=this._first,o=this.labels,l;for(i=ht(i);n;)n._start>=s&&(n._start+=i,n._end+=i),n=n._next;if(a)for(l in o)o[l]>=s&&(o[l]+=i);return aa(this)},t.invalidate=function(i){var a=this._first;for(this._lock=0;a;)a.invalidate(i),a=a._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var a=this._first,s;a;)s=a._next,this.remove(a),a=s;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),aa(this)},t.totalDuration=function(i){var a=0,s=this,n=s._last,o=bi,l,c,h;if(arguments.length)return s.timeScale((s._repeat<0?s.duration():s.totalDuration())/(s.reversed()?-i:i));if(s._dirty){for(h=s.parent;n;)l=n._prev,n._dirty&&n.totalDuration(),c=n._start,c>o&&s._sort&&n._ts&&!s._lock?(s._lock=1,ki(s,n,c-n._delay,1)._lock=0):o=c,c<0&&n._ts&&(a-=c,(!h&&!s._dp||h&&h.smoothChildTiming)&&(s._start+=ht(c/s._ts),s._time-=c,s._tTime-=c),s.shiftChildren(-c,!1,-1/0),o=0),n._end>a&&n._ts&&(a=n._end),n=l;Ja(s,s===ut&&s._time>a?s._time:a,1,1),s._dirty=0}return s._tDur},e.updateRoot=function(i){if(ut._ts&&(Md(ut,Gn(i,ut)),xd=di.frame),di.frame>=Fh){Fh+=mi.autoSleep||120;var a=ut._first;if((!a||!a._ts)&&mi.autoSleep&&di._listeners.length<2){for(;a&&!a._ts;)a=a._next;a||di.sleep()}}},e}(Us);_i(Jt.prototype,{_lock:0,_hasPause:0,_forcing:0});var fm=function(r,e,t,i,a,s,n){var o=new ei(this._pt,r,e,0,1,Yd,null,a),l=0,c=0,h,u,d,p,g,_,f,m;for(o.b=t,o.e=i,t+="",i+="",(f=~i.indexOf("random("))&&(i=Ds(i)),s&&(m=[t,i],s(m,r,e),t=m[0],i=m[1]),u=t.match(Mo)||[];h=Mo.exec(i);)p=h[0],g=i.substring(l,h.index),d?d=(d+1)%5:g.substr(-5)==="rgba("&&(d=1),p!==u[c++]&&(_=parseFloat(u[c-1])||0,o._pt={_next:o._pt,p:g||c===1?g:",",s:_,c:p.charAt(1)==="="?Ga(_,p)-_:parseFloat(p)-_,m:d&&d<4?Math.round:0},l=Mo.lastIndex);return o.c=l<i.length?i.substring(l,i.length):"",o.fp=n,(md.test(i)||f)&&(o.e=0),this._pt=o,o},wc=function(r,e,t,i,a,s,n,o,l,c){ft(i)&&(i=i(a||0,r,s));var h=r[e],u=t!=="get"?t:ft(h)?l?r[e.indexOf("set")||!ft(r["get"+e.substr(3)])?e:"get"+e.substr(3)](l):r[e]():h,d=ft(h)?l?xm:Xd:Ac,p;if(Dt(i)&&(~i.indexOf("random(")&&(i=Ds(i)),i.charAt(1)==="="&&(p=Ga(u,i)+(Bt(u)||0),(p||p===0)&&(i=p))),!c||u!==i||yl)return!isNaN(u*i)&&i!==""?(p=new ei(this._pt,r,e,+u||0,i-(u||0),typeof h=="boolean"?Mm:jd,0,d),l&&(p.fp=l),n&&p.modifier(n,this,r),this._pt=p):(!h&&!(e in r)&&yc(e,i),fm.call(this,r,e,u,i,d,o||mi.stringFilter,l))},mm=function(r,e,t,i,a){if(ft(r)&&(r=Ts(r,a,e,t,i)),!Hi(r)||r.style&&r.nodeType||kt(r)||pd(r))return Dt(r)?Ts(r,a,e,t,i):r;var s={},n;for(n in r)s[n]=Ts(r[n],a,e,t,i);return s},Vd=function(r,e,t,i,a,s){var n,o,l,c;if(hi[r]&&(n=new hi[r]).init(a,n.rawVars?e[r]:mm(e[r],i,a,s,t),t,i,s)!==!1&&(t._pt=o=new ei(t._pt,a,r,0,1,n.render,n,0,n.priority),t!==za))for(l=t._ptLookup[t._targets.indexOf(a)],c=n._props.length;c--;)l[n._props[c]]=o;return n},Sr,yl,Tc=function r(e,t,i){var a=e.vars,s=a.ease,n=a.startAt,o=a.immediateRender,l=a.lazy,c=a.onUpdate,h=a.runBackwards,u=a.yoyoEase,d=a.keyframes,p=a.autoRevert,g=e._dur,_=e._startAt,f=e._targets,m=e.parent,S=m&&m.data==="nested"?m.vars.targets:f,x=e._overwrite==="auto"&&!gc,M=e.timeline,C=a.easeReverse||u,T,w,R,V,v,b,O,N,B,j,z,K,H;if(M&&(!d||!s)&&(s="none"),e._ease=sa(s,Cs.ease),e._rEase=C&&(sa(C)||e._ease),e._from=!M&&!!a.runBackwards,e._from&&(e.ratio=1),!M||d&&!a.stagger){if(N=f[0]?ra(f[0]).harness:0,K=N&&a[N.prop],T=kn(a,Mc),_&&(_._zTime<0&&_.progress(1),t<0&&h&&o&&!p?_.render(-1,!0):_.revert(h&&g?bn:Vf),_._lazy=0),n){if(Pr(e._startAt=Mt.set(f,_i({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!_&&$t(l),startAt:null,delay:0,onUpdate:c&&function(){return pi(e,"onUpdate")},stagger:0},n))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Ot||!o&&!p)&&e._startAt.revert(bn),o&&g&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(h&&g&&!_){if(t&&(o=!1),R=_i({overwrite:!1,data:"isFromStart",lazy:o&&!_&&$t(l),immediateRender:o,stagger:0,parent:m},T),K&&(R[N.prop]=K),Pr(e._startAt=Mt.set(f,R)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Ot?e._startAt.revert(bn):e._startAt.render(-1,!0)),e._zTime=t,!o)r(e._startAt,et,et);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&$t(l)||l&&!g,w=0;w<f.length;w++){if(v=f[w],O=v._gsap||Ec(f)[w]._gsap,e._ptLookup[w]=j={},fl[O.id]&&wr.length&&Bn(),z=S===f?w:S.indexOf(v),N&&(B=new N).init(v,K||T,e,z,S)!==!1&&(e._pt=V=new ei(e._pt,v,B.name,0,1,B.render,B,0,B.priority),B._props.forEach(function(te){j[te]=V}),B.priority&&(b=1)),!N||K)for(R in T)hi[R]&&(B=Vd(R,T,e,z,v,S))?B.priority&&(b=1):j[R]=V=wc.call(e,v,R,"get",T[R],z,S,0,a.stringFilter);e._op&&e._op[w]&&e.kill(v,e._op[w]),x&&e._pt&&(Sr=e,ut.killTweensOf(v,j,e.globalTime(t)),H=!e.parent,Sr=0),e._pt&&l&&(fl[O.id]=1)}b&&qd(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!H,d&&t<=0&&M.render(bi,!0,!0)},gm=function(r,e,t,i,a,s,n,o){var l=(r._pt&&r._ptCache||(r._ptCache={}))[e],c,h,u,d;if(!l)for(l=r._ptCache[e]=[],u=r._ptLookup,d=r._targets.length;d--;){if(c=u[d][e],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==e&&c.fp!==e;)c=c._next;if(!c)return yl=1,r.vars[e]="+=0",Tc(r,n),yl=0,o?Ps(e+" not eligible for reset. Try splitting into individual properties"):1;l.push(c)}for(d=l.length;d--;)h=l[d],c=h._pt||h,c.s=(i||i===0)&&!a?i:c.s+(i||0)+s*c.c,c.c=t-c.s,h.e&&(h.e=vt(t)+Bt(h.e)),h.b&&(h.b=c.s+Bt(h.b))},_m=function(r,e){var t=r[0]?ra(r[0]).harness:0,i=t&&t.aliases,a,s,n,o;if(!i)return e;a=Ka({},e);for(s in i)if(s in a)for(o=i[s].split(","),n=o.length;n--;)a[o[n]]=a[s];return a},vm=function(r,e,t,i){var a=e.ease||i||"power1.inOut",s,n;if(kt(e))n=t[r]||(t[r]=[]),e.forEach(function(o,l){return n.push({t:l/(e.length-1)*100,v:o,e:a})});else for(s in e)n=t[s]||(t[s]=[]),s==="ease"||n.push({t:parseFloat(r),v:e[s],e:a})},Ts=function(r,e,t,i,a){return ft(r)?r.call(e,t,i,a):Dt(r)&&~r.indexOf("random(")?Ds(r):r},Hd=Sc+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Wd={};Qt(Hd+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Wd[r]=1});var Mt=function(r){ud(e,r);function e(i,a,s,n){var o;typeof a=="number"&&(s.duration=a,a=s,s=null),o=r.call(this,n?a:bs(a))||this;var l=o.vars,c=l.duration,h=l.delay,u=l.immediateRender,d=l.stagger,p=l.overwrite,g=l.keyframes,_=l.defaults,f=l.scrollTrigger,m=a.parent||ut,S=(kt(i)||pd(i)?cr(i[0]):"length"in a)?[i]:wi(i),x,M,C,T,w,R,V,v;if(o._targets=S.length?Ec(S):Ps("GSAP target "+i+" not found. https://gsap.com",!mi.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=p,g||d||qs(c)||qs(h)){a=o.vars;var b=a.easeReverse||a.yoyoEase;if(x=o.timeline=new Jt({data:"nested",defaults:_||{},targets:m&&m.data==="nested"?m.vars.targets:S}),x.kill(),x.parent=x._dp=rr(o),x._start=0,d||qs(c)||qs(h)){if(T=S.length,V=d&&Pd(d),Hi(d))for(w in d)~Hd.indexOf(w)&&(v||(v={}),v[w]=d[w]);for(M=0;M<T;M++)C=kn(a,Wd),C.stagger=0,b&&(C.easeReverse=b),v&&Ka(C,v),R=S[M],C.duration=+Ts(c,rr(o),M,R,S),C.delay=(+Ts(h,rr(o),M,R,S)||0)-o._delay,!d&&T===1&&C.delay&&(o._delay=h=C.delay,o._start+=h,C.delay=0),x.to(R,C,V?V(M,R,S):0),x._ease=ze.none;x.duration()?c=h=0:o.timeline=0}else if(g){bs(_i(x.vars.defaults,{ease:"none"})),x._ease=sa(g.ease||a.ease||"none");var O=0,N,B,j;if(kt(g))g.forEach(function(z){return x.to(S,z,">")}),x.duration();else{C={};for(w in g)w==="ease"||w==="easeEach"||vm(w,g[w],C,g.easeEach);for(w in C)for(N=C[w].sort(function(z,K){return z.t-K.t}),O=0,M=0;M<N.length;M++)B=N[M],j={ease:B.e,duration:(B.t-(M?N[M-1].t:0))/100*c},j[w]=B.v,x.to(S,j,O),O+=j.duration;x.duration()<c&&x.to({},{duration:c-x.duration()})}}c||o.duration(c=x.duration())}else o.timeline=0;return p===!0&&!gc&&(Sr=rr(o),ut.killTweensOf(S),Sr=0),ki(m,rr(o),s),a.reversed&&o.reverse(),a.paused&&o.paused(!0),(u||!c&&!g&&o._start===ht(m._time)&&$t(u)&&qf(rr(o))&&m.data!=="nested")&&(o._tTime=-et,o.render(Math.max(0,-h)||0)),f&&Td(rr(o),f),o}var t=e.prototype;return t.render=function(i,a,s){var n=this._time,o=this._tDur,l=this._dur,c=i<0,h=i>o-et&&!c?o:i<et?0:i,u,d,p,g,_,f,m,S;if(!l)Zf(this,i,a,s);else if(h!==this._tTime||!i||s||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==c||this._lazy){if(u=h,S=this.timeline,this._repeat){if(g=l+this._rDelay,this._repeat<-1&&c)return this.totalTime(g*100+i,a,s);if(u=ht(h%g),h===o?(p=this._repeat,u=l):(_=ht(h/g),p=~~_,p&&p===_?(u=l,p--):u>l&&(u=l)),f=this._yoyo&&p&1,f&&(u=l-u),_=Za(this._tTime,g),u===n&&!s&&this._initted&&p===_)return this._tTime=h,this;p!==_&&this.vars.repeatRefresh&&!f&&!this._lock&&u!==g&&this._initted&&(this._lock=s=1,this.render(ht(g*p),!0).invalidate()._lock=0)}if(!this._initted){if(Ad(this,c?i:u,s,a,h))return this._tTime=0,this;if(n!==this._time&&!(s&&this.vars.repeatRefresh&&p!==_))return this;if(l!==this._dur)return this.render(i,a,s)}if(this._rEase){var x=u<n;if(x!==this._inv){var M=x?n:l-n;this._inv=x,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=n,this._invRecip=M?(x?-1:1)/M:0,this._invScale=x?-this.ratio:1-this.ratio,this._invEase=x?this._rEase:this._ease}this.ratio=m=this._invRatio+this._invScale*this._invEase((u-this._invTime)*this._invRecip)}else this.ratio=m=this._ease(u/l);if(this._from&&(this.ratio=m=1-m),this._tTime=h,this._time=u,!this._act&&this._ts&&(this._act=1,this._lazy=0),!n&&h&&!a&&!_&&(pi(this,"onStart"),this._tTime!==h))return this;for(d=this._pt;d;)d.r(m,d.d),d=d._next;S&&S.render(i<0?i:S._dur*S._ease(u/this._dur),a,s)||this._startAt&&(this._zTime=i),this._onUpdate&&!a&&(c&&ml(this,i,a,s),pi(this,"onUpdate")),this._repeat&&p!==_&&this.vars.onRepeat&&!a&&this.parent&&pi(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(c&&!this._onUpdate&&ml(this,i,!0,!0),(i||!l)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Pr(this,1),!a&&!(c&&!n)&&(h||n||f)&&(pi(this,h===o?"onComplete":"onReverseComplete",!0),this._prom&&!(h<o&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,a,s,n,o){Is||di.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||Tc(this,l),c=this._ease(l/this._dur),gm(this,i,a,s,n,c,l,o)?this.resetTo(i,a,s,n,1):($n(this,0),this.parent||bd(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,a){if(a===void 0&&(a="all"),!i&&(!a||a==="all"))return this._lazy=this._pt=0,this.parent?Ms(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Ot),this;if(this.timeline){var s=this.timeline.totalDuration();return this.timeline.killTweensOf(i,a,Sr&&Sr.vars.overwrite!==!0)._first||Ms(this),this.parent&&s!==this.timeline.totalDuration()&&Ja(this,this._dur*this.timeline._tDur/s,0,1),this}var n=this._targets,o=i?wi(i):n,l=this._ptLookup,c=this._pt,h,u,d,p,g,_,f;if((!a||a==="all")&&jf(n,o))return a==="all"&&(this._pt=0),Ms(this);for(h=this._op=this._op||[],a!=="all"&&(Dt(a)&&(g={},Qt(a,function(m){return g[m]=1}),a=g),a=_m(n,a)),f=n.length;f--;)if(~o.indexOf(n[f])){u=l[f],a==="all"?(h[f]=a,p=u,d={}):(d=h[f]=h[f]||{},p=a);for(g in p)_=u&&u[g],_&&((!("kill"in _.d)||_.d.kill(g)===!0)&&Zn(this,_,"_pt"),delete u[g]),d!=="all"&&(d[g]=1)}return this._initted&&!this._pt&&c&&Ms(this),this},e.to=function(i,a){return new e(i,a,arguments[2])},e.from=function(i,a){return ws(1,arguments)},e.delayedCall=function(i,a,s,n){return new e(a,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:a,onReverseComplete:a,onCompleteParams:s,onReverseCompleteParams:s,callbackScope:n})},e.fromTo=function(i,a,s){return ws(2,arguments)},e.set=function(i,a){return a.duration=0,a.repeatDelay||(a.repeat=0),new e(i,a)},e.killTweensOf=function(i,a,s){return ut.killTweensOf(i,a,s)},e}(Us);_i(Mt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Qt("staggerTo,staggerFrom,staggerFromTo",function(r){Mt[r]=function(){var e=new Jt,t=_l.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var Ac=function(r,e,t){return r[e]=t},Xd=function(r,e,t){return r[e](t)},xm=function(r,e,t,i){return r[e](i.fp,t)},ym=function(r,e,t){return r.setAttribute(e,t)},Rc=function(r,e){return ft(r[e])?Xd:_c(r[e])&&r.setAttribute?ym:Ac},jd=function(r,e){return e.set(e.t,e.p,Math.round((e.s+e.c*r)*1e6)/1e6,e)},Mm=function(r,e){return e.set(e.t,e.p,!!(e.s+e.c*r),e)},Yd=function(r,e){var t=e._pt,i="";if(!r&&e.b)i=e.b;else if(r===1&&e.e)i=e.e;else{for(;t;)i=t.p+(t.m?t.m(t.s+t.c*r):Math.round((t.s+t.c*r)*1e4)/1e4)+i,t=t._next;i+=e.c}e.set(e.t,e.p,i,e)},Cc=function(r,e){for(var t=e._pt;t;)t.r(r,t.d),t=t._next},Sm=function(r,e,t,i){for(var a=this._pt,s;a;)s=a._next,a.p===i&&a.modifier(r,e,t),a=s},Em=function(r){for(var e=this._pt,t,i;e;)i=e._next,e.p===r&&!e.op||e.op===r?Zn(this,e,"_pt"):e.dep||(t=1),e=i;return!t},bm=function(r,e,t,i){i.mSet(r,e,i.m.call(i.tween,t,i.mt),i)},qd=function(r){for(var e=r._pt,t,i,a,s;e;){for(t=e._next,i=a;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:s)?e._prev._next=e:a=e,(e._next=i)?i._prev=e:s=e,e=t}r._pt=a},ei=function(){function r(t,i,a,s,n,o,l,c,h){this.t=i,this.s=s,this.c=n,this.p=a,this.r=o||jd,this.d=l||this,this.set=c||Ac,this.pr=h||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(t,i,a){this.mSet=this.mSet||this.set,this.set=bm,this.m=t,this.mt=a,this.tween=i},r}();Qt(Sc+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return Mc[r]=1});gi.TweenMax=gi.TweenLite=Mt;gi.TimelineLite=gi.TimelineMax=Jt;ut=new Jt({sortChildren:!1,defaults:Cs,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});mi.stringFilter=Bd;var na=[],Tn={},wm=[],Hh=0,Tm=0,To=function(r){return(Tn[r]||wm).map(function(e){return e()})},Ml=function(){var r=Date.now(),e=[];r-Hh>2&&(To("matchMediaInit"),na.forEach(function(t){var i=t.queries,a=t.conditions,s,n,o,l;for(n in i)s=zi.matchMedia(i[n]).matches,s&&(o=1),s!==a[n]&&(a[n]=s,l=1);l&&(t.revert(),o&&e.push(t))}),To("matchMediaRevert"),e.forEach(function(t){return t.onMatch(t,function(i){return t.add(null,i)})}),Hh=r,To("matchMedia"))},Kd=function(){function r(t,i){this.selector=i&&vl(i),this.data=[],this._r=[],this.isReverted=!1,this.id=Tm++,t&&this.add(t)}var e=r.prototype;return e.add=function(t,i,a){ft(t)&&(a=i,i=t,t=ft);var s=this,n=function(){var o=lt,l=s.selector,c;return o&&o!==s&&o.data.push(s),a&&(s.selector=vl(a)),lt=s,c=i.apply(s,arguments),ft(c)&&s._r.push(c),lt=o,s.selector=l,s.isReverted=!1,c};return s.last=n,t===ft?n(s,function(o){return s.add(null,o)}):t?s[t]=n:n},e.ignore=function(t){var i=lt;lt=null,t(this),lt=i},e.getTweens=function(){var t=[];return this.data.forEach(function(i){return i instanceof r?t.push.apply(t,i.getTweens()):i instanceof Mt&&!(i.parent&&i.parent.data==="nested")&&t.push(i)}),t},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(t,i){var a=this;if(t?function(){for(var n=a.getTweens(),o=a.data.length,l;o--;)l=a.data[o],l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(c){return n.splice(n.indexOf(c),1)}));for(n.map(function(c){return{g:c._dur||c._delay||c._sat&&!c._sat.vars.immediateRender?c.globalTime(0):-1/0,t:c}}).sort(function(c,h){return h.g-c.g||-1/0}).forEach(function(c){return c.t.revert(t)}),o=a.data.length;o--;)l=a.data[o],l instanceof Jt?l.data!=="nested"&&(l.scrollTrigger&&l.scrollTrigger.revert(),l.kill()):!(l instanceof Mt)&&l.revert&&l.revert(t);a._r.forEach(function(c){return c(t,a)}),a.isReverted=!0}():this.data.forEach(function(n){return n.kill&&n.kill()}),this.clear(),i)for(var s=na.length;s--;)na[s].id===this.id&&na.splice(s,1)},e.revert=function(t){this.kill(t||{})},r}(),Am=function(){function r(t){this.contexts=[],this.scope=t,lt&&lt.data.push(this)}var e=r.prototype;return e.add=function(t,i,a){Hi(t)||(t={matches:t});var s=new Kd(0,a||this.scope),n=s.conditions={},o,l,c;lt&&!s.selector&&(s.selector=lt.selector),this.contexts.push(s),i=s.add("onMatch",i),s.queries=t;for(l in t)l==="all"?c=1:(o=zi.matchMedia(t[l]),o&&(na.indexOf(s)<0&&na.push(s),(n[l]=o.matches)&&(c=1),o.addListener?o.addListener(Ml):o.addEventListener("change",Ml)));return c&&i(s,function(h){return s.add(null,h)}),this},e.revert=function(t){this.kill(t||{})},e.kill=function(t){this.contexts.forEach(function(i){return i.kill(t,!0)})},r}(),Vn={registerPlugin:function(){for(var r=arguments.length,e=new Array(r),t=0;t<r;t++)e[t]=arguments[t];e.forEach(function(i){return Nd(i)})},timeline:function(r){return new Jt(r)},getTweensOf:function(r,e){return ut.getTweensOf(r,e)},getProperty:function(r,e,t,i){Dt(r)&&(r=wi(r)[0]);var a=ra(r||{}).get,s=t?Ed:Sd;return t==="native"&&(t=""),r&&(e?s((hi[e]&&hi[e].get||a)(r,e,t,i)):function(n,o,l){return s((hi[n]&&hi[n].get||a)(r,n,o,l))})},quickSetter:function(r,e,t){if(r=wi(r),r.length>1){var i=r.map(function(c){return ri.quickSetter(c,e,t)}),a=i.length;return function(c){for(var h=a;h--;)i[h](c)}}r=r[0]||{};var s=hi[e],n=ra(r),o=n.harness&&(n.harness.aliases||{})[e]||e,l=s?function(c){var h=new s;za._pt=0,h.init(r,t?c+t:c,za,0,[r]),h.render(1,h),za._pt&&Cc(1,za)}:n.set(r,o);return s?l:function(c){return l(r,o,t?c+t:c,n,1)}},quickTo:function(r,e,t){var i,a=ri.to(r,_i((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),t||{})),s=function(n,o,l){return a.resetTo(e,n,o,l)};return s.tween=a,s},isTweening:function(r){return ut.getTweensOf(r,!0).length>0},defaults:function(r){return r&&r.ease&&(r.ease=sa(r.ease,Cs.ease)),zh(Cs,r||{})},config:function(r){return zh(mi,r||{})},registerEffect:function(r){var e=r.name,t=r.effect,i=r.plugins,a=r.defaults,s=r.extendTimeline;(i||"").split(",").forEach(function(n){return n&&!hi[n]&&!gi[n]&&Ps(e+" effect requires "+n+" plugin.")}),So[e]=function(n,o,l){return t(wi(n),_i(o||{},a),l)},s&&(Jt.prototype[e]=function(n,o,l){return this.add(So[e](n,Hi(o)?o:(l=o)&&{},this),l)})},registerEase:function(r,e){ze[r]=sa(e)},parseEase:function(r,e){return arguments.length?sa(r,e):ze},getById:function(r){return ut.getById(r)},exportRoot:function(r,e){r===void 0&&(r={});var t=new Jt(r),i,a;for(t.smoothChildTiming=$t(r.smoothChildTiming),ut.remove(t),t._dp=0,t._time=t._tTime=ut._time,i=ut._first;i;)a=i._next,(e||!(!i._dur&&i instanceof Mt&&i.vars.onComplete===i._targets[0]))&&ki(t,i,i._start-i._delay),i=a;return ki(ut,t,0),t},context:function(r,e){return r?new Kd(r,e):lt},matchMedia:function(r){return new Am(r)},matchMediaRefresh:function(){return na.forEach(function(r){var e=r.conditions,t,i;for(i in e)e[i]&&(e[i]=!1,t=1);t&&r.revert()})||Ml()},addEventListener:function(r,e){var t=Tn[r]||(Tn[r]=[]);~t.indexOf(e)||t.push(e)},removeEventListener:function(r,e){var t=Tn[r],i=t&&t.indexOf(e);i>=0&&t.splice(i,1)},utils:{wrap:am,wrapYoyo:sm,distribute:Pd,random:Dd,snap:Ld,normalize:rm,getUnit:Bt,clamp:Qf,splitColor:Fd,toArray:wi,selector:vl,mapRange:Ud,pipe:tm,unitize:im,interpolate:nm,shuffle:Cd},install:_d,effects:So,ticker:di,updateRoot:Jt.updateRoot,plugins:hi,globalTimeline:ut,core:{PropTween:ei,globals:vd,Tween:Mt,Timeline:Jt,Animation:Us,getCache:ra,_removeLinkedListItem:Zn,reverting:function(){return Ot},context:function(r){return r&&lt&&(lt.data.push(r),r._ctx=lt),lt},suppressOverwrites:function(r){return gc=r}}};Qt("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Vn[r]=Mt[r]});di.add(Jt.updateRoot);za=Vn.to({},{duration:0});var Rm=function(r,e){for(var t=r._pt;t&&t.p!==e&&t.op!==e&&t.fp!==e;)t=t._next;return t},Cm=function(r,e){var t=r._targets,i,a,s;for(i in e)for(a=t.length;a--;)s=r._ptLookup[a][i],s&&(s=s.d)&&(s._pt&&(s=Rm(s,i)),s&&s.modifier&&s.modifier(e[i],r,t[a],i))},Ao=function(r,e){return{name:r,headless:1,rawVars:1,init:function(t,i,a){a._onInit=function(s){var n,o;if(Dt(i)&&(n={},Qt(i,function(l){return n[l]=1}),i=n),e){n={};for(o in i)n[o]=e(i[o]);i=n}Cm(s,i)}}}},ri=Vn.registerPlugin({name:"attr",init:function(r,e,t,i,a){var s,n,o;this.tween=t;for(s in e)o=r.getAttribute(s)||"",n=this.add(r,"setAttribute",(o||0)+"",e[s],i,a,0,0,s),n.op=s,n.b=o,this._props.push(s)},render:function(r,e){for(var t=e._pt;t;)Ot?t.set(t.t,t.p,t.b,t):t.r(r,t.d),t=t._next}},{name:"endArray",headless:1,init:function(r,e){for(var t=e.length;t--;)this.add(r,t,r[t]||0,e[t],0,0,0,0,0,1)}},Ao("roundProps",xl),Ao("modifiers"),Ao("snap",Ld))||Vn;Mt.version=Jt.version=ri.version="3.15.0";gd=1;vc()&&$a();ze.Power0;ze.Power1;ze.Power2;ze.Power3;ze.Power4;ze.Linear;ze.Quad;ze.Cubic;ze.Quart;ze.Quint;ze.Strong;ze.Elastic;ze.Back;ze.SteppedEase;ze.Bounce;ze.Sine;ze.Expo;ze.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Wh,Er,Va,Pc,ea,Xh,Lc,Pm=function(){return typeof window<"u"},hr={},Zr=180/Math.PI,Ha=Math.PI/180,va=Math.atan2,jh=1e8,Dc=/([A-Z])/g,Lm=/(left|right|width|margin|padding|x)/i,Dm=/[\s,\(]\S/,Vi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Sl=function(r,e){return e.set(e.t,e.p,Math.round((e.s+e.c*r)*1e4)/1e4+e.u,e)},Im=function(r,e){return e.set(e.t,e.p,r===1?e.e:Math.round((e.s+e.c*r)*1e4)/1e4+e.u,e)},Um=function(r,e){return e.set(e.t,e.p,r?Math.round((e.s+e.c*r)*1e4)/1e4+e.u:e.b,e)},Om=function(r,e){return e.set(e.t,e.p,r===1?e.e:r?Math.round((e.s+e.c*r)*1e4)/1e4+e.u:e.b,e)},Nm=function(r,e){var t=e.s+e.c*r;e.set(e.t,e.p,~~(t+(t<0?-.5:.5))+e.u,e)},Zd=function(r,e){return e.set(e.t,e.p,r?e.e:e.b,e)},Jd=function(r,e){return e.set(e.t,e.p,r!==1?e.b:e.e,e)},Fm=function(r,e,t){return r.style[e]=t},zm=function(r,e,t){return r.style.setProperty(e,t)},Bm=function(r,e,t){return r._gsap[e]=t},km=function(r,e,t){return r._gsap.scaleX=r._gsap.scaleY=t},Gm=function(r,e,t,i,a){var s=r._gsap;s.scaleX=s.scaleY=t,s.renderTransform(a,s)},Vm=function(r,e,t,i,a){var s=r._gsap;s[e]=t,s.renderTransform(a,s)},dt="transform",ti=dt+"Origin",Hm=function r(e,t){var i=this,a=this.target,s=a.style,n=a._gsap;if(e in hr&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Vi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return i.tfm[o]=ar(a,o)}):this.tfm[e]=n.x?n[e]:ar(a,e),e===ti&&(this.tfm.zOrigin=n.zOrigin);else return Vi.transform.split(",").forEach(function(o){return r.call(i,o,t)});if(this.props.indexOf(dt)>=0)return;n.svg&&(this.svgo=a.getAttribute("data-svg-origin"),this.props.push(ti,t,"")),e=dt}(s||t)&&this.props.push(e,t,s[e])},$d=function(r){r.translate&&(r.removeProperty("translate"),r.removeProperty("scale"),r.removeProperty("rotate"))},Wm=function(){var r=this.props,e=this.target,t=e.style,i=e._gsap,a,s;for(a=0;a<r.length;a+=3)r[a+1]?r[a+1]===2?e[r[a]](r[a+2]):e[r[a]]=r[a+2]:r[a+2]?t[r[a]]=r[a+2]:t.removeProperty(r[a].substr(0,2)==="--"?r[a]:r[a].replace(Dc,"-$1").toLowerCase());if(this.tfm){for(s in this.tfm)i[s]=this.tfm[s];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),a=Lc(),(!a||!a.isStart)&&!t[dt]&&($d(t),i.zOrigin&&t[ti]&&(t[ti]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Qd=function(r,e){var t={target:r,props:[],revert:Wm,save:Hm};return r._gsap||ri.core.getCache(r),e&&r.style&&r.nodeType&&e.split(",").forEach(function(i){return t.save(i)}),t},ep,El=function(r,e){var t=Er.createElementNS?Er.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),r):Er.createElement(r);return t&&t.style?t:Er.createElement(r)},fi=function r(e,t,i){var a=getComputedStyle(e);return a[t]||a.getPropertyValue(t.replace(Dc,"-$1").toLowerCase())||a.getPropertyValue(t)||!i&&r(e,Qa(t)||t,1)||""},Yh="O,Moz,ms,Ms,Webkit".split(","),Qa=function(r,e,t){var i=e||ea,a=i.style,s=5;if(r in a&&!t)return r;for(r=r.charAt(0).toUpperCase()+r.substr(1);s--&&!(Yh[s]+r in a););return s<0?null:(s===3?"ms":s>=0?Yh[s]:"")+r},bl=function(){Pm()&&window.document&&(Wh=window,Er=Wh.document,Va=Er.documentElement,ea=El("div")||{style:{}},El("div"),dt=Qa(dt),ti=dt+"Origin",ea.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",ep=!!Qa("perspective"),Lc=ri.core.reverting,Pc=1)},qh=function(r){var e=r.ownerSVGElement,t=El("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=r.cloneNode(!0),a;i.style.display="block",t.appendChild(i),Va.appendChild(t);try{a=i.getBBox()}catch{}return t.removeChild(i),Va.removeChild(t),a},Kh=function(r,e){for(var t=e.length;t--;)if(r.hasAttribute(e[t]))return r.getAttribute(e[t])},tp=function(r){var e,t;try{e=r.getBBox()}catch{e=qh(r),t=1}return e&&(e.width||e.height)||t||(e=qh(r)),e&&!e.width&&!e.x&&!e.y?{x:+Kh(r,["x","cx","x1"])||0,y:+Kh(r,["y","cy","y1"])||0,width:0,height:0}:e},ip=function(r){return!!(r.getCTM&&(!r.parentNode||r.ownerSVGElement)&&tp(r))},Lr=function(r,e){if(e){var t=r.style,i;e in hr&&e!==ti&&(e=dt),t.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),t.removeProperty(i==="--"?e:e.replace(Dc,"-$1").toLowerCase())):t.removeAttribute(e)}},br=function(r,e,t,i,a,s){var n=new ei(r._pt,e,t,0,1,s?Jd:Zd);return r._pt=n,n.b=i,n.e=a,r._props.push(t),n},Zh={deg:1,rad:1,turn:1},Xm={grid:1,flex:1},Dr=function r(e,t,i,a){var s=parseFloat(i)||0,n=(i+"").trim().substr((s+"").length)||"px",o=ea.style,l=Lm.test(t),c=e.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),u=100,d=a==="px",p=a==="%",g,_,f,m;if(a===n||!s||Zh[a]||Zh[n])return s;if(n!=="px"&&!d&&(s=r(e,t,i,"px")),m=e.getCTM&&ip(e),(p||n==="%")&&(hr[t]||~t.indexOf("adius")))return g=m?e.getBBox()[l?"width":"height"]:e[h],vt(p?s/g*u:s/100*g);if(o[l?"width":"height"]=u+(d?n:a),_=a!=="rem"&&~t.indexOf("adius")||a==="em"&&e.appendChild&&!c?e:e.parentNode,m&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===Er||!_.appendChild)&&(_=Er.body),f=_._gsap,f&&p&&f.width&&l&&f.time===di.time&&!f.uncache)return vt(s/f.width*u);if(p&&(t==="height"||t==="width")){var S=e.style[t];e.style[t]=u+a,g=e[h],S?e.style[t]=S:Lr(e,t)}else(p||n==="%")&&!Xm[fi(_,"display")]&&(o.position=fi(e,"position")),_===e&&(o.position="static"),_.appendChild(ea),g=ea[h],_.removeChild(ea),o.position="absolute";return l&&p&&(f=ra(_),f.time=di.time,f.width=_[h]),vt(d?g*s/u:g&&s?u/g*s:0)},ar=function(r,e,t,i){var a;return Pc||bl(),e in Vi&&e!=="transform"&&(e=Vi[e],~e.indexOf(",")&&(e=e.split(",")[0])),hr[e]&&e!=="transform"?(a=Ns(r,i),a=e!=="transformOrigin"?a[e]:a.svg?a.origin:Wn(fi(r,ti))+" "+a.zOrigin+"px"):(a=r.style[e],(!a||a==="auto"||i||~(a+"").indexOf("calc("))&&(a=Hn[e]&&Hn[e](r,e,t)||fi(r,e)||yd(r,e)||(e==="opacity"?1:0))),t&&!~(a+"").trim().indexOf(" ")?Dr(r,e,a,t)+t:a},jm=function(r,e,t,i){if(!t||t==="none"){var a=Qa(e,r,1),s=a&&fi(r,a,1);s&&s!==t?(e=a,t=s):e==="borderColor"&&(t=fi(r,"borderTopColor"))}var n=new ei(this._pt,r.style,e,0,1,Yd),o=0,l=0,c,h,u,d,p,g,_,f,m,S,x,M;if(n.b=t,n.e=i,t+="",i+="",i.substring(0,6)==="var(--"&&(i=fi(r,i.substring(4,i.indexOf(")")))),i==="auto"&&(g=r.style[e],r.style[e]=i,i=fi(r,e)||i,g?r.style[e]=g:Lr(r,e)),c=[t,i],Bd(c),t=c[0],i=c[1],u=t.match(Fa)||[],M=i.match(Fa)||[],M.length){for(;h=Fa.exec(i);)_=h[0],m=i.substring(o,h.index),p?p=(p+1)%5:(m.substr(-5)==="rgba("||m.substr(-5)==="hsla(")&&(p=1),_!==(g=u[l++]||"")&&(d=parseFloat(g)||0,x=g.substr((d+"").length),_.charAt(1)==="="&&(_=Ga(d,_)+x),f=parseFloat(_),S=_.substr((f+"").length),o=Fa.lastIndex-S.length,S||(S=S||mi.units[e]||x,o===i.length&&(i+=S,n.e+=S)),x!==S&&(d=Dr(r,e,g,S)||0),n._pt={_next:n._pt,p:m||l===1?m:",",s:d,c:f-d,m:p&&p<4||e==="zIndex"?Math.round:0});n.c=o<i.length?i.substring(o,i.length):""}else n.r=e==="display"&&i==="none"?Jd:Zd;return md.test(i)&&(n.e=0),this._pt=n,n},Jh={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Ym=function(r){var e=r.split(" "),t=e[0],i=e[1]||"50%";return(t==="top"||t==="bottom"||i==="left"||i==="right")&&(r=t,t=i,i=r),e[0]=Jh[t]||t,e[1]=Jh[i]||i,e.join(" ")},qm=function(r,e){if(e.tween&&e.tween._time===e.tween._dur){var t=e.t,i=t.style,a=e.u,s=t._gsap,n,o,l;if(a==="all"||a===!0)i.cssText="",o=1;else for(a=a.split(","),l=a.length;--l>-1;)n=a[l],hr[n]&&(o=1,n=n==="transformOrigin"?ti:dt),Lr(t,n);o&&(Lr(t,dt),s&&(s.svg&&t.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Ns(t,1),s.uncache=1,$d(i)))}},Hn={clearProps:function(r,e,t,i,a){if(a.data!=="isFromStart"){var s=r._pt=new ei(r._pt,e,t,0,0,qm);return s.u=i,s.pr=-10,s.tween=a,r._props.push(t),1}}},Os=[1,0,0,1,0,0],rp={},ap=function(r){return r==="matrix(1, 0, 0, 1, 0, 0)"||r==="none"||!r},$h=function(r){var e=fi(r,dt);return ap(e)?Os:e.substr(7).match(fd).map(vt)},Ic=function(r,e){var t=r._gsap||ra(r),i=r.style,a=$h(r),s,n,o,l;return t.svg&&r.getAttribute("transform")?(o=r.transform.baseVal.consolidate().matrix,a=[o.a,o.b,o.c,o.d,o.e,o.f],a.join(",")==="1,0,0,1,0,0"?Os:a):(a===Os&&!r.offsetParent&&r!==Va&&!t.svg&&(o=i.display,i.display="block",s=r.parentNode,(!s||!r.offsetParent&&!r.getBoundingClientRect().width)&&(l=1,n=r.nextElementSibling,Va.appendChild(r)),a=$h(r),o?i.display=o:Lr(r,"display"),l&&(n?s.insertBefore(r,n):s?s.appendChild(r):Va.removeChild(r))),e&&a.length>6?[a[0],a[1],a[4],a[5],a[12],a[13]]:a)},wl=function(r,e,t,i,a,s){var n=r._gsap,o=a||Ic(r,!0),l=n.xOrigin||0,c=n.yOrigin||0,h=n.xOffset||0,u=n.yOffset||0,d=o[0],p=o[1],g=o[2],_=o[3],f=o[4],m=o[5],S=e.split(" "),x=parseFloat(S[0])||0,M=parseFloat(S[1])||0,C,T,w,R;t?o!==Os&&(T=d*_-p*g)&&(w=x*(_/T)+M*(-g/T)+(g*m-_*f)/T,R=x*(-p/T)+M*(d/T)-(d*m-p*f)/T,x=w,M=R):(C=tp(r),x=C.x+(~S[0].indexOf("%")?x/100*C.width:x),M=C.y+(~(S[1]||S[0]).indexOf("%")?M/100*C.height:M)),i||i!==!1&&n.smooth?(f=x-l,m=M-c,n.xOffset=h+(f*d+m*g)-f,n.yOffset=u+(f*p+m*_)-m):n.xOffset=n.yOffset=0,n.xOrigin=x,n.yOrigin=M,n.smooth=!!i,n.origin=e,n.originIsAbsolute=!!t,r.style[ti]="0px 0px",s&&(br(s,n,"xOrigin",l,x),br(s,n,"yOrigin",c,M),br(s,n,"xOffset",h,n.xOffset),br(s,n,"yOffset",u,n.yOffset)),r.setAttribute("data-svg-origin",x+" "+M)},Ns=function(r,e){var t=r._gsap||new Gd(r);if("x"in t&&!e&&!t.uncache)return t;var i=r.style,a=t.scaleX<0,s="px",n="deg",o=getComputedStyle(r),l=fi(r,ti)||"0",c,h,u,d,p,g,_,f,m,S,x,M,C,T,w,R,V,v,b,O,N,B,j,z,K,H,te,he,Me,Be,Fe,X;return c=h=u=g=_=f=m=S=x=0,d=p=1,t.svg=!!(r.getCTM&&ip(r)),o.translate&&((o.translate!=="none"||o.scale!=="none"||o.rotate!=="none")&&(i[dt]=(o.translate!=="none"?"translate3d("+(o.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(o.rotate!=="none"?"rotate("+o.rotate+") ":"")+(o.scale!=="none"?"scale("+o.scale.split(" ").join(",")+") ":"")+(o[dt]!=="none"?o[dt]:"")),i.scale=i.rotate=i.translate="none"),T=Ic(r,t.svg),t.svg&&(t.uncache?(K=r.getBBox(),l=t.xOrigin-K.x+"px "+(t.yOrigin-K.y)+"px",z=""):z=!e&&r.getAttribute("data-svg-origin"),wl(r,z||l,!!z||t.originIsAbsolute,t.smooth!==!1,T)),M=t.xOrigin||0,C=t.yOrigin||0,T!==Os&&(v=T[0],b=T[1],O=T[2],N=T[3],c=B=T[4],h=j=T[5],T.length===6?(d=Math.sqrt(v*v+b*b),p=Math.sqrt(N*N+O*O),g=v||b?va(b,v)*Zr:0,m=O||N?va(O,N)*Zr+g:0,m&&(p*=Math.abs(Math.cos(m*Ha))),t.svg&&(c-=M-(M*v+C*O),h-=C-(M*b+C*N))):(X=T[6],Be=T[7],te=T[8],he=T[9],Me=T[10],Fe=T[11],c=T[12],h=T[13],u=T[14],w=va(X,Me),_=w*Zr,w&&(R=Math.cos(-w),V=Math.sin(-w),z=B*R+te*V,K=j*R+he*V,H=X*R+Me*V,te=B*-V+te*R,he=j*-V+he*R,Me=X*-V+Me*R,Fe=Be*-V+Fe*R,B=z,j=K,X=H),w=va(-O,Me),f=w*Zr,w&&(R=Math.cos(-w),V=Math.sin(-w),z=v*R-te*V,K=b*R-he*V,H=O*R-Me*V,Fe=N*V+Fe*R,v=z,b=K,O=H),w=va(b,v),g=w*Zr,w&&(R=Math.cos(w),V=Math.sin(w),z=v*R+b*V,K=B*R+j*V,b=b*R-v*V,j=j*R-B*V,v=z,B=K),_&&Math.abs(_)+Math.abs(g)>359.9&&(_=g=0,f=180-f),d=vt(Math.sqrt(v*v+b*b+O*O)),p=vt(Math.sqrt(j*j+X*X)),w=va(B,j),m=Math.abs(w)>2e-4?w*Zr:0,x=Fe?1/(Fe<0?-Fe:Fe):0),t.svg&&(z=r.getAttribute("transform"),t.forceCSS=r.setAttribute("transform","")||!ap(fi(r,dt)),z&&r.setAttribute("transform",z))),Math.abs(m)>90&&Math.abs(m)<270&&(a?(d*=-1,m+=g<=0?180:-180,g+=g<=0?180:-180):(p*=-1,m+=m<=0?180:-180)),e=e||t.uncache,t.x=c-((t.xPercent=c&&(!e&&t.xPercent||(Math.round(r.offsetWidth/2)===Math.round(-c)?-50:0)))?r.offsetWidth*t.xPercent/100:0)+s,t.y=h-((t.yPercent=h&&(!e&&t.yPercent||(Math.round(r.offsetHeight/2)===Math.round(-h)?-50:0)))?r.offsetHeight*t.yPercent/100:0)+s,t.z=u+s,t.scaleX=vt(d),t.scaleY=vt(p),t.rotation=vt(g)+n,t.rotationX=vt(_)+n,t.rotationY=vt(f)+n,t.skewX=m+n,t.skewY=S+n,t.transformPerspective=x+s,(t.zOrigin=parseFloat(l.split(" ")[2])||!e&&t.zOrigin||0)&&(i[ti]=Wn(l)),t.xOffset=t.yOffset=0,t.force3D=mi.force3D,t.renderTransform=t.svg?Zm:ep?sp:Km,t.uncache=0,t},Wn=function(r){return(r=r.split(" "))[0]+" "+r[1]},Ro=function(r,e,t){var i=Bt(e);return vt(parseFloat(e)+parseFloat(Dr(r,"x",t+"px",i)))+i},Km=function(r,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,sp(r,e)},Vr="0deg",us="0px",Hr=") ",sp=function(r,e){var t=e||this,i=t.xPercent,a=t.yPercent,s=t.x,n=t.y,o=t.z,l=t.rotation,c=t.rotationY,h=t.rotationX,u=t.skewX,d=t.skewY,p=t.scaleX,g=t.scaleY,_=t.transformPerspective,f=t.force3D,m=t.target,S=t.zOrigin,x="",M=f==="auto"&&r&&r!==1||f===!0;if(S&&(h!==Vr||c!==Vr)){var C=parseFloat(c)*Ha,T=Math.sin(C),w=Math.cos(C),R;C=parseFloat(h)*Ha,R=Math.cos(C),s=Ro(m,s,T*R*-S),n=Ro(m,n,-Math.sin(C)*-S),o=Ro(m,o,w*R*-S+S)}_!==us&&(x+="perspective("+_+Hr),(i||a)&&(x+="translate("+i+"%, "+a+"%) "),(M||s!==us||n!==us||o!==us)&&(x+=o!==us||M?"translate3d("+s+", "+n+", "+o+") ":"translate("+s+", "+n+Hr),l!==Vr&&(x+="rotate("+l+Hr),c!==Vr&&(x+="rotateY("+c+Hr),h!==Vr&&(x+="rotateX("+h+Hr),(u!==Vr||d!==Vr)&&(x+="skew("+u+", "+d+Hr),(p!==1||g!==1)&&(x+="scale("+p+", "+g+Hr),m.style[dt]=x||"translate(0, 0)"},Zm=function(r,e){var t=e||this,i=t.xPercent,a=t.yPercent,s=t.x,n=t.y,o=t.rotation,l=t.skewX,c=t.skewY,h=t.scaleX,u=t.scaleY,d=t.target,p=t.xOrigin,g=t.yOrigin,_=t.xOffset,f=t.yOffset,m=t.forceCSS,S=parseFloat(s),x=parseFloat(n),M,C,T,w,R;o=parseFloat(o),l=parseFloat(l),c=parseFloat(c),c&&(c=parseFloat(c),l+=c,o+=c),o||l?(o*=Ha,l*=Ha,M=Math.cos(o)*h,C=Math.sin(o)*h,T=Math.sin(o-l)*-u,w=Math.cos(o-l)*u,l&&(c*=Ha,R=Math.tan(l-c),R=Math.sqrt(1+R*R),T*=R,w*=R,c&&(R=Math.tan(c),R=Math.sqrt(1+R*R),M*=R,C*=R)),M=vt(M),C=vt(C),T=vt(T),w=vt(w)):(M=h,w=u,C=T=0),(S&&!~(s+"").indexOf("px")||x&&!~(n+"").indexOf("px"))&&(S=Dr(d,"x",s,"px"),x=Dr(d,"y",n,"px")),(p||g||_||f)&&(S=vt(S+p-(p*M+g*T)+_),x=vt(x+g-(p*C+g*w)+f)),(i||a)&&(R=d.getBBox(),S=vt(S+i/100*R.width),x=vt(x+a/100*R.height)),R="matrix("+M+","+C+","+T+","+w+","+S+","+x+")",d.setAttribute("transform",R),m&&(d.style[dt]=R)},Jm=function(r,e,t,i,a){var s=360,n=Dt(a),o=parseFloat(a)*(n&&~a.indexOf("rad")?Zr:1),l=o-i,c=i+l+"deg",h,u;return n&&(h=a.split("_")[1],h==="short"&&(l%=s,l!==l%(s/2)&&(l+=l<0?s:-s)),h==="cw"&&l<0?l=(l+s*jh)%s-~~(l/s)*s:h==="ccw"&&l>0&&(l=(l-s*jh)%s-~~(l/s)*s)),r._pt=u=new ei(r._pt,e,t,i,l,Im),u.e=c,u.u="deg",r._props.push(t),u},Qh=function(r,e){for(var t in e)r[t]=e[t];return r},$m=function(r,e,t){var i=Qh({},t._gsap),a="perspective,force3D,transformOrigin,svgOrigin",s=t.style,n,o,l,c,h,u,d,p;i.svg?(l=t.getAttribute("transform"),t.setAttribute("transform",""),s[dt]=e,n=Ns(t,1),Lr(t,dt),t.setAttribute("transform",l)):(l=getComputedStyle(t)[dt],s[dt]=e,n=Ns(t,1),s[dt]=l);for(o in hr)l=i[o],c=n[o],l!==c&&a.indexOf(o)<0&&(d=Bt(l),p=Bt(c),h=d!==p?Dr(t,o,l,p):parseFloat(l),u=parseFloat(c),r._pt=new ei(r._pt,n,o,h,u-h,Sl),r._pt.u=p||0,r._props.push(o));Qh(n,i)};Qt("padding,margin,Width,Radius",function(r,e){var t="Top",i="Right",a="Bottom",s="Left",n=(e<3?[t,i,a,s]:[t+s,t+i,a+i,a+s]).map(function(o){return e<2?r+o:"border"+o+r});Hn[e>1?"border"+r:r]=function(o,l,c,h,u){var d,p;if(arguments.length<4)return d=n.map(function(g){return ar(o,g,c)}),p=d.join(" "),p.split(d[0]).length===5?d[0]:p;d=(h+"").split(" "),p={},n.forEach(function(g,_){return p[g]=d[_]=d[_]||d[(_-1)/2|0]}),o.init(l,p,u)}});var np={name:"css",register:bl,targetTest:function(r){return r.style&&r.nodeType},init:function(r,e,t,i,a){var s=this._props,n=r.style,o=t.vars.startAt,l,c,h,u,d,p,g,_,f,m,S,x,M,C,T,w,R;Pc||bl(),this.styles=this.styles||Qd(r),w=this.styles.props,this.tween=t;for(g in e)if(g!=="autoRound"&&(c=e[g],!(hi[g]&&Vd(g,e,t,i,r,a)))){if(d=typeof c,p=Hn[g],d==="function"&&(c=c.call(t,i,r,a),d=typeof c),d==="string"&&~c.indexOf("random(")&&(c=Ds(c)),p)p(this,r,g,c,t)&&(T=1);else if(g.substr(0,2)==="--")l=(getComputedStyle(r).getPropertyValue(g)+"").trim(),c+="",Tr.lastIndex=0,Tr.test(l)||(_=Bt(l),f=Bt(c),f?_!==f&&(l=Dr(r,g,l,f)+f):_&&(c+=_)),this.add(n,"setProperty",l,c,i,a,0,0,g),s.push(g),w.push(g,0,n[g]);else if(d!=="undefined"){if(o&&g in o?(l=typeof o[g]=="function"?o[g].call(t,i,r,a):o[g],Dt(l)&&~l.indexOf("random(")&&(l=Ds(l)),Bt(l+"")||l==="auto"||(l+=mi.units[g]||Bt(ar(r,g))||""),(l+"").charAt(1)==="="&&(l=ar(r,g))):l=ar(r,g),u=parseFloat(l),m=d==="string"&&c.charAt(1)==="="&&c.substr(0,2),m&&(c=c.substr(2)),h=parseFloat(c),g in Vi&&(g==="autoAlpha"&&(u===1&&ar(r,"visibility")==="hidden"&&h&&(u=0),w.push("visibility",0,n.visibility),br(this,n,"visibility",u?"inherit":"hidden",h?"inherit":"hidden",!h)),g!=="scale"&&g!=="transform"&&(g=Vi[g],~g.indexOf(",")&&(g=g.split(",")[0]))),S=g in hr,S){if(this.styles.save(g),R=c,d==="string"&&c.substring(0,6)==="var(--"){if(c=fi(r,c.substring(4,c.indexOf(")"))),c.substring(0,5)==="calc("){var V=r.style.perspective;r.style.perspective=c,c=fi(r,"perspective"),V?r.style.perspective=V:Lr(r,"perspective")}h=parseFloat(c)}if(x||(M=r._gsap,M.renderTransform&&!e.parseTransform||Ns(r,e.parseTransform),C=e.smoothOrigin!==!1&&M.smooth,x=this._pt=new ei(this._pt,n,dt,0,1,M.renderTransform,M,0,-1),x.dep=1),g==="scale")this._pt=new ei(this._pt,M,"scaleY",M.scaleY,(m?Ga(M.scaleY,m+h):h)-M.scaleY||0,Sl),this._pt.u=0,s.push("scaleY",g),g+="X";else if(g==="transformOrigin"){w.push(ti,0,n[ti]),c=Ym(c),M.svg?wl(r,c,0,C,0,this):(f=parseFloat(c.split(" ")[2])||0,f!==M.zOrigin&&br(this,M,"zOrigin",M.zOrigin,f),br(this,n,g,Wn(l),Wn(c)));continue}else if(g==="svgOrigin"){wl(r,c,1,C,0,this);continue}else if(g in rp){Jm(this,M,g,u,m?Ga(u,m+c):c);continue}else if(g==="smoothOrigin"){br(this,M,"smooth",M.smooth,c);continue}else if(g==="force3D"){M[g]=c;continue}else if(g==="transform"){$m(this,c,r);continue}}else g in n||(g=Qa(g)||g);if(S||(h||h===0)&&(u||u===0)&&!Dm.test(c)&&g in n)_=(l+"").substr((u+"").length),h||(h=0),f=Bt(c)||(g in mi.units?mi.units[g]:_),_!==f&&(u=Dr(r,g,l,f)),this._pt=new ei(this._pt,S?M:n,g,u,(m?Ga(u,m+h):h)-u,!S&&(f==="px"||g==="zIndex")&&e.autoRound!==!1?Nm:Sl),this._pt.u=f||0,S&&R!==c?(this._pt.b=l,this._pt.e=R,this._pt.r=Om):_!==f&&f!=="%"&&(this._pt.b=l,this._pt.r=Um);else if(g in n)jm.call(this,r,g,l,m?m+c:c);else if(g in r)this.add(r,g,l||r[g],m?m+c:c,i,a);else if(g!=="parseTransform"){yc(g,c);continue}S||(g in n?w.push(g,0,n[g]):typeof r[g]=="function"?w.push(g,2,r[g]()):w.push(g,1,l||r[g])),s.push(g)}}T&&qd(this)},render:function(r,e){if(e.tween._time||!Lc())for(var t=e._pt;t;)t.r(r,t.d),t=t._next;else e.styles.revert()},get:ar,aliases:Vi,getSetter:function(r,e,t){var i=Vi[e];return i&&i.indexOf(",")<0&&(e=i),e in hr&&e!==ti&&(r._gsap.x||ar(r,"x"))?t&&Xh===t?e==="scale"?km:Bm:(Xh=t||{})&&(e==="scale"?Gm:Vm):r.style&&!_c(r.style[e])?Fm:~e.indexOf("-")?zm:Rc(r,e)},core:{_removeProperty:Lr,_getMatrix:Ic}};ri.utils.checkPrefix=Qa;ri.core.getStyleSaver=Qd;(function(r,e,t,i){var a=Qt(r+","+e+","+t,function(s){hr[s]=1});Qt(e,function(s){mi.units[s]="deg",rp[s]=1}),Vi[a[13]]=r+","+e,Qt(i,function(s){var n=s.split(":");Vi[n[1]]=a[n[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Qt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){mi.units[r]="px"});ri.registerPlugin(np);var ot=ri.registerPlugin(np)||ri;ot.core.Tween;/**
* @license
* Copyright 2010-2024 Three.js Authors
* SPDX-License-Identifier: MIT
*/const Uc="169",Wa={ROTATE:0,DOLLY:1,PAN:2},Ba={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Qm=0,eu=1,eg=2,op=1,lp=2,ir=3,Ir=0,ii=1,sr=2,Ar=0,Xa=1,tu=2,iu=3,ru=4,tg=5,$r=100,ig=101,rg=102,ag=103,sg=104,ng=200,og=201,lg=202,cg=203,Tl=204,Al=205,hg=206,ug=207,dg=208,pg=209,fg=210,mg=211,gg=212,_g=213,vg=214,Rl=0,Cl=1,Pl=2,es=3,Ll=4,Dl=5,Il=6,Ul=7,cp=0,xg=1,yg=2,Rr=0,Mg=1,Sg=2,Eg=3,hp=4,bg=5,wg=6,Tg=7,up=300,ts=301,is=302,Ol=303,Nl=304,Qn=306,Fl=1e3,ta=1001,zl=1002,Ti=1003,Ag=1004,Ks=1005,Ii=1006,Co=1007,ia=1008,ur=1009,dp=1010,pp=1011,Fs=1012,Oc=1013,oa=1014,nr=1015,Vs=1016,Nc=1017,Fc=1018,rs=1020,fp=35902,mp=1021,gp=1022,Ui=1023,_p=1024,vp=1025,ja=1026,as=1027,xp=1028,zc=1029,yp=1030,Bc=1031,kc=1033,An=33776,Rn=33777,Cn=33778,Pn=33779,Bl=35840,kl=35841,Gl=35842,Vl=35843,Hl=36196,Wl=37492,Xl=37496,jl=37808,Yl=37809,ql=37810,Kl=37811,Zl=37812,Jl=37813,$l=37814,Ql=37815,ec=37816,tc=37817,ic=37818,rc=37819,ac=37820,sc=37821,Ln=36492,nc=36494,oc=36495,Mp=36283,lc=36284,cc=36285,hc=36286,Rg=3200,Cg=3201,Sp=0,Pg=1,Mr="",Di="srgb",Nr="srgb-linear",Gc="display-p3",eo="display-p3-linear",Xn="linear",st="srgb",jn="rec709",Yn="p3",xa=7680,au=519,Lg=512,Dg=513,Ig=514,Ep=515,Ug=516,Og=517,Ng=518,Fg=519,uc=35044,su="300 es",or=2e3,qn=2001;class da{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const a=i.indexOf(t);a!==-1&&i.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const t=this._listeners[e.type];if(t!==void 0){e.target=this;const i=t.slice(0);for(let a=0,s=i.length;a<s;a++)i[a].call(this,e);e.target=null}}}const Ft=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Dn=Math.PI/180,dc=180/Math.PI;function Cr(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ft[r&255]+Ft[r>>8&255]+Ft[r>>16&255]+Ft[r>>24&255]+"-"+Ft[e&255]+Ft[e>>8&255]+"-"+Ft[e>>16&15|64]+Ft[e>>24&255]+"-"+Ft[t&63|128]+Ft[t>>8&255]+"-"+Ft[t>>16&255]+Ft[t>>24&255]+Ft[i&255]+Ft[i>>8&255]+Ft[i>>16&255]+Ft[i>>24&255]).toLowerCase()}function Pt(r,e,t){return Math.max(e,Math.min(t,r))}function zg(r,e){return(r%e+e)%e}function Po(r,e,t){return(1-t)*r+t*e}function Gi(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Ze(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Bg={DEG2RAD:Dn};class ie{constructor(e=0,t=0){ie.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6],this.y=a[1]*t+a[4]*i+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Pt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),a=Math.sin(t),s=this.x-e.x,n=this.y-e.y;return this.x=s*i-n*a+e.x,this.y=s*a+n*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ne{constructor(e,t,i,a,s,n,o,l,c){Ne.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,a,s,n,o,l,c)}set(e,t,i,a,s,n,o,l,c){const h=this.elements;return h[0]=e,h[1]=a,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=i,h[7]=n,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,a=t.elements,s=this.elements,n=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],p=i[5],g=i[8],_=a[0],f=a[3],m=a[6],S=a[1],x=a[4],M=a[7],C=a[2],T=a[5],w=a[8];return s[0]=n*_+o*S+l*C,s[3]=n*f+o*x+l*T,s[6]=n*m+o*M+l*w,s[1]=c*_+h*S+u*C,s[4]=c*f+h*x+u*T,s[7]=c*m+h*M+u*w,s[2]=d*_+p*S+g*C,s[5]=d*f+p*x+g*T,s[8]=d*m+p*M+g*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],a=e[2],s=e[3],n=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*n*h-t*o*c-i*s*h+i*o*l+a*s*c-a*n*l}invert(){const e=this.elements,t=e[0],i=e[1],a=e[2],s=e[3],n=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*n-o*c,d=o*l-h*s,p=c*s-n*l,g=t*u+i*d+a*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=u*_,e[1]=(a*c-h*i)*_,e[2]=(o*i-a*n)*_,e[3]=d*_,e[4]=(h*t-a*l)*_,e[5]=(a*s-o*t)*_,e[6]=p*_,e[7]=(i*l-c*t)*_,e[8]=(n*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,a,s,n,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*n+c*o)+n+e,-a*c,a*l,-a*(-c*n+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Lo.makeScale(e,t)),this}rotate(e){return this.premultiply(Lo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Lo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let a=0;a<9;a++)if(t[a]!==i[a])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Lo=new Ne;function bp(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function zs(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function kg(){const r=zs("canvas");return r.style.display="block",r}const nu={};function In(r){r in nu||(nu[r]=!0,console.warn(r))}function Gg(r,e,t){return new Promise(function(i,a){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:a();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function Vg(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Hg(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const ou=new Ne().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),lu=new Ne().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ds={[Nr]:{transfer:Xn,primaries:jn,luminanceCoefficients:[.2126,.7152,.0722],toReference:r=>r,fromReference:r=>r},[Di]:{transfer:st,primaries:jn,luminanceCoefficients:[.2126,.7152,.0722],toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[eo]:{transfer:Xn,primaries:Yn,luminanceCoefficients:[.2289,.6917,.0793],toReference:r=>r.applyMatrix3(lu),fromReference:r=>r.applyMatrix3(ou)},[Gc]:{transfer:st,primaries:Yn,luminanceCoefficients:[.2289,.6917,.0793],toReference:r=>r.convertSRGBToLinear().applyMatrix3(lu),fromReference:r=>r.applyMatrix3(ou).convertLinearToSRGB()}},Wg=new Set([Nr,eo]),Ye={enabled:!0,_workingColorSpace:Nr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!Wg.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const i=ds[e].toReference,a=ds[t].fromReference;return a(i(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return ds[r].primaries},getTransfer:function(r){return r===Mr?Xn:ds[r].transfer},getLuminanceCoefficients:function(r,e=this._workingColorSpace){return r.fromArray(ds[e].luminanceCoefficients)}};function Ya(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Do(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let ya;class Xg{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ya===void 0&&(ya=zs("canvas")),ya.width=e.width,ya.height=e.height;const i=ya.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=ya}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=zs("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const a=i.getImageData(0,0,e.width,e.height),s=a.data;for(let n=0;n<s.length;n++)s[n]=Ya(s[n]/255)*255;return i.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ya(t[i]/255)*255):t[i]=Ya(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let jg=0;class wp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:jg++}),this.uuid=Cr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let s;if(Array.isArray(a)){s=[];for(let n=0,o=a.length;n<o;n++)a[n].isDataTexture?s.push(Io(a[n].image)):s.push(Io(a[n]))}else s=Io(a);i.url=s}return t||(e.images[this.uuid]=i),i}}function Io(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Xg.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Yg=0;class Gt extends da{constructor(e=Gt.DEFAULT_IMAGE,t=Gt.DEFAULT_MAPPING,i=ta,a=ta,s=Ii,n=ia,o=Ui,l=ur,c=Gt.DEFAULT_ANISOTROPY,h=Mr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Yg++}),this.uuid=Cr(),this.name="",this.source=new wp(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=s,this.minFilter=n,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ie(0,0),this.repeat=new ie(1,1),this.center=new ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==up)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Fl:e.x=e.x-Math.floor(e.x);break;case ta:e.x=e.x<0?0:1;break;case zl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Fl:e.y=e.y-Math.floor(e.y);break;case ta:e.y=e.y<0?0:1;break;case zl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Gt.DEFAULT_IMAGE=null;Gt.DEFAULT_MAPPING=up;Gt.DEFAULT_ANISOTROPY=1;class $e{constructor(e=0,t=0,i=0,a=1){$e.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,a){return this.x=e,this.y=t,this.z=i,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,a=this.z,s=this.w,n=e.elements;return this.x=n[0]*t+n[4]*i+n[8]*a+n[12]*s,this.y=n[1]*t+n[5]*i+n[9]*a+n[13]*s,this.z=n[2]*t+n[6]*i+n[10]*a+n[14]*s,this.w=n[3]*t+n[7]*i+n[11]*a+n[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,a,s;const n=e.elements,o=n[0],l=n[4],c=n[8],h=n[1],u=n[5],d=n[9],p=n[2],g=n[6],_=n[10];if(Math.abs(l-h)<.01&&Math.abs(c-p)<.01&&Math.abs(d-g)<.01){if(Math.abs(l+h)<.1&&Math.abs(c+p)<.1&&Math.abs(d+g)<.1&&Math.abs(o+u+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const m=(o+1)/2,S=(u+1)/2,x=(_+1)/2,M=(l+h)/4,C=(c+p)/4,T=(d+g)/4;return m>S&&m>x?m<.01?(i=0,a=.707106781,s=.707106781):(i=Math.sqrt(m),a=M/i,s=C/i):S>x?S<.01?(i=.707106781,a=0,s=.707106781):(a=Math.sqrt(S),i=M/a,s=T/a):x<.01?(i=.707106781,a=.707106781,s=0):(s=Math.sqrt(x),i=C/s,a=T/s),this.set(i,a,s,t),this}let f=Math.sqrt((g-d)*(g-d)+(c-p)*(c-p)+(h-l)*(h-l));return Math.abs(f)<.001&&(f=1),this.x=(g-d)/f,this.y=(c-p)/f,this.z=(h-l)/f,this.w=Math.acos((o+u+_-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class qg extends da{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new $e(0,0,e,t),this.scissorTest=!1,this.viewport=new $e(0,0,e,t);const a={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ii,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Gt(a,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const n=i.count;for(let o=0;o<n;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let a=0,s=this.textures.length;a<s;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,a=e.textures.length;i<a;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new wp(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class la extends qg{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Tp extends Gt{constructor(e=null,t=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:a},this.magFilter=Ti,this.minFilter=Ti,this.wrapR=ta,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Kg extends Gt{constructor(e=null,t=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:a},this.magFilter=Ti,this.minFilter=Ti,this.wrapR=ta,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ca{constructor(e=0,t=0,i=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=a}static slerpFlat(e,t,i,a,s,n,o){let l=i[a+0],c=i[a+1],h=i[a+2],u=i[a+3];const d=s[n+0],p=s[n+1],g=s[n+2],_=s[n+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(u!==_||l!==d||c!==p||h!==g){let f=1-o;const m=l*d+c*p+h*g+u*_,S=m>=0?1:-1,x=1-m*m;if(x>Number.EPSILON){const C=Math.sqrt(x),T=Math.atan2(C,m*S);f=Math.sin(f*T)/C,o=Math.sin(o*T)/C}const M=o*S;if(l=l*f+d*M,c=c*f+p*M,h=h*f+g*M,u=u*f+_*M,f===1-o){const C=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=C,c*=C,h*=C,u*=C}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,a,s,n){const o=i[a],l=i[a+1],c=i[a+2],h=i[a+3],u=s[n],d=s[n+1],p=s[n+2],g=s[n+3];return e[t]=o*g+h*u+l*p-c*d,e[t+1]=l*g+h*d+c*u-o*p,e[t+2]=c*g+h*p+o*d-l*u,e[t+3]=h*g-o*u-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,a){return this._x=e,this._y=t,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,a=e._y,s=e._z,n=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(a/2),u=o(s/2),d=l(i/2),p=l(a/2),g=l(s/2);switch(n){case"XYZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"YZX":this._x=d*h*u+c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u-d*p*g;break;case"XZY":this._x=d*h*u-c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+n)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,a=Math.sin(i);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],a=t[4],s=t[8],n=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=i+o+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(n-a)*p}else if(i>o&&i>u){const p=2*Math.sqrt(1+i-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(a+n)/p,this._z=(s+c)/p}else if(o>u){const p=2*Math.sqrt(1+o-i-u);this._w=(s-c)/p,this._x=(a+n)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-i-o);this._w=(n-a)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Pt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const a=Math.min(1,t/i);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,a=e._y,s=e._z,n=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+n*o+a*c-s*l,this._y=a*h+n*l+s*o-i*c,this._z=s*h+n*c+i*l-a*o,this._w=n*h-i*o-a*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,a=this._y,s=this._z,n=this._w;let o=n*e._w+i*e._x+a*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=n,this._x=i,this._y=a,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*n+t*this._w,this._x=p*i+t*this._x,this._y=p*a+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=n*u+this._w*d,this._x=i*u+this._x*d,this._y=a*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),a=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(a*Math.sin(e),a*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,t=0,i=0){P.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(cu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(cu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,a=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*a,this.y=s[1]*t+s[4]*i+s[7]*a,this.z=s[2]*t+s[5]*i+s[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,a=this.z,s=e.elements,n=1/(s[3]*t+s[7]*i+s[11]*a+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*a+s[12])*n,this.y=(s[1]*t+s[5]*i+s[9]*a+s[13])*n,this.z=(s[2]*t+s[6]*i+s[10]*a+s[14])*n,this}applyQuaternion(e){const t=this.x,i=this.y,a=this.z,s=e.x,n=e.y,o=e.z,l=e.w,c=2*(n*a-o*i),h=2*(o*t-s*a),u=2*(s*i-n*t);return this.x=t+l*c+n*u-o*h,this.y=i+l*h+o*c-s*u,this.z=a+l*u+s*h-n*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,a=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*a,this.y=s[1]*t+s[5]*i+s[9]*a,this.z=s[2]*t+s[6]*i+s[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,a=e.y,s=e.z,n=t.x,o=t.y,l=t.z;return this.x=a*l-s*o,this.y=s*n-i*l,this.z=i*o-a*n,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Uo.copy(this).projectOnVector(e),this.sub(Uo)}reflect(e){return this.sub(Uo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Pt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,a=this.z-e.z;return t*t+i*i+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const a=Math.sin(t)*e;return this.x=a*Math.sin(i),this.y=Math.cos(t)*e,this.z=a*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Uo=new P,cu=new ca;class os{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Ci.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Ci.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Ci.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let n=0,o=s.count;n<o;n++)e.isMesh===!0?e.getVertexPosition(n,Ci):Ci.fromBufferAttribute(s,n),Ci.applyMatrix4(e.matrixWorld),this.expandByPoint(Ci);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Zs.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Zs.copy(i.boundingBox)),Zs.applyMatrix4(e.matrixWorld),this.union(Zs)}const a=e.children;for(let s=0,n=a.length;s<n;s++)this.expandByObject(a[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ci),Ci.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ps),Js.subVectors(this.max,ps),Ma.subVectors(e.a,ps),Sa.subVectors(e.b,ps),Ea.subVectors(e.c,ps),fr.subVectors(Sa,Ma),mr.subVectors(Ea,Sa),Wr.subVectors(Ma,Ea);let t=[0,-fr.z,fr.y,0,-mr.z,mr.y,0,-Wr.z,Wr.y,fr.z,0,-fr.x,mr.z,0,-mr.x,Wr.z,0,-Wr.x,-fr.y,fr.x,0,-mr.y,mr.x,0,-Wr.y,Wr.x,0];return!Oo(t,Ma,Sa,Ea,Js)||(t=[1,0,0,0,1,0,0,0,1],!Oo(t,Ma,Sa,Ea,Js))?!1:($s.crossVectors(fr,mr),t=[$s.x,$s.y,$s.z],Oo(t,Ma,Sa,Ea,Js))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ci).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ci).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ji[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ji[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ji[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ji[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ji[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ji[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ji[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ji[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ji),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ji=[new P,new P,new P,new P,new P,new P,new P,new P],Ci=new P,Zs=new os,Ma=new P,Sa=new P,Ea=new P,fr=new P,mr=new P,Wr=new P,ps=new P,Js=new P,$s=new P,Xr=new P;function Oo(r,e,t,i,a){for(let s=0,n=r.length-3;s<=n;s+=3){Xr.fromArray(r,s);const o=a.x*Math.abs(Xr.x)+a.y*Math.abs(Xr.y)+a.z*Math.abs(Xr.z),l=e.dot(Xr),c=t.dot(Xr),h=i.dot(Xr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Zg=new os,fs=new P,No=new P;class to{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Zg.setFromPoints(e).getCenter(i);let a=0;for(let s=0,n=e.length;s<n;s++)a=Math.max(a,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;fs.subVectors(e,this.center);const t=fs.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),a=(i-this.radius)*.5;this.center.addScaledVector(fs,a/i),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(No.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(fs.copy(e.center).add(No)),this.expandByPoint(fs.copy(e.center).sub(No))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const $i=new P,Fo=new P,Qs=new P,gr=new P,zo=new P,en=new P,Bo=new P;class io{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,$i)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=$i.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):($i.copy(this.origin).addScaledVector(this.direction,t),$i.distanceToSquared(e))}distanceSqToSegment(e,t,i,a){Fo.copy(e).add(t).multiplyScalar(.5),Qs.copy(t).sub(e).normalize(),gr.copy(this.origin).sub(Fo);const s=e.distanceTo(t)*.5,n=-this.direction.dot(Qs),o=gr.dot(this.direction),l=-gr.dot(Qs),c=gr.lengthSq(),h=Math.abs(1-n*n);let u,d,p,g;if(h>0)if(u=n*l-o,d=n*o-l,g=s*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,p=u*(u+n*d+2*o)+d*(n*u+d+2*l)+c}else d=s,u=Math.max(0,-(n*d+o)),p=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(n*d+o)),p=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-n*s+o)),d=u>0?-s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(u=Math.max(0,-(n*s+o)),d=u>0?s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+c);else d=n>0?-s:s,u=Math.max(0,-(n*d+o)),p=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),a&&a.copy(Fo).addScaledVector(Qs,d),p}intersectSphere(e,t){$i.subVectors(e.center,this.origin);const i=$i.dot(this.direction),a=$i.dot($i)-i*i,s=e.radius*e.radius;if(a>s)return null;const n=Math.sqrt(s-a),o=i-n,l=i+n;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,a,s,n,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,a=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,a=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,n=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,n=(e.min.y-d.y)*h),i>n||s>a||((s>i||isNaN(i))&&(i=s),(n<a||isNaN(a))&&(a=n),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),i>l||o>a)||((o>i||i!==i)&&(i=o),(l<a||a!==a)&&(a=l),a<0)?null:this.at(i>=0?i:a,t)}intersectsBox(e){return this.intersectBox(e,$i)!==null}intersectTriangle(e,t,i,a,s){zo.subVectors(t,e),en.subVectors(i,e),Bo.crossVectors(zo,en);let n=this.direction.dot(Bo),o;if(n>0){if(a)return null;o=1}else if(n<0)o=-1,n=-n;else return null;gr.subVectors(this.origin,e);const l=o*this.direction.dot(en.crossVectors(gr,en));if(l<0)return null;const c=o*this.direction.dot(zo.cross(gr));if(c<0||l+c>n)return null;const h=-o*gr.dot(Bo);return h<0?null:this.at(h/n,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class tt{constructor(e,t,i,a,s,n,o,l,c,h,u,d,p,g,_,f){tt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,a,s,n,o,l,c,h,u,d,p,g,_,f)}set(e,t,i,a,s,n,o,l,c,h,u,d,p,g,_,f){const m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=a,m[1]=s,m[5]=n,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=d,m[3]=p,m[7]=g,m[11]=_,m[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,a=1/ba.setFromMatrixColumn(e,0).length(),s=1/ba.setFromMatrixColumn(e,1).length(),n=1/ba.setFromMatrixColumn(e,2).length();return t[0]=i[0]*a,t[1]=i[1]*a,t[2]=i[2]*a,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*n,t[9]=i[9]*n,t[10]=i[10]*n,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,a=e.y,s=e.z,n=Math.cos(i),o=Math.sin(i),l=Math.cos(a),c=Math.sin(a),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const d=n*h,p=n*u,g=o*h,_=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+g*c,t[5]=d-_*c,t[9]=-o*l,t[2]=_-d*c,t[6]=g+p*c,t[10]=n*l}else if(e.order==="YXZ"){const d=l*h,p=l*u,g=c*h,_=c*u;t[0]=d+_*o,t[4]=g*o-p,t[8]=n*c,t[1]=n*u,t[5]=n*h,t[9]=-o,t[2]=p*o-g,t[6]=_+d*o,t[10]=n*l}else if(e.order==="ZXY"){const d=l*h,p=l*u,g=c*h,_=c*u;t[0]=d-_*o,t[4]=-n*u,t[8]=g+p*o,t[1]=p+g*o,t[5]=n*h,t[9]=_-d*o,t[2]=-n*c,t[6]=o,t[10]=n*l}else if(e.order==="ZYX"){const d=n*h,p=n*u,g=o*h,_=o*u;t[0]=l*h,t[4]=g*c-p,t[8]=d*c+_,t[1]=l*u,t[5]=_*c+d,t[9]=p*c-g,t[2]=-c,t[6]=o*l,t[10]=n*l}else if(e.order==="YZX"){const d=n*l,p=n*c,g=o*l,_=o*c;t[0]=l*h,t[4]=_-d*u,t[8]=g*u+p,t[1]=u,t[5]=n*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*u+g,t[10]=d-_*u}else if(e.order==="XZY"){const d=n*l,p=n*c,g=o*l,_=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+_,t[5]=n*h,t[9]=p*u-g,t[2]=g*u-p,t[6]=o*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Jg,e,$g)}lookAt(e,t,i){const a=this.elements;return oi.subVectors(e,t),oi.lengthSq()===0&&(oi.z=1),oi.normalize(),_r.crossVectors(i,oi),_r.lengthSq()===0&&(Math.abs(i.z)===1?oi.x+=1e-4:oi.z+=1e-4,oi.normalize(),_r.crossVectors(i,oi)),_r.normalize(),tn.crossVectors(oi,_r),a[0]=_r.x,a[4]=tn.x,a[8]=oi.x,a[1]=_r.y,a[5]=tn.y,a[9]=oi.y,a[2]=_r.z,a[6]=tn.z,a[10]=oi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,a=t.elements,s=this.elements,n=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],p=i[13],g=i[2],_=i[6],f=i[10],m=i[14],S=i[3],x=i[7],M=i[11],C=i[15],T=a[0],w=a[4],R=a[8],V=a[12],v=a[1],b=a[5],O=a[9],N=a[13],B=a[2],j=a[6],z=a[10],K=a[14],H=a[3],te=a[7],he=a[11],Me=a[15];return s[0]=n*T+o*v+l*B+c*H,s[4]=n*w+o*b+l*j+c*te,s[8]=n*R+o*O+l*z+c*he,s[12]=n*V+o*N+l*K+c*Me,s[1]=h*T+u*v+d*B+p*H,s[5]=h*w+u*b+d*j+p*te,s[9]=h*R+u*O+d*z+p*he,s[13]=h*V+u*N+d*K+p*Me,s[2]=g*T+_*v+f*B+m*H,s[6]=g*w+_*b+f*j+m*te,s[10]=g*R+_*O+f*z+m*he,s[14]=g*V+_*N+f*K+m*Me,s[3]=S*T+x*v+M*B+C*H,s[7]=S*w+x*b+M*j+C*te,s[11]=S*R+x*O+M*z+C*he,s[15]=S*V+x*N+M*K+C*Me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],a=e[8],s=e[12],n=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],p=e[14],g=e[3],_=e[7],f=e[11],m=e[15];return g*(+s*l*u-a*c*u-s*o*d+i*c*d+a*o*p-i*l*p)+_*(+t*l*p-t*c*d+s*n*d-a*n*p+a*c*h-s*l*h)+f*(+t*c*u-t*o*p-s*n*u+i*n*p+s*o*h-i*c*h)+m*(-a*o*h-t*l*u+t*o*d+a*n*u-i*n*d+i*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],a=e[2],s=e[3],n=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],p=e[11],g=e[12],_=e[13],f=e[14],m=e[15],S=u*f*c-_*d*c+_*l*p-o*f*p-u*l*m+o*d*m,x=g*d*c-h*f*c-g*l*p+n*f*p+h*l*m-n*d*m,M=h*_*c-g*u*c+g*o*p-n*_*p-h*o*m+n*u*m,C=g*u*l-h*_*l-g*o*d+n*_*d+h*o*f-n*u*f,T=t*S+i*x+a*M+s*C;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/T;return e[0]=S*w,e[1]=(_*d*s-u*f*s-_*a*p+i*f*p+u*a*m-i*d*m)*w,e[2]=(o*f*s-_*l*s+_*a*c-i*f*c-o*a*m+i*l*m)*w,e[3]=(u*l*s-o*d*s-u*a*c+i*d*c+o*a*p-i*l*p)*w,e[4]=x*w,e[5]=(h*f*s-g*d*s+g*a*p-t*f*p-h*a*m+t*d*m)*w,e[6]=(g*l*s-n*f*s-g*a*c+t*f*c+n*a*m-t*l*m)*w,e[7]=(n*d*s-h*l*s+h*a*c-t*d*c-n*a*p+t*l*p)*w,e[8]=M*w,e[9]=(g*u*s-h*_*s-g*i*p+t*_*p+h*i*m-t*u*m)*w,e[10]=(n*_*s-g*o*s+g*i*c-t*_*c-n*i*m+t*o*m)*w,e[11]=(h*o*s-n*u*s-h*i*c+t*u*c+n*i*p-t*o*p)*w,e[12]=C*w,e[13]=(h*_*a-g*u*a+g*i*d-t*_*d-h*i*f+t*u*f)*w,e[14]=(g*o*a-n*_*a-g*i*l+t*_*l+n*i*f-t*o*f)*w,e[15]=(n*u*a-h*o*a+h*i*l-t*u*l-n*i*d+t*o*d)*w,this}scale(e){const t=this.elements,i=e.x,a=e.y,s=e.z;return t[0]*=i,t[4]*=a,t[8]*=s,t[1]*=i,t[5]*=a,t[9]*=s,t[2]*=i,t[6]*=a,t[10]*=s,t[3]*=i,t[7]*=a,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,a))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),a=Math.sin(t),s=1-i,n=e.x,o=e.y,l=e.z,c=s*n,h=s*o;return this.set(c*n+i,c*o-a*l,c*l+a*o,0,c*o+a*l,h*o+i,h*l-a*n,0,c*l-a*o,h*l+a*n,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,a,s,n){return this.set(1,i,s,0,e,1,n,0,t,a,1,0,0,0,0,1),this}compose(e,t,i){const a=this.elements,s=t._x,n=t._y,o=t._z,l=t._w,c=s+s,h=n+n,u=o+o,d=s*c,p=s*h,g=s*u,_=n*h,f=n*u,m=o*u,S=l*c,x=l*h,M=l*u,C=i.x,T=i.y,w=i.z;return a[0]=(1-(_+m))*C,a[1]=(p+M)*C,a[2]=(g-x)*C,a[3]=0,a[4]=(p-M)*T,a[5]=(1-(d+m))*T,a[6]=(f+S)*T,a[7]=0,a[8]=(g+x)*w,a[9]=(f-S)*w,a[10]=(1-(d+_))*w,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,i){const a=this.elements;let s=ba.set(a[0],a[1],a[2]).length();const n=ba.set(a[4],a[5],a[6]).length(),o=ba.set(a[8],a[9],a[10]).length();this.determinant()<0&&(s=-s),e.x=a[12],e.y=a[13],e.z=a[14],Pi.copy(this);const l=1/s,c=1/n,h=1/o;return Pi.elements[0]*=l,Pi.elements[1]*=l,Pi.elements[2]*=l,Pi.elements[4]*=c,Pi.elements[5]*=c,Pi.elements[6]*=c,Pi.elements[8]*=h,Pi.elements[9]*=h,Pi.elements[10]*=h,t.setFromRotationMatrix(Pi),i.x=s,i.y=n,i.z=o,this}makePerspective(e,t,i,a,s,n,o=or){const l=this.elements,c=2*s/(t-e),h=2*s/(i-a),u=(t+e)/(t-e),d=(i+a)/(i-a);let p,g;if(o===or)p=-(n+s)/(n-s),g=-2*n*s/(n-s);else if(o===qn)p=-n/(n-s),g=-n*s/(n-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,a,s,n,o=or){const l=this.elements,c=1/(t-e),h=1/(i-a),u=1/(n-s),d=(t+e)*c,p=(i+a)*h;let g,_;if(o===or)g=(n+s)*u,_=-2*u;else if(o===qn)g=s*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let a=0;a<16;a++)if(t[a]!==i[a])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ba=new P,Pi=new tt,Jg=new P(0,0,0),$g=new P(1,1,1),_r=new P,tn=new P,oi=new P,hu=new tt,uu=new ca;class Wi{constructor(e=0,t=0,i=0,a=Wi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,a=this._order){return this._x=e,this._y=t,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const a=e.elements,s=a[0],n=a[4],o=a[8],l=a[1],c=a[5],h=a[9],u=a[2],d=a[6],p=a[10];switch(t){case"XYZ":this._y=Math.asin(Pt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-n,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Pt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Pt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-n,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Pt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-n,c));break;case"YZX":this._z=Math.asin(Pt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Pt(n,-1,1)),Math.abs(n)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return hu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(hu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return uu.setFromEuler(this),this.setFromQuaternion(uu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Wi.DEFAULT_ORDER="XYZ";class Vc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Qg=0;const du=new P,wa=new ca,Qi=new tt,rn=new P,ms=new P,e_=new P,t_=new ca,pu=new P(1,0,0),fu=new P(0,1,0),mu=new P(0,0,1),gu={type:"added"},i_={type:"removed"},Ta={type:"childadded",child:null},ko={type:"childremoved",child:null};class bt extends da{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Qg++}),this.uuid=Cr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=bt.DEFAULT_UP.clone();const e=new P,t=new Wi,i=new ca,a=new P(1,1,1);function s(){i.setFromEuler(t,!1)}function n(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(n),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new tt},normalMatrix:{value:new Ne}}),this.matrix=new tt,this.matrixWorld=new tt,this.matrixAutoUpdate=bt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return wa.setFromAxisAngle(e,t),this.quaternion.multiply(wa),this}rotateOnWorldAxis(e,t){return wa.setFromAxisAngle(e,t),this.quaternion.premultiply(wa),this}rotateX(e){return this.rotateOnAxis(pu,e)}rotateY(e){return this.rotateOnAxis(fu,e)}rotateZ(e){return this.rotateOnAxis(mu,e)}translateOnAxis(e,t){return du.copy(e).applyQuaternion(this.quaternion),this.position.add(du.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(pu,e)}translateY(e){return this.translateOnAxis(fu,e)}translateZ(e){return this.translateOnAxis(mu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Qi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?rn.copy(e):rn.set(e,t,i);const a=this.parent;this.updateWorldMatrix(!0,!1),ms.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qi.lookAt(ms,rn,this.up):Qi.lookAt(rn,ms,this.up),this.quaternion.setFromRotationMatrix(Qi),a&&(Qi.extractRotation(a.matrixWorld),wa.setFromRotationMatrix(Qi),this.quaternion.premultiply(wa.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(gu),Ta.child=e,this.dispatchEvent(Ta),Ta.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(i_),ko.child=e,this.dispatchEvent(ko),ko.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Qi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Qi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Qi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(gu),Ta.child=e,this.dispatchEvent(Ta),Ta.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,a=this.children.length;i<a;i++){const s=this.children[i].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const a=this.children;for(let s=0,n=a.length;s<n;s++)a[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ms,e,e_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ms,t_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const a=this.children;for(let s=0,n=a.length;s<n;s++)a[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));a.material=o}else a.material=s(e.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];a.animations.push(s(e.animations,l))}}if(t){const o=n(e.geometries),l=n(e.materials),c=n(e.textures),h=n(e.images),u=n(e.shapes),d=n(e.skeletons),p=n(e.animations),g=n(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=a,i;function n(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const a=e.children[i];this.add(a.clone())}return this}}bt.DEFAULT_UP=new P(0,1,0);bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Li=new P,er=new P,Go=new P,tr=new P,Aa=new P,Ra=new P,_u=new P,Vo=new P,Ho=new P,Wo=new P,Xo=new $e,jo=new $e,Yo=new $e;class Ei{constructor(e=new P,t=new P,i=new P){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,a){a.subVectors(i,t),Li.subVectors(e,t),a.cross(Li);const s=a.lengthSq();return s>0?a.multiplyScalar(1/Math.sqrt(s)):a.set(0,0,0)}static getBarycoord(e,t,i,a,s){Li.subVectors(a,t),er.subVectors(i,t),Go.subVectors(e,t);const n=Li.dot(Li),o=Li.dot(er),l=Li.dot(Go),c=er.dot(er),h=er.dot(Go),u=n*c-o*o;if(u===0)return s.set(0,0,0),null;const d=1/u,p=(c*l-o*h)*d,g=(n*h-o*l)*d;return s.set(1-p-g,g,p)}static containsPoint(e,t,i,a){return this.getBarycoord(e,t,i,a,tr)===null?!1:tr.x>=0&&tr.y>=0&&tr.x+tr.y<=1}static getInterpolation(e,t,i,a,s,n,o,l){return this.getBarycoord(e,t,i,a,tr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,tr.x),l.addScaledVector(n,tr.y),l.addScaledVector(o,tr.z),l)}static getInterpolatedAttribute(e,t,i,a,s,n){return Xo.setScalar(0),jo.setScalar(0),Yo.setScalar(0),Xo.fromBufferAttribute(e,t),jo.fromBufferAttribute(e,i),Yo.fromBufferAttribute(e,a),n.setScalar(0),n.addScaledVector(Xo,s.x),n.addScaledVector(jo,s.y),n.addScaledVector(Yo,s.z),n}static isFrontFacing(e,t,i,a){return Li.subVectors(i,t),er.subVectors(e,t),Li.cross(er).dot(a)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,a){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,i,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Li.subVectors(this.c,this.b),er.subVectors(this.a,this.b),Li.cross(er).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ei.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ei.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,a,s){return Ei.getInterpolation(e,this.a,this.b,this.c,t,i,a,s)}containsPoint(e){return Ei.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ei.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,a=this.b,s=this.c;let n,o;Aa.subVectors(a,i),Ra.subVectors(s,i),Vo.subVectors(e,i);const l=Aa.dot(Vo),c=Ra.dot(Vo);if(l<=0&&c<=0)return t.copy(i);Ho.subVectors(e,a);const h=Aa.dot(Ho),u=Ra.dot(Ho);if(h>=0&&u<=h)return t.copy(a);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return n=l/(l-h),t.copy(i).addScaledVector(Aa,n);Wo.subVectors(e,s);const p=Aa.dot(Wo),g=Ra.dot(Wo);if(g>=0&&p<=g)return t.copy(s);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(Ra,o);const f=h*g-p*u;if(f<=0&&u-h>=0&&p-g>=0)return _u.subVectors(s,a),o=(u-h)/(u-h+(p-g)),t.copy(a).addScaledVector(_u,o);const m=1/(f+_+d);return n=_*m,o=d*m,t.copy(i).addScaledVector(Aa,n).addScaledVector(Ra,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ap={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vr={h:0,s:0,l:0},an={h:0,s:0,l:0};function qo(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Ue{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Di){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ye.toWorkingColorSpace(this,t),this}setRGB(e,t,i,a=Ye.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ye.toWorkingColorSpace(this,a),this}setHSL(e,t,i,a=Ye.workingColorSpace){if(e=zg(e,1),t=Pt(t,0,1),i=Pt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,n=2*i-s;this.r=qo(n,s,e+1/3),this.g=qo(n,s,e),this.b=qo(n,s,e-1/3)}return Ye.toWorkingColorSpace(this,a),this}setStyle(e,t=Di){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const n=a[1],o=a[2];switch(n){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=a[1],n=s.length;if(n===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(n===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Di){const i=Ap[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ya(e.r),this.g=Ya(e.g),this.b=Ya(e.b),this}copyLinearToSRGB(e){return this.r=Do(e.r),this.g=Do(e.g),this.b=Do(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Di){return Ye.fromWorkingColorSpace(zt.copy(this),e),Math.round(Pt(zt.r*255,0,255))*65536+Math.round(Pt(zt.g*255,0,255))*256+Math.round(Pt(zt.b*255,0,255))}getHexString(e=Di){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ye.workingColorSpace){Ye.fromWorkingColorSpace(zt.copy(this),t);const i=zt.r,a=zt.g,s=zt.b,n=Math.max(i,a,s),o=Math.min(i,a,s);let l,c;const h=(o+n)/2;if(o===n)l=0,c=0;else{const u=n-o;switch(c=h<=.5?u/(n+o):u/(2-n-o),n){case i:l=(a-s)/u+(a<s?6:0);break;case a:l=(s-i)/u+2;break;case s:l=(i-a)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ye.workingColorSpace){return Ye.fromWorkingColorSpace(zt.copy(this),t),e.r=zt.r,e.g=zt.g,e.b=zt.b,e}getStyle(e=Di){Ye.fromWorkingColorSpace(zt.copy(this),e);const t=zt.r,i=zt.g,a=zt.b;return e!==Di?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(e,t,i){return this.getHSL(vr),this.setHSL(vr.h+e,vr.s+t,vr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(vr),e.getHSL(an);const i=Po(vr.h,an.h,t),a=Po(vr.s,an.s,t),s=Po(vr.l,an.l,t);return this.setHSL(i,a,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,a=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*a,this.g=s[1]*t+s[4]*i+s[7]*a,this.b=s[2]*t+s[5]*i+s[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zt=new Ue;Ue.NAMES=Ap;let r_=0;class pa extends da{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:r_++}),this.uuid=Cr(),this.name="",this.type="Material",this.blending=Xa,this.side=Ir,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Tl,this.blendDst=Al,this.blendEquation=$r,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ue(0,0,0),this.blendAlpha=0,this.depthFunc=es,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=au,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xa,this.stencilZFail=xa,this.stencilZPass=xa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Xa&&(i.blending=this.blending),this.side!==Ir&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Tl&&(i.blendSrc=this.blendSrc),this.blendDst!==Al&&(i.blendDst=this.blendDst),this.blendEquation!==$r&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==es&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==au&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==xa&&(i.stencilFail=this.stencilFail),this.stencilZFail!==xa&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==xa&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(s){const n=[];for(const o in s){const l=s[o];delete l.metadata,n.push(l)}return n}if(t){const s=a(e.textures),n=a(e.images);s.length>0&&(i.textures=s),n.length>0&&(i.images=n)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const a=t.length;i=new Array(a);for(let s=0;s!==a;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Hc extends pa{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wi,this.combine=cp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const yt=new P,sn=new ie;class Ai{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=uc,this.updateRanges=[],this.gpuType=nr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let a=0,s=this.itemSize;a<s;a++)this.array[e+a]=t.array[i+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix3(e),this.setXY(t,sn.x,sn.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix3(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix4(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)yt.fromBufferAttribute(this,t),yt.applyNormalMatrix(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)yt.fromBufferAttribute(this,t),yt.transformDirection(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Gi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ze(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Gi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Gi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Gi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Gi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ze(t,this.array),i=Ze(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,a){return e*=this.itemSize,this.normalized&&(t=Ze(t,this.array),i=Ze(i,this.array),a=Ze(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=a,this}setXYZW(e,t,i,a,s){return e*=this.itemSize,this.normalized&&(t=Ze(t,this.array),i=Ze(i,this.array),a=Ze(a,this.array),s=Ze(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=a,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==uc&&(e.usage=this.usage),e}}class Rp extends Ai{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Cp extends Ai{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class mt extends Ai{constructor(e,t,i){super(new Float32Array(e),t,i)}}let a_=0;const yi=new tt,Ko=new bt,Ca=new P,li=new os,gs=new os,Ct=new P;class jt extends da{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:a_++}),this.uuid=Cr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(bp(e)?Cp:Rp)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ne().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return yi.makeRotationFromQuaternion(e),this.applyMatrix4(yi),this}rotateX(e){return yi.makeRotationX(e),this.applyMatrix4(yi),this}rotateY(e){return yi.makeRotationY(e),this.applyMatrix4(yi),this}rotateZ(e){return yi.makeRotationZ(e),this.applyMatrix4(yi),this}translate(e,t,i){return yi.makeTranslation(e,t,i),this.applyMatrix4(yi),this}scale(e,t,i){return yi.makeScale(e,t,i),this.applyMatrix4(yi),this}lookAt(e){return Ko.lookAt(e),Ko.updateMatrix(),this.applyMatrix4(Ko.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ca).negate(),this.translate(Ca.x,Ca.y,Ca.z),this}setFromPoints(e){const t=[];for(let i=0,a=e.length;i<a;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new mt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new os);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,a=t.length;i<a;i++){const s=t[i];li.setFromBufferAttribute(s),this.morphTargetsRelative?(Ct.addVectors(this.boundingBox.min,li.min),this.boundingBox.expandByPoint(Ct),Ct.addVectors(this.boundingBox.max,li.max),this.boundingBox.expandByPoint(Ct)):(this.boundingBox.expandByPoint(li.min),this.boundingBox.expandByPoint(li.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new to);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){const i=this.boundingSphere.center;if(li.setFromBufferAttribute(e),t)for(let s=0,n=t.length;s<n;s++){const o=t[s];gs.setFromBufferAttribute(o),this.morphTargetsRelative?(Ct.addVectors(li.min,gs.min),li.expandByPoint(Ct),Ct.addVectors(li.max,gs.max),li.expandByPoint(Ct)):(li.expandByPoint(gs.min),li.expandByPoint(gs.max))}li.getCenter(i);let a=0;for(let s=0,n=e.count;s<n;s++)Ct.fromBufferAttribute(e,s),a=Math.max(a,i.distanceToSquared(Ct));if(t)for(let s=0,n=t.length;s<n;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ct.fromBufferAttribute(o,c),l&&(Ca.fromBufferAttribute(e,c),Ct.add(Ca)),a=Math.max(a,i.distanceToSquared(Ct))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,a=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ai(new Float32Array(4*i.count),4));const n=this.getAttribute("tangent"),o=[],l=[];for(let R=0;R<i.count;R++)o[R]=new P,l[R]=new P;const c=new P,h=new P,u=new P,d=new ie,p=new ie,g=new ie,_=new P,f=new P;function m(R,V,v){c.fromBufferAttribute(i,R),h.fromBufferAttribute(i,V),u.fromBufferAttribute(i,v),d.fromBufferAttribute(s,R),p.fromBufferAttribute(s,V),g.fromBufferAttribute(s,v),h.sub(c),u.sub(c),p.sub(d),g.sub(d);const b=1/(p.x*g.y-g.x*p.y);isFinite(b)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(b),f.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(b),o[R].add(_),o[V].add(_),o[v].add(_),l[R].add(f),l[V].add(f),l[v].add(f))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let R=0,V=S.length;R<V;++R){const v=S[R],b=v.start,O=v.count;for(let N=b,B=b+O;N<B;N+=3)m(e.getX(N+0),e.getX(N+1),e.getX(N+2))}const x=new P,M=new P,C=new P,T=new P;function w(R){C.fromBufferAttribute(a,R),T.copy(C);const V=o[R];x.copy(V),x.sub(C.multiplyScalar(C.dot(V))).normalize(),M.crossVectors(T,V);const v=M.dot(l[R])<0?-1:1;n.setXYZW(R,x.x,x.y,x.z,v)}for(let R=0,V=S.length;R<V;++R){const v=S[R],b=v.start,O=v.count;for(let N=b,B=b+O;N<B;N+=3)w(e.getX(N+0)),w(e.getX(N+1)),w(e.getX(N+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ai(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const a=new P,s=new P,n=new P,o=new P,l=new P,c=new P,h=new P,u=new P;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),_=e.getX(d+1),f=e.getX(d+2);a.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),n.fromBufferAttribute(t,f),h.subVectors(n,s),u.subVectors(a,s),h.cross(u),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,f),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(f,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)a.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),n.fromBufferAttribute(t,d+2),h.subVectors(n,s),u.subVectors(a,s),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ct.fromBufferAttribute(e,t),Ct.normalize(),e.setXYZ(t,Ct.x,Ct.y,Ct.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let p=0,g=0;for(let _=0,f=l.length;_<f;_++){o.isInterleavedBufferAttribute?p=l[_]*o.data.stride+o.offset:p=l[_]*h;for(let m=0;m<h;m++)d[g++]=c[p++]}return new Ai(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new jt,i=this.index.array,a=this.attributes;for(const o in a){const l=a[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],p=e(d,i);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const n=this.groups;for(let o=0,l=n.length;o<l;o++){const c=n[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const a={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(a[l]=h,s=!0)}s&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const n=this.groups;n.length>0&&(e.data.groups=JSON.parse(JSON.stringify(n)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const a=e.attributes;for(const c in a){const h=a[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],u=s[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const n=e.groups;for(let c=0,h=n.length;c<h;c++){const u=n[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const vu=new tt,jr=new io,nn=new to,xu=new P,on=new P,ln=new P,cn=new P,Zo=new P,hn=new P,yu=new P,un=new P;class ae extends bt{constructor(e=new jt,t=new Hc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=i.length;a<s;a++){const n=i[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[n]=a}}}}getVertexPosition(e,t){const i=this.geometry,a=i.attributes.position,s=i.morphAttributes.position,n=i.morphTargetsRelative;t.fromBufferAttribute(a,e);const o=this.morphTargetInfluences;if(s&&o){hn.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],u=s[l];h!==0&&(Zo.fromBufferAttribute(u,e),n?hn.addScaledVector(Zo,h):hn.addScaledVector(Zo.sub(t),h))}t.add(hn)}return t}raycast(e,t){const i=this.geometry,a=this.material,s=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),nn.copy(i.boundingSphere),nn.applyMatrix4(s),jr.copy(e.ray).recast(e.near),!(nn.containsPoint(jr.origin)===!1&&(jr.intersectSphere(nn,xu)===null||jr.origin.distanceToSquared(xu)>(e.far-e.near)**2))&&(vu.copy(s).invert(),jr.copy(e.ray).applyMatrix4(vu),!(i.boundingBox!==null&&jr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,jr)))}_computeIntersections(e,t,i){let a;const s=this.geometry,n=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(n))for(let g=0,_=d.length;g<_;g++){const f=d[g],m=n[f.materialIndex],S=Math.max(f.start,p.start),x=Math.min(o.count,Math.min(f.start+f.count,p.start+p.count));for(let M=S,C=x;M<C;M+=3){const T=o.getX(M),w=o.getX(M+1),R=o.getX(M+2);a=dn(this,m,e,i,c,h,u,T,w,R),a&&(a.faceIndex=Math.floor(M/3),a.face.materialIndex=f.materialIndex,t.push(a))}}else{const g=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let f=g,m=_;f<m;f+=3){const S=o.getX(f),x=o.getX(f+1),M=o.getX(f+2);a=dn(this,n,e,i,c,h,u,S,x,M),a&&(a.faceIndex=Math.floor(f/3),t.push(a))}}else if(l!==void 0)if(Array.isArray(n))for(let g=0,_=d.length;g<_;g++){const f=d[g],m=n[f.materialIndex],S=Math.max(f.start,p.start),x=Math.min(l.count,Math.min(f.start+f.count,p.start+p.count));for(let M=S,C=x;M<C;M+=3){const T=M,w=M+1,R=M+2;a=dn(this,m,e,i,c,h,u,T,w,R),a&&(a.faceIndex=Math.floor(M/3),a.face.materialIndex=f.materialIndex,t.push(a))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let f=g,m=_;f<m;f+=3){const S=f,x=f+1,M=f+2;a=dn(this,n,e,i,c,h,u,S,x,M),a&&(a.faceIndex=Math.floor(f/3),t.push(a))}}}}function s_(r,e,t,i,a,s,n,o){let l;if(e.side===ii?l=i.intersectTriangle(n,s,a,!0,o):l=i.intersectTriangle(a,s,n,e.side===Ir,o),l===null)return null;un.copy(o),un.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(un);return c<t.near||c>t.far?null:{distance:c,point:un.clone(),object:r}}function dn(r,e,t,i,a,s,n,o,l,c){r.getVertexPosition(o,on),r.getVertexPosition(l,ln),r.getVertexPosition(c,cn);const h=s_(r,e,t,i,on,ln,cn,yu);if(h){const u=new P;Ei.getBarycoord(yu,on,ln,cn,u),a&&(h.uv=Ei.getInterpolatedAttribute(a,o,l,c,u,new ie)),s&&(h.uv1=Ei.getInterpolatedAttribute(s,o,l,c,u,new ie)),n&&(h.normal=Ei.getInterpolatedAttribute(n,o,l,c,u,new P),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new P,materialIndex:0};Ei.getNormal(on,ln,cn,d.normal),h.face=d,h.barycoord=u}return h}class Nt extends jt{constructor(e=1,t=1,i=1,a=1,s=1,n=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:a,heightSegments:s,depthSegments:n};const o=this;a=Math.floor(a),s=Math.floor(s),n=Math.floor(n);const l=[],c=[],h=[],u=[];let d=0,p=0;g("z","y","x",-1,-1,i,t,e,n,s,0),g("z","y","x",1,-1,i,t,-e,n,s,1),g("x","z","y",1,1,e,i,t,a,n,2),g("x","z","y",1,-1,e,i,-t,a,n,3),g("x","y","z",1,-1,e,t,i,a,s,4),g("x","y","z",-1,-1,e,t,-i,a,s,5),this.setIndex(l),this.setAttribute("position",new mt(c,3)),this.setAttribute("normal",new mt(h,3)),this.setAttribute("uv",new mt(u,2));function g(_,f,m,S,x,M,C,T,w,R,V){const v=M/w,b=C/R,O=M/2,N=C/2,B=T/2,j=w+1,z=R+1;let K=0,H=0;const te=new P;for(let he=0;he<z;he++){const Me=he*b-N;for(let Be=0;Be<j;Be++){const Fe=Be*v-O;te[_]=Fe*S,te[f]=Me*x,te[m]=B,c.push(te.x,te.y,te.z),te[_]=0,te[f]=0,te[m]=T>0?1:-1,h.push(te.x,te.y,te.z),u.push(Be/w),u.push(1-he/R),K+=1}}for(let he=0;he<R;he++)for(let Me=0;Me<w;Me++){const Be=d+Me+j*he,Fe=d+Me+j*(he+1),X=d+(Me+1)+j*(he+1),Q=d+(Me+1)+j*he;l.push(Be,Fe,Q),l.push(Fe,X,Q),H+=6}o.addGroup(p,H,V),p+=H,d+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ss(r){const e={};for(const t in r){e[t]={};for(const i in r[t]){const a=r[t][i];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=a.clone():Array.isArray(a)?e[t][i]=a.slice():e[t][i]=a}}return e}function Xt(r){const e={};for(let t=0;t<r.length;t++){const i=ss(r[t]);for(const a in i)e[a]=i[a]}return e}function n_(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Pp(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ye.workingColorSpace}const o_={clone:ss,merge:Xt};var l_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,c_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ur extends pa{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=l_,this.fragmentShader=c_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ss(e.uniforms),this.uniformsGroups=n_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const s=this.uniforms[a].value;s&&s.isTexture?t.uniforms[a]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[a]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[a]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[a]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[a]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[a]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[a]={type:"m4",value:s.toArray()}:t.uniforms[a]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Lp extends bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tt,this.projectionMatrix=new tt,this.projectionMatrixInverse=new tt,this.coordinateSystem=or}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const xr=new P,Mu=new ie,Su=new ie;class ui extends Lp{constructor(e=50,t=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=dc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Dn*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return dc*2*Math.atan(Math.tan(Dn*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){xr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(xr.x,xr.y).multiplyScalar(-e/xr.z),xr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(xr.x,xr.y).multiplyScalar(-e/xr.z)}getViewSize(e,t){return this.getViewBounds(e,Mu,Su),t.subVectors(Su,Mu)}setViewOffset(e,t,i,a,s,n){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=a,this.view.width=s,this.view.height=n,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Dn*.5*this.fov)/this.zoom,i=2*t,a=this.aspect*i,s=-.5*a;const n=this.view;if(this.view!==null&&this.view.enabled){const l=n.fullWidth,c=n.fullHeight;s+=n.offsetX*a/l,t-=n.offsetY*i/c,a*=n.width/l,i*=n.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+a,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Pa=-90,La=1;class h_ extends bt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new ui(Pa,La,e,t);a.layers=this.layers,this.add(a);const s=new ui(Pa,La,e,t);s.layers=this.layers,this.add(s);const n=new ui(Pa,La,e,t);n.layers=this.layers,this.add(n);const o=new ui(Pa,La,e,t);o.layers=this.layers,this.add(o);const l=new ui(Pa,La,e,t);l.layers=this.layers,this.add(l);const c=new ui(Pa,La,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,a,s,n,o,l]=t;for(const c of t)this.remove(c);if(e===or)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),n.up.set(0,0,1),n.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===qn)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),n.up.set(0,0,-1),n.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,n,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,a),e.render(t,s),e.setRenderTarget(i,1,a),e.render(t,n),e.setRenderTarget(i,2,a),e.render(t,o),e.setRenderTarget(i,3,a),e.render(t,l),e.setRenderTarget(i,4,a),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,a),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Dp extends Gt{constructor(e,t,i,a,s,n,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:ts,super(e,t,i,a,s,n,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class u_ extends la{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},a=[i,i,i,i,i,i];this.texture=new Dp(a,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ii}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new Nt(5,5,5),s=new Ur({name:"CubemapFromEquirect",uniforms:ss(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ii,blending:Ar});s.uniforms.tEquirect.value=t;const n=new ae(a,s),o=t.minFilter;return t.minFilter===ia&&(t.minFilter=Ii),new h_(1,10,this).update(e,n),t.minFilter=o,n.geometry.dispose(),n.material.dispose(),this}clear(e,t,i,a){const s=e.getRenderTarget();for(let n=0;n<6;n++)e.setRenderTarget(this,n),e.clear(t,i,a);e.setRenderTarget(s)}}const Jo=new P,d_=new P,p_=new Ne;class yr{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,a){return this.normal.set(e,t,i),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const a=Jo.subVectors(i,t).cross(d_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Jo),a=this.normal.dot(i);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/a;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||p_.getNormalMatrix(e),a=this.coplanarPoint(Jo).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Yr=new to,pn=new P;class Wc{constructor(e=new yr,t=new yr,i=new yr,a=new yr,s=new yr,n=new yr){this.planes=[e,t,i,a,s,n]}set(e,t,i,a,s,n){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(a),o[4].copy(s),o[5].copy(n),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=or){const i=this.planes,a=e.elements,s=a[0],n=a[1],o=a[2],l=a[3],c=a[4],h=a[5],u=a[6],d=a[7],p=a[8],g=a[9],_=a[10],f=a[11],m=a[12],S=a[13],x=a[14],M=a[15];if(i[0].setComponents(l-s,d-c,f-p,M-m).normalize(),i[1].setComponents(l+s,d+c,f+p,M+m).normalize(),i[2].setComponents(l+n,d+h,f+g,M+S).normalize(),i[3].setComponents(l-n,d-h,f-g,M-S).normalize(),i[4].setComponents(l-o,d-u,f-_,M-x).normalize(),t===or)i[5].setComponents(l+o,d+u,f+_,M+x).normalize();else if(t===qn)i[5].setComponents(o,u,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Yr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Yr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Yr)}intersectsSprite(e){return Yr.center.set(0,0,0),Yr.radius=.7071067811865476,Yr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Yr)}intersectsSphere(e){const t=this.planes,i=e.center,a=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const a=t[i];if(pn.x=a.normal.x>0?e.max.x:e.min.x,pn.y=a.normal.y>0?e.max.y:e.min.y,pn.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(pn)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ip(){let r=null,e=!1,t=null,i=null;function a(s,n){t(s,n),i=r.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(i=r.requestAnimationFrame(a),e=!0)},stop:function(){r.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function f_(r){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,u=c.byteLength,d=r.createBuffer();r.bindBuffer(l,d),r.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=r.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=r.HALF_FLOAT:p=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=r.SHORT;else if(c instanceof Uint32Array)p=r.UNSIGNED_INT;else if(c instanceof Int32Array)p=r.INT;else if(c instanceof Int8Array)p=r.BYTE;else if(c instanceof Uint8Array)p=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,l,c){const h=l.array,u=l.updateRanges;if(r.bindBuffer(c,o),u.length===0)r.bufferSubData(c,0,h);else{u.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<u.length;p++){const g=u[d],_=u[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let p=0,g=u.length;p<g;p++){const _=u[p];r.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(r.deleteBuffer(l.buffer),e.delete(o))}function n(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:a,remove:s,update:n}}class Fr extends jt{constructor(e=1,t=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:a};const s=e/2,n=t/2,o=Math.floor(i),l=Math.floor(a),c=o+1,h=l+1,u=e/o,d=t/l,p=[],g=[],_=[],f=[];for(let m=0;m<h;m++){const S=m*d-n;for(let x=0;x<c;x++){const M=x*u-s;g.push(M,-S,0),_.push(0,0,1),f.push(x/o),f.push(1-m/l)}}for(let m=0;m<l;m++)for(let S=0;S<o;S++){const x=S+c*m,M=S+c*(m+1),C=S+1+c*(m+1),T=S+1+c*m;p.push(x,M,T),p.push(M,C,T)}this.setIndex(p),this.setAttribute("position",new mt(g,3)),this.setAttribute("normal",new mt(_,3)),this.setAttribute("uv",new mt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fr(e.width,e.height,e.widthSegments,e.heightSegments)}}var m_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,g_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,__=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,v_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,x_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,y_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,M_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,S_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,E_=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,b_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,w_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,T_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,A_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,R_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,C_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,P_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,L_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,D_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,I_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,U_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,O_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,N_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,F_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,z_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,B_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,k_=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,G_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,V_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,H_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,W_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,X_="gl_FragColor = linearToOutputTexel( gl_FragColor );",j_=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Y_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,q_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,K_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Z_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,J_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,$_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Q_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ev=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,tv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,iv=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,rv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,av=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,sv=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,nv=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ov=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,lv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,cv=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,hv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,uv=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,dv=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,pv=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,fv=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,mv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,gv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,_v=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,vv=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xv=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yv=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Mv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Sv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ev=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,bv=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Tv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Av=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Rv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Cv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Pv=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Lv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Dv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Iv=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Uv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ov=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Nv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Fv=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,zv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Bv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,kv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Gv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Vv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Hv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Wv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Xv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,jv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Yv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Kv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Zv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Jv=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,$v=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Qv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,e0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,t0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,i0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,r0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,a0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,s0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,n0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,o0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,l0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,c0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,h0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,u0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,d0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,p0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const f0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,m0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,g0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,v0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,x0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,y0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,M0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,S0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,E0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,b0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,w0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,T0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,A0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,R0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,C0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,P0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,L0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,D0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,I0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,U0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,O0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,N0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,F0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,z0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,B0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,k0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,G0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,V0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,H0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,W0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,X0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,j0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Y0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Oe={alphahash_fragment:m_,alphahash_pars_fragment:g_,alphamap_fragment:__,alphamap_pars_fragment:v_,alphatest_fragment:x_,alphatest_pars_fragment:y_,aomap_fragment:M_,aomap_pars_fragment:S_,batching_pars_vertex:E_,batching_vertex:b_,begin_vertex:w_,beginnormal_vertex:T_,bsdfs:A_,iridescence_fragment:R_,bumpmap_pars_fragment:C_,clipping_planes_fragment:P_,clipping_planes_pars_fragment:L_,clipping_planes_pars_vertex:D_,clipping_planes_vertex:I_,color_fragment:U_,color_pars_fragment:O_,color_pars_vertex:N_,color_vertex:F_,common:z_,cube_uv_reflection_fragment:B_,defaultnormal_vertex:k_,displacementmap_pars_vertex:G_,displacementmap_vertex:V_,emissivemap_fragment:H_,emissivemap_pars_fragment:W_,colorspace_fragment:X_,colorspace_pars_fragment:j_,envmap_fragment:Y_,envmap_common_pars_fragment:q_,envmap_pars_fragment:K_,envmap_pars_vertex:Z_,envmap_physical_pars_fragment:ov,envmap_vertex:J_,fog_vertex:$_,fog_pars_vertex:Q_,fog_fragment:ev,fog_pars_fragment:tv,gradientmap_pars_fragment:iv,lightmap_pars_fragment:rv,lights_lambert_fragment:av,lights_lambert_pars_fragment:sv,lights_pars_begin:nv,lights_toon_fragment:lv,lights_toon_pars_fragment:cv,lights_phong_fragment:hv,lights_phong_pars_fragment:uv,lights_physical_fragment:dv,lights_physical_pars_fragment:pv,lights_fragment_begin:fv,lights_fragment_maps:mv,lights_fragment_end:gv,logdepthbuf_fragment:_v,logdepthbuf_pars_fragment:vv,logdepthbuf_pars_vertex:xv,logdepthbuf_vertex:yv,map_fragment:Mv,map_pars_fragment:Sv,map_particle_fragment:Ev,map_particle_pars_fragment:bv,metalnessmap_fragment:wv,metalnessmap_pars_fragment:Tv,morphinstance_vertex:Av,morphcolor_vertex:Rv,morphnormal_vertex:Cv,morphtarget_pars_vertex:Pv,morphtarget_vertex:Lv,normal_fragment_begin:Dv,normal_fragment_maps:Iv,normal_pars_fragment:Uv,normal_pars_vertex:Ov,normal_vertex:Nv,normalmap_pars_fragment:Fv,clearcoat_normal_fragment_begin:zv,clearcoat_normal_fragment_maps:Bv,clearcoat_pars_fragment:kv,iridescence_pars_fragment:Gv,opaque_fragment:Vv,packing:Hv,premultiplied_alpha_fragment:Wv,project_vertex:Xv,dithering_fragment:jv,dithering_pars_fragment:Yv,roughnessmap_fragment:qv,roughnessmap_pars_fragment:Kv,shadowmap_pars_fragment:Zv,shadowmap_pars_vertex:Jv,shadowmap_vertex:$v,shadowmask_pars_fragment:Qv,skinbase_vertex:e0,skinning_pars_vertex:t0,skinning_vertex:i0,skinnormal_vertex:r0,specularmap_fragment:a0,specularmap_pars_fragment:s0,tonemapping_fragment:n0,tonemapping_pars_fragment:o0,transmission_fragment:l0,transmission_pars_fragment:c0,uv_pars_fragment:h0,uv_pars_vertex:u0,uv_vertex:d0,worldpos_vertex:p0,background_vert:f0,background_frag:m0,backgroundCube_vert:g0,backgroundCube_frag:_0,cube_vert:v0,cube_frag:x0,depth_vert:y0,depth_frag:M0,distanceRGBA_vert:S0,distanceRGBA_frag:E0,equirect_vert:b0,equirect_frag:w0,linedashed_vert:T0,linedashed_frag:A0,meshbasic_vert:R0,meshbasic_frag:C0,meshlambert_vert:P0,meshlambert_frag:L0,meshmatcap_vert:D0,meshmatcap_frag:I0,meshnormal_vert:U0,meshnormal_frag:O0,meshphong_vert:N0,meshphong_frag:F0,meshphysical_vert:z0,meshphysical_frag:B0,meshtoon_vert:k0,meshtoon_frag:G0,points_vert:V0,points_frag:H0,shadow_vert:W0,shadow_frag:X0,sprite_vert:j0,sprite_frag:Y0},re={common:{diffuse:{value:new Ue(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ne}},envmap:{envMap:{value:null},envMapRotation:{value:new Ne},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ne},normalScale:{value:new ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0},uvTransform:{value:new Ne}},sprite:{diffuse:{value:new Ue(16777215)},opacity:{value:1},center:{value:new ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}}},Bi={basic:{uniforms:Xt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:Xt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Ue(0)}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:Xt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Ue(0)},specular:{value:new Ue(1118481)},shininess:{value:30}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:Xt([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new Ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:Xt([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new Ue(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:Xt([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:Xt([re.points,re.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:Xt([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:Xt([re.common,re.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:Xt([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:Xt([re.sprite,re.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ne}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distanceRGBA:{uniforms:Xt([re.common,re.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distanceRGBA_vert,fragmentShader:Oe.distanceRGBA_frag},shadow:{uniforms:Xt([re.lights,re.fog,{color:{value:new Ue(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};Bi.physical={uniforms:Xt([Bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ne},clearcoatNormalScale:{value:new ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ne},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ne},sheen:{value:0},sheenColor:{value:new Ue(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ne},transmissionSamplerSize:{value:new ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ne},attenuationDistance:{value:0},attenuationColor:{value:new Ue(0)},specularColor:{value:new Ue(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ne},anisotropyVector:{value:new ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ne}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const fn={r:0,b:0,g:0},qr=new Wi,q0=new tt;function K0(r,e,t,i,a,s,n){const o=new Ue(0);let l=s===!0?0:1,c,h,u=null,d=0,p=null;function g(S){let x=S.isScene===!0?S.background:null;return x&&x.isTexture&&(x=(S.backgroundBlurriness>0?t:e).get(x)),x}function _(S){let x=!1;const M=g(S);M===null?m(o,l):M&&M.isColor&&(m(M,1),x=!0);const C=r.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,n):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,n),(r.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function f(S,x){const M=g(x);M&&(M.isCubeTexture||M.mapping===Qn)?(h===void 0&&(h=new ae(new Nt(1,1,1),new Ur({name:"BackgroundCubeMaterial",uniforms:ss(Bi.backgroundCube.uniforms),vertexShader:Bi.backgroundCube.vertexShader,fragmentShader:Bi.backgroundCube.fragmentShader,side:ii,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,T,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(h)),qr.copy(x.backgroundRotation),qr.x*=-1,qr.y*=-1,qr.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(qr.y*=-1,qr.z*=-1),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(q0.makeRotationFromEuler(qr)),h.material.toneMapped=Ye.getTransfer(M.colorSpace)!==st,(u!==M||d!==M.version||p!==r.toneMapping)&&(h.material.needsUpdate=!0,u=M,d=M.version,p=r.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new ae(new Fr(2,2),new Ur({name:"BackgroundMaterial",uniforms:ss(Bi.background.uniforms),vertexShader:Bi.background.vertexShader,fragmentShader:Bi.background.fragmentShader,side:Ir,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=Ye.getTransfer(M.colorSpace)!==st,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||d!==M.version||p!==r.toneMapping)&&(c.material.needsUpdate=!0,u=M,d=M.version,p=r.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function m(S,x){S.getRGB(fn,Pp(r)),i.buffers.color.setClear(fn.r,fn.g,fn.b,x,n)}return{getClearColor:function(){return o},setClearColor:function(S,x=1){o.set(S),l=x,m(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,m(o,l)},render:_,addToRenderList:f}}function Z0(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),i={},a=d(null);let s=a,n=!1;function o(v,b,O,N,B){let j=!1;const z=u(N,O,b);s!==z&&(s=z,c(s.object)),j=p(v,N,O,B),j&&g(v,N,O,B),B!==null&&e.update(B,r.ELEMENT_ARRAY_BUFFER),(j||n)&&(n=!1,M(v,b,O,N),B!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function l(){return r.createVertexArray()}function c(v){return r.bindVertexArray(v)}function h(v){return r.deleteVertexArray(v)}function u(v,b,O){const N=O.wireframe===!0;let B=i[v.id];B===void 0&&(B={},i[v.id]=B);let j=B[b.id];j===void 0&&(j={},B[b.id]=j);let z=j[N];return z===void 0&&(z=d(l()),j[N]=z),z}function d(v){const b=[],O=[],N=[];for(let B=0;B<t;B++)b[B]=0,O[B]=0,N[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:O,attributeDivisors:N,object:v,attributes:{},index:null}}function p(v,b,O,N){const B=s.attributes,j=b.attributes;let z=0;const K=O.getAttributes();for(const H in K)if(K[H].location>=0){const te=B[H];let he=j[H];if(he===void 0&&(H==="instanceMatrix"&&v.instanceMatrix&&(he=v.instanceMatrix),H==="instanceColor"&&v.instanceColor&&(he=v.instanceColor)),te===void 0||te.attribute!==he||he&&te.data!==he.data)return!0;z++}return s.attributesNum!==z||s.index!==N}function g(v,b,O,N){const B={},j=b.attributes;let z=0;const K=O.getAttributes();for(const H in K)if(K[H].location>=0){let te=j[H];te===void 0&&(H==="instanceMatrix"&&v.instanceMatrix&&(te=v.instanceMatrix),H==="instanceColor"&&v.instanceColor&&(te=v.instanceColor));const he={};he.attribute=te,te&&te.data&&(he.data=te.data),B[H]=he,z++}s.attributes=B,s.attributesNum=z,s.index=N}function _(){const v=s.newAttributes;for(let b=0,O=v.length;b<O;b++)v[b]=0}function f(v){m(v,0)}function m(v,b){const O=s.newAttributes,N=s.enabledAttributes,B=s.attributeDivisors;O[v]=1,N[v]===0&&(r.enableVertexAttribArray(v),N[v]=1),B[v]!==b&&(r.vertexAttribDivisor(v,b),B[v]=b)}function S(){const v=s.newAttributes,b=s.enabledAttributes;for(let O=0,N=b.length;O<N;O++)b[O]!==v[O]&&(r.disableVertexAttribArray(O),b[O]=0)}function x(v,b,O,N,B,j,z){z===!0?r.vertexAttribIPointer(v,b,O,B,j):r.vertexAttribPointer(v,b,O,N,B,j)}function M(v,b,O,N){_();const B=N.attributes,j=O.getAttributes(),z=b.defaultAttributeValues;for(const K in j){const H=j[K];if(H.location>=0){let te=B[K];if(te===void 0&&(K==="instanceMatrix"&&v.instanceMatrix&&(te=v.instanceMatrix),K==="instanceColor"&&v.instanceColor&&(te=v.instanceColor)),te!==void 0){const he=te.normalized,Me=te.itemSize,Be=e.get(te);if(Be===void 0)continue;const Fe=Be.buffer,X=Be.type,Q=Be.bytesPerElement,_e=X===r.INT||X===r.UNSIGNED_INT||te.gpuType===Oc;if(te.isInterleavedBufferAttribute){const pe=te.data,De=pe.stride,Te=te.offset;if(pe.isInstancedInterleavedBuffer){for(let He=0;He<H.locationSize;He++)m(H.location+He,pe.meshPerAttribute);v.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let He=0;He<H.locationSize;He++)f(H.location+He);r.bindBuffer(r.ARRAY_BUFFER,Fe);for(let He=0;He<H.locationSize;He++)x(H.location+He,Me/H.locationSize,X,he,De*Q,(Te+Me/H.locationSize*He)*Q,_e)}else{if(te.isInstancedBufferAttribute){for(let pe=0;pe<H.locationSize;pe++)m(H.location+pe,te.meshPerAttribute);v.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let pe=0;pe<H.locationSize;pe++)f(H.location+pe);r.bindBuffer(r.ARRAY_BUFFER,Fe);for(let pe=0;pe<H.locationSize;pe++)x(H.location+pe,Me/H.locationSize,X,he,Me*Q,Me/H.locationSize*pe*Q,_e)}}else if(z!==void 0){const he=z[K];if(he!==void 0)switch(he.length){case 2:r.vertexAttrib2fv(H.location,he);break;case 3:r.vertexAttrib3fv(H.location,he);break;case 4:r.vertexAttrib4fv(H.location,he);break;default:r.vertexAttrib1fv(H.location,he)}}}}S()}function C(){R();for(const v in i){const b=i[v];for(const O in b){const N=b[O];for(const B in N)h(N[B].object),delete N[B];delete b[O]}delete i[v]}}function T(v){if(i[v.id]===void 0)return;const b=i[v.id];for(const O in b){const N=b[O];for(const B in N)h(N[B].object),delete N[B];delete b[O]}delete i[v.id]}function w(v){for(const b in i){const O=i[b];if(O[v.id]===void 0)continue;const N=O[v.id];for(const B in N)h(N[B].object),delete N[B];delete O[v.id]}}function R(){V(),n=!0,s!==a&&(s=a,c(s.object))}function V(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:R,resetDefaultState:V,dispose:C,releaseStatesOfGeometry:T,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:f,disableUnusedAttributes:S}}function J0(r,e,t){let i;function a(c){i=c}function s(c,h){r.drawArrays(i,c,h),t.update(h,i,1)}function n(c,h,u){u!==0&&(r.drawArraysInstanced(i,c,h,u),t.update(h,i,u))}function o(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let d=0;for(let p=0;p<u;p++)d+=h[p];t.update(d,i,1)}function l(c,h,u,d){if(u===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)n(c[g],h[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_];for(let _=0;_<d.length;_++)t.update(g,i,d[_])}}this.setMode=a,this.render=s,this.renderInstances=n,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function $0(r,e,t,i){let a;function s(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");a=r.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function n(w){return!(w!==Ui&&i.convert(w)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const R=w===Vs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==ur&&i.convert(w)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==nr&&!R)}function l(w){if(w==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(d===!0){const w=e.get("EXT_clip_control");w.clipControlEXT(w.LOWER_LEFT_EXT,w.ZERO_TO_ONE_EXT)}const p=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),f=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),m=r.getParameter(r.MAX_VERTEX_ATTRIBS),S=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),x=r.getParameter(r.MAX_VARYING_VECTORS),M=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,T=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:n,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:f,maxAttributes:m,maxVertexUniforms:S,maxVaryings:x,maxFragmentUniforms:M,vertexTextures:C,maxSamples:T}}function Q0(r){const e=this;let t=null,i=0,a=!1,s=!1;const n=new yr,o=new Ne,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||i!==0||a;return a=d,i=u.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,p){const g=u.clippingPlanes,_=u.clipIntersection,f=u.clipShadows,m=r.get(u);if(!a||g===null||g.length===0||s&&!f)s?h(null):c();else{const S=s?0:i,x=S*4;let M=m.clippingState||null;l.value=M,M=h(g,d,x,p);for(let C=0;C!==x;++C)M[C]=t[C];m.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,p,g){const _=u!==null?u.length:0;let f=null;if(_!==0){if(f=l.value,g!==!0||f===null){const m=p+_*4,S=d.matrixWorldInverse;o.getNormalMatrix(S),(f===null||f.length<m)&&(f=new Float32Array(m));for(let x=0,M=p;x!==_;++x,M+=4)n.copy(u[x]).applyMatrix4(S,o),n.normal.toArray(f,M),f[M+3]=n.constant}l.value=f,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,f}}function ex(r){let e=new WeakMap;function t(n,o){return o===Ol?n.mapping=ts:o===Nl&&(n.mapping=is),n}function i(n){if(n&&n.isTexture){const o=n.mapping;if(o===Ol||o===Nl)if(e.has(n)){const l=e.get(n).texture;return t(l,n.mapping)}else{const l=n.image;if(l&&l.height>0){const c=new u_(l.height);return c.fromEquirectangularTexture(r,n),e.set(n,c),n.addEventListener("dispose",a),t(c.texture,n.mapping)}else return null}}return n}function a(n){const o=n.target;o.removeEventListener("dispose",a);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Up extends Lp{constructor(e=-1,t=1,i=1,a=-1,s=.1,n=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=a,this.near=s,this.far=n,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,a,s,n){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=a,this.view.width=s,this.view.height=n,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let s=i-e,n=i+e,o=a+t,l=a-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,n=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,n,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ka=4,Eu=[.125,.215,.35,.446,.526,.582],Qr=20,$o=new Up,bu=new Ue;let Qo=null,el=0,tl=0,il=!1;const Jr=(1+Math.sqrt(5))/2,Da=1/Jr,wu=[new P(-Jr,Da,0),new P(Jr,Da,0),new P(-Da,0,Jr),new P(Da,0,Jr),new P(0,Jr,-Da),new P(0,Jr,Da),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)];class Tu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,a=100){Qo=this._renderer.getRenderTarget(),el=this._renderer.getActiveCubeFace(),tl=this._renderer.getActiveMipmapLevel(),il=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,a,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Cu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ru(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Qo,el,tl),this._renderer.xr.enabled=il,e.scissorTest=!1,mn(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ts||e.mapping===is?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Qo=this._renderer.getRenderTarget(),el=this._renderer.getActiveCubeFace(),tl=this._renderer.getActiveMipmapLevel(),il=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Ii,minFilter:Ii,generateMipmaps:!1,type:Vs,format:Ui,colorSpace:Nr,depthBuffer:!1},a=Au(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Au(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=tx(s)),this._blurMaterial=ix(s,e,t)}return a}_compileMaterial(e){const t=new ae(this._lodPlanes[0],e);this._renderer.compile(t,$o)}_sceneToCubeUV(e,t,i,a){const s=new ui(90,1,t,i),n=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],l=this._renderer,c=l.autoClear,h=l.toneMapping;l.getClearColor(bu),l.toneMapping=Rr,l.autoClear=!1;const u=new Hc({name:"PMREM.Background",side:ii,depthWrite:!1,depthTest:!1}),d=new ae(new Nt,u);let p=!1;const g=e.background;g?g.isColor&&(u.color.copy(g),e.background=null,p=!0):(u.color.copy(bu),p=!0);for(let _=0;_<6;_++){const f=_%3;f===0?(s.up.set(0,n[_],0),s.lookAt(o[_],0,0)):f===1?(s.up.set(0,0,n[_]),s.lookAt(0,o[_],0)):(s.up.set(0,n[_],0),s.lookAt(0,0,o[_]));const m=this._cubeSize;mn(a,f*m,_>2?m:0,m,m),l.setRenderTarget(a),p&&l.render(d,s),l.render(e,s)}d.geometry.dispose(),d.material.dispose(),l.toneMapping=h,l.autoClear=c,e.background=g}_textureToCubeUV(e,t){const i=this._renderer,a=e.mapping===ts||e.mapping===is;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Cu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ru());const s=a?this._cubemapMaterial:this._equirectMaterial,n=new ae(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;mn(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(n,$o)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const a=this._lodPlanes.length;for(let s=1;s<a;s++){const n=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=wu[(a-s-1)%wu.length];this._blur(e,s-1,s,n,o)}t.autoClear=i}_blur(e,t,i,a,s){const n=this._pingPongRenderTarget;this._halfBlur(e,n,t,i,a,"latitudinal",s),this._halfBlur(n,e,i,i,a,"longitudinal",s)}_halfBlur(e,t,i,a,s,n,o){const l=this._renderer,c=this._blurMaterial;n!=="latitudinal"&&n!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new ae(this._lodPlanes[a],c),d=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Qr-1),_=s/g,f=isFinite(s)?1+Math.floor(h*_):Qr;f>Qr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${Qr}`);const m=[];let S=0;for(let w=0;w<Qr;++w){const R=w/_,V=Math.exp(-R*R/2);m.push(V),w===0?S+=V:w<f&&(S+=2*V)}for(let w=0;w<m.length;w++)m[w]=m[w]/S;d.envMap.value=e.texture,d.samples.value=f,d.weights.value=m,d.latitudinal.value=n==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-i;const M=this._sizeLods[a],C=3*M*(a>x-ka?a-x+ka:0),T=4*(this._cubeSize-M);mn(t,C,T,3*M,2*M),l.setRenderTarget(t),l.render(u,$o)}}function tx(r){const e=[],t=[],i=[];let a=r;const s=r-ka+1+Eu.length;for(let n=0;n<s;n++){const o=Math.pow(2,a);t.push(o);let l=1/o;n>r-ka?l=Eu[n-r+ka-1]:n===0&&(l=0),i.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,_=3,f=2,m=1,S=new Float32Array(_*g*p),x=new Float32Array(f*g*p),M=new Float32Array(m*g*p);for(let T=0;T<p;T++){const w=T%3*2/3-1,R=T>2?0:-1,V=[w,R,0,w+2/3,R,0,w+2/3,R+1,0,w,R,0,w+2/3,R+1,0,w,R+1,0];S.set(V,_*g*T),x.set(d,f*g*T);const v=[T,T,T,T,T,T];M.set(v,m*g*T)}const C=new jt;C.setAttribute("position",new Ai(S,_)),C.setAttribute("uv",new Ai(x,f)),C.setAttribute("faceIndex",new Ai(M,m)),e.push(C),a>ka&&a--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Au(r,e,t){const i=new la(r,e,t);return i.texture.mapping=Qn,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function mn(r,e,t,i,a){r.viewport.set(e,t,i,a),r.scissor.set(e,t,i,a)}function ix(r,e,t){const i=new Float32Array(Qr),a=new P(0,1,0);return new Ur({name:"SphericalGaussianBlur",defines:{n:Qr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Xc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ar,depthTest:!1,depthWrite:!1})}function Ru(){return new Ur({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ar,depthTest:!1,depthWrite:!1})}function Cu(){return new Ur({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ar,depthTest:!1,depthWrite:!1})}function Xc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function rx(r){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Ol||l===Nl,h=l===ts||l===is;if(c||h){let u=e.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new Tu(r)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const p=o.image;return c&&p&&p.height>0||h&&p&&a(p)?(t===null&&(t=new Tu(r)),u=c?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",s),u.texture):null}}}return o}function a(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function n(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:n}}function ax(r){const e={};function t(i){if(e[i]!==void 0)return e[i];let a;switch(i){case"WEBGL_depth_texture":a=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=r.getExtension(i)}return e[i]=a,a}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const a=t(i);return a===null&&In("THREE.WebGLRenderer: "+i+" extension not supported."),a}}}function sx(r,e,t,i){const a={},s=new WeakMap;function n(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let f=0,m=_.length;f<m;f++)e.remove(_[f])}d.removeEventListener("dispose",n),delete a[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return a[d.id]===!0||(d.addEventListener("dispose",n),a[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)e.update(d[g],r.ARRAY_BUFFER);const p=u.morphAttributes;for(const g in p){const _=p[g];for(let f=0,m=_.length;f<m;f++)e.update(_[f],r.ARRAY_BUFFER)}}function c(u){const d=[],p=u.index,g=u.attributes.position;let _=0;if(p!==null){const S=p.array;_=p.version;for(let x=0,M=S.length;x<M;x+=3){const C=S[x+0],T=S[x+1],w=S[x+2];d.push(C,T,T,w,w,C)}}else if(g!==void 0){const S=g.array;_=g.version;for(let x=0,M=S.length/3-1;x<M;x+=3){const C=x+0,T=x+1,w=x+2;d.push(C,T,T,w,w,C)}}else return;const f=new(bp(d)?Cp:Rp)(d,1);f.version=_;const m=s.get(u);m&&e.remove(m),s.set(u,f)}function h(u){const d=s.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return s.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function nx(r,e,t){let i;function a(d){i=d}let s,n;function o(d){s=d.type,n=d.bytesPerElement}function l(d,p){r.drawElements(i,p,s,d*n),t.update(p,i,1)}function c(d,p,g){g!==0&&(r.drawElementsInstanced(i,p,s,d*n,g),t.update(p,i,g))}function h(d,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,d,0,g);let _=0;for(let f=0;f<g;f++)_+=p[f];t.update(_,i,1)}function u(d,p,g,_){if(g===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<d.length;m++)c(d[m]/n,p[m],_[m]);else{f.multiDrawElementsInstancedWEBGL(i,p,0,s,d,0,_,0,g);let m=0;for(let S=0;S<g;S++)m+=p[S];for(let S=0;S<_.length;S++)t.update(m,i,_[S])}}this.setMode=a,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function ox(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,n,o){switch(t.calls++,n){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",n);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:i}}function lx(r,e,t){const i=new WeakMap,a=new $e;function s(n,o,l){const c=n.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=i.get(o);if(d===void 0||d.count!==u){let p=function(){R.dispose(),i.delete(o),o.removeEventListener("dispose",p)};d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,f=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],S=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let M=0;g===!0&&(M=1),_===!0&&(M=2),f===!0&&(M=3);let C=o.attributes.position.count*M,T=1;C>e.maxTextureSize&&(T=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const w=new Float32Array(C*T*4*u),R=new Tp(w,C,T,u);R.type=nr,R.needsUpdate=!0;const V=M*4;for(let v=0;v<u;v++){const b=m[v],O=S[v],N=x[v],B=C*T*4*v;for(let j=0;j<b.count;j++){const z=j*V;g===!0&&(a.fromBufferAttribute(b,j),w[B+z+0]=a.x,w[B+z+1]=a.y,w[B+z+2]=a.z,w[B+z+3]=0),_===!0&&(a.fromBufferAttribute(O,j),w[B+z+4]=a.x,w[B+z+5]=a.y,w[B+z+6]=a.z,w[B+z+7]=0),f===!0&&(a.fromBufferAttribute(N,j),w[B+z+8]=a.x,w[B+z+9]=a.y,w[B+z+10]=a.z,w[B+z+11]=N.itemSize===4?a.w:1)}}d={count:u,texture:R,size:new ie(C,T)},i.set(o,d),o.addEventListener("dispose",p)}if(n.isInstancedMesh===!0&&n.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",n.morphTexture,t);else{let p=0;for(let _=0;_<c.length;_++)p+=c[_];const g=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(r,"morphTargetBaseInfluence",g),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function cx(r,e,t,i){let a=new WeakMap;function s(l){const c=i.render.frame,h=l.geometry,u=e.get(l,h);if(a.get(u)!==c&&(e.update(u),a.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),a.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),a.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;a.get(d)!==c&&(d.update(),a.set(d,c))}return u}function n(){a=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:n}}class Op extends Gt{constructor(e,t,i,a,s,n,o,l,c,h=ja){if(h!==ja&&h!==as)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===ja&&(i=oa),i===void 0&&h===as&&(i=rs),super(null,a,s,n,o,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Ti,this.minFilter=l!==void 0?l:Ti,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Np=new Gt,Pu=new Op(1,1),Fp=new Tp,zp=new Kg,Bp=new Dp,Lu=[],Du=[],Iu=new Float32Array(16),Uu=new Float32Array(9),Ou=new Float32Array(4);function ls(r,e,t){const i=r[0];if(i<=0||i>0)return r;const a=e*t;let s=Lu[a];if(s===void 0&&(s=new Float32Array(a),Lu[a]=s),e!==0){i.toArray(s,0);for(let n=1,o=0;n!==e;++n)o+=t,r[n].toArray(s,o)}return s}function wt(r,e){if(r.length!==e.length)return!1;for(let t=0,i=r.length;t<i;t++)if(r[t]!==e[t])return!1;return!0}function Tt(r,e){for(let t=0,i=e.length;t<i;t++)r[t]=e[t]}function ro(r,e){let t=Du[e];t===void 0&&(t=new Int32Array(e),Du[e]=t);for(let i=0;i!==e;++i)t[i]=r.allocateTextureUnit();return t}function hx(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function ux(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;r.uniform2fv(this.addr,e),Tt(t,e)}}function dx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(wt(t,e))return;r.uniform3fv(this.addr,e),Tt(t,e)}}function px(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;r.uniform4fv(this.addr,e),Tt(t,e)}}function fx(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(wt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Tt(t,e)}else{if(wt(t,i))return;Ou.set(i),r.uniformMatrix2fv(this.addr,!1,Ou),Tt(t,i)}}function mx(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(wt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Tt(t,e)}else{if(wt(t,i))return;Uu.set(i),r.uniformMatrix3fv(this.addr,!1,Uu),Tt(t,i)}}function gx(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(wt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Tt(t,e)}else{if(wt(t,i))return;Iu.set(i),r.uniformMatrix4fv(this.addr,!1,Iu),Tt(t,i)}}function _x(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function vx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;r.uniform2iv(this.addr,e),Tt(t,e)}}function xx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wt(t,e))return;r.uniform3iv(this.addr,e),Tt(t,e)}}function yx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;r.uniform4iv(this.addr,e),Tt(t,e)}}function Mx(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Sx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;r.uniform2uiv(this.addr,e),Tt(t,e)}}function Ex(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wt(t,e))return;r.uniform3uiv(this.addr,e),Tt(t,e)}}function bx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;r.uniform4uiv(this.addr,e),Tt(t,e)}}function wx(r,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(r.uniform1i(this.addr,a),i[0]=a);let s;this.type===r.SAMPLER_2D_SHADOW?(Pu.compareFunction=Ep,s=Pu):s=Np,t.setTexture2D(e||s,a)}function Tx(r,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(r.uniform1i(this.addr,a),i[0]=a),t.setTexture3D(e||zp,a)}function Ax(r,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(r.uniform1i(this.addr,a),i[0]=a),t.setTextureCube(e||Bp,a)}function Rx(r,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(r.uniform1i(this.addr,a),i[0]=a),t.setTexture2DArray(e||Fp,a)}function Cx(r){switch(r){case 5126:return hx;case 35664:return ux;case 35665:return dx;case 35666:return px;case 35674:return fx;case 35675:return mx;case 35676:return gx;case 5124:case 35670:return _x;case 35667:case 35671:return vx;case 35668:case 35672:return xx;case 35669:case 35673:return yx;case 5125:return Mx;case 36294:return Sx;case 36295:return Ex;case 36296:return bx;case 35678:case 36198:case 36298:case 36306:case 35682:return wx;case 35679:case 36299:case 36307:return Tx;case 35680:case 36300:case 36308:case 36293:return Ax;case 36289:case 36303:case 36311:case 36292:return Rx}}function Px(r,e){r.uniform1fv(this.addr,e)}function Lx(r,e){const t=ls(e,this.size,2);r.uniform2fv(this.addr,t)}function Dx(r,e){const t=ls(e,this.size,3);r.uniform3fv(this.addr,t)}function Ix(r,e){const t=ls(e,this.size,4);r.uniform4fv(this.addr,t)}function Ux(r,e){const t=ls(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Ox(r,e){const t=ls(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Nx(r,e){const t=ls(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Fx(r,e){r.uniform1iv(this.addr,e)}function zx(r,e){r.uniform2iv(this.addr,e)}function Bx(r,e){r.uniform3iv(this.addr,e)}function kx(r,e){r.uniform4iv(this.addr,e)}function Gx(r,e){r.uniform1uiv(this.addr,e)}function Vx(r,e){r.uniform2uiv(this.addr,e)}function Hx(r,e){r.uniform3uiv(this.addr,e)}function Wx(r,e){r.uniform4uiv(this.addr,e)}function Xx(r,e,t){const i=this.cache,a=e.length,s=ro(t,a);wt(i,s)||(r.uniform1iv(this.addr,s),Tt(i,s));for(let n=0;n!==a;++n)t.setTexture2D(e[n]||Np,s[n])}function jx(r,e,t){const i=this.cache,a=e.length,s=ro(t,a);wt(i,s)||(r.uniform1iv(this.addr,s),Tt(i,s));for(let n=0;n!==a;++n)t.setTexture3D(e[n]||zp,s[n])}function Yx(r,e,t){const i=this.cache,a=e.length,s=ro(t,a);wt(i,s)||(r.uniform1iv(this.addr,s),Tt(i,s));for(let n=0;n!==a;++n)t.setTextureCube(e[n]||Bp,s[n])}function qx(r,e,t){const i=this.cache,a=e.length,s=ro(t,a);wt(i,s)||(r.uniform1iv(this.addr,s),Tt(i,s));for(let n=0;n!==a;++n)t.setTexture2DArray(e[n]||Fp,s[n])}function Kx(r){switch(r){case 5126:return Px;case 35664:return Lx;case 35665:return Dx;case 35666:return Ix;case 35674:return Ux;case 35675:return Ox;case 35676:return Nx;case 5124:case 35670:return Fx;case 35667:case 35671:return zx;case 35668:case 35672:return Bx;case 35669:case 35673:return kx;case 5125:return Gx;case 36294:return Vx;case 36295:return Hx;case 36296:return Wx;case 35678:case 36198:case 36298:case 36306:case 35682:return Xx;case 35679:case 36299:case 36307:return jx;case 35680:case 36300:case 36308:case 36293:return Yx;case 36289:case 36303:case 36311:case 36292:return qx}}class Zx{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Cx(t.type)}}class Jx{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Kx(t.type)}}class $x{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const a=this.seq;for(let s=0,n=a.length;s!==n;++s){const o=a[s];o.setValue(e,t[o.id],i)}}}const rl=/(\w+)(\])?(\[|\.)?/g;function Nu(r,e){r.seq.push(e),r.map[e.id]=e}function Qx(r,e,t){const i=r.name,a=i.length;for(rl.lastIndex=0;;){const s=rl.exec(i),n=rl.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&n+2===a){Nu(t,c===void 0?new Zx(o,r,e):new Jx(o,r,e));break}else{let h=t.map[o];h===void 0&&(h=new $x(o),Nu(t,h)),t=h}}}class Un{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const s=e.getActiveUniform(t,a),n=e.getUniformLocation(t,s.name);Qx(s,n,this)}}setValue(e,t,i,a){const s=this.map[t];s!==void 0&&s.setValue(e,i,a)}setOptional(e,t,i){const a=t[i];a!==void 0&&this.setValue(e,i,a)}static upload(e,t,i,a){for(let s=0,n=t.length;s!==n;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,a)}}static seqWithValue(e,t){const i=[];for(let a=0,s=e.length;a!==s;++a){const n=e[a];n.id in t&&i.push(n)}return i}}function Fu(r,e,t){const i=r.createShader(e);return r.shaderSource(i,t),r.compileShader(i),i}const ey=37297;let ty=0;function iy(r,e){const t=r.split(`
`),i=[],a=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let n=a;n<s;n++){const o=n+1;i.push(`${o===e?">":" "} ${o}: ${t[n]}`)}return i.join(`
`)}function ry(r){const e=Ye.getPrimaries(Ye.workingColorSpace),t=Ye.getPrimaries(r);let i;switch(e===t?i="":e===Yn&&t===jn?i="LinearDisplayP3ToLinearSRGB":e===jn&&t===Yn&&(i="LinearSRGBToLinearDisplayP3"),r){case Nr:case eo:return[i,"LinearTransferOETF"];case Di:case Gc:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[i,"LinearTransferOETF"]}}function zu(r,e,t){const i=r.getShaderParameter(e,r.COMPILE_STATUS),a=r.getShaderInfoLog(e).trim();if(i&&a==="")return"";const s=/ERROR: 0:(\d+)/.exec(a);if(s){const n=parseInt(s[1]);return t.toUpperCase()+`

`+a+`

`+iy(r.getShaderSource(e),n)}else return a}function ay(r,e){const t=ry(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function sy(r,e){let t;switch(e){case Mg:t="Linear";break;case Sg:t="Reinhard";break;case Eg:t="Cineon";break;case hp:t="ACESFilmic";break;case wg:t="AgX";break;case Tg:t="Neutral";break;case bg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const gn=new P;function ny(){Ye.getLuminanceCoefficients(gn);const r=gn.x.toFixed(4),e=gn.y.toFixed(4),t=gn.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function oy(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Es).join(`
`)}function ly(r){const e=[];for(const t in r){const i=r[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function cy(r,e){const t={},i=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){const s=r.getActiveAttrib(e,a),n=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[n]={type:s.type,location:r.getAttribLocation(e,n),locationSize:o}}return t}function Es(r){return r!==""}function Bu(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ku(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const hy=/^[ \t]*#include +<([\w\d./]+)>/gm;function pc(r){return r.replace(hy,dy)}const uy=new Map;function dy(r,e){let t=Oe[e];if(t===void 0){const i=uy.get(e);if(i!==void 0)t=Oe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return pc(t)}const py=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gu(r){return r.replace(py,fy)}function fy(r,e,t,i){let a="";for(let s=parseInt(e);s<parseInt(t);s++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return a}function Vu(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function my(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===op?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===lp?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===ir&&(e="SHADOWMAP_TYPE_VSM"),e}function gy(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case ts:case is:e="ENVMAP_TYPE_CUBE";break;case Qn:e="ENVMAP_TYPE_CUBE_UV";break}return e}function _y(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case is:e="ENVMAP_MODE_REFRACTION";break}return e}function vy(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case cp:e="ENVMAP_BLENDING_MULTIPLY";break;case xg:e="ENVMAP_BLENDING_MIX";break;case yg:e="ENVMAP_BLENDING_ADD";break}return e}function xy(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function yy(r,e,t,i){const a=r.getContext(),s=t.defines;let n=t.vertexShader,o=t.fragmentShader;const l=my(t),c=gy(t),h=_y(t),u=vy(t),d=xy(t),p=oy(t),g=ly(s),_=a.createProgram();let f,m,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Es).join(`
`),f.length>0&&(f+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Es).join(`
`),m.length>0&&(m+=`
`)):(f=[Vu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Es).join(`
`),m=[Vu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Rr?"#define TONE_MAPPING":"",t.toneMapping!==Rr?Oe.tonemapping_pars_fragment:"",t.toneMapping!==Rr?sy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,ay("linearToOutputTexel",t.outputColorSpace),ny(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Es).join(`
`)),n=pc(n),n=Bu(n,t),n=ku(n,t),o=pc(o),o=Bu(o,t),o=ku(o,t),n=Gu(n),o=Gu(o),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,f=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,m=["#define varying in",t.glslVersion===su?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===su?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const x=S+f+n,M=S+m+o,C=Fu(a,a.VERTEX_SHADER,x),T=Fu(a,a.FRAGMENT_SHADER,M);a.attachShader(_,C),a.attachShader(_,T),t.index0AttributeName!==void 0?a.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(_,0,"position"),a.linkProgram(_);function w(b){if(r.debug.checkShaderErrors){const O=a.getProgramInfoLog(_).trim(),N=a.getShaderInfoLog(C).trim(),B=a.getShaderInfoLog(T).trim();let j=!0,z=!0;if(a.getProgramParameter(_,a.LINK_STATUS)===!1)if(j=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(a,_,C,T);else{const K=zu(a,C,"vertex"),H=zu(a,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(_,a.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+O+`
`+K+`
`+H)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(N===""||B==="")&&(z=!1);z&&(b.diagnostics={runnable:j,programLog:O,vertexShader:{log:N,prefix:f},fragmentShader:{log:B,prefix:m}})}a.deleteShader(C),a.deleteShader(T),R=new Un(a,_),V=cy(a,_)}let R;this.getUniforms=function(){return R===void 0&&w(this),R};let V;this.getAttributes=function(){return V===void 0&&w(this),V};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=a.getProgramParameter(_,ey)),v},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ty++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=T,this}let My=0;class Sy{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,a=this._getShaderStage(t),s=this._getShaderStage(i),n=this._getShaderCacheForMaterial(e);return n.has(a)===!1&&(n.add(a),a.usedTimes++),n.has(s)===!1&&(n.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Ey(e),t.set(e,i)),i}}class Ey{constructor(e){this.id=My++,this.code=e,this.usedTimes=0}}function by(r,e,t,i,a,s,n){const o=new Vc,l=new Sy,c=new Set,h=[],u=a.logarithmicDepthBuffer,d=a.reverseDepthBuffer,p=a.vertexTextures;let g=a.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(v){return c.add(v),v===0?"uv":`uv${v}`}function m(v,b,O,N,B){const j=N.fog,z=B.geometry,K=v.isMeshStandardMaterial?N.environment:null,H=(v.isMeshStandardMaterial?t:e).get(v.envMap||K),te=H&&H.mapping===Qn?H.image.height:null,he=_[v.type];v.precision!==null&&(g=a.getMaxPrecision(v.precision),g!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",g,"instead."));const Me=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Be=Me!==void 0?Me.length:0;let Fe=0;z.morphAttributes.position!==void 0&&(Fe=1),z.morphAttributes.normal!==void 0&&(Fe=2),z.morphAttributes.color!==void 0&&(Fe=3);let X,Q,_e,pe;if(he){const qt=Bi[he];X=qt.vertexShader,Q=qt.fragmentShader}else X=v.vertexShader,Q=v.fragmentShader,l.update(v),_e=l.getVertexShaderID(v),pe=l.getFragmentShaderID(v);const De=r.getRenderTarget(),Te=B.isInstancedMesh===!0,He=B.isBatchedMesh===!0,qe=!!v.map,We=!!v.matcap,L=!!H,si=!!v.aoMap,ke=!!v.lightMap,Xe=!!v.bumpMap,Re=!!v.normalMap,at=!!v.displacementMap,Le=!!v.emissiveMap,A=!!v.metalnessMap,y=!!v.roughnessMap,F=v.anisotropy>0,q=v.clearcoat>0,J=v.dispersion>0,Y=v.iridescence>0,ye=v.sheen>0,ne=v.transmission>0,me=F&&!!v.anisotropyMap,Ge=q&&!!v.clearcoatMap,ee=q&&!!v.clearcoatNormalMap,ve=q&&!!v.clearcoatRoughnessMap,Ce=Y&&!!v.iridescenceMap,Pe=Y&&!!v.iridescenceThicknessMap,fe=ye&&!!v.sheenColorMap,Ve=ye&&!!v.sheenRoughnessMap,Ie=!!v.specularMap,it=!!v.specularColorMap,D=!!v.specularIntensityMap,ce=ne&&!!v.transmissionMap,W=ne&&!!v.thicknessMap,Z=!!v.gradientMap,le=!!v.alphaMap,se=v.alphaTest>0,rt=!!v.alphaHash,xt=!!v.extensions;let Yt=Rr;v.toneMapped&&(De===null||De.isXRRenderTarget===!0)&&(Yt=r.toneMapping);const je={shaderID:he,shaderType:v.type,shaderName:v.name,vertexShader:X,fragmentShader:Q,defines:v.defines,customVertexShaderID:_e,customFragmentShaderID:pe,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:g,batching:He,batchingColor:He&&B._colorsTexture!==null,instancing:Te,instancingColor:Te&&B.instanceColor!==null,instancingMorph:Te&&B.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:De===null?r.outputColorSpace:De.isXRRenderTarget===!0?De.texture.colorSpace:Nr,alphaToCoverage:!!v.alphaToCoverage,map:qe,matcap:We,envMap:L,envMapMode:L&&H.mapping,envMapCubeUVHeight:te,aoMap:si,lightMap:ke,bumpMap:Xe,normalMap:Re,displacementMap:p&&at,emissiveMap:Le,normalMapObjectSpace:Re&&v.normalMapType===Pg,normalMapTangentSpace:Re&&v.normalMapType===Sp,metalnessMap:A,roughnessMap:y,anisotropy:F,anisotropyMap:me,clearcoat:q,clearcoatMap:Ge,clearcoatNormalMap:ee,clearcoatRoughnessMap:ve,dispersion:J,iridescence:Y,iridescenceMap:Ce,iridescenceThicknessMap:Pe,sheen:ye,sheenColorMap:fe,sheenRoughnessMap:Ve,specularMap:Ie,specularColorMap:it,specularIntensityMap:D,transmission:ne,transmissionMap:ce,thicknessMap:W,gradientMap:Z,opaque:v.transparent===!1&&v.blending===Xa&&v.alphaToCoverage===!1,alphaMap:le,alphaTest:se,alphaHash:rt,combine:v.combine,mapUv:qe&&f(v.map.channel),aoMapUv:si&&f(v.aoMap.channel),lightMapUv:ke&&f(v.lightMap.channel),bumpMapUv:Xe&&f(v.bumpMap.channel),normalMapUv:Re&&f(v.normalMap.channel),displacementMapUv:at&&f(v.displacementMap.channel),emissiveMapUv:Le&&f(v.emissiveMap.channel),metalnessMapUv:A&&f(v.metalnessMap.channel),roughnessMapUv:y&&f(v.roughnessMap.channel),anisotropyMapUv:me&&f(v.anisotropyMap.channel),clearcoatMapUv:Ge&&f(v.clearcoatMap.channel),clearcoatNormalMapUv:ee&&f(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ve&&f(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Ce&&f(v.iridescenceMap.channel),iridescenceThicknessMapUv:Pe&&f(v.iridescenceThicknessMap.channel),sheenColorMapUv:fe&&f(v.sheenColorMap.channel),sheenRoughnessMapUv:Ve&&f(v.sheenRoughnessMap.channel),specularMapUv:Ie&&f(v.specularMap.channel),specularColorMapUv:it&&f(v.specularColorMap.channel),specularIntensityMapUv:D&&f(v.specularIntensityMap.channel),transmissionMapUv:ce&&f(v.transmissionMap.channel),thicknessMapUv:W&&f(v.thicknessMap.channel),alphaMapUv:le&&f(v.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(Re||F),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!z.attributes.uv&&(qe||le),fog:!!j,useFog:v.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:d,skinning:B.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:Be,morphTextureStride:Fe,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:n.numPlanes,numClipIntersection:n.numIntersection,dithering:v.dithering,shadowMapEnabled:r.shadowMap.enabled&&O.length>0,shadowMapType:r.shadowMap.type,toneMapping:Yt,decodeVideoTexture:qe&&v.map.isVideoTexture===!0&&Ye.getTransfer(v.map.colorSpace)===st,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===sr,flipSided:v.side===ii,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:xt&&v.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xt&&v.extensions.multiDraw===!0||He)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return je.vertexUv1s=c.has(1),je.vertexUv2s=c.has(2),je.vertexUv3s=c.has(3),c.clear(),je}function S(v){const b=[];if(v.shaderID?b.push(v.shaderID):(b.push(v.customVertexShaderID),b.push(v.customFragmentShaderID)),v.defines!==void 0)for(const O in v.defines)b.push(O),b.push(v.defines[O]);return v.isRawShaderMaterial===!1&&(x(b,v),M(b,v),b.push(r.outputColorSpace)),b.push(v.customProgramCacheKey),b.join()}function x(v,b){v.push(b.precision),v.push(b.outputColorSpace),v.push(b.envMapMode),v.push(b.envMapCubeUVHeight),v.push(b.mapUv),v.push(b.alphaMapUv),v.push(b.lightMapUv),v.push(b.aoMapUv),v.push(b.bumpMapUv),v.push(b.normalMapUv),v.push(b.displacementMapUv),v.push(b.emissiveMapUv),v.push(b.metalnessMapUv),v.push(b.roughnessMapUv),v.push(b.anisotropyMapUv),v.push(b.clearcoatMapUv),v.push(b.clearcoatNormalMapUv),v.push(b.clearcoatRoughnessMapUv),v.push(b.iridescenceMapUv),v.push(b.iridescenceThicknessMapUv),v.push(b.sheenColorMapUv),v.push(b.sheenRoughnessMapUv),v.push(b.specularMapUv),v.push(b.specularColorMapUv),v.push(b.specularIntensityMapUv),v.push(b.transmissionMapUv),v.push(b.thicknessMapUv),v.push(b.combine),v.push(b.fogExp2),v.push(b.sizeAttenuation),v.push(b.morphTargetsCount),v.push(b.morphAttributeCount),v.push(b.numDirLights),v.push(b.numPointLights),v.push(b.numSpotLights),v.push(b.numSpotLightMaps),v.push(b.numHemiLights),v.push(b.numRectAreaLights),v.push(b.numDirLightShadows),v.push(b.numPointLightShadows),v.push(b.numSpotLightShadows),v.push(b.numSpotLightShadowsWithMaps),v.push(b.numLightProbes),v.push(b.shadowMapType),v.push(b.toneMapping),v.push(b.numClippingPlanes),v.push(b.numClipIntersection),v.push(b.depthPacking)}function M(v,b){o.disableAll(),b.supportsVertexTextures&&o.enable(0),b.instancing&&o.enable(1),b.instancingColor&&o.enable(2),b.instancingMorph&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),b.dispersion&&o.enable(20),b.batchingColor&&o.enable(21),v.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reverseDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.alphaToCoverage&&o.enable(20),v.push(o.mask)}function C(v){const b=_[v.type];let O;if(b){const N=Bi[b];O=o_.clone(N.uniforms)}else O=v.uniforms;return O}function T(v,b){let O;for(let N=0,B=h.length;N<B;N++){const j=h[N];if(j.cacheKey===b){O=j,++O.usedTimes;break}}return O===void 0&&(O=new yy(r,b,v,s),h.push(O)),O}function w(v){if(--v.usedTimes===0){const b=h.indexOf(v);h[b]=h[h.length-1],h.pop(),v.destroy()}}function R(v){l.remove(v)}function V(){l.dispose()}return{getParameters:m,getProgramCacheKey:S,getUniforms:C,acquireProgram:T,releaseProgram:w,releaseShaderCache:R,programs:h,dispose:V}}function wy(){let r=new WeakMap;function e(n){return r.has(n)}function t(n){let o=r.get(n);return o===void 0&&(o={},r.set(n,o)),o}function i(n){r.delete(n)}function a(n,o,l){r.get(n)[o]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:i,update:a,dispose:s}}function Ty(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Hu(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Wu(){const r=[];let e=0;const t=[],i=[],a=[];function s(){e=0,t.length=0,i.length=0,a.length=0}function n(u,d,p,g,_,f){let m=r[e];return m===void 0?(m={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:_,group:f},r[e]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=p,m.groupOrder=g,m.renderOrder=u.renderOrder,m.z=_,m.group=f),e++,m}function o(u,d,p,g,_,f){const m=n(u,d,p,g,_,f);p.transmission>0?i.push(m):p.transparent===!0?a.push(m):t.push(m)}function l(u,d,p,g,_,f){const m=n(u,d,p,g,_,f);p.transmission>0?i.unshift(m):p.transparent===!0?a.unshift(m):t.unshift(m)}function c(u,d){t.length>1&&t.sort(u||Ty),i.length>1&&i.sort(d||Hu),a.length>1&&a.sort(d||Hu)}function h(){for(let u=e,d=r.length;u<d;u++){const p=r[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:a,init:s,push:o,unshift:l,finish:h,sort:c}}function Ay(){let r=new WeakMap;function e(i,a){const s=r.get(i);let n;return s===void 0?(n=new Wu,r.set(i,[n])):a>=s.length?(n=new Wu,s.push(n)):n=s[a],n}function t(){r=new WeakMap}return{get:e,dispose:t}}function Ry(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new Ue};break;case"SpotLight":t={position:new P,direction:new P,color:new Ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Ue,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Ue,groundColor:new Ue};break;case"RectAreaLight":t={color:new Ue,position:new P,halfWidth:new P,halfHeight:new P};break}return r[e.id]=t,t}}}function Cy(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let Py=0;function Ly(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Dy(r){const e=new Ry,t=Cy(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new P);const a=new P,s=new tt,n=new tt;function o(c){let h=0,u=0,d=0;for(let V=0;V<9;V++)i.probe[V].set(0,0,0);let p=0,g=0,_=0,f=0,m=0,S=0,x=0,M=0,C=0,T=0,w=0;c.sort(Ly);for(let V=0,v=c.length;V<v;V++){const b=c[V],O=b.color,N=b.intensity,B=b.distance,j=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)h+=O.r*N,u+=O.g*N,d+=O.b*N;else if(b.isLightProbe){for(let z=0;z<9;z++)i.probe[z].addScaledVector(b.sh.coefficients[z],N);w++}else if(b.isDirectionalLight){const z=e.get(b);if(z.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){const K=b.shadow,H=t.get(b);H.shadowIntensity=K.intensity,H.shadowBias=K.bias,H.shadowNormalBias=K.normalBias,H.shadowRadius=K.radius,H.shadowMapSize=K.mapSize,i.directionalShadow[p]=H,i.directionalShadowMap[p]=j,i.directionalShadowMatrix[p]=b.shadow.matrix,S++}i.directional[p]=z,p++}else if(b.isSpotLight){const z=e.get(b);z.position.setFromMatrixPosition(b.matrixWorld),z.color.copy(O).multiplyScalar(N),z.distance=B,z.coneCos=Math.cos(b.angle),z.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),z.decay=b.decay,i.spot[_]=z;const K=b.shadow;if(b.map&&(i.spotLightMap[C]=b.map,C++,K.updateMatrices(b),b.castShadow&&T++),i.spotLightMatrix[_]=K.matrix,b.castShadow){const H=t.get(b);H.shadowIntensity=K.intensity,H.shadowBias=K.bias,H.shadowNormalBias=K.normalBias,H.shadowRadius=K.radius,H.shadowMapSize=K.mapSize,i.spotShadow[_]=H,i.spotShadowMap[_]=j,M++}_++}else if(b.isRectAreaLight){const z=e.get(b);z.color.copy(O).multiplyScalar(N),z.halfWidth.set(b.width*.5,0,0),z.halfHeight.set(0,b.height*.5,0),i.rectArea[f]=z,f++}else if(b.isPointLight){const z=e.get(b);if(z.color.copy(b.color).multiplyScalar(b.intensity),z.distance=b.distance,z.decay=b.decay,b.castShadow){const K=b.shadow,H=t.get(b);H.shadowIntensity=K.intensity,H.shadowBias=K.bias,H.shadowNormalBias=K.normalBias,H.shadowRadius=K.radius,H.shadowMapSize=K.mapSize,H.shadowCameraNear=K.camera.near,H.shadowCameraFar=K.camera.far,i.pointShadow[g]=H,i.pointShadowMap[g]=j,i.pointShadowMatrix[g]=b.shadow.matrix,x++}i.point[g]=z,g++}else if(b.isHemisphereLight){const z=e.get(b);z.skyColor.copy(b.color).multiplyScalar(N),z.groundColor.copy(b.groundColor).multiplyScalar(N),i.hemi[m]=z,m++}}f>0&&(r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=re.LTC_FLOAT_1,i.rectAreaLTC2=re.LTC_FLOAT_2):(i.rectAreaLTC1=re.LTC_HALF_1,i.rectAreaLTC2=re.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;const R=i.hash;(R.directionalLength!==p||R.pointLength!==g||R.spotLength!==_||R.rectAreaLength!==f||R.hemiLength!==m||R.numDirectionalShadows!==S||R.numPointShadows!==x||R.numSpotShadows!==M||R.numSpotMaps!==C||R.numLightProbes!==w)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=f,i.point.length=g,i.hemi.length=m,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=M+C-T,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=w,R.directionalLength=p,R.pointLength=g,R.spotLength=_,R.rectAreaLength=f,R.hemiLength=m,R.numDirectionalShadows=S,R.numPointShadows=x,R.numSpotShadows=M,R.numSpotMaps=C,R.numLightProbes=w,i.version=Py++)}function l(c,h){let u=0,d=0,p=0,g=0,_=0;const f=h.matrixWorldInverse;for(let m=0,S=c.length;m<S;m++){const x=c[m];if(x.isDirectionalLight){const M=i.directional[u];M.direction.setFromMatrixPosition(x.matrixWorld),a.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(a),M.direction.transformDirection(f),u++}else if(x.isSpotLight){const M=i.spot[p];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(f),M.direction.setFromMatrixPosition(x.matrixWorld),a.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(a),M.direction.transformDirection(f),p++}else if(x.isRectAreaLight){const M=i.rectArea[g];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(f),n.identity(),s.copy(x.matrixWorld),s.premultiply(f),n.extractRotation(s),M.halfWidth.set(x.width*.5,0,0),M.halfHeight.set(0,x.height*.5,0),M.halfWidth.applyMatrix4(n),M.halfHeight.applyMatrix4(n),g++}else if(x.isPointLight){const M=i.point[d];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(f),d++}else if(x.isHemisphereLight){const M=i.hemi[_];M.direction.setFromMatrixPosition(x.matrixWorld),M.direction.transformDirection(f),_++}}}return{setup:o,setupView:l,state:i}}function Xu(r){const e=new Dy(r),t=[],i=[];function a(h){c.camera=h,t.length=0,i.length=0}function s(h){t.push(h)}function n(h){i.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:n}}function Iy(r){let e=new WeakMap;function t(a,s=0){const n=e.get(a);let o;return n===void 0?(o=new Xu(r),e.set(a,[o])):s>=n.length?(o=new Xu(r),n.push(o)):o=n[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}class Uy extends pa{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Rg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Oy extends pa{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ny=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Fy=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function zy(r,e,t){let i=new Wc;const a=new ie,s=new ie,n=new $e,o=new Uy({depthPacking:Cg}),l=new Oy,c={},h=t.maxTextureSize,u={[Ir]:ii,[ii]:Ir,[sr]:sr},d=new Ur({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ie},radius:{value:4}},vertexShader:Ny,fragmentShader:Fy}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new jt;g.setAttribute("position",new Ai(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ae(g,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=op;let m=this.type;this.render=function(T,w,R){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||T.length===0)return;const V=r.getRenderTarget(),v=r.getActiveCubeFace(),b=r.getActiveMipmapLevel(),O=r.state;O.setBlending(Ar),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const N=m!==ir&&this.type===ir,B=m===ir&&this.type!==ir;for(let j=0,z=T.length;j<z;j++){const K=T[j],H=K.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;a.copy(H.mapSize);const te=H.getFrameExtents();if(a.multiply(te),s.copy(H.mapSize),(a.x>h||a.y>h)&&(a.x>h&&(s.x=Math.floor(h/te.x),a.x=s.x*te.x,H.mapSize.x=s.x),a.y>h&&(s.y=Math.floor(h/te.y),a.y=s.y*te.y,H.mapSize.y=s.y)),H.map===null||N===!0||B===!0){const Me=this.type!==ir?{minFilter:Ti,magFilter:Ti}:{};H.map!==null&&H.map.dispose(),H.map=new la(a.x,a.y,Me),H.map.texture.name=K.name+".shadowMap",H.camera.updateProjectionMatrix()}r.setRenderTarget(H.map),r.clear();const he=H.getViewportCount();for(let Me=0;Me<he;Me++){const Be=H.getViewport(Me);n.set(s.x*Be.x,s.y*Be.y,s.x*Be.z,s.y*Be.w),O.viewport(n),H.updateMatrices(K,Me),i=H.getFrustum(),M(w,R,H.camera,K,this.type)}H.isPointLightShadow!==!0&&this.type===ir&&S(H,R),H.needsUpdate=!1}m=this.type,f.needsUpdate=!1,r.setRenderTarget(V,v,b)};function S(T,w){const R=e.update(_);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new la(a.x,a.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,r.setRenderTarget(T.mapPass),r.clear(),r.renderBufferDirect(w,null,R,d,_,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,r.setRenderTarget(T.map),r.clear(),r.renderBufferDirect(w,null,R,p,_,null)}function x(T,w,R,V){let v=null;const b=R.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(b!==void 0)v=b;else if(v=R.isPointLight===!0?l:o,r.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const O=v.uuid,N=w.uuid;let B=c[O];B===void 0&&(B={},c[O]=B);let j=B[N];j===void 0&&(j=v.clone(),B[N]=j,w.addEventListener("dispose",C)),v=j}if(v.visible=w.visible,v.wireframe=w.wireframe,V===ir?v.side=w.shadowSide!==null?w.shadowSide:w.side:v.side=w.shadowSide!==null?w.shadowSide:u[w.side],v.alphaMap=w.alphaMap,v.alphaTest=w.alphaTest,v.map=w.map,v.clipShadows=w.clipShadows,v.clippingPlanes=w.clippingPlanes,v.clipIntersection=w.clipIntersection,v.displacementMap=w.displacementMap,v.displacementScale=w.displacementScale,v.displacementBias=w.displacementBias,v.wireframeLinewidth=w.wireframeLinewidth,v.linewidth=w.linewidth,R.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const O=r.properties.get(v);O.light=R}return v}function M(T,w,R,V,v){if(T.visible===!1)return;if(T.layers.test(w.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&v===ir)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,T.matrixWorld);const O=e.update(T),N=T.material;if(Array.isArray(N)){const B=O.groups;for(let j=0,z=B.length;j<z;j++){const K=B[j],H=N[K.materialIndex];if(H&&H.visible){const te=x(T,H,V,v);T.onBeforeShadow(r,T,w,R,O,te,K),r.renderBufferDirect(R,null,O,te,T,K),T.onAfterShadow(r,T,w,R,O,te,K)}}}else if(N.visible){const B=x(T,N,V,v);T.onBeforeShadow(r,T,w,R,O,B,null),r.renderBufferDirect(R,null,O,B,T,null),T.onAfterShadow(r,T,w,R,O,B,null)}}const b=T.children;for(let O=0,N=b.length;O<N;O++)M(b[O],w,R,V,v)}function C(T){T.target.removeEventListener("dispose",C);for(const w in c){const R=c[w],V=T.target.uuid;V in R&&(R[V].dispose(),delete R[V])}}}const By={[Rl]:Cl,[Pl]:Il,[Ll]:Ul,[es]:Dl,[Cl]:Rl,[Il]:Pl,[Ul]:Ll,[Dl]:es};function ky(r){function e(){let D=!1;const ce=new $e;let W=null;const Z=new $e(0,0,0,0);return{setMask:function(le){W!==le&&!D&&(r.colorMask(le,le,le,le),W=le)},setLocked:function(le){D=le},setClear:function(le,se,rt,xt,Yt){Yt===!0&&(le*=xt,se*=xt,rt*=xt),ce.set(le,se,rt,xt),Z.equals(ce)===!1&&(r.clearColor(le,se,rt,xt),Z.copy(ce))},reset:function(){D=!1,W=null,Z.set(-1,0,0,0)}}}function t(){let D=!1,ce=!1,W=null,Z=null,le=null;return{setReversed:function(se){ce=se},setTest:function(se){se?_e(r.DEPTH_TEST):pe(r.DEPTH_TEST)},setMask:function(se){W!==se&&!D&&(r.depthMask(se),W=se)},setFunc:function(se){if(ce&&(se=By[se]),Z!==se){switch(se){case Rl:r.depthFunc(r.NEVER);break;case Cl:r.depthFunc(r.ALWAYS);break;case Pl:r.depthFunc(r.LESS);break;case es:r.depthFunc(r.LEQUAL);break;case Ll:r.depthFunc(r.EQUAL);break;case Dl:r.depthFunc(r.GEQUAL);break;case Il:r.depthFunc(r.GREATER);break;case Ul:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Z=se}},setLocked:function(se){D=se},setClear:function(se){le!==se&&(r.clearDepth(se),le=se)},reset:function(){D=!1,W=null,Z=null,le=null}}}function i(){let D=!1,ce=null,W=null,Z=null,le=null,se=null,rt=null,xt=null,Yt=null;return{setTest:function(je){D||(je?_e(r.STENCIL_TEST):pe(r.STENCIL_TEST))},setMask:function(je){ce!==je&&!D&&(r.stencilMask(je),ce=je)},setFunc:function(je,qt,Zi){(W!==je||Z!==qt||le!==Zi)&&(r.stencilFunc(je,qt,Zi),W=je,Z=qt,le=Zi)},setOp:function(je,qt,Zi){(se!==je||rt!==qt||xt!==Zi)&&(r.stencilOp(je,qt,Zi),se=je,rt=qt,xt=Zi)},setLocked:function(je){D=je},setClear:function(je){Yt!==je&&(r.clearStencil(je),Yt=je)},reset:function(){D=!1,ce=null,W=null,Z=null,le=null,se=null,rt=null,xt=null,Yt=null}}}const a=new e,s=new t,n=new i,o=new WeakMap,l=new WeakMap;let c={},h={},u=new WeakMap,d=[],p=null,g=!1,_=null,f=null,m=null,S=null,x=null,M=null,C=null,T=new Ue(0,0,0),w=0,R=!1,V=null,v=null,b=null,O=null,N=null;const B=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,z=0;const K=r.getParameter(r.VERSION);K.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(K)[1]),j=z>=1):K.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),j=z>=2);let H=null,te={};const he=r.getParameter(r.SCISSOR_BOX),Me=r.getParameter(r.VIEWPORT),Be=new $e().fromArray(he),Fe=new $e().fromArray(Me);function X(D,ce,W,Z){const le=new Uint8Array(4),se=r.createTexture();r.bindTexture(D,se),r.texParameteri(D,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(D,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let rt=0;rt<W;rt++)D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY?r.texImage3D(ce,0,r.RGBA,1,1,Z,0,r.RGBA,r.UNSIGNED_BYTE,le):r.texImage2D(ce+rt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,le);return se}const Q={};Q[r.TEXTURE_2D]=X(r.TEXTURE_2D,r.TEXTURE_2D,1),Q[r.TEXTURE_CUBE_MAP]=X(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[r.TEXTURE_2D_ARRAY]=X(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Q[r.TEXTURE_3D]=X(r.TEXTURE_3D,r.TEXTURE_3D,1,1),a.setClear(0,0,0,1),s.setClear(1),n.setClear(0),_e(r.DEPTH_TEST),s.setFunc(es),ke(!1),Xe(eu),_e(r.CULL_FACE),L(Ar);function _e(D){c[D]!==!0&&(r.enable(D),c[D]=!0)}function pe(D){c[D]!==!1&&(r.disable(D),c[D]=!1)}function De(D,ce){return h[D]!==ce?(r.bindFramebuffer(D,ce),h[D]=ce,D===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=ce),D===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=ce),!0):!1}function Te(D,ce){let W=d,Z=!1;if(D){W=u.get(ce),W===void 0&&(W=[],u.set(ce,W));const le=D.textures;if(W.length!==le.length||W[0]!==r.COLOR_ATTACHMENT0){for(let se=0,rt=le.length;se<rt;se++)W[se]=r.COLOR_ATTACHMENT0+se;W.length=le.length,Z=!0}}else W[0]!==r.BACK&&(W[0]=r.BACK,Z=!0);Z&&r.drawBuffers(W)}function He(D){return p!==D?(r.useProgram(D),p=D,!0):!1}const qe={[$r]:r.FUNC_ADD,[ig]:r.FUNC_SUBTRACT,[rg]:r.FUNC_REVERSE_SUBTRACT};qe[ag]=r.MIN,qe[sg]=r.MAX;const We={[ng]:r.ZERO,[og]:r.ONE,[lg]:r.SRC_COLOR,[Tl]:r.SRC_ALPHA,[fg]:r.SRC_ALPHA_SATURATE,[dg]:r.DST_COLOR,[hg]:r.DST_ALPHA,[cg]:r.ONE_MINUS_SRC_COLOR,[Al]:r.ONE_MINUS_SRC_ALPHA,[pg]:r.ONE_MINUS_DST_COLOR,[ug]:r.ONE_MINUS_DST_ALPHA,[mg]:r.CONSTANT_COLOR,[gg]:r.ONE_MINUS_CONSTANT_COLOR,[_g]:r.CONSTANT_ALPHA,[vg]:r.ONE_MINUS_CONSTANT_ALPHA};function L(D,ce,W,Z,le,se,rt,xt,Yt,je){if(D===Ar){g===!0&&(pe(r.BLEND),g=!1);return}if(g===!1&&(_e(r.BLEND),g=!0),D!==tg){if(D!==_||je!==R){if((f!==$r||x!==$r)&&(r.blendEquation(r.FUNC_ADD),f=$r,x=$r),je)switch(D){case Xa:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case tu:r.blendFunc(r.ONE,r.ONE);break;case iu:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case ru:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Xa:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case tu:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case iu:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case ru:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}m=null,S=null,M=null,C=null,T.set(0,0,0),w=0,_=D,R=je}return}le=le||ce,se=se||W,rt=rt||Z,(ce!==f||le!==x)&&(r.blendEquationSeparate(qe[ce],qe[le]),f=ce,x=le),(W!==m||Z!==S||se!==M||rt!==C)&&(r.blendFuncSeparate(We[W],We[Z],We[se],We[rt]),m=W,S=Z,M=se,C=rt),(xt.equals(T)===!1||Yt!==w)&&(r.blendColor(xt.r,xt.g,xt.b,Yt),T.copy(xt),w=Yt),_=D,R=!1}function si(D,ce){D.side===sr?pe(r.CULL_FACE):_e(r.CULL_FACE);let W=D.side===ii;ce&&(W=!W),ke(W),D.blending===Xa&&D.transparent===!1?L(Ar):L(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),s.setFunc(D.depthFunc),s.setTest(D.depthTest),s.setMask(D.depthWrite),a.setMask(D.colorWrite);const Z=D.stencilWrite;n.setTest(Z),Z&&(n.setMask(D.stencilWriteMask),n.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),n.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),at(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?_e(r.SAMPLE_ALPHA_TO_COVERAGE):pe(r.SAMPLE_ALPHA_TO_COVERAGE)}function ke(D){V!==D&&(D?r.frontFace(r.CW):r.frontFace(r.CCW),V=D)}function Xe(D){D!==Qm?(_e(r.CULL_FACE),D!==v&&(D===eu?r.cullFace(r.BACK):D===eg?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):pe(r.CULL_FACE),v=D}function Re(D){D!==b&&(j&&r.lineWidth(D),b=D)}function at(D,ce,W){D?(_e(r.POLYGON_OFFSET_FILL),(O!==ce||N!==W)&&(r.polygonOffset(ce,W),O=ce,N=W)):pe(r.POLYGON_OFFSET_FILL)}function Le(D){D?_e(r.SCISSOR_TEST):pe(r.SCISSOR_TEST)}function A(D){D===void 0&&(D=r.TEXTURE0+B-1),H!==D&&(r.activeTexture(D),H=D)}function y(D,ce,W){W===void 0&&(H===null?W=r.TEXTURE0+B-1:W=H);let Z=te[W];Z===void 0&&(Z={type:void 0,texture:void 0},te[W]=Z),(Z.type!==D||Z.texture!==ce)&&(H!==W&&(r.activeTexture(W),H=W),r.bindTexture(D,ce||Q[D]),Z.type=D,Z.texture=ce)}function F(){const D=te[H];D!==void 0&&D.type!==void 0&&(r.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function q(){try{r.compressedTexImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function J(){try{r.compressedTexImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Y(){try{r.texSubImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ye(){try{r.texSubImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ne(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function me(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ge(){try{r.texStorage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ee(){try{r.texStorage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ve(){try{r.texImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ce(){try{r.texImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Pe(D){Be.equals(D)===!1&&(r.scissor(D.x,D.y,D.z,D.w),Be.copy(D))}function fe(D){Fe.equals(D)===!1&&(r.viewport(D.x,D.y,D.z,D.w),Fe.copy(D))}function Ve(D,ce){let W=l.get(ce);W===void 0&&(W=new WeakMap,l.set(ce,W));let Z=W.get(D);Z===void 0&&(Z=r.getUniformBlockIndex(ce,D.name),W.set(D,Z))}function Ie(D,ce){const W=l.get(ce).get(D);o.get(ce)!==W&&(r.uniformBlockBinding(ce,W,D.__bindingPointIndex),o.set(ce,W))}function it(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),c={},H=null,te={},h={},u=new WeakMap,d=[],p=null,g=!1,_=null,f=null,m=null,S=null,x=null,M=null,C=null,T=new Ue(0,0,0),w=0,R=!1,V=null,v=null,b=null,O=null,N=null,Be.set(0,0,r.canvas.width,r.canvas.height),Fe.set(0,0,r.canvas.width,r.canvas.height),a.reset(),s.reset(),n.reset()}return{buffers:{color:a,depth:s,stencil:n},enable:_e,disable:pe,bindFramebuffer:De,drawBuffers:Te,useProgram:He,setBlending:L,setMaterial:si,setFlipSided:ke,setCullFace:Xe,setLineWidth:Re,setPolygonOffset:at,setScissorTest:Le,activeTexture:A,bindTexture:y,unbindTexture:F,compressedTexImage2D:q,compressedTexImage3D:J,texImage2D:ve,texImage3D:Ce,updateUBOMapping:Ve,uniformBlockBinding:Ie,texStorage2D:Ge,texStorage3D:ee,texSubImage2D:Y,texSubImage3D:ye,compressedTexSubImage2D:ne,compressedTexSubImage3D:me,scissor:Pe,viewport:fe,reset:it}}function ju(r,e,t,i){const a=Gy(i);switch(t){case mp:return r*e;case _p:return r*e;case vp:return r*e*2;case xp:return r*e/a.components*a.byteLength;case zc:return r*e/a.components*a.byteLength;case yp:return r*e*2/a.components*a.byteLength;case Bc:return r*e*2/a.components*a.byteLength;case gp:return r*e*3/a.components*a.byteLength;case Ui:return r*e*4/a.components*a.byteLength;case kc:return r*e*4/a.components*a.byteLength;case An:case Rn:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Cn:case Pn:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case kl:case Vl:return Math.max(r,16)*Math.max(e,8)/4;case Bl:case Gl:return Math.max(r,8)*Math.max(e,8)/2;case Hl:case Wl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Xl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case jl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Yl:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case ql:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Kl:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Zl:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Jl:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case $l:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Ql:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case ec:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case tc:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case ic:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case rc:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case ac:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case sc:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Ln:case nc:case oc:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Mp:case lc:return Math.ceil(r/4)*Math.ceil(e/4)*8;case cc:case hc:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Gy(r){switch(r){case ur:case dp:return{byteLength:1,components:1};case Fs:case pp:case Vs:return{byteLength:2,components:1};case Nc:case Fc:return{byteLength:2,components:4};case oa:case Oc:case nr:return{byteLength:4,components:1};case fp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function Vy(r,e,t,i,a,s,n){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ie,h=new WeakMap;let u;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,y){return p?new OffscreenCanvas(A,y):zs("canvas")}function _(A,y,F){let q=1;const J=Le(A);if((J.width>F||J.height>F)&&(q=F/Math.max(J.width,J.height)),q<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const Y=Math.floor(q*J.width),ye=Math.floor(q*J.height);u===void 0&&(u=g(Y,ye));const ne=y?g(Y,ye):u;return ne.width=Y,ne.height=ye,ne.getContext("2d").drawImage(A,0,0,Y,ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+Y+"x"+ye+")."),ne}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),A;return A}function f(A){return A.generateMipmaps&&A.minFilter!==Ti&&A.minFilter!==Ii}function m(A){r.generateMipmap(A)}function S(A,y,F,q,J=!1){if(A!==null){if(r[A]!==void 0)return r[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let Y=y;if(y===r.RED&&(F===r.FLOAT&&(Y=r.R32F),F===r.HALF_FLOAT&&(Y=r.R16F),F===r.UNSIGNED_BYTE&&(Y=r.R8)),y===r.RED_INTEGER&&(F===r.UNSIGNED_BYTE&&(Y=r.R8UI),F===r.UNSIGNED_SHORT&&(Y=r.R16UI),F===r.UNSIGNED_INT&&(Y=r.R32UI),F===r.BYTE&&(Y=r.R8I),F===r.SHORT&&(Y=r.R16I),F===r.INT&&(Y=r.R32I)),y===r.RG&&(F===r.FLOAT&&(Y=r.RG32F),F===r.HALF_FLOAT&&(Y=r.RG16F),F===r.UNSIGNED_BYTE&&(Y=r.RG8)),y===r.RG_INTEGER&&(F===r.UNSIGNED_BYTE&&(Y=r.RG8UI),F===r.UNSIGNED_SHORT&&(Y=r.RG16UI),F===r.UNSIGNED_INT&&(Y=r.RG32UI),F===r.BYTE&&(Y=r.RG8I),F===r.SHORT&&(Y=r.RG16I),F===r.INT&&(Y=r.RG32I)),y===r.RGB_INTEGER&&(F===r.UNSIGNED_BYTE&&(Y=r.RGB8UI),F===r.UNSIGNED_SHORT&&(Y=r.RGB16UI),F===r.UNSIGNED_INT&&(Y=r.RGB32UI),F===r.BYTE&&(Y=r.RGB8I),F===r.SHORT&&(Y=r.RGB16I),F===r.INT&&(Y=r.RGB32I)),y===r.RGBA_INTEGER&&(F===r.UNSIGNED_BYTE&&(Y=r.RGBA8UI),F===r.UNSIGNED_SHORT&&(Y=r.RGBA16UI),F===r.UNSIGNED_INT&&(Y=r.RGBA32UI),F===r.BYTE&&(Y=r.RGBA8I),F===r.SHORT&&(Y=r.RGBA16I),F===r.INT&&(Y=r.RGBA32I)),y===r.RGB&&F===r.UNSIGNED_INT_5_9_9_9_REV&&(Y=r.RGB9_E5),y===r.RGBA){const ye=J?Xn:Ye.getTransfer(q);F===r.FLOAT&&(Y=r.RGBA32F),F===r.HALF_FLOAT&&(Y=r.RGBA16F),F===r.UNSIGNED_BYTE&&(Y=ye===st?r.SRGB8_ALPHA8:r.RGBA8),F===r.UNSIGNED_SHORT_4_4_4_4&&(Y=r.RGBA4),F===r.UNSIGNED_SHORT_5_5_5_1&&(Y=r.RGB5_A1)}return(Y===r.R16F||Y===r.R32F||Y===r.RG16F||Y===r.RG32F||Y===r.RGBA16F||Y===r.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function x(A,y){let F;return A?y===null||y===oa||y===rs?F=r.DEPTH24_STENCIL8:y===nr?F=r.DEPTH32F_STENCIL8:y===Fs&&(F=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===oa||y===rs?F=r.DEPTH_COMPONENT24:y===nr?F=r.DEPTH_COMPONENT32F:y===Fs&&(F=r.DEPTH_COMPONENT16),F}function M(A,y){return f(A)===!0||A.isFramebufferTexture&&A.minFilter!==Ti&&A.minFilter!==Ii?Math.log2(Math.max(y.width,y.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?y.mipmaps.length:1}function C(A){const y=A.target;y.removeEventListener("dispose",C),w(y),y.isVideoTexture&&h.delete(y)}function T(A){const y=A.target;y.removeEventListener("dispose",T),V(y)}function w(A){const y=i.get(A);if(y.__webglInit===void 0)return;const F=A.source,q=d.get(F);if(q){const J=q[y.__cacheKey];J.usedTimes--,J.usedTimes===0&&R(A),Object.keys(q).length===0&&d.delete(F)}i.remove(A)}function R(A){const y=i.get(A);r.deleteTexture(y.__webglTexture);const F=A.source,q=d.get(F);delete q[y.__cacheKey],n.memory.textures--}function V(A){const y=i.get(A);if(A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(y.__webglFramebuffer[q]))for(let J=0;J<y.__webglFramebuffer[q].length;J++)r.deleteFramebuffer(y.__webglFramebuffer[q][J]);else r.deleteFramebuffer(y.__webglFramebuffer[q]);y.__webglDepthbuffer&&r.deleteRenderbuffer(y.__webglDepthbuffer[q])}else{if(Array.isArray(y.__webglFramebuffer))for(let q=0;q<y.__webglFramebuffer.length;q++)r.deleteFramebuffer(y.__webglFramebuffer[q]);else r.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&r.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&r.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let q=0;q<y.__webglColorRenderbuffer.length;q++)y.__webglColorRenderbuffer[q]&&r.deleteRenderbuffer(y.__webglColorRenderbuffer[q]);y.__webglDepthRenderbuffer&&r.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const F=A.textures;for(let q=0,J=F.length;q<J;q++){const Y=i.get(F[q]);Y.__webglTexture&&(r.deleteTexture(Y.__webglTexture),n.memory.textures--),i.remove(F[q])}i.remove(A)}let v=0;function b(){v=0}function O(){const A=v;return A>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+a.maxTextures),v+=1,A}function N(A){const y=[];return y.push(A.wrapS),y.push(A.wrapT),y.push(A.wrapR||0),y.push(A.magFilter),y.push(A.minFilter),y.push(A.anisotropy),y.push(A.internalFormat),y.push(A.format),y.push(A.type),y.push(A.generateMipmaps),y.push(A.premultiplyAlpha),y.push(A.flipY),y.push(A.unpackAlignment),y.push(A.colorSpace),y.join()}function B(A,y){const F=i.get(A);if(A.isVideoTexture&&Re(A),A.isRenderTargetTexture===!1&&A.version>0&&F.__version!==A.version){const q=A.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Fe(F,A,y);return}}t.bindTexture(r.TEXTURE_2D,F.__webglTexture,r.TEXTURE0+y)}function j(A,y){const F=i.get(A);if(A.version>0&&F.__version!==A.version){Fe(F,A,y);return}t.bindTexture(r.TEXTURE_2D_ARRAY,F.__webglTexture,r.TEXTURE0+y)}function z(A,y){const F=i.get(A);if(A.version>0&&F.__version!==A.version){Fe(F,A,y);return}t.bindTexture(r.TEXTURE_3D,F.__webglTexture,r.TEXTURE0+y)}function K(A,y){const F=i.get(A);if(A.version>0&&F.__version!==A.version){X(F,A,y);return}t.bindTexture(r.TEXTURE_CUBE_MAP,F.__webglTexture,r.TEXTURE0+y)}const H={[Fl]:r.REPEAT,[ta]:r.CLAMP_TO_EDGE,[zl]:r.MIRRORED_REPEAT},te={[Ti]:r.NEAREST,[Ag]:r.NEAREST_MIPMAP_NEAREST,[Ks]:r.NEAREST_MIPMAP_LINEAR,[Ii]:r.LINEAR,[Co]:r.LINEAR_MIPMAP_NEAREST,[ia]:r.LINEAR_MIPMAP_LINEAR},he={[Lg]:r.NEVER,[Fg]:r.ALWAYS,[Dg]:r.LESS,[Ep]:r.LEQUAL,[Ig]:r.EQUAL,[Ng]:r.GEQUAL,[Ug]:r.GREATER,[Og]:r.NOTEQUAL};function Me(A,y){if(y.type===nr&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Ii||y.magFilter===Co||y.magFilter===Ks||y.magFilter===ia||y.minFilter===Ii||y.minFilter===Co||y.minFilter===Ks||y.minFilter===ia)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(A,r.TEXTURE_WRAP_S,H[y.wrapS]),r.texParameteri(A,r.TEXTURE_WRAP_T,H[y.wrapT]),(A===r.TEXTURE_3D||A===r.TEXTURE_2D_ARRAY)&&r.texParameteri(A,r.TEXTURE_WRAP_R,H[y.wrapR]),r.texParameteri(A,r.TEXTURE_MAG_FILTER,te[y.magFilter]),r.texParameteri(A,r.TEXTURE_MIN_FILTER,te[y.minFilter]),y.compareFunction&&(r.texParameteri(A,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(A,r.TEXTURE_COMPARE_FUNC,he[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Ti||y.minFilter!==Ks&&y.minFilter!==ia||y.type===nr&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");r.texParameterf(A,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,a.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function Be(A,y){let F=!1;A.__webglInit===void 0&&(A.__webglInit=!0,y.addEventListener("dispose",C));const q=y.source;let J=d.get(q);J===void 0&&(J={},d.set(q,J));const Y=N(y);if(Y!==A.__cacheKey){J[Y]===void 0&&(J[Y]={texture:r.createTexture(),usedTimes:0},n.memory.textures++,F=!0),J[Y].usedTimes++;const ye=J[A.__cacheKey];ye!==void 0&&(J[A.__cacheKey].usedTimes--,ye.usedTimes===0&&R(y)),A.__cacheKey=Y,A.__webglTexture=J[Y].texture}return F}function Fe(A,y,F){let q=r.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(q=r.TEXTURE_2D_ARRAY),y.isData3DTexture&&(q=r.TEXTURE_3D);const J=Be(A,y),Y=y.source;t.bindTexture(q,A.__webglTexture,r.TEXTURE0+F);const ye=i.get(Y);if(Y.version!==ye.__version||J===!0){t.activeTexture(r.TEXTURE0+F);const ne=Ye.getPrimaries(Ye.workingColorSpace),me=y.colorSpace===Mr?null:Ye.getPrimaries(y.colorSpace),Ge=y.colorSpace===Mr||ne===me?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ge);let ee=_(y.image,!1,a.maxTextureSize);ee=at(y,ee);const ve=s.convert(y.format,y.colorSpace),Ce=s.convert(y.type);let Pe=S(y.internalFormat,ve,Ce,y.colorSpace,y.isVideoTexture);Me(q,y);let fe;const Ve=y.mipmaps,Ie=y.isVideoTexture!==!0,it=ye.__version===void 0||J===!0,D=Y.dataReady,ce=M(y,ee);if(y.isDepthTexture)Pe=x(y.format===as,y.type),it&&(Ie?t.texStorage2D(r.TEXTURE_2D,1,Pe,ee.width,ee.height):t.texImage2D(r.TEXTURE_2D,0,Pe,ee.width,ee.height,0,ve,Ce,null));else if(y.isDataTexture)if(Ve.length>0){Ie&&it&&t.texStorage2D(r.TEXTURE_2D,ce,Pe,Ve[0].width,Ve[0].height);for(let W=0,Z=Ve.length;W<Z;W++)fe=Ve[W],Ie?D&&t.texSubImage2D(r.TEXTURE_2D,W,0,0,fe.width,fe.height,ve,Ce,fe.data):t.texImage2D(r.TEXTURE_2D,W,Pe,fe.width,fe.height,0,ve,Ce,fe.data);y.generateMipmaps=!1}else Ie?(it&&t.texStorage2D(r.TEXTURE_2D,ce,Pe,ee.width,ee.height),D&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ee.width,ee.height,ve,Ce,ee.data)):t.texImage2D(r.TEXTURE_2D,0,Pe,ee.width,ee.height,0,ve,Ce,ee.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Ie&&it&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ce,Pe,Ve[0].width,Ve[0].height,ee.depth);for(let W=0,Z=Ve.length;W<Z;W++)if(fe=Ve[W],y.format!==Ui)if(ve!==null)if(Ie){if(D)if(y.layerUpdates.size>0){const le=ju(fe.width,fe.height,y.format,y.type);for(const se of y.layerUpdates){const rt=fe.data.subarray(se*le/fe.data.BYTES_PER_ELEMENT,(se+1)*le/fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,W,0,0,se,fe.width,fe.height,1,ve,rt,0,0)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,W,0,0,0,fe.width,fe.height,ee.depth,ve,fe.data,0,0)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,W,Pe,fe.width,fe.height,ee.depth,0,fe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ie?D&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,W,0,0,0,fe.width,fe.height,ee.depth,ve,Ce,fe.data):t.texImage3D(r.TEXTURE_2D_ARRAY,W,Pe,fe.width,fe.height,ee.depth,0,ve,Ce,fe.data)}else{Ie&&it&&t.texStorage2D(r.TEXTURE_2D,ce,Pe,Ve[0].width,Ve[0].height);for(let W=0,Z=Ve.length;W<Z;W++)fe=Ve[W],y.format!==Ui?ve!==null?Ie?D&&t.compressedTexSubImage2D(r.TEXTURE_2D,W,0,0,fe.width,fe.height,ve,fe.data):t.compressedTexImage2D(r.TEXTURE_2D,W,Pe,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ie?D&&t.texSubImage2D(r.TEXTURE_2D,W,0,0,fe.width,fe.height,ve,Ce,fe.data):t.texImage2D(r.TEXTURE_2D,W,Pe,fe.width,fe.height,0,ve,Ce,fe.data)}else if(y.isDataArrayTexture)if(Ie){if(it&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ce,Pe,ee.width,ee.height,ee.depth),D)if(y.layerUpdates.size>0){const W=ju(ee.width,ee.height,y.format,y.type);for(const Z of y.layerUpdates){const le=ee.data.subarray(Z*W/ee.data.BYTES_PER_ELEMENT,(Z+1)*W/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Z,ee.width,ee.height,1,ve,Ce,le)}y.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,ve,Ce,ee.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Pe,ee.width,ee.height,ee.depth,0,ve,Ce,ee.data);else if(y.isData3DTexture)Ie?(it&&t.texStorage3D(r.TEXTURE_3D,ce,Pe,ee.width,ee.height,ee.depth),D&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,ve,Ce,ee.data)):t.texImage3D(r.TEXTURE_3D,0,Pe,ee.width,ee.height,ee.depth,0,ve,Ce,ee.data);else if(y.isFramebufferTexture){if(it)if(Ie)t.texStorage2D(r.TEXTURE_2D,ce,Pe,ee.width,ee.height);else{let W=ee.width,Z=ee.height;for(let le=0;le<ce;le++)t.texImage2D(r.TEXTURE_2D,le,Pe,W,Z,0,ve,Ce,null),W>>=1,Z>>=1}}else if(Ve.length>0){if(Ie&&it){const W=Le(Ve[0]);t.texStorage2D(r.TEXTURE_2D,ce,Pe,W.width,W.height)}for(let W=0,Z=Ve.length;W<Z;W++)fe=Ve[W],Ie?D&&t.texSubImage2D(r.TEXTURE_2D,W,0,0,ve,Ce,fe):t.texImage2D(r.TEXTURE_2D,W,Pe,ve,Ce,fe);y.generateMipmaps=!1}else if(Ie){if(it){const W=Le(ee);t.texStorage2D(r.TEXTURE_2D,ce,Pe,W.width,W.height)}D&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ve,Ce,ee)}else t.texImage2D(r.TEXTURE_2D,0,Pe,ve,Ce,ee);f(y)&&m(q),ye.__version=Y.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function X(A,y,F){if(y.image.length!==6)return;const q=Be(A,y),J=y.source;t.bindTexture(r.TEXTURE_CUBE_MAP,A.__webglTexture,r.TEXTURE0+F);const Y=i.get(J);if(J.version!==Y.__version||q===!0){t.activeTexture(r.TEXTURE0+F);const ye=Ye.getPrimaries(Ye.workingColorSpace),ne=y.colorSpace===Mr?null:Ye.getPrimaries(y.colorSpace),me=y.colorSpace===Mr||ye===ne?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const Ge=y.isCompressedTexture||y.image[0].isCompressedTexture,ee=y.image[0]&&y.image[0].isDataTexture,ve=[];for(let Z=0;Z<6;Z++)!Ge&&!ee?ve[Z]=_(y.image[Z],!0,a.maxCubemapSize):ve[Z]=ee?y.image[Z].image:y.image[Z],ve[Z]=at(y,ve[Z]);const Ce=ve[0],Pe=s.convert(y.format,y.colorSpace),fe=s.convert(y.type),Ve=S(y.internalFormat,Pe,fe,y.colorSpace),Ie=y.isVideoTexture!==!0,it=Y.__version===void 0||q===!0,D=J.dataReady;let ce=M(y,Ce);Me(r.TEXTURE_CUBE_MAP,y);let W;if(Ge){Ie&&it&&t.texStorage2D(r.TEXTURE_CUBE_MAP,ce,Ve,Ce.width,Ce.height);for(let Z=0;Z<6;Z++){W=ve[Z].mipmaps;for(let le=0;le<W.length;le++){const se=W[le];y.format!==Ui?Pe!==null?Ie?D&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,le,0,0,se.width,se.height,Pe,se.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,le,Ve,se.width,se.height,0,se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ie?D&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,le,0,0,se.width,se.height,Pe,fe,se.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,le,Ve,se.width,se.height,0,Pe,fe,se.data)}}}else{if(W=y.mipmaps,Ie&&it){W.length>0&&ce++;const Z=Le(ve[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,ce,Ve,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(ee){Ie?D&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,ve[Z].width,ve[Z].height,Pe,fe,ve[Z].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ve,ve[Z].width,ve[Z].height,0,Pe,fe,ve[Z].data);for(let le=0;le<W.length;le++){const se=W[le].image[Z].image;Ie?D&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,le+1,0,0,se.width,se.height,Pe,fe,se.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,le+1,Ve,se.width,se.height,0,Pe,fe,se.data)}}else{Ie?D&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Pe,fe,ve[Z]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ve,Pe,fe,ve[Z]);for(let le=0;le<W.length;le++){const se=W[le];Ie?D&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,le+1,0,0,Pe,fe,se.image[Z]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,le+1,Ve,Pe,fe,se.image[Z])}}}f(y)&&m(r.TEXTURE_CUBE_MAP),Y.__version=J.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function Q(A,y,F,q,J,Y){const ye=s.convert(F.format,F.colorSpace),ne=s.convert(F.type),me=S(F.internalFormat,ye,ne,F.colorSpace);if(!i.get(y).__hasExternalTextures){const Ge=Math.max(1,y.width>>Y),ee=Math.max(1,y.height>>Y);J===r.TEXTURE_3D||J===r.TEXTURE_2D_ARRAY?t.texImage3D(J,Y,me,Ge,ee,y.depth,0,ye,ne,null):t.texImage2D(J,Y,me,Ge,ee,0,ye,ne,null)}t.bindFramebuffer(r.FRAMEBUFFER,A),Xe(y)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,q,J,i.get(F).__webglTexture,0,ke(y)):(J===r.TEXTURE_2D||J>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,q,J,i.get(F).__webglTexture,Y),t.bindFramebuffer(r.FRAMEBUFFER,null)}function _e(A,y,F){if(r.bindRenderbuffer(r.RENDERBUFFER,A),y.depthBuffer){const q=y.depthTexture,J=q&&q.isDepthTexture?q.type:null,Y=x(y.stencilBuffer,J),ye=y.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ne=ke(y);Xe(y)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ne,Y,y.width,y.height):F?r.renderbufferStorageMultisample(r.RENDERBUFFER,ne,Y,y.width,y.height):r.renderbufferStorage(r.RENDERBUFFER,Y,y.width,y.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,ye,r.RENDERBUFFER,A)}else{const q=y.textures;for(let J=0;J<q.length;J++){const Y=q[J],ye=s.convert(Y.format,Y.colorSpace),ne=s.convert(Y.type),me=S(Y.internalFormat,ye,ne,Y.colorSpace),Ge=ke(y);F&&Xe(y)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ge,me,y.width,y.height):Xe(y)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ge,me,y.width,y.height):r.renderbufferStorage(r.RENDERBUFFER,me,y.width,y.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function pe(A,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,A),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),B(y.depthTexture,0);const F=i.get(y.depthTexture).__webglTexture,q=ke(y);if(y.depthTexture.format===ja)Xe(y)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,F,0,q):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,F,0);else if(y.depthTexture.format===as)Xe(y)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,F,0,q):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,F,0);else throw new Error("Unknown depthTexture format")}function De(A){const y=i.get(A),F=A.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==A.depthTexture){const q=A.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),q){const J=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,q.removeEventListener("dispose",J)};q.addEventListener("dispose",J),y.__depthDisposeCallback=J}y.__boundDepthTexture=q}if(A.depthTexture&&!y.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");pe(y.__webglFramebuffer,A)}else if(F){y.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer[q]),y.__webglDepthbuffer[q]===void 0)y.__webglDepthbuffer[q]=r.createRenderbuffer(),_e(y.__webglDepthbuffer[q],A,!1);else{const J=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Y=y.__webglDepthbuffer[q];r.bindRenderbuffer(r.RENDERBUFFER,Y),r.framebufferRenderbuffer(r.FRAMEBUFFER,J,r.RENDERBUFFER,Y)}}else if(t.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=r.createRenderbuffer(),_e(y.__webglDepthbuffer,A,!1);else{const q=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,J=y.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,J),r.framebufferRenderbuffer(r.FRAMEBUFFER,q,r.RENDERBUFFER,J)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Te(A,y,F){const q=i.get(A);y!==void 0&&Q(q.__webglFramebuffer,A,A.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),F!==void 0&&De(A)}function He(A){const y=A.texture,F=i.get(A),q=i.get(y);A.addEventListener("dispose",T);const J=A.textures,Y=A.isWebGLCubeRenderTarget===!0,ye=J.length>1;if(ye||(q.__webglTexture===void 0&&(q.__webglTexture=r.createTexture()),q.__version=y.version,n.memory.textures++),Y){F.__webglFramebuffer=[];for(let ne=0;ne<6;ne++)if(y.mipmaps&&y.mipmaps.length>0){F.__webglFramebuffer[ne]=[];for(let me=0;me<y.mipmaps.length;me++)F.__webglFramebuffer[ne][me]=r.createFramebuffer()}else F.__webglFramebuffer[ne]=r.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){F.__webglFramebuffer=[];for(let ne=0;ne<y.mipmaps.length;ne++)F.__webglFramebuffer[ne]=r.createFramebuffer()}else F.__webglFramebuffer=r.createFramebuffer();if(ye)for(let ne=0,me=J.length;ne<me;ne++){const Ge=i.get(J[ne]);Ge.__webglTexture===void 0&&(Ge.__webglTexture=r.createTexture(),n.memory.textures++)}if(A.samples>0&&Xe(A)===!1){F.__webglMultisampledFramebuffer=r.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ne=0;ne<J.length;ne++){const me=J[ne];F.__webglColorRenderbuffer[ne]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,F.__webglColorRenderbuffer[ne]);const Ge=s.convert(me.format,me.colorSpace),ee=s.convert(me.type),ve=S(me.internalFormat,Ge,ee,me.colorSpace,A.isXRRenderTarget===!0),Ce=ke(A);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ce,ve,A.width,A.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ne,r.RENDERBUFFER,F.__webglColorRenderbuffer[ne])}r.bindRenderbuffer(r.RENDERBUFFER,null),A.depthBuffer&&(F.__webglDepthRenderbuffer=r.createRenderbuffer(),_e(F.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Y){t.bindTexture(r.TEXTURE_CUBE_MAP,q.__webglTexture),Me(r.TEXTURE_CUBE_MAP,y);for(let ne=0;ne<6;ne++)if(y.mipmaps&&y.mipmaps.length>0)for(let me=0;me<y.mipmaps.length;me++)Q(F.__webglFramebuffer[ne][me],A,y,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,me);else Q(F.__webglFramebuffer[ne],A,y,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0);f(y)&&m(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ye){for(let ne=0,me=J.length;ne<me;ne++){const Ge=J[ne],ee=i.get(Ge);t.bindTexture(r.TEXTURE_2D,ee.__webglTexture),Me(r.TEXTURE_2D,Ge),Q(F.__webglFramebuffer,A,Ge,r.COLOR_ATTACHMENT0+ne,r.TEXTURE_2D,0),f(Ge)&&m(r.TEXTURE_2D)}t.unbindTexture()}else{let ne=r.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ne=A.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ne,q.__webglTexture),Me(ne,y),y.mipmaps&&y.mipmaps.length>0)for(let me=0;me<y.mipmaps.length;me++)Q(F.__webglFramebuffer[me],A,y,r.COLOR_ATTACHMENT0,ne,me);else Q(F.__webglFramebuffer,A,y,r.COLOR_ATTACHMENT0,ne,0);f(y)&&m(ne),t.unbindTexture()}A.depthBuffer&&De(A)}function qe(A){const y=A.textures;for(let F=0,q=y.length;F<q;F++){const J=y[F];if(f(J)){const Y=A.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,ye=i.get(J).__webglTexture;t.bindTexture(Y,ye),m(Y),t.unbindTexture()}}}const We=[],L=[];function si(A){if(A.samples>0){if(Xe(A)===!1){const y=A.textures,F=A.width,q=A.height;let J=r.COLOR_BUFFER_BIT;const Y=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ye=i.get(A),ne=y.length>1;if(ne)for(let me=0;me<y.length;me++)t.bindFramebuffer(r.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+me,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,ye.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+me,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let me=0;me<y.length;me++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(J|=r.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(J|=r.STENCIL_BUFFER_BIT)),ne){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ye.__webglColorRenderbuffer[me]);const Ge=i.get(y[me]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ge,0)}r.blitFramebuffer(0,0,F,q,0,0,F,q,J,r.NEAREST),l===!0&&(We.length=0,L.length=0,We.push(r.COLOR_ATTACHMENT0+me),A.depthBuffer&&A.resolveDepthBuffer===!1&&(We.push(Y),L.push(Y),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,L)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,We))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ne)for(let me=0;me<y.length;me++){t.bindFramebuffer(r.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+me,r.RENDERBUFFER,ye.__webglColorRenderbuffer[me]);const Ge=i.get(y[me]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,ye.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+me,r.TEXTURE_2D,Ge,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const y=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[y])}}}function ke(A){return Math.min(a.maxSamples,A.samples)}function Xe(A){const y=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Re(A){const y=n.render.frame;h.get(A)!==y&&(h.set(A,y),A.update())}function at(A,y){const F=A.colorSpace,q=A.format,J=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||F!==Nr&&F!==Mr&&(Ye.getTransfer(F)===st?(q!==Ui||J!==ur)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),y}function Le(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=b,this.setTexture2D=B,this.setTexture2DArray=j,this.setTexture3D=z,this.setTextureCube=K,this.rebindTextures=Te,this.setupRenderTarget=He,this.updateRenderTargetMipmap=qe,this.updateMultisampleRenderTarget=si,this.setupDepthRenderbuffer=De,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=Xe}function Hy(r,e){function t(i,a=Mr){let s;const n=Ye.getTransfer(a);if(i===ur)return r.UNSIGNED_BYTE;if(i===Nc)return r.UNSIGNED_SHORT_4_4_4_4;if(i===Fc)return r.UNSIGNED_SHORT_5_5_5_1;if(i===fp)return r.UNSIGNED_INT_5_9_9_9_REV;if(i===dp)return r.BYTE;if(i===pp)return r.SHORT;if(i===Fs)return r.UNSIGNED_SHORT;if(i===Oc)return r.INT;if(i===oa)return r.UNSIGNED_INT;if(i===nr)return r.FLOAT;if(i===Vs)return r.HALF_FLOAT;if(i===mp)return r.ALPHA;if(i===gp)return r.RGB;if(i===Ui)return r.RGBA;if(i===_p)return r.LUMINANCE;if(i===vp)return r.LUMINANCE_ALPHA;if(i===ja)return r.DEPTH_COMPONENT;if(i===as)return r.DEPTH_STENCIL;if(i===xp)return r.RED;if(i===zc)return r.RED_INTEGER;if(i===yp)return r.RG;if(i===Bc)return r.RG_INTEGER;if(i===kc)return r.RGBA_INTEGER;if(i===An||i===Rn||i===Cn||i===Pn)if(n===st)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===An)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Rn)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Cn)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Pn)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===An)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Rn)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Cn)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Pn)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Bl||i===kl||i===Gl||i===Vl)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Bl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===kl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Gl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Vl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Hl||i===Wl||i===Xl)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Hl||i===Wl)return n===st?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Xl)return n===st?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===jl||i===Yl||i===ql||i===Kl||i===Zl||i===Jl||i===$l||i===Ql||i===ec||i===tc||i===ic||i===rc||i===ac||i===sc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===jl)return n===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Yl)return n===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ql)return n===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Kl)return n===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Zl)return n===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Jl)return n===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===$l)return n===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ql)return n===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ec)return n===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===tc)return n===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ic)return n===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===rc)return n===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ac)return n===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===sc)return n===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ln||i===nc||i===oc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Ln)return n===st?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===nc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===oc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Mp||i===lc||i===cc||i===hc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Ln)return s.COMPRESSED_RED_RGTC1_EXT;if(i===lc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===cc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===hc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===rs?r.UNSIGNED_INT_24_8:r[i]!==void 0?r[i]:null}return{convert:t}}class Wy extends ui{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Lt extends bt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Xy={type:"move"};class al{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Lt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Lt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Lt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let a=null,s=null,n=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){n=!0;for(const _ of e.hand.values()){const f=t.getJointPose(_,i),m=this._getHandJoint(c,_);f!==null&&(m.matrix.fromArray(f.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=f.radius),m.visible=f!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(a=t.getPose(e.targetRaySpace,i),a===null&&s!==null&&(a=s),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Xy)))}return o!==null&&(o.visible=a!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=n!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Lt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const jy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Yy=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class qy{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const a=new Gt,s=e.properties.get(a);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Ur({vertexShader:jy,fragmentShader:Yy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ae(new Fr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Ky extends da{constructor(e,t){super();const i=this;let a=null,s=1,n=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,g=null;const _=new qy,f=t.getContextAttributes();let m=null,S=null;const x=[],M=[],C=new ie;let T=null;const w=new ui;w.layers.enable(1),w.viewport=new $e;const R=new ui;R.layers.enable(2),R.viewport=new $e;const V=[w,R],v=new Wy;v.layers.enable(1),v.layers.enable(2);let b=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let Q=x[X];return Q===void 0&&(Q=new al,x[X]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(X){let Q=x[X];return Q===void 0&&(Q=new al,x[X]=Q),Q.getGripSpace()},this.getHand=function(X){let Q=x[X];return Q===void 0&&(Q=new al,x[X]=Q),Q.getHandSpace()};function N(X){const Q=M.indexOf(X.inputSource);if(Q===-1)return;const _e=x[Q];_e!==void 0&&(_e.update(X.inputSource,X.frame,c||n),_e.dispatchEvent({type:X.type,data:X.inputSource}))}function B(){a.removeEventListener("select",N),a.removeEventListener("selectstart",N),a.removeEventListener("selectend",N),a.removeEventListener("squeeze",N),a.removeEventListener("squeezestart",N),a.removeEventListener("squeezeend",N),a.removeEventListener("end",B),a.removeEventListener("inputsourceschange",j);for(let X=0;X<x.length;X++){const Q=M[X];Q!==null&&(M[X]=null,x[X].disconnect(Q))}b=null,O=null,_.reset(),e.setRenderTarget(m),p=null,d=null,u=null,a=null,S=null,Fe.stop(),i.isPresenting=!1,e.setPixelRatio(T),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||n},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return a},this.setSession=async function(X){if(a=X,a!==null){if(m=e.getRenderTarget(),a.addEventListener("select",N),a.addEventListener("selectstart",N),a.addEventListener("selectend",N),a.addEventListener("squeeze",N),a.addEventListener("squeezestart",N),a.addEventListener("squeezeend",N),a.addEventListener("end",B),a.addEventListener("inputsourceschange",j),f.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(C),a.renderState.layers===void 0){const Q={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(a,t,Q),a.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new la(p.framebufferWidth,p.framebufferHeight,{format:Ui,type:ur,colorSpace:e.outputColorSpace,stencilBuffer:f.stencil})}else{let Q=null,_e=null,pe=null;f.depth&&(pe=f.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Q=f.stencil?as:ja,_e=f.stencil?rs:oa);const De={colorFormat:t.RGBA8,depthFormat:pe,scaleFactor:s};u=new XRWebGLBinding(a,t),d=u.createProjectionLayer(De),a.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),S=new la(d.textureWidth,d.textureHeight,{format:Ui,type:ur,depthTexture:new Op(d.textureWidth,d.textureHeight,_e,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:f.stencil,colorSpace:e.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,n=await a.requestReferenceSpace(o),Fe.setContext(a),Fe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function j(X){for(let Q=0;Q<X.removed.length;Q++){const _e=X.removed[Q],pe=M.indexOf(_e);pe>=0&&(M[pe]=null,x[pe].disconnect(_e))}for(let Q=0;Q<X.added.length;Q++){const _e=X.added[Q];let pe=M.indexOf(_e);if(pe===-1){for(let Te=0;Te<x.length;Te++)if(Te>=M.length){M.push(_e),pe=Te;break}else if(M[Te]===null){M[Te]=_e,pe=Te;break}if(pe===-1)break}const De=x[pe];De&&De.connect(_e)}}const z=new P,K=new P;function H(X,Q,_e){z.setFromMatrixPosition(Q.matrixWorld),K.setFromMatrixPosition(_e.matrixWorld);const pe=z.distanceTo(K),De=Q.projectionMatrix.elements,Te=_e.projectionMatrix.elements,He=De[14]/(De[10]-1),qe=De[14]/(De[10]+1),We=(De[9]+1)/De[5],L=(De[9]-1)/De[5],si=(De[8]-1)/De[0],ke=(Te[8]+1)/Te[0],Xe=He*si,Re=He*ke,at=pe/(-si+ke),Le=at*-si;if(Q.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Le),X.translateZ(at),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),De[10]===-1)X.projectionMatrix.copy(Q.projectionMatrix),X.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const A=He+at,y=qe+at,F=Xe-Le,q=Re+(pe-Le),J=We*qe/y*A,Y=L*qe/y*A;X.projectionMatrix.makePerspective(F,q,J,Y,A,y),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function te(X,Q){Q===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(Q.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(a===null)return;let Q=X.near,_e=X.far;_.texture!==null&&(_.depthNear>0&&(Q=_.depthNear),_.depthFar>0&&(_e=_.depthFar)),v.near=R.near=w.near=Q,v.far=R.far=w.far=_e,(b!==v.near||O!==v.far)&&(a.updateRenderState({depthNear:v.near,depthFar:v.far}),b=v.near,O=v.far);const pe=X.parent,De=v.cameras;te(v,pe);for(let Te=0;Te<De.length;Te++)te(De[Te],pe);De.length===2?H(v,w,R):v.projectionMatrix.copy(w.projectionMatrix),he(X,v,pe)};function he(X,Q,_e){_e===null?X.matrix.copy(Q.matrixWorld):(X.matrix.copy(_e.matrixWorld),X.matrix.invert(),X.matrix.multiply(Q.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(Q.projectionMatrix),X.projectionMatrixInverse.copy(Q.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=dc*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(X){l=X,d!==null&&(d.fixedFoveation=X),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=X)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(v)};let Me=null;function Be(X,Q){if(h=Q.getViewerPose(c||n),g=Q,h!==null){const _e=h.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let pe=!1;_e.length!==v.cameras.length&&(v.cameras.length=0,pe=!0);for(let Te=0;Te<_e.length;Te++){const He=_e[Te];let qe=null;if(p!==null)qe=p.getViewport(He);else{const L=u.getViewSubImage(d,He);qe=L.viewport,Te===0&&(e.setRenderTargetTextures(S,L.colorTexture,d.ignoreDepthValues?void 0:L.depthStencilTexture),e.setRenderTarget(S))}let We=V[Te];We===void 0&&(We=new ui,We.layers.enable(Te),We.viewport=new $e,V[Te]=We),We.matrix.fromArray(He.transform.matrix),We.matrix.decompose(We.position,We.quaternion,We.scale),We.projectionMatrix.fromArray(He.projectionMatrix),We.projectionMatrixInverse.copy(We.projectionMatrix).invert(),We.viewport.set(qe.x,qe.y,qe.width,qe.height),Te===0&&(v.matrix.copy(We.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),pe===!0&&v.cameras.push(We)}const De=a.enabledFeatures;if(De&&De.includes("depth-sensing")){const Te=u.getDepthInformation(_e[0]);Te&&Te.isValid&&Te.texture&&_.init(e,Te,a.renderState)}}for(let _e=0;_e<x.length;_e++){const pe=M[_e],De=x[_e];pe!==null&&De!==void 0&&De.update(pe,Q,c||n)}Me&&Me(X,Q),Q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Q}),g=null}const Fe=new Ip;Fe.setAnimationLoop(Be),this.setAnimationLoop=function(X){Me=X},this.dispose=function(){}}}const Kr=new Wi,Zy=new tt;function Jy(r,e){function t(f,m){f.matrixAutoUpdate===!0&&f.updateMatrix(),m.value.copy(f.matrix)}function i(f,m){m.color.getRGB(f.fogColor.value,Pp(r)),m.isFog?(f.fogNear.value=m.near,f.fogFar.value=m.far):m.isFogExp2&&(f.fogDensity.value=m.density)}function a(f,m,S,x,M){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(f,m):m.isMeshToonMaterial?(s(f,m),u(f,m)):m.isMeshPhongMaterial?(s(f,m),h(f,m)):m.isMeshStandardMaterial?(s(f,m),d(f,m),m.isMeshPhysicalMaterial&&p(f,m,M)):m.isMeshMatcapMaterial?(s(f,m),g(f,m)):m.isMeshDepthMaterial?s(f,m):m.isMeshDistanceMaterial?(s(f,m),_(f,m)):m.isMeshNormalMaterial?s(f,m):m.isLineBasicMaterial?(n(f,m),m.isLineDashedMaterial&&o(f,m)):m.isPointsMaterial?l(f,m,S,x):m.isSpriteMaterial?c(f,m):m.isShadowMaterial?(f.color.value.copy(m.color),f.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(f,m){f.opacity.value=m.opacity,m.color&&f.diffuse.value.copy(m.color),m.emissive&&f.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(f.map.value=m.map,t(m.map,f.mapTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,t(m.alphaMap,f.alphaMapTransform)),m.bumpMap&&(f.bumpMap.value=m.bumpMap,t(m.bumpMap,f.bumpMapTransform),f.bumpScale.value=m.bumpScale,m.side===ii&&(f.bumpScale.value*=-1)),m.normalMap&&(f.normalMap.value=m.normalMap,t(m.normalMap,f.normalMapTransform),f.normalScale.value.copy(m.normalScale),m.side===ii&&f.normalScale.value.negate()),m.displacementMap&&(f.displacementMap.value=m.displacementMap,t(m.displacementMap,f.displacementMapTransform),f.displacementScale.value=m.displacementScale,f.displacementBias.value=m.displacementBias),m.emissiveMap&&(f.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,f.emissiveMapTransform)),m.specularMap&&(f.specularMap.value=m.specularMap,t(m.specularMap,f.specularMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest);const S=e.get(m),x=S.envMap,M=S.envMapRotation;x&&(f.envMap.value=x,Kr.copy(M),Kr.x*=-1,Kr.y*=-1,Kr.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Kr.y*=-1,Kr.z*=-1),f.envMapRotation.value.setFromMatrix4(Zy.makeRotationFromEuler(Kr)),f.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=m.reflectivity,f.ior.value=m.ior,f.refractionRatio.value=m.refractionRatio),m.lightMap&&(f.lightMap.value=m.lightMap,f.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,f.lightMapTransform)),m.aoMap&&(f.aoMap.value=m.aoMap,f.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,f.aoMapTransform))}function n(f,m){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,m.map&&(f.map.value=m.map,t(m.map,f.mapTransform))}function o(f,m){f.dashSize.value=m.dashSize,f.totalSize.value=m.dashSize+m.gapSize,f.scale.value=m.scale}function l(f,m,S,x){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,f.size.value=m.size*S,f.scale.value=x*.5,m.map&&(f.map.value=m.map,t(m.map,f.uvTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,t(m.alphaMap,f.alphaMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest)}function c(f,m){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,f.rotation.value=m.rotation,m.map&&(f.map.value=m.map,t(m.map,f.mapTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,t(m.alphaMap,f.alphaMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest)}function h(f,m){f.specular.value.copy(m.specular),f.shininess.value=Math.max(m.shininess,1e-4)}function u(f,m){m.gradientMap&&(f.gradientMap.value=m.gradientMap)}function d(f,m){f.metalness.value=m.metalness,m.metalnessMap&&(f.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,f.metalnessMapTransform)),f.roughness.value=m.roughness,m.roughnessMap&&(f.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,f.roughnessMapTransform)),m.envMap&&(f.envMapIntensity.value=m.envMapIntensity)}function p(f,m,S){f.ior.value=m.ior,m.sheen>0&&(f.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),f.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(f.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,f.sheenColorMapTransform)),m.sheenRoughnessMap&&(f.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,f.sheenRoughnessMapTransform))),m.clearcoat>0&&(f.clearcoat.value=m.clearcoat,f.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(f.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,f.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(f.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===ii&&f.clearcoatNormalScale.value.negate())),m.dispersion>0&&(f.dispersion.value=m.dispersion),m.iridescence>0&&(f.iridescence.value=m.iridescence,f.iridescenceIOR.value=m.iridescenceIOR,f.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(f.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,f.iridescenceMapTransform)),m.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),m.transmission>0&&(f.transmission.value=m.transmission,f.transmissionSamplerMap.value=S.texture,f.transmissionSamplerSize.value.set(S.width,S.height),m.transmissionMap&&(f.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,f.transmissionMapTransform)),f.thickness.value=m.thickness,m.thicknessMap&&(f.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=m.attenuationDistance,f.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(f.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(f.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=m.specularIntensity,f.specularColor.value.copy(m.specularColor),m.specularColorMap&&(f.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,f.specularColorMapTransform)),m.specularIntensityMap&&(f.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,f.specularIntensityMapTransform))}function g(f,m){m.matcap&&(f.matcap.value=m.matcap)}function _(f,m){const S=e.get(m).light;f.referencePosition.value.setFromMatrixPosition(S.matrixWorld),f.nearDistance.value=S.shadow.camera.near,f.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function $y(r,e,t,i){let a={},s={},n=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,x){const M=x.program;i.uniformBlockBinding(S,M)}function c(S,x){let M=a[S.id];M===void 0&&(g(S),M=h(S),a[S.id]=M,S.addEventListener("dispose",f));const C=x.program;i.updateUBOMapping(S,C);const T=e.render.frame;s[S.id]!==T&&(d(S),s[S.id]=T)}function h(S){const x=u();S.__bindingPointIndex=x;const M=r.createBuffer(),C=S.__size,T=S.usage;return r.bindBuffer(r.UNIFORM_BUFFER,M),r.bufferData(r.UNIFORM_BUFFER,C,T),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,x,M),M}function u(){for(let S=0;S<o;S++)if(n.indexOf(S)===-1)return n.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const x=a[S.id],M=S.uniforms,C=S.__cache;r.bindBuffer(r.UNIFORM_BUFFER,x);for(let T=0,w=M.length;T<w;T++){const R=Array.isArray(M[T])?M[T]:[M[T]];for(let V=0,v=R.length;V<v;V++){const b=R[V];if(p(b,T,V,C)===!0){const O=b.__offset,N=Array.isArray(b.value)?b.value:[b.value];let B=0;for(let j=0;j<N.length;j++){const z=N[j],K=_(z);typeof z=="number"||typeof z=="boolean"?(b.__data[0]=z,r.bufferSubData(r.UNIFORM_BUFFER,O+B,b.__data)):z.isMatrix3?(b.__data[0]=z.elements[0],b.__data[1]=z.elements[1],b.__data[2]=z.elements[2],b.__data[3]=0,b.__data[4]=z.elements[3],b.__data[5]=z.elements[4],b.__data[6]=z.elements[5],b.__data[7]=0,b.__data[8]=z.elements[6],b.__data[9]=z.elements[7],b.__data[10]=z.elements[8],b.__data[11]=0):(z.toArray(b.__data,B),B+=K.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,O,b.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function p(S,x,M,C){const T=S.value,w=x+"_"+M;if(C[w]===void 0)return typeof T=="number"||typeof T=="boolean"?C[w]=T:C[w]=T.clone(),!0;{const R=C[w];if(typeof T=="number"||typeof T=="boolean"){if(R!==T)return C[w]=T,!0}else if(R.equals(T)===!1)return R.copy(T),!0}return!1}function g(S){const x=S.uniforms;let M=0;const C=16;for(let w=0,R=x.length;w<R;w++){const V=Array.isArray(x[w])?x[w]:[x[w]];for(let v=0,b=V.length;v<b;v++){const O=V[v],N=Array.isArray(O.value)?O.value:[O.value];for(let B=0,j=N.length;B<j;B++){const z=N[B],K=_(z),H=M%C,te=H%K.boundary,he=H+te;M+=te,he!==0&&C-he<K.storage&&(M+=C-he),O.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=M,M+=K.storage}}}const T=M%C;return T>0&&(M+=C-T),S.__size=M,S.__cache={},this}function _(S){const x={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(x.boundary=4,x.storage=4):S.isVector2?(x.boundary=8,x.storage=8):S.isVector3||S.isColor?(x.boundary=16,x.storage=12):S.isVector4?(x.boundary=16,x.storage=16):S.isMatrix3?(x.boundary=48,x.storage=48):S.isMatrix4?(x.boundary=64,x.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),x}function f(S){const x=S.target;x.removeEventListener("dispose",f);const M=n.indexOf(x.__bindingPointIndex);n.splice(M,1),r.deleteBuffer(a[x.id]),delete a[x.id],delete s[x.id]}function m(){for(const S in a)r.deleteBuffer(a[S]);n=[],a={},s={}}return{bind:l,update:c,dispose:m}}class Qy{constructor(e={}){const{canvas:t=kg(),context:i=null,depth:a=!0,stencil:s=!1,alpha:n=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=n;const p=new Uint32Array(4),g=new Int32Array(4);let _=null,f=null;const m=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Di,this.toneMapping=Rr,this.toneMappingExposure=1;const x=this;let M=!1,C=0,T=0,w=null,R=-1,V=null;const v=new $e,b=new $e;let O=null;const N=new Ue(0);let B=0,j=t.width,z=t.height,K=1,H=null,te=null;const he=new $e(0,0,j,z),Me=new $e(0,0,j,z);let Be=!1;const Fe=new Wc;let X=!1,Q=!1;const _e=new tt,pe=new tt,De=new P,Te=new $e,He={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let qe=!1;function We(){return w===null?K:1}let L=i;function si(E,U){return t.getContext(E,U)}try{const E={alpha:!0,depth:a,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Uc}`),t.addEventListener("webglcontextlost",Z,!1),t.addEventListener("webglcontextrestored",le,!1),t.addEventListener("webglcontextcreationerror",se,!1),L===null){const U="webgl2";if(L=si(U,E),L===null)throw si(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let ke,Xe,Re,at,Le,A,y,F,q,J,Y,ye,ne,me,Ge,ee,ve,Ce,Pe,fe,Ve,Ie,it,D;function ce(){ke=new ax(L),ke.init(),Ie=new Hy(L,ke),Xe=new $0(L,ke,e,Ie),Re=new ky(L),Xe.reverseDepthBuffer&&Re.buffers.depth.setReversed(!0),at=new ox(L),Le=new wy,A=new Vy(L,ke,Re,Le,Xe,Ie,at),y=new ex(x),F=new rx(x),q=new f_(L),it=new Z0(L,q),J=new sx(L,q,at,it),Y=new cx(L,J,q,at),Pe=new lx(L,Xe,A),ee=new Q0(Le),ye=new by(x,y,F,ke,Xe,it,ee),ne=new Jy(x,Le),me=new Ay,Ge=new Iy(ke),Ce=new K0(x,y,F,Re,Y,d,l),ve=new zy(x,Y,Xe),D=new $y(L,at,Xe,Re),fe=new J0(L,ke,at),Ve=new nx(L,ke,at),at.programs=ye.programs,x.capabilities=Xe,x.extensions=ke,x.properties=Le,x.renderLists=me,x.shadowMap=ve,x.state=Re,x.info=at}ce();const W=new Ky(x,L);this.xr=W,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const E=ke.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=ke.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(E){E!==void 0&&(K=E,this.setSize(j,z,!1))},this.getSize=function(E){return E.set(j,z)},this.setSize=function(E,U,k=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=E,z=U,t.width=Math.floor(E*K),t.height=Math.floor(U*K),k===!0&&(t.style.width=E+"px",t.style.height=U+"px"),this.setViewport(0,0,E,U)},this.getDrawingBufferSize=function(E){return E.set(j*K,z*K).floor()},this.setDrawingBufferSize=function(E,U,k){j=E,z=U,K=k,t.width=Math.floor(E*k),t.height=Math.floor(U*k),this.setViewport(0,0,E,U)},this.getCurrentViewport=function(E){return E.copy(v)},this.getViewport=function(E){return E.copy(he)},this.setViewport=function(E,U,k,G){E.isVector4?he.set(E.x,E.y,E.z,E.w):he.set(E,U,k,G),Re.viewport(v.copy(he).multiplyScalar(K).round())},this.getScissor=function(E){return E.copy(Me)},this.setScissor=function(E,U,k,G){E.isVector4?Me.set(E.x,E.y,E.z,E.w):Me.set(E,U,k,G),Re.scissor(b.copy(Me).multiplyScalar(K).round())},this.getScissorTest=function(){return Be},this.setScissorTest=function(E){Re.setScissorTest(Be=E)},this.setOpaqueSort=function(E){H=E},this.setTransparentSort=function(E){te=E},this.getClearColor=function(E){return E.copy(Ce.getClearColor())},this.setClearColor=function(){Ce.setClearColor.apply(Ce,arguments)},this.getClearAlpha=function(){return Ce.getClearAlpha()},this.setClearAlpha=function(){Ce.setClearAlpha.apply(Ce,arguments)},this.clear=function(E=!0,U=!0,k=!0){let G=0;if(E){let I=!1;if(w!==null){const $=w.texture.format;I=$===kc||$===Bc||$===zc}if(I){const $=w.texture.type,ue=$===ur||$===oa||$===Fs||$===rs||$===Nc||$===Fc,ge=Ce.getClearColor(),xe=Ce.getClearAlpha(),Ae=ge.r,we=ge.g,be=ge.b;ue?(p[0]=Ae,p[1]=we,p[2]=be,p[3]=xe,L.clearBufferuiv(L.COLOR,0,p)):(g[0]=Ae,g[1]=we,g[2]=be,g[3]=xe,L.clearBufferiv(L.COLOR,0,g))}else G|=L.COLOR_BUFFER_BIT}U&&(G|=L.DEPTH_BUFFER_BIT,L.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),k&&(G|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Z,!1),t.removeEventListener("webglcontextrestored",le,!1),t.removeEventListener("webglcontextcreationerror",se,!1),me.dispose(),Ge.dispose(),Le.dispose(),y.dispose(),F.dispose(),Y.dispose(),it.dispose(),D.dispose(),ye.dispose(),W.dispose(),W.removeEventListener("sessionstart",Rh),W.removeEventListener("sessionend",Ch),kr.stop()};function Z(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function le(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const E=at.autoReset,U=ve.enabled,k=ve.autoUpdate,G=ve.needsUpdate,I=ve.type;ce(),at.autoReset=E,ve.enabled=U,ve.autoUpdate=k,ve.needsUpdate=G,ve.type=I}function se(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function rt(E){const U=E.target;U.removeEventListener("dispose",rt),xt(U)}function xt(E){Yt(E),Le.remove(E)}function Yt(E){const U=Le.get(E).programs;U!==void 0&&(U.forEach(function(k){ye.releaseProgram(k)}),E.isShaderMaterial&&ye.releaseShaderCache(E))}this.renderBufferDirect=function(E,U,k,G,I,$){U===null&&(U=He);const ue=I.isMesh&&I.matrixWorld.determinant()<0,ge=Pf(E,U,k,G,I);Re.setMaterial(G,ue);let xe=k.index,Ae=1;if(G.wireframe===!0){if(xe=J.getWireframeAttribute(k),xe===void 0)return;Ae=2}const we=k.drawRange,be=k.attributes.position;let Ke=we.start*Ae,ct=(we.start+we.count)*Ae;$!==null&&(Ke=Math.max(Ke,$.start*Ae),ct=Math.min(ct,($.start+$.count)*Ae)),xe!==null?(Ke=Math.max(Ke,0),ct=Math.min(ct,xe.count)):be!=null&&(Ke=Math.max(Ke,0),ct=Math.min(ct,be.count));const gt=ct-Ke;if(gt<0||gt===1/0)return;it.setup(I,G,ge,k,xe);let St,nt=fe;if(xe!==null&&(St=q.get(xe),nt=Ve,nt.setIndex(St)),I.isMesh)G.wireframe===!0?(Re.setLineWidth(G.wireframeLinewidth*We()),nt.setMode(L.LINES)):nt.setMode(L.TRIANGLES);else if(I.isLine){let Se=G.linewidth;Se===void 0&&(Se=1),Re.setLineWidth(Se*We()),I.isLineSegments?nt.setMode(L.LINES):I.isLineLoop?nt.setMode(L.LINE_LOOP):nt.setMode(L.LINE_STRIP)}else I.isPoints?nt.setMode(L.POINTS):I.isSprite&&nt.setMode(L.TRIANGLES);if(I.isBatchedMesh)if(I._multiDrawInstances!==null)nt.renderMultiDrawInstances(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount,I._multiDrawInstances);else if(ke.get("WEBGL_multi_draw"))nt.renderMultiDraw(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount);else{const Se=I._multiDrawStarts,Ht=I._multiDrawCounts,Gr=I._multiDrawCount,Ri=xe?q.get(xe).bytesPerElement:1,_a=Le.get(G).currentProgram.getUniforms();for(let ni=0;ni<Gr;ni++)_a.setValue(L,"_gl_DrawID",ni),nt.render(Se[ni]/Ri,Ht[ni])}else if(I.isInstancedMesh)nt.renderInstances(Ke,gt,I.count);else if(k.isInstancedBufferGeometry){const Se=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,Ht=Math.min(k.instanceCount,Se);nt.renderInstances(Ke,gt,Ht)}else nt.render(Ke,gt)};function je(E,U,k){E.transparent===!0&&E.side===sr&&E.forceSinglePass===!1?(E.side=ii,E.needsUpdate=!0,Ys(E,U,k),E.side=Ir,E.needsUpdate=!0,Ys(E,U,k),E.side=sr):Ys(E,U,k)}this.compile=function(E,U,k=null){k===null&&(k=E),f=Ge.get(k),f.init(U),S.push(f),k.traverseVisible(function(I){I.isLight&&I.layers.test(U.layers)&&(f.pushLight(I),I.castShadow&&f.pushShadow(I))}),E!==k&&E.traverseVisible(function(I){I.isLight&&I.layers.test(U.layers)&&(f.pushLight(I),I.castShadow&&f.pushShadow(I))}),f.setupLights();const G=new Set;return E.traverse(function(I){if(!(I.isMesh||I.isPoints||I.isLine||I.isSprite))return;const $=I.material;if($)if(Array.isArray($))for(let ue=0;ue<$.length;ue++){const ge=$[ue];je(ge,k,I),G.add(ge)}else je($,k,I),G.add($)}),S.pop(),f=null,G},this.compileAsync=function(E,U,k=null){const G=this.compile(E,U,k);return new Promise(I=>{function $(){if(G.forEach(function(ue){Le.get(ue).currentProgram.isReady()&&G.delete(ue)}),G.size===0){I(E);return}setTimeout($,10)}ke.get("KHR_parallel_shader_compile")!==null?$():setTimeout($,10)})};let qt=null;function Zi(E){qt&&qt(E)}function Rh(){kr.stop()}function Ch(){kr.start()}const kr=new Ip;kr.setAnimationLoop(Zi),typeof self<"u"&&kr.setContext(self),this.setAnimationLoop=function(E){qt=E,W.setAnimationLoop(E),E===null?kr.stop():kr.start()},W.addEventListener("sessionstart",Rh),W.addEventListener("sessionend",Ch),this.render=function(E,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(U),U=W.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,U,w),f=Ge.get(E,S.length),f.init(U),S.push(f),pe.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Fe.setFromProjectionMatrix(pe),Q=this.localClippingEnabled,X=ee.init(this.clippingPlanes,Q),_=me.get(E,m.length),_.init(),m.push(_),W.enabled===!0&&W.isPresenting===!0){const $=x.xr.getDepthSensingMesh();$!==null&&_o($,U,-1/0,x.sortObjects)}_o(E,U,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(H,te),qe=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,qe&&Ce.addToRenderList(_,E),this.info.render.frame++,X===!0&&ee.beginShadows();const k=f.state.shadowsArray;ve.render(k,E,U),X===!0&&ee.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=_.opaque,I=_.transmissive;if(f.setupLights(),U.isArrayCamera){const $=U.cameras;if(I.length>0)for(let ue=0,ge=$.length;ue<ge;ue++){const xe=$[ue];Lh(G,I,E,xe)}qe&&Ce.render(E);for(let ue=0,ge=$.length;ue<ge;ue++){const xe=$[ue];Ph(_,E,xe,xe.viewport)}}else I.length>0&&Lh(G,I,E,U),qe&&Ce.render(E),Ph(_,E,U);w!==null&&(A.updateMultisampleRenderTarget(w),A.updateRenderTargetMipmap(w)),E.isScene===!0&&E.onAfterRender(x,E,U),it.resetDefaultState(),R=-1,V=null,S.pop(),S.length>0?(f=S[S.length-1],X===!0&&ee.setGlobalState(x.clippingPlanes,f.state.camera)):f=null,m.pop(),m.length>0?_=m[m.length-1]:_=null};function _o(E,U,k,G){if(E.visible===!1)return;if(E.layers.test(U.layers)){if(E.isGroup)k=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(U);else if(E.isLight)f.pushLight(E),E.castShadow&&f.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Fe.intersectsSprite(E)){G&&Te.setFromMatrixPosition(E.matrixWorld).applyMatrix4(pe);const $=Y.update(E),ue=E.material;ue.visible&&_.push(E,$,ue,k,Te.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Fe.intersectsObject(E))){const $=Y.update(E),ue=E.material;if(G&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Te.copy(E.boundingSphere.center)):($.boundingSphere===null&&$.computeBoundingSphere(),Te.copy($.boundingSphere.center)),Te.applyMatrix4(E.matrixWorld).applyMatrix4(pe)),Array.isArray(ue)){const ge=$.groups;for(let xe=0,Ae=ge.length;xe<Ae;xe++){const we=ge[xe],be=ue[we.materialIndex];be&&be.visible&&_.push(E,$,be,k,Te.z,we)}}else ue.visible&&_.push(E,$,ue,k,Te.z,null)}}const I=E.children;for(let $=0,ue=I.length;$<ue;$++)_o(I[$],U,k,G)}function Ph(E,U,k,G){const I=E.opaque,$=E.transmissive,ue=E.transparent;f.setupLightsView(k),X===!0&&ee.setGlobalState(x.clippingPlanes,k),G&&Re.viewport(v.copy(G)),I.length>0&&js(I,U,k),$.length>0&&js($,U,k),ue.length>0&&js(ue,U,k),Re.buffers.depth.setTest(!0),Re.buffers.depth.setMask(!0),Re.buffers.color.setMask(!0),Re.setPolygonOffset(!1)}function Lh(E,U,k,G){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[G.id]===void 0&&(f.state.transmissionRenderTarget[G.id]=new la(1,1,{generateMipmaps:!0,type:ke.has("EXT_color_buffer_half_float")||ke.has("EXT_color_buffer_float")?Vs:ur,minFilter:ia,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ye.workingColorSpace}));const I=f.state.transmissionRenderTarget[G.id],$=G.viewport||v;I.setSize($.z,$.w);const ue=x.getRenderTarget();x.setRenderTarget(I),x.getClearColor(N),B=x.getClearAlpha(),B<1&&x.setClearColor(16777215,.5),x.clear(),qe&&Ce.render(k);const ge=x.toneMapping;x.toneMapping=Rr;const xe=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),f.setupLightsView(G),X===!0&&ee.setGlobalState(x.clippingPlanes,G),js(E,k,G),A.updateMultisampleRenderTarget(I),A.updateRenderTargetMipmap(I),ke.has("WEBGL_multisampled_render_to_texture")===!1){let Ae=!1;for(let we=0,be=U.length;we<be;we++){const Ke=U[we],ct=Ke.object,gt=Ke.geometry,St=Ke.material,nt=Ke.group;if(St.side===sr&&ct.layers.test(G.layers)){const Se=St.side;St.side=ii,St.needsUpdate=!0,Dh(ct,k,G,gt,St,nt),St.side=Se,St.needsUpdate=!0,Ae=!0}}Ae===!0&&(A.updateMultisampleRenderTarget(I),A.updateRenderTargetMipmap(I))}x.setRenderTarget(ue),x.setClearColor(N,B),xe!==void 0&&(G.viewport=xe),x.toneMapping=ge}function js(E,U,k){const G=U.isScene===!0?U.overrideMaterial:null;for(let I=0,$=E.length;I<$;I++){const ue=E[I],ge=ue.object,xe=ue.geometry,Ae=G===null?ue.material:G,we=ue.group;ge.layers.test(k.layers)&&Dh(ge,U,k,xe,Ae,we)}}function Dh(E,U,k,G,I,$){E.onBeforeRender(x,U,k,G,I,$),E.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),I.onBeforeRender(x,U,k,G,E,$),I.transparent===!0&&I.side===sr&&I.forceSinglePass===!1?(I.side=ii,I.needsUpdate=!0,x.renderBufferDirect(k,U,G,I,E,$),I.side=Ir,I.needsUpdate=!0,x.renderBufferDirect(k,U,G,I,E,$),I.side=sr):x.renderBufferDirect(k,U,G,I,E,$),E.onAfterRender(x,U,k,G,I,$)}function Ys(E,U,k){U.isScene!==!0&&(U=He);const G=Le.get(E),I=f.state.lights,$=f.state.shadowsArray,ue=I.state.version,ge=ye.getParameters(E,I.state,$,U,k),xe=ye.getProgramCacheKey(ge);let Ae=G.programs;G.environment=E.isMeshStandardMaterial?U.environment:null,G.fog=U.fog,G.envMap=(E.isMeshStandardMaterial?F:y).get(E.envMap||G.environment),G.envMapRotation=G.environment!==null&&E.envMap===null?U.environmentRotation:E.envMapRotation,Ae===void 0&&(E.addEventListener("dispose",rt),Ae=new Map,G.programs=Ae);let we=Ae.get(xe);if(we!==void 0){if(G.currentProgram===we&&G.lightsStateVersion===ue)return Uh(E,ge),we}else ge.uniforms=ye.getUniforms(E),E.onBeforeCompile(ge,x),we=ye.acquireProgram(ge,xe),Ae.set(xe,we),G.uniforms=ge.uniforms;const be=G.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(be.clippingPlanes=ee.uniform),Uh(E,ge),G.needsLights=Df(E),G.lightsStateVersion=ue,G.needsLights&&(be.ambientLightColor.value=I.state.ambient,be.lightProbe.value=I.state.probe,be.directionalLights.value=I.state.directional,be.directionalLightShadows.value=I.state.directionalShadow,be.spotLights.value=I.state.spot,be.spotLightShadows.value=I.state.spotShadow,be.rectAreaLights.value=I.state.rectArea,be.ltc_1.value=I.state.rectAreaLTC1,be.ltc_2.value=I.state.rectAreaLTC2,be.pointLights.value=I.state.point,be.pointLightShadows.value=I.state.pointShadow,be.hemisphereLights.value=I.state.hemi,be.directionalShadowMap.value=I.state.directionalShadowMap,be.directionalShadowMatrix.value=I.state.directionalShadowMatrix,be.spotShadowMap.value=I.state.spotShadowMap,be.spotLightMatrix.value=I.state.spotLightMatrix,be.spotLightMap.value=I.state.spotLightMap,be.pointShadowMap.value=I.state.pointShadowMap,be.pointShadowMatrix.value=I.state.pointShadowMatrix),G.currentProgram=we,G.uniformsList=null,we}function Ih(E){if(E.uniformsList===null){const U=E.currentProgram.getUniforms();E.uniformsList=Un.seqWithValue(U.seq,E.uniforms)}return E.uniformsList}function Uh(E,U){const k=Le.get(E);k.outputColorSpace=U.outputColorSpace,k.batching=U.batching,k.batchingColor=U.batchingColor,k.instancing=U.instancing,k.instancingColor=U.instancingColor,k.instancingMorph=U.instancingMorph,k.skinning=U.skinning,k.morphTargets=U.morphTargets,k.morphNormals=U.morphNormals,k.morphColors=U.morphColors,k.morphTargetsCount=U.morphTargetsCount,k.numClippingPlanes=U.numClippingPlanes,k.numIntersection=U.numClipIntersection,k.vertexAlphas=U.vertexAlphas,k.vertexTangents=U.vertexTangents,k.toneMapping=U.toneMapping}function Pf(E,U,k,G,I){U.isScene!==!0&&(U=He),A.resetTextureUnits();const $=U.fog,ue=G.isMeshStandardMaterial?U.environment:null,ge=w===null?x.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Nr,xe=(G.isMeshStandardMaterial?F:y).get(G.envMap||ue),Ae=G.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,we=!!k.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),be=!!k.morphAttributes.position,Ke=!!k.morphAttributes.normal,ct=!!k.morphAttributes.color;let gt=Rr;G.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(gt=x.toneMapping);const St=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,nt=St!==void 0?St.length:0,Se=Le.get(G),Ht=f.state.lights;if(X===!0&&(Q===!0||E!==V)){const xi=E===V&&G.id===R;ee.setState(G,E,xi)}let Gr=!1;G.version===Se.__version?(Se.needsLights&&Se.lightsStateVersion!==Ht.state.version||Se.outputColorSpace!==ge||I.isBatchedMesh&&Se.batching===!1||!I.isBatchedMesh&&Se.batching===!0||I.isBatchedMesh&&Se.batchingColor===!0&&I.colorTexture===null||I.isBatchedMesh&&Se.batchingColor===!1&&I.colorTexture!==null||I.isInstancedMesh&&Se.instancing===!1||!I.isInstancedMesh&&Se.instancing===!0||I.isSkinnedMesh&&Se.skinning===!1||!I.isSkinnedMesh&&Se.skinning===!0||I.isInstancedMesh&&Se.instancingColor===!0&&I.instanceColor===null||I.isInstancedMesh&&Se.instancingColor===!1&&I.instanceColor!==null||I.isInstancedMesh&&Se.instancingMorph===!0&&I.morphTexture===null||I.isInstancedMesh&&Se.instancingMorph===!1&&I.morphTexture!==null||Se.envMap!==xe||G.fog===!0&&Se.fog!==$||Se.numClippingPlanes!==void 0&&(Se.numClippingPlanes!==ee.numPlanes||Se.numIntersection!==ee.numIntersection)||Se.vertexAlphas!==Ae||Se.vertexTangents!==we||Se.morphTargets!==be||Se.morphNormals!==Ke||Se.morphColors!==ct||Se.toneMapping!==gt||Se.morphTargetsCount!==nt)&&(Gr=!0):(Gr=!0,Se.__version=G.version);let Ri=Se.currentProgram;Gr===!0&&(Ri=Ys(G,U,I));let _a=!1,ni=!1,vo=!1;const _t=Ri.getUniforms(),pr=Se.uniforms;if(Re.useProgram(Ri.program)&&(_a=!0,ni=!0,vo=!0),G.id!==R&&(R=G.id,ni=!0),_a||V!==E){Xe.reverseDepthBuffer?(_e.copy(E.projectionMatrix),Vg(_e),Hg(_e),_t.setValue(L,"projectionMatrix",_e)):_t.setValue(L,"projectionMatrix",E.projectionMatrix),_t.setValue(L,"viewMatrix",E.matrixWorldInverse);const xi=_t.map.cameraPosition;xi!==void 0&&xi.setValue(L,De.setFromMatrixPosition(E.matrixWorld)),Xe.logarithmicDepthBuffer&&_t.setValue(L,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&_t.setValue(L,"isOrthographic",E.isOrthographicCamera===!0),V!==E&&(V=E,ni=!0,vo=!0)}if(I.isSkinnedMesh){_t.setOptional(L,I,"bindMatrix"),_t.setOptional(L,I,"bindMatrixInverse");const xi=I.skeleton;xi&&(xi.boneTexture===null&&xi.computeBoneTexture(),_t.setValue(L,"boneTexture",xi.boneTexture,A))}I.isBatchedMesh&&(_t.setOptional(L,I,"batchingTexture"),_t.setValue(L,"batchingTexture",I._matricesTexture,A),_t.setOptional(L,I,"batchingIdTexture"),_t.setValue(L,"batchingIdTexture",I._indirectTexture,A),_t.setOptional(L,I,"batchingColorTexture"),I._colorsTexture!==null&&_t.setValue(L,"batchingColorTexture",I._colorsTexture,A));const xo=k.morphAttributes;if((xo.position!==void 0||xo.normal!==void 0||xo.color!==void 0)&&Pe.update(I,k,Ri),(ni||Se.receiveShadow!==I.receiveShadow)&&(Se.receiveShadow=I.receiveShadow,_t.setValue(L,"receiveShadow",I.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(pr.envMap.value=xe,pr.flipEnvMap.value=xe.isCubeTexture&&xe.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&U.environment!==null&&(pr.envMapIntensity.value=U.environmentIntensity),ni&&(_t.setValue(L,"toneMappingExposure",x.toneMappingExposure),Se.needsLights&&Lf(pr,vo),$&&G.fog===!0&&ne.refreshFogUniforms(pr,$),ne.refreshMaterialUniforms(pr,G,K,z,f.state.transmissionRenderTarget[E.id]),Un.upload(L,Ih(Se),pr,A)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Un.upload(L,Ih(Se),pr,A),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&_t.setValue(L,"center",I.center),_t.setValue(L,"modelViewMatrix",I.modelViewMatrix),_t.setValue(L,"normalMatrix",I.normalMatrix),_t.setValue(L,"modelMatrix",I.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const xi=G.uniformsGroups;for(let yo=0,If=xi.length;yo<If;yo++){const Oh=xi[yo];D.update(Oh,Ri),D.bind(Oh,Ri)}}return Ri}function Lf(E,U){E.ambientLightColor.needsUpdate=U,E.lightProbe.needsUpdate=U,E.directionalLights.needsUpdate=U,E.directionalLightShadows.needsUpdate=U,E.pointLights.needsUpdate=U,E.pointLightShadows.needsUpdate=U,E.spotLights.needsUpdate=U,E.spotLightShadows.needsUpdate=U,E.rectAreaLights.needsUpdate=U,E.hemisphereLights.needsUpdate=U}function Df(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(E,U,k){Le.get(E.texture).__webglTexture=U,Le.get(E.depthTexture).__webglTexture=k;const G=Le.get(E);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=k===void 0,G.__autoAllocateDepthBuffer||ke.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,U){const k=Le.get(E);k.__webglFramebuffer=U,k.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(E,U=0,k=0){w=E,C=U,T=k;let G=!0,I=null,$=!1,ue=!1;if(E){const ge=Le.get(E);if(ge.__useDefaultFramebuffer!==void 0)Re.bindFramebuffer(L.FRAMEBUFFER,null),G=!1;else if(ge.__webglFramebuffer===void 0)A.setupRenderTarget(E);else if(ge.__hasExternalTextures)A.rebindTextures(E,Le.get(E.texture).__webglTexture,Le.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const we=E.depthTexture;if(ge.__boundDepthTexture!==we){if(we!==null&&Le.has(we)&&(E.width!==we.image.width||E.height!==we.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(E)}}const xe=E.texture;(xe.isData3DTexture||xe.isDataArrayTexture||xe.isCompressedArrayTexture)&&(ue=!0);const Ae=Le.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ae[U])?I=Ae[U][k]:I=Ae[U],$=!0):E.samples>0&&A.useMultisampledRTT(E)===!1?I=Le.get(E).__webglMultisampledFramebuffer:Array.isArray(Ae)?I=Ae[k]:I=Ae,v.copy(E.viewport),b.copy(E.scissor),O=E.scissorTest}else v.copy(he).multiplyScalar(K).floor(),b.copy(Me).multiplyScalar(K).floor(),O=Be;if(Re.bindFramebuffer(L.FRAMEBUFFER,I)&&G&&Re.drawBuffers(E,I),Re.viewport(v),Re.scissor(b),Re.setScissorTest(O),$){const ge=Le.get(E.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+U,ge.__webglTexture,k)}else if(ue){const ge=Le.get(E.texture),xe=U||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,ge.__webglTexture,k||0,xe)}R=-1},this.readRenderTargetPixels=function(E,U,k,G,I,$,ue){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ge=Le.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ue!==void 0&&(ge=ge[ue]),ge){Re.bindFramebuffer(L.FRAMEBUFFER,ge);try{const xe=E.texture,Ae=xe.format,we=xe.type;if(!Xe.textureFormatReadable(Ae)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Xe.textureTypeReadable(we)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=E.width-G&&k>=0&&k<=E.height-I&&L.readPixels(U,k,G,I,Ie.convert(Ae),Ie.convert(we),$)}finally{const xe=w!==null?Le.get(w).__webglFramebuffer:null;Re.bindFramebuffer(L.FRAMEBUFFER,xe)}}},this.readRenderTargetPixelsAsync=async function(E,U,k,G,I,$,ue){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ge=Le.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ue!==void 0&&(ge=ge[ue]),ge){const xe=E.texture,Ae=xe.format,we=xe.type;if(!Xe.textureFormatReadable(Ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Xe.textureTypeReadable(we))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=E.width-G&&k>=0&&k<=E.height-I){Re.bindFramebuffer(L.FRAMEBUFFER,ge);const be=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,be),L.bufferData(L.PIXEL_PACK_BUFFER,$.byteLength,L.STREAM_READ),L.readPixels(U,k,G,I,Ie.convert(Ae),Ie.convert(we),0);const Ke=w!==null?Le.get(w).__webglFramebuffer:null;Re.bindFramebuffer(L.FRAMEBUFFER,Ke);const ct=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Gg(L,ct,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,be),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,$),L.deleteBuffer(be),L.deleteSync(ct),$}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,U=null,k=0){E.isTexture!==!0&&(In("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,E=arguments[1]);const G=Math.pow(2,-k),I=Math.floor(E.image.width*G),$=Math.floor(E.image.height*G),ue=U!==null?U.x:0,ge=U!==null?U.y:0;A.setTexture2D(E,0),L.copyTexSubImage2D(L.TEXTURE_2D,k,0,0,ue,ge,I,$),Re.unbindTexture()},this.copyTextureToTexture=function(E,U,k=null,G=null,I=0){E.isTexture!==!0&&(In("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,E=arguments[1],U=arguments[2],I=arguments[3]||0,k=null);let $,ue,ge,xe,Ae,we;k!==null?($=k.max.x-k.min.x,ue=k.max.y-k.min.y,ge=k.min.x,xe=k.min.y):($=E.image.width,ue=E.image.height,ge=0,xe=0),G!==null?(Ae=G.x,we=G.y):(Ae=0,we=0);const be=Ie.convert(U.format),Ke=Ie.convert(U.type);A.setTexture2D(U,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,U.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,U.unpackAlignment);const ct=L.getParameter(L.UNPACK_ROW_LENGTH),gt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),St=L.getParameter(L.UNPACK_SKIP_PIXELS),nt=L.getParameter(L.UNPACK_SKIP_ROWS),Se=L.getParameter(L.UNPACK_SKIP_IMAGES),Ht=E.isCompressedTexture?E.mipmaps[I]:E.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,Ht.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Ht.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,ge),L.pixelStorei(L.UNPACK_SKIP_ROWS,xe),E.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,I,Ae,we,$,ue,be,Ke,Ht.data):E.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,I,Ae,we,Ht.width,Ht.height,be,Ht.data):L.texSubImage2D(L.TEXTURE_2D,I,Ae,we,$,ue,be,Ke,Ht),L.pixelStorei(L.UNPACK_ROW_LENGTH,ct),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,gt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,St),L.pixelStorei(L.UNPACK_SKIP_ROWS,nt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Se),I===0&&U.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),Re.unbindTexture()},this.copyTextureToTexture3D=function(E,U,k=null,G=null,I=0){E.isTexture!==!0&&(In("WebGLRenderer: copyTextureToTexture3D function signature has changed."),k=arguments[0]||null,G=arguments[1]||null,E=arguments[2],U=arguments[3],I=arguments[4]||0);let $,ue,ge,xe,Ae,we,be,Ke,ct;const gt=E.isCompressedTexture?E.mipmaps[I]:E.image;k!==null?($=k.max.x-k.min.x,ue=k.max.y-k.min.y,ge=k.max.z-k.min.z,xe=k.min.x,Ae=k.min.y,we=k.min.z):($=gt.width,ue=gt.height,ge=gt.depth,xe=0,Ae=0,we=0),G!==null?(be=G.x,Ke=G.y,ct=G.z):(be=0,Ke=0,ct=0);const St=Ie.convert(U.format),nt=Ie.convert(U.type);let Se;if(U.isData3DTexture)A.setTexture3D(U,0),Se=L.TEXTURE_3D;else if(U.isDataArrayTexture||U.isCompressedArrayTexture)A.setTexture2DArray(U,0),Se=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,U.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,U.unpackAlignment);const Ht=L.getParameter(L.UNPACK_ROW_LENGTH),Gr=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Ri=L.getParameter(L.UNPACK_SKIP_PIXELS),_a=L.getParameter(L.UNPACK_SKIP_ROWS),ni=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,gt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,gt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,xe),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ae),L.pixelStorei(L.UNPACK_SKIP_IMAGES,we),E.isDataTexture||E.isData3DTexture?L.texSubImage3D(Se,I,be,Ke,ct,$,ue,ge,St,nt,gt.data):U.isCompressedArrayTexture?L.compressedTexSubImage3D(Se,I,be,Ke,ct,$,ue,ge,St,gt.data):L.texSubImage3D(Se,I,be,Ke,ct,$,ue,ge,St,nt,gt),L.pixelStorei(L.UNPACK_ROW_LENGTH,Ht),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Gr),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ri),L.pixelStorei(L.UNPACK_SKIP_ROWS,_a),L.pixelStorei(L.UNPACK_SKIP_IMAGES,ni),I===0&&U.generateMipmaps&&L.generateMipmap(Se),Re.unbindTexture()},this.initRenderTarget=function(E){Le.get(E).__webglFramebuffer===void 0&&A.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?A.setTextureCube(E,0):E.isData3DTexture?A.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?A.setTexture2DArray(E,0):A.setTexture2D(E,0),Re.unbindTexture()},this.resetState=function(){C=0,T=0,w=null,Re.reset(),it.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return or}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Gc?"display-p3":"srgb",t.unpackColorSpace=Ye.workingColorSpace===eo?"display-p3":"srgb"}}class eM extends bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Wi,this.environmentIntensity=1,this.environmentRotation=new Wi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class tM{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=uc,this.updateRanges=[],this.version=0,this.uuid=Cr()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let a=0,s=this.stride;a<s;a++)this.array[e+a]=t.array[i+a];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Cr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Cr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Wt=new P;class Kn{constructor(e,t,i,a=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=a}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix4(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Wt.fromBufferAttribute(this,t),Wt.applyNormalMatrix(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Wt.fromBufferAttribute(this,t),Wt.transformDirection(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Gi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ze(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=Ze(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ze(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ze(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ze(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Gi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Gi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Gi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Gi(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ze(t,this.array),i=Ze(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ze(t,this.array),i=Ze(i,this.array),a=Ze(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=a,this}setXYZW(e,t,i,a,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ze(t,this.array),i=Ze(i,this.array),a=Ze(a,this.array),s=Ze(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=a,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const a=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[a+s])}return new Ai(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Kn(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const a=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[a+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class kp extends pa{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ue(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Ia;const _s=new P,Ua=new P,Oa=new P,Na=new ie,vs=new ie,Gp=new tt,_n=new P,xs=new P,vn=new P,Yu=new ie,sl=new ie,qu=new ie;class iM extends bt{constructor(e=new kp){if(super(),this.isSprite=!0,this.type="Sprite",Ia===void 0){Ia=new jt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new tM(t,5);Ia.setIndex([0,1,2,0,2,3]),Ia.setAttribute("position",new Kn(i,3,0,!1)),Ia.setAttribute("uv",new Kn(i,2,3,!1))}this.geometry=Ia,this.material=e,this.center=new ie(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ua.setFromMatrixScale(this.matrixWorld),Gp.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Oa.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ua.multiplyScalar(-Oa.z);const i=this.material.rotation;let a,s;i!==0&&(s=Math.cos(i),a=Math.sin(i));const n=this.center;xn(_n.set(-.5,-.5,0),Oa,n,Ua,a,s),xn(xs.set(.5,-.5,0),Oa,n,Ua,a,s),xn(vn.set(.5,.5,0),Oa,n,Ua,a,s),Yu.set(0,0),sl.set(1,0),qu.set(1,1);let o=e.ray.intersectTriangle(_n,xs,vn,!1,_s);if(o===null&&(xn(xs.set(-.5,.5,0),Oa,n,Ua,a,s),sl.set(0,1),o=e.ray.intersectTriangle(_n,vn,xs,!1,_s),o===null))return;const l=e.ray.origin.distanceTo(_s);l<e.near||l>e.far||t.push({distance:l,point:_s.clone(),uv:Ei.getInterpolation(_s,_n,xs,vn,Yu,sl,qu,new ie),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function xn(r,e,t,i,a,s){Na.subVectors(r,t).addScalar(.5).multiply(i),a!==void 0?(vs.x=s*Na.x-a*Na.y,vs.y=a*Na.x+s*Na.y):vs.copy(Na),r.copy(e),r.x+=vs.x,r.y+=vs.y,r.applyMatrix4(Gp)}class Vp extends pa{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ue(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ku=new tt,fc=new io,yn=new to,Mn=new P;class rM extends bt{constructor(e=new jt,t=new Vp){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,a=this.matrixWorld,s=e.params.Points.threshold,n=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),yn.copy(i.boundingSphere),yn.applyMatrix4(a),yn.radius+=s,e.ray.intersectsSphere(yn)===!1)return;Ku.copy(a).invert(),fc.copy(e.ray).applyMatrix4(Ku);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,h=i.attributes.position;if(c!==null){const u=Math.max(0,n.start),d=Math.min(c.count,n.start+n.count);for(let p=u,g=d;p<g;p++){const _=c.getX(p);Mn.fromBufferAttribute(h,_),Zu(Mn,_,l,a,e,t,this)}}else{const u=Math.max(0,n.start),d=Math.min(h.count,n.start+n.count);for(let p=u,g=d;p<g;p++)Mn.fromBufferAttribute(h,p),Zu(Mn,p,l,a,e,t,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=i.length;a<s;a++){const n=i[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[n]=a}}}}}function Zu(r,e,t,i,a,s,n){const o=fc.distanceSqToPoint(r);if(o<t){const l=new P;fc.closestPointToPoint(r,l),l.applyMatrix4(i);const c=a.ray.origin.distanceTo(l);if(c<a.near||c>a.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:n})}}class aM extends Gt{constructor(e,t,i,a,s,n,o,l,c){super(e,t,i,a,s,n,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ji{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,a=this.getPoint(0),s=0;t.push(0);for(let n=1;n<=e;n++)i=this.getPoint(n/e),s+=i.distanceTo(a),t.push(s),a=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let a=0;const s=i.length;let n;t?n=t:n=e*i[s-1];let o=0,l=s-1,c;for(;o<=l;)if(a=Math.floor(o+(l-o)/2),c=i[a]-n,c<0)o=a+1;else if(c>0)l=a-1;else{l=a;break}if(a=l,i[a]===n)return a/(s-1);const h=i[a],u=i[a+1]-h,d=(n-h)/u;return(a+d)/(s-1)}getTangent(e,t){let i=e-1e-4,a=e+1e-4;i<0&&(i=0),a>1&&(a=1);const s=this.getPoint(i),n=this.getPoint(a),o=t||(s.isVector2?new ie:new P);return o.copy(n).sub(s).normalize(),o}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new P,a=[],s=[],n=[],o=new P,l=new tt;for(let p=0;p<=e;p++){const g=p/e;a[p]=this.getTangentAt(g,new P)}s[0]=new P,n[0]=new P;let c=Number.MAX_VALUE;const h=Math.abs(a[0].x),u=Math.abs(a[0].y),d=Math.abs(a[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),d<=c&&i.set(0,0,1),o.crossVectors(a[0],i).normalize(),s[0].crossVectors(a[0],o),n[0].crossVectors(a[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),n[p]=n[p-1].clone(),o.crossVectors(a[p-1],a[p]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Pt(a[p-1].dot(a[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(o,g))}n[p].crossVectors(a[p],s[p])}if(t===!0){let p=Math.acos(Pt(s[0].dot(s[e]),-1,1));p/=e,a[0].dot(o.crossVectors(s[0],s[e]))>0&&(p=-p);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(a[g],p*g)),n[g].crossVectors(a[g],s[g])}return{tangents:a,normals:s,binormals:n}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class jc extends ji{constructor(e=0,t=0,i=1,a=1,s=0,n=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=a,this.aStartAngle=s,this.aEndAngle=n,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new ie){const i=t,a=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const n=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=a;for(;s>a;)s-=a;s<Number.EPSILON&&(n?s=0:s=a),this.aClockwise===!0&&!n&&(s===a?s=-a:s=s-a);const o=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*u+this.aX,c=d*u+p*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class sM extends jc{constructor(e,t,i,a,s,n){super(e,t,i,i,a,s,n),this.isArcCurve=!0,this.type="ArcCurve"}}function Yc(){let r=0,e=0,t=0,i=0;function a(s,n,o,l){r=s,e=o,t=-3*s+3*n-2*o-l,i=2*s-2*n+o+l}return{initCatmullRom:function(s,n,o,l,c){a(n,o,c*(o-s),c*(l-n))},initNonuniformCatmullRom:function(s,n,o,l,c,h,u){let d=(n-s)/c-(o-s)/(c+h)+(o-n)/h,p=(o-n)/h-(l-n)/(h+u)+(l-o)/u;d*=h,p*=h,a(n,o,d,p)},calc:function(s){const n=s*s,o=n*s;return r+e*s+t*n+i*o}}}const Sn=new P,nl=new Yc,ol=new Yc,ll=new Yc;class nM extends ji{constructor(e=[],t=!1,i="centripetal",a=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=a}getPoint(e,t=new P){const i=t,a=this.points,s=a.length,n=(s-(this.closed?0:1))*e;let o=Math.floor(n),l=n-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,h;this.closed||o>0?c=a[(o-1)%s]:(Sn.subVectors(a[0],a[1]).add(a[0]),c=Sn);const u=a[o%s],d=a[(o+1)%s];if(this.closed||o+2<s?h=a[(o+2)%s]:(Sn.subVectors(a[s-1],a[s-2]).add(a[s-1]),h=Sn),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),p),_=Math.pow(u.distanceToSquared(d),p),f=Math.pow(d.distanceToSquared(h),p);_<1e-4&&(_=1),g<1e-4&&(g=_),f<1e-4&&(f=_),nl.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,_,f),ol.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,_,f),ll.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,_,f)}else this.curveType==="catmullrom"&&(nl.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),ol.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),ll.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return i.set(nl.calc(l),ol.calc(l),ll.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const a=e.points[t];this.points.push(a.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const a=this.points[t];e.points.push(a.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const a=e.points[t];this.points.push(new P().fromArray(a))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Ju(r,e,t,i,a){const s=(i-e)*.5,n=(a-t)*.5,o=r*r,l=r*o;return(2*t-2*i+s+n)*l+(-3*t+3*i-2*s-n)*o+s*r+t}function oM(r,e){const t=1-r;return t*t*e}function lM(r,e){return 2*(1-r)*r*e}function cM(r,e){return r*r*e}function As(r,e,t,i){return oM(r,e)+lM(r,t)+cM(r,i)}function hM(r,e){const t=1-r;return t*t*t*e}function uM(r,e){const t=1-r;return 3*t*t*r*e}function dM(r,e){return 3*(1-r)*r*r*e}function pM(r,e){return r*r*r*e}function Rs(r,e,t,i,a){return hM(r,e)+uM(r,t)+dM(r,i)+pM(r,a)}class Hp extends ji{constructor(e=new ie,t=new ie,i=new ie,a=new ie){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=a}getPoint(e,t=new ie){const i=t,a=this.v0,s=this.v1,n=this.v2,o=this.v3;return i.set(Rs(e,a.x,s.x,n.x,o.x),Rs(e,a.y,s.y,n.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class fM extends ji{constructor(e=new P,t=new P,i=new P,a=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=a}getPoint(e,t=new P){const i=t,a=this.v0,s=this.v1,n=this.v2,o=this.v3;return i.set(Rs(e,a.x,s.x,n.x,o.x),Rs(e,a.y,s.y,n.y,o.y),Rs(e,a.z,s.z,n.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Wp extends ji{constructor(e=new ie,t=new ie){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ie){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ie){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class mM extends ji{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Xp extends ji{constructor(e=new ie,t=new ie,i=new ie){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ie){const i=t,a=this.v0,s=this.v1,n=this.v2;return i.set(As(e,a.x,s.x,n.x),As(e,a.y,s.y,n.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class gM extends ji{constructor(e=new P,t=new P,i=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new P){const i=t,a=this.v0,s=this.v1,n=this.v2;return i.set(As(e,a.x,s.x,n.x),As(e,a.y,s.y,n.y),As(e,a.z,s.z,n.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class jp extends ji{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ie){const i=t,a=this.points,s=(a.length-1)*e,n=Math.floor(s),o=s-n,l=a[n===0?n:n-1],c=a[n],h=a[n>a.length-2?a.length-1:n+1],u=a[n>a.length-3?a.length-1:n+2];return i.set(Ju(o,l.x,c.x,h.x,u.x),Ju(o,l.y,c.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const a=e.points[t];this.points.push(a.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const a=this.points[t];e.points.push(a.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const a=e.points[t];this.points.push(new ie().fromArray(a))}return this}}var $u=Object.freeze({__proto__:null,ArcCurve:sM,CatmullRomCurve3:nM,CubicBezierCurve:Hp,CubicBezierCurve3:fM,EllipseCurve:jc,LineCurve:Wp,LineCurve3:mM,QuadraticBezierCurve:Xp,QuadraticBezierCurve3:gM,SplineCurve:jp});class _M extends ji{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new $u[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),a=this.getCurveLengths();let s=0;for(;s<a.length;){if(a[s]>=i){const n=a[s]-i,o=this.curves[s],l=o.getLength(),c=l===0?0:1-n/l;return o.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,a=this.curves.length;i<a;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let a=0,s=this.curves;a<s.length;a++){const n=s[a],o=n.isEllipseCurve?e*2:n.isLineCurve||n.isLineCurve3?1:n.isSplineCurve?e*n.points.length:e,l=n.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const a=e.curves[t];this.curves.push(a.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const a=this.curves[t];e.curves.push(a.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const a=e.curves[t];this.curves.push(new $u[a.type]().fromJSON(a))}return this}}class vM extends _M{constructor(e){super(),this.type="Path",this.currentPoint=new ie,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new Wp(this.currentPoint.clone(),new ie(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,a){const s=new Xp(this.currentPoint.clone(),new ie(e,t),new ie(i,a));return this.curves.push(s),this.currentPoint.set(i,a),this}bezierCurveTo(e,t,i,a,s,n){const o=new Hp(this.currentPoint.clone(),new ie(e,t),new ie(i,a),new ie(s,n));return this.curves.push(o),this.currentPoint.set(s,n),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new jp(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,a,s,n){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,a,s,n),this}absarc(e,t,i,a,s,n){return this.absellipse(e,t,i,i,a,s,n),this}ellipse(e,t,i,a,s,n,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,a,s,n,o,l),this}absellipse(e,t,i,a,s,n,o,l){const c=new jc(e,t,i,a,s,n,o,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class qc extends jt{constructor(e=[new ie(0,-.5),new ie(.5,0),new ie(0,.5)],t=12,i=0,a=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:a},t=Math.floor(t),a=Pt(a,0,Math.PI*2);const s=[],n=[],o=[],l=[],c=[],h=1/t,u=new P,d=new ie,p=new P,g=new P,_=new P;let f=0,m=0;for(let S=0;S<=e.length-1;S++)switch(S){case 0:f=e[S+1].x-e[S].x,m=e[S+1].y-e[S].y,p.x=m*1,p.y=-f,p.z=m*0,_.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(_.x,_.y,_.z);break;default:f=e[S+1].x-e[S].x,m=e[S+1].y-e[S].y,p.x=m*1,p.y=-f,p.z=m*0,g.copy(p),p.x+=_.x,p.y+=_.y,p.z+=_.z,p.normalize(),l.push(p.x,p.y,p.z),_.copy(g)}for(let S=0;S<=t;S++){const x=i+S*h*a,M=Math.sin(x),C=Math.cos(x);for(let T=0;T<=e.length-1;T++){u.x=e[T].x*M,u.y=e[T].y,u.z=e[T].x*C,n.push(u.x,u.y,u.z),d.x=S/t,d.y=T/(e.length-1),o.push(d.x,d.y);const w=l[3*T+0]*M,R=l[3*T+1],V=l[3*T+0]*C;c.push(w,R,V)}}for(let S=0;S<t;S++)for(let x=0;x<e.length-1;x++){const M=x+S*e.length,C=M,T=M+e.length,w=M+e.length+1,R=M+1;s.push(C,T,R),s.push(w,R,T)}this.setIndex(s),this.setAttribute("position",new mt(n,3)),this.setAttribute("uv",new mt(o,2)),this.setAttribute("normal",new mt(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qc(e.points,e.segments,e.phiStart,e.phiLength)}}class Oi extends qc{constructor(e=1,t=1,i=4,a=8){const s=new vM;s.absarc(0,-t/2,e,Math.PI*1.5,0),s.absarc(0,t/2,e,0,Math.PI*.5),super(s.getPoints(i),a),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:i,radialSegments:a}}static fromJSON(e){return new Oi(e.radius,e.length,e.capSegments,e.radialSegments)}}class Hs extends jt{constructor(e=1,t=32,i=0,a=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:a},t=Math.max(3,t);const s=[],n=[],o=[],l=[],c=new P,h=new ie;n.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){const p=i+u/t*a;c.x=e*Math.cos(p),c.y=e*Math.sin(p),n.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(n[d]/e+1)/2,h.y=(n[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new mt(n,3)),this.setAttribute("normal",new mt(o,3)),this.setAttribute("uv",new mt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hs(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Yi extends jt{constructor(e=1,t=1,i=1,a=32,s=1,n=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:a,heightSegments:s,openEnded:n,thetaStart:o,thetaLength:l};const c=this;a=Math.floor(a),s=Math.floor(s);const h=[],u=[],d=[],p=[];let g=0;const _=[],f=i/2;let m=0;S(),n===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new mt(u,3)),this.setAttribute("normal",new mt(d,3)),this.setAttribute("uv",new mt(p,2));function S(){const M=new P,C=new P;let T=0;const w=(t-e)/i;for(let R=0;R<=s;R++){const V=[],v=R/s,b=v*(t-e)+e;for(let O=0;O<=a;O++){const N=O/a,B=N*l+o,j=Math.sin(B),z=Math.cos(B);C.x=b*j,C.y=-v*i+f,C.z=b*z,u.push(C.x,C.y,C.z),M.set(j,w,z).normalize(),d.push(M.x,M.y,M.z),p.push(N,1-v),V.push(g++)}_.push(V)}for(let R=0;R<a;R++)for(let V=0;V<s;V++){const v=_[V][R],b=_[V+1][R],O=_[V+1][R+1],N=_[V][R+1];e>0&&(h.push(v,b,N),T+=3),t>0&&(h.push(b,O,N),T+=3)}c.addGroup(m,T,0),m+=T}function x(M){const C=g,T=new ie,w=new P;let R=0;const V=M===!0?e:t,v=M===!0?1:-1;for(let O=1;O<=a;O++)u.push(0,f*v,0),d.push(0,v,0),p.push(.5,.5),g++;const b=g;for(let O=0;O<=a;O++){const N=O/a*l+o,B=Math.cos(N),j=Math.sin(N);w.x=V*j,w.y=f*v,w.z=V*B,u.push(w.x,w.y,w.z),d.push(0,v,0),T.x=B*.5+.5,T.y=j*.5*v+.5,p.push(T.x,T.y),g++}for(let O=0;O<a;O++){const N=C+O,B=b+O;M===!0?h.push(B,B+1,N):h.push(B+1,B,N),R+=3}c.addGroup(m,R,M===!0?1:2),m+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yi(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ns extends Yi{constructor(e=1,t=1,i=32,a=1,s=!1,n=0,o=Math.PI*2){super(0,e,t,i,a,s,n,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:a,openEnded:s,thetaStart:n,thetaLength:o}}static fromJSON(e){return new ns(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class pt extends jt{constructor(e=1,t=32,i=16,a=0,s=Math.PI*2,n=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:a,phiLength:s,thetaStart:n,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(n+o,Math.PI);let c=0;const h=[],u=new P,d=new P,p=[],g=[],_=[],f=[];for(let m=0;m<=i;m++){const S=[],x=m/i;let M=0;m===0&&n===0?M=.5/t:m===i&&l===Math.PI&&(M=-.5/t);for(let C=0;C<=t;C++){const T=C/t;u.x=-e*Math.cos(a+T*s)*Math.sin(n+x*o),u.y=e*Math.cos(n+x*o),u.z=e*Math.sin(a+T*s)*Math.sin(n+x*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),f.push(T+M,1-x),S.push(c++)}h.push(S)}for(let m=0;m<i;m++)for(let S=0;S<t;S++){const x=h[m][S+1],M=h[m][S],C=h[m+1][S],T=h[m+1][S+1];(m!==0||n>0)&&p.push(x,M,T),(m!==i-1||l<Math.PI)&&p.push(M,C,T)}this.setIndex(p),this.setAttribute("position",new mt(g,3)),this.setAttribute("normal",new mt(_,3)),this.setAttribute("uv",new mt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pt(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class fa extends jt{constructor(e=1,t=.4,i=12,a=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:a,arc:s},i=Math.floor(i),a=Math.floor(a);const n=[],o=[],l=[],c=[],h=new P,u=new P,d=new P;for(let p=0;p<=i;p++)for(let g=0;g<=a;g++){const _=g/a*s,f=p/i*Math.PI*2;u.x=(e+t*Math.cos(f))*Math.cos(_),u.y=(e+t*Math.cos(f))*Math.sin(_),u.z=t*Math.sin(f),o.push(u.x,u.y,u.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/a),c.push(p/i)}for(let p=1;p<=i;p++)for(let g=1;g<=a;g++){const _=(a+1)*p+g-1,f=(a+1)*(p-1)+g-1,m=(a+1)*(p-1)+g,S=(a+1)*p+g;n.push(_,f,S),n.push(f,m,S)}this.setIndex(n),this.setAttribute("position",new mt(o,3)),this.setAttribute("normal",new mt(l,3)),this.setAttribute("uv",new mt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fa(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class de extends pa{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ue(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sp,this.normalScale=new ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const Qu={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class xM{constructor(e,t,i){const a=this;let s=!1,n=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){o++,s===!1&&a.onStart!==void 0&&a.onStart(h,n,o),s=!0},this.itemEnd=function(h){n++,a.onProgress!==void 0&&a.onProgress(h,n,o),n===o&&(s=!1,a.onLoad!==void 0&&a.onLoad())},this.itemError=function(h){a.onError!==void 0&&a.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const p=c[u],g=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}}const yM=new xM;class Kc{constructor(e){this.manager=e!==void 0?e:yM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(a,s){i.load(e,a,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Kc.DEFAULT_MATERIAL_NAME="__DEFAULT";class MM extends Kc{constructor(e){super(e)}load(e,t,i,a){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,n=Qu.get(e);if(n!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(n),s.manager.itemEnd(e)},0),n;const o=zs("img");function l(){h(),Qu.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(u){h(),a&&a(u),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class SM extends Kc{constructor(e){super(e)}load(e,t,i,a){const s=new Gt,n=new MM(this.manager);return n.setCrossOrigin(this.crossOrigin),n.setPath(this.path),n.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},i,a),s}}class ao extends bt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ue(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class EM extends ao{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ue(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const cl=new tt,ed=new P,td=new P;class Yp{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ie(512,512),this.map=null,this.mapPass=null,this.matrix=new tt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Wc,this._frameExtents=new ie(1,1),this._viewportCount=1,this._viewports=[new $e(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;ed.setFromMatrixPosition(e.matrixWorld),t.position.copy(ed),td.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(td),t.updateMatrixWorld(),cl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(cl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(cl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const id=new tt,ys=new P,hl=new P;class bM extends Yp{constructor(){super(new ui(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ie(4,2),this._viewportCount=6,this._viewports=[new $e(2,1,1,1),new $e(0,1,1,1),new $e(3,1,1,1),new $e(1,1,1,1),new $e(3,0,1,1),new $e(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,a=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),ys.setFromMatrixPosition(e.matrixWorld),i.position.copy(ys),hl.copy(i.position),hl.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(hl),i.updateMatrixWorld(),a.makeTranslation(-ys.x,-ys.y,-ys.z),id.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(id)}}class wM extends ao{constructor(e,t,i=0,a=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=a,this.shadow=new bM}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class TM extends Yp{constructor(){super(new Up(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class qp extends ao{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.target=new bt,this.shadow=new TM}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class AM extends ao{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class RM{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=rd(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=rd();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function rd(){return performance.now()}const ad=new tt;class CM{constructor(e,t,i=0,a=1/0){this.ray=new io(e,t),this.near=i,this.far=a,this.camera=null,this.layers=new Vc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return ad.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ad),this}intersectObject(e,t=!0,i=[]){return mc(e,this,i,t),i.sort(sd),i}intersectObjects(e,t=!0,i=[]){for(let a=0,s=e.length;a<s;a++)mc(e[a],this,i,t);return i.sort(sd),i}}function sd(r,e){return r.distance-e.distance}function mc(r,e,t,i){let a=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(a=!1),a===!0&&i===!0){const s=r.children;for(let n=0,o=s.length;n<o;n++)mc(s[n],e,t,!0)}}class nd{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Pt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class PM extends da{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Uc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Uc);const od={type:"change"},Zc={type:"start"},Kp={type:"end"},En=new io,ld=new yr,LM=Math.cos(70*Bg.DEG2RAD),Et=new P,Kt=2*Math.PI,Je={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ul=1e-6;class DM extends PM{constructor(e,t=null){super(e,t),this.state=Je.NONE,this.enabled=!0,this.target=new P,this.cursor=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Wa.ROTATE,MIDDLE:Wa.DOLLY,RIGHT:Wa.PAN},this.touches={ONE:Ba.ROTATE,TWO:Ba.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new P,this._lastQuaternion=new ca,this._lastTargetPosition=new P,this._quat=new ca().setFromUnitVectors(e.up,new P(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new nd,this._sphericalDelta=new nd,this._scale=1,this._panOffset=new P,this._rotateStart=new ie,this._rotateEnd=new ie,this._rotateDelta=new ie,this._panStart=new ie,this._panEnd=new ie,this._panDelta=new ie,this._dollyStart=new ie,this._dollyEnd=new ie,this._dollyDelta=new ie,this._dollyDirection=new P,this._mouse=new ie,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=UM.bind(this),this._onPointerDown=IM.bind(this),this._onPointerUp=OM.bind(this),this._onContextMenu=VM.bind(this),this._onMouseWheel=zM.bind(this),this._onKeyDown=BM.bind(this),this._onTouchStart=kM.bind(this),this._onTouchMove=GM.bind(this),this._onMouseDown=NM.bind(this),this._onMouseMove=FM.bind(this),this._interceptControlDown=HM.bind(this),this._interceptControlUp=WM.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(od),this.update(),this.state=Je.NONE}update(e=null){const t=this.object.position;Et.copy(t).sub(this.target),Et.applyQuaternion(this._quat),this._spherical.setFromVector3(Et),this.autoRotate&&this.state===Je.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,a=this.maxAzimuthAngle;isFinite(i)&&isFinite(a)&&(i<-Math.PI?i+=Kt:i>Math.PI&&(i-=Kt),a<-Math.PI?a+=Kt:a>Math.PI&&(a-=Kt),i<=a?this._spherical.theta=Math.max(i,Math.min(a,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+a)/2?Math.max(i,this._spherical.theta):Math.min(a,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const n=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=n!=this._spherical.radius}if(Et.setFromSpherical(this._spherical),Et.applyQuaternion(this._quatInverse),t.copy(this.target).add(Et),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let n=null;if(this.object.isPerspectiveCamera){const o=Et.length();n=this._clampDistance(o*this._scale);const l=o-n;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const o=new P(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new P(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),n=Et.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;n!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(n).add(this.object.position):(En.origin.copy(this.object.position),En.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(En.direction))<LM?this.object.lookAt(this.target):(ld.setFromNormalAndCoplanarPoint(this.object.up,this.target),En.intersectPlane(ld,this.target))))}else if(this.object.isOrthographicCamera){const n=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),n!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>ul||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ul||this._lastTargetPosition.distanceToSquared(this.target)>ul?(this.dispatchEvent(od),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Kt/60*this.autoRotateSpeed*e:Kt/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Et.setFromMatrixColumn(t,0),Et.multiplyScalar(-e),this._panOffset.add(Et)}_panUp(e,t){this.screenSpacePanning===!0?Et.setFromMatrixColumn(t,1):(Et.setFromMatrixColumn(t,0),Et.crossVectors(this.object.up,Et)),Et.multiplyScalar(e),this._panOffset.add(Et)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const a=this.object.position;Et.copy(a).sub(this.target);let s=Et.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*t*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),a=e-i.left,s=t-i.top,n=i.width,o=i.height;this._mouse.x=a/n*2-1,this._mouse.y=-(s/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Kt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Kt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(Kt*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-Kt*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(Kt*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-Kt*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._rotateStart.set(i,a)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._panStart.set(i,a)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,a=e.pageY-t.y,s=Math.sqrt(i*i+a*a);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),a=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(a,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Kt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Kt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._panEnd.set(i,a)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,a=e.pageY-t.y,s=Math.sqrt(i*i+a*a);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const n=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(n,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ie,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function IM(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function UM(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function OM(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Kp),this.state=Je.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function NM(r){let e;switch(r.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Wa.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=Je.DOLLY;break;case Wa.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Je.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Je.ROTATE}break;case Wa.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Je.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Je.PAN}break;default:this.state=Je.NONE}this.state!==Je.NONE&&this.dispatchEvent(Zc)}function FM(r){switch(this.state){case Je.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case Je.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case Je.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function zM(r){this.enabled===!1||this.enableZoom===!1||this.state!==Je.NONE||(r.preventDefault(),this.dispatchEvent(Zc),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(Kp))}function BM(r){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(r)}function kM(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case Ba.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=Je.TOUCH_ROTATE;break;case Ba.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=Je.TOUCH_PAN;break;default:this.state=Je.NONE}break;case 2:switch(this.touches.TWO){case Ba.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=Je.TOUCH_DOLLY_PAN;break;case Ba.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=Je.TOUCH_DOLLY_ROTATE;break;default:this.state=Je.NONE}break;default:this.state=Je.NONE}this.state!==Je.NONE&&this.dispatchEvent(Zc)}function GM(r){switch(this._trackPointer(r),this.state){case Je.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case Je.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case Je.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case Je.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=Je.NONE}}function VM(r){this.enabled!==!1&&r.preventDefault()}function HM(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function WM(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}let On=!0,lr=null;function Zp(){lr=new Audio("/audio/lofi.mp3"),lr.loop=!0,lr.volume=.35}function XM(){On=!On,On?(lr&&lr.pause(),document.querySelector(".sound-on-svg").style.display="none",document.querySelector(".sound-off-svg").style.display="block"):(lr||Zp(),lr.play().catch(()=>{}),document.querySelector(".sound-off-svg").style.display="none",document.querySelector(".sound-on-svg").style.display="block"),ot.to(".mute-toggle-button",{scale:1.3,rotation:15,duration:.2,ease:"back.out(2)",onComplete:()=>ot.to(".mute-toggle-button",{scale:1,rotation:0,duration:.25,ease:"back.out(2)"})})}const Jp=document.querySelector("#experience-canvas"),Zt={width:window.innerWidth,height:window.innerHeight},Vt=new eM;Vt.background=new Ue("#b8d8e8");const ha=new ui(30,Zt.width/Zt.height,.1,200);ha.position.set(12,9,12);window.innerWidth<768&&ha.position.set(14,10,14);const Xi=new Qy({canvas:Jp,antialias:!0});Xi.setSize(Zt.width,Zt.height);Xi.setPixelRatio(Math.min(window.devicePixelRatio,2));Xi.shadowMap.enabled=!0;Xi.shadowMap.type=lp;Xi.toneMapping=hp;Xi.toneMappingExposure=1.1;const vi=new DM(ha,Xi.domElement);vi.target.set(0,1.2,0);vi.minDistance=6;vi.maxDistance=22;vi.minPolarAngle=.3;vi.maxPolarAngle=Math.PI/2.3;vi.enableDamping=!0;vi.dampingFactor=.06;vi.enabled=!1;vi.update();window.addEventListener("resize",()=>{Zt.width=window.innerWidth,Zt.height=window.innerHeight,ha.aspect=Zt.width/Zt.height,ha.updateProjectionMatrix(),Xi.setSize(Zt.width,Zt.height),Xi.setPixelRatio(Math.min(window.devicePixelRatio,2))});document.body.addEventListener("touchmove",r=>{r.target===Jp&&r.preventDefault()},{passive:!1});const $p=new AM(16777215,.5);Vt.add($p);const qi=new qp("#fff5e0",1.4);qi.position.set(6,10,8);qi.castShadow=!0;qi.shadow.mapSize.set(2048,2048);qi.shadow.camera.left=-8;qi.shadow.camera.right=8;qi.shadow.camera.top=8;qi.shadow.camera.bottom=-8;qi.shadow.bias=-.001;Vt.add(qi);Vt.add(new qp("#c8e0ff",.3).translateX(-4).translateY(6));Vt.add(new EM("#e8f4ff","#8b6b4a",.35));const oe={wood:new de({color:"#c4956a",roughness:.85}),woodDk:new de({color:"#6b4030",roughness:.8}),wall:new de({color:"#e8ddd0",roughness:.95}),wallAcc:new de({color:"#ddd2c4",roughness:.9}),cream:new de({color:"#fff8dc",roughness:.85}),red:new de({color:"#a04a3a",roughness:.8}),blue:new de({color:"#3a6ec8",roughness:.75}),green:new de({color:"#5a8c46",roughness:.85}),dkGreen:new de({color:"#2d5a2d",roughness:.8}),metal:new de({color:"#c0c0c0",metalness:.7,roughness:.3}),gold:new de({color:"#d4a843",metalness:.6,roughness:.35}),glass:new de({color:"#d8eef8",roughness:.05,transparent:!0,opacity:.7}),snow:new de({color:"#ffffff",roughness:.9}),grass:new de({color:"#6b9b52",roughness:.95}),black:new de({color:"#222",roughness:.6}),orange:new de({color:"#e87830",roughness:.8}),pink:new de({color:"#e8a0b0",roughness:.85}),purple:new de({color:"#7a5aaa",roughness:.8})},It=new Lt;Vt.add(It);function Ee(r,e,t,i,a,s=It){const n=new ae(new Nt(r,e,t),i);return n.position.set(...a),n.castShadow=!0,n.receiveShadow=!0,s.add(n),n}function Ut(r,e,t,i,a,s=It){const n=new ae(new Yi(r,e,t,12),i);return n.position.set(...a),n.castShadow=!0,s.add(n),n}Ee(7,.12,6,oe.wood,[0,.06,0]);for(let r=-3;r<=3;r++)Ee(7,.005,.02,oe.woodDk,[0,.125,r*.85]);Ee(7,4,.14,oe.wall,[0,2.06,-3]);Ee(.14,4,6,oe.wallAcc,[-3.5,2.06,0]);Ee(7,.1,.06,oe.woodDk,[0,.17,-2.93]);Ee(.06,.1,6,oe.woodDk,[-3.42,.17,0]);Ee(1.6,1.3,.05,oe.glass,[1.5,2.6,-2.92]);Ee(1.7,.06,.03,oe.woodDk,[1.5,3.26,-2.89]);Ee(1.7,.06,.03,oe.woodDk,[1.5,1.94,-2.89]);Ee(.05,1.35,.03,oe.woodDk,[.7,2.6,-2.89]);Ee(.05,1.35,.03,oe.woodDk,[2.3,2.6,-2.89]);const jM=new de({color:"#f0ece4",roughness:.8});for(let r=0;r<10;r++){const e=2+r*.13;Ee(1.5,.025,.04,jM,[1.5,e,-2.87])}Ut(.008,.008,.6,oe.cream,[2.15,2.3,-2.86]);Ee(1.7,.1,.06,oe.woodDk,[1.5,3.3,-2.87]);const so=new wM("#ffd9a8",1,8);so.position.set(-1,3.2,0);so.castShadow=!0;It.add(so);const Ws=new ae(new Fr(60,60),oe.grass);Ws.rotation.x=-Math.PI/2;Ws.position.y=-.01;Ws.receiveShadow=!0;Vt.add(Ws);[[-10,-14,8,4,"#6a7a82"],[-4,-16,11,5.5,"#5a6a72"],[4,-18,13,6,"#7a8a92"],[11,-15,9,4.5,"#6a7a82"],[16,-17,7,3.5,"#5a6a72"]].forEach(([r,e,t,i,a])=>{const s=new ae(new ns(i,t,6),new de({color:a,flatShading:!0}));s.position.set(r,t/2-.3,e),s.castShadow=!0,Vt.add(s);const n=new ae(new ns(i*.3,t*.25,6),oe.snow);n.position.set(r,t*.72,e),Vt.add(n)});[[-5,-4],[-6,2],[5,-5],[6,3],[-4,4],[4,5],[-7,-1],[7,-2]].forEach(([r,e])=>{Ut(.08,.12,.6,oe.woodDk,[r,.3,e],Vt);const t=new ae(new ns(.5,1.2,8),oe.dkGreen);t.position.set(r,1.2,e),t.castShadow=!0,Vt.add(t)});const Qp=[];for(let r=0;r<80;r++){const e=Math.random()*Math.PI*2,t=5+Math.random()*14,i=Math.cos(e)*t,a=Math.sin(e)*t;if(Math.abs(i)<4.5&&Math.abs(a)<4)continue;const s=new Lt;Ut(.01,.01,.18,oe.green,[0,.09,0],s);const n=new ae(new pt(.045,6,6),new de({color:["#e9637a","#f3c341","#fff","#a07cd0","#ff8a4c"][r%5]}));n.position.y=.2,s.add(n),s.position.set(i,0,a),s.scale.setScalar(.5+Math.random()*.6),Vt.add(s),Qp.push(s)}const no=600,Nn=new Float32Array(no*3),ef=new Float32Array(no);for(let r=0;r<no;r++)Nn[r*3]=(Math.random()-.5)*35,Nn[r*3+1]=Math.random()*14,Nn[r*3+2]=(Math.random()-.5)*35,ef[r]=.3+Math.random()*.8;const Jc=new jt;Jc.setAttribute("position",new Ai(Nn,3));const oo=new rM(Jc,new Vp({color:"#fff",size:.07,sizeAttenuation:!0,transparent:!0,opacity:.85,depthWrite:!1}));oo.visible=!1;Vt.add(oo);const ai=new Lt,tf=new ae(new Nt(3.5,.05,2.2),new de({color:"#4ab8d8",roughness:.1,metalness:.05,transparent:!0,opacity:.8}));tf.position.set(0,.15,0);ai.add(tf);const lo=new de({color:"#e8e4e0",roughness:.8});Ee(3.7,.3,.15,lo,[0,.15,-1.15],ai);Ee(3.7,.3,.15,lo,[0,.15,1.15],ai);Ee(.15,.3,2.5,lo,[-1.85,.15,0],ai);Ee(.15,.3,2.5,lo,[1.85,.15,0],ai);Ee(3.5,.04,2.2,new de({color:"#a0d8e8",roughness:.6}),[0,-.02,0],ai);Ut(.025,.025,.6,oe.metal,[1.6,.4,-1],ai);Ut(.025,.025,.6,oe.metal,[1.6,.4,-.8],ai);Ee(.02,.02,.22,oe.metal,[1.6,.55,-.9],ai);Ee(.02,.02,.22,oe.metal,[1.6,.35,-.9],ai);const ma=new Lt,$c=new ae(new fa(.4,.12,10,16),new de({color:"#ff69b4",roughness:.7}));$c.rotation.x=Math.PI/2;$c.position.set(0,.2,0);ma.add($c);const Qc=new ae(new Oi(.05,.5,8,8),new de({color:"#ff69b4",roughness:.7}));Qc.position.set(.25,.55,0);Qc.rotation.z=-.3;ma.add(Qc);const rf=new ae(new pt(.07,8,8),new de({color:"#ff69b4",roughness:.7}));rf.position.set(.38,.82,0);ma.add(rf);const eh=new ae(new ns(.03,.08,6),new de({color:"#ff8c00",roughness:.6}));eh.position.set(.44,.8,0);eh.rotation.z=-Math.PI/2;ma.add(eh);const af=new ae(new pt(.015,6,6),oe.black);af.position.set(.4,.84,.04);ma.add(af);ma.position.set(.5,.05,.3);ai.add(ma);ai.position.set(6,0,0);ai.rotation.y=Math.PI/2;Vt.add(ai);const sf=[],co=new Map;function YM(r,e){const t=document.createElement("canvas");t.width=256,t.height=64;const i=t.getContext("2d");i.fillStyle="rgba(255,248,220,0.92)",i.beginPath(),i.roundRect(4,4,248,56,28),i.fill(),i.strokeStyle="#5a3a2a",i.lineWidth=2,i.beginPath(),i.roundRect(4,4,248,56,28),i.stroke(),i.fillStyle="#2b2118",i.font="bold 20px 'Bricolage Grotesque',sans-serif",i.textAlign="center",i.textBaseline="middle",i.fillText(r,128,34);const a=new aM(t),s=new kp({map:a,transparent:!0,depthTest:!1,opacity:.7}),n=new iM(s);return n.position.copy(e),n.scale.set(1.6,.4,1),It.add(n),n}function cs(r,e,t,i=.6){r.castShadow=!0,r.receiveShadow=!0,It.add(r);const a=new os().setFromObject(r),s=a.getSize(new P),n=a.getCenter(new P),o=new ae(new Nt(s.x*1.4,s.y*1.6,s.z*1.4),new Hc({visible:!1}));o.position.copy(n),It.add(o),sf.push(o);const l=n.clone();l.y=a.max.y+i;const c=YM(t,l);co.set(o,{mesh:r,modal:e,lb:c,iScale:r.scale.clone(),iPos:r.position.clone()})}const At=new Lt;Ee(2,.08,1,oe.wood,[0,.82,0],At);[[-.9,.4,-.4],[-.9,.4,.4],[.9,.4,-.4],[.9,.4,.4]].forEach(r=>Ut(.04,.04,.8,oe.woodDk,r,At));Ee(.55,.025,.38,oe.black,[0,.87,-.05],At);const qM=Ee(.55,.38,.02,new de({color:"#1a1a2e",emissive:"#4a90d9",emissiveIntensity:.4}),[0,1.07,-.23],At);qM.rotation.x=-.12;const nf=new ae(new Yi(.055,.045,.2,12),new de({color:"#f8f0e0",roughness:.4,transparent:!0,opacity:.85}));nf.position.set(.7,.92,.2);At.add(nf);const of=new ae(new Yi(.045,.035,.14,12),new de({color:"#c4885a",roughness:.6}));of.position.set(.7,.91,.2);At.add(of);const lf=new ae(new Yi(.01,.01,.26,6),new de({color:"#e85080",roughness:.5}));lf.position.set(.7,1.08,.2);At.add(lf);const cf=new ae(new pt(.056,12,8,0,Math.PI*2,0,Math.PI/2),new de({color:"#f8f8f8",roughness:.3,transparent:!0,opacity:.6}));cf.position.set(.7,1.02,.2);At.add(cf);Ut(.03,.03,.35,oe.metal,[0,.18,.7],At);[0,1,2,3,4].forEach(r=>{const e=r*Math.PI*2/5,t=Math.cos(e)*.2,i=.7+Math.sin(e)*.2;Ut(.02,.02,.04,oe.metal,[t,.02,i],At);const a=new ae(new pt(.03,8,6),oe.black);a.position.set(t,.02,i),At.add(a)});const hf=new ae(new Yi(.28,.28,.06,16),oe.cream);hf.position.set(0,.42,.7);At.add(hf);const uf=new ae(new Nt(.52,.5,.06),oe.cream);uf.position.set(0,.7,.96);At.add(uf);const ho=new de({color:"#e0e0e0",roughness:.7});Ut(.02,.02,.2,ho,[-.24,.55,.75],At);Ut(.02,.02,.2,ho,[.24,.55,.75],At);Ee(.04,.02,.18,ho,[-.24,.65,.75],At);Ee(.04,.02,.18,ho,[.24,.65,.75],At);At.position.set(.2,.12,-2);cs(At,"experience","Experience");const Xs=new Lt;Ee(.35,2.4,1.4,oe.woodDk,[0,1.2,0],Xs);[.2,.7,1.2,1.7,2.2].forEach(r=>Ee(.38,.04,1.42,oe.wood,[0,r,0],Xs));const KM=["#8b3a3a","#3a5a8b","#3a8b5a","#c47b4f","#5a3a8b","#d9b94f","#2a6a6a","#8b5a3a"];[.35,.85,1.35,1.85].forEach((r,e)=>[-.5,-.35,-.2,-.05,.1,.25,.4,.55].forEach((t,i)=>{if(Math.random()>.82)return;const a=.18+Math.random()*.08;Ee(.12,a,.07,new de({color:KM[(e+i)%8],roughness:.8}),[.12,r+a/2,t],Xs)}));Xs.position.set(-3.25,.12,-.5);cs(Xs,"education","Education");const zr=new Lt,ZM=new SM,qa=[new de({color:"#e8c8a0",roughness:.9}),new de({color:"#c8d8e8",roughness:.9}),new de({color:"#d8e8c8",roughness:.9})];["/photos/1.jpg","/photos/2.jpg","/photos/3.jpg"].forEach((r,e)=>{ZM.load(r,t=>{t.colorSpace=Di,qa[e].map=t,qa[e].color.set("#ffffff"),qa[e].needsUpdate=!0},void 0,()=>{})});Ee(.9,.7,.05,oe.woodDk,[0,0,0],zr);const df=new ae(new Fr(.76,.56),qa[0]);df.position.set(0,0,.03);zr.add(df);Ee(.5,.5,.04,oe.woodDk,[.85,-.1,0],zr);const pf=new ae(new Fr(.38,.38),qa[1]);pf.position.set(.85,-.1,.025);zr.add(pf);Ee(.4,.4,.04,oe.woodDk,[-.8,-.2,0],zr);const ff=new ae(new Fr(.3,.3),qa[2]);ff.position.set(-.8,-.2,.025);zr.add(ff);zr.position.set(-1,2.8,-2.9);It.add(zr);const Rt=new Lt,th=new de({color:"#c83030",roughness:.7}),ih=new de({color:"#3060c8",roughness:.7}),JM=Ee(.08,1.6,.025,th,[0,.85,0],Rt);JM.rotation.z=.06;const rh=new ae(new pt(.045,8,6),th);rh.scale.set(1,.5,.5);rh.position.set(-.02,1.7,0);Rt.add(rh);const ah=new ae(new pt(.04,8,6),th);ah.scale.set(1,.4,.5);ah.position.set(.01,.05,0);Rt.add(ah);Ee(.07,.04,.04,oe.metal,[0,.5,.015],Rt);const $M=Ee(.08,1.6,.025,ih,[.16,.85,0],Rt);$M.rotation.z=.05;const sh=new ae(new pt(.045,8,6),ih);sh.scale.set(1,.5,.5);sh.position.set(.14,1.7,0);Rt.add(sh);const nh=new ae(new pt(.04,8,6),ih);nh.scale.set(1,.4,.5);nh.position.set(.17,.05,0);Rt.add(nh);Ee(.07,.04,.04,oe.metal,[.16,.5,.015],Rt);Ut(.012,.012,1.5,oe.metal,[-.12,.75,.05],Rt).rotation.z=.04;Ut(.012,.012,1.5,oe.metal,[.3,.75,.05],Rt).rotation.z=.03;Ee(.4,.6,.28,new de({color:"#2a5040",roughness:.85}),[-.5,.3,.15],Rt);Ee(.36,.15,.06,oe.orange,[-.5,.15,.3],Rt);Ee(.08,.35,.02,oe.black,[-.35,.4,.3],Rt);Ee(.08,.35,.02,oe.black,[-.65,.4,.3],Rt);const oh=new de({color:"#5a3a2a",roughness:.85}),QM=new de({color:"#2a1a0a",roughness:.95}),ga=new Lt,lh=new ae(new Oi(.07,.1,8,8),oh);lh.rotation.x=Math.PI/2;lh.position.set(0,.09,0);ga.add(lh);ga.add(new ae(new Nt(.14,.03,.24),QM)).position.set(0,.01,.02);const mf=new ae(new Yi(.06,.07,.08,8),oh);mf.position.set(0,.14,-.04);ga.add(mf);const gf=new ae(new pt(.065,8,6),oh);gf.position.set(0,.06,.1);ga.add(gf);ga.position.set(.5,0,.25);Rt.add(ga);const ch=ga.clone();ch.position.set(.68,0,.18);ch.rotation.y=.35;Rt.add(ch);const Ki=new Lt,hh=new ae(new fa(.28,.025,8,20),oe.black);hh.position.set(0,.3,0);hh.rotation.y=Math.PI/2;Ki.add(hh);const uh=new ae(new fa(.28,.025,8,20),oe.black);uh.position.set(0,.3,.7);uh.rotation.y=Math.PI/2;Ki.add(uh);Ut(.02,.02,.75,oe.red,[0,.4,.35],Ki).rotation.x=Math.PI/2;Ut(.02,.02,.4,oe.red,[0,.22,.15],Ki).rotation.z=.4;Ut(.02,.02,.4,oe.red,[0,.22,.55],Ki).rotation.z=-.4;Ee(.08,.03,.14,oe.black,[0,.52,.5],Ki);Ee(.3,.03,.03,oe.metal,[0,.55,.05],Ki);Ki.position.set(-.5,0,-.4);Ki.rotation.y=.3;Rt.add(Ki);Rt.position.set(2.5,.12,-1.8);cs(Rt,"fun","For Fun");const Ni=new Lt,dh=new ae(new pt(.28,12,10),new de({color:"#c49a6a",roughness:.9}));dh.scale.set(1.4,.8,1);dh.position.set(0,.2,0);Ni.add(dh);const _f=new ae(new pt(.16,10,8),new de({color:"#c49a6a",roughness:.9}));_f.position.set(.3,.28,.15);Ni.add(_f);const vf=new ae(new pt(.07,8,6),new de({color:"#b08050",roughness:.9}));vf.position.set(.42,.24,.15);Ni.add(vf);const xf=new ae(new pt(.03,6,6),oe.black);xf.position.set(.48,.25,.15);Ni.add(xf);const ph=new ae(new pt(.08,8,6),new de({color:"#8a6040",roughness:.9}));ph.scale.set(.6,1,.4);ph.position.set(.25,.35,.28);Ni.add(ph);const fh=new ae(new pt(.08,8,6),new de({color:"#8a6040",roughness:.9}));fh.scale.set(.6,1,.4);fh.position.set(.25,.35,.02);Ni.add(fh);const uo=new ae(new Oi(.04,.2,6,8),new de({color:"#c49a6a",roughness:.9}));uo.position.set(-.35,.2,-.1);uo.rotation.z=.8;uo.rotation.y=-.5;Ni.add(uo);const yf=new ae(new pt(.06,8,6),new de({color:"#e8d0b0",roughness:.9}));yf.position.set(.2,.08,.25);Ni.add(yf);const Mf=new ae(new pt(.06,8,6),new de({color:"#e8d0b0",roughness:.9}));Mf.position.set(.2,.08,-.05);Ni.add(Mf);Ni.position.set(.8,.12,1.5);cs(Ni,"contact","Contact");const Br=new Lt;Ee(1.5,.35,2,oe.woodDk,[0,.18,0],Br);Ee(1.4,.16,1.9,oe.cream,[0,.43,0],Br);Ee(1.38,.06,1.4,oe.red,[0,.53,.2],Br);Ee(.5,.14,.3,oe.cream,[-.3,.55,-.75],Br);Ee(.5,.14,.3,oe.pink,[.3,.55,-.75],Br);Ee(1.5,.9,.08,oe.woodDk,[0,.7,-1],Br);Br.position.set(-2,.12,-1.5);It.add(Br);const Fi=new Lt,mh=new ae(new Oi(.15,.55,8,12),new de({color:"#f5d0b0",roughness:.8}));mh.rotation.z=Math.PI/2;mh.position.set(0,.18,0);Fi.add(mh);const Sf=new ae(new pt(.14,12,10),new de({color:"#f5d0b0",roughness:.8}));Sf.position.set(-.48,.2,0);Fi.add(Sf);const gh=new ae(new pt(.16,12,10),new de({color:"#2a1a0a",roughness:.9}));gh.position.set(-.52,.23,0);gh.scale.set(1.1,.7,1.3);Fi.add(gh);const _h=new ae(new Oi(.16,.5,8,12),new de({color:"#a0d4f0",roughness:.85}));_h.rotation.z=Math.PI/2;_h.position.set(.05,.22,0);Fi.add(_h);const po=new ae(new Oi(.06,.45,6,8),new de({color:"#f0f0f0",roughness:.8}));po.rotation.z=Math.PI/2.3;po.rotation.y=.4;po.position.set(.55,.14,.25);Fi.add(po);const fo=new ae(new Oi(.06,.45,6,8),new de({color:"#f0f0f0",roughness:.8}));fo.rotation.z=Math.PI/2.3;fo.rotation.y=-.35;fo.position.set(.55,.14,-.2);Fi.add(fo);const mo=new ae(new Oi(.04,.38,6,8),new de({color:"#f5d0b0",roughness:.8}));mo.rotation.z=Math.PI/2.5;mo.rotation.y=.6;mo.position.set(-.15,.2,.35);Fi.add(mo);const go=new ae(new Oi(.04,.38,6,8),new de({color:"#f5d0b0",roughness:.8}));go.rotation.z=Math.PI/2.5;go.rotation.y=-.7;go.position.set(-.15,.2,-.3);Fi.add(go);Fi.rotation.y=Math.PI/5;Fi.position.set(-2,.62,-1.5);cs(Fi,"about","About Me",.5);const vh=new ae(new Hs(1.4,32),new de({color:"#b8c4a8",roughness:.9}));vh.rotation.x=-Math.PI/2;vh.position.set(.5,.13,.5);It.add(vh);const xh=new ae(new Hs(1,32),new de({color:"#c8d4b8",roughness:.9}));xh.rotation.x=-Math.PI/2;xh.position.set(.5,.135,.5);It.add(xh);const dr=new Lt,yh=new ae(new Nt(1.4,.3,.7),new de({color:"#4a6a8a",roughness:.85}));yh.position.set(0,.25,0);yh.castShadow=!0;dr.add(yh);const Mh=new ae(new Nt(1.4,.5,.2),new de({color:"#4a6a8a",roughness:.85}));Mh.position.set(0,.55,-.25);Mh.castShadow=!0;dr.add(Mh);const Ef=new de({color:"#3a5a7a",roughness:.85}),bf=new ae(new Nt(.15,.4,.7),Ef);bf.position.set(-.75,.3,0);dr.add(bf);const wf=new ae(new Nt(.15,.4,.7),Ef);wf.position.set(.75,.3,0);dr.add(wf);[[-.6,.05,-.28],[-.6,.05,.28],[.6,.05,-.28],[.6,.05,.28]].forEach(r=>{Ut(.04,.04,.1,oe.woodDk,r,dr)});const Sh=new ae(new Nt(.3,.25,.12),new de({color:"#e8a060",roughness:.85}));Sh.position.set(-.4,.48,.1);Sh.rotation.z=.15;dr.add(Sh);dr.position.set(-3,.12,1.5);dr.rotation.y=Math.PI/2;cs(dr,"skills","Skills");const Eh=new ae(new Yi(.3,.3,.04,24),oe.cream);Eh.position.set(-1.8,3,-2.9);Eh.rotation.x=Math.PI/2;It.add(Eh);const bh=new ae(new fa(.3,.025,8,24),oe.woodDk);bh.position.set(-1.8,3,-2.88);bh.rotation.x=Math.PI/2;It.add(bh);Ee(.02,.2,.01,oe.black,[-1.8,3.05,-2.86]);Ee(.015,.14,.01,oe.black,[-1.78,3,-2.86]).rotation.z=Math.PI/3;Ee(1.2,.04,.25,oe.wood,[0,3.2,-2.9]);Ut(.04,.05,.18,oe.green,[-.3,3.32,-2.85]);Ut(.06,.05,.08,oe.orange,[-.3,3.26,-2.85]);Ee(.12,.08,.16,oe.purple,[.1,3.26,-2.85]);const Tf=new ae(new pt(.07,12,10),oe.blue);Tf.position.set(.4,3.31,-2.85);It.add(Tf);const wh=new ae(new fa(.45,.06,12,24),oe.woodDk);wh.position.set(-3.4,2.5,1);wh.rotation.y=Math.PI/2;It.add(wh);const Th=new ae(new Hs(.44,24),oe.glass);Th.position.set(-3.38,2.5,1);Th.rotation.y=Math.PI/2;It.add(Th);const Ah=new ae(new Nt(.03,.88,.03),oe.woodDk);Ah.position.set(-3.37,2.5,1);Ah.rotation.y=Math.PI/2;It.add(Ah);const Af=new ae(new Nt(.03,.03,.88),oe.woodDk);Af.position.set(-3.37,2.5,1);It.add(Af);let ci=!1;function eS(){ci=!ci;const r=document.querySelector(".sun-svg"),e=document.querySelector(".snow-svg");document.body.classList.toggle("summer-theme",!ci),document.body.classList.toggle("winter-theme",ci),ot.to(".theme-toggle-button",{scale:1.3,rotation:40,duration:.2,ease:"back.out(2)",onStart:()=>{r.style.display=ci?"none":"block",e.style.display=ci?"block":"none"},onComplete:()=>ot.to(".theme-toggle-button",{scale:1,rotation:0,duration:.25,ease:"back.out(2)"})});const t=ci?"#6b8caf":"#b8d8e8";ot.to(Vt.background,{r:new Ue(t).r,g:new Ue(t).g,b:new Ue(t).b,duration:1.2});const i=ci?"#e0e8f0":"#6b9b52";ot.to(Ws.material.color,{r:new Ue(i).r,g:new Ue(i).g,b:new Ue(i).b,duration:1.2}),Qp.forEach(a=>{a.visible=!ci}),oo.visible=ci,ot.to(qi,{intensity:ci?.7:1.4,duration:1}),ot.to($p,{intensity:ci?.65:.5,duration:1}),ot.to(so,{intensity:ci?1.6:1,duration:1})}const tS={about:document.querySelector(".modal.about"),experience:document.querySelector(".modal.experience"),education:document.querySelector(".modal.education"),skills:document.querySelector(".modal.skills"),fun:document.querySelector(".modal.fun"),contact:document.querySelector(".modal.contact"),photos:document.querySelector(".modal.photos")},Bs=document.querySelector(".overlay");let hs=!0;function iS(r){const e=tS[r];e&&(e.style.display="block",Bs.style.display="block",hs=!0,vi.enabled=!1,ot.fromTo(Bs,{opacity:0},{opacity:1,duration:.35}),ot.fromTo(e,{opacity:0,scale:0},{opacity:1,scale:1,duration:.45,ease:"back.out(2)"}))}function Rf(r){hs=!1,vi.enabled=!0,Si&&(Fn(Si,!1),Si=null),document.body.style.cursor="default",ot.to(Bs,{opacity:0,duration:.25}),ot.to(r,{opacity:0,scale:0,duration:.35,ease:"back.in(2)",onComplete:()=>{r.style.display="none",Bs.style.display="none"}})}Bs.addEventListener("click",()=>{const r=document.querySelector('.modal[style*="display: block"]');r&&Rf(r)});document.querySelectorAll(".modal-exit-button").forEach(r=>r.addEventListener("click",e=>Rf(e.target.closest(".modal"))));const cd=new CM,ks=new ie(-10,-10);let Si=null;function Fn(r,e){const t=co.get(r);t&&(ot.killTweensOf(t.mesh.scale),ot.killTweensOf(t.mesh.position),e?(ot.to(t.mesh.scale,{x:t.iScale.x*1.08,y:t.iScale.y*1.08,z:t.iScale.z*1.08,duration:.35,ease:"back.out(2)"}),ot.to(t.mesh.position,{y:t.iPos.y+.12,duration:.35,ease:"back.out(2)"}),ot.to(t.lb.material,{opacity:1,duration:.2})):(ot.to(t.mesh.scale,{x:t.iScale.x,y:t.iScale.y,z:t.iScale.z,duration:.25,ease:"back.out(2)"}),ot.to(t.mesh.position,{y:t.iPos.y,duration:.25,ease:"back.out(2)"}),ot.to(t.lb.material,{opacity:.7,duration:.3})))}function Cf(){if(!hs&&Si){const r=co.get(Si);r&&r.modal&&iS(r.modal)}}window.addEventListener("mousemove",r=>{ks.x=r.clientX/Zt.width*2-1,ks.y=-(r.clientY/Zt.height)*2+1});window.addEventListener("click",Cf);window.addEventListener("touchstart",r=>{hs||(ks.x=r.touches[0].clientX/Zt.width*2-1,ks.y=-(r.touches[0].clientY/Zt.height)*2+1)},{passive:!0});window.addEventListener("touchend",Cf);const hd=document.querySelector(".enter-overlay"),rS=document.querySelector(".enter-button");rS.addEventListener("click",()=>{Zp(),lr&&lr.play().then(()=>{On=!1,document.querySelector(".sound-off-svg").style.display="none",document.querySelector(".sound-on-svg").style.display="block"}).catch(()=>{}),ot.to(hd,{opacity:0,duration:.7,ease:"power2.inOut",onComplete:()=>{hd.style.display="none",hs=!1,vi.enabled=!0;const r=Array.from(co.values()).map(e=>e.mesh);r.forEach(e=>e.scale.set(0,0,0)),r.forEach((e,t)=>ot.to(e.scale,{x:1,y:1,z:1,duration:.5,delay:.12*t,ease:"back.out(1.7)"}))}})});document.querySelector(".theme-toggle-button").addEventListener("click",eS);document.querySelector(".mute-toggle-button").addEventListener("click",XM);const aS=new RM;(function r(){const e=aS.getDelta();if(vi.update(),oo.visible){const t=Jc.attributes.position;for(let i=0;i<no;i++){let a=t.getY(i)-ef[i]*e,s=t.getX(i)+Math.sin((a+i)*.4)*.002;a<0&&(a=12+Math.random()*2,s=(Math.random()-.5)*35),t.setX(i,s),t.setY(i,a)}t.needsUpdate=!0}if(!hs){cd.setFromCamera(ks,ha);const t=cd.intersectObjects(sf);if(t.length>0){const i=t[0].object;i!==Si&&(Si&&Fn(Si,!1),Si=i,Fn(i,!0),document.body.style.cursor="pointer")}else Si&&(Fn(Si,!1),Si=null),document.body.style.cursor="default"}Xi.render(Vt,ha),requestAnimationFrame(r)})();
