# Chrome/Chromium MathJax Injector
This repository provides a Chrome/Chromium extension to render math expressions on any page, even if it does not supported math rendering, using MathJAX. To do so, the following HTML snippet (see http://docs.mathjax.org/en/latest/start.html#tex-and-latex-input) is injected into the ``<head>``-tag of a website:
```html
<script type="text/x-mathjax-config">
MathJax.Hub.Config({
  tex2jax: {inlineMath: [['$','$'], ['\\(','\\)']]}
});
</script>
<script type="text/javascript" async src="path-to-mathjax/MathJax.js?config=TeX-AMS_CHTML"></script>
```

# Setup Instructions
1. Clone this repository: ``git clone https://github.com/sisp/chrome-mathjax-injector``
2. Open Chrome/Chromium, click on the three vertical bars on the top-right > "More tools" > "Extensions".
3. Click on the button "Load unpacked extension..."
4. Select the directory ``chrome-mathjax-injector`` which you cloned in step 1.
