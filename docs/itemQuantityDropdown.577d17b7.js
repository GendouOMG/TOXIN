parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"nzVq":[function(require,module,exports) {
function t(t,i){var n;return n=t%10,t?t>10&&t<21?i[2]:1==n?i[0]:n>1&&n<5?i[1]:i[2]:""}function i(){var i=$(this).closest(".itemQuantityDropdown").data("mode"),n=0,o=0,s="",e="",r=[" спальня"," спальни"," спален"],l=[" кровать"," кровати"," кроватей"],a=[" ванная комната"," ванные комнаты"," ванных комнат"];$(this).closest(".itemQuantityDropdown").find(".itemQuantityDropdown__currentQuantity").each(function(){n+=+$(this).html()}),"eachItems"==i?n?(e="",$(this).closest(".itemQuantityDropdown").find(".itemQuantityDropdown__menuOption").each(function(){o=+$(this).children(".itemQuantityDropdown__currentQuantity").html(),(s=$(this).children(".itemQuantityDropdown__item").html()).toLowerCase().startsWith("спал")&&(s=t(o,r)),s.toLowerCase().startsWith("кров")&&(s=t(o,l)),s.toLowerCase().startsWith("ванн")&&(s=t(o,a)),o&&(e=e+o+s+", ")}),e=e.slice(0,-2),$(this).closest(".itemQuantityDropdown").find(".itemQuantityDropdown__selection").html(e)):$(this).closest(".itemQuantityDropdown").find(".itemQuantityDropdown__selection").html("Выберите удобства"):(e=t(n,[" гость"," гостя"," гостей"]),$(this).closest(".itemQuantityDropdown").find(".itemQuantityDropdown__selection").html(n+e),0==n?($(this).closest(".itemQuantityDropdown").find(".itemQuantityDropdown__selection").html("Сколько гостей"),$(this).closest(".itemQuantityDropdown__dropdownMenu").find(".itemQuantityDropdown__controlButton--minus").prop("disabled",!0),$(this).closest(".itemQuantityDropdown__dropdownMenu").find(".itemQuantityDropdown__clearButton").css("display","none")):$(this).closest(".itemQuantityDropdown__dropdownMenu").find(".itemQuantityDropdown__clearButton").css("display","block"))}String.prototype.startsWith||Object.defineProperty(String.prototype,"startsWith",{value:function(t,i){var n=i>0?0|i:0;return this.substring(n,n+t.length)===t}}),$(document).ready(function(){var t=".itemQuantityDropdown__dropdownMenu",n=".itemQuantityDropdown__controlButton--minus",o=".itemQuantityDropdown__currentQuantity";$(this).find(".itemQuantityDropdown__dropdownMenu").each(function(){i.call(this),$(this).find(o).each(function(){+$(this).html()?$(this).siblings(n).prop("disabled",!1):$(this).siblings(n).prop("disabled",!0)})}),$(".itemQuantityDropdown__toggle").click(function(){$(this).siblings(t).slideToggle("fast")}),$(".itemQuantityDropdown__controlButton--plus").click(function(){var t=0;t=+$(this).siblings(o).html(),t++,$(this).siblings(o).html(t),t&&$(this).siblings(n).prop("disabled",!1),i.call(this)}),$(n).click(function(){var t=0;(t=+$(this).siblings(o).html())&&(t--,$(this).siblings(o).html(t)),t||$(this).prop("disabled",!0),i.call(this)}),$(".itemQuantityDropdown__applyButton").click(function(){$(this).closest(t).slideToggle("fast")}),$(".itemQuantityDropdown__clearButton").click(function(){$(this).closest(t).find(o).html(0),i.call(this)})});
},{}]},{},["nzVq"], null)
//# sourceMappingURL=itemQuantityDropdown.577d17b7.js.map