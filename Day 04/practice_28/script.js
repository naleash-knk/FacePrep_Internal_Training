
const orderButtons = document.querySelectorAll("button");

for (let i = 0; i < orderButtons.length; i++) {

    orderButtons[i].addEventListener("click", function () {

        const foodName = this.parentElement.querySelector("h2").textContent;

        alert("You ordered: " + foodName);

        this.textContent = "Ordered ✅";

        this.style.backgroundColor = "green";

        this.disabled = true;

    });

}