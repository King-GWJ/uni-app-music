import{m as a,Z as s,az as e,aA as l,o as t,c,w as u,g as o,b as i,e as d,t as A,v as m,f as r,x as n,y as f,F as _,M as g,J as p,z as v}from"./index-66afabb2.js";import{b as h,S as y}from"./setting.f5bd48e8.js";import{_ as C,a as b,b as k,c as M}from"./icon-liebiao.63c10453.js";import{u as L}from"./music.abbe38a0.js";import{_ as F}from"./_plugin-vue_export-helper.1b428a4d.js";import"./showlist.vue_vue_type_style_index_0_scoped_8cc05ff6_lang.052259b8.js";const q=F({__name:"acquiesce",setup(F){const q=L(),x=a([]),B=a(!1),I=a({}),w=new Date,D=w.getMonth()+1,j=w.getDate();s((a=>{a.id?e(a.id,50,0).then((a=>{x.value=a.songs})):l().then((a=>{x.value=a.data.dailySongs}))}));return(a,s)=>{const e=o,l=v;return t(),c(e,{class:"box"},{default:u((()=>[i(e,{class:"header"},{default:u((()=>[i(e,{class:"date"},{default:u((()=>[i(e,{class:"dateNumber"},{default:u((()=>[i(e,{class:"dateMonth"},{default:u((()=>[i(e,{class:"dateMonthA"},{default:u((()=>[d(A(D))])),_:1}),i(e,{class:"dateDay"},{default:u((()=>[d(" / "+A(m(j)),1)])),_:1})])),_:1})])),_:1}),i(e,{class:"luck"},{default:u((()=>[i(e,{class:""},{default:u((()=>[d(" 查看今日运势＞ ")])),_:1}),i(e,{class:"history"},{default:u((()=>[d(" 历史日推 ")])),_:1})])),_:1})])),_:1})])),_:1}),i(e,{class:"all"},{default:u((()=>[i(e,{class:"allImg"},{default:u((()=>[i(l,{src:h,mode:""})])),_:1}),i(e,{class:"allText",onClick:s[0]||(s[0]=a=>{return s=x.value,e=x.value[0],l=0,q.musicAllList(s,e,l),void p({url:`/pages/musicPlay/musicPlay?id=${e.id}`});var s,e,l})},{default:u((()=>[d(" 播放全部 "),i(e,{class:""},{default:u((()=>[d(" VIP 歌曲免费畅听 ")])),_:1})])),_:1}),i(e,{class:"allLiebiao",onClick:s[1]||(s[1]=a=>m(q).musicToggle())},{default:u((()=>[1===m(q).musicMode?(t(),c(l,{key:0,src:C})):2===m(q).musicMode?(t(),c(l,{key:1,src:b})):3===m(q).musicMode?(t(),c(l,{key:2,src:k})):r("",!0)])),_:1}),i(e,{class:"allLiebiao"},{default:u((()=>[i(l,{src:M,mode:""})])),_:1})])),_:1}),i(e,{class:"musicList"},{default:u((()=>[(t(!0),n(_,null,f(x.value,((a,s)=>(t(),c(e,{class:"music",key:a.id},{default:u((()=>[i(e,{class:"musicImg"},{default:u((()=>[i(l,{src:a.al.picUrl,mode:""},null,8,["src"])])),_:2},1024),i(e,{class:"musicText",onClick:e=>{return l=x.value,t=a,c=s,q.musicAllList(l,t,c),void p({url:`/pages/musicPlay/musicPlay?id=${t.id}`});var l,t,c}},{default:u((()=>[i(e,{class:"textName"},{default:u((()=>[d(A(a.name),1)])),_:2},1024),i(e,{class:"textNumber"},{default:u((()=>[a.reason?(t(),c(e,{key:0,class:"textColor"},{default:u((()=>[d(A(a.reason),1)])),_:2},1024)):(t(),c(e,{key:1,class:"textColorA"},{default:u((()=>[d(" 超清母带 ")])),_:1})),i(e,{class:"textJieshao"},{default:u((()=>[d(A(a.ar[0].name),1)])),_:2},1024)])),_:2},1024)])),_:2},1032,["onClick"]),a.mv?(t(),c(e,{key:0,class:"musicMv"},{default:u((()=>[i(l,{src:"./assets/incon-blackbofang-fe89588c.png",mode:""})])),_:1})):r("",!0),i(e,{class:"musicIcon",onClick:s=>{return e=B.value,l=a,I.value=l,void(B.value=!e);var e,l}},{default:u((()=>[i(l,{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAapJREFUeF7tm+FNw0AMhePMQPiDmAHk3CqwSBkDFoFVLhbMgPgDzBCjKKpUtVFlKdK7I339V8nV2Z9fz2mfLM2Fv+TC62+KAcg5X7VtezM1YBzHr5TSb4lmFAFgZq/u/nBYsIi8qeojGgIcwDAMfq7Ivu+hOUEPM7Nnd9+dAyAiL6r6hFICDICZde7+HSlMRK5V9ScSuzYGBiDnrCIyRBJ29z6lZJHYtTEwAGZ25+7vkYRF5F5VPyKxa2NgAKaxJyIhWbt7hxqLMABTp5bG33EH0eMQCmAq9qLH4L7bS+MQPf72ucAVcAChG8fxdnrftu0nauydfOXW3qL//fPFFFALOAKopROl8qACSpGv5VwqoJZOlMqDCihFvpZzqYBaOlEqj2IKoC9AX2BZ9PQF6As0DX0B+gL0BegLoB6M4A9C9AVmh+jEJqcvALLD6QscEYDfAajLLXoOAURJbTWOCthqZ6N1UQFRUluNowK22tloXVRAlNRW44opgL4AfQH6AosE0H+MwO4A7gtwX4D7AtwX4L4A9wXmyUdfYIbAfYEafmDBHoRqKHYphz9poQhQbjiNOgAAAABJRU5ErkJggg==",mode:"widthFix"})])),_:2},1032,["onClick"])])),_:2},1024)))),128))])),_:1}),B.value?(t(),c(y,{key:0,onClick:s[2]||(s[2]=g((a=>B.value=!1),["stop"])),itemSong:I.value},null,8,["itemSong"])):r("",!0)])),_:1})}}},[["__scopeId","data-v-ababb92c"]]);export{q as default};
