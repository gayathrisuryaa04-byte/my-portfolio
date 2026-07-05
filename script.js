const links = document.querySelectorAll("nav a");

links.forEach(link => {

    link.addEventListener("click", function(){

        console.log("Menu clicked");

    });

});

// Project Card Hover Effect

const cards = document.querySelectorAll(".project-card");

cards.forEach(card => {

    card.addEventListener("mouseenter", function(){

        this.style.transform = "translateY(-12px) scale(1.03)";

    });

    card.addEventListener("mouseleave", function(){

        this.style.transform = "translateY(0) scale(1)";

    });

});

document.getElementById("aboutBtn").addEventListener("click", function () {
    document.getElementById("about").scrollIntoView({
        behavior: "smooth"
    });
});