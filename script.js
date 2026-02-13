const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".yes-btn");
const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");

envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    letter.style.display = "flex";
    setTimeout(() => {
        document.querySelector(".letter-window").classList.add("open");
    }, 50);
});

function moveButton(e) {
    if (e) e.preventDefault();

    // Ekranın %15 ile %85 arası güvenli alanı
    const randomX = Math.floor(Math.random() * 70) + 15; 
    const randomY = Math.floor(Math.random() * 70) + 15; 

    noBtn.style.position = "fixed";
    noBtn.style.zIndex = "9999";
    noBtn.style.left = randomX + "%";
    noBtn.style.top = randomY + "%";
    noBtn.style.transform = "translate(-50%, -50%)";
    // Sadece koordinat değişsin, başka hiçbir şey etkilenmesin
    noBtn.style.transition = "left 0.2s ease-out, top 0.2s ease-out";
}

noBtn.addEventListener("touchstart", moveButton);
noBtn.addEventListener("mouseover", moveButton);

yesBtn.addEventListener("click", () => {
    title.textContent = "YAAAAYYY!";
    catImg.src = "cat_dance.gif";
    buttons.style.display = "none";
    finalText.style.display = "block";
    
    // YAAAAYYY yazısını aşağı çekiyoruz
    const win = document.querySelector(".letter-window");
    win.style.paddingTop = "280px"; 
});
