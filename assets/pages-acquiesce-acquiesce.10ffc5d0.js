import{m as a,Y as s,$ as e,aF as l,o as A,c as t,w as u,g as c,b as o,e as i,t as d,v as m,f as n,x as g,y as r,F as f,Q as R,N as p,z as B,M as v}from"./index-774346cf.js";import{b as I,S as b}from"./setting.021a953c.js";import{b as C,a as K,_ as q}from"./icon-liebiao.1080e628.js";import{u as O}from"./music.637fe340.js";import{_ as y}from"./plugin-vueexport-helper.1b428a4d.js";import"./showlist.vuevuetypestyleindex0scoped5fd66438lang.115f34c7.js";import"./curplay.vuevuetypestyleindex0scoped6a8a1d0dlang.58eb8051.js";const h=""+new URL("incon-blackbofang-fe89588c.png",import.meta.url).href,D=y({__name:"acquiesce",setup(y){const D=O(),F=a([]),S=a(!1),U=a({}),x=new Date,E=x.getMonth()+1,M=x.getDate();s((a=>{a.id?e(a.id,50,0).then((a=>{F.value=a.songs})):l().then((a=>{F.value=a.data.dailySongs}))}));return(a,s)=>{const e=c,l=B;return A(),t(e,{class:"box"},{default:u((()=>[o(e,{class:"header"},{default:u((()=>[o(e,{class:"date"},{default:u((()=>[o(e,{class:"dateNumber"},{default:u((()=>[o(e,{class:"dateMonth"},{default:u((()=>[o(e,{class:"dateMonthA"},{default:u((()=>[i(d(E))])),_:1}),o(e,{class:"dateDay"},{default:u((()=>[i(" / "+d(m(M)),1)])),_:1})])),_:1})])),_:1}),o(e,{class:"luck"},{default:u((()=>[o(e,{class:""},{default:u((()=>[i(" 查看今日运势＞ ")])),_:1}),o(e,{class:"history"},{default:u((()=>[i(" 历史日推 ")])),_:1})])),_:1})])),_:1})])),_:1}),o(e,{class:"all"},{default:u((()=>[o(e,{class:"allImg"},{default:u((()=>[o(l,{src:I,mode:""})])),_:1}),o(e,{class:"allText",onClick:s[0]||(s[0]=a=>{return s=F.value,e=F.value[0],l=0,D.musicAllList(s,e,l),void p({url:`/pages/musicPlay/musicPlay?id=${e.id}`});var s,e,l})},{default:u((()=>[i(" 播放全部 "),o(e,{class:""},{default:u((()=>[i(" VIP 歌曲免费畅听 ")])),_:1})])),_:1}),o(e,{class:"allLiebiao",onClick:s[1]||(s[1]=a=>m(D).musicToggle())},{default:u((()=>[1===m(D).musicMode?(A(),t(l,{key:0,src:C})):2===m(D).musicMode?(A(),t(l,{key:1,src:K})):3===m(D).musicMode?(A(),t(l,{key:2,src:"data:image/png;base64,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"})):n("",!0)])),_:1}),o(e,{class:"allLiebiao"},{default:u((()=>[o(l,{src:q,mode:""})])),_:1})])),_:1}),o(e,{class:"musicList"},{default:u((()=>[(A(!0),g(f,null,r(F.value,((a,s)=>(A(),t(e,{class:"music",key:a.id},{default:u((()=>[o(e,{class:"musicImg"},{default:u((()=>[o(l,{src:a.al.picUrl,mode:""},null,8,["src"])])),_:2},1024),o(e,{class:"musicText",onClick:e=>{return l=F.value,A=a,t=s,D.musicAllList(l,A,t,"每日推荐"),void p({url:"/pages/musicPlay/musicPlay"});var l,A,t}},{default:u((()=>[o(e,{class:"textName"},{default:u((()=>[i(d(a.name),1)])),_:2},1024),o(e,{class:"textNumber"},{default:u((()=>[a.reason?(A(),t(e,{key:0,class:"textColor"},{default:u((()=>[i(d(a.reason),1)])),_:2},1024)):(A(),t(e,{key:1,class:"textColorA"},{default:u((()=>[i(" 超清母带 ")])),_:1})),o(e,{class:"textJieshao"},{default:u((()=>[i(d(a.ar[0].name),1)])),_:2},1024)])),_:2},1024)])),_:2},1032,["onClick"]),a.mv?(A(),t(e,{key:0,class:"musicMv",onClick:s=>(a=>{D.musicMv(a),v({url:"/pages/mv/mv"})})(a)},{default:u((()=>[o(l,{src:h,mode:""})])),_:2},1032,["onClick"])):n("",!0),o(e,{class:"musicIcon",onClick:s=>{return e=S.value,l=a,U.value=l,void(S.value=!e);var e,l}},{default:u((()=>[o(l,{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAapJREFUeF7tm+FNw0AMhePMQPiDmAHk3CqwSBkDFoFVLhbMgPgDzBCjKKpUtVFlKdK7I339V8nV2Z9fz2mfLM2Fv+TC62+KAcg5X7VtezM1YBzHr5TSb4lmFAFgZq/u/nBYsIi8qeojGgIcwDAMfq7Ivu+hOUEPM7Nnd9+dAyAiL6r6hFICDICZde7+HSlMRK5V9ScSuzYGBiDnrCIyRBJ29z6lZJHYtTEwAGZ25+7vkYRF5F5VPyKxa2NgAKaxJyIhWbt7hxqLMABTp5bG33EH0eMQCmAq9qLH4L7bS+MQPf72ucAVcAChG8fxdnrftu0nauydfOXW3qL//fPFFFALOAKopROl8qACSpGv5VwqoJZOlMqDCihFvpZzqYBaOlEqj2IKoC9AX2BZ9PQF6As0DX0B+gL0BegLoB6M4A9C9AVmh+jEJqcvALLD6QscEYDfAajLLXoOAURJbTWOCthqZ6N1UQFRUluNowK22tloXVRAlNRW44opgL4AfQH6AosE0H+MwO4A7gtwX4D7AtwX4L4A9wXmyUdfYIbAfYEafmDBHoRqKHYphz9poQhQbjiNOgAAAABJRU5ErkJggg==",mode:"widthFix"})])),_:2},1032,["onClick"])])),_:2},1024)))),128))])),_:1}),S.value?(A(),t(b,{key:0,onClick:s[2]||(s[2]=R((a=>S.value=!1),["stop"])),itemSong:U.value},null,8,["itemSong"])):n("",!0)])),_:1})}}},[["__scopeId","data-v-1d740f9d"]]);export{D as default};
