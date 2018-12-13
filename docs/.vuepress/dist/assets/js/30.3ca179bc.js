(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{110:function(e,t,i){"use strict";i.r(t);var o=i(0),a=Object(o.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"content"},[i("h1",{attrs:{id:"definition-huffman-codes"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#definition-huffman-codes","aria-hidden":"true"}},[e._v("#")]),e._v(" Definition: Huffman Codes")]),i("p",[e._v("Shannon's source-coding theorem shows us that in theory, the minimal code length for a source \\(P_X\\) is roughly \\(H(X)\\). In this section we will investigate "),i("span",{staticStyle:{color:"#bc0031"}},[i("strong",[e._v("Huffman codes")])]),e._v(", which provide an explicit and neat construction for optimal prefix-free codes. A binary Huffman code for a source \\(P_X\\) is constructed by iteratively pairing the two symbols with the smallest probability together, building a binary tree on the way. This is best explained by example:")]),i("div",{staticClass:"content-box pad-box-mini border border-trbl border-round"},[i("h4",{staticStyle:{color:"#2d3b45"}},[i("strong",[e._v("Example: Binary Huffman code")])]),e._v("\nLet the random variable \\(X\\) be given with \\(\\mathcal{X} = \\{a,b,c,d,e\\}\\) and \\(P_X(a) = P_X(b) = 0.25\\), \\(P_X(c) = 0.2\\), and \\(P_X(d) = P_X(e) = 0.15\\). The following is a binary Huffman code for \\(P_X\\):\n"),i("p",[i("img",{attrs:{src:"https://canvas.uva.nl/courses/2205/files/180621/download?verifier=LDjbvw4rf4XN6b6uwnFZogb1OwBq8FOFc28t4rpQ",alt:"huffman2-1.svg","data-api-endpoint":"https://canvas.uva.nl/api/v1/courses/2205/files/180621","data-api-returntype":"File"}})]),i("p",[e._v("We build up the tree from left to right, pairing the symbols (or groups of symbols) with smallest (combined) probabilities at every step. The codeword for every symbol is then determined by following the branches of the tree "),i("i",[e._v("from right to left")]),e._v(" until the symbol is reached. Note that this way, the symbols with the smallest probabilities get assigned the longest codewords (paths). The average codeword length for this code is \\begin{align} 0.25 \\cdot 2 + 0.25 \\cdot 2 + 0.2 \\cdot 2 + 0.15 \\cdot 3 + 0.15 \\cdot 3 = 2.3. \\end{align} This very close to the entropy \\(H(X) \\approx 2.285\\). The average codeword length lies between \\(H(X)\\) and \\(H(X) + 1\\).")])])])}],!1,null,null,null);a.options.__file="README.md";t.default=a.exports}}]);