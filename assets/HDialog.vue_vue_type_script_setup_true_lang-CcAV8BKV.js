import{d as w,ay as i,az as b,aB as h,r as C,C as k,o as d,c as B,w as t,e as s,u as e,a1 as p,a2 as c,b as o,H as V,a3 as T,aC as S,f as j,t as F,a5 as N,aA as u,j as $,l as z,a7 as M,a8 as D,_ as H}from"./index-IvKGim0J.js";const A={class:"fixed inset-0 overflow-y-auto"},E={class:"min-h-full flex items-end justify-center p-4 text-center lg-items-center"},G={flex:"~ items-center justify-between","px-4":"","py-3":"","border-b":"~ solid stone/15","text-6":""},I={key:0,flex:"~ items-center justify-end","px-4":"","py-3":"","border-t":"~ solid stone/15"},P=w({__name:"HDialog",props:i({appear:{type:Boolean,default:!1},title:{},preventClose:{type:Boolean,default:!1},overlay:{type:Boolean,default:!1}},{modelValue:{type:Boolean,default:!1},modelModifiers:{}}),emits:i(["close"],["update:modelValue"]),setup(f,{emit:m}){const y=m,l=b(f,"modelValue"),v=h(),g=C({enter:"ease-in-out duration-500",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in-out duration-500",leaveFrom:"opacity-100",leaveTo:"opacity-0"}),_=k(()=>({enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 lg-translate-y-0 lg-scale-95",enterTo:"opacity-100 translate-y-0 lg-scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 lg-scale-100",leaveTo:"opacity-0 translate-y-4 lg-translate-y-0 lg-scale-95"}));function r(){l.value=!1,y("close")}return(a,n)=>{const x=H;return d(),B(e(D),{as:"template",appear:a.appear,show:l.value},{default:t(()=>[s(e(M),{class:"fixed inset-0 z-2000 flex",onClose:n[0]||(n[0]=J=>!a.preventClose&&r())},{default:t(()=>[s(e(p),c({as:"template",appear:a.appear},e(g)),{default:t(()=>[o("div",{class:V(["fixed inset-0 bg-stone-2/75 transition-opacity dark-bg-stone-8/75",{"backdrop-blur-sm":a.overlay}])},null,2)]),_:1},16,["appear"]),o("div",A,[o("div",E,[s(e(p),c({as:"template",appear:a.appear},e(_)),{default:t(()=>[s(e(T),{class:"relative w-full flex flex-col overflow-hidden rounded-xl bg-white text-left shadow-xl lg-my-8 lg-max-w-lg dark-bg-stone-8"},{default:t(()=>[o("div",G,[s(e(S),{"m-0":"","text-lg":"","text-dark":"","dark-text-white":""},{default:t(()=>[j(F(a.title),1)]),_:1}),s(x,{name:"i-carbon:close","cursor-pointer":"",onClick:r})]),s(e(N),{"m-0":"","overflow-y-auto":"","p-4":""},{default:t(()=>[u(a.$slots,"default")]),_:3}),e(v).footer?(d(),$("div",I,[u(a.$slots,"footer")])):z("",!0)]),_:3})]),_:3},16,["appear"])])])]),_:3})]),_:3},8,["appear","show"])}}});export{P as _};