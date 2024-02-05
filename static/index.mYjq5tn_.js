import{v as s,x as o,y as t,A as k,z as j,_ as D,F as C,r as f,K as B,O as $,G as l,P as S,Q as N,J as d,H as x,I as v,R as z,S as m}from"./entry.bYOGiOD9.js";const M={class:"cursor-pointer"},V=["href"],A={class:"w-full md:h-[150px] h-[100px] border-none"},I={class:"text-lg"},K={__name:"Card",props:{title:"",jsonData:""},setup(h){const r=h;return(n,i)=>{const a=D;return s(),o("div",M,[t("a",{href:`/${h.jsonData}`},[t("div",A,[k(a,{preload:"",fit:"cover",src:`/jsonImages/${h.jsonData}.webp`,class:"w-full h-full rounded-lg object-cover",alt:h.jsonData,size:"320px",format:"webp",placeholder:"/placeholder.webp"},null,8,["src","alt"])]),t("span",I,j(r.title),1)],8,V)])}}},R=()=>C("datas",()=>{}),F={class:"my-3"},J=t("div",null,null,-1),O=t("div",{class:"flex justify-center text-[36px] font-bold mb-5"}," MeSoul心靈味增湯 - 屬於你專屬的心理測驗 ",-1),T=t("div",{class:"flex justify-center mb-5 text-lg text-[#686868]"}," 我們致力於開發創意獨特的心理測驗產品，帶給您原汁原味的驚喜和啟發。這些測驗涵蓋心理性格、智力、知識、人際關係和影視文學作品角色等多個領域，每個題目都經過精心設計，旨在挑戰您的思維和啟發您的創造力。透過這些獨特的題目，您將體驗到前所未有的心理測驗體驗，讓您感到快樂、驚喜，並更深入地了解自己的潛力和能力。 ",-1),E={class:"flex mb-5"},G={class:"w-full flex relative items-center z-1"},H=t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18 18 6M6 6l12 12"},null,-1),L=[H],P=t("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6 my-auto mx-2 text-white"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"})],-1),Q=[P],U=t("div",{class:"flex justify-center font-bold text-xl py-2"},"分類",-1),W={class:"flex justify-between"},Z=["onClick"],q={key:0},X={key:0},Y=t("div",{class:"flex justify-center font-bold text-xl pt-10 pb-2"}," 最新心理測驗 ",-1),ee={key:0,class:"grid xl:grid-cols-3 grid-cols-2 gap-4"},te={key:1},se=t("div",{class:"flex justify-center font-bold text-xl pt-10 pb-2"}," 熱門心理測驗 ",-1),le={key:0,class:"grid xl:grid-cols-3 grid-cols-2 gap-4"},oe={key:2},ne=t("div",{class:"flex justify-center font-bold text-xl pt-10 pb-2"}," 所有心理測驗 ",-1),ae={key:0,class:"grid xl:grid-cols-3 grid-cols-2 gap-4"},re={key:1,class:"grid xl:grid-cols-3 grid-cols-2 gap-4 pt-10"},de={__name:"index",setup(h){let r=f(""),n=f(JSON.parse(R().value)),i=f([]),a=f("所有");const w=["所有","戀愛","性格","動漫","創意","影視"],g=_=>{a.value=_,a.value==="所有"?i.value=[]:i.value=n.value.all.filter(c=>c.category.includes(a.value))},y=()=>{r.value!==""?i.value=n.value.all.filter(_=>_.title.includes(r.value)&&(a.value==="所有"||_.category.includes(a.value))):a.value==="所有"?i.value=[]:g(a.value)},b=()=>{r.value="",i.value=[],a.value==="所有"?i.value=[]:g(a.value)};return(_,c)=>{const p=K;return s(),o("div",F,[J,O,T,t("div",E,[t("div",G,[B(t("input",{type:"text",class:"w-full h-[40px] outline-none pl-2 rounded-l-lg px-4 text-themeBlack","onUpdate:modelValue":c[0]||(c[0]=e=>S(r)?r.value=e:r=e),onKeyup:N(y,["enter"])},null,544),[[$,l(r)]]),l(r)!==""?(s(),o("svg",{key:0,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6 cursor-pointer absolute right-0 text-themeBlack mx-2",onClick:c[1]||(c[1]=e=>b())},L)):d("",!0)]),t("button",{class:"bg-theme3 rounded-r-lg h-[40px]",onClick:c[2]||(c[2]=e=>y())},Q)]),U,t("div",W,[(s(),o(x,null,v(w,(e,u)=>t("div",{class:z(["flex justify-center items-center w-[15%] border rounded-full md:h-[40px] h-[30px] md:text-sm text-xs border-theme3 text-themeBlack dark:text-themeWhite font-bold hover:bg-theme3 cursor-pointer hover:text-white delay-100 transition",l(a)===e?"bg-theme3 text-white":""]),onClick:ie=>g(e)},j(e),11,Z)),64))]),t("div",null,[l(i).length==0&&l(r)===""&&l(a)==="所有"?(s(),o("div",q,[l(n).all?(s(),o("div",X,[Y,l(n).all.length>0?(s(),o("div",ee,[(s(),o(x,null,v(6,e=>k(p,{class:"hover:text-theme3",key:e,title:l(n).all[e-1].title,jsonData:l(n).all[e-1].jsonData},null,8,["title","jsonData"])),64))])):d("",!0)])):d("",!0),l(n).hot?(s(),o("div",te,[se,l(n).hot.length>0?(s(),o("div",le,[(s(!0),o(x,null,v(l(n).hot,(e,u)=>(s(),m(p,{class:"hover:text-theme3",key:u,title:e.title,jsonData:e.jsonData},null,8,["title","jsonData"]))),128))])):d("",!0)])):d("",!0),l(n).all?(s(),o("div",oe,[ne,l(n).all.length>0?(s(),o("div",ae,[(s(!0),o(x,null,v(l(n).all,(e,u)=>(s(),m(p,{class:"hover:text-theme3",key:u,title:e.title,jsonData:e.jsonData},null,8,["title","jsonData"]))),128))])):d("",!0)])):d("",!0)])):(s(),o("div",re,[(s(!0),o(x,null,v(l(i),(e,u)=>(s(),m(p,{class:"hover:text-theme3",key:u,title:e.title,jsonData:e.jsonData},null,8,["title","jsonData"]))),128))]))])])}}};export{de as default};
