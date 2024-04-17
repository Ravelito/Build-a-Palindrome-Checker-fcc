document.getElementById('check-btn').addEventListener('click', function() {
    var input = document.getElementById('text-input').value.trim();
    var resultElement = document.getElementById('result');
    
    if (input === "") {
        alert("Please input a value");
        return;
    }
    
    // Remove non-alphanumeric characters and spaces
    var cleanInput = input.replace(/[^A-Za-z0-9]/g, '');
    
    var reversedInput = cleanInput.split('').reverse().join('');
    
    if (cleanInput.toLowerCase() === reversedInput.toLowerCase()) {
        resultElement.textContent = input + " is a palindrome";
    } else {
        resultElement.textContent = input + " is not a palindrome";
    }
});
