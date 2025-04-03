// Initialize products array
const products = [
    {
        id: 1,
        name: 'मिक्स नमकीन',
        description: 'स्वादिष्ट मिक्स नमकीन, मसालेदार और कुरकुरा',
        price: 150,
        image: 'assets/AdobeStock_851229677_Preview.jpeg'
    },
    {
        id: 2,
        name: 'कपूरे',
        description: 'स्वादिष्ट और कुरकुरे कपूरे',
        price: 120,
        image: 'assets/AdobeStock_208390468_Preview.jpeg'
    },
    {
        id: 3,
        name: 'चकली नमकीन',
        description: 'पारंपरिक स्वाद वाली चकली',
        price: 180,
        image: 'assets/AdobeStock_223538883_Preview.jpeg'
    }
];

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Wrap neon text letters in spans
    const neonText = document.querySelector('.neon-text');
    if (neonText) {
        const text = neonText.textContent;
        neonText.textContent = '';
        [...text].forEach((letter, index) => {
            const span = document.createElement('span');
            span.textContent = letter;
            span.style.setProperty('--letter-index', index);
            neonText.appendChild(span);
        });
    }

    // Call Now button functionality
    const callNowBtn = document.querySelector('.call-now');
    if (callNowBtn) {
        callNowBtn.addEventListener('click', function() {
            window.location.href = 'tel:9039356822';
        });
    }
});