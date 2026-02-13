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

// Kesin Ekran Sınırları İçinde Kaçma Fonksiyonu
function moveButton(e) {
    if (e) e.preventDefault();

    const padding = 25; // Kenarlardan güvenli mesafe
    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;

    // Ekranın o anki boyutlarını al
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    // Maksimum gidebileceği yer (Ekran - Buton Boyutu - Padding)
    const maxX = screenWidth - btnWidth - padding;
    const maxY = screenHeight - btnHeight - padding;

    // Rastgele koordinat (Padding ile Max arasını zorunlu tutar)
    const randomX = Math.max(padding, Math.floor(Math.random() * maxX));
    const randomY = Math.max(padding, Math.floor(Math.random() * maxY));

    // Butonu ekrana göre sabitle ve ışınla
    noBtn.style.position = "fixed";
    noBtn.style.left = "0";
    noBtn.style.top = "0";
    noBtn.style.transition = "transform 0.2s ease-out";
    noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
}

noBtn.addEventListener("touchstart", moveButton);
noBtn.addEventListener("mouseover", moveButton);

// EVET tıklandığında
yesBtn.addEventListener("click", () => {
    title.textContent = "YAAAAYYY!";
    catImg.src = "cat_dance.gif";
    buttons.style.display = "none";
    finalText.style.display = "block";
    
    // Mektup içindeki boşluğu final metnine göre ayarla
    document.querySelector(".letter-window").style.paddingTop = "120px";
});
