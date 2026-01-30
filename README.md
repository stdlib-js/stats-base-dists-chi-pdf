<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Probability Density Function

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> [Chi][chi-distribution] distribution [probability density function][pdf] (PDF).

<section class="intro">

The [probability density function][pdf] (PDF) for a [chi][chi-distribution] random variable is

<!-- <equation class="equation" label="eq:chi_pdf" align="center" raw="f(x;\,k) = \frac{2^{{1-k/2}}x^{{k-1}}e^{{-x^{2}/2}}}{\Gamma(k/2)}" alt="Probability density function (PDF) for a chi distribution."> -->

```math
f(x;\,k) = \frac{2^{{1-k/2}}x^{{k-1}}e^{{-x^{2}/2}}}{\Gamma(k/2)}
```

<!-- <div class="equation" align="center" data-raw-text="f(x;\,k) = \frac{2^{{1-k/2}}x^{{k-1}}e^{{-x^{2}/2}}}{\Gamma(k/2)}" data-equation="eq:chi_pdf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/chi/pdf/docs/img/equation_chi_pdf.svg" alt="Probability density function (PDF) for a chi distribution.">
    <br>
</div> -->

<!-- </equation> -->

where `k` is the degrees of freedom and `Γ` denotes the [gamma][gamma-function] function.

</section>

<!-- /.intro -->



<section class="usage">

## Usage

```javascript
import pdf from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-chi-pdf@deno/mod.js';
```

You can also import the following named exports from the package:

```javascript
import { factory } from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-chi-pdf@deno/mod.js';
```

#### pdf( x, k )

Evaluates the [probability density function][pdf] (PDF) for a [chi][chi-distribution] distribution with degrees of freedom `k`.

```javascript
var y = pdf( 0.1, 1.0 );
// returns ~0.794

y = pdf( 0.5, 2.0 );
// returns ~0.441

y = pdf( -1.0, 4.0 );
// returns 0.0
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = pdf( NaN, 1.0 );
// returns NaN

y = pdf( 0.0, NaN );
// returns NaN
```

If provided `k < 0`, the function returns `NaN`.

```javascript
var y = pdf( 2.0, -2.0 );
// returns NaN
```

If provided `k = 0`, the function evaluates the [PDF][pdf] of a [degenerate distribution][degenerate-distribution] centered at `0`.

```javascript
var y = pdf( 2.0, 0.0 );
// returns 0.0

y = pdf( 0.0, 0.0 );
// returns Infinity
```

#### pdf.factory( k )

Returns a `function` for evaluating the [PDF][pdf] for a [chi][chi-distribution] distribution with degrees of freedom `k`.

```javascript
var myPDF = pdf.factory( 6.0 );

var y = myPDF( 3.0 );
// returns ~0.337

y = myPDF( 1.0 );
// returns ~0.076
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import uniform from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-array-uniform@deno/mod.js';
import logEachMap from 'https://cdn.jsdelivr.net/gh/stdlib-js/console-log-each-map@deno/mod.js';
import pdf from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-chi-pdf@deno/mod.js';

var opts = {
    'dtype': 'float64'
};
var x = uniform( 20, 0.0, 10.0, opts );
var k = uniform( 20, 0.0, 10.0, opts );

logEachMap( 'x: %0.4f, k: %0.4f, f(x;k): %0.4f', x, k, pdf );
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->



<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-chi-pdf.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-chi-pdf

[test-image]: https://github.com/stdlib-js/stats-base-dists-chi-pdf/actions/workflows/test.yml/badge.svg?branch=v0.3.0
[test-url]: https://github.com/stdlib-js/stats-base-dists-chi-pdf/actions/workflows/test.yml?query=branch:v0.3.0

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-chi-pdf/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-chi-pdf?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-chi-pdf.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-chi-pdf/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-dists-chi-pdf/tree/deno
[deno-readme]: https://github.com/stdlib-js/stats-base-dists-chi-pdf/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/stats-base-dists-chi-pdf/tree/umd
[umd-readme]: https://github.com/stdlib-js/stats-base-dists-chi-pdf/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/stats-base-dists-chi-pdf/tree/esm
[esm-readme]: https://github.com/stdlib-js/stats-base-dists-chi-pdf/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/stats-base-dists-chi-pdf/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-chi-pdf/main/LICENSE

[chi-distribution]: https://en.wikipedia.org/wiki/Chi_distribution

[degenerate-distribution]: https://en.wikipedia.org/wiki/Degenerate_distribution

[gamma-function]: https://en.wikipedia.org/wiki/Gamma_function

[pdf]: https://en.wikipedia.org/wiki/Probability_density_function

</section>

<!-- /.links -->
