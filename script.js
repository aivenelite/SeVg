const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".yes-btn");
const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");
const win = document.querySelector(".letter-window");

// Zarfı Açma
envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    letter.style.display = "flex";
    setTimeout(() => {
        win.classList.add("open");
    }, 50);
});

// Kaçış Fonksiyonu
function moveButton(e) {
    if (e) e.preventDefault();

    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;

    // Ekran sınırlarından 20px içeride kalmasını sağlıyoruz (Güvenli Alan)
    const maxX = window.innerWidth - btnWidth - 20;
    const maxY = window.innerHeight - btnHeight - 20;

    // Minimum 20px'den başlatıyoruz ki sol/üst köşeye yapışmasın
    const randomX = Math.max(20, Math.floor(Math.random() * maxX));
    const randomY = Math.max(20, Math.floor(Math.random() * maxY));

    noBtn.style.position = "fixed";
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
    noBtn.style.margin = "0"; // Kaymaları önlemek için margin sıfırla
    noBtn.style.transition = "all 0.2s ease-out";
}

noBtn.addEventListener("touchstart", moveButton);
noBtn.addEventListener("mouseover", moveButton);

// YES tıklandığında
yesBtn.addEventListener("click", () => {
    title.textContent = "YAAAAYYY!";
    catImg.src = "cat_dance.gif";
    
    // Hayır butonunu tamamen siliyoruz (Wrapper ile birlikte)
    const noWrapper = document.querySelector(".no-wrapper");
    if(noWrapper) noWrapper.remove();
    noBtn.remove(); 

    // Evet butonu ortada kalmaya devam eder, altındaki yazı açılır
    finalText.style.display = "block";
    
    // Final görünümü için pencere ayarı
    win.style.paddingTop = "150px"; 
});
