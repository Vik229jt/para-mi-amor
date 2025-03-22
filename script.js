const garden = document.getElementById('garden');
const submitButton = document.getElementById('submit');
const select = document.getElementById('flowerChoice');
const message = document.getElementById('message');

const petalPositions = [
    { top: '0px', left: '12px' },
    { top: '12px', left: '0px' },
    { top: '12px', left: '24px' },
    { top: '24px', left: '12px' },
];

function createFlower() {
    const flower = document.createElement('div');
    flower.classList.add('flower');

    petalPositions.forEach(pos => {
        const petal = document.createElement('div');
        petal.classList.add('petal');
        petal.style.top = pos.top;
        petal.style.left = pos.left;
        flower.appendChild(petal);
    });

    const center = document.createElement('div');
    center.classList.add('center');
    center.style.top = '17px';
    center.style.left = '17px';
    flower.appendChild(center);

    garden.appendChild(flower);
}

submitButton.addEventListener('click', () => {
    garden.innerHTML = '';
    message.textContent = '';

    const value = select.value;
    let flowerCount = 0;

    if (value === 'ninguna') {
        flowerCount = 1001;
    } else if (value === 'pocas') {
        flowerCount = 2001;
    } else if (value === 'muchas') {
        flowerCount = 5001;
    } else {
        alert('Por favor selecciona una opción.');
        return;
    }

    message.textContent = '¡Te mereces todas las flores del mundo 🌼🌸!';

    let i = 0;
    const interval = setInterval(() => {
        createFlower();
        i++;
        if (i >= flowerCount) {
            clearInterval(interval);
        }
    }, 1); // Velocidad rápida
});
