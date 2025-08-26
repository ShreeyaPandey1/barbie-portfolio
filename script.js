function createCircles() {
  const container = document.querySelector('body');
  const colors = ['#ff2e93', '#ba628eff', '#ff9ed8', '#ffffff'];

  for (let i = 0; i < 15; i++) {
    const circle = document.createElement('div');
    circle.classList.add('circle');
    const size = Math.random() * 100 + 50;
    const color = colors[Math.floor(Math.random() * colors.length)];
    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;
    circle.style.background = `radial-gradient(circle, ${color} 0%, rgba(255,255,255,0) 70%)`;
    circle.style.left = `${Math.random() * 100}%`;
    circle.style.top = `${Math.random() * 100}%`;
    circle.style.position = 'fixed';
    circle.style.borderRadius = '50%';
    circle.style.animation = `circleAnimation ${Math.random() * 4 + 3}s linear infinite`;
    circle.style.animationDelay = `${Math.random() * 2}s`;
    circle.style.zIndex = 0;
    document.body.appendChild(circle);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  createCircles();

  const cards = document.querySelectorAll(".project-card");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  cards.forEach(card => observer.observe(card));
});
document.addEventListener("DOMContentLoaded", () => {
  gsap.from(".project-card", {
    opacity: 0,
    y: 80,
    rotate: -5,
    duration: 1,
    stagger: 0.3,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".projects",
      start: "top 80%"
    }
  });
});
document.getElementById("dark-toggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
document.addEventListener("mousemove", (e) => {
  const sparkle = document.createElement("div");
  sparkle.classList.add("sparkle-trail");
  sparkle.style.left = e.pageX + "px";
  sparkle.style.top = e.pageY + "px";
  document.body.appendChild(sparkle);

  setTimeout(() => sparkle.remove(), 800);
});
