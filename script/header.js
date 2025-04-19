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

function setupDropdownToggle() {
    const messagesLink = document.getElementById("messagesLink");
    const messagesLinkMobile = document.getElementById("messagesLinkMobile");
    const dropdown = document.getElementById("messagesDropdown");
    const dropdownMobile = document.getElementById("messagesDropdownMobile");
  
    // Toggle desktop dropdown on click
    messagesLink?.addEventListener("click", (e) => {
      e.preventDefault();
      dropdown?.classList.toggle("active");
    });
    
    dropdown?.addEventListener("mouseout", (e) => {
      e.preventDefault();
      dropdown?.classList.toggle("active");
     ;
    });
    
    messagesLinkMobile?.addEventListener("click", (e) => {
      e.preventDefault();
      dropdownMobile?.classList.toggle("active");
     
    });
  
    // Check current page and keep dropdown open or highlight MESSAGES
    const currentPage = window.location.pathname;
    if (currentPage.includes("president-message.html") || currentPage.includes("secretary-message.html")) {
      dropdown?.classList.add("active");
      dropdownMobile?.classList.add("active");
      messagesLinkMobile?.classList.add("active-link");
    }
  }
  