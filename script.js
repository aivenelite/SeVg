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
    const randomX = Math.floor(Math.random() * 70) + 15; 
    const randomY = Math.floor(Math.random() * 70) + 15; 

    noBtn.style.position = "fixed";
    noBtn.style.zIndex = "9999";
    noBtn.style.left = randomX + "%";
    noBtn.style.top = randomY + "%";
    noBtn.style.transform = "translate(-50%, -50%)";
    noBtn.style.transition = "left 0.2s ease-out, top 0.2s ease-out";
}

noBtn.addEventListener("touchstart", moveButton);
noBtn.addEventListener("mouseover", moveButton);

yesBtn.addEventListener("click", () => {
    title.textContent = "YAAAAYYY!";
    catImg.src = "cat_dance.gif"; // Eğer bu dosya yoksa resim gitmez, adının doğru olduğundan emin ol
    buttons.style.display = "none";
    finalText.style.display = "block";
    
    // Final yazısının (Hilltown) gözükmesi için alanı yukarı kaydırıyoruz
    const win = document.querySelector(".letter-window");
    win.style.paddingTop = "180px"; 
});
