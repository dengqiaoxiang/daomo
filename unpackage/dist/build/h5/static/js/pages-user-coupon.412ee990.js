(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-coupon"],{"0461":function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("uni-popup",{ref:"$popup",staticClass:"popup-content",attrs:{type:"bottom"}},[n("v-uni-view",{},[2==t.couponType?n("v-uni-view",{staticClass:"content"},[n("v-uni-text",{staticClass:"h3"},[t._v("以下商品可用")]),t._l(t.detail,(function(e,i){return n("v-uni-view",{key:i,staticClass:"item"},[n("v-uni-view",{staticClass:"product",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.goProduct(e)}}},[n("v-uni-view",{staticClass:"image"},[e.image&&e.image[0]?n("v-uni-image",{attrs:{src:e.image&&e.image[0],mode:"aspectFill"}}):t._e()],1),n("v-uni-view",{staticClass:"desc"},[n("v-uni-text",{staticClass:"title"},[t._v(t._s(e.title))]),n("v-uni-text",{staticClass:"price"},[t._v("￥"+t._s(e.price))])],1)],1)],1)}))],2):t._e(),1==t.couponType?n("v-uni-view",{staticClass:"category-content"},[n("v-uni-text",{staticClass:"h3"},[t._v("以下分类可用")]),t._l(t.detail,(function(e,i){return n("v-uni-view",{key:i,staticClass:"item",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.goCategory(e)}}},[n("v-uni-text",[t._v(t._s(e.name))])],1)}))],2):t._e()],1)],1)},o=[]},"125b":function(t,e,n){"use strict";var i=n("4ea4");n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("5530")),o=i(n("9735")),c=n("2f62"),u={components:{uniPopup:o.default},computed:(0,a.default)({},(0,c.mapState)({user:function(t){return t.user.userinfo}})),data:function(){return{}},props:{couponType:{type:String|Number,default:0},detail:{type:Array}},methods:{goProduct:function(t){uni.navigateTo({url:"/pages/product/product?id="+t.id})},goCategory:function(t){uni.navigateTo({url:"/pages/product/list?cat_id="+t.id})},open:function(){this.$refs.$popup.open()},close:function(){this.$refs.$popup.close()}}};e.default=u},"15ec":function(t,e,n){var i=n("7ea2");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("5a2ca016",i,!0,{sourceMap:!1,shadowMode:!1})},1924:function(t,e,n){var i=n("d4b6");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("50548d6a",i,!0,{sourceMap:!1,shadowMode:!1})},2171:function(t,e,n){"use strict";n.r(e);var i=n("0461"),a=n("803b");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("e169");var c,u=n("f0c5"),r=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,"6db60b66",null,!1,i["a"],c);e["default"]=r.exports},2411:function(t,e,n){"use strict";n.r(e);var i=n("68ac"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},"2c0b":function(t,e,n){"use strict";n.r(e);var i=n("2d18"),a=n("fb8e");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("f08c");var c,u=n("f0c5"),r=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,"23a2abec",null,!1,i["a"],c);e["default"]=r.exports},"2d18":function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"coupon-content show"},[t.list&&0==t.list.length?n("empty"):t._e(),n("v-uni-view",{staticClass:"mask-content"},t._l(t.list,(function(e,i){return n("v-uni-view",{key:i,staticClass:"coupon-item",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.showDetail(e)}}},[n("v-uni-view",{staticClass:"con"},[n("v-uni-view",{staticClass:"left"},[n("v-uni-text",{staticClass:"title"},[t._v(t._s(e.coupon&&e.coupon.name)+" x "+t._s(e.usable_count))]),n("v-uni-text",{staticClass:"time"},[t._v("有效期至"+t._s(e.coupon&&e.coupon.use_end_time_text))])],1),n("v-uni-view",{staticClass:"right"},[n("v-uni-text",{staticClass:"price"},[t._v(t._s(e.coupon&&e.coupon.money))]),n("v-uni-text",[t._v("满"+t._s(e.coupon&&e.coupon.order_min_amount)+"可用")])],1),n("v-uni-view",{staticClass:"circle l"}),n("v-uni-view",{staticClass:"circle r"})],1),n("v-uni-view",{staticClass:"op"},[n("v-uni-text",{staticClass:"tips"},[t._v(t._s(e.coupon&&e.coupon.desc))])],1)],1)})),1),n("coupon-detail",{ref:"$popup",attrs:{"coupon-type":t.couponType,detail:t.detail}})],1)},o=[]},4272:function(t,e,n){"use strict";var i=n("4ea4");n("d3b7"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("2171")),o=i(n("2d9e")),c={components:{couponDetail:a.default,empty:o.default},data:function(){return{couponVisible:0,list:[],detail:[],currentCoupon:{},couponType:0}},mounted:function(){this.getCoupon()},methods:{getCoupon:function(){var t=this;return new Promise((function(e,n){uni.showLoading(),t.$http.post("coupon").then((function(n){uni.hideLoading(),t.list=n.data,e(n)})).catch((function(t){uni.hideLoading(),n(t)}))}))},showDetail:function(t){var e=this;if(0!=t.coupon.type){var n={coupon_id:t.coupon.id};this.currentCoupon=t,this.couponType=t.coupon.type,uni.showLoading(),this.$http.post("coupon.detail",n).then((function(t){uni.hideLoading(),e.detail=t.data,e.$refs.$popup.open()})).catch((function(t){uni.hideLoading()}))}}},onPullDownRefresh:function(){this.getCoupon().then((function(t){uni.stopPullDownRefresh()})).catch((function(t){uni.stopPullDownRefresh()}))}};e.default=c},"68ac":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"UniPopup",props:{animation:{type:Boolean,default:!0},type:{type:String,default:"center"},custom:{type:Boolean,default:!1},maskClick:{type:Boolean,default:!0}},data:function(){return{ani:"",show:!1}},created:function(){},methods:{clear:function(){},open:function(){var t=this;this.show=!0,this.$nextTick((function(){setTimeout((function(){t.ani="uni-"+t.type}),30)}))},close:function(t){var e=this;!this.maskClick&&t||(this.ani="",this.$nextTick((function(){setTimeout((function(){e.show=!1}),300)})))}}};e.default=i},"7ea2":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */.h3[data-v-6db60b66]{color:#444;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;border-bottom:#eee;font-size:%?32?%;margin:%?20?%}.popup-content[data-v-6db60b66]{font-size:%?26?%}.popup-content .content[data-v-6db60b66]{max-height:60vh;overflow-y:scroll}.popup-content .item[data-v-6db60b66]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.popup-content .product[data-v-6db60b66]{display:-webkit-box;display:-webkit-flex;display:flex;height:%?140?%;margin:%?10?% 0}.popup-content .product .image[data-v-6db60b66]{width:100%;max-width:%?140?%;height:%?140?%;border-radius:3px;overflow:hidden}.popup-content .product .image uni-image[data-v-6db60b66]{width:100%;height:100%;opacity:1}.popup-content .product .desc[data-v-6db60b66]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-flex:1;-webkit-flex:1;flex:1;line-height:150%;text-align:left;padding:%?10?%;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.popup-content .product .desc .price[data-v-6db60b66]{color:#fa436a;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.popup-content .category-content[data-v-6db60b66]{max-height:40vh;overflow-y:scroll}.popup-content .category-content .item[data-v-6db60b66]{font-size:%?30?%;text-align:center;margin:%?20?% 0}',""]),t.exports=e},"803b":function(t,e,n){"use strict";n.r(e);var i=n("125b"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},"82f1":function(t,e,n){"use strict";var i=n("1924"),a=n.n(i);a.a},9621:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */uni-page-body[data-v-23a2abec]{background:#f3f3f3}\n/* 优惠券面板 */.coupon-content[data-v-23a2abec]{display:-webkit-box;display:-webkit-flex;display:flex}.coupon-content .mask-content[data-v-23a2abec]{width:100%;background:#f3f3f3;-webkit-transform:translateY(100%);transform:translateY(100%);-webkit-transition:.3s;transition:.3s}.coupon-content.none[data-v-23a2abec]{display:none}.coupon-content.show .mask-content[data-v-23a2abec]{-webkit-transform:translateY(0);transform:translateY(0)}\n/* 优惠券列表 */.coupon-item[data-v-23a2abec]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;margin:%?20?% %?24?%;background:#fff}.coupon-item .con[data-v-23a2abec]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:relative;height:%?120?%;padding:0 %?30?%}.coupon-item .con[data-v-23a2abec]:after{position:absolute;left:0;bottom:0;content:"";width:100%;height:0;border-bottom:1px dashed #f3f3f3;-webkit-transform:scaleY(50%);transform:scaleY(50%)}.coupon-item .left[data-v-23a2abec]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-flex:1;-webkit-flex:1;flex:1;overflow:hidden;height:%?100?%}.coupon-item .title[data-v-23a2abec]{font-size:%?32?%;color:#303133;margin-bottom:%?10?%}.coupon-item .time[data-v-23a2abec]{font-size:%?24?%;color:#909399}.coupon-item .right[data-v-23a2abec]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?26?%;color:#606266;height:%?100?%}.coupon-item .price[data-v-23a2abec]{font-size:%?44?%;color:#fa436a}.coupon-item .price[data-v-23a2abec]:before{content:"￥";font-size:%?34?%}.coupon-item .circle[data-v-23a2abec]{position:absolute;left:%?-6?%;bottom:%?-10?%;z-index:10;width:%?20?%;height:%?20?%;background:#f3f3f3;border-radius:100px}.coupon-item .circle.r[data-v-23a2abec]{left:auto;right:%?-6?%}.coupon-item .op[data-v-23a2abec]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;font-size:%?26?%;padding:%?10?% %?20?%}.coupon-item .op .tips[data-v-23a2abec]{font-size:%?24?%;color:#909399;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.coupon-item .op .op-btn[data-v-23a2abec]{border:%?2?% solid #fa436a;border-radius:%?10?%;padding:%?4?% %?20?%;background:#fa436a;color:#fff}body.?%PAGE?%[data-v-23a2abec]{background:#f3f3f3}',""]),t.exports=e},9735:function(t,e,n){"use strict";n.r(e);var i=n("cdda"),a=n("2411");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("82f1");var c,u=n("f0c5"),r=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,"4a8d8d10",null,!1,i["a"],c);e["default"]=r.exports},c6db:function(t,e,n){var i=n("9621");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("42a62c40",i,!0,{sourceMap:!1,shadowMode:!1})},cdda:function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.show?n("v-uni-view",{staticClass:"uni-popup"},[n("v-uni-view",{staticClass:"uni-popup__mask",class:[t.ani,t.animation?"ani":"",t.custom?"":"uni-custom"],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.close(!0)}}}),n("v-uni-view",{staticClass:"uni-popup__wrapper",class:[t.type,t.ani,t.animation?"ani":"",t.custom?"":"uni-custom"],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.close(!0)}}},[n("v-uni-view",{staticClass:"uni-popup__wrapper-box",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.clear.apply(void 0,arguments)}}},[t._t("default")],2)],1)],1):t._e()},o=[]},d4b6:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */.uni-popup[data-v-4a8d8d10]{position:fixed;top:50px;bottom:0;left:0;right:0;z-index:999;overflow:hidden}.uni-popup__mask[data-v-4a8d8d10]{position:absolute;top:0;bottom:0;left:0;right:0;z-index:998;background:rgba(0,0,0,.4);opacity:0}.uni-popup__mask.ani[data-v-4a8d8d10]{-webkit-transition:all .3s;transition:all .3s}.uni-popup__mask.uni-top[data-v-4a8d8d10], .uni-popup__mask.uni-bottom[data-v-4a8d8d10], .uni-popup__mask.uni-center[data-v-4a8d8d10]{opacity:1}.uni-popup__wrapper[data-v-4a8d8d10]{position:absolute;z-index:999;box-sizing:border-box}.uni-popup__wrapper.ani[data-v-4a8d8d10]{-webkit-transition:all .3s;transition:all .3s}.uni-popup__wrapper.top[data-v-4a8d8d10]{top:0;left:0;width:100%;-webkit-transform:translateY(-100%);transform:translateY(-100%)}.uni-popup__wrapper.bottom[data-v-4a8d8d10]{bottom:0;left:0;width:100%;-webkit-transform:translateY(100%);transform:translateY(100%)}.uni-popup__wrapper.center[data-v-4a8d8d10]{width:100%;height:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-transform:scale(1.2);transform:scale(1.2);opacity:0}.uni-popup__wrapper-box[data-v-4a8d8d10]{position:relative;box-sizing:border-box}.uni-popup__wrapper.uni-custom .uni-popup__wrapper-box[data-v-4a8d8d10]{padding:%?30?%;background:#fff}.uni-popup__wrapper.uni-custom.center .uni-popup__wrapper-box[data-v-4a8d8d10]{position:relative;max-width:80%;max-height:80%;overflow-y:scroll}.uni-popup__wrapper.uni-custom.top .uni-popup__wrapper-box[data-v-4a8d8d10], .uni-popup__wrapper.uni-custom.bottom .uni-popup__wrapper-box[data-v-4a8d8d10]{width:100%;max-height:500px;overflow-y:scroll}.uni-popup__wrapper.uni-top[data-v-4a8d8d10], .uni-popup__wrapper.uni-bottom[data-v-4a8d8d10]{-webkit-transform:translateY(0);transform:translateY(0)}.uni-popup__wrapper.uni-center[data-v-4a8d8d10]{-webkit-transform:scale(1);transform:scale(1);opacity:1}',""]),t.exports=e},e169:function(t,e,n){"use strict";var i=n("15ec"),a=n.n(i);a.a},f08c:function(t,e,n){"use strict";var i=n("c6db"),a=n.n(i);a.a},fb8e:function(t,e,n){"use strict";n.r(e);var i=n("4272"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a}}]);