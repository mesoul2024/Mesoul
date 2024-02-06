"use strict";(self.webpackChunknuxt_app=self.webpackChunknuxt_app||[]).push([[524],{9756:(s,e,u)=>{u.d(e,{c:()=>z});var o=u(1376),n=u(7304),t=u(6256),a=u(8987);const C={class:"flex z-10 items-center md:justify-around justify-between px-4 md:px-0 text-themeBlack dark:bg-[#030712] dark:text-themeWhite h-[64px] max-h-[64px] fixed w-full border-b dark:border-gray-50/[0.2] text-sm bg-white"},_=["src"],r={class:"flex items-center"},d=[(0,t.QD)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},[(0,t.QD)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"})],-1)],g={class:"pl-4"},v=[(0,t.QD)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"},null,-1)],f=[(0,t.QD)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"},null,-1)],D={key:1,id:"darkModeMenu",class:"p-1 absolute z-50 origin-top-right top-[50px] md:right-[21%] right-3 outline-none bg-white rounded-lg ring-1 ring-gray-900/10 shadow-lg overflow-hidden w-36 py-1 text-sm text-gray-700 font-semibold dark:bg-gray-800 dark:ring-0 dark:highlight-white/5 dark:text-gray-300"},B={class:"font-light"},y=[(0,t.QD)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4 mr-2"},[(0,t.QD)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"})],-1),(0,t.QD)("span",null,"Light",-1)],U=[(0,t.QD)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4 mr-2"},[(0,t.QD)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"})],-1),(0,t.QD)("span",null,"Dark",-1)],j={key:3,id:"darkModeMenu",class:"p-1 absolute z-50 origin-top-right top-[50px] md:right-[23%] right-3 outline-none bg-white rounded-lg ring-1 ring-gray-900/10 shadow-lg overflow-hidden w-36 py-1 text-sm text-gray-700 font-semibold dark:bg-gray-800 dark:ring-0 dark:highlight-white/5 dark:text-gray-300"},P={class:"font-light"},O=["onClick"],W={__name:"HeaderTab",setup($){let w=(0,n.IL)(!1);const R=[{url:"",name:"\u5FC3\u7406\u6E2C\u9A57"},{url:"aboutus",name:"\u95DC\u65BC\u6211\u5011"},{url:"",name:"\u96B1\u79C1\u6B0A\u653F\u7B56"}];let m=(0,n.IL)(!1),F=(0,n.IL)(!1);const k=()=>{F.value=!F.value},M=()=>{m.value=!m.value},N=()=>{window.location="/"},S=A=>{A!==void 0&&(window.location=`/${A}`)},T=A=>{A!==localStorage.getItem("theme")&&(A==="dark"?(localStorage.setItem("theme","dark"),document.documentElement.classList.add("dark"),document.documentElement.classList.remove("light"),w.value=!0,m.value=!1):A==="light"&&(localStorage.setItem("theme","light"),document.documentElement.classList.add("light"),document.documentElement.classList.remove("dark"),w.value=!1,m.value=!1))};return(0,t.u2)(()=>{w.value=localStorage.getItem("theme")==="dark"}),(A,l)=>((0,t.Wz)(),(0,t.An)("div",C,[(0,t.QD)("div",{class:"cursor-pointer",onClick:l[0]||(l[0]=p=>N())},[(0,t.QD)("img",{src:"/logo.png",class:"w-[120px] h-full object-cover",alt:"logo",width:"120px"},null,8,_)]),(0,t.QD)("div",r,[(0,t.QD)("button",{onClick:l[1]||(l[1]=p=>k())},d),(0,t.QD)("div",g,[(0,n.KV)(w)?((0,t.Wz)(),(0,t.An)("svg",{key:0,onClick:l[2]||(l[2]=p=>M()),xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",class:"w-6 h-6 cursor-pointer"},v)):((0,t.Wz)(),(0,t.An)("svg",{key:1,onClick:l[3]||(l[3]=p=>M()),xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6 cursor-pointer"},f))])]),(0,n.KV)(m)?((0,t.Wz)(),(0,t.An)("div",{key:0,onClick:l[4]||(l[4]=p=>M()),class:"fixed z-40 w-full h-full"})):(0,t.g1)("",!0),(0,n.KV)(m)?((0,t.Wz)(),(0,t.An)("div",D,[(0,t.QD)("ul",B,[(0,t.QD)("li",{class:"flex py-2 px-2 items-center cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700/30",onClick:l[5]||(l[5]=p=>T("light"))},y),(0,t.QD)("li",{class:"py-2 px-2 flex items-center cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700/30",onClick:l[6]||(l[6]=p=>T("dark"))},U)])])):(0,t.g1)("",!0),(0,n.KV)(F)?((0,t.Wz)(),(0,t.An)("div",{key:2,onClick:l[7]||(l[7]=p=>k()),class:"fixed z-40 w-full h-full"})):(0,t.g1)("",!0),(0,n.KV)(F)?((0,t.Wz)(),(0,t.An)("div",j,[(0,t.QD)("ul",P,[((0,t.Wz)(),(0,t.An)(t.ae,null,(0,t.mi)(R,(p,H)=>(0,t.QD)("li",{class:"flex py-2 px-2 items-center cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700/30",key:H,onClick:G=>S(p.url)},(0,a.WA)(p.name),9,O)),64))])])):(0,t.g1)("",!0)]))}};var K=u(6368),Q=u(3604);const I={class:"bg-theme1 dark:bg-themeBlack min-h-screen text-themeBlack dark:text-themeWhite flex flex-col"},z={__name:"app",setup($){return(0,o.q)({"@context":"https://schema.org","@type":"WebSite",name:"MeSoul \u5FC3\u9748\u5473\u564C\u6E6F",alternateName:"MeSoul",url:"http://https://mesoul.org"}),(w,R)=>{const m=W,F=K.c,k=Q.c;return(0,t.Wz)(),(0,t.An)("div",I,[(0,t.K2)(k,null,{default:(0,t.Ql)(()=>[(0,t.K2)(m),(0,t.K2)(F,{class:"pt-[64px] flex-1 self-center px-4 lg:w-[50%]"})]),_:1})])}}}},4760:(s,e,u)=>{u.d(e,{c:()=>a});var o=u(3384),n=u(5452);const t={nuxt:{buildId:"07900185-f615-42b3-968d-6f69c2922e40"}},a=(0,n.uU)(t)},5936:(s,e,u)=>{u.d(e,{c:()=>o.c});var o=u(9140)},2772:(s,e,u)=>{var o=u(1992),n=u(9890);globalThis.$fetch||(globalThis.$fetch=o.uU.create({baseURL:(0,n.OM)()}))},5840:(s,e,u)=>{u.d(e,{c:()=>o});const o={}},1700:(s,e,u)=>{u.d(e,{M:()=>a,w:()=>t});var o=u(3856),n=u(1948);const t=[o.c,n.c],a={"process-data":()=>u.e(484).then(u.bind(u,9484)),"process-data-index":()=>u.e(424).then(u.bind(u,1424))}},6892:(s,e,u)=>{u.d(e,{A1:()=>_,KQ:()=>v,Ks:()=>h,M$:()=>x,UR:()=>g,WM:()=>r,_K:()=>E,m_:()=>C,y8:()=>L});const o="/static/",n={meta:[{name:"robots",content:"noindex,noarchive,nofollow"},{name:"viewport",content:"width=device-width, initial-scale=1"},{charset:"utf-8"},{name:"apple-mobile-web-app-capable",content:"yes"},{name:"apple-touch-fullscreen",content:"yes"},{name:"author",content:"MeSoul\u5FC3\u9748\u5473\u589E\u6E6F - \u5C6C\u65BC\u4F60\u5C08\u5C6C\u7684\u5FC3\u7406\u6E2C\u9A57"},{name:"description",content:"\u6211\u5011\u81F4\u529B\u65BC\u958B\u767C\u5275\u610F\u7368\u7279\u7684\u5FC3\u7406\u6E2C\u9A57\u7522\u54C1\uFF0C\u5E36\u7D66\u60A8\u539F\u6C41\u539F\u5473\u7684\u9A5A\u559C\u548C\u555F\u767C\u3002\u9019\u4E9B\u6E2C\u9A57\u6DB5\u84CB\u5FC3\u7406\u6027\u683C\u3001\u667A\u529B\u3001\u77E5\u8B58\u3001\u4EBA\u969B\u95DC\u4FC2\u548C\u5F71\u8996\u6587\u5B78\u4F5C\u54C1\u89D2\u8272\u7B49\u591A\u500B\u9818\u57DF\uFF0C\u6BCF\u500B\u984C\u76EE\u90FD\u7D93\u904E\u7CBE\u5FC3\u8A2D\u8A08\uFF0C\u65E8\u5728\u6311\u6230\u60A8\u7684\u601D\u7DAD\u548C\u555F\u767C\u60A8\u7684\u5275\u9020\u529B\u3002\u900F\u904E\u9019\u4E9B\u7368\u7279\u7684\u984C\u76EE\uFF0C\u60A8\u5C07\u9AD4\u9A57\u5230\u524D\u6240\u672A\u6709\u7684\u5FC3\u7406\u6E2C\u9A57\u9AD4\u9A57\uFF0C\u8B93\u60A8\u611F\u5230\u5FEB\u6A02\u3001\u9A5A\u559C\uFF0C\u4E26\u66F4\u6DF1\u5165\u5730\u4E86\u89E3\u81EA\u5DF1\u7684\u6F5B\u529B\u548C\u80FD\u529B\u3002"},{property:"og:title",content:"MeSoul\u5FC3\u9748\u5473\u589E\u6E6F - \u5C6C\u65BC\u4F60\u5C08\u5C6C\u7684\u5FC3\u7406\u6E2C\u9A57"},{property:"og:site_name",content:"MeSoul\u5FC3\u9748\u5473\u589E\u6E6F"},{property:"og:type",content:"website"},{property:"fb:page_id",content:"61556301022892"},{property:"og:description",content:"\u6211\u5011\u81F4\u529B\u65BC\u958B\u767C\u5275\u610F\u7368\u7279\u7684\u5FC3\u7406\u6E2C\u9A57\u7522\u54C1\uFF0C\u5E36\u7D66\u60A8\u539F\u6C41\u539F\u5473\u7684\u9A5A\u559C\u548C\u555F\u767C\u3002\u9019\u4E9B\u6E2C\u9A57\u6DB5\u84CB\u5FC3\u7406\u6027\u683C\u3001\u667A\u529B\u3001\u77E5\u8B58\u3001\u4EBA\u969B\u95DC\u4FC2\u548C\u5F71\u8996\u6587\u5B78\u4F5C\u54C1\u89D2\u8272\u7B49\u591A\u500B\u9818\u57DF\uFF0C\u6BCF\u500B\u984C\u76EE\u90FD\u7D93\u904E\u7CBE\u5FC3\u8A2D\u8A08\uFF0C\u65E8\u5728\u6311\u6230\u60A8\u7684\u601D\u7DAD\u548C\u555F\u767C\u60A8\u7684\u5275\u9020\u529B\u3002\u900F\u904E\u9019\u4E9B\u7368\u7279\u7684\u984C\u76EE\uFF0C\u60A8\u5C07\u9AD4\u9A57\u5230\u524D\u6240\u672A\u6709\u7684\u5FC3\u7406\u6E2C\u9A57\u9AD4\u9A57\uFF0C\u8B93\u60A8\u611F\u5230\u5FEB\u6A02\u3001\u9A5A\u559C\uFF0C\u4E26\u66F4\u6DF1\u5165\u5730\u4E86\u89E3\u81EA\u5DF1\u7684\u6F5B\u529B\u548C\u80FD\u529B\u3002"},{property:"og:url",content:"https://mesoul.org"},{property:"og:image",content:"/logo.png"},{name:"twitter:card",content:"summary"},{name:"twitter:url",content:"https://mesoul.org"},{name:"twitter:title",content:"MeSoul\u5FC3\u9748\u5473\u589E\u6E6F - \u5C6C\u65BC\u4F60\u5C08\u5C6C\u7684\u5FC3\u7406\u6E2C\u9A57"},{name:"twitter:description",content:"\u6211\u5011\u81F4\u529B\u65BC\u958B\u767C\u5275\u610F\u7368\u7279\u7684\u5FC3\u7406\u6E2C\u9A57\u7522\u54C1\uFF0C\u5E36\u7D66\u60A8\u539F\u6C41\u539F\u5473\u7684\u9A5A\u559C\u548C\u555F\u767C\u3002\u9019\u4E9B\u6E2C\u9A57\u6DB5\u84CB\u5FC3\u7406\u6027\u683C\u3001\u667A\u529B\u3001\u77E5\u8B58\u3001\u4EBA\u969B\u95DC\u4FC2\u548C\u5F71\u8996\u6587\u5B78\u4F5C\u54C1\u89D2\u8272\u7B49\u591A\u500B\u9818\u57DF\uFF0C\u6BCF\u500B\u984C\u76EE\u90FD\u7D93\u904E\u7CBE\u5FC3\u8A2D\u8A08\uFF0C\u65E8\u5728\u6311\u6230\u60A8\u7684\u601D\u7DAD\u548C\u555F\u767C\u60A8\u7684\u5275\u9020\u529B\u3002\u900F\u904E\u9019\u4E9B\u7368\u7279\u7684\u984C\u76EE\uFF0C\u60A8\u5C07\u9AD4\u9A57\u5230\u524D\u6240\u672A\u6709\u7684\u5FC3\u7406\u6E2C\u9A57\u9AD4\u9A57\uFF0C\u8B93\u60A8\u611F\u5230\u5FEB\u6A02\u3001\u9A5A\u559C\uFF0C\u4E26\u66F4\u6DF1\u5165\u5730\u4E86\u89E3\u81EA\u5DF1\u7684\u6F5B\u529B\u548C\u80FD\u529B\u3002"},{name:"twitter:image",content:"/logo.png"}],link:[{rel:"icon",type:"image/x-icon",href:"/favicon.ico"},{rel:"shortcut icon",type:"image/x-icon",href:"/favicon.ico"}],style:[],script:[{src:"/script.js",type:"text/javascript",charset:"utf-8"},{hid:"adsbygoogle-script",defer:!0,crossorigin:"anonymous",src:"//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-google"},{hid:"adsbygoogle",innerHTML:`if (!window.__abg_called){ (window.adsbygoogle = window.adsbygoogle || []); adsbygoogle.pauseAdRequests=0;
      adsbygoogle.push({
        google_ad_client: "ca-google",
        overlays: {bottom: false},
        
      }); window.__abg_called = true;}`}],noscript:[],htmlAttrs:{lang:"zh-TW"},charset:"utf-8",viewport:"width=device-width, initial-scale=1",title:"MeSoul\u5FC3\u9748\u5473\u589E\u6E6F - \u5C6C\u65BC\u4F60\u5C08\u5C6C\u7684\u5FC3\u7406\u6E2C\u9A57"},t="/",a="",C=!1,_=!1,r=!1,i="__nuxt",d="div",g=!0,h=!1,v=!1,E=!0,f=!1,D=!1,B=null,b=null,x={componentName:"NuxtLink"},y={deep:!0},c={},L="#__nuxt"},9890:(s,e,u)=>{u.d(e,{OM:()=>a,ch:()=>_});var o=u(3272);const t=(()=>{var i;return((i=window?.__NUXT__)==null?void 0:i.config)||{}})().app,a=()=>t.baseURL,C=()=>t.buildAssetsDir,_=(...i)=>(0,o.KC)(r(),C(),...i),r=(...i)=>{const d=t.cdnURL||t.baseURL;return i.length?(0,o.KC)(d,...i):d};globalThis.__buildAssetsURL=_,globalThis.__publicAssetsURL=r,u.p=_()},6600:(s,e,u)=>{u.d(e,{c:()=>h});var o=u(9235),n=u(5160),t=u(6616),a=u(1324),C=u(7148),_=u(4792);const r=(0,_.A1)({name:"nuxt:global-components"});var i=u(7056),d=u(7916),g=u(1149);const h=[o.c,n.c,t.c,a.c,C.c,r,i.c,d.c,g.c]},6056:(s,e,u)=>{u.d(e,{c:()=>o.c});var o=u(2895)},293:(s,e,u)=>{u.d(e,{c:()=>t});var o=u(1520);const t={...{hashMode:!1,scrollBehaviorType:"auto"},...o.c}},3364:(s,e,u)=>{u.d(e,{c:()=>y});const n={middleware:["process-data"]},a=null,_={middleware:["process-data-index"]};var r,i,d,g,h,v,E,f,D,B,b,x;const y=[{name:((r=n)==null?void 0:r.name)??"name",path:((i=n)==null?void 0:i.path)??"/:name()",meta:n||{},alias:((d=n)==null?void 0:d.alias)||[],redirect:((g=n)==null?void 0:g.redirect)||void 0,component:()=>u.e(348).then(u.bind(u,5728)).then(c=>c.default||c)},{name:((h=a)==null?void 0:h.name)??"AboutUs",path:((v=a)==null?void 0:v.path)??"/AboutUs",meta:a||{},alias:((E=a)==null?void 0:E.alias)||[],redirect:((f=a)==null?void 0:f.redirect)||void 0,component:()=>u.e(586).then(u.bind(u,9586)).then(c=>c.default||c)},{name:((D=_)==null?void 0:D.name)??"index",path:((B=_)==null?void 0:B.path)??"/",meta:_||{},alias:((b=_)==null?void 0:b.alias)||[],redirect:((x=_)==null?void 0:x.redirect)||void 0,component:()=>u.e(32).then(u.bind(u,2032)).then(c=>c.default||c)}]},4249:(s,e,u)=>{u.d(e,{c:()=>o});const o=[]}},s=>{var e=o=>s(s.s=o);s.O(0,[896],()=>e(6136));var u=s.O()}]);
