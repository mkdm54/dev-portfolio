const canvas = document.getElementById("particleCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];
const mouse = { x: null, y: null, radius: 150 };

window.addEventListener("mousemove", (event) => {
    mouse.x = event.x;
    mouse.y = event.y;
});

window.addEventListener("mouseout", () => {
    mouse.x = null;
    mouse.y = null;
});

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initParticles();
});

class Particle {
    constructor(x, y, size, speedX, speedY) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.speedX = speedX;
        this.speedY = speedY;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
        if (this.y > canvas.height || this.y < 0) this.speedY *= -1;
    }

    draw() {
        ctx.fillStyle = "rgb(255, 255, 255)";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function initParticles() {
    particles.length = 0;
    for (let i = 0; i < 100; i++) {
        let size = Math.random() * 2 + 1;
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        let speedX = (Math.random() - 0.5) * 1.5;
        let speedY = (Math.random() - 0.5) * 1.5;
        particles.push(new Particle(x, y, size, speedX, speedY));
    }
}

function drawLines() {
    for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
            let dx = particles[i].x - particles[j].x;
            let dy = particles[i].y - particles[j].y;
            let distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 100) {
                ctx.strokeStyle = `rgba(255, 255, 225, ${1 - distance / 100})`; // Warna Cyan
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);
                ctx.stroke();
            }
        }

        // Hubungkan partikel dengan mouse jika dekat
        if (mouse.x !== null && mouse.y !== null) {
            let dx = particles[i].x - mouse.x;
            let dy = particles[i].y - mouse.y;
            let distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < mouse.radius) {
                ctx.strokeStyle = `rgba(255, 255, 255, ${1 - distance / mouse.radius})`; // Warna Kuning
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(mouse.x, mouse.y);
                ctx.stroke();
            }
        }
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let particle of particles) {
        particle.update();
        particle.draw();
    }

    drawLines();
    requestAnimationFrame(animate);
}

initParticles();
animate();


const display = document.getElementById('display-the-result');
const historyDisplay = document.getElementById('history-display');
let historyEquation = "";

const appendToDisplay = (input) => {
    const operators = ['+', '-', '*', '/'];

    if (operators.includes(input)) {
        // Jika sebelumnya ada angka, pindahkan ke history
        if (display.value !== "") {
            historyEquation = display.value + " " + input;
            historyDisplay.value = historyEquation; // Menampilkan ke input history
            display.value = ""; // Kosongkan display utama
        }
    } else {
        display.value += input;
    }
};

const clearDisplay = () => {
    display.value = '';
    historyDisplay.value = '';
    historyEquation = '';
};

const calculate = () => {
    const alertBox = document.getElementById('alert-message');
    const lastChar = display.value.slice(-1);
    const operators = ['+', '-', '*', '/'];

    if (display.value.trim() === '') {
        alertBox.classList.remove('default');
        alertBox.innerHTML = "<h3>Masukkan angka terlebih dahulu</h3>";
        alertBox.classList.add('active');
        setTimeout(() => {
            alertBox.classList.add('default');
        }, 3000);
        return;
    }

    if (operators.includes(lastChar)) {
        alertBox.classList.remove('default');
        alertBox.innerHTML = "<h3>Input tidak valid!</h3>";
        alertBox.classList.add('active');
        setTimeout(() => {
            alertBox.classList.add('default');
        }, 3000);
        return;
    }

    try {
        let result = eval(historyEquation + " " + display.value); // Hitung hasil
        historyEquation += " " + display.value + " ="; // Update history
        historyDisplay.value = historyEquation; // Tampilkan history di input
        display.value = result; // Tampilkan hasil di display utama
    } catch (e) {
        alertBox.classList.remove('default');
        alertBox.innerHTML = "<h3>Input tidak valid!</h3>";
        setTimeout(() => {
            alertBox.classList.add('default');
        }, 3000);
    }
};

function backspace() {
    display.value = display.value.slice(0, -1);
}

function toggleSign() {
    if (display.value !== '') {
        display.value = String(-1 * parseFloat(display.value));
    }
}

function calculatePercentage() {
    if (display.value !== '') {
        display.value = String(parseFloat(display.value) / 100);
    }
}
