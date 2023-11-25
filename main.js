// app.js

// Function to handle form submission
function handleAdoptionFormSubmission(event) {
    event.preventDefault(); // Prevent the form from submitting
    const formData = new FormData(event.target);
    const petName = formData.get('petName');
    const adopterName = formData.get('adopterName');
    
    // You can perform further actions with the form data here, like sending it to the server for processing.
    
    // For this example, display a simple alert message
    alert(`Thank you, ${adopterName}! You've applied to adopt ${petName}. We'll be in touch soon.`);
}

// Attach the form submission handler to the adoption form
const adoptionForm = document.querySelector('#adoption-form');
adoptionForm.addEventListener('submit', handleAdoptionFormSubmission);
