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

// Kesin Kaçma Fonksiyonu
function moveButton(e) {
    if (e) e.preventDefault();

    const padding = 30; // Kenarlardan güvenli boşluk
    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;
    
    // Ekranın gerçek boyutlarını al
    const screenW = window.innerWidth;
    const screenH = window.innerHeight;

    // Butonun gidebileceği maksimum koordinatları sınırla
    const maxX = screenW - btnWidth - padding;
    const maxY = screenH - btnHeight - padding;

    // Rastgele koordinat üret (En az padding kadar içeride olsun)
    const randomX = Math.max(padding, Math.floor(Math.random() * maxX));
    const randomY = Math.max(padding, Math.floor(Math.random() * maxY));

    // Pozisyonu sabitle ve uygula
    noBtn.style.position = "fixed";
    noBtn.style.left = "0px";
    noBtn.style.top = "0px";
    noBtn.style.zIndex = "9999";
    
    noBtn.style.transition = "transform 0.2s ease-out";
    noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
}

// Olay dinleyicileri
noBtn.addEventListener("touchstart", moveButton);
noBtn.addEventListener("mouseover", moveButton);

// EVET tıklandığında
yesBtn.addEventListener("click", () => {
    title.textContent = "YAAAAYYY!";
    catImg.src = "cat_dance.gif";
    buttons.style.display = "none";
    finalText.style.display = "block";
    
    // Finalde yazıların sığması için padding'i biraz azaltalım
    const win = document.querySelector(".letter-window");
    win.style.paddingTop = "180px";
});
