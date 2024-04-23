import{i as e,h as t,r as a,a as l,o as s,c as i,w as c,b as n,n as r,d as o,e as u,t as d,f as h,g as p,I as m,j as f,k as y,l as _,m as g,p as b,q as k,s as C,u as w,v as S,x,y as v,F,S as V,z as U,A as T}from"./index-d83f280a.js";import{_ as j}from"./uni-icons.576b1d31.js";import{_ as $}from"./_plugin-vue_export-helper.1b428a4d.js";import{S as z,n as B}from"./Sidebar.c53efc0b.js";const I={en:{"uni-search-bar.cancel":"cancel","uni-search-bar.placeholder":"Search enter content"},"zh-Hans":{"uni-search-bar.cancel":"取消","uni-search-bar.placeholder":"请输入搜索内容"},"zh-Hant":{"uni-search-bar.cancel":"取消","uni-search-bar.placeholder":"請輸入搜索內容"}},{t:q}=e(I);const A=$({name:"UniSearchBar",emits:["input","update:modelValue","clear","cancel","confirm","blur","focus"],props:{placeholder:{type:String,default:""},radius:{type:[Number,String],default:5},clearButton:{type:String,default:"auto"},cancelButton:{type:String,default:"auto"},cancelText:{type:String,default:""},bgColor:{type:String,default:"#F8F8F8"},textColor:{type:String,default:"#F8F8F8"},maxlength:{type:[Number,String],default:100},value:{type:[Number,String],default:""},modelValue:{type:[Number,String],default:""},focus:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1}},data:()=>({show:!1,showSync:!1,searchVal:""}),computed:{cancelTextI18n(){return this.cancelText||q("uni-search-bar.cancel")},placeholderText(){return this.placeholder||q("uni-search-bar.placeholder")}},watch:{modelValue:{immediate:!0,handler(e){this.searchVal=e,e&&(this.show=!0)}},focus:{immediate:!0,handler(e){if(e){if(this.readonly)return;this.show=!0,this.$nextTick((()=>{this.showSync=!0}))}}},searchVal(e,t){this.$emit("input",e),this.$emit("update:modelValue",e)}},methods:{searchClick(){this.readonly||this.show||(this.show=!0,this.$nextTick((()=>{this.showSync=!0})))},clear(){this.searchVal="",this.$nextTick((()=>{this.$emit("clear",{value:""})}))},cancel(){this.readonly||(this.$emit("cancel",{value:this.searchVal}),this.searchVal="",this.show=!1,this.showSync=!1,t())},confirm(){t(),this.$emit("confirm",{value:this.searchVal})},blur(){t(),this.$emit("blur",{value:this.searchVal})},emitFocus(e){this.$emit("focus",e.detail)}}},[["render",function(e,t,y,_,g,b){const k=a(l("uni-icons"),j),C=p,w=m,S=f;return s(),i(C,{class:"uni-searchbar"},{default:c((()=>[n(C,{style:r({borderRadius:y.radius+"px",backgroundColor:y.bgColor}),class:"uni-searchbar__box",onClick:b.searchClick},{default:c((()=>[n(C,{class:"uni-searchbar__box-icon-search"},{default:c((()=>[o(e.$slots,"searchIcon",{},(()=>[n(k,{color:"#c0c4cc",size:"18",type:"search"})]),!0)])),_:3}),g.show||g.searchVal?(s(),i(w,{key:0,focus:g.showSync,disabled:y.readonly,placeholder:b.placeholderText,maxlength:y.maxlength,class:"uni-searchbar__box-search-input","confirm-type":"search",type:"text",modelValue:g.searchVal,"onUpdate:modelValue":t[0]||(t[0]=e=>g.searchVal=e),style:r({color:y.textColor}),onConfirm:b.confirm,onBlur:b.blur,onFocus:b.emitFocus},null,8,["focus","disabled","placeholder","maxlength","modelValue","style","onConfirm","onBlur","onFocus"])):(s(),i(S,{key:1,class:"uni-searchbar__text-placeholder"},{default:c((()=>[u(d(y.placeholder),1)])),_:1})),g.show&&("always"===y.clearButton||"auto"===y.clearButton&&""!==g.searchVal)&&!y.readonly?(s(),i(C,{key:2,class:"uni-searchbar__box-icon-clear",onClick:b.clear},{default:c((()=>[o(e.$slots,"clearIcon",{},(()=>[n(k,{color:"#c0c4cc",size:"20",type:"clear"})]),!0)])),_:3},8,["onClick"])):h("",!0)])),_:3},8,["style","onClick"]),"always"===y.cancelButton||g.show&&"auto"===y.cancelButton?(s(),i(S,{key:0,onClick:b.cancel,class:"uni-searchbar__cancel"},{default:c((()=>[u(d(b.cancelTextI18n),1)])),_:1},8,["onClick"])):h("",!0)])),_:3})}],["__scopeId","data-v-364b5b74"]]);const E=$({name:"UniSection",emits:["click"],props:{type:{type:String,default:""},title:{type:String,required:!0,default:""},titleFontSize:{type:String,default:"14px"},titleColor:{type:String,default:"#333"},subTitle:{type:String,default:""},subTitleFontSize:{type:String,default:"12px"},subTitleColor:{type:String,default:"#999"},padding:{type:[Boolean,String],default:!1}},computed:{_padding(){return"string"==typeof this.padding?this.padding:this.padding?"10px":""}},watch:{title(e){uni.report&&""!==e&&uni.report("title",e)}},methods:{onClick(){this.$emit("click")}}},[["render",function(e,t,a,l,m,_){const g=p,b=f;return s(),i(g,{class:"uni-section"},{default:c((()=>[n(g,{class:"uni-section-header",onClick:_.onClick},{default:c((()=>[a.type?(s(),i(g,{key:0,class:y(["uni-section-header__decoration",a.type])},null,8,["class"])):o(e.$slots,"decoration",{key:1},void 0,!0),n(g,{class:"uni-section-header__content"},{default:c((()=>[n(b,{style:r({"font-size":a.titleFontSize,color:a.titleColor}),class:y(["uni-section__content-title",{distraction:!a.subTitle}])},{default:c((()=>[u(d(a.title),1)])),_:1},8,["style","class"]),a.subTitle?(s(),i(b,{key:0,style:r({"font-size":a.subTitleFontSize,color:a.subTitleColor}),class:"uni-section-header__content-sub"},{default:c((()=>[u(d(a.subTitle),1)])),_:1},8,["style"])):h("",!0)])),_:1}),n(g,{class:"uni-section-header__slot-right"},{default:c((()=>[o(e.$slots,"right",{},void 0,!0)])),_:3})])),_:3},8,["onClick"]),n(g,{class:"uni-section-content",style:r({padding:_._padding})},{default:c((()=>[o(e.$slots,"default",{},void 0,!0)])),_:3},8,["style"])])),_:3})}],["__scopeId","data-v-62a0b6ae"]]),R=[{id:-1,name:"每日推荐",iconUrl:"http://p1.music.126.net/4DpSgAVpJny4Ewf-Xw_WQQ==/109951163986641971.jpg",url:"/pages/acquiesce/acquiesce"},{id:-6,name:"私人FM",iconUrl:"http://p1.music.126.net/Shi7cRT1bDhwpVDM7AOFXg==/109951165265330616.jpg",url:"/pages/personalfm/personalfm"},{id:-2,name:"歌单",iconUrl:"http://p1.music.126.net/uG5p6CnwAHrLqOkaSeRlnA==/109951163986649164.jpg",url:""},{id:-3,name:"排行榜",iconUrl:"http://p1.music.126.net/SDFC6A3X2wzUCavYyeGIOg==/109951163986649670.jpg",url:"/pages/recommended/recommended"},{id:1025001,name:"有声书",iconUrl:"http://p1.music.126.net/Kb4oK0m_ocs3FR3lo-r9yg==/109951167319110429.jpg",url:""},{id:13e3,name:"数字专辑",iconUrl:"http://p1.music.126.net/nRWhsf3P7r7eqHz-v61VBg==/109951166989045593.jpg",url:""},{id:11e3,name:"直播",iconUrl:"http://p1.music.126.net/2JvVZZjcjyCE72fGMsC1hg==/109951166989043011.jpg",url:""},{id:1025e3,name:"关注新歌",iconUrl:"http://p1.music.126.net/BAOWsqZmmxL8JIH-wejMmQ==/109951167294312390.jpg",url:""},{id:1027e3,name:"收藏家",iconUrl:"http://p1.music.126.net/gk99UFRasebERf38t6A1kA==/109951168168319514.jpg",url:""}],D=$({__name:"index",setup(e){_("curCookie");const t=g([]),r=g([]),o=g([]),h=g([]),m=g(null);b().then((e=>{t.value=e.banners})),k().then((e=>{r.value=e.result})),C().then((e=>{o.value=e.list})),w(12).then((e=>{h.value=f(e.result)}));const f=e=>{const t=[];for(let a=0;a<e.length/3;a++)t.push(e.slice(3*a,3*(a+1)));return t},y=e=>{B("/pages/acquiesce/acquiesce?id="+e)};return(e,f)=>{const _=a(l("uni-icons"),j),g=a(l("uni-search-bar"),A),b=p,k=U,C=T,w=V,$=a(l("uni-section"),E);return s(),i(b,{class:"content"},{default:c((()=>[n(b,{class:"header"},{default:c((()=>[n(_,{class:"bars",type:"bars",size:"24",onClick:f[0]||(f[0]=()=>{m.value.showDrawer()})}),n(b,{class:"search",onClick:f[1]||(f[1]=e=>S(B)("/pages/search/search"))},{default:c((()=>[n(g,{placeholder:"搜索",bgColor:"#EEEEEE",readonly:""})])),_:1})])),_:1}),n(b,{class:"main"},{default:c((()=>[n(b,{class:"swiper-wrap"},{default:c((()=>[n(w,{class:"swiper","indicator-dots":"","indicator-color":"rgba(255, 255, 255, .4)","indicator-active-color":"#ffffff",autoplay:"",circular:""},{default:c((()=>[(s(!0),x(F,null,v(t.value,(e=>(s(),i(C,{key:e.targetId},{default:c((()=>[n(k,{src:e.imageUrl,mode:"widthFix"},null,8,["src"])])),_:2},1024)))),128))])),_:1})])),_:1}),n(w,{class:"icon-swiper","display-multiple-items":"5"},{default:c((()=>[(s(!0),x(F,null,v(S(R),(e=>(s(),i(C,{key:e.id},{default:c((()=>[n(k,{src:e.iconUrl,mode:"widthFix",onClick:t=>S(B)(e.url)},null,8,["src","onClick"]),n(b,{class:"icon-name"},{default:c((()=>[u(d(e.name),1)])),_:2},1024)])),_:2},1024)))),128))])),_:1}),n($,{type:"line",title:"推荐歌单"},{default:c((()=>[n(b,{class:"playlist"},{default:c((()=>[(s(!0),x(F,null,v(r.value,(e=>(s(),i(b,{class:"playlist-item",key:e.id,onClick:t=>y(e.id)},{default:c((()=>[n(k,{src:e.picUrl,mode:"widthFix"},null,8,["src"]),n(b,{class:"playlist-item-name"},{default:c((()=>[u(d(e.name),1)])),_:2},1024)])),_:2},1032,["onClick"])))),128))])),_:1})])),_:1}),n($,{type:"line",title:"新歌新碟"},{default:c((()=>[n(b,{class:"newsong"},{default:c((()=>[(s(!0),x(F,null,v(h.value,(e=>(s(),i(b,{class:"musiclist"},{default:c((()=>[(s(!0),x(F,null,v(e,(e=>(s(),i(b,{class:"musiclist-item",key:e.id,onClick:f[2]||(f[2]=e=>S(B)("/pages/musicPlay/musicPlay"))},{default:c((()=>[n(k,{src:e.picUrl,mode:"widthFix"},null,8,["src"]),n(b,{class:"musiclist-item-name"},{default:c((()=>[u(d(e.name),1)])),_:2},1024)])),_:2},1024)))),128))])),_:2},1024)))),256))])),_:1})])),_:1}),n($,{type:"line",title:"排行榜"},{default:c((()=>[n(b,{class:"playlist"},{default:c((()=>[(s(!0),x(F,null,v(o.value,(e=>(s(),i(b,{class:"playlist-item",key:e.id,onClick:t=>y(e.id)},{default:c((()=>[n(k,{src:e.coverImgUrl,mode:"widthFix"},null,8,["src"]),n(b,{class:"playlist-item-name"},{default:c((()=>[u(d(e.name),1)])),_:2},1024)])),_:2},1032,["onClick"])))),128))])),_:1})])),_:1})])),_:1}),n(z,{ref_key:"sidebar",ref:m},null,512)])),_:1})}}},[["__scopeId","data-v-d8b47188"]]);export{D as default};