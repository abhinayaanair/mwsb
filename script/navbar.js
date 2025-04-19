const translations = {
  en: {
    home: "HOME",
    about: "ABOUT US",
    messages: "MESSAGES",
    management: "MANAGEMENT",
    gallery: "GALLERY",
    contact: "CONTACT US",
    presidentDesk: "FROM PRESIDENT'S DESK",
    secretaryDesk: "FROM SECRETARY'S DESK",
  },
  hi: {
    home: "होम",
    about: "हमारे बारे में",
    messages: "संदेश",
    management: "प्रबंधन",
    gallery: "गेलरी",
    contact: "संपर्क करें",
    presidentDesk: "अध्यक्ष का संदेश",
    secretaryDesk: "सचिव का संदेश",
  },
  ml: {
    home: "ഹോം",
    about: "ഞങ്ങളേക്കുറിച്ച്",
    messages: "സന്ദേശങ്ങൾ",
    management: "മേനേജ്മെന്റ്",
    gallery: "ഗാലറി",
    contact: "ബന്ധപ്പെടുക",
    presidentDesk: "പ്രസിഡന്റിന്റെ സന്ദേശം",
    secretaryDesk: "സെക്രടറിയുടെ സന്ദേശം",
  },
};

function switchLanguage() {
  const selectedLanguage = document.getElementById("language").value;
  localStorage.setItem("selectedLanguage", selectedLanguage);

  const keys = ["home", "about", "messages", "management", "gallery", "contact"];
  const dropdownKeys = ["presidentDesk", "secretaryDesk"];
  const navLinks = document.querySelector(".nav-links");
  const mobileNavLinks = document.querySelector("#mobileNav");
  const dropdownLinks = document.querySelector("#messagesDropdown");
  const dropdownLinksMobile = document.querySelector("#messagesDropdownMobile");

  const content = document.getElementById("content");
  const tasks = document.getElementById("tasks");

  // Malayalam font styling toggle
  if (selectedLanguage === "ml") {
    content?.classList.add("malayalam");
    tasks?.classList.add("malayalam");
  } else {
    content?.classList.remove("malayalam");
    tasks?.classList.remove("malayalam");
  }

  // Update main nav links
  navLinks?.querySelectorAll(".nav-link").forEach((link, index) => {
    if (keys[index]) {
      link.textContent = translations[selectedLanguage][keys[index]];
    }
  });

  // Update mobile nav links
  mobileNavLinks?.querySelectorAll(".nav-link").forEach((link, index) => {
    if (keys[index]) {
      link.textContent = translations[selectedLanguage][keys[index]];
      link.style.fontSize = "10px";
    }
  });

  // Update dropdowns
  dropdownLinks?.querySelectorAll(".dropdown-link").forEach((link, index) => {
    link.textContent = translations[selectedLanguage][dropdownKeys[index]];
  });

  dropdownLinksMobile?.querySelectorAll(".dropdown-link").forEach((link, index) => {
    link.textContent = translations[selectedLanguage][dropdownKeys[index]];
  });
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

  // Toggle mobile dropdown on click
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

// Initialize on page load
document.addEventListener("DOMContentLoaded", () => {
  const savedLanguage = localStorage.getItem("selectedLanguage") || "en";
  document.getElementById("language").value = savedLanguage;
  switchLanguage();
  setupDropdownToggle();
});

// Language change listener
document.getElementById("language")?.addEventListener("change", switchLanguage);