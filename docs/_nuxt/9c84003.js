(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{196:function(t,o,n){var content=n(201);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(67).default)("74c12440",content,!0,{sourceMap:!1})},197:function(t,o,n){var content=n(203);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(67).default)("180c9231",content,!0,{sourceMap:!1})},198:function(t,o,n){"use strict";n.r(o);var e={name:"AppButton",props:{btnMsg:{type:String,default:"Кнопка"}}},r=(n(202),n(27)),component=Object(r.a)(e,(function(){var t=this.$createElement;return(this._self._c||t)("button",{staticClass:"btn"},[this._v(this._s(this.btnMsg))])}),[],!1,null,null,null);o.default=component.exports},199:function(t,o,n){"use strict";n.r(o);var e={name:"AppTitleH2",props:{msgTitleH2:{type:String,default:"Заголовок"}}},r=(n(200),n(27)),component=Object(r.a)(e,(function(){var t=this.$createElement;return(this._self._c||t)("h2",{staticClass:"title-2"},[this._v(this._s(this.msgTitleH2))])}),[],!1,null,null,null);o.default=component.exports},200:function(t,o,n){"use strict";n(196)},201:function(t,o,n){(o=n(66)(!1)).push([t.i,".title-2{font-weight:500;font-size:1.5rem}",""]),t.exports=o},202:function(t,o,n){"use strict";n(197)},203:function(t,o,n){(o=n(66)(!1)).push([t.i,".btn{color:#fff;border-radius:8px;background-color:#94d163}",""]),t.exports=o},206:function(t,o,n){var content=n(215);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(67).default)("5a3ce7b1",content,!0,{sourceMap:!1})},207:function(t,o,n){var content=n(220);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(67).default)("28f1127f",content,!0,{sourceMap:!1})},208:function(t,o,n){"use strict";n.r(o);var e={name:"PromotionActivation",components:{AppButton:n(198).default},props:{title:{type:String,default:"Заголовок"},description:{type:String,default:"Описание"},srcimg:{type:String,default:"Адресс картинки"}},data:function(){return{btnMsg:"Запустить"}}},r=(n(214),n(27)),component=Object(r.a)(e,(function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("div",{staticClass:"promotion-activation"},[n("div",{staticClass:"promotion-activation__img"},[n("img",{attrs:{src:t.srcimg,alt:"Корзина"}})]),t._v(" "),n("div",{staticClass:"promotion-activation__text"},[n("h3",{staticClass:"promotion-activation__title-3 title-3"},[t._v("\n      "+t._s(t.title)+"\n    ")]),t._v(" "),n("p",{staticClass:"promotion-activation__paragraph"},[t._v("\n      "+t._s(t.description)+"\n    ")])]),t._v(" "),n("div",{staticClass:"promotion-activation__right"},[n("NuxtLink",{attrs:{to:"/step1"}},[n("AppButton",{staticClass:"promotion-activation__btn",attrs:{"btn-msg":t.btnMsg}})],1)],1)])}),[],!1,null,null,null);o.default=component.exports;installComponents(component,{AppButton:n(198).default})},214:function(t,o,n){"use strict";n(206)},215:function(t,o,n){(o=n(66)(!1)).push([t.i,".promotion-activation{padding:24px;max-width:894px;display:grid;grid-template-columns:auto 1fr auto;border:2px solid #e4e7ea;border-radius:8px}.promotion-activation__img{max-width:54px;max-height:54px;margin-right:30px}.promotion-activation__text{max-width:450px}.promotion-activation__right{display:flex;justify-content:center;align-items:center}.promotion-activation__title-3{margin-bottom:12px}.promotion-activation__btn{padding:16px 62px;font-size:1.125rem}",""]),t.exports=o},216:function(t,o,n){t.exports=n.p+"img/basket.e06301c.svg"},217:function(t,o,n){t.exports=n.p+"img/person.e686287.svg"},218:function(t,o,n){t.exports=n.p+"img/phone.b5bbd92.svg"},219:function(t,o,n){"use strict";n(207)},220:function(t,o,n){(o=n(66)(!1)).push([t.i,".stock-master__title-2{margin-bottom:27px}.stock-master__promotion-activation:not(:last-of-type){margin-bottom:16px}",""]),t.exports=o},223:function(t,o,n){"use strict";n.r(o);var e=n(208),r=n(199),c={components:{PromotionActivation:e.default,AppTitleH2:r.default},data:function(){return{msgTitleH2:"Мастер акций",promotions:[{id:0,title:"Убедите своих клиентов сделать первый заказ",description:"Скидка или подарок на первую покупку по промокоду",srcimg:n(216)},{id:1,title:"Скидка на тип доставки",description:"Настройте скидку на самовывоз или доставку",srcimg:n(217)},{id:2,title:"Скидка от источника заказа",description:"Делайте скидку если клиент оформил заказ с приложения",srcimg:n(218)}]}}},l=(n(219),n(27)),component=Object(l.a)(c,(function(){var t=this.$createElement,o=this._self._c||t;return o("section",{staticClass:"stock-master"},[o("AppTitleH2",{staticClass:"stock-master__title-2",attrs:{"msg-title-h2":this.msgTitleH2}}),this._v(" "),this._l(this.promotions,(function(t){return o("PromotionActivation",{key:t.id,staticClass:"stock-master__promotion-activation",attrs:{title:t.title,description:t.description,srcimg:t.srcimg}})}))],2)}),[],!1,null,null,null);o.default=component.exports;installComponents(component,{AppTitleH2:n(199).default,PromotionActivation:n(208).default})}}]);