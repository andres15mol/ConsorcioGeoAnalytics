function moverImagen(e) {
  var t = document.getElementById("contenedor"),
    n = document.getElementById("imagen"),
    o = t.getBoundingClientRect(),
    i = e.clientX - o.left,
    d = e.clientY - o.top,
    s = 20 * (i / o.width - 0.5),
    l = 20 * (d / o.height - 0.5);
  n.style.transform = "translate(" + s + "px, " + l + "px)";
}
let mainNav = document.querySelector(".main-nav"),
  centerNav = document.querySelector(".center-nav"),
  finalNav = document.querySelector(".final-nav");
(mainNav.innerHTML += `<div id="bot-nav" class="row d-none">\n${centerNav.innerHTML}    \n<div class="col d-flex justify-content-center ">\n${finalNav.innerHTML} \n</div>  \n \n</div>`),
  window.addEventListener("resize", function () {
    let e = document.getElementById("bot-nav");
    window.innerWidth > 992
      ? document.getElementById("bot-nav").classList.add("d-none")
      : (document.getElementById("bot-nav").classList.remove("d-none"),
        (e.style.backgroundColor = "#2d2e32"),
        e.classList.add("d-none"));
  });
var open = !1;
function openNav() {
  let e = document.getElementById("bot-nav");
  if (!1 === this.open)
    (e.style.backgroundColor = "rgb(37, 37, 37)"),
      e.classList.remove("d-none"),
      (open = !0),
      (this.open = !0);
  else {
    async function t() {
      await new Promise((e) => setTimeout(e, 220)),
        (e.style.backgroundColor = "#2d2e32"),
        e.classList.add("d-none");
    }
    (open = !1), t();
  }
  async function t() {
    await new Promise((e) => setTimeout(e, 0.5)), e.classList.toggle("mostrar");
  }
  t();
}
function home() {
  let e = document.getElementById("bot-nav");
  (window.location.href = "#"),
    e.classList.contains("mostrar") && this.closef();
}
window.addEventListener("scroll", function () {
  var e = document.querySelector(".main-nav"),
    t = document.querySelector(".contact-me");
  if (window.pageYOffset >= t.offsetTop + t.offsetHeight) {
    e.classList.add("fixed-navbar");
    let t = document.getElementById("btnMobileNav");
    t.addEventListener("mouseover", function () {
      (this.style.color = "rgb(253, 181, 181)"),
        t.addEventListener("mouseout", function () {
          this.style.color = "";
        });
    });
  } else
    e.classList.remove("fixed-navbar"),
      btnMobileNav.addEventListener("mouseover", function () {
        (this.style.color = "crimson"),
          btnMobileNav.addEventListener("mouseout", function () {
            this.style.color = "";
          });
      });
});
const sliderContainer = document.querySelector(".slider-container"),
  slider = document.querySelector(".slider"),
  slides = Array.from(document.querySelectorAll(".slide")),
  prevBtn = document.querySelector(".arrow-prev"),
  nextBtn = document.querySelector(".arrow-next");
let slideIndex = 0;
const slideWidth = sliderContainer.offsetWidth;
function showPrevSlide() {
  slideIndex--,
    slideIndex < 0 && (slideIndex = slides.length - 1),
    updateSliderPosition();
}
function showNextSlide() {
  slideIndex++,
    slideIndex >= slides.length && (slideIndex = 0),
    updateSliderPosition();
}
function updateSliderPosition() {
  const e = -slideIndex * slideWidth;
  slider.style.transform = `translateX(${e}px)`;
}
function closef() {
  window.innerWidth >= 992 || this.openNav();
}
slides.forEach((e) => {
  e.style.width = `${slideWidth}px`;
}),
  (slider.style.width = slideWidth * slides.length + "px"),
  prevBtn.addEventListener("click", showPrevSlide),
  nextBtn.addEventListener("click", showNextSlide),
  (function () {
    "use strict";
    var e = document.querySelectorAll(".needs-validation");
    Array.prototype.slice.call(e).forEach(function (e) {
      e.addEventListener(
        "submit",
        function (t) {
          e.checkValidity() || (t.preventDefault(), t.stopPropagation()),
            e.classList.add("was-validated");
        },
        !1
      );
    });
  })();
const btn = document.getElementById("button");
document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault(), (btn.value = "Sending...");
  emailjs.sendForm("default_service", "template_jnz0vha", this).then(
    () => {
      (btn.value = "Send Email"), alert("Sent!");
    },
    (e) => {
      (btn.value = "Send Email"), alert(JSON.stringify(e));
    }
  );
});


//Controlador de Alianzas

function showInfo(element) {
  const info = element.querySelector('.info');
  info.classList.add('active');
}

function hideInfo(element) {
  const info = element.querySelector('.info');
  info.classList.remove('active');
}
