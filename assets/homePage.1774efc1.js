import{V as C,m as $,u as d,n as V,_ as a,a as q,b as B}from"./index.13fe0c73.js";import{_ as G,a as W}from"./page.4e0c43ba.js";const g=["sm","md","lg","xl"],j=(()=>g.reduce((n,t)=>(n[t]={type:[Boolean,String,Number],default:!1},n),{}))(),v=(()=>g.reduce((n,t)=>(n["offset"+d(t)]={type:[String,Number],default:null},n),{}))(),S=(()=>g.reduce((n,t)=>(n["order"+d(t)]={type:[String,Number],default:null},n),{}))(),p={col:Object.keys(j),offset:Object.keys(v),order:Object.keys(S)};function E(n,t,e){let s=n;if(!(e==null||e===!1)){if(t){const o=t.replace(n,"");s+=`-${o}`}return n==="col"&&(e===""||e===!0)||(s+=`-${e}`),s.toLowerCase()}}const _=new Map,x=C.extend({name:"v-col",functional:!0,props:{cols:{type:[Boolean,String,Number],default:!1},...j,offset:{type:[String,Number],default:null},...v,order:{type:[String,Number],default:null},...S,alignSelf:{type:String,default:null,validator:n=>["auto","start","end","center","baseline","stretch"].includes(n)},tag:{type:String,default:"div"}},render(n,{props:t,data:e,children:s,parent:o}){let i="";for(const r in t)i+=String(t[r]);let l=_.get(i);if(!l){l=[];let r;for(r in p)p[r].forEach(c=>{const M=t[c],m=E(r,c,M);m&&l.push(m)});const u=l.some(c=>c.startsWith("col-"));l.push({col:!u||!t.cols,[`col-${t.cols}`]:t.cols,[`offset-${t.offset}`]:t.offset,[`order-${t.order}`]:t.order,[`align-self-${t.alignSelf}`]:t.alignSelf}),_.set(i,l)}return n(t.tag,$(e,{class:l}),s)}}),F=["sm","md","lg","xl"],f=["start","end","center"];function w(n,t){return F.reduce((e,s)=>(e[n+d(s)]=t(),e),{})}const k=n=>[...f,"baseline","stretch"].includes(n),O=w("align",()=>({type:String,default:null,validator:k})),N=n=>[...f,"space-between","space-around"].includes(n),P=w("justify",()=>({type:String,default:null,validator:N})),A=n=>[...f,"space-between","space-around","stretch"].includes(n),L=w("alignContent",()=>({type:String,default:null,validator:A})),b={align:Object.keys(O),justify:Object.keys(P),alignContent:Object.keys(L)},K={align:"align",justify:"justify",alignContent:"align-content"};function R(n,t,e){let s=K[n];if(e!=null){if(t){const o=t.replace(n,"");s+=`-${o}`}return s+=`-${e}`,s.toLowerCase()}}const h=new Map,y=C.extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:k},...O,justify:{type:String,default:null,validator:N},...P,alignContent:{type:String,default:null,validator:A},...L},render(n,{props:t,data:e,children:s}){let o="";for(const l in t)o+=String(t[l]);let i=h.get(o);if(!i){i=[];let l;for(l in b)b[l].forEach(r=>{const u=t[r],c=R(l,r,u);c&&i.push(c)});i.push({"no-gutters":t.noGutters,"row--dense":t.dense,[`align-${t.align}`]:t.align,[`justify-${t.justify}`]:t.justify,[`align-content-${t.alignContent}`]:t.alignContent}),h.set(o,i)}return n(t.tag,$(e,{staticClass:"row",class:i}),s)}}),z="/radiux/img/logo/msi-installer.png",D="/radiux/img/logo/play-store.png",I="/radiux/img/logo/windows.png",T="/radiux/img/logo/android.png";const H={computed:{getOs(){return/Android/i.test(navigator.userAgent)||/iPhone|i-Phone/i.test(navigator.userAgent)?"Android":/windows/i.test(navigator.userAgent)?"Windows":"Other"}}};var J=function(){var t=this,e=t._self._c;return e(G,{staticClass:"home-page tw-bg-[#f1cd43] tw-h-full tw-w-full !tw-relative"},[e(W,[e(y,[e(x,[e(a,{staticClass:"tw-w-full tw-p-[10px]",class:{"tw-overflow-y-scroll tw-overflow-x-hidden":0},attrs:{align:"center",direction:t.$mobile?"col":"row",gap:t.$mobile?"10":"0"}},[e(a,{staticClass:"tw-w-[50%]",class:{"tw-w-full":t.$mobile},attrs:{align:"center",justify:"center"}},[e(a,{staticClass:"tw-p-[10px]",class:{"tw-w-[50%]":!t.$mobile,"tw-w-[100%]":t.$mobile},attrs:{direction:"col",align:"center",justify:"center",gap:"10"}},[e("span",{staticClass:"tw-text-2xl tw-font-extrabold"},[t._v(t._s(t._f("translate")("app.pages.home.section.presentation.title")))]),e("span",{staticClass:"tw-text-lg tw-font-semibold"},[t._v(t._s(t._f("translate")("app.pages.home.section.presentation.subtitle")))]),e("span",{staticClass:"tw-text-base"},[t._v(t._s(t._f("translate")("app.pages.home.section.presentation.description")))])])],1),e(a,{staticClass:"tw-w-[50%] tw-h-full tw-self-center",class:{"tw-w-full":t.$mobile},attrs:{align:"center",justify:"center"}},[e("img",{staticClass:"tw-max-h-[100px] tw-max-w-[100px] md:tw-max-h-[300px] md:tw-max-w-[300px]",attrs:{src:q,alt:"Radiux"}})])],1)],1)],1),e(y,[e(x,[e(a,{staticClass:"tw-w-full tw-p-[10px]",class:{"tw-h-full":!t.$mobile,"tw-h-auto tw-mb-[80px]":t.$mobile},attrs:{justify:(t.$mobile,"center"),align:"center",direction:t.$mobile?"col":"row",gap:t.$mobile?"50":"0"}},[e(a,{staticClass:"tw-w-[50%]",class:{"tw-order-2":t.$mobile},attrs:{align:"center",justify:"center"}},[e(B,{staticClass:"!tw-p-[10px] !tw-h-auto tw-rounded-[8px]"},[e(a,{attrs:{align:"center",justify:"center",gap:"10"}},[t.getOs==="Windows"?[e(a,{attrs:{align:"center",justify:"center"}},[e("img",{staticClass:"tw-max-h-[24px] tw-max-w-[24px] md:tw-max-h-[60px] md:tw-max-w-[60px]",attrs:{src:z,alt:t.$t("app.pages.home.section.download.button.label")}})])]:t.getOs==="Android"?[e(a,{attrs:{align:"center",justify:"center"}},[e("img",{staticClass:"tw-max-h-[70px] tw-max-w-[70px]",attrs:{src:D,alt:t.$t("app.pages.home.section.download.button.label")}})])]:t._e(),e(a,{attrs:{align:"center",justify:"center"}},[e("span",{staticClass:"!tw-normal-case tw-text-[150%]"},[t._v(t._s(t._f("translate")("app.pages.home.section.download.button.label")))])])],2)],1)],1),e(a,{staticClass:"tw-w-[50%]",class:{"tw-order-1":t.$mobile},attrs:{align:"center",justify:"center"}},[e(a,{attrs:{align:"center",justify:"center",gap:"50"}},[t.getOs==="Windows"?[e(a,{attrs:{align:"center"}},[e("img",{staticClass:"tw-max-h-[40px] tw-max-w-[40px] md:tw-max-h-[150px] md:tw-max-w-[150px]",attrs:{src:I,alt:t.$t("app.pages.home.section.download.button.label")}})])]:t._e(),t.getOs==="Android"?[e(a,{attrs:{align:"center"}},[e("img",{staticClass:"tw-max-h-[80px] tw-max-w-[80px] md:tw-max-h-[150px] md:tw-max-w-[150px]",attrs:{src:T,alt:t.$t("app.pages.home.section.download.button.label")}})])]:t._e(),e(a,{attrs:{direction:"col",justify:"center",gap:"10"}},[e("span",{staticClass:"tw-text-2xl tw-font-extrabold"},[t._v(t._s(t._f("translate")("app.pages.home.section.download.title")))]),e("span",{staticClass:"tw-text-lg tw-font-semibold"},[t._v(t._s(t._f("translate")("app.pages.home.section.download.subtitle")))]),e("span",{staticClass:"tw-text-base"},[t._v(t._s(t.$t("app.pages.home.section.download.description",{so:t.getOs})))])])],2)],1)],1)],1)],1)],1)])},Q=[],U=V(H,J,Q,!1,null,null,null,null);const Z=U.exports;export{Z as default};
