import{i as e,h as t,r as a,a as l,o as s,c as i,w as n,b as c,n as r,d as o,e as u,t as d,f as h,g as p,I as m,j as f,k as y,l as _,m as g,p as b,q as k,s as C,u as w,v as x,x as S,y as v,F,S as V,z as j,A as U}from"./index-a8e83e52.js";import{_ as T}from"./uni-icons.520e7b19.js";import{_ as $}from"./plugin-vueexport-helper.1b428a4d.js";import{n as B,r as z}from"./index.1654d4ef.js";import{S as I}from"./Sidebar.a1d4a18c.js";import{m as A}from"./musicBar.b11f46f9.js";import{u as E}from"./music.5329dbf5.js";const q={en:{"uni-search-bar.cancel":"cancel","uni-search-bar.placeholder":"Search enter content"},"zh-Hans":{"uni-search-bar.cancel":"取消","uni-search-bar.placeholder":"请输入搜索内容"},"zh-Hant":{"uni-search-bar.cancel":"取消","uni-search-bar.placeholder":"請輸入搜索內容"}},{t:R}=e(q);const D=$({name:"UniSearchBar",emits:["input","update:modelValue","clear","cancel","confirm","blur","focus"],props:{placeholder:{type:String,default:""},radius:{type:[Number,String],default:5},clearButton:{type:String,default:"auto"},cancelButton:{type:String,default:"auto"},cancelText:{type:String,default:""},bgColor:{type:String,default:"#F8F8F8"},textColor:{type:String,default:"#F8F8F8"},maxlength:{type:[Number,String],default:100},value:{type:[Number,String],default:""},modelValue:{type:[Number,String],default:""},focus:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1}},data:()=>({show:!1,showSync:!1,searchVal:""}),computed:{cancelTextI18n(){return this.cancelText||R("uni-search-bar.cancel")},placeholderText(){return this.placeholder||R("uni-search-bar.placeholder")}},watch:{modelValue:{immediate:!0,handler(e){this.searchVal=e,e&&(this.show=!0)}},focus:{immediate:!0,handler(e){if(e){if(this.readonly)return;this.show=!0,this.$nextTick((()=>{this.showSync=!0}))}}},searchVal(e,t){this.$emit("input",e),this.$emit("update:modelValue",e)}},methods:{searchClick(){this.readonly||this.show||(this.show=!0,this.$nextTick((()=>{this.showSync=!0})))},clear(){this.searchVal="",this.$nextTick((()=>{this.$emit("clear",{value:""})}))},cancel(){this.readonly||(this.$emit("cancel",{value:this.searchVal}),this.searchVal="",this.show=!1,this.showSync=!1,t())},confirm(){t(),this.$emit("confirm",{value:this.searchVal})},blur(){t(),this.$emit("blur",{value:this.searchVal})},emitFocus(e){this.$emit("focus",e.detail)}}},[["render",function(e,t,y,_,g,b){const k=a(l("uni-icons"),T),C=p,w=m,x=f;return s(),i(C,{class:"uni-searchbar"},{default:n((()=>[c(C,{style:r({borderRadius:y.radius+"px",backgroundColor:y.bgColor}),class:"uni-searchbar__box",onClick:b.searchClick},{default:n((()=>[c(C,{class:"uni-searchbar__box-icon-search"},{default:n((()=>[o(e.$slots,"searchIcon",{},(()=>[c(k,{color:"#c0c4cc",size:"18",type:"search"})]),!0)])),_:3}),g.show||g.searchVal?(s(),i(w,{key:0,focus:g.showSync,disabled:y.readonly,placeholder:b.placeholderText,maxlength:y.maxlength,class:"uni-searchbar__box-search-input","confirm-type":"search",type:"text",modelValue:g.searchVal,"onUpdate:modelValue":t[0]||(t[0]=e=>g.searchVal=e),style:r({color:y.textColor}),onConfirm:b.confirm,onBlur:b.blur,onFocus:b.emitFocus},null,8,["focus","disabled","placeholder","maxlength","modelValue","style","onConfirm","onBlur","onFocus"])):(s(),i(x,{key:1,class:"uni-searchbar__text-placeholder"},{default:n((()=>[u(d(y.placeholder),1)])),_:1})),g.show&&("always"===y.clearButton||"auto"===y.clearButton&&""!==g.searchVal)&&!y.readonly?(s(),i(C,{key:2,class:"uni-searchbar__box-icon-clear",onClick:b.clear},{default:n((()=>[o(e.$slots,"clearIcon",{},(()=>[c(k,{color:"#c0c4cc",size:"20",type:"clear"})]),!0)])),_:3},8,["onClick"])):h("",!0)])),_:3},8,["style","onClick"]),"always"===y.cancelButton||g.show&&"auto"===y.cancelButton?(s(),i(x,{key:0,onClick:b.cancel,class:"uni-searchbar__cancel"},{default:n((()=>[u(d(b.cancelTextI18n),1)])),_:1},8,["onClick"])):h("",!0)])),_:3})}],["__scopeId","data-v-364b5b74"]]);const H=$({name:"UniSection",emits:["click"],props:{type:{type:String,default:""},title:{type:String,required:!0,default:""},titleFontSize:{type:String,default:"14px"},titleColor:{type:String,default:"#333"},subTitle:{type:String,default:""},subTitleFontSize:{type:String,default:"12px"},subTitleColor:{type:String,default:"#999"},padding:{type:[Boolean,String],default:!1}},computed:{_padding(){return"string"==typeof this.padding?this.padding:this.padding?"10px":""}},watch:{title(e){uni.report&&""!==e&&uni.report("title",e)}},methods:{onClick(){this.$emit("click")}}},[["render",function(e,t,a,l,m,_){const g=p,b=f;return s(),i(g,{class:"uni-section"},{default:n((()=>[c(g,{class:"uni-section-header",onClick:_.onClick},{default:n((()=>[a.type?(s(),i(g,{key:0,class:y(["uni-section-header__decoration",a.type])},null,8,["class"])):o(e.$slots,"decoration",{key:1},void 0,!0),c(g,{class:"uni-section-header__content"},{default:n((()=>[c(b,{style:r({"font-size":a.titleFontSize,color:a.titleColor}),class:y(["uni-section__content-title",{distraction:!a.subTitle}])},{default:n((()=>[u(d(a.title),1)])),_:1},8,["style","class"]),a.subTitle?(s(),i(b,{key:0,style:r({"font-size":a.subTitleFontSize,color:a.subTitleColor}),class:"uni-section-header__content-sub"},{default:n((()=>[u(d(a.subTitle),1)])),_:1},8,["style"])):h("",!0)])),_:1}),c(g,{class:"uni-section-header__slot-right"},{default:n((()=>[o(e.$slots,"right",{},void 0,!0)])),_:3})])),_:3},8,["onClick"]),c(g,{class:"uni-section-content",style:r({padding:_._padding})},{default:n((()=>[o(e.$slots,"default",{},void 0,!0)])),_:3},8,["style"])])),_:3})}],["__scopeId","data-v-62a0b6ae"]]),L=[{id:-1,name:"每日推荐",iconUrl:"http://p1.music.126.net/4DpSgAVpJny4Ewf-Xw_WQQ==/109951163986641971.jpg",url:"/pages/acquiesce/acquiesce"},{id:-6,name:"私人FM",iconUrl:"http://p1.music.126.net/Shi7cRT1bDhwpVDM7AOFXg==/109951165265330616.jpg",url:"/pages/personalfm/personalfm"},{id:-2,name:"歌单",iconUrl:"http://p1.music.126.net/uG5p6CnwAHrLqOkaSeRlnA==/109951163986649164.jpg",url:""},{id:-3,name:"排行榜",iconUrl:"http://p1.music.126.net/SDFC6A3X2wzUCavYyeGIOg==/109951163986649670.jpg",url:"/pages/recommended/recommended"},{id:1025001,name:"有声书",iconUrl:"http://p1.music.126.net/Kb4oK0m_ocs3FR3lo-r9yg==/109951167319110429.jpg",url:""},{id:13e3,name:"数字专辑",iconUrl:"http://p1.music.126.net/nRWhsf3P7r7eqHz-v61VBg==/109951166989045593.jpg",url:""},{id:11e3,name:"直播",iconUrl:"http://p1.music.126.net/2JvVZZjcjyCE72fGMsC1hg==/109951166989043011.jpg",url:""},{id:1025e3,name:"关注新歌",iconUrl:"http://p1.music.126.net/BAOWsqZmmxL8JIH-wejMmQ==/109951167294312390.jpg",url:""},{id:1027e3,name:"收藏家",iconUrl:"http://p1.music.126.net/gk99UFRasebERf38t6A1kA==/109951168168319514.jpg",url:""}],M=$({__name:"index",setup(e){_("curCookie");const t=E(),r=g([]),o=g([]),h=g([]),m=g([]),f=g(null);b().then((e=>{r.value=e.banners})),k().then((e=>{o.value=e.result})),C().then((e=>{h.value=e.list})),w(12).then((e=>{m.value=y(e.result)}));const y=e=>{const t=[];for(let a=0;a<e.length/3;a++)t.push(e.slice(3*a,3*(a+1)));return t};return(e,y)=>{const _=a(l("uni-icons"),T),g=a(l("uni-search-bar"),D),b=p,k=j,C=U,w=V,$=a(l("uni-section"),H);return s(),i(b,{class:"content"},{default:n((()=>[c(A),c(b,{class:"header"},{default:n((()=>[c(_,{class:"bars",type:"bars",size:"24",onClick:y[0]||(y[0]=()=>{f.value.showDrawer()})}),c(b,{class:"search",onClick:y[1]||(y[1]=e=>x(B)("/pages/search/search"))},{default:n((()=>[c(g,{placeholder:"搜索",bgColor:"#EEEEEE",readonly:""})])),_:1})])),_:1}),c(b,{class:"main"},{default:n((()=>[c(b,{class:"swiper-wrap"},{default:n((()=>[c(w,{class:"swiper","indicator-dots":"","indicator-color":"rgba(255, 255, 255, .4)","indicator-active-color":"#ffffff",autoplay:"",circular:""},{default:n((()=>[(s(!0),S(F,null,v(r.value,(e=>(s(),i(C,{key:e.targetId},{default:n((()=>[c(k,{src:e.imageUrl,mode:"widthFix"},null,8,["src"])])),_:2},1024)))),128))])),_:1})])),_:1}),c(w,{class:"icon-swiper","display-multiple-items":"5"},{default:n((()=>[(s(!0),S(F,null,v(x(L),(e=>(s(),i(C,{key:e.id},{default:n((()=>[c(k,{src:e.iconUrl,mode:"widthFix",onClick:t=>x(B)(e.url)},null,8,["src","onClick"]),c(b,{class:"icon-name"},{default:n((()=>[u(d(e.name),1)])),_:2},1024)])),_:2},1024)))),128))])),_:1}),c($,{type:"line",title:"推荐歌单"},{default:n((()=>[c(b,{class:"playlist"},{default:n((()=>[(s(!0),S(F,null,v(o.value,(e=>(s(),i(b,{class:"playlist-item",key:e.id,onClick:t=>{return a=e.id,void B("/pages/songsList/songsList?id="+a+"&title=推荐歌单");var a}},{default:n((()=>[c(k,{src:e.picUrl,mode:"widthFix"},null,8,["src"]),c(b,{class:"playlist-item-name"},{default:n((()=>[u(d(e.name),1)])),_:2},1024)])),_:2},1032,["onClick"])))),128))])),_:1})])),_:1}),c($,{type:"line",title:"新歌新碟"},{default:n((()=>[c(b,{class:"newsong"},{default:n((()=>[(s(!0),S(F,null,v(m.value,(e=>(s(),i(b,{class:"musiclist"},{default:n((()=>[(s(!0),S(F,null,v(e,((e,a)=>(s(),i(b,{class:"musiclist-item",key:e.id,onClick:l=>((e,a)=>{t.musicAllList(m.value,e,a,"新歌新碟"),z("/pages/musicPlay/musicPlay")})(e,a)},{default:n((()=>[c(k,{src:e.picUrl,mode:"widthFix"},null,8,["src"]),c(b,{class:"musiclist-item-name"},{default:n((()=>[u(d(e.name),1)])),_:2},1024)])),_:2},1032,["onClick"])))),128))])),_:2},1024)))),256))])),_:1})])),_:1}),c($,{type:"line",title:"排行榜"},{default:n((()=>[c(b,{class:"playlist"},{default:n((()=>[(s(!0),S(F,null,v(h.value,(e=>(s(),i(b,{class:"playlist-item",key:e.id,onClick:t=>{return a=e.id,void B("/pages/songlist/songlist?id="+a);var a}},{default:n((()=>[c(k,{src:e.coverImgUrl,mode:"widthFix"},null,8,["src"]),c(b,{class:"playlist-item-name"},{default:n((()=>[u(d(e.name),1)])),_:2},1024)])),_:2},1032,["onClick"])))),128))])),_:1})])),_:1})])),_:1}),c(I,{ref_key:"sidebar",ref:f},null,512)])),_:1})}}},[["__scopeId","data-v-4e1686e9"]]);export{M as default};