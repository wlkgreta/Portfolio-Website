//Gives Nav Bar a lower shadow when scrolling
    const navEl = document.querySelector('.nav');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navEl.classList.add('nav-scrolled');
        } else if (window.scrollY <= 50) {
            navEl.classList.remove('nav-scrolled');
        }
    });
    
//Mobile Scroll Shadow
    const mobileNavEl = document.querySelector('.mobile-nav');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            mobileNavEl.classList.add('nav-scrolled');
        } else if (window.scrollY <= 50) {
            mobileNavEl.classList.remove('nav-scrolled');
        }
    });


//Mobile Nav-Bar Dropdown Menu

   const navIconClick = document.querySelector('.dropdown-icon');

    navIconClick.addEventListener('click', () => {
        let navBar = document.querySelector('.dropdown-content');
        navBar.classList.toggle('active');
    });

//Toggle Switch to change site color schemes

    const toggle = document.getElementById('data-theme-toggle');
    const htmlElement = document.querySelector('html');

    toggle.addEventListener('click', () => {
        if(htmlElement.getAttribute('data-theme') === 'light') {
            htmlElement.setAttribute('data-theme', 'cyberpunk');
        } else {
            htmlElement.setAttribute('data-theme', 'light');
        }
    });

//Toggle Switch for Mobile
    const mobileToggle = document.getElementById('mobile-data-theme-toggle');

    mobileToggle.addEventListener('click', () => {
        if(htmlElement.getAttribute('data-theme') === 'light') {
            htmlElement.setAttribute('data-theme', 'cyberpunk');
        } else {
            htmlElement.setAttribute('data-theme', 'light');
        }
    });