(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-product-list"],{"0bb7":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"uni-load-more",props:{status:{type:String,default:"more"},showIcon:{type:Boolean,default:!0},color:{type:String,default:"#777777"},contentText:{type:Object,default:function(){return{contentdown:"上拉显示更多",contentrefresh:"正在加载...",contentnomore:"没有更多数据了"}}}},data:function(){return{}}};e.default=i},3386:function(t,e,a){"use strict";a.r(e);var i=a("0bb7"),n=a.n(i);for(var o in i)"default"!==o&&function(t){a.d(e,t,(function(){return i[t]}))}(o);e["default"]=n.a},"389a":function(t,e,a){var i=a("b76e");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("8f3e22cc",i,!0,{sourceMap:!1,shadowMode:!1})},"3f3b":function(t,e,a){"use strict";a.r(e);var i=a("9a7c"),n=a("3386");for(var o in n)"default"!==o&&function(t){a.d(e,t,(function(){return n[t]}))}(o);a("fcb2");var r,s=a("f0c5"),l=Object(s["a"])(n["default"],i["b"],i["c"],!1,null,"788e84f3",null,!1,i["a"],r);e["default"]=l.exports},"44bf":function(t,e,a){"use strict";var i=a("ef98"),n=a.n(i);n.a},"4a47":function(t,e,a){"use strict";var i=a("4ea4");a("99af"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("96cf");var n=i(a("1da1")),o=i(a("3f3b")),r={components:{uniLoadMore:o.default},data:function(){return{cateMaskState:0,headerPosition:"fixed",headerTop:"0px",loadingType:"more",filterIndex:0,cat_id:0,priceOrder:0,cateList:[],goodsList:[],kw:"",options:{},page:1}},mounted:function(){this.headerTop=document.getElementsByTagName("uni-page-head")[0].offsetHeight+"px"},onLoad:function(t){this.headerTop=document.getElementsByTagName("uni-page-head")[0].offsetHeight+"px",this.cat_id=t.cat_id,this.kw=t.kw||"",this.options=t,this.loadData(),this.wxH5Share()},onPageScroll:function(t){t.scrollTop>=0?this.headerPosition="fixed":this.headerPosition="absolute",this.page=1},onPullDownRefresh:function(){this.page=1,this.loadData("refresh")},onReachBottom:function(){this.page++,this.loadData()},methods:{loadData:function(){var t=arguments,e=this;return(0,n.default)(regeneratorRuntime.mark((function a(){var i,n,o,r,s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(i=t.length>0&&void 0!==t[0]?t[0]:"add",n=t.length>1?t[1]:void 0,"add"!==i){a.next=8;break}if("nomore"!==e.loadingType){a.next=5;break}return a.abrupt("return");case 5:e.loadingType="loading",a.next=9;break;case 8:e.loadingType="more";case 9:if(o={cat_id:e.cat_id||0,sort:e.filterIndex,priceOrder:e.priceOrder,kw:e.kw,page:e.page},!e.$tools.has_addon("xshopgroupon")||1!=e.options.groupon){a.next=17;break}return o.groupon=1,a.next=14,e.$http.get("groupon.product.list",o);case 14:r=a.sent,a.next=20;break;case 17:return a.next=19,e.$http.get("product.list",o);case 19:r=a.sent;case 20:e.page+=1,s=r.data.data,"refresh"===i&&(e.goodsList=[]),e.goodsList=e.goodsList.concat(s),e.loadingType=r.data.current_page>=r.data.last_page?"nomore":"more","refresh"===i&&(1==n?uni.hideLoading():uni.stopPullDownRefresh());case 26:case"end":return a.stop()}}),a)})))()},tabClick:function(t){this.page=1,this.filterIndex===t&&2!==t||(this.filterIndex=t,this.priceOrder=2===t?1===this.priceOrder?2:1:0,uni.pageScrollTo({duration:300,scrollTop:0}),this.loadData("refresh",1),uni.showLoading({title:"正在加载"}))},toggleCateMask:function(t){var e=this,a="show"===t?10:300,i="show"===t?1:0;this.cateMaskState=2,setTimeout((function(){e.cateMaskState=i}),a)},changeCate:function(t){this.cat_id=t.id,this.toggleCateMask(),uni.pageScrollTo({duration:300,scrollTop:0}),this.loadData("refresh",1),uni.showLoading({title:"正在加载"})},navToDetailPage:function(t){var e=t.id;uni.navigateTo({url:"/pages/product/product?id=".concat(e)})},stopPrevent:function(){}}};e.default=r},"5a82":function(t,e,a){"use strict";a.r(e);var i=a("7e8c"),n=a("b448");for(var o in n)"default"!==o&&function(t){a.d(e,t,(function(){return n[t]}))}(o);a("44bf");var r,s=a("f0c5"),l=Object(s["a"])(n["default"],i["b"],i["c"],!1,null,"36454896",null,!1,i["a"],r);e["default"]=l.exports},"7e8c":function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return i}));var i={uniLoadMore:a("3f3b").default},n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"content"},[a("v-uni-view",{staticClass:"navbar",style:{position:t.headerPosition,top:t.headerTop}},[a("v-uni-view",{staticClass:"nav-item",class:{current:0===t.filterIndex},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.tabClick(0)}}},[t._v("综合排序")]),a("v-uni-view",{staticClass:"nav-item",class:{current:1===t.filterIndex},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.tabClick(1)}}},[t._v("销量优先")]),a("v-uni-view",{staticClass:"nav-item",class:{current:2===t.filterIndex},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.tabClick(2)}}},[a("v-uni-text",[t._v("价格")]),a("v-uni-view",{staticClass:"p-box"},[a("v-uni-text",{staticClass:"iconfont iconshang1",class:{active:1===t.priceOrder&&2===t.filterIndex}}),a("v-uni-text",{staticClass:"iconfont iconshang1 xia",class:{active:2===t.priceOrder&&2===t.filterIndex}})],1)],1)],1),a("v-uni-view",{staticClass:"goods-list"},t._l(t.goodsList,(function(e,i){return a("v-uni-view",{key:i,staticClass:"goods-item",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.navToDetailPage(e)}}},[a("v-uni-view",{staticClass:"image-wrapper"},[a("v-uni-image",{attrs:{src:e.image[0],mode:"aspectFill"}})],1),a("v-uni-text",{staticClass:"title clamp"},[t._v(t._s(e.title))]),a("v-uni-view",{staticClass:"price-box"},[a("v-uni-text",{staticClass:"price"},[t._v(t._s(e.price))]),a("v-uni-text",[t._v("已售 "+t._s(e.sold_count))])],1)],1)})),1),a("uni-load-more",{attrs:{status:t.loadingType}}),a("v-uni-view",{staticClass:"cate-mask",class:0===t.cateMaskState?"none":1===t.cateMaskState?"show":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toggleCateMask.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"cate-content",on:{click:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.stopPrevent.apply(void 0,arguments)},touchmove:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.stopPrevent.apply(void 0,arguments)}}},[a("v-uni-scroll-view",{staticClass:"cate-list",attrs:{"scroll-y":!0}},t._l(t.cateList,(function(e){return a("v-uni-view",{key:e.id},[a("v-uni-view",{staticClass:"cate-item b-b two"},[t._v(t._s(e.name))]),t._l(e.child,(function(e){return a("v-uni-view",{key:e.id,staticClass:"cate-item b-b",class:{active:e.id==t.cat_id},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.changeCate(e)}}},[t._v(t._s(e.name))])}))],2)})),1)],1)],1)],1)},o=[]},"9a7c":function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"uni-load-more"},[a("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:"loading"===t.status&&t.showIcon,expression:"status === 'loading' && showIcon"}],staticClass:"uni-load-more__img"},[a("v-uni-view",{staticClass:"load1"},[a("v-uni-view",{style:{background:t.color}}),a("v-uni-view",{style:{background:t.color}}),a("v-uni-view",{style:{background:t.color}}),a("v-uni-view",{style:{background:t.color}})],1),a("v-uni-view",{staticClass:"load2"},[a("v-uni-view",{style:{background:t.color}}),a("v-uni-view",{style:{background:t.color}}),a("v-uni-view",{style:{background:t.color}}),a("v-uni-view",{style:{background:t.color}})],1),a("v-uni-view",{staticClass:"load3"},[a("v-uni-view",{style:{background:t.color}}),a("v-uni-view",{style:{background:t.color}}),a("v-uni-view",{style:{background:t.color}}),a("v-uni-view",{style:{background:t.color}})],1)],1),a("v-uni-text",{staticClass:"uni-load-more__text",style:{color:t.color}},[t._v(t._s("more"===t.status?t.contentText.contentdown:"loading"===t.status?t.contentText.contentrefresh:t.contentText.contentnomore))])],1)},o=[]},b448:function(t,e,a){"use strict";a.r(e);var i=a("4a47"),n=a.n(i);for(var o in i)"default"!==o&&function(t){a.d(e,t,(function(){return i[t]}))}(o);e["default"]=n.a},b76e:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,".uni-load-more[data-v-788e84f3]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;height:%?80?%;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.uni-load-more__text[data-v-788e84f3]{font-size:%?28?%;color:#999}.uni-load-more__img[data-v-788e84f3]{height:24px;width:24px;margin-right:10px}.uni-load-more__img>uni-view[data-v-788e84f3]{position:absolute}.uni-load-more__img>uni-view uni-view[data-v-788e84f3]{width:6px;height:2px;border-top-left-radius:1px;border-bottom-left-radius:1px;background:#999;position:absolute;opacity:.2;-webkit-transform-origin:50%;transform-origin:50%;-webkit-animation:load-data-v-788e84f3 1.56s ease infinite;animation:load-data-v-788e84f3 1.56s ease infinite}.uni-load-more__img>uni-view uni-view[data-v-788e84f3]:nth-child(1){-webkit-transform:rotate(90deg);transform:rotate(90deg);top:2px;left:9px}.uni-load-more__img>uni-view uni-view[data-v-788e84f3]:nth-child(2){-webkit-transform:rotate(180deg);transform:rotate(180deg);top:11px;right:0}.uni-load-more__img>uni-view uni-view[data-v-788e84f3]:nth-child(3){-webkit-transform:rotate(270deg);transform:rotate(270deg);bottom:2px;left:9px}.uni-load-more__img>uni-view uni-view[data-v-788e84f3]:nth-child(4){top:11px;left:0}.load1[data-v-788e84f3],\n.load2[data-v-788e84f3],\n.load3[data-v-788e84f3]{height:24px;width:24px}.load2[data-v-788e84f3]{-webkit-transform:rotate(30deg);transform:rotate(30deg)}.load3[data-v-788e84f3]{-webkit-transform:rotate(60deg);transform:rotate(60deg)}.load1 uni-view[data-v-788e84f3]:nth-child(1){-webkit-animation-delay:0s;animation-delay:0s}.load2 uni-view[data-v-788e84f3]:nth-child(1){-webkit-animation-delay:.13s;animation-delay:.13s}.load3 uni-view[data-v-788e84f3]:nth-child(1){-webkit-animation-delay:.26s;animation-delay:.26s}.load1 uni-view[data-v-788e84f3]:nth-child(2){-webkit-animation-delay:.39s;animation-delay:.39s}.load2 uni-view[data-v-788e84f3]:nth-child(2){-webkit-animation-delay:.52s;animation-delay:.52s}.load3 uni-view[data-v-788e84f3]:nth-child(2){-webkit-animation-delay:.65s;animation-delay:.65s}.load1 uni-view[data-v-788e84f3]:nth-child(3){-webkit-animation-delay:.78s;animation-delay:.78s}.load2 uni-view[data-v-788e84f3]:nth-child(3){-webkit-animation-delay:.91s;animation-delay:.91s}.load3 uni-view[data-v-788e84f3]:nth-child(3){-webkit-animation-delay:1.04s;animation-delay:1.04s}.load1 uni-view[data-v-788e84f3]:nth-child(4){-webkit-animation-delay:1.17s;animation-delay:1.17s}.load2 uni-view[data-v-788e84f3]:nth-child(4){-webkit-animation-delay:1.3s;animation-delay:1.3s}.load3 uni-view[data-v-788e84f3]:nth-child(4){-webkit-animation-delay:1.43s;animation-delay:1.43s}@-webkit-keyframes load-data-v-788e84f3{0%{opacity:1}100%{opacity:.2}}",""]),t.exports=e},ef98:function(t,e,a){var i=a("f33d");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("548998d4",i,!0,{sourceMap:!1,shadowMode:!1})},f33d:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */uni-page-body[data-v-36454896], .content[data-v-36454896]{background:#f8f8f8}.content[data-v-36454896]{padding-top:%?96?%}.navbar[data-v-36454896]{position:fixed;left:0;top:var(--window-top);display:-webkit-box;display:-webkit-flex;display:flex;width:100%;height:%?80?%;background:#fff;box-shadow:0 %?2?% %?10?% rgba(0,0,0,.06);z-index:10}.navbar .nav-item[data-v-36454896]{-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:100%;font-size:%?30?%;color:#303133;position:relative}.navbar .nav-item.current[data-v-36454896]{color:#fa436a}.navbar .nav-item.current[data-v-36454896]:after{content:"";position:absolute;left:50%;bottom:0;-webkit-transform:translateX(-50%);transform:translateX(-50%);width:%?120?%;height:0;border-bottom:%?4?% solid #fa436a}.navbar .p-box[data-v-36454896]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.navbar .p-box .iconfont[data-v-36454896]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;width:%?30?%;height:%?14?%;line-height:1;margin-left:%?4?%;font-size:%?20?%;color:#888;margin:%?2?% 0}.navbar .p-box .iconfont.active[data-v-36454896]{color:#fa436a}.navbar .p-box .xia[data-v-36454896]{-webkit-transform:scaleY(-1);transform:scaleY(-1)}.navbar .cate-item[data-v-36454896]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:100%;width:%?80?%;position:relative;font-size:%?44?%}.navbar .cate-item[data-v-36454896]:after{content:"";position:absolute;left:0;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);border-left:1px solid #ddd;width:0;height:%?36?%}\n/* 分类 */.cate-mask[data-v-36454896]{position:fixed;left:0;top:var(--window-top);bottom:0;width:100%;background:transparent;z-index:95;-webkit-transition:.3s;transition:.3s}.cate-mask .cate-content[data-v-36454896]{width:%?630?%;height:100%;background:#fff;float:right;-webkit-transform:translateX(100%);transform:translateX(100%);-webkit-transition:.3s;transition:.3s}.cate-mask.none[data-v-36454896]{display:none}.cate-mask.show[data-v-36454896]{background:rgba(0,0,0,.4)}.cate-mask.show .cate-content[data-v-36454896]{-webkit-transform:translateX(0);transform:translateX(0)}.cate-list[data-v-36454896]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;height:100%}.cate-list .cate-item[data-v-36454896]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:%?90?%;padding-left:%?30?%;font-size:%?28?%;color:#555;position:relative}.cate-list .two[data-v-36454896]{height:%?64?%;color:#303133;font-size:%?30?%;background:#f8f8f8}.cate-list .active[data-v-36454896]{color:#fa436a}\n/* 商品列表 */.goods-list[data-v-36454896]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;padding:0 %?30?%;background:#fff}.goods-list .goods-item[data-v-36454896]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;width:48%;padding-bottom:%?40?%}.goods-list .goods-item[data-v-36454896]:nth-child(2n+1){margin-right:4%}.goods-list .image-wrapper[data-v-36454896]{width:100%;height:%?330?%;border-radius:3px;overflow:hidden}.goods-list .image-wrapper uni-image[data-v-36454896]{width:100%;height:100%;opacity:1}.goods-list .title[data-v-36454896]{font-size:%?32?%;color:#303133;line-height:%?80?%}.goods-list .price-box[data-v-36454896]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;padding-right:%?10?%;font-size:%?24?%;color:#909399}.goods-list .price[data-v-36454896]{font-size:%?32?%;color:#fa436a;line-height:1}.goods-list .price[data-v-36454896]:before{content:"￥";font-size:%?26?%}body.?%PAGE?%[data-v-36454896]{background:#f8f8f8}',""]),t.exports=e},fcb2:function(t,e,a){"use strict";var i=a("389a"),n=a.n(i);n.a}}]);