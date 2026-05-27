// Mouse Glow Effect ✨

const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {

  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";

});


// Floating Sparkles ✨

for(let i = 0; i < 25; i++){

  const sparkle = document.createElement("div");

  sparkle.classList.add("sparkle");

  sparkle.style.left = Math.random() * 100 + "vw";

  sparkle.style.animationDuration =
    Math.random() * 5 + 4 + "s";

  sparkle.style.opacity = Math.random();

  sparkle.style.width =
    sparkle.style.height =
    Math.random() * 4 + 2 + "px";

  document.body.appendChild(sparkle);

}


// Scroll Reveal Animation 💖

const links = document.querySelectorAll(".link");

window.addEventListener("load", () => {

  links.forEach((link, index) => {

    link.style.opacity = "0";
    link.style.transform = "translateY(20px)";

    setTimeout(() => {

      link.style.transition =
        "all 0.6s ease";

      link.style.opacity = "1";
      link.style.transform =
        "translateY(0px)";

    }, index * 120);

  });

});


// Tiny Tilt Hover Effect 🌸

links.forEach((link) => {

  link.addEventListener("mousemove", (e) => {

    const rect = link.getBoundingClientRect();

    const x =
      e.clientX - rect.left;

    const y =
      e.clientY - rect.top;

    const centerX =
      rect.width / 2;

    const centerY =
      rect.height / 2;

    const rotateX =
      ((y - centerY) / 18);

    const rotateY =
      ((centerX - x) / 18);

    link.style.transform =
      `perspective(500px)
       rotateX(${rotateX}deg)
       rotateY(${rotateY}deg)
       scale(1.03)`;

  });

  link.addEventListener("mouseleave", () => {

    link.style.transform =
      "perspective(500px) rotateX(0) rotateY(0) scale(1)";

  });

});


// Sparkle Style Inject ✨

const style = document.createElement("style");

style.innerHTML = `

.sparkle{
  position:fixed;
  top:-10px;
  background:white;
  border-radius:50%;
  pointer-events:none;
  z-index:0;
  animation:fall linear infinite;
  box-shadow:
    0 0 10px rgba(255,255,255,0.8);
}

@keyframes fall{

  0%{
    transform:
      translateY(-10vh)
      translateX(0px);
    opacity:0;
  }

  10%{
    opacity:1;
  }

  100%{
    transform:
      translateY(110vh)
      translateX(40px);
    opacity:0;
  }

}

`;

document.head.appendChild(style);
