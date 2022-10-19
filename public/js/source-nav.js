const hamburguer = document.querySelector('.hamburger-image')
const menuItems = document.querySelectorAll('.menuItem');

hamburguer.addEventListener('click',()=>{
  document.querySelector('#slaider').style.right = '50px'
  menuItems.forEach( 
    function(menuItem) { 
      menuItem.addEventListener("click", ()=>{
        document.querySelector('#slaider').style.right = '-320px'
      });
    }
  )


})
const clos1 = document.querySelector('.cancel-img')
clos1.addEventListener('click',()=>{
  document.querySelector('#slaider').style.right = '-320px'
})