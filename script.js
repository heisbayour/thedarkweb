// Function to show the payment popup
function showPaymentPopup(subscriptionType) {
    document.getElementById('subscription-title').textContent = subscriptionType;
    document.getElementById('subscription-popup').style.display = 'block';
}

// Function to close the payment popup
function closePopup() {
    document.getElementById('subscription-popup').style.display = 'none';
}

// Function to confirm payment
function confirmPayment() {
    alert('Payment confirmed for ' + document.getElementById('subscription-title').textContent + '.');
    closePopup();
}

// Function to check subscription and show alert
function checkSubscription() {
    alert('Please subscribe to a plan to activate this service.');
}

// Close the popup if the user clicks outside of it
window.onclick = function(event) {
    const popup = document.getElementById('subscription-popup');
    if (event.target == popup) {
        popup.style.display = 'none';
    }
}