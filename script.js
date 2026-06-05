// ==========================
// LINKS
// ==========================

const links =
  document.querySelectorAll(".link");


// ==========================
// REVEAL ANIMATION
// ==========================

window.addEventListener("load", () => {

  links.forEach((link, index) => {

    link.style.opacity = "0";

    link.style.transform =
      "translateY(20px)";

    setTimeout(() => {

      link.style.transition =
        "all 0.6s ease";

      link.style.opacity = "1";

      link.style.transform =
        "translateY(0px)";

    }, index * 100);

  });

});


// ==========================
// PREMIUM HOVER
// ==========================

links.forEach((link) => {

  link.addEventListener("mouseenter", () => {

    link.style.transform =
      "translateY(-2px) scale(1.01)";

  });

  link.addEventListener("mouseleave", () => {

    link.style.transform =
      "translateY(0px) scale(1)";

  });

});


// ==========================
// CLICK EFFECT
// ==========================

links.forEach((link) => {

  link.addEventListener("click", () => {

    link.style.transition =
      "0.15s ease";

    link.style.transform =
      "scale(0.99)";

    setTimeout(() => {

      link.style.transform =
        "scale(1)";

    }, 120);

  });

});
// ==========================
// MOUSE GLOW
// ==========================

const glow =
  document.createElement("div");

glow.classList.add("mouse-glow");

document.body.appendChild(glow);

document.addEventListener("mousemove", (e) => {

  glow.style.left =
    e.clientX + "px";

  glow.style.top =
    e.clientY + "px";

});


// ==========================
// FLOATING PARTICLES
// ==========================

for(let i = 0; i < 8; i++){

  const particle =
    document.createElement("span");

  particle.classList.add("particle");

  particle.style.left =
    Math.random() * 100 + "vw";

  particle.style.animationDuration =
    (Math.random() * 6 + 12) + "s";

  particle.style.animationDelay =
    Math.random() * 5 + "s";

  const size =
    Math.random() * 3 + 2;

  particle.style.width =
    size + "px";

  particle.style.height =
    size + "px";

  document.body.appendChild(particle);

}


// ==========================
// EXTRA STYLES
// ==========================

const style =
document.createElement("style");

style.innerHTML = `

.mouse-glow{

  position:fixed;

  width:180px;
  height:180px;

  border-radius:50%;

  pointer-events:none;

  z-index:0;

  background:

    radial-gradient(

      circle,

      rgba(255,79,160,.08) 0%,

      rgba(255,79,160,.04) 40%,

      transparent 75%

    );

  transform:
    translate(-50%,-50%);

  filter:blur(20px);
}

/* Particles */

.particle{

  position:fixed;

  bottom:-20px;

  border-radius:50%;

  background:
    rgba(255,255,255,.35);

  pointer-events:none;

  z-index:0;

  animation:
    floatParticle linear infinite;
}

@keyframes floatParticle{

  0%{

    transform:
      translateY(0px)
      scale(0);

    opacity:0;
  }

  15%{
    opacity:.7;
  }

  100%{

    transform:
      translateY(-120vh)
      translateX(30px)
      scale(1.2);

    opacity:0;
  }

}
`;

document.head.appendChild(style);


// ==========================
// SIGNATURE
// ==========================

console.log(
"%cVipasana ✨",
"color:#ff4fa0;font-size:18px;font-weight:bold;"
);
