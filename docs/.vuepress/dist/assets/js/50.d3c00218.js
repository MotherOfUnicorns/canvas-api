(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{105:function(t,a,e){"use strict";e.r(a);var n=e(0),i=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"content"},[e("h1",{attrs:{id:"data-processing-inequality"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#data-processing-inequality","aria-hidden":"true"}},[t._v("#")]),t._v(" Data-Processing Inequality")]),e("p",[t._v("The whispering game in the example on the previous page exhibits an important property of Markov chains: you can only lose information down the line. Charlie's final message \\(C\\) does not contain any more information about Alice's original message \\(A\\) than what was already contained in Bob's message \\(B\\). This observation is formalized in the following theorem:")]),e("div",{staticClass:"content-box pad-box-mini border border-trbl border-round"},[e("h4",{staticStyle:{color:"#bc0031"}},[e("strong",[t._v("Theorem: Data-processing inequality")])]),t._v("\nIf \\(X \\to Y \\to Z\\), then \\(I(X;Y) \\geq I(X;Z)\\). Equality holds if and only if \\(I(X;Y|Z) = 0\\).\n"),e("p",[e("span",{staticClass:"element_toggler",attrs:{role:"button","aria-controls":"group3","aria-label":"Toggler","aria-expanded":"false"}},[e("span",{staticClass:"Button"},[t._v("Proof")])])]),e("div",{attrs:{id:"group3"}},[e("div",{staticClass:"content-box"},[t._v("The following entropy diagram depicts the area \\(I(X;YZ)\\):"),e("br"),e("img",{attrs:{src:"https://canvas.uva.nl/courses/2205/files/275032/preview?verifier=UvTfQBq2E5Wa9KcEMv81FSbjxo7gRKSWa2xQnM3E",alt:"DataProcessingInequality.png",width:"289",height:"338","data-api-endpoint":"https://canvas.uva.nl/api/v1/courses/2205/files/275032","data-api-returntype":"File"}}),e("br"),t._v("From the diagram, we can see that \\begin{align} I(X;Z) + I(X;Y|Z) = I(X;YZ) = I(X;Y) + I(X;Z|Y). \\end{align} Combining this with part (c) of the proposition on the last page, it follows that \\begin{align} I(X;Z) + I(X;Y|Z) = I(X;Y). \\end{align} Since \\(I(X;Y|Z) \\geq 0\\), the result follows: \\(I(X;Z) \\leq I(X;Y)\\), with equality iff \\(I(X;Y|Z) = 0\\).")])])]),t._v("\nThe following corollary formalizes the intuition that the mutual information between two random variables can only decrease by post-processing any of the two.\n"),e("div",{staticClass:"content-box pad-box-mini border border-trbl border-round"},[e("h4",{staticStyle:{color:"#bc0031"}},[e("strong",[t._v("Corollary")])]),t._v("\n\\(I(X;Y) \\geq I(X;g(Y))\\) for any two random variables \\(X\\) and \\(Y\\), and any function \\(g\\) on the range of \\(Y\\).\n"),e("div",{attrs:{id:"group4"}},[e("div",{staticClass:"content-box"},[t._v("Paste proof here")])])])])}],!1,null,null,null);i.options.__file="README.md";a.default=i.exports}}]);