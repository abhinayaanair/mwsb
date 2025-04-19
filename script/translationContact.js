
const translations = {
    en: {
    
        contact: "CONTACT US",
       
        contactDescription: "Fill out the form below and we'll get back to you as soon as possible.",
        contactTitle:"Get in touch",
        paymentTitle:"Support Us with Your Contribution",
        paymentDescription:"Scan the QR code below to donate or make a payment to Malayalee Welfare Samaj Bhiwadi."
    },
    hi: {
     
        contact: "संपर्क करें",
        contactDescription: "नीचे दिए गए फ़ॉर्म को भरें और हम जल्द से जल्द आपसे संपर्क करेंगे।",
        contactTitle: "संपर्क करें",
        paymentTitle: "आपके योगदान से हमारा समर्थन करें",
        paymentDescription: "दान करने या मलयाली वेलफेयर समाज भिवाड़ी को भुगतान करने के लिए नीचे दिए गए क्यूआर कोड को स्कैन करें।"

    },
    ml: {
       
        contact: "ബന്ധപ്പെടുക",
        contactDescription: "താഴെയുള്ള ഫോമ് പൂരിപ്പിക്കൂ, ഞങ്ങൾ ഉടൻ നിങ്ങളുമായി ബന്ധപ്പെടും.",
        contactTitle: "ബന്ധപ്പെടുക",
        paymentTitle: "നിങ്ങളുടെ സംഭാവനയിലൂടെ ഞങ്ങളെ പിന്തുണയ്ക്കുക",
        paymentDescription: "സംഭാവനയ്ക്കോ പേയ്മെന്റിനോ QR കോഡ് സ്കാൻ ചെയ്യുക."

    },
};


function switchLanguage() {
    const selectedLanguage = document.getElementById("language").value;

    // Save the selected language in localStorage
    localStorage.setItem("selectedLanguage", selectedLanguage);

    const keys = ["home", "about", "management", "gallery", "contact"];
    const navLinks = document.querySelector(".nav-links");
    const mobileNavLinks = document.querySelector("#mobileNav");
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
            paymentTitle.classList.remove("malayalam,malayalam-phone")
    }

    // Update navigation links text content
   

    contactDescription.innerHTML = translations[selectedLanguage]["contactDescription"];
    contact.innerHTML = translations[selectedLanguage]["contact"];
    contactTitle.innerHTML = translations[selectedLanguage]["contactTitle"];
    paymentDescription.innerHTML=translations[selectedLanguage]["paymentDescription"]
    paymentTitle.innerHTML=translations[selectedLanguage]["paymentTitle"]




}

// Load stored language preference on page load
window.addEventListener("load", function () {
    const storedLanguage = localStorage.getItem("selectedLanguage") || "en";
    document.getElementById("language").value = storedLanguage;
    switchLanguage();
});

// Event listeners
document.getElementById("language").addEventListener("change", switchLanguage);

// Add an event listener to handle window resize dynamically
window.addEventListener("resize", switchLanguage);
