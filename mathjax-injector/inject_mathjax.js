// Get DOM element of <head>.
var head = document.getElementsByTagName('head')[0]

/* Inject the following HTML snippet to enable in-line delimiters "$...$" and "\(...\)".

<script type="text/x-mathjax-config">
MathJax.Hub.Config({
    tex2jax: {inlineMath: [['$','$'], ['\\(','\\)']]}
});
</script>
*/
var script = document.createElement("script");
script.type = "text/x-mathjax-config"
script.innerHTML = "MathJax.Hub.Config({tex2jax: {inlineMath: [['$','$'], ['\\(','\\)']]}});"
head.appendChild(script)

/* Inject the following HTML snippet to load the MathJax entrypoint script.

<script type="text/javascript" async src="path-to-mathjax/MathJax.js?config=TeX-AMS_CHTML"></script>
*/
var script = document.createElement("script");
script.type = "text/javascript";
script.src = "https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-MML-AM_CHTML";
head.appendChild(script);
