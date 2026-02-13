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

// Kesin Kaçış Fonksiyonu (Yüzde bazlı hapis)
function moveButton(e) {
    if (e) e.preventDefault();

    // Butonun gidebileceği alanı %15 ile %85 arası kısıtlıyoruz
    // Bu sayede butonun yarısı bile ekran dışına çıkamaz
    const randomX = Math.floor(Math.random() * 70) + 15; 
    const randomY = Math.floor(Math.random() * 70) + 15; 

    noBtn.style.position = "fixed";
    noBtn.style.zIndex = "9999";
    noBtn.style.left = randomX + "%";
    noBtn.style.top = randomY + "%";
    
    // Çakışmaları önlemek için transformu sıfırlıyoruz
    noBtn.style.transform = "translate(-50%, -50%)"; 
    noBtn.style.transition = "all 0.2s ease-out";
}

noBtn.addEventListener("touchstart", moveButton);
noBtn.addEventListener("mouseover", moveButton);

// YES tıklandığında
yesBtn.addEventListener("click", () => {
    title.textContent = "YAAAAYYY!";
    catImg.src = "cat_dance.gif";
    buttons.style.display = "none";
    finalText.style.display = "block";
    
    // YAAAAYYY yazısını ve içeriği finalde biraz daha aşağı alıyoruz
    const win = document.querySelector(".letter-window");
    win.style.paddingTop = "260px"; 
});
