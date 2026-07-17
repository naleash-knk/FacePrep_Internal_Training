
const seats = document.querySelectorAll(".seat");

for (let i = 0; i < seats.length; i++) {

    seats[i].addEventListener("click", function () {

        this.classList.toggle("selected");

    });

}