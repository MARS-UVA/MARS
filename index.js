function copyemail() {
    navigator.clipboard.writeText("hoosmininguva@gmail.com");
    icon = document.getElementById('copybutton');
    icon.innerHTML = '<path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/><path d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"/>'
    setTimeout(function () {
        icon.innerHTML = '<path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z" />'
    }, 1000);
}


function showLegalPopup() {
    document.getElementById('legal-popup').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
}

function hideLegalPopup() {
    document.getElementById('legal-popup').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}


async function updateYear() {
    try {
        // Fetch the current date from a public API
        const response = await fetch('https://worldtimeapi.org/api/ip');
        if (!response.ok) {
            throw new Error('Failed to fetch date');
        }
        const data = await response.json();

        // Extract the current year
        const currentYear = new Date(data.datetime).getFullYear();

        // Update the footer's year
        document.getElementById('year').innerText = currentYear;
    } catch (error) {
        console.error('Error updating year:', error);
    }
}

try {
    const backToTopButton = document.getElementById("backToTop");

    window.onscroll = function () {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    };
    
    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
} catch {}


// Call the function on page load
updateYear();