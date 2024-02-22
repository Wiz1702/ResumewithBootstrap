<!-- Font Awesome icons -->
<script src="https://use.fontawesome.com/releases/v6.1.0/js/all.js" crossorigin="anonymous"></script>
<!-- Core theme JS -->
<script src="js/scripts.js"></script>
<script>
    function shrinkImage() {
        var image = document.getElementById('profilePicture');
        image.classList.toggle('shrinked');
    }
</script>
var myCollapse = document.getElementById('myCollapse')
var bsCollapse = new bootstrap.Collapse(myCollapse, {
  toggle: false
})
