// Elements
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

// Kaçan Buton Fonksiyonu (Gelişmiş Ekran Kontrolü)
function moveButton(e) {
    if (e) e.preventDefault(); // Mobilde tıklamayı ve sayfa kaymasını engeller

    const padding = 30; // Kenarlardan güvenli mesafe
    
    // Butonun o anki boyutunu al
    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;

    // Ekran boyutlarından butonun boyutunu ve padding'i çıkararak maksimum alanı bul
    const maxX = window.innerWidth - btnWidth - padding;
    const maxY = window.innerHeight - btnHeight - padding;

    // Rastgele ama 0 ile maxX/maxY arasında bir değer oluştur
    // Math.max(padding, ...) kullanarak butonun 0'ın altına (ekranın soluna/üstüne) kaçmasını engelleriz
    const randomX = Math.max(padding, Math.floor(Math.random() * maxX));
    const randomY = Math.max(padding, Math.floor(Math.random() * maxY));

    // Pozisyonu sabitle ve yeni koordinatlara taşı
    noBtn.style.position = "fixed";
    noBtn.style.left = "0";
    noBtn.style.top = "0";
    noBtn.style.zIndex = "1000"; // Üstte kalmasını sağlar
    
    noBtn.style.transition = "transform 0.3s ease-out";
    noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
}

// Hem fare hem dokunmatik ekran için olay dinleyicileri
noBtn.addEventListener("mouseover", moveButton);
noBtn.addEventListener("touchstart", moveButton);

// EVET tıklandığında
yesBtn.addEventListener("click", () => {
    title.textContent = "YAAAAYYY!";
    catImg.src = "cat_dance.gif";
    
    // Mektup penceresine final sınıfı ekle (CSS'deki küçültme efekti için)
    document.querySelector(".letter-window").classList.add("final");
    
    buttons.style.display = "none";
    finalText.style.display = "block";
    
    // Arka planı temiz tutmak için gerekirse tekrar ata
    document.querySelector(".letter-window").style.backgroundImage = "url('window.png')";
});
