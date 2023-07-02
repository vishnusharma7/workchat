const workDetail = document.querySelector('.work-detail');
const popupContainer = document.querySelector('.workspace-detail');
const cancelButton = document.querySelector('.button[data-action="cancel"]');
const dimmedBackground = document.createElement('div');
dimmedBackground.classList.add('dimmed-background');

// Show the popup and dim the background when work-detail is clicked
workDetail.addEventListener('click', () => {
    popupContainer.style.display = 'block';
    document.body.appendChild(dimmedBackground);
});

// Hide the popup 
function hidePopup() {
    popupContainer.style.display = 'none';
    document.body.removeChild(dimmedBackground);
}

//when clicked outside
window.addEventListener('click', (event) => {
    if (event.target !== workDetail && !popupContainer.contains(event.target)) {
        hidePopup();
    }
});

// Hide  when the escape key is pressed
window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        hidePopup();
    }
});
//hide when click button clicked
cancelButton.addEventListener('click', () => {
    hidePopup();
});
