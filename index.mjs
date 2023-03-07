// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-gamma@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-exp@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@v0.0.7-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@v0.0.8-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@esm/index.mjs";import{factory as d}from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-degenerate-pdf@esm/index.mjs";function a(s,m){var d,a;return t(s)||t(m)||m<0?NaN:0===m?0===s?r:0:s<0?0:(d=i(2,1-(a=m/2))*i(s,m-1)*n(-s*s/2),d/=e(a))}function o(s){var r,a;return t(s)||s<0?m(NaN):0===s?d(0):(a=s/2,r=s-1,function(s){var m;if(t(s))return NaN;if(s<0)return 0;return m=i(2,1-a)*i(s,r)*n(-s*s/2),m/=e(a)})}s(a,"factory",o);export{a as default,o as factory};
//# sourceMappingURL=index.mjs.map
