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

<script type="text/javascript" async src="path-to-mathjax/MathJax.js?config=TeX-AMS_HTML"></script>
*/
var script = document.createElement("script");
script.type = "text/javascript";
//script.src = "https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.1/MathJax.js?config=TeX-AMS_HTML";
script.src = "https://cdn.rawgit.com/mathjax/MathJax/2.7.1/MathJax.js?config=TeX-AMS-MML_HTMLorMML";
head.appendChild(script);

/* Inject the following HTML snippet to rerender math expressions when the DOM changes.

<script type="text/javascript">
document.addEventListener('DOMSubtreeModified', function(e){
    MathJax.Hub.Queue(['Typeset',MathJax.Hub]);
});
</script>
*/
var script = document.createElement("script");
script.type = "text/javascript"
script.innerHTML = "document.addEventListener('DOMSubtreeModified', function(e) {MathJax.Hub.Queue(['Typeset',MathJax.Hub]);});"
head.appendChild(script)
