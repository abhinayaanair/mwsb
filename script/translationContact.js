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

    contact: "CONTACT US",

    contactDescription:
      "Fill out the form below and we'll get back to you as soon as possible.",
    contactTitle: "Get in touch",
    paymentTitle: "Support Us with Your Contribution",
    paymentDescription:
      "Scan the QR code below to donate or make a payment to Malayalee Welfare Samaj Bhiwadi.",
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
    contact: "संपर्क करें",
    contactDescription:
      "नीचे दिए गए फ़ॉर्म को भरें और हम जल्द से जल्द आपसे संपर्क करेंगे।",
    contactTitle: "संपर्क करें",
    paymentTitle: "आपके योगदान से हमारा समर्थन करें",
    paymentDescription:
      "दान करने या मलयाली वेलफेयर समाज भिवाड़ी को भुगतान करने के लिए नीचे दिए गए क्यूआर कोड को स्कैन करें।",
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
    contact: "ബന്ധപ്പെടുക",
    contactDescription:
      "താഴെയുള്ള ഫോമ് പൂരിപ്പിക്കൂ, ഞങ്ങൾ ഉടൻ നിങ്ങളുമായി ബന്ധപ്പെടും.",
    contactTitle: "ബന്ധപ്പെടുക",
    paymentTitle: "നിങ്ങളുടെ സംഭാവനയിലൂടെ ഞങ്ങളെ പിന്തുണയ്ക്കുക",
    paymentDescription: "സംഭാവനയ്ക്കോ പേയ്മെന്റിനോ QR കോഡ് സ്കാൻ ചെയ്യുക.",
  },
};
const navTranslations = {
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

  // Save the selected language in localStorage
  localStorage.setItem("selectedLanguage", selectedLanguage);

  const keys = [
    "home",
    "about",
    "messages",
    "management",
    "gallery",
    "contact",
  ];
  const dropdownKeys = ["presidentDesk", "secretaryDesk"];
  const navLinks = document.querySelector(".nav-links");
  const mobileNavLinks = document.querySelector("#mobileNav");
  const dropdownLinks = document.querySelector("#messagesDropdown");
  const dropdownLinksMobile = document.querySelector("#messagesDropdownMobile");

  // Update main nav links
  navLinks?.querySelectorAll(".nav-link").forEach((link, index) => {
    if (keys[index]) {
      link.textContent = navTranslations[selectedLanguage][keys[index]];
    }
  });

  // Update mobile nav links
  mobileNavLinks?.querySelectorAll(".nav-link").forEach((link, index) => {
    if (keys[index]) {
      link.textContent = navTranslations[selectedLanguage][keys[index]];
      link.style.fontSize = "10px";
    }
  });

  // Update dropdowns
  dropdownLinks?.querySelectorAll(".dropdown-link").forEach((link, index) => {
    link.textContent = navTranslations[selectedLanguage][dropdownKeys[index]];
  });

  dropdownLinksMobile
    ?.querySelectorAll(".dropdown-link")
    .forEach((link, index) => {
      link.textContent = navTranslations[selectedLanguage][dropdownKeys[index]];
    });
  const contactTitle = document.querySelector(".contact-title");
  const contactDescription = document.querySelector(".contact-description");
  const paymentTitle = document.querySelector(".payment-title");
  const paymentDescription = document.querySelector(".payment-description");
  const contact = document.querySelector(".contact");

  if (selectedLanguage === "ml") {
    if (window.innerWidth <= 600) {
      contactDescription.classList.add("malayalam-phone");
      contactTitle.classList.add("malayalam-phone");
      paymentDescription.classList.add("malayalam-phone");
      paymentTitle.classList.add("malayalam-phone");
    } else {
      contactDescription.classList.remove("malayalam-phone");
      contactTitle.classList.remove("malayalam-phone");
      paymentDescription.classList.remove("malayalam-phone");
      paymentTitle.classList.remove("malayalam-phone");
      contactDescription.classList.add("malayalam-phone");
      contactTitle.classList.add("malayalam-phone");
      paymentDescription.classList.add("malayalam-phone");
      paymentTitle.classList.add("malayalam-phone");
    }
  } else {
    contactDescription.classList.remove("malayalam,malayalam-phone");
    contactTitle.classList.remove("malayalam,malayalam-phone");
    paymentDescription.classList.remove("malayalam,malayalam-phone");
    paymentTitle.classList.remove("malayalam,malayalam-phone");
  }

  // Update navigation links text content

  contactDescription.innerHTML =
    translations[selectedLanguage]["contactDescription"];
  contact.innerHTML = translations[selectedLanguage]["contact"];
  contactTitle.innerHTML = translations[selectedLanguage]["contactTitle"];
  paymentDescription.innerHTML =
    translations[selectedLanguage]["paymentDescription"];
  paymentTitle.innerHTML = translations[selectedLanguage]["paymentTitle"];
}

// Load stored language preference and initialize
window.addEventListener("load", function () {
    const storedLanguage = localStorage.getItem("selectedLanguage") || "en";
    document.getElementById("language").value = storedLanguage;
    switchLanguage();
    setupDropdownToggle();
  });
  

// Event listeners
document.getElementById("language").addEventListener("change", switchLanguage);

// Add an event listener to handle window resize dynamically
window.addEventListener("resize", switchLanguage);
