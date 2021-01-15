const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".text", { y: "0%", duration: 1, stagger: 0.5 });
tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1.1");

tl.to("#logo", { x: "3rem", duration: 2 }, "-=1");
tl.to(".links", { y: "0%", duration: 0.5, stagger: 0.1 }, "-=1");

tl.fromTo(".information", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
tl.to(".triangle", { x: 0, duration: 0.5, stagger: 0.12 });
