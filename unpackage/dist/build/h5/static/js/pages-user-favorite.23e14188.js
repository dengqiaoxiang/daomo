(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-favorite"],{"24d5":function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */.list[data-v-71a46054]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;padding:0 %?10?%}.list .item[data-v-71a46054]{display:-webkit-box;display:-webkit-flex;display:flex;overflow:hidden;margin:%?10?% 0}.list .item .image-box[data-v-71a46054]{display:-webkit-box;display:-webkit-flex;display:flex;height:%?200?%;width:%?200?%}.list .item .image-box .image[data-v-71a46054]{width:100%;height:100%}.list .item .text[data-v-71a46054]{font-size:%?28?%;padding:10px;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-flex:1;-webkit-flex:1;flex:1}.list .item .text .title[data-v-71a46054]{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}.list .item .text .price[data-v-71a46054]{color:red;font-size:%?28?%;margin:%?10?% 0}',""]),t.exports=i},"31dc":function(t,i,e){var n=e("24d5");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("4f06").default;a("0c6429b7",n,!0,{sourceMap:!1,shadowMode:!1})},4648:function(t,i,e){"use strict";e.r(i);var n=e("d9d8"),a=e("a1dc");for(var o in a)"default"!==o&&function(t){e.d(i,t,(function(){return a[t]}))}(o);e("9a39");var l,s=e("f0c5"),c=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"71a46054",null,!1,n["a"],l);i["default"]=c.exports},"492c":function(t,i,e){"use strict";var n=e("4ea4");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a=n(e("2d9e")),o={components:{empty:a.default},data:function(){return{list:[]}},onLoad:function(){this.getList()},methods:{getList:function(){var t=this;return this.$http.get("user.favorite").then((function(i){t.list=i.data})).catch((function(t){}))},toDetail:function(t){uni.navigateTo({url:"/pages/product/product?id="+t.product.id})}},onPullDownRefresh:function(){this.getList().then((function(t){uni.stopPullDownRefresh()})).catch((function(t){uni.stopPullDownRefresh()}))}};i.default=o},"9a39":function(t,i,e){"use strict";var n=e("31dc"),a=e.n(n);a.a},a1dc:function(t,i,e){"use strict";e.r(i);var n=e("492c"),a=e.n(n);for(var o in n)"default"!==o&&function(t){e.d(i,t,(function(){return n[t]}))}(o);i["default"]=a.a},d9d8:function(t,i,e){"use strict";var n;e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return o})),e.d(i,"a",(function(){return n}));var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"content"},[e("v-uni-view",{staticClass:"list"},[t.list&&0==t.list.length?e("empty"):t._e(),t._l(t.list,(function(i,n){return e("v-uni-view",{key:n,staticClass:"item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toDetail(i)}}},[e("v-uni-view",{staticClass:"image-box"},[e("v-uni-image",{staticClass:"image",attrs:{src:i.product.image[0]}})],1),e("v-uni-view",{staticClass:"text"},[e("v-uni-text",{staticClass:"title"},[t._v(t._s(i.product.title))]),e("v-uni-text",{staticClass:"price"},[t._v("￥"+t._s(i.product.price))])],1)],1)}))],2)],1)},o=[]}}]);