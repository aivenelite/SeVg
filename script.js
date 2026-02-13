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

// Hayır Butonu Kaçış Fonksiyonu
function moveButton(e) {
    if (e) e.preventDefault();

    // Butonun boyutlarını al
    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;

    // Ekranın %10 ve %80'i arasında güvenli bir alanda gezinsin
    // Bu sayede ne en üste ne de en sağa yapışır
    const randomX = Math.floor(Math.random() * 70) + 10; 
    const randomY = Math.floor(Math.random() * 70) + 15; 

    noBtn.style.position = "fixed";
    noBtn.style.zIndex = "9999";
    noBtn.style.left = randomX + "%";
    noBtn.style.top = randomY + "%";
    noBtn.style.transform = "translate(-50%, -50%)"; // Tam ortalı kaçış
    noBtn.style.transition = "all 0.2s ease-out";
}

noBtn.addEventListener("touchstart", moveButton);
noBtn.addEventListener("mouseover", moveButton);

// YES tıklandığında
yesBtn.addEventListener("click", () => {
    title.textContent = "YAAAAYYY!";
    catImg.src = "cat_dance.gif";
    
    // BUTONLARI GİZLE: Tüm buton konteynırını kapatıyoruz
    buttons.style.display = "none";
    // Eğer Hayır butonu fixed olarak ekranın başka yerindeyse onu da siliyoruz
    noBtn.style.display = "none"; 
    
    // Yazıyı Göster
    finalText.style.display = "block";
    
    // İçeriği biraz daha yukarı çekerek Hilltown yazısını tam sığdırıyoruz
    win.style.paddingTop = "140px";
});
