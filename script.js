function sendToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    console.log("sent to top");
}
  
document.addEventListener('DOMContentLoaded', () => {
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    if($navbarBurgers.length > 0) {
        $navbarBurgers.forEach(el => {
        el.addEventListener('click', () => {
            const target = el.dataset.target;
            const $target = document.getElementById(target);
            el.classList.toggle('is-active');
            $target.classList.toggle('is-active');
        });
        });
    }
});
  