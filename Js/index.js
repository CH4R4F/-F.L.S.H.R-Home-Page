const quotes = [
    {
        text: "Great leaders are almost always great simplifiers, who can cut through argument, debate and doubt, to offer a solution everybody can understand",
        author: "colin powell",
    },
    {
        text: "When I hear people debate the ROI of social media? It makes me remember why so many business fail. Most businesses are not playing the marathon. They're playing the sprint. They're not worried about lifetime value and retention. They're worried about short-term goals.",
        author: "Gary Vaynerchuk",
    },
    {
        text: "What we have to do... is to find a way to celebrate our diversity and debate our differences without fracturing our communities.",
        author: "Hillary Clinton",
    },
    {
        text: "I took the Canal Zone and let Congress debate; and while the debate goes on, the canal does also.",
        author: "Theodore Roosevelt",
    },
];
// i will use this function to select html elements
function select(element, type = false) {
    // in case we want to use querySelectorAll, it's false by default
    if (type) {
        return document.querySelectorAll(element);
    }
    return document.querySelector(element);
}
// html elements
const mobileMenu = select(".burger");
const mobileMenuLinks = select(".nav--links");
const [l_top, l_middle, l_bottom] = select(".line", true);
const darkOverlay = select(".overlay");
const nextQuot = select(".next");
const prevQuote = select(".prev");

const form = select(".form--container");
const closeFormBtn = select(".exit");
const joinButton = select(".hero--btn");
const formOverlay = select(".input-overlay");
let quote = {
    textElement: select(".quote--text"),
    authorElement: select(".author"),
};

// css display function
function display(element, value) {
    element.style.display = value;
}

// function that will executed when we want to open the menu
function openMenu() {
    mobileMenuLinks.classList.remove("right");
    l_top.style.transform = "rotate(43deg)";
    l_bottom.style.transform = "rotate(-43deg)";
    display(l_middle, "none");
    display(darkOverlay, "block");
}

// function that will close the menu
function closeMenu() {
    mobileMenuLinks.classList.add("right");
    [l_top, l_middle, l_bottom].forEach((line) => (line.style.transform = "none"));
    display(darkOverlay, "none");
    display(l_middle, "block");
}

// listen to click events from mobileMenu, darkOverlay, nextQuot and prevQuote
mobileMenu.addEventListener("click", function () {
    if (mobileMenuLinks.classList.contains("right")) {
        openMenu();
    } else {
        closeMenu();
    }
});
// darkoverlay will also close the menu
darkOverlay.addEventListener("click", closeMenu);

// generate the initial quote
let currentQuote = 0;

// show it when the html is loaded
function makeChange() {
    quote.textElement.textContent = quotes[currentQuote].text;
    quote.authorElement.textContent = quotes[currentQuote].author;
}
window.addEventListener("DOMContentLoaded", makeChange);

// change the quote when the user click next btn
function changeQuote(e) {
    if (e.target.classList.contains("prev")) {
        if (currentQuote > 0) {
            currentQuote--;
            nextQuot.classList.add("move");
            if (currentQuote <= 0) {
                prevQuote.classList.remove("move");
            }
            makeChange();
        }
    } else {
        if (currentQuote <= quotes.length) {
            currentQuote++;
            prevQuote.classList.add("move");
            if (currentQuote >= quotes.length - 1) {
                nextQuot.classList.remove("move");
            }
            makeChange();
        }
    }
}

nextQuot.addEventListener("click", changeQuote);
prevQuote.addEventListener("click", changeQuote);

select(".year").textContent = new Date().getFullYear();

function showForm() {
    form.classList.remove("hide-top");
    display(formOverlay, "block");
}
function closeForm() {
    form.classList.add("hide-top");
    display(formOverlay, "none");
}
joinButton.addEventListener("click", showForm);
closeFormBtn.addEventListener("click", closeForm);
