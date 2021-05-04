const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to("#logo", { x: "3rem", duration: 0.7 }, "");
tl.to(".links", { y: "0%", duration: 1.3, stagger: 0.1 }, "-=1");

tl.fromTo(".information", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
