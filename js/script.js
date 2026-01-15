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
        
        // Закрытие меню при клике на пункты навигации
        const navItems = document.querySelectorAll('.nav__item');
        navItems.forEach(item => {
            item.addEventListener('click', function() {
                burgerMenu.classList.remove('active');
                nav.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
        
        // Закрытие меню при клике вне меню (опционально)
        document.addEventListener('click', function(event) {
            if (nav.classList.contains('active') && 
                !nav.contains(event.target) && 
                !burgerMenu.contains(event.target)) {
                burgerMenu.classList.remove('active');
                nav.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }

    // ====================== ТАРИФЫ ИЗ URL ======================
    // Этот код ОСТАЕТСЯ БЕЗ ИЗМЕНЕНИЙ - он работает правильно
    const urlParams = new URLSearchParams(window.location.search);
    const tariff = urlParams.get('tariff');
    
    if (tariff) {
        const tariffField = document.getElementById('tariff-field');
        if (tariffField) {
            tariffField.value = tariff;
        }
    }

    // ====================== СОЗДАНИЕ 30 СНЕЖИНОК ======================
    // Этот код ТОЖЕ ОСТАЕТСЯ БЕЗ ИЗМЕНЕНИЙ
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

    // ====================== ДОПОЛНИТЕЛЬНО: Плавная прокрутка ======================
    // (опционально, если нужно улучшить UX)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Пропускаем якоря на другие страницы
            if (href === '#' || href.startsWith('#!')) return;
            
            const targetElement = document.querySelector(href);
            if (targetElement) {
                e.preventDefault();
                window.scrollTo({
                    top: targetElement.offsetTop - 100, // Отступ сверху
                    behavior: 'smooth'
                });
                
                // Закрываем меню на мобильных после клика
                if (burgerMenu && nav && window.innerWidth <= 968) {
                    burgerMenu.classList.remove('active');
                    nav.classList.remove('active');
                    document.body.style.overflow = '';
                }
            }
        });
    });
});
