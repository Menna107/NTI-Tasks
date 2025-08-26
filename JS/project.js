// Nav Background
var nav = document.getElementById("navBar");

window.addEventListener("scroll", function() {
  if (window.scrollY > 100) { 
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});


// Up Button
const upBtn = document.getElementById("upBtn");
window.onscroll = function() {
    if (window.scrollY > 400) { 
        upBtn.classList.add("show");
    } else {
        upBtn.classList.remove("show");
    }
};

upBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});


// Images Filter
function filterSelection(category) {
  let items = document.getElementsByClassName("filter-item");
  if (category === "all") category = "";

  for (let i = 0; i < items.length; i++) {
    items[i].classList.remove("show");
    if (items[i].className.indexOf(category) > -1) {
      items[i].classList.add("show");
    }
  }

  let btns = document.querySelectorAll(".buttons .btn");
  btns.forEach(btn => btn.classList.remove("active"));
  document.querySelector(`.${category || "all"}-btn`).classList.add("active");
}

window.onload = function() {
  filterSelection("all");
};


// GSAP Library
gsap.utils.toArray('section').forEach(section => {
    if(section.querySelectorAll('.fade-card').length === 0){
        gsap.fromTo(section,
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                duration: 0.5,  
                scrollTrigger: {
                    trigger: section,
                    start: "top 90%",
                    toggleActions: "play none none none"
                }
            }
        );
    }
});

gsap.utils.toArray('section').forEach(section => {
    const cards = section.querySelectorAll('.fade-card');
    if(cards.length > 0){
        gsap.fromTo(cards,
            { opacity: 0, y: 20 },
            {
                opacity: 1,
                y: 0,
                duration: 0.4,
                stagger: 0.15,  
                scrollTrigger: {
                    trigger: section,
                    start: "top 90%",
                    toggleActions: "play none none none"
                }
            }
        );
    }
});

