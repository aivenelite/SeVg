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

// Kaçış Fonksiyonu (Ekran sınırları dahilinde)
function moveButton(e) {
    if (e) e.preventDefault();

    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;

    // Ekranın en kenarlarından 30px pay bırakıyoruz ki buton dışarı taşmasın
    const padding = 30;
    const maxX = window.innerWidth - btnWidth - padding;
    const maxY = window.innerHeight - btnHeight - padding;

    // Minimum ve Maksimum arasında rastgele bir yer seç
    const randomX = Math.floor(Math.random() * (maxX - padding)) + padding;
    const randomY = Math.floor(Math.random() * (maxY - padding)) + padding;

    noBtn.style.position = "fixed";
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
    noBtn.style.zIndex = "9999";
    noBtn.style.transform = "none"; // Kaymayı önlemek için transformu sıfırladık
    noBtn.style.transition = "all 0.2s ease-out";
}

noBtn.addEventListener("touchstart", moveButton);
noBtn.addEventListener("mouseover", moveButton);

// YES tıklandığında
yesBtn.addEventListener("click", () => {
    title.textContent = "YAAAAYYY!";
    catImg.src = "cat_dance.gif";
    
    // 1. Butonların olduğu alanı tamamen gizle (Evet burada gider)
    buttons.style.display = "none";
    
    // 2. Eğer Hayır butonu o an ekranın başka yerindeyse onu da gizle
    noBtn.style.display = "none"; 
    
    // 3. Yazıyı göster ve Hilltown yazısının sığması için alanı genişlet
    finalText.style.display = "block";
    win.style.paddingTop = "140px"; // İçeriği yukarı çekerek Hilltown'u gösterir
});
