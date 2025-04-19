const menuToggle = document.getElementById('menuToggle');
const mobileNav = document.getElementById('mobileNav');
const mlheader=document.querySelector('.malayalam-header')

menuToggle.addEventListener('click', () => {
    mobileNav.classList.toggle('active');
    
});
if (window.innerWidth <= 600) {
    mlheader.classList.add("ml-header-phone")
     mlheader.classList.remove("ml-header")
}else{
    mlheader.classList.remove("ml-header-phone")
    mlheader.classList.add("ml-header")
    
}

