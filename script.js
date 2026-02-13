const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".yes-btn");
const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");

// Zarfı Açma
envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    letter.style.display = "flex";
    setTimeout(() => {
        document.querySelector(".letter-window").classList.add("open");
    }, 50);
});

// Kaçan Buton Fonksiyonu
function moveButton() {
    // Ekran sınırlarını kontrol ederek kaçmasını sağlarız
    const padding = 50;
    const maxX = window.innerWidth - noBtn.offsetWidth - padding;
    const maxY = window.innerHeight - noBtn.offsetHeight - padding;

    // Rastgele bir pozisyon (ekranın içinde kalacak şekilde)
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    // Mutlak pozisyona geçiş (eğer henüz geçmediyse)
    noBtn.style.position = "fixed";
    noBtn.style.left = "0";
    noBtn.style.top = "0";
    
    noBtn.style.transition = "transform 0.3s ease";
    noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
}

// Hem fare hem dokunmatik ekran için
noBtn.addEventListener("mouseover", moveButton);
noBtn.addEventListener("touchstart", (e) => {
    e.preventDefault(); // Tıklanmasını tamamen engeller
    moveButton();
});

// EVET tıklandığında
yesBtn.addEventListener("click", () => {
    title.textContent = "YAAAAYYY!";
    catImg.src = "cat_dance.gif";
    buttons.style.display = "none";
    finalText.style.display = "block";
    document.querySelector(".letter-window").style.backgroundImage = "url('window.png')"; // Opsiyonel: Arka planı temiz tutar
});
