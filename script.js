body {
    margin: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url("heart-bg.jpg");
    background-size: cover;
    background-position: center;
    font-family: "Pixelify Sans", sans-serif;
    overflow: hidden; 
    position: fixed;
    touch-action: none;
}

#envelope-container {
    text-align: center;
    cursor: pointer;
}

#envelope {
    width: 150px;
    animation: pulse 1.5s infinite;
}

@keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.1); }
    100% { transform: scale(1); }
}

#letter-container {
    display: none;
    position: fixed;
    inset: 0;
    justify-content: center;
    align-items: center;
    z-index: 20;
}

.letter-window {
    /* BOYUTLARI SABİTLEDİK */
    width: 380px; 
    height: 520px;
    padding: 240px 20px 40px 20px; 
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    text-align: center;
    background-image: url("window.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center;
    /* Transition sadece transform ve opacity için, boyutlar oynamaz */
    transition: transform 0.6s ease, opacity 0.6s ease;
    transform: scale(0.8);
    opacity: 0;
    box-sizing: border-box;
}

.letter-window.open {
    transform: scale(1);
    opacity: 1;
}

h1 {
    font-size: 22px;
    margin: 5px 0;
}

.cat {
    width: 120px;
    height: auto;
    margin: 10px 0;
}

/* BUTONLARIN KAYMASINI ENGELLEYEN GRID */
.buttons {
    display: grid;
    grid-template-columns: 1fr 1fr; /* İki eşit sütun */
    gap: 20px;
    width: 200px; /* Sabit genişlik */
    margin-top: 15px;
    position: relative;
    justify-items: center;
    align-items: center;
}

.btn {
    width: 85px;
    height: auto;
}

.no-wrapper {
    width: 85px;
    height: 45px;
    position: relative;
}

.no-btn {
    transition: none; /* JS tarafından yönetilecek */
}

.final-text {
    font-size: 16px;
    line-height: 1.5;
    padding: 10px;
    background-color: rgba(255, 255, 255, 0.6);
    border-radius: 10px;
    margin-top: 15px;
}
