parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Ik3D":[function(require,module,exports) {
$(document).ready(function(){$(this).find(".roomCard__photoList").each(function(){$(this).removeClass("roomCard__photoList--noJs"),$(this).find(".roomCard__photo:first").addClass("roomCard__photo--current"),$(this).parent().find(".roomCard__punktMark:first").addClass("roomCard__punktMark--current")}),$(".roomCard__scrollButton--right").click(function(){var r=$(this).parent().find(".roomCard__photo.roomCard__photo--current"),o=$(this).parent().find(".roomCard__punktMark.roomCard__punktMark--current");$(this).parent().find(".roomCard__photo").last().hasClass("roomCard__photo--current")?(r.removeClass("roomCard__photo--current"),$(this).parent().find(".roomCard__photo").first().addClass("roomCard__photo--current"),o.removeClass("roomCard__punktMark--current"),$(this).parent().find(".roomCard__punktMark").first().addClass("roomCard__punktMark--current")):(r.removeClass("roomCard__photo--current"),r.next(".roomCard__photo").addClass("roomCard__photo--current"),o.removeClass("roomCard__punktMark--current"),o.next(".roomCard__punktMark").addClass("roomCard__punktMark--current"))}),$(".roomCard__scrollButton--left").click(function(){var r=$(this).parent().find(".roomCard__photo.roomCard__photo--current"),o=$(this).parent().find(".roomCard__punktMark.roomCard__punktMark--current");$(this).parent().find(".roomCard__photo").first().hasClass("roomCard__photo--current")?(r.removeClass("roomCard__photo--current"),$(this).parent().find(".roomCard__photo").last().addClass("roomCard__photo--current"),o.removeClass("roomCard__punktMark--current"),$(this).parent().find(".roomCard__punktMark").last().addClass("roomCard__punktMark--current")):(r.removeClass("roomCard__photo--current"),r.prev(".roomCard__photo").addClass("roomCard__photo--current"),o.removeClass("roomCard__punktMark--current"),o.prev(".roomCard__punktMark").addClass("roomCard__punktMark--current"))})});
},{}]},{},["Ik3D"], null)
//# sourceMappingURL=roomCard.477bfce4.js.map