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

// %100 Kaçış Garantili Fonksiyon
function moveButton(e) {
    if (e) e.preventDefault();

    // Güvenlik Payı: Ekranın kenarlarından 60 piksel içeriye hapseder
    const margin = 60; 
    
    // Anlık ekran boyutları
    const screenW = window.innerWidth;
    const screenH = window.innerHeight;

    // Buton boyutları
    const btnW = noBtn.offsetWidth;
    const btnH = noBtn.offsetHeight;

    // Maksimum gidebileceği koordinat (Kenar boşluklarını ve buton boyutunu çıkarıyoruz)
    const maxX = screenW - btnW - margin;
    const maxY = screenH - btnH - margin;

    // Koordinatları üret (minimum değer her zaman 'margin' kadar içeride olur)
    const randomX = Math.floor(Math.random() * (maxX - margin)) + margin;
    const randomY = Math.floor(Math.random() * (maxY - margin)) + margin;

    // Pozisyonu zorla uygula
    noBtn.style.position = "fixed";
    noBtn.style.left = "0px";
    noBtn.style.top = "0px";
    
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
    
    // "YAAAAYYY" ve içeriği daha da aşağı indirmek için padding'i artır
    const windowEl = document.querySelector(".letter-window");
    windowEl.style.paddingTop = "260px"; // Burası yazıları aşağı çeker
});
