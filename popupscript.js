// Get the elements
const workDetail = document.querySelector('.work-detail');
const popupContainer = document.querySelector('.popup-container');
const dimmedBackground = document.createElement('div');
dimmedBackground.classList.add('dimmed-background');

// Show the popup and dim the background when work-detail is clicked
workDetail.addEventListener('click', () => {
    popupContainer.style.display = 'block';
    document.body.appendChild(dimmedBackground);
});

// Hide the popup and remove the dimmed background
function hidePopup() {
    popupContainer.style.display = 'none';
    document.body.removeChild(dimmedBackground);
}

// Hide the popup and remove the dimmed background when clicked outside
window.addEventListener('click', (event) => {
    if (event.target !== workDetail && !popupContainer.contains(event.target)) {
        hidePopup();
    }
});

// Hide the popup and remove the dimmed background when the escape key is pressed
window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        hidePopup();
    }
});
