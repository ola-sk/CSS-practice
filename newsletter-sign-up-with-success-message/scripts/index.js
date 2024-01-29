// Submit form on keypress with `Enter` key
const formInputs = document.querySelectorAll('article form > input');
// Show Confirmation Message on Form Submit
const form = document.querySelector('article form');
formInputs.forEach(input =>
    input.addEventListener('keydown', e => {
    if(e.key === 'Enter') {
        formSubmission(e);
    }
}));
form.addEventListener('submit', e => {
    e.preventDefault();
    formSubmission(e);
});

// Dismiss Confirmation Message
const dismissButton = document.querySelector('aside.confirmation-message button.dismiss-confirmation-message');
dismissButton.addEventListener('click', e => {
    e.preventDefault();
    dismissConfirmationMessage();
});
dismissButton.addEventListener('keydown', e => {
    if(e.key === "Enter" || e.key === "Esc") {
        e.preventDefault();
        dismissConfirmationMessage();
    }
});


//Function Definitions
function showConfirmationMessage(emailSubscribed) {
    const confirmationMessage = document.querySelector('aside.confirmation-message');
    const emailDisplay = confirmationMessage.querySelector('span#email-subscribed');
    if (emailDisplay.innerText) { emailDisplay.innerText = emailSubscribed; }
    else if (emailDisplay.textContent) { emailDisplay.textContent = emailSubscribed; }
    confirmationMessage.classList.add('visible');

}

function dismissConfirmationMessage() {
    const confirmationMessage = document.querySelector('aside.confirmation-message');
    confirmationMessage.classList.remove('visible');

}
function simulateServerResponse (userEmail){
    // Generate current date and time in RFC 2822 format (e.g., "Wed, 02 Feb 2024 12:00:00 GMT")
    const currentDate = new Date().toUTCString();

    // Convert the response message object to JSON string
    const jsonResponseBody = JSON.stringify({
        "status": "success",
        "user_email": userEmail,
        "message": "Domain verified. MX server responded. Verification email sent."
    });

    // Create response headers
    const responseHeaders = new Headers();
    responseHeaders.append("Content-Type", "application/json");
    responseHeaders.append("Date", currentDate); // Include Date header with current date and time


    // Construct the response object with headers and status code
    const response = new Response(jsonResponseBody, {
        status: 200,
        statusText: 'OK',
        headers: responseHeaders
    });
    return new Promise((resolve) => {
        setTimeout(() => resolve(response), 2000);
    });
}
function formSubmission(e) {
    if (!form.checkValidity()) {
        // !!! Prevent default form submission if form is invalid
        e.preventDefault();
        // Display validation error messages
        form.reportValidity();
    } else {
        const email = form.querySelector('input[type="email"]#subscribers-email');
        const submitButton = form.querySelector('input[type="submit"]');
        submitButton.disabled = true;
        submitButton.classList.add('inactive-btn');
        simulateServerResponse(email.value)
            .then(response => {
                const dateHeader = response.headers.get('Date');
                console.log('Date:', dateHeader, "; status: ", response.status, response.statusText);
                return response.json();
            })
            .then(data => {
                showConfirmationMessage(data.user_email);
                dismissButton.focus();
                email.value = "";
            })
            .catch(error => {
                // Also: display an error box for the user and ask to fill the form again.
                email.value = "";
            })
            .finally(() => {
                submitButton.disabled = false;
                submitButton.classList.remove('inactive-btn');
            });
    }
}