(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{119:function(t,n,i){"use strict";i.r(n);var a=i(0),e=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"content"},[i("h1",{attrs:{id:"definition-conditional-mutual-information"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#definition-conditional-mutual-information","aria-hidden":"true"}},[t._v("#")]),t._v(" Definition: Conditional Mutual Information")]),i("p",[t._v("Applying the "),i("a",{attrs:{title:"Definition: Mutual Information",href:"https://canvas.uva.nl/courses/2205/pages/definition-mutual-information","data-api-endpoint":"https://canvas.uva.nl/api/v1/courses/2205/pages/definition-mutual-information","data-api-returntype":"Page"}},[t._v("definition of mutual information")]),t._v(" to the conditional distribution \\(P_{XY|\\cal A}\\) naturally defines \\(I(X;Y|{\\cal A})\\), the mutual information of \\(X\\) and \\(Y\\) conditioned on the event \\(\\cal A\\):")]),i("div",{staticClass:"content-box pad-box-mini border border-trbl border-round"},[i("h4",{staticStyle:{color:"#bc0031"}},[i("strong",[t._v("Definition: Conditional mutual information")])]),t._v("\nLet \\(X,Y,Z\\) be random variables. Then the conditional mutual information of \\(X\\) and \\(Y\\) given \\(Z\\) is defined as \\[ I(X;Y| Z) = \\sum_z P_Z(z) I(X;Y|Z\\!=\\!z) \\, , \\] with the convention that the corresponding argument in the summation is \\(0\\) for \\(z\\) with \\(P_Z(z)=0\\).")]),i("p",[t._v("Conditional mutual information has properties similar to the ones we saw for mutual information: \\begin{align} I(X;Y|Z) &= I(Y;X|Z) \\\\ I(X;Y|Z) &\\geq 0 \\\\ I(X;Y|Z) &= 0 \\text{ iff \\(X\\) and \\(Y\\) are independent given \\(Z\\)}. \\end{align} Furthermore, the previous bounds \\(H(X) \\geq 0\\), \\(H(X|Y) \\geq 0\\), and \\(I(X;Y) \\geq 0\\), can all be seen as special cases of \\(I(X;Y| Z) \\geq 0\\). These bounds, and any bound they imply, are called "),i("span",{staticStyle:{color:"#bc0031"}},[i("strong",[t._v("Shannon inequalities")])]),t._v(". It is important to realize that \\(I(X;Y| Z)\\) may be larger or smaller than (or equal to) \\(I(X;Y)\\).")]),i("p",[t._v("The following is sometimes used as definition of \\(I(X;Y| Z)\\): verify it for yourself using the definition above.")]),i("div",{staticClass:"content-box pad-box-mini border border-trbl border-round"},[i("h4",{staticStyle:{color:"#bc0031"}},[i("strong",[t._v("Alternative definition")])]),t._v("\nLet \\(X,Y,Z\\) be random variables. Then \\[ I(X;Y| Z)= H(X|Z)- H(X|YZ) \\, . \\]\n"),i("p",[i("span",{staticClass:"element_toggler",attrs:{role:"button","aria-controls":"group1","aria-label":"Toggler","aria-expanded":"false"}},[i("span",{staticClass:"Button"},[t._v("Proof")])])]),i("div",{attrs:{id:"group1"}},[i("div",{staticClass:"content-box"},[t._v("\\begin{align} I(X;Y|Z) &= \\sum_{z \\in \\mathcal{Z}} P_Z(z) I(X;Y|Z=z) &\\text{(by definition)} \\\\ &= \\sum_{z \\in \\mathcal{Z}} P_Z(z) (H(X|Z=z) - H(X|Y,Z=z)) &\\text{(definition of mutual information)} \\\\ &= \\sum_{z \\in \\mathcal{Z}} P_Z(z) H(X|Z=z) - \\sum_{z \\in \\mathcal{Z}} P_Z(z) H(X|Y,Z=z) \\\\ &= H(X|Z) - H(X|YZ). \\end{align}")])])])])}],!1,null,null,null);e.options.__file="README.md";n.default=e.exports}}]);