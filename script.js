let seconds = 3600;

setInterval(() => {
    let hrs = Math.floor(seconds / 3600);
    let mins = Math.floor((seconds % 3600) / 60);
    let secs = seconds % 60;

    document.getElementById("timer").innerText =
        hrs + " : " + mins + " : " + secs;

    if(seconds > 0){
        seconds--;
    }
}, 1000);
// all checkboxes
const checkboxes = document.querySelectorAll(".filter");

// all product cards
const cards = document.querySelectorAll(".card");

// count spans
const smartCount = document.getElementById("smartCount");
const watchCount = document.getElementById("watchCount");

// update function
function updateProducts() {

    let selected = [];

    checkboxes.forEach(cb => {
        if (cb.checked) {
            selected.push(cb.value);
        }
    });

    let smart = 0;
    let watch = 0;

    cards.forEach(card => {
        let category = card.dataset.category;

        // count categories
        if (category === "smart") smart++;
        if (category === "watch") watch++;

        // filter logic
        if (selected.length === 0 || selected.includes(category)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });

    // update counts
    smartCount.textContent = smart;
    watchCount.textContent = watch;
}

// event listeners
checkboxes.forEach(cb => {
    cb.addEventListener("change", updateProducts);
});

// run once on load
updateProducts();
