(window.webpackJsonp=window.webpackJsonp||[]).push([[0,8,14,24],{277:function(t,o,e){"use strict";t.exports=function(t,o){return o||(o={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),o.hash&&(t+=o.hash),/["'() \t\n]/.test(t)||o.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},278:function(t,o,e){t.exports=e.p+"fonts/Montserrat-Bold.180ba33.woff"},279:function(t,o,e){t.exports=e.p+"fonts/Montserrat-Medium.d42dad2.woff"},280:function(t,o,e){t.exports=e.p+"fonts/Montserrat-Regular.3db65dc.woff"},281:function(t,o,e){t.exports=e.p+"fonts/Montserrat-SemiBold.1972135.woff"},321:function(t,o,e){var content=e(330);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(133).default)("6e091fe0",content,!0,{sourceMap:!1})},322:function(t,o,e){"use strict";e.r(o);var r={name:"ButtonOrder",props:{text:{type:String,required:!0},color:{type:String,default:"green"},href:{type:String,default:""}},computed:{rootClasses:function(){return{green:"green"===this.color,yellow:"yellow"===this.color}},textClasses:function(){return{white:"green"===this.color,black:"yellow"===this.color}},componentName:function(){return""!==this.href?"a":"button"}}},n=(e(329),e(46)),component=Object(n.a)(r,(function(){var t=this,o=t._self._c;return o(t.componentName,{tag:"component",staticClass:"button",class:t.rootClasses,attrs:{href:t.href}},[o("span",{staticClass:"button-text",class:t.textClasses},[t._v("\n    "+t._s(t.text)+"\n  ")])])}),[],!1,null,"e7b9c062",null);o.default=component.exports},329:function(t,o,e){"use strict";e(321)},330:function(t,o,e){var r=e(132),n=e(277),l=e(278),f=e(279),c=e(280),d=e(281),m=r(!1),h=n(l),v=n(f),_=n(c),x=n(d);m.push([t.i,'@font-face{font-family:"Montserrat-Bold";src:local("Montserrat-Bold"),url('+h+') format("woff");font-weight:700;font-style:normal;font-display:auto}@font-face{font-family:"Montserrat-Medium";src:local("Montserrat-Medium"),url('+v+') format("woff");font-weight:500;font-style:normal;font-display:auto}@font-face{font-family:"Montserrat-Regular";src:local("Montserrat-Regular"),url('+_+') format("woff");font-weight:400;font-style:normal;font-display:auto}@font-face{font-family:"Montserrat-SemiBold";src:local("Montserrat-SemiBold"),url('+x+') format("woff");font-weight:600;font-style:normal;font-display:auto}*[data-v-e7b9c062],*[data-v-e7b9c062]::before,*[data-v-e7b9c062]::after{box-sizing:inherit}html[data-v-e7b9c062]{width:100%;box-sizing:border-box;scroll-behavior:smooth}body[data-v-e7b9c062],h4[data-v-e7b9c062],p[data-v-e7b9c062]{margin:0}img[data-v-e7b9c062]{max-width:100%}#__layout[data-v-e7b9c062]{overflow:hidden}.button[data-v-e7b9c062]{border-radius:50px;padding:22px;border-style:none;cursor:pointer;text-decoration:none}.button[data-v-e7b9c062]:hover{opacity:70%}.button.green[data-v-e7b9c062]{background-color:#5cb85c}.button.yellow[data-v-e7b9c062]{background-color:#fbec45}.button-text[data-v-e7b9c062]{font-family:"Montserrat-SemiBold",sans-serif;font-size:18px}.button-text.white[data-v-e7b9c062]{color:#fff}.button-text.black[data-v-e7b9c062]{color:#000}',""]),t.exports=m},356:function(t,o,e){var content=e(394);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(133).default)("4f0fa60a",content,!0,{sourceMap:!1})},357:function(t,o,e){var content=e(396);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(133).default)("fdba481c",content,!0,{sourceMap:!1})},366:function(t,o,e){"use strict";e.r(o);e(37);var r=e(12),n=(e(63),e(27),e(192),e(322)),l=e(415),f=e(416),c={name:"TheForm",components:{ButtonOrder:n.default,SuccessfulBid:l.default,ErrorForm:f.default},data:function(){return{name:"",phone:"",validationName:"^[А-Яа-яЁё\\s]+$",errorName:!1,errorPhone:!1,disabledButton:!0,phoneMask:"+7 (###) ###-##-##",success:!1,errorForm:!1}},watch:{name:function(){null===this.name.match(this.validationName)?(this.errorName=!0,this.disabledButton=!0):this.errorName=!1,0===this.name.length&&(this.errorName=!1,this.disabledButton=!0)},phone:function(){this.phone.length<this.phoneMask.length?(this.errorPhone=!0,this.disabledButton=!0):(this.errorPhone=!1,this.disabledButton=!1),0===this.phone.length&&(this.errorPhone=!1,this.disabledButton=!0)}},methods:{getData:function(t){var o=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var r,n,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.name,n=t.phone,e.prev=1,e.next=4,o.$axios.post("/api/test",{name:r,phone:n});case 4:l=e.sent,console.log(l),o.success=!0,o.disabledButton=!0,e.next=14;break;case 10:e.prev=10,e.t0=e.catch(1),o.success=!1,o.errorForm=!0;case 14:case"end":return e.stop()}}),e,null,[[1,10]])})))()}}},d=(e(425),e(46)),component=Object(d.a)(c,(function(){var t=this,o=t._self._c;return o("form",{staticClass:"the-form",on:{submit:function(o){return o.preventDefault(),t.getData({name:t.name,phone:t.phone})}}},[o("span",{staticClass:"the-form__title"},[t._v("\n    ОСТАВЬТЕ ЗАЯВКУ И МЫ С ВАМИ СВЯЖЕМСЯ\n  ")]),t._v(" "),o("div",{staticClass:"the-form__inputs"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"the-form__input",attrs:{type:"text",placeholder:"Имя"},domProps:{value:t.name},on:{input:function(o){o.target.composing||(t.name=o.target.value)}}}),t._v(" "),t.errorName?o("span",{staticClass:"the-form__error"},[t._v("\n      Некорректно указаны данные. Укажите данные в формате *Иванов Иван*\n    ")]):t._e(),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"},{name:"mask",rawName:"v-mask",value:t.phoneMask,expression:"phoneMask"}],staticClass:"the-form__input",attrs:{type:"text",placeholder:"Телефон"},domProps:{value:t.phone},on:{input:function(o){o.target.composing||(t.phone=o.target.value)}}}),t._v(" "),t.errorPhone?o("span",{staticClass:"the-form__error"},[t._v("\n      Некорректно указаны данные. Укажите данные в формате *+7 (999) 999-99-99*\n    ")]):t._e()]),t._v(" "),o("div",{staticClass:"the-form__button-block"},[o("ButtonOrder",{staticClass:"the-form__button",attrs:{text:"ОСТАВИТЬ ЗАЯВКУ",color:"yellow",disabled:t.disabledButton}}),t._v(" "),o("span",{staticClass:"the-form__text"},[t._v("\n      Ваши данные не будут переданы третьим лицам\n    ")])],1),t._v(" "),t.success?o("SuccessfulBid"):t._e(),t._v(" "),t.errorForm?o("ErrorForm"):t._e()],1)}),[],!1,null,"3c5330f0",null);o.default=component.exports;installComponents(component,{ButtonOrder:e(322).default,SuccessfulBid:e(415).default,ErrorForm:e(416).default})},393:function(t,o,e){"use strict";e(356)},394:function(t,o,e){var r=e(132),n=e(277),l=e(278),f=e(279),c=e(280),d=e(281),m=r(!1),h=n(l),v=n(f),_=n(c),x=n(d);m.push([t.i,'@font-face{font-family:"Montserrat-Bold";src:local("Montserrat-Bold"),url('+h+') format("woff");font-weight:700;font-style:normal;font-display:auto}@font-face{font-family:"Montserrat-Medium";src:local("Montserrat-Medium"),url('+v+') format("woff");font-weight:500;font-style:normal;font-display:auto}@font-face{font-family:"Montserrat-Regular";src:local("Montserrat-Regular"),url('+_+') format("woff");font-weight:400;font-style:normal;font-display:auto}@font-face{font-family:"Montserrat-SemiBold";src:local("Montserrat-SemiBold"),url('+x+') format("woff");font-weight:600;font-style:normal;font-display:auto}*[data-v-86cda0a8],*[data-v-86cda0a8]::before,*[data-v-86cda0a8]::after{box-sizing:inherit}html[data-v-86cda0a8]{width:100%;box-sizing:border-box;scroll-behavior:smooth}body[data-v-86cda0a8],h4[data-v-86cda0a8],p[data-v-86cda0a8]{margin:0}img[data-v-86cda0a8]{max-width:100%}#__layout[data-v-86cda0a8]{overflow:hidden}.successful-bid[data-v-86cda0a8]{display:flex;flex-direction:column;align-items:center}.successful-bid__title[data-v-86cda0a8]{text-align:center;font-family:"Montserrat-SemiBold",sans-serif;font-size:16px;color:#5cb85c}',""]),t.exports=m},395:function(t,o,e){"use strict";e(357)},396:function(t,o,e){var r=e(132),n=e(277),l=e(278),f=e(279),c=e(280),d=e(281),m=r(!1),h=n(l),v=n(f),_=n(c),x=n(d);m.push([t.i,'@font-face{font-family:"Montserrat-Bold";src:local("Montserrat-Bold"),url('+h+') format("woff");font-weight:700;font-style:normal;font-display:auto}@font-face{font-family:"Montserrat-Medium";src:local("Montserrat-Medium"),url('+v+') format("woff");font-weight:500;font-style:normal;font-display:auto}@font-face{font-family:"Montserrat-Regular";src:local("Montserrat-Regular"),url('+_+') format("woff");font-weight:400;font-style:normal;font-display:auto}@font-face{font-family:"Montserrat-SemiBold";src:local("Montserrat-SemiBold"),url('+x+') format("woff");font-weight:600;font-style:normal;font-display:auto}*[data-v-01b9a1a9],*[data-v-01b9a1a9]::before,*[data-v-01b9a1a9]::after{box-sizing:inherit}html[data-v-01b9a1a9]{width:100%;box-sizing:border-box;scroll-behavior:smooth}body[data-v-01b9a1a9],h4[data-v-01b9a1a9],p[data-v-01b9a1a9]{margin:0}img[data-v-01b9a1a9]{max-width:100%}#__layout[data-v-01b9a1a9]{overflow:hidden}.error-form[data-v-01b9a1a9]{display:flex;flex-direction:column;align-items:center}.error-form__title[data-v-01b9a1a9]{text-align:center;font-family:"Montserrat-SemiBold",sans-serif;font-size:16px;color:#9c0b0b}',""]),t.exports=m},415:function(t,o,e){"use strict";e.r(o);e(393);var r=e(46),component=Object(r.a)({},(function(){this._self._c;return this._m(0)}),[function(){var t=this,o=t._self._c;return o("div",{staticClass:"successful-bid"},[o("span",{staticClass:"successful-bid__title"},[t._v("\n    Заявка отправлена успешно! "),o("br"),t._v("\n    Мы перезвоним Вам в ближайшее время!\n  ")])])}],!1,null,"86cda0a8",null);o.default=component.exports},416:function(t,o,e){"use strict";e.r(o);e(395);var r=e(46),component=Object(r.a)({},(function(){this._self._c;return this._m(0)}),[function(){var t=this._self._c;return t("div",{staticClass:"error-form"},[t("span",{staticClass:"error-form__title"},[this._v("\n    К сожалению, при отправке данных произошла ошибка.\n    Перезагрузите страницу и попробуйте снова.\n  ")])])}],!1,null,"01b9a1a9",null);o.default=component.exports},418:function(t,o,e){var content=e(426);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(133).default)("49427562",content,!0,{sourceMap:!1})},425:function(t,o,e){"use strict";e(418)},426:function(t,o,e){var r=e(132),n=e(277),l=e(278),f=e(279),c=e(280),d=e(281),m=r(!1),h=n(l),v=n(f),_=n(c),x=n(d);m.push([t.i,'@font-face{font-family:"Montserrat-Bold";src:local("Montserrat-Bold"),url('+h+') format("woff");font-weight:700;font-style:normal;font-display:auto}@font-face{font-family:"Montserrat-Medium";src:local("Montserrat-Medium"),url('+v+') format("woff");font-weight:500;font-style:normal;font-display:auto}@font-face{font-family:"Montserrat-Regular";src:local("Montserrat-Regular"),url('+_+') format("woff");font-weight:400;font-style:normal;font-display:auto}@font-face{font-family:"Montserrat-SemiBold";src:local("Montserrat-SemiBold"),url('+x+') format("woff");font-weight:600;font-style:normal;font-display:auto}*[data-v-3c5330f0],*[data-v-3c5330f0]::before,*[data-v-3c5330f0]::after{box-sizing:inherit}html[data-v-3c5330f0]{width:100%;box-sizing:border-box;scroll-behavior:smooth}body[data-v-3c5330f0],h4[data-v-3c5330f0],p[data-v-3c5330f0]{margin:0}img[data-v-3c5330f0]{max-width:100%}#__layout[data-v-3c5330f0]{overflow:hidden}.the-form[data-v-3c5330f0]{background:#fff;width:100%;display:flex;flex-direction:column;row-gap:70px;padding:50px 25px}@media(min-width: 1280px){.the-form[data-v-3c5330f0]{padding:50px 100px}}.the-form__title[data-v-3c5330f0]{text-align:center;font-family:"Montserrat-SemiBold",sans-serif;font-size:16px;color:#5cb85c}.the-form__inputs[data-v-3c5330f0]{display:flex;flex-direction:column;row-gap:30px}.the-form__input[data-v-3c5330f0]{font-family:"Montserrat-Regular",sans-serif;font-size:18px;border:none;border-bottom:solid 1px #5cb85c;width:100%;padding-bottom:10px}.the-form__input[data-v-3c5330f0]::placeholder{font-family:"Montserrat-Regular",sans-serif;font-size:18px;color:#5cb85c}.the-form__input[data-v-3c5330f0]:focus{outline:none}.the-form__error[data-v-3c5330f0]{color:#9c0b0b;font-family:"Montserrat-SemiBold",sans-serif;font-size:14px}.the-form__button-block[data-v-3c5330f0]{display:flex;flex-direction:column;row-gap:20px}.the-form__button[data-v-3c5330f0]:disabled{opacity:50%;cursor:not-allowed}.the-form__text[data-v-3c5330f0]{font-family:"Montserrat-Regular",sans-serif;font-size:12px;text-align:center}',""]),t.exports=m}}]);