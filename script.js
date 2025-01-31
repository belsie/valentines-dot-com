var i = 1;

function next() {
    var x = document.getElementById("text");
    if (i == 1) {
        x.innerHTML = `
        <h1>I just wanted to let you know...</h1>
        <button id="loveButton" onclick="next()">...</button>
        `;
        i++;
    } 
    else if (i == 2) {
        x.innerHTML = `
        <h1>I 💖 you!</h1>
        <h4>(yay)</h4>
        <button id="loveButton" onclick="next()">...</button>
        `;
        i++;
    } 
    else if (i == 3) {
        x.innerHTML = `
        <h1>So with that out of the way...</h1>
        <button id="loveButton" onclick="next()">...</button>
        `;
        i++;
    } 
    else if (i == 4) {
        x.innerHTML = `
        <h1>Will you be my valentine? 💖💖💖</h1>
        <div class="button-container">
            <button id="yes" onclick="yes()">Yes!!!!!</button>
            <button id="no" onclick="no()">no</button>
        </div>
        `;
        i++;
    }
}

var noClickCount = 0;
function no() {
    let noButton = document.getElementById("no");
    noClickCount++;

    if (noClickCount >= 5) {
        document.body.innerHTML = "<h1 style='color: white; font-size: 3rem;'>aw :(</h1>"; 
        return; // Stop further execution
    }

    // Generate random positions inside the viewport
    let randomX = Math.random() * (window.innerWidth - 150);
    let randomY = Math.random() * (window.innerHeight - 150);

    // Move the button with a smooth transition
    noButton.style.position = "absolute";
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
    noButton.style.transition = "left 0.2s ease, top 0.2s ease";
}

function yes() {
    document.getElementById("responseMessage").classList.remove("hidden");
    document.querySelector(".button-container").style.display = "none"; // Hide buttons
    startHeartAnimation();

    document.getElementById("valentine-img").src = "kissy_bears.gif"; 
    // Confetti effect
    confetti({
        particleCount: 150,
        spread: 100,
        origin: { y: 0.6 }
    });    
}

function startHeartAnimation() {
    setInterval(() => {
        let heart = document.createElement("div");
        heart.classList.add("floating-heart");
        heart.innerHTML = "🩷";
        document.body.appendChild(heart);

        let startX = Math.random() * window.innerWidth; // Random X position
        let duration = Math.random() * 2 + 3; // Random float duration (3-5 seconds)

        heart.style.left = `${startX}px`;
        heart.style.animation = `floatUp ${duration}s linear forwards`;

        setTimeout(() => {
            heart.remove();
        }, duration * 1000); // Remove after animation completes
    }, 300);
}

