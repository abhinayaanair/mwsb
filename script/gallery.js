
let currentGallery = [];
let currentIndex = 0;

// Fill image galleries
function iteration(array, name, pics) {
    for (let i = 1; i <= pics; i++) {
        array.push(`images/gallery/${name}/${name} (${i}).jpg`);
    }
}

const galleries = {
    OnamCelebration: [],
    MalayalamMission: [],
    SocialActivities: [],
    CulturalPrograms: [],
    General: [],
    KeralaPiravi: []
};

iteration(galleries.OnamCelebration, "OnamCelebration", 34);
iteration(galleries.MalayalamMission, "MalayalamMission", 22);
iteration(galleries.SocialActivities, "SocialActivities", 20);
iteration(galleries.CulturalPrograms, "CulturalPrograms", 44);
iteration(galleries.General, "General", 19);

// Add mixed content (images + video) manually for Kerala Piravi
galleries.KeralaPiravi = [
    "images/gallery/KeralaPiravi/KeralaPiravi (1).jpg",
    "images/gallery/KeralaPiravi/KeralaPiravi (3).jpg",
    "images/gallery/KeralaPiravi/KeralaPiravi (5).png",
    "images/gallery/KeralaPiravi/KeralaPiravi (4).png",
    "images/gallery/KeralaPiravi/KeralaPiravi (2).mp4",
    "images/gallery/KeralaPiravi/KeralaPiravi (6).png",
];

// Open folder
function openGallery(folder) {
    document.getElementById("folder-section").style.display = "none";
    document.getElementById("gallery-section").style.display = "block";
    document.getElementById("gallery-title").innerHTML = folder.replace(/([A-Z])/g, ' $1');

    const galleryDiv = document.getElementById("gallery");
    galleryDiv.innerHTML = "";

    currentGallery = galleries[folder];

    currentGallery.forEach((item, index) => {
        let element;
        if (item.endsWith(".mp4")) {
            element = document.createElement("video");
            element.src = item;
            element.controls = true;
            element.style.maxWidth = "100%";
            element.style.cursor = "pointer";
            element.onclick = () => openLightbox(index);
        } else {
            element = document.createElement("img");
            element.src = item;
            element.style.maxWidth = "100%";
            element.style.cursor = "pointer";
            element.onclick = () => openLightbox(index);
        }
        galleryDiv.appendChild(element);
    });
}

// Go Back
function goBack() {
    document.getElementById("gallery-section").style.display = "none";
    document.getElementById("folder-section").style.display = "grid";
}

// Open Lightbox
function openLightbox(index) {
    currentIndex = index;
    const lightboxContent = document.getElementById("lightbox-content");
    const currentItem = currentGallery[currentIndex];

    // Clear previous content
    lightboxContent.innerHTML = "";

    let contentElement;
    if (currentItem.endsWith(".mp4")) {
        contentElement = document.createElement("video");
        contentElement.src = currentItem;
        contentElement.controls = true;
        contentElement.autoplay = true;
    } else {
        contentElement = document.createElement("img");
        contentElement.src = currentItem;
    }

    contentElement.style.maxWidth = "90%";
    contentElement.style.maxHeight = "90%";

    lightboxContent.appendChild(contentElement);
    document.getElementById("lightbox").classList.add("show");
}

// Close Lightbox
function closeLightbox() {
    document.getElementById("lightbox").classList.remove("show");
}

// Click outside to close
document.getElementById("lightbox").addEventListener("click", function (event) {
    if (event.target === this) {
        closeLightbox();
    }
});

// Prev/Next controls
function prevImage() {
    currentIndex = (currentIndex - 1 + currentGallery.length) % currentGallery.length;
    openLightbox(currentIndex);
}

function nextImage() {
    currentIndex = (currentIndex + 1) % currentGallery.length;
    openLightbox(currentIndex);
}
