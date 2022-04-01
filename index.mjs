// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-gamma@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-exp@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-degenerate-pdf@esm/index.mjs";var a=s,o=e,p=n,l=r,j=i;var f=function(t,s){var e,n;return a(t)||a(s)||s<0?NaN:0===s?0===t?j:0:t<0?0:(e=l(2,1-(n=s/2))*l(t,s-1)*p(-t*t/2),e/=o(n))},h=m,c=d.factory,v=s,b=e,u=n,g=r;var x=f,N=function(t){var s,e;return v(t)||t<0?h(NaN):0===t?c(0):(e=t/2,s=t-1,function(t){var n;if(v(t))return NaN;if(t<0)return 0;return n=g(2,1-e)*g(t,s)*u(-t*t/2),n/=b(e)})};t(x,"factory",N);var y=x;export{y as default,N as factory};
//# sourceMappingURL=index.mjs.map
