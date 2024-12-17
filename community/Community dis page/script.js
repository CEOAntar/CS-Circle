window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 10) { // عند التمرير لمسافة معينة
        navbar.classList.add('scroll-active');
    } else {
        navbar.classList.remove('scroll-active');
    }
});
