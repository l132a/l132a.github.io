const sections = document.querySelectorAll("article[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;
  const mybutton = document.getElementById("gotop");
  sections.forEach((current) => {
    const height = current.offsetHeight,
      top = current.offsetTop - 50,
      id = current.getAttribute("id");
    if (scrollY > top && scrollY <= top + height) {
      document
        .querySelector(".nav-menu a[href*=" + id + "]")
        .classList.add("nav-active");
    } else {
      document
        .querySelector(".nav-menu a[href*=" + id + "]")
        .classList.remove("nav-active");
    }
  });

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

window.addEventListener("scroll", scrollActive);

function scrollHeader() {
  const header = document.querySelector("header");
  if (this.scrollY >= 80) header.classList.add("header-shadow");
  else header.classList.remove("header-shadow");
}

window.addEventListener("scroll", scrollHeader);

const typewriter = new Typewriter(document.getElementById("typewritter"), {
  loop: true,
});

typewriter
  .typeString("I am a IT Consultant")
  .pauseFor(2500)
  .deleteAll()
  .typeString("I am a Network Engineer")
  .pauseFor(2500)
  .deleteAll()
  .typeString("I am a Software Developer")
  .pauseFor(2500)
  .deleteAll()
  .typeString("I am a IT Support")
  .pauseFor(2500)
  .deleteAll()
  .typeString(
    "I am very interested in the development of technology and learn it"
  )
  .pauseFor(2500)
  .deleteAll()
  .start();
