window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
        document.querySelector(".chat-container").classList.add("fixed");
    } else {
        document.querySelector(".chat-container").classList.remove("fixed");
    }
}
