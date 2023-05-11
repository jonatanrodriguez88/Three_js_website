var elementFirst = document.querySelector('h1');

ScrollTrigger.create({
    trigger: "h1", 
    start: "top top",
    end: "top top",
    // once: "true",
    // toggleClass: {targets: ".box1, .box2", className: "active, leave, hide"},
    // toggleActions: "play resume resume reset",
  
    onEnter: () => myfunction(),
    onLeaveBack: () => myfunction(),
  
  });


  function myfunction() {
    elementFirst.classList.toggle('active') 
    
  };