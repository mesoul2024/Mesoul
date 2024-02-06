"use strict";(self.webpackChunknuxt_app=self.webpackChunknuxt_app||[]).push([[348],{5728:($,D,u)=>{u.r(D),u.d(D,{default:()=>T});var n=u(7304),v=u(9064);const g=()=>(0,v.o)("data",()=>{});var C=u(9840),e=u(6256),l=u(8987),m=u(1704);const _={key:0},E=(0,e.QD)("div",{class:"border w-full h-[250px]"},null,-1),x={key:0,class:"my-2"},b={class:"bg-theme3 text-center text-white text-2xl font-bold py-2 rounded-t-lg"},S={class:"bg-[#F2F2F2] text-black p-2 rounded-b-lg flex flex-col"},W={class:"text-xl py-2 flex w-full"},F={class:"flex pt-10"},s=(0,e.QD)("div",{class:"border w-full h-[250px] mt-2"},null,-1),t={key:1,class:"my-2"},o={class:"text-2xl text-center py-2"},h={class:"flex flex-col w-full"},d=["onClick"],p={key:0,class:"flex w-full flex-col"},A={key:2},k={class:"bg-theme3 text-center w-full p-4 text-white my-2 rounded-lg"},i={class:"text-2xl"},w={class:"flex pt-4"},K={class:"px-4 bg-white mr-4 text-theme3 rounded-full py-1"},V={class:"flex justify-center"},z={key:3,class:"flex justify-center text-lg font-bold"},T={__name:"[name]",setup(Z){const B=[1.5,2,2.5,3];let r=(0,n.IL)(JSON.parse(g().value)),P=(0,n.IL)(!1),M=(0,n.IL)([]),y=(0,n.IL)({}),L=(0,n.IL)(!1);(0,C.w$)({title:()=>`${r.value.title} | MeSoul\u5FC3\u9748\u5473\u564C\u6E6F`,ogTitle:()=>`${r.value.title} | MeSoul\u5FC3\u9748\u5473\u564C\u6E6F`,twitterTitle:()=>`${r.value.title} | MeSoul\u5FC3\u9748\u5473\u564C\u6E6F`,description:()=>`${r.value.description} | MeSoul\u5FC3\u9748\u5473\u564C\u6E6F`,ogDescription:()=>`${r.value.description} | MeSoul\u5FC3\u9748\u5473\u564C\u6E6F`,twitterDescription:()=>`${r.value.description} | MeSoul\u5FC3\u9748\u5473\u564C\u6E6F`});const H=()=>{P.value=!0},R=c=>{let a=N(c);M.value.push(a),y.value[a]?y.value[a]+=1:y.value[a]=1},U=()=>{let c=M.value.pop();y.value[c]-=1},N=c=>Object.keys(r.value.results)[c],I=()=>{let c="",a=0;return Object.keys(y.value).forEach(f=>{a<y.value[f]&&(a=y.value[f],c=f)}),r.value.results[c]},J=()=>{const c=Math.random()*100;setTimeout(()=>{L.value=!0},B[Math.floor(c)%4]*1e3)},G=()=>{P.value=!1,M.value=[],y.value={}};return(c,a)=>(0,n.KV)(r)?((0,e.Wz)(),(0,e.An)("div",_,[E,(0,n.KV)(P)?(0,n.KV)(M).length<(0,n.KV)(r).questions.length?((0,e.Wz)(),(0,e.An)("div",t,[((0,e.Wz)(!0),(0,e.An)(e.ae,null,(0,e.mi)((0,n.KV)(r).questions,(f,O)=>(0,e.wt)(((0,e.Wz)(),(0,e.An)("div",{key:O},[(0,e.QD)("div",o,(0,l.WA)(f.question),1),(0,e.QD)("div",h,[((0,e.Wz)(!0),(0,e.An)(e.ae,null,(0,e.mi)(f.options,(Q,j)=>((0,e.Wz)(),(0,e.An)("button",{key:j,class:"border border-[#454545] text-[#454545] hover:bg-[#454545] hover:text-white dark:border-white dark:text-white hover:dark:text-[#454545] hover:dark:bg-white my-3 py-3 rounded-[10px] md:w-[60%] w-full flex justify-center self-center text-xl",onClick:q=>R(j)},(0,l.WA)(Q),9,d))),128))]),(0,n.KV)(M).length>0?((0,e.Wz)(),(0,e.An)("div",p,[(0,e.QD)("button",{onClick:a[1]||(a[1]=Q=>U()),class:"bg-blue-400 hover:bg-blue-500 text-white dark:border-white dark:text-white hover:dark:text-[#454545] hover:dark:bg-white my-3 py-3 rounded-[10px] md:w-[60%] w-full flex justify-center self-center text-xl"}," \u56DE\u5230\u4E0A\u4E00\u984C ")])):(0,e.g1)("",!0)])),[[m.Ub,(0,n.KV)(M).length==O]])),128))])):(0,n.KV)(L)?((0,e.Wz)(),(0,e.An)("div",A,[(0,e.QD)("div",k,[(0,e.QD)("div",i,(0,l.WA)(I().title),1),(0,e.QD)("div",null,(0,l.WA)(I().description),1)]),(0,e.QD)("div",w,[((0,e.Wz)(!0),(0,e.An)(e.ae,null,(0,e.mi)(I().characteristics,(f,O)=>((0,e.Wz)(),(0,e.An)("div",K,(0,l.WA)(f),1))),256))]),(0,e.QD)("div",V,[(0,e.QD)("button",{onClick:a[2]||(a[2]=f=>G()),class:"py-2 my-8 rounded-full bg-theme3 w-[140px] text-white text-lg"}," \u518D\u6E2C\u4E00\u6B21 ")])])):((0,e.Wz)(),(0,e.An)("div",z," \u7D50\u679C\u7522\u751F\u4E2D... "+(0,l.WA)(J()),1)):((0,e.Wz)(),(0,e.An)("div",x,[(0,e.QD)("div",b,(0,l.WA)((0,n.KV)(r).title),1),(0,e.QD)("div",S,[(0,e.QD)("div",W,(0,l.WA)((0,n.KV)(r).description),1),(0,e.QD)("div",F,[(0,e.QD)("button",{class:"bg-theme3 w-[140px] py-3 text-lg font-bold rounded-md mx-auto text-white",onClick:a[0]||(a[0]=f=>H())}," \u958B\u59CB\u6E2C\u9A57 ")]),s])]))])):(0,e.g1)("",!0)}}},9840:($,D,u)=>{u.d(D,{w$:()=>x});var n=u(780),v=u(6256),g=u(5752),C=u(6488);const e={created(){let s=!1;if(n.V){const t=(0,v._S)();if(!t)return;const o=t.type;if(!o||!("head"in o))return;s=typeof o.head=="function"?()=>o.head.call(t.proxy):o.head}else{const t=this.$options.head;t&&(s=typeof t=="function"?()=>t.call(this):t)}s&&(0,g.u)(s)}},l=function(s,t){s.mixin({beforeCreate(){const o=this.$options,h=o.provide;o.provide=function(){let d;return typeof h=="function"?d=h.call(this):d=h||{},{...d,[headSymbol]:t}}}})},_={"@unhead/vue":[...["injectHead"],...C.q0]};function E(s,t={}){return useHead(s,{...t,transform:whitelistSafeInput})}function x(s,t){const{title:o,titleTemplate:h,...d}=s;return(0,g.u)({title:o,titleTemplate:h,_flatMeta:d},{...t,transform(p){const A=(0,C.kn)({...p._flatMeta});return delete p._flatMeta,{...p,meta:A}}})}function b(s,t={}){const o=t.head||injectHead();if(delete t.head,o)return o.push(s,{...t,mode:"server"})}function S(s,t={}){return E(s,{...t,mode:"server"})}function W(s,t){return x(s,{...t||{},mode:"server"})}function F(s,t){const o=injectHead(),h=getCurrentInstance(),d=t||{};d.head=o;const p=ref("awaitingLoad");NetworkEvents.forEach(i=>{const w=typeof s[i]=="function"?s[i].bind(h):null;w&&(s[i]=K=>w(K))}),d.stub=({script:i,fn:w})=>{if(w==="$script")return{...i,status:p,loaded:computed(()=>p.value==="loaded")}};const A=useScript$1(s,d);function k({script:i}){i.id===A.$script.id&&(p.value=i.status,i.status==="removed"&&o.hooks.removeHook("script:updated",k))}return o.hooks.hook("script:updated",k),A}},5752:($,D,u)=>{u.d(D,{u:()=>C});var n=u(7304),v=u(6256),g=u(780);function C(l,m={}){const _=m.head||(0,g.i)();if(_)return _.ssr?_.push(l,m):e(_,l,m)}function e(l,m,_={}){const E=(0,n.IL)(!1),x=(0,n.IL)({});(0,v.q6)(()=>{x.value=E.value?{}:(0,g.r)(m)});const b=l.push(x.value,_);return(0,v.Kg)(x,W=>{b.patch(W)}),(0,v._S)()&&((0,v.GE)(()=>{b.dispose()}),(0,v.gn)(()=>{E.value=!0}),(0,v.sX)(()=>{E.value=!1})),b}}}]);
