// Premium Luxury Interaction ✨

const links = document.querySelectorAll(".link");


// Smooth Fade Load

window.addEventListener("load", () => {

  links.forEach((link, index) => {

    link.style.opacity = "0";
    link.style.transform =
      "translateY(25px)";

    setTimeout(() => {

      link.style.transition =
        "all 0.7s cubic-bezier(.22,1,.36,1)";

      link.style.opacity = "1";

      link.style.transform =
        "translateY(0px)";

    }, index * 120);

  });

});


// Luxury 3D Hover Effect 💖

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
      ((y - centerY) / 14);

    const rotateY =
      ((centerX - x) / 14);

    link.style.transform =

      `perspective(800px)
       rotateX(${rotateX}deg)
       rotateY(${rotateY}deg)
       scale(1.03)`;

  });

  link.addEventListener("mouseleave", () => {

    link.style.transform =

      `perspective(800px)
       rotateX(0deg)
       rotateY(0deg)
       scale(1)`;

  });

});


// Mouse Glow 🌸

const glow = document.createElement("div");

glow.classList.add("mouse-glow");

document.body.appendChild(glow);

document.addEventListener("mousemove", (e) => {

  glow.style.left =
    e.clientX + "px";

  glow.style.top =
    e.clientY + "px";

});


// Inject Glow Style

const style = document.createElement("style");

style.innerHTML = `

.mouse-glow{

  position:fixed;

  width:280px;
  height:280px;

  border-radius:50%;

  pointer-events:none;

  background:
    radial-gradient(
      circle,
      rgba(255,79,160,0.18) 0%,
      rgba(255,79,160,0.08) 35%,
      transparent 70%
    );

  transform:
    translate(-50%,-50%);

  z-index:0;

  filter:blur(18px);

  transition:
    left 0.08s linear,
    top 0.08s linear;
}


/* Floating Luxury Particles */

.particle{

  position:fixed;

  width:8px;
  height:8px;

  border-radius:50%;

  background:
    rgba(255,255,255,0.6);

  pointer-events:none;

  z-index:0;

  animation:
    floatUp linear infinite;

  filter:
    blur(0.4px);

}

@keyframes floatUp{

  0%{

    transform:
      translateY(100vh)
      scale(0);

    opacity:0;

  }

  20%{
    opacity:1;
  }

  100%{

    transform:
      translateY(-120vh)
      scale(1.4);

    opacity:0;

  }

}

`;

document.head.appendChild(style);


// Floating Particles ✨

for(let i = 0; i < 25; i++){

  const particle =
    document.createElement("div");

  particle.classList.add("particle");

  particle.style.left =
    Math.random() * 100 + "vw";

  particle.style.animationDuration =
    (Math.random() * 10 + 10) + "s";

  particle.style.animationDelay =
    Math.random() * 5 + "s";

  particle.style.opacity =
    Math.random();

  const size =
    Math.random() * 5 + 3;

  particle.style.width =
    size + "px";

  particle.style.height =
    size + "px";

  document.body.appendChild(particle);

}


// Premium Click Pulse 💅

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


// Smooth Scroll Feel ✨

document.documentElement.style.scrollBehavior =
  "smooth";


// Console Signature 😌

console.log(
  "%cVipasana Linktree ✨",
  "color:#ff4fa0;font-size:18px;font-weight:bold;"
);
