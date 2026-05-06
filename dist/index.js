"use strict";var n=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var q=n(function(j,o){
var v=require('@stdlib/math-base-assert-is-nan/dist'),y=require('@stdlib/math-base-special-gamma/dist'),d=require('@stdlib/math-base-special-exp/dist'),f=require('@stdlib/math-base-special-pow/dist'),g=require('@stdlib/constants-float64-pinf/dist');function h(r,e){var a,t;return v(r)||v(e)||e<0?NaN:e===0?r===0?g:0:r<0?0:(t=e/2,a=f(2,1-t)*f(r,e-1)*d(-(r*r)/2),a/=y(t),a)}o.exports=h
});var N=n(function(z,p){
var w=require('@stdlib/utils-constant-function/dist'),F=require('@stdlib/stats-base-dists-degenerate-pdf/dist').factory,s=require('@stdlib/math-base-assert-is-nan/dist'),l=require('@stdlib/math-base-special-gamma/dist'),I=require('@stdlib/math-base-special-exp/dist'),c=require('@stdlib/math-base-special-pow/dist');function O(r){var e,a;if(s(r)||r<0)return w(NaN);if(r===0)return F(0);return a=r/2,e=r-1,t;function t(u){var i;return s(u)?NaN:u<0?0:(i=c(2,1-a)*c(u,e)*I(-(u*u)/2),i/=l(a),i)}}p.exports=O
});var P=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),m=q(),R=N();P(m,"factory",R);module.exports=m;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
