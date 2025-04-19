 
        const readMoreBtnDefault = document.getElementById('readMoreBtnDefault');
        const readMoreBtn2 = document.getElementById('readMoreBtn');
        readMoreBtn2.style.display='none';
        const fullText = document.getElementById('fullText');
        const initialText = fullText.innerHTML; // Store the original text
        const truncatedText = initialText.substring(0, 350); // Limit the initial text to 300 characters
    
        // Set the initial truncated text for mobile
        fullText.innerHTML = truncatedText +"..." ;

        // Only show the "Read More" button on mobile screens
        function checkScreenSize() {
            if (window.innerWidth <= 600) { // Mobile screen (you can adjust this value)
                readMoreBtnDefault.style.display = 'inline-block'; // Show button
            } else {
                readMoreBtnDefault.style.display = 'none'; // Hide button on larger screens
                fullText.innerHTML = initialText; // Show full text on larger screens
            }
        }

        // Initialize the screen size check
        checkScreenSize();

        // Event listener for the "Read More" button
        readMoreBtnDefault.addEventListener('click', function () {
            if (fullText.innerHTML === truncatedText +"...") {
                fullText.innerHTML = initialText; // Show full text
                readMoreBtnDefault.innerHTML = 'Read Less'; // Change button text
                console.log("Og one clicked")
            } else {
                fullText.innerHTML = truncatedText +"...";
                +"<button class=''>Read More</button>" // Show truncated text
                readMoreBtnDefault.innerHTML = 'Read More'; // Change button text
            }
        });

        
        // Check screen size on resize
        window.addEventListener('resize', checkScreenSize);