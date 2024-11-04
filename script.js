<script>
  (function() {
    // Check if the current URL is a GitHub Pages URL
    console.log(window.location.hostname,"window.location.hostname")
    if (window.location.hostname === "muhamadbasirbaig.github.io") {
      var base = document.createElement('base');
      base.href = '/t2cllips-website/';
      document.head.prepend(base);
    }
  })();
</script>