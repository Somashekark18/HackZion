

let navbar = document.querySelector('.navbar'); 
document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    loginForm.classList.remove('active');

}
let loginForm = document.querySelector('.login-form'); 
document.querySelector('#login-btn').onclick = () => {
    loginForm.classList.toggle('active');
    navbar.classList.remove('active');
}

window.onscroll = () => {
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}
// JavaScript to handle form submission and retrieve data
document.getElementById('retrieveForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const personID = document.getElementById('personID').value;
  
    // Send a GET request to PHP script to retrieve data for the given person ID
    fetch(`retrieve_data.php?personID=${personID}`)
    .then(response => response.json())
    .then(data => {
      // Display retrieved data
      const personDataDiv = document.getElementById('personData');
      personDataDiv.innerHTML = JSON.stringify(data, null, 2); // Display JSON data, format it nicely
    })
    .catch(error => console.error('Error:', error));
  });
  var swiper = new Swiper(".product-slider", {
    loop: true,
    spaceBetween: 20,
    autoplay: {
        delay: 3000,
        disableOnInteraction: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1020: {
            slidesPerView: 3,
        },
    },
    speed: 1000, 
});
