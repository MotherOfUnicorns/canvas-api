module.exports = {
	title: 'Information Theory',
	description: 'UvA course',
	themeConfig: {
		sidebar: SIDEBAR,
		editLinks: false,
		displayAllHeaders: true
	},
	head: [
		[
			'script',
			{ 
				type: 'text/x-mathjax-config'
			},
			"MathJax.Hub.Config({tex2jax: {inlineMath: [ ['$','$'], ['\\\\(','\\\\)'] ],processEscapes: true}});"
		],
		[ 'script',
			{ src: '/assets/js/MathJax.js?config=TeX-AMS_HTML'}
		],
		[
			'script',
			{ 
				type: 'application/javascript'
			},
			"setTimeout(function() {MathJax.Hub.Queue([\"Typeset\", MathJax.Hub]);}, 1000);"
		]
	]
}