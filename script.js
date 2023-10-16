function toggleMenu() {
    var menu = document.getElementById("collapsibleMenu");
        if (menu.style.display === 'block') {
            menu.style.display = "none";
        } else {
            menu.style.display = "block"
        }
}



function toggleList(itemNumber) {
    var hiddenList = 
document.querySelector(`ul[data-item="${itemNumber}"]`);
    if (hiddenList) {
    hiddenList.classList.toggle("hidden");
    } else {
        hiddenList.classList.toggle("hidden")
    }

}

document.addEventListener("DOMContentLoaded", function () {
    var gridItems = 
document.querySelectorAll(".grid-item");
    gridItems.forEach(function (item) { 
        item.addEventListener("click", function (event) {
        let hiddenList = document.querySelectorAll(".item-list")
           hiddenList.forEach(function (list) {
                list.classList.add("hidden");
            });
            var itemNumber = 
            this.getAttribute("data-item");
                toggleList(itemNumber);
        });
    });
})


let submitForm = document.getElementById('form')

submitForm.addEventListener("submit", function(event) {
    event.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;

    console.log(name)
    console.log(email)
});

document.addEventListener("DOMContentLoaded", function () {
    var quoteContainers = document.querySelectorAll(".quote");
    var currentIndex = 0;
    var interval = 8000;
    function displayQuote() {
        quoteContainers[currentIndex].classList.remove("active");
        // quoteContainers[currentIndex].style.display = "none";
        currentIndex = (currentIndex + 1) % quoteContainers.length;
        quoteContainers[currentIndex].classList.add("active");
        // quoteContainers[currentIndex].style.display = "block";
    }

    // quoteContainers[currentIndex].style.display = "block";
    quoteContainers[currentIndex].classList.add("active");
    setInterval(displayQuote, interval);
})

