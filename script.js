function generateRandomNumber() {
    var randomNumber = Math.floor(Math.random() * 50) + 1; // Gera um número aleatório entre 1 e 100
    document.getElementById('output').innerText = randomNumber;
}

