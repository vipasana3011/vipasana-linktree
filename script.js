// Premium Luxury Interactions ✨

const links =
  document.querySelectorAll(".link");


// Smooth Reveal Animation 💖

window.addEventListener("load", () => {

  links.forEach((link, index) => {

    link.style.opacity = "0";

    link.style.transform =
      "translateY(30px)";

    setTimeout(() => {

      link.style.transition =
        "all 0.8s cubic-bezier(.22,1,.36,1)";

      link.style.opacity = "1";

      link.style.transform =
        "translateY(0px)";

    }, index * 130);

  });

});


// Premium 3D Hover Effect 🌸

links.forEach((link) => {

  link.addEventListener("mousemove", (e) => {

    const rect =
      link.getBoundingClientRect();

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

      `perspective(900px)
       rotateX(${rotateX}deg)
       rotateY(${rotateY}deg)
       scale(1.02)`;

  });

  link.addEventListener("mouseleave", () => {

    link.style.transform =

      `perspective(900px)
       rotateX(0deg)
       rotateY(0deg)
       scale(1)`;

  });

});


// Mouse Luxury Glow ✨

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


// Floating Luxury Particles 💅

for(let i = 0; i < 18; i++){

  const particle =
    document.createElement("span");

  particle.classList.add("particle");

  particle.style.left =
    Math.random() * 100 + "vw";

  particle.style.animationDuration =
    (Math.random() * 8 + 10) + "s";

  particle.style.animationDelay =
    Math.random() * 5 + "s";

  const size =
    Math.random() * 4 + 3;

  particle.style.width =
    size + "px";

  particle.style.height =
    size + "px";

  document.body.appendChild(particle);

}


// Click Pulse Effect 🌸

links.forEach((link) => {

  link.addEventListener("click", () => {

    link.style.transition =
      "0.15s ease";

    link.style.transform =
      "scale(0.96)";

    setTimeout(() => {

      link.style.transform =
        "scale(1)";

    }, 140);

  });

});


// Inject Extra Styles ✨

const style =
  document.createElement("style");

style.innerHTML = `

/* Mouse Glow */

.mouse-glow{

  position:fixed;

  width:260px;
  height:260px;

  border-radius:50%;

  pointer-events:none;

  z-index:0;

  background:

    radial-gradient(

      circle,

      rgba(255,79,160,0.18) 0%,

      rgba(255,79,160,0.08) 35%,

      transparent 70%

    );

  transform:
    translate(-50%,-50%);

  filter:blur(16px);

  transition:
    left 0.08s linear,
    top 0.08s linear;
}


/* Floating Particles */

.particle{

  position:fixed;

  bottom:-20px;

  border-radius:50%;

  background:
    rgba(255,255,255,0.5);

  z-index:0;

  pointer-events:none;

  animation:
    floatParticle linear infinite;

  filter:
    blur(0.5px);

  opacity:0.8;
}

@keyframes floatParticle{

  0%{

    transform:
      translateY(0px)
      scale(0);

    opacity:0;
  }

  15%{
    opacity:1;
  }

  100%{

    transform:
      translateY(-120vh)
      translateX(40px)
      scale(1.4);

    opacity:0;
  }

}

`;

document.head.appendChild(style);


// Console Signature 😌

console.log(

  "%cVipasana Linktree ✨",

  "color:#ff4fa0; font-size:18px; font-weight:bold;"

);
