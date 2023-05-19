// scroll to Top
function scrollToTop () {
    document.addEventListener('DOMContentLoaded', function () {
        let scrollBtn = document.querySelector("#scrollTop");
    
        scrollBtn.addEventListener('click', function () {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }, false);
}