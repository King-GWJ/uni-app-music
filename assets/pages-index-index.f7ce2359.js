import{i as e,_ as t,h as a,r as l,a as s,o as i,c,w as n,b as r,n as o,d as u,e as d,t as h,f as p,g as m,I as f,j as y,k as _,l as g,m as b,p as k,q as C,s as w,u as S,v as x,x as v,y as F,F as V,S as U,z as T,A as j}from"./index-43ced767.js";import{_ as $}from"./uni-icons.ac3eeace.js";import{S as z,n as B}from"./Sidebar.0d7f2472.js";const I={en:{"uni-search-bar.cancel":"cancel","uni-search-bar.placeholder":"Search enter content"},"zh-Hans":{"uni-search-bar.cancel":"取消","uni-search-bar.placeholder":"请输入搜索内容"},"zh-Hant":{"uni-search-bar.cancel":"取消","uni-search-bar.placeholder":"請輸入搜索內容"}},{t:q}=e(I);const A=t({name:"UniSearchBar",emits:["input","update:modelValue","clear","cancel","confirm","blur","focus"],props:{placeholder:{type:String,default:""},radius:{type:[Number,String],default:5},clearButton:{type:String,default:"auto"},cancelButton:{type:String,default:"auto"},cancelText:{type:String,default:""},bgColor:{type:String,default:"#F8F8F8"},textColor:{type:String,default:"#F8F8F8"},maxlength:{type:[Number,String],default:100},value:{type:[Number,String],default:""},modelValue:{type:[Number,String],default:""},focus:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1}},data:()=>({show:!1,showSync:!1,searchVal:""}),computed:{cancelTextI18n(){return this.cancelText||q("uni-search-bar.cancel")},placeholderText(){return this.placeholder||q("uni-search-bar.placeholder")}},watch:{modelValue:{immediate:!0,handler(e){this.searchVal=e,e&&(this.show=!0)}},focus:{immediate:!0,handler(e){if(e){if(this.readonly)return;this.show=!0,this.$nextTick((()=>{this.showSync=!0}))}}},searchVal(e,t){this.$emit("input",e),this.$emit("update:modelValue",e)}},methods:{searchClick(){this.readonly||this.show||(this.show=!0,this.$nextTick((()=>{this.showSync=!0})))},clear(){this.searchVal="",this.$nextTick((()=>{this.$emit("clear",{value:""})}))},cancel(){this.readonly||(this.$emit("cancel",{value:this.searchVal}),this.searchVal="",this.show=!1,this.showSync=!1,a())},confirm(){a(),this.$emit("confirm",{value:this.searchVal})},blur(){a(),this.$emit("blur",{value:this.searchVal})},emitFocus(e){this.$emit("focus",e.detail)}}},[["render",function(e,t,a,_,g,b){const k=l(s("uni-icons"),$),C=m,w=f,S=y;return i(),c(C,{class:"uni-searchbar"},{default:n((()=>[r(C,{style:o({borderRadius:a.radius+"px",backgroundColor:a.bgColor}),class:"uni-searchbar__box",onClick:b.searchClick},{default:n((()=>[r(C,{class:"uni-searchbar__box-icon-search"},{default:n((()=>[u(e.$slots,"searchIcon",{},(()=>[r(k,{color:"#c0c4cc",size:"18",type:"search"})]),!0)])),_:3}),g.show||g.searchVal?(i(),c(w,{key:0,focus:g.showSync,disabled:a.readonly,placeholder:b.placeholderText,maxlength:a.maxlength,class:"uni-searchbar__box-search-input","confirm-type":"search",type:"text",modelValue:g.searchVal,"onUpdate:modelValue":t[0]||(t[0]=e=>g.searchVal=e),style:o({color:a.textColor}),onConfirm:b.confirm,onBlur:b.blur,onFocus:b.emitFocus},null,8,["focus","disabled","placeholder","maxlength","modelValue","style","onConfirm","onBlur","onFocus"])):(i(),c(S,{key:1,class:"uni-searchbar__text-placeholder"},{default:n((()=>[d(h(a.placeholder),1)])),_:1})),g.show&&("always"===a.clearButton||"auto"===a.clearButton&&""!==g.searchVal)&&!a.readonly?(i(),c(C,{key:2,class:"uni-searchbar__box-icon-clear",onClick:b.clear},{default:n((()=>[u(e.$slots,"clearIcon",{},(()=>[r(k,{color:"#c0c4cc",size:"20",type:"clear"})]),!0)])),_:3},8,["onClick"])):p("",!0)])),_:3},8,["style","onClick"]),"always"===a.cancelButton||g.show&&"auto"===a.cancelButton?(i(),c(S,{key:0,onClick:b.cancel,class:"uni-searchbar__cancel"},{default:n((()=>[d(h(b.cancelTextI18n),1)])),_:1},8,["onClick"])):p("",!0)])),_:3})}],["__scopeId","data-v-364b5b74"]]);const E=t({name:"UniSection",emits:["click"],props:{type:{type:String,default:""},title:{type:String,required:!0,default:""},titleFontSize:{type:String,default:"14px"},titleColor:{type:String,default:"#333"},subTitle:{type:String,default:""},subTitleFontSize:{type:String,default:"12px"},subTitleColor:{type:String,default:"#999"},padding:{type:[Boolean,String],default:!1}},computed:{_padding(){return"string"==typeof this.padding?this.padding:this.padding?"10px":""}},watch:{title(e){uni.report&&""!==e&&uni.report("title",e)}},methods:{onClick(){this.$emit("click")}}},[["render",function(e,t,a,l,s,f){const g=m,b=y;return i(),c(g,{class:"uni-section"},{default:n((()=>[r(g,{class:"uni-section-header",onClick:f.onClick},{default:n((()=>[a.type?(i(),c(g,{key:0,class:_(["uni-section-header__decoration",a.type])},null,8,["class"])):u(e.$slots,"decoration",{key:1},void 0,!0),r(g,{class:"uni-section-header__content"},{default:n((()=>[r(b,{style:o({"font-size":a.titleFontSize,color:a.titleColor}),class:_(["uni-section__content-title",{distraction:!a.subTitle}])},{default:n((()=>[d(h(a.title),1)])),_:1},8,["style","class"]),a.subTitle?(i(),c(b,{key:0,style:o({"font-size":a.subTitleFontSize,color:a.subTitleColor}),class:"uni-section-header__content-sub"},{default:n((()=>[d(h(a.subTitle),1)])),_:1},8,["style"])):p("",!0)])),_:1}),r(g,{class:"uni-section-header__slot-right"},{default:n((()=>[u(e.$slots,"right",{},void 0,!0)])),_:3})])),_:3},8,["onClick"]),r(g,{class:"uni-section-content",style:o({padding:f._padding})},{default:n((()=>[u(e.$slots,"default",{},void 0,!0)])),_:3},8,["style"])])),_:3})}],["__scopeId","data-v-62a0b6ae"]]),R=[{id:-1,name:"每日推荐",iconUrl:"http://p1.music.126.net/4DpSgAVpJny4Ewf-Xw_WQQ==/109951163986641971.jpg",url:"/pages/acquiesce/acquiesce"},{id:-6,name:"私人FM",iconUrl:"http://p1.music.126.net/Shi7cRT1bDhwpVDM7AOFXg==/109951165265330616.jpg",url:"/pages/personalfm/personalfm"},{id:-2,name:"歌单",iconUrl:"http://p1.music.126.net/uG5p6CnwAHrLqOkaSeRlnA==/109951163986649164.jpg",url:""},{id:-3,name:"排行榜",iconUrl:"http://p1.music.126.net/SDFC6A3X2wzUCavYyeGIOg==/109951163986649670.jpg",url:"/pages/recommended/recommended"},{id:1025001,name:"有声书",iconUrl:"http://p1.music.126.net/Kb4oK0m_ocs3FR3lo-r9yg==/109951167319110429.jpg",url:""},{id:13e3,name:"数字专辑",iconUrl:"http://p1.music.126.net/nRWhsf3P7r7eqHz-v61VBg==/109951166989045593.jpg",url:""},{id:11e3,name:"直播",iconUrl:"http://p1.music.126.net/2JvVZZjcjyCE72fGMsC1hg==/109951166989043011.jpg",url:""},{id:1025e3,name:"关注新歌",iconUrl:"http://p1.music.126.net/BAOWsqZmmxL8JIH-wejMmQ==/109951167294312390.jpg",url:""},{id:1027e3,name:"收藏家",iconUrl:"http://p1.music.126.net/gk99UFRasebERf38t6A1kA==/109951168168319514.jpg",url:""}],D=t({__name:"index",setup(e){g("curCookie");const t=b([]),a=b([]),o=b([]),u=b([]),p=b(null);k().then((e=>{t.value=e.banners})),C().then((e=>{a.value=e.result})),w().then((e=>{o.value=e.list})),S(12).then((e=>{u.value=f(e.result)}));const f=e=>{const t=[];for(let a=0;a<e.length/3;a++)t.push(e.slice(3*a,3*(a+1)));return t},y=e=>{B("/pages/acquiesce/acquiesce?id="+e)};return(e,f)=>{const _=l(s("uni-icons"),$),g=l(s("uni-search-bar"),A),b=m,k=T,C=j,w=U,S=l(s("uni-section"),E);return i(),c(b,{class:"content"},{default:n((()=>[r(b,{class:"header"},{default:n((()=>[r(_,{class:"bars",type:"bars",size:"24",onClick:f[0]||(f[0]=()=>{p.value.showDrawer()})}),r(b,{class:"search",onClick:f[1]||(f[1]=e=>x(B)("/pages/search/search"))},{default:n((()=>[r(g,{placeholder:"搜索",bgColor:"#EEEEEE",readonly:""})])),_:1})])),_:1}),r(b,{class:"main"},{default:n((()=>[r(b,{class:"swiper-wrap"},{default:n((()=>[r(w,{class:"swiper","indicator-dots":"","indicator-color":"rgba(255, 255, 255, .4)","indicator-active-color":"#ffffff",autoplay:"",circular:""},{default:n((()=>[(i(!0),v(V,null,F(t.value,(e=>(i(),c(C,{key:e.targetId},{default:n((()=>[r(k,{src:e.imageUrl,mode:"widthFix"},null,8,["src"])])),_:2},1024)))),128))])),_:1})])),_:1}),r(w,{class:"icon-swiper","display-multiple-items":"5"},{default:n((()=>[(i(!0),v(V,null,F(x(R),(e=>(i(),c(C,{key:e.id},{default:n((()=>[r(k,{src:e.iconUrl,mode:"widthFix",onClick:t=>x(B)(e.url)},null,8,["src","onClick"]),r(b,{class:"icon-name"},{default:n((()=>[d(h(e.name),1)])),_:2},1024)])),_:2},1024)))),128))])),_:1}),r(S,{type:"line",title:"推荐歌单"},{default:n((()=>[r(b,{class:"playlist"},{default:n((()=>[(i(!0),v(V,null,F(a.value,(e=>(i(),c(b,{class:"playlist-item",key:e.id,onClick:t=>y(e.id)},{default:n((()=>[r(k,{src:e.picUrl,mode:"widthFix"},null,8,["src"]),r(b,{class:"playlist-item-name"},{default:n((()=>[d(h(e.name),1)])),_:2},1024)])),_:2},1032,["onClick"])))),128))])),_:1})])),_:1}),r(S,{type:"line",title:"新歌新碟"},{default:n((()=>[r(b,{class:"newsong"},{default:n((()=>[(i(!0),v(V,null,F(u.value,(e=>(i(),c(b,{class:"musiclist"},{default:n((()=>[(i(!0),v(V,null,F(e,(e=>(i(),c(b,{class:"musiclist-item",key:e.id,onClick:f[2]||(f[2]=e=>x(B)("/pages/musicPlay/musicPlay"))},{default:n((()=>[r(k,{src:e.picUrl,mode:"widthFix"},null,8,["src"]),r(b,{class:"musiclist-item-name"},{default:n((()=>[d(h(e.name),1)])),_:2},1024)])),_:2},1024)))),128))])),_:2},1024)))),256))])),_:1})])),_:1}),r(S,{type:"line",title:"排行榜"},{default:n((()=>[r(b,{class:"playlist"},{default:n((()=>[(i(!0),v(V,null,F(o.value,(e=>(i(),c(b,{class:"playlist-item",key:e.id,onClick:t=>y(e.id)},{default:n((()=>[r(k,{src:e.coverImgUrl,mode:"widthFix"},null,8,["src"]),r(b,{class:"playlist-item-name"},{default:n((()=>[d(h(e.name),1)])),_:2},1024)])),_:2},1032,["onClick"])))),128))])),_:1})])),_:1})])),_:1}),r(z,{ref_key:"sidebar",ref:p},null,512)])),_:1})}}},[["__scopeId","data-v-4996ab1b"]]);export{D as default};
