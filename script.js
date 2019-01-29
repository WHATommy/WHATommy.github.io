$(".jump").on("click", function (e) {

    e.preventDefault();

    $("body, html").animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 600);

});

function dropDown() {
    console.log('clicked');
    document.getElementById("drop").classList.toggle("show")
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (e) {
    if (!e.target.matches('.drop-arrow')) {
        var myDropdown = document.getElementById("drop");
        if (myDropdown.classList.contains('show')) {
            myDropdown.classList.remove('show');
        }
    }
}