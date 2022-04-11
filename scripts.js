// Scroll down button
const downbutton = document.querySelector("[data-down-button]")

downbutton.addEventListener("click", function(){
  document.documentElement.scrollTo({ top:508, behavior:'smooth'});
});

// Scroll to top button
const topbutton = document.querySelector("[data-top-button]")

topbutton.addEventListener("click", function(){
  document.documentElement.scrollTo({ top:0, behavior:'smooth'});
});