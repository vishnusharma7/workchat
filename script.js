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

// Dark mode feature   dark mode, light mode , system default

  const toggleButton = document.querySelector('.dark-mode-toggle');
  const activeIcons = toggleButton.querySelector('.active');
  const inactiveIcons = toggleButton.querySelector('.not-active');
  const body = document.body;

  toggleButton.addEventListener('click', function () {
      if (inactiveIcons.style.display === 'none') {
          inactiveIcons.style.display = 'flex';
      } else {
          inactiveIcons.style.display = 'none';
      }
  });

  const notActiveIcons = document.querySelectorAll('.not-active > div');

  notActiveIcons.forEach(function (icon) {
      icon.addEventListener('click', function () {
          const selectedIcon = icon.querySelector('svg');
          const activeIcon = activeIcons.querySelector('.active-theme > svg');
          activeIcon.replaceWith(selectedIcon.cloneNode(true));
          inactiveIcons.style.display = 'none';
          if (icon.classList.contains('light-theme')) {
              body.classList.remove('dark');
          } else if (icon.classList.contains('system-default')) {
              if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                  body.classList.add('dark');
              } else {
                  body.classList.remove('dark');
              }
          } else {
              body.classList.add('dark');
          }
      });
  });
  

  document.addEventListener('click', function (event) {
      if (!toggleButton.contains(event.target)) {
          inactiveIcons.style.display = 'none';
      }
  });





  
