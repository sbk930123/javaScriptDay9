let gallery = document.querySelector("#balloon-gallery");
let message = document.querySelector("#yay-no-balloons");
const balloons = document.querySelectorAll('.balloon');


balloons.forEach(function(pop) {
  pop.addEventListener('mouseover', function(e) {
    pop.style.backgroundColor = '#ededed';
    pop.textContent = 'POP!';
    
    let allPopped = true;
    
    balloons.forEach(function(balloon) {
      if (!balloon.textContent.includes('POP!')) {
        allPopped = false;
      }
    })
    
    if (allPopped) {
      message.style.display = 'block';
      gallery.style.display = 'none';
    }
  })
})






