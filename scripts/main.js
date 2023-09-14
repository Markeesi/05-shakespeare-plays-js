const button = document.getElementById("button");
const linkAttributes = ["href", "src", "data-link", "data-src"]; // Add all relevant attributes


function toggleClass(elementId, className) {
    const element = document.getElementById(elementId);
    if (element.classList.contains(className)) {
        element.classList.remove(className);
    } else {
        element.classList.add(className);
    }
}

function toggleIcon(iconClass, iconStyle, keyword, after = false) {
    for (const attribute of linkAttributes) {
        const elements = document.querySelectorAll(`[${attribute}]`);
        
        elements.forEach((element) => {
            const text = element.innerHTML;

            if (text.includes(keyword) && text.includes(`class="${iconClass}"`)) {

                element.innerHTML = element.innerHTML.replace(`<i class="${iconClass}" style="color: ${iconStyle};"></i>`, '');
            } else if (text.includes(keyword)) {

                const icon = document.createElement("i");
                icon.className = `${iconClass}`;
                icon.style.color = iconStyle;
                
                if (after) {
                    element.innerHTML += icon.outerHTML;
                } else {
                    element.innerHTML = icon.outerHTML + element.innerHTML;
                }
            }
        });
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
    toggleClass("hamlet1", "dotted");
    toggleClass("asulike", "dotted");
    toggleClass("henry4", "dotted");
    toggleClass("henry5", "dotted");

    toggleIcon( "fa-regular fa-file-pdf", "#db1f1f", "Hamlet", true);
    toggleIcon("fa-solid fa-envelope", "#e98968", "email", false );
    toggleIcon("fa-solid fa-arrow-up-right-from-square", "#9dbd9f", "email", false);
    toggleIcon( "fa-solid fa-arrow-up-right-from-square", "#9dbd9f", "Henry V", false);
}

button.addEventListener("click", myButtonFunction);
