// Function to handle the file selection
function handleFileSelect(event) {
    const file = event.target.files[0]; // Get the selected file
  
    if (file) {
      const reader = new FileReader();
  
      reader.onload = function (e) {
        const profileImage = document.getElementById('profile-image');
        profileImage.src = e.target.result; // Set the source of the image to the selected file
      };
  
      reader.readAsDataURL(file); // Read the file as a data URL
    }
  }
  
  // Add event listener to the "Change" button
  const changeImageButton = document.getElementById('change-image-button');
  changeImageButton.addEventListener('click', function () {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*';
    fileInput.addEventListener('change', handleFileSelect);
    fileInput.click(); // Simulate a click on the file input element
  });
  