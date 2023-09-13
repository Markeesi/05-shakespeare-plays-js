
const button = document.getElementById("button");


function toggleClass(elementId, className) {
    const element = document.getElementById(elementId);
    if (element.classList.contains(className)) {
        element.classList.remove(className);
    } else {
        element.classList.add(className);
    }
}

function myButtonFunction() {
    toggleClass("rows", "rows-side-by-side");
    toggleClass("remove1", "remove-bulletpoint");
    toggleClass("remove2", "remove-bulletpoint");
    toggleClass("remove3", "remove-bulletpoint");
    toggleClass("bg1", "background-color-grey");
    toggleClass("bg2", "background-color-grey");
    toggleClass("bg3", "background-color-grey");
    toggleClass("even", "even-rows");
    toggleClass("odd", "odd-rows");
}


button.addEventListener("click", myButtonFunction);