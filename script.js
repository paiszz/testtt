let selectedCard = "";

function selectCard(cardUrl) {
    selectedCard = cardUrl;
    alert("Kartu dipilih!");
}

function generateCard() {
    const message = document.getElementById("message").value;
    if (!selectedCard || !message) {
        alert("Pilih kartu dan tulis pesan terlebih dahulu!");
        return;
    }

    const resultDiv = document.getElementById("result");
    const cardOutput = document.getElementById("card-output");

    cardOutput.innerHTML = `
        <img src="${selectedCard}" alt="Kartu Valentine" style="width: 200px; display: block; margin: auto;">
        <p style="margin-top: 10px;">"${message}"</p>
    `;

    resultDiv.classList.remove("hidden");
}

function downloadCard() {
    alert("Fitur download masih dalam pengembangan!");
}
