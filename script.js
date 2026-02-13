const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".yes-btn");
const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");
const win = document.querySelector(".letter-window");

// Zarf Açma
envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    letter.style.display = "flex";
    setTimeout(() => {
        win.classList.add("open");
    }, 50);
});

// Hayır Butonu Kaçış (Ekran dışına asla çıkmaz)
function moveButton(e) {
    if (e) e.preventDefault();

    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;

    // Ekranın iç sınırlarını hesapla (Güvenli Alan: 20px içeriden)
    const maxX = window.innerWidth - btnWidth - 20;
    const maxY = window.innerHeight - btnHeight - 20;

    // 20px'den başlayan rastgele koordinat
    const randomX = Math.max(20, Math.floor(Math.random() * maxX));
    const randomY = Math.max(20, Math.floor(Math.random() * maxY));

    // Butonu ekranda rastgele yere sabitle
    noBtn.style.position = "fixed";
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
    noBtn.style.margin = "0";
    noBtn.style.zIndex = "1000";
    noBtn.style.transition = "all 0.2s ease-out";
}

noBtn.addEventListener("touchstart", moveButton);
noBtn.addEventListener("mouseover", moveButton);

// YES Tıklanma Olayı
yesBtn.addEventListener("click", () => {
    // 1. Yazıyı ve Kediyi Değiştir
    title.textContent = "YAAAAYYY!";
    catImg.src = "cat_dance.gif";
    
    // 2. Butonları KÖKTEN SİL (Hem Evet hem Hayır gider)
    if (buttons) buttons.remove(); 
    if (noBtn) noBtn.remove();     

    // 3. Final Metnini Göster
    finalText.style.display = "block";
    
    // 4. Hilltown yazısı için pencere ayarı (YAAY yazısı aşağıda kalsın diye 140px)
    win.style.paddingTop = "140px";
});
