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

    // Butonun boyutlarını al
    const btnRect = noBtn.getBoundingClientRect();
    const btnWidth = btnRect.width;
    const btnHeight = btnRect.height;

    // Ekran boyutlarını al
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    // Güvenli alan hesapla (butonun boyutu kadar pay bırakıyoruz)
    const maxX = screenWidth - btnWidth;
    const maxY = screenHeight - btnHeight;

    // Rastgele pozisyon (0 ile MaxX/Y arasında)
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    // Stilleri uygula
    noBtn.style.position = "fixed";
    noBtn.style.left = "0";
    noBtn.style.top = "0";
    noBtn.style.zIndex = "9999";
    
    // Translate yerine doğrudan left/top kullanmak mobilde daha garantidir
    noBtn.style.transition = "all 0.2s ease-out";
    noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
}

noBtn.addEventListener("mouseover", moveButton);
noBtn.addEventListener("touchstart", moveButton);

yesBtn.addEventListener("click", () => {
    title.textContent = "YAAAAYYY!";
    catImg.src = "cat_dance.gif";
    document.querySelector(".letter-window").classList.add("final");
    buttons.style.display = "none";
    finalText.style.display = "block";
});
