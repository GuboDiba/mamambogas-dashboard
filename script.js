
// Regestration/Login authetication

function authenticateRegister() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    alert("Username: " + username + "\nPassword: " + password);


 }

//  Humberger Menu
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}



//   to upload image
var dropdown = document.getElementById('veg');
var imageContainer = document.getElementById('imageContainer');
dropdown.addEventListener('change', function() {
    var selectedOption = dropdown.options[dropdown.selectedIndex];
    if (selectedOption.value === 'Fruits') {
        var inputFile = document.createElement('input');
        inputFile.type = 'file';
        inputFile.addEventListener('change', function(event) {
            var file = event.target.files[0];
            var imageUrl = URL.createObjectURL(file);
            imageContainer.innerHTML = '';
            var imageElement = document.createElement('img');
            imageElement.src = imageUrl;
            imageContainer.appendChild(imageElement);
          });
          imageContainer.innerHTML = '';
    imageContainer.appendChild(inputFile);
  } else {
    imageContainer.innerHTML = '';
}
});

// Upload button
// Get references to the upload button and image container
var uploadButton = document.getElementById('uploadButton');
var imageContainer = document.getElementById('imageContainer');

// Event listener for when an image is selected
uploadButton.addEventListener('change', function(event) {
  var file = event.target.files[0];
  var imageUrl = URL.createObjectURL(file);

  // Update the image displayed in the container
  imageContainer.innerHTML = '';
  var imageElement = document.createElement('img');
  imageElement.src = imageUrl;
  imageContainer.appendChild(imageElement);
});


const uploadForm = document.getElementById('uploadForm');
const imageInput = document.getElementById('imageInput');

uploadForm.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent form submission

  const file = imageInput.files[0];
  if (file) {
    const formData = new FormData();
    formData.append('image', file);

    // Send the image to the server using a fetch request
    fetch('/upload', {
      method: 'POST',
      body: formData
    })
      .then((response) => response.text())
      .then((result) => {
        console.log(result); // Display the server response
      })
      .catch((error) => {
        console.error(error);
      });
  }
});