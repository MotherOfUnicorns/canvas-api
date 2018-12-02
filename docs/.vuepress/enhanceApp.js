export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  MathJax.Hub.Config({
    tex2jax: {
      inlineMath: [ ['$','$'], ["\\(","\\)"] ],
      processEscapes: true
    }
  });
  router.afterEach((to, from) => {
    setTimeout(function() {
      MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
    }, 1000)
  });
}