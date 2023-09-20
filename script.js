function Functions() {
    var number = document.getElementById('num').value;
    var result = number % 2;
    var string, prime;
    
    if (number >= 0) {
        document.getElementById('error').innerText = "";
        
        
        if (result == 0) {
            string = "Even";
        } else {
            string = "Odd";
        }
        var values = 1;
        for (var i = 1; i <= number; i++) {
            values *= i;
        }
        document.getElementById('Fac').innerText = values;
        
        if (number <= 1) {
            prime = "Not Prime";
        } else {
            prime = isPrime(number) ? "Prime" : "Not Prime";
        }
        
        document.getElementById('EO').innerText = string;
        document.getElementById('Pri').innerText = prime;
        document.getElementById('tab').style.display = 'block';
    } else {
        document.getElementById('error').innerText = "Enter a positive number!";
    }
}

function isPrime(n) {
    if (n <= 1) {
        return false;
    }
    for (var i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

function reset() {
    document.getElementById('num').value = "";
    document.getElementById('error').innerText = "";
    document.getElementById('tab').style.display = 'none';
}
