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

// Kesin Kaçma Fonksiyonu (Yüzde Bazlı Mantık)
function moveButton(e) {
    if (e) e.preventDefault();

    // Butonu wrapper'dan koparıp doğrudan body'ye veya ekranın en üst katmanına sabitle
    noBtn.style.position = "fixed";
    noBtn.style.zIndex = "9999";
    noBtn.style.margin = "0"; // Varsa dış boşlukları sıfırla

    // Butonun kapladığı alanı ekranın yüzdesi olarak hesaplayalım (Güvenli kaçış)
    // Genişlik ve yükseklik için %15-20 gibi bir pay bırakıyoruz ki kenara yapışmasın
    const randomX = Math.floor(Math.random() * 70) + 10; // %10 ile %80 arası
    const randomY = Math.floor(Math.random() * 70) + 10; // %10 ile %80 arası

    // Koordinatları ekrana uygula
    noBtn.style.left = randomX + "%";
    noBtn.style.top = randomY + "%";
    
    // Transform'u temizle (çünkü artık left/top ile hareket ediyor)
    noBtn.style.transform = "none"; 
    noBtn.style.transition = "all 0.2s ease-out";
}

// Mobilde hem dokunma hem üstüne gelme için
noBtn.addEventListener("touchstart", moveButton, {passive: false});
noBtn.addEventListener("mouseover", moveButton);

// EVET tıklandığında
yesBtn.addEventListener("click", () => {
    title.textContent = "YAAAAYYY!";
    catImg.src = "cat_dance.gif";
    buttons.style.display = "none";
    finalText.style.display = "block";
    
    // Yazıları aşağı çekmek için padding ayarı
    const windowEl = document.querySelector(".letter-window");
    windowEl.style.paddingTop = "200px"; // Daha fazla aşağı almak için 200px yaptık
    windowEl.style.justifyContent = "flex-start";
});
