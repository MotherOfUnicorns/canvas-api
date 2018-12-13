(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{108:function(t,e,i){"use strict";i.r(e);var n=i(0),o=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"content"},[i("h1",{attrs:{id:"entropy-rate"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#entropy-rate","aria-hidden":"true"}},[t._v("#")]),t._v(" Entropy Rate")]),i("p",[t._v("Intuitively, some of the stochastic processes we have seen in the previous sections are more predictable than others. The periodic Markov process from "),i("a",{attrs:{title:"Markov Process: Irreducibility, Periodicity, Convergence",href:"https://canvas.uva.nl/courses/2205/pages/markov-process-irreducibility-periodicity-convergence#example3","data-api-endpoint":"https://canvas.uva.nl/api/v1/courses/2205/pages/markov-process-irreducibility-periodicity-convergence%23example3","data-api-returntype":"Page"}},[t._v("Example 3")]),t._v(" is not so surprising anymore as soon as the first \\(\\texttt{b}\\) is observed. In this section, we will study a measure for the unpredictability of a stochastic process: the entropy rate.")]),i("div",{staticClass:"content-box pad-box-mini border border-trbl border-round"},[i("h4",{staticStyle:{color:"#bc0031"}},[i("strong",[t._v("Definition: Entropy rate")])]),t._v("\nThe entropy rate \\(H(\\{X_i\\})\\) of a stochastic process \\(\\{X_i\\}\\) is \\[ H(\\{X_i\\}) := \\lim_{n \\to \\infty} \\frac{1}{n} H(X_1, \\dots, X_n), \\] if the limit exists, and undefined otherwise.")]),i("p",[t._v("In the literature, the entropy rate is often denoted \\(H(\\mathcal{X})\\), referring to the common support of the variables in the stochastic process. The notation \\(H(X)\\) is also sometimes used, but this can be ambiguous and confusing. The entropy rate reflects the way in which the entropy of the sequence (observed so far) grows as \\(n\\) grows large.")]),i("div",{staticClass:"content-box pad-box-mini border border-trbl border-round"},[i("h4",{staticStyle:{color:"#2d3b45"}},[i("strong",[t._v("Example")])]),t._v("\nConsider a process \\(\\{X_i\\}\\) where the \\(X_i\\) are i.i.d. sampled from \\(P_X\\). Then \\begin{align*} H(\\{X_i\\}) &= \\lim_{n \\to \\infty} \\frac{1}{n} H(X_1, \\dots X_n)\\\\ &= \\lim_{n \\to \\infty} \\frac{1}{n} \\left( H(X_1) + H(X_2) + \\ldots + H(X_n) \\right)\\\\ &= \\lim_{n \\to \\infty} \\frac{n}{n} H(X)\\\\ &= H(X). \\end{align*} So, every new coin toss increases the entropy of the entire observed sequence by \\(H(X)\\).\n")]),i("p",[t._v("We can also define an alternative measure of the unpredictability of a stochastic process, where we focus not on the amount of entropy in the entire sequence observed so far, but on the amount of entropy present in the current random variable, given the past sequence.")]),i("div",{staticClass:"content-box pad-box-mini border border-trbl border-round"},[i("h4",{staticStyle:{color:"#bc0031"}},[i("strong",[t._v("Definition: Entropy rate given the past")])]),t._v("\nThe entropy rate given the past \\(H'(\\{X_i\\})\\) of a stochastic process \\(\\{X_i\\}\\) is \\[ H'(\\{X_i\\}) := \\lim_{n \\to \\infty} H(X_n | X_1, \\dots, X_{n-1}), \\] if the limit exists, and undefined otherwise.")]),i("p",[t._v("For all stationary processes, this alternative definition turns out to coincide with the original definition of entropy rate. In order to show this, we need an analytic statement about the convergence of sums.")]),i("div",{staticClass:"content-box pad-box-mini border border-trbl border-round"},[i("h4",{staticStyle:{color:"#bc0031"}},[i("strong",[t._v("Theorem: Cesàro mean")])]),t._v("\nIf \\(\\lim\\limits_{n \\to \\infty} a_n = a\\) and \\(b_n = \\frac{1}{n} \\sum_{i=1}^n a_i\\), then \\(\\lim\\limits_{n \\to \\infty} b_n = a\\).\n"),i("p",[i("span",{staticClass:"element_toggler",attrs:{role:"button","aria-controls":"group16","aria-label":"Toggler","aria-expanded":"false"}},[i("span",{staticClass:"Button"},[t._v("Proof")])])]),i("div",{attrs:{id:"group16"}},[i("div",{staticClass:"content-box"},[i("a",{staticClass:"instructure_file_link instructure_video_link",attrs:{id:"media_comment_maybe",title:"05 Cesàro mean.mp4",href:"https://canvas.uva.nl/courses/2205/files/591842/download?verifier=bJBODLVOVbFyfIIBKD8lASYPFGfMpWe6WSY09mSH&wrap=1","data-api-endpoint":"https://canvas.uva.nl/api/v1/courses/2205/files/591842","data-api-returntype":"File"}},[t._v("05 Cesàro mean.mp4")])])])]),i("div",{staticClass:"content-box pad-box-mini border border-trbl border-round"},[i("h4",{staticStyle:{color:"#bc0031"}},[i("strong",[t._v("Theorem")])]),t._v("\nFor a stationary process \\(\\{X_i\\}\\), it holds that \\(H(\\{X_i\\}) = H'(\\{X_i\\})\\) (and both limits exist).\n"),i("p",[i("span",{staticClass:"element_toggler",attrs:{role:"button","aria-controls":"group17","aria-label":"Toggler","aria-expanded":"false"}},[i("span",{staticClass:"Button"},[t._v("Proof")])])]),i("div",{attrs:{id:"group17"}},[i("div",{staticClass:"content-box"},[t._v("We first show that \\(H(X_n \\mid X_1, \\dots, X_{n-1})\\) is a non-increasing function of \\(n\\): \\begin{align} H(X_{n}|X_1, \\dots, X_{n-1}) &= H(X_{n+1}|X_2, \\dots, X_{n}) &\\text{(stationary)}\\\\ &\\geq H(X_{n+1}|X_1, X_2, \\ldots, X_{n}) &(\\href{https://canvas.uva.nl/courses/2205/pages/bounds-on-the-conditional-entropy}{\\text{Bounds on the Conditional Entropy}}). \\end{align} Combined with the fact that \\(H(X_n \\mid X_1, \\dots, X_{n-1})\\) is lower bounded by 0, this implies that the limit \\(\\lim_{n \\to \\infty} H(X_n \\mid X_1, \\dots, X_{n-1})\\) must exist. It is \\(H'(\\{X_i\\})\\). It remains to show that \\(H(\\{X_i\\}) = H'(\\{X_i\\})\\): \\begin{align} H(\\{X_i\\}) &= \\lim_{n \\to \\infty} \\frac{1}{n} H(X_1, \\dots, X_n)\\\\ &= \\lim_{n \\to \\infty} \\frac{1}{n} \\sum_{i=1}^n H(X_i \\mid X_1, \\dots, X_{i-1})\\\\ &= H'(\\{X_i\\}). \\end{align} The final equality follows from the Cesaro mean.")])])]),i("div",{staticClass:"content-box pad-box-mini border border-trbl border-round"},[i("h4",{staticStyle:{color:"#2d3b45"},attrs:{id:"example2"}},[i("strong",[t._v("Example 2: A finite-state time-invariant Markov process, continued")])]),i("p",[t._v("For a Markov process with transition matrix \\[ R = \\left[ \\begin{array}{c c} 0.7&0.3\\\\ 0.5&0.5 \\end{array} \\right] \\, ,\\] we have "),i("a",{attrs:{title:"Markov Process: Stationary Distribution",href:"https://canvas.uva.nl/courses/2205/pages/markov-process-stationary-distribution#example2","data-api-endpoint":"https://canvas.uva.nl/api/v1/courses/2205/pages/markov-process-stationary-distribution%23example2","data-api-returntype":"Page"}},[t._v("previously computed")]),t._v(" the stationary distribution to be \\( (\\mu_a , \\mu_b) = (5/8, 3/8) \\). Hence, if we start in this stationary distribution, the entropy rate for this time-invariant stationary Markov process is \\[ H(\\{X_i\\}) = H'(\\{X_i\\}) = \\lim_{n \\to \\infty} H(X_n|X^{n-1}) = H(X_2|X_1) \\, , \\] where \\(P_{X_1}\\) is the stationary distribution, i.e. \\( P_{X_1}(\\texttt{a}) = 5/8, P_{X_1}(\\texttt{b})=3/8 \\). Therefore, \\begin{align} H(\\{ X_i \\}) = H(X_2|X_1) &= P_{X_1}(\\texttt{a}) \\cdot H(X_2 | X_1 = \\texttt{a}) + P_{X_1}(\\texttt{b}) \\cdot H(X_2 | X_1 = \\texttt{b})\\\\ &= 5/8 \\cdot h(0.3) + 3/8 \\cdot h(0.5)\\\\ &\\href{https://www.wolframalpha.com/input/?i=5%2F8*(-0.3*log2(0.3)-0.7*log2(0.7))%2B+3%2F8}{\\approx} 0.926 \\, . \\end{align}")]),i("strong",[t._v("Note that the entropy rate \\( H(\\{X_i\\} \\) is not equal to the entropy of the stationary distribution ")]),t._v("(which is \\( h(5/8) \\href{https://www.wolframalpha.com/input/?i=-5%2F8*log2(5%2F8)-3%2F8*log(3%2F8)}{\\approx} 0.792 \\) in this case)!")])])}],!1,null,null,null);o.options.__file="README.md";e.default=o.exports}}]);