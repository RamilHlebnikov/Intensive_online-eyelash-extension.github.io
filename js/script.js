// JavaScript для работы бургер-меню и снега
document.addEventListener('DOMContentLoaded', function() {
    // ====================== БУРГЕР-МЕНЮ ======================
    const burgerMenu = document.getElementById('burgerMenu');
    const nav = document.querySelector('.nav');
    
    if (burgerMenu && nav) {
        burgerMenu.addEventListener('click', function() {
            this.classList.toggle('active');
            nav.classList.toggle('active');
            document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
        });
        
        const navItems = document.querySelectorAll('.nav__item');
        navItems.forEach(item => {
            item.addEventListener('click', function() {
                burgerMenu.classList.remove('active');
                nav.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }

    // ====================== ТАРИФЫ ИЗ URL ======================
    const urlParams = new URLSearchParams(window.location.search);
    const tariff = urlParams.get('tariff');
    
    if (tariff) {
        const tariffField = document.getElementById('tariff-field');
        if (tariffField) {
            tariffField.value = tariff;
        }
    }

    // ====================== СОЗДАНИЕ 30 СНЕЖИНОК ======================
    setTimeout(function() {
        const snowContainer = document.querySelector('.snow-container');
        if (snowContainer && snowContainer.children.length === 0) {
            // Создаем 30 снежинок
            for (let i = 1; i <= 30; i++) {
                const snowflake = document.createElement('div');
                snowflake.className = 'snowflake';
                snowContainer.appendChild(snowflake);
            }
            console.log('✅ Создано 30 снежинок');
        }
    }, 4500); // Через 4.5 секунды
    
    console.log('🎯 JavaScript загружен. Снег появится через 4.5 секунды');
});
