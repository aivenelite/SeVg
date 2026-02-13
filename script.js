const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".yes-btn");
const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");
const win = document.querySelector(".letter-window");

envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    letter.style.display = "flex";
    setTimeout(() => {
        win.classList.add("open");
    }, 50);
});

function moveButton(e) {
    if (e) e.preventDefault();

    // Ekranın tamamına değil, sadece görünür alanın içine kaçsın
    // Mobilde parmak altına gelmemesi için değerleri daralttık
    const maxX = window.innerWidth - noBtn.offsetWidth;
    const maxY = window.innerHeight - noBtn.offsetHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noBtn.style.position = "fixed";
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
    noBtn.style.zIndex = "1000";
    // Transition ekleyerek yumuşak kaçmasını sağladık
    noBtn.style.transition = "all 0.3s ease";
}

noBtn.addEventListener("touchstart", moveButton);
noBtn.addEventListener("mouseover", moveButton);

yesBtn.addEventListener("click", () => {
    title.textContent = "YAAAAYYY!";
    catImg.src = "cat_dance.gif";
    
    // Hayır butonunu tamamen yok et, Evet'i ortala
    buttons.innerHTML = ''; 
    buttons.appendChild(yesBtn);
    
    finalText.style.display = "block";
    
    // Mobilde Hilltown yazısının sığması için padding'i dinamik azaltıyoruz
    win.style.paddingTop = "140px";
    win.style.justifyContent = "center";
});
