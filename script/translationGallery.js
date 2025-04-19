
const translations = {
    en: {
       
        galleryParagraph: "Welcome to our <strong>Gallery</strong>, where we showcase the vibrant and diverse events of <strong>Malayalee Welfare Samaj Bhiwadi</strong>. Through these images, we relive the spirit of togetherness, cultural heritage, and social initiatives that define our community.",

        galleryH3: "Explore our cherished memories:",

        galleryItems: [
            "<strong>Onam Celebration</strong> - A grand festival of colors, traditions, and togetherness.",
            "<strong>Malayalam Mission</strong> - Our effort to promote and preserve the beauty of our mother tongue.",
            "<strong>Social Activities</strong> - Glimpses of our community outreach programs and charity work.",
            "<strong>Cultural Programs</strong> - Showcasing the artistic talents and performances of our members."
        ],
        click:"Click on a folder to explore the moments that define our journey!"

    },
    hi: {
        
        galleryParagraph: "हमारी गैलरी में आपका स्वागत है, जहाँ हम मलयाली वेलफेयर समाज भीवाड़ी की जीवंत और विविध गतिविधियाँ प्रस्तुत करते हैं। इन तस्वीरों के माध्यम से, हम एकता, सांस्कृतिक विरासत और सामाजिक प्रयासों की भावना को पुनः अनुभव करते हैं।",
        galleryH3: "हमारी अनमोल यादों को महसूस करें",

        galleryItems: [
            "<strong>ओणम उत्सव</strong> - रंगों, परंपराओं और एकता का भव्य पर्व।",
            "<strong>मलयालम मिशन</strong> - हमारी मातृभाषा की सुंदरता को संरक्षित और बढ़ावा देने का हमारा प्रयास।",
            "<strong>सामाजिक गतिविधियाँ</strong> - हमारे सामुदायिक सेवा कार्यक्रमों और दान कार्यों की झलक।",
            "<strong>सांस्कृतिक कार्यक्रम</strong> - हमारे सदस्यों की कलात्मक प्रतिभा और प्रस्तुतियों का प्रदर्शन।"
        ],
        click:"हमारी यादें देखने के लिए किसी फ़ोल्डर पर क्लिक करें!"


    },
    ml: {
      
        galleryParagraph: "ഞങ്ങളുടെ ഗാലറിയിലേക്ക് സ്വാഗതം, ഇവിടെ മലയാളി വെൽഫെയർ സമാജ് ഭിവാഡിയുടെ സമ്പന്നവും വൈവിധ്യമാർന്ന പരിപാടികൾ കാണാവുന്നതാണ്. ഈ ചിത്രങ്ങൾ ഐക്യത, സംസ്കാരപൈതൃകം, സാമൂഹിക പ്രവർത്തനങ്ങൾ എന്നിവയിലൂടെ നമ്മുടെ സമൂഹത്തിന്റെ ആത്മാവിനെ മുന്നോട്ടുവയ്ക്കുന്നു"
        ,
        galleryH3: "ഞങ്ങളുടെ വിലപ്പെട്ട ഓർമ്മകൾ അനുഭവിക്കുക:",
        galleryItems: [
            "<strong>ഓണം ആഘോഷം</strong> - നിറങ്ങളുടെ, പരമ്പരാഗങ്ങളുടെ, ഐക്യത്തിന്റെ മഹോത്സവം.",
            "<strong>മലയാളം മിഷൻ</strong> - നമ്മുടെ മാതൃഭാഷയുടെ സൗന്ദര്യം പരിപാലിക്കുകയും പ്രോത്സാഹിപ്പിക്കുകയും ചെയ്യാനുള്ള ഞങ്ങളുടെ ശ്രമം.",
            "<strong>സാമൂഹിക പ്രവർത്തനങ്ങൾ</strong> - നമ്മുടെ സമൂഹ സേവനവും ദാനപരിപാടികളും.",
            "<strong>സാംസ്കാരിക പരിപാടികൾ</strong> - നമ്മുടെ അംഗങ്ങളുടെ കലാപരിപാടികളും പ്രകടനങ്ങളും."
        ],
        click:"ഞങ്ങളുടെ ഓർമ്മകൾ കാണാൻ ഒരു ഫോൾഡറിൽ ക്ലിക്കുചെയ്യുക!"


    },
};


function switchLanguage() {
    const selectedLanguage = document.getElementById("language").value;

    // Save the selected language in localStorage
    localStorage.setItem("selectedLanguage", selectedLanguage);

 

   
    const gallery = document.querySelector(".gallery");
    const galleryParagraph = document.querySelector(".gallery-paragraph");
    const galleryH3 = document.querySelector(".gallery-h3");
    const galleryItems = document.querySelectorAll(".gallery-items");
    const click = document.querySelector(".click");

    if (selectedLanguage === "ml") {

        if (window.innerWidth <= 600) {
            galleryParagraph.classList.add("malayalam-phone")
            galleryH3.classList.add("malayalam-phone")
        } else {
            galleryParagraph.classList.remove("malayalam-phone")
            galleryH3.classList.remove("malayalam-phone")
            galleryParagraph.classList.add("malayalam")
            galleryH3.classList.add("malayalam")
        }
    }
    else {
        galleryParagraph.classList.remove("malayalam")
        galleryH3.classList.remove("malayalam")
    }
    // Update navigation links text content
 
    gallery.textContent = translations[selectedLanguage]["gallery"];
  
    galleryParagraph.innerHTML = translations[selectedLanguage]["galleryParagraph"];
    galleryH3.innerHTML = translations[selectedLanguage]["galleryH3"];
    click.innerHTML = translations[selectedLanguage]["click"];
    galleryItems.forEach((item, index) => {
        item.innerHTML = translations[selectedLanguage]["galleryItems"][index];

    });


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
