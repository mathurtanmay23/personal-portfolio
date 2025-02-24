 

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("contact-form").addEventListener("submit", function(event) {
        event.preventDefault();
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let message = document.getElementById("message").value;
        
        if (name && email && message) {
            document.body.style.background = "yellow";
            document.getElementById("thank-you-dialog").showModal();
            document.getElementById("contact-form").reset();
            document.querySelector("header").style.display = "none";
            document.querySelector(".hero").style.display = "none";
            document.querySelector("#about").style.display = "none";
            document.querySelector("#projects").style.display = "none";
            document.querySelector("#contact").style.display = "none";
        } else {
            alert("Please fill in all fields.");
        }
    });
    
    document.getElementById("close-dialog").addEventListener("click", function() {
        document.getElementById("thank-you-dialog").close();
        document.body.style.background = "#000";
        document.querySelector("header").style.display = "flex";
        document.querySelector(".hero").style.display = "flex";
        document.querySelector("#about").style.display = "block";
        document.querySelector("#projects").style.display = "block";
        document.querySelector("#contact").style.display = "block";
    });

    document.getElementById("more-about-btn").addEventListener("click", function() {
        document.getElementById("about").scrollIntoView({ behavior: "smooth" });
    });
});