//GIVES NAV BAR A LOWER SHADOW WHEN SCROLLING
    const navEl = document.querySelector('.nav');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navEl.classList.add('nav-scrolled');
        } else if (window.scrollY <= 50) {
            navEl.classList.remove('nav-scrolled');
        }
    });
    
//MOBILE SCROLL SHADOW
    const mobileNavEl = document.querySelector('.mobile-nav');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            mobileNavEl.classList.add('nav-scrolled');
        } else if (window.scrollY <= 50) {
            mobileNavEl.classList.remove('nav-scrolled');
        }
    });


//MOBILE NAV-BAR DROPDOWN MENU

   const navIconClick = document.querySelector('.dropdown-icon');

    navIconClick.addEventListener('click', () => {
        let navBar = document.querySelector('.dropdown-content');
        navBar.classList.toggle('active');
    });

//TOGGLE SWITCH TO CHANGE SITE COLOR SCHEMES

    const toggle = document.getElementById('data-theme-toggle');
    const htmlElement = document.querySelector('html');

    toggle.addEventListener('click', () => {
        if(htmlElement.getAttribute('data-theme') === 'light') {
            htmlElement.setAttribute('data-theme', 'cyberpunk');
        } else {
            htmlElement.setAttribute('data-theme', 'light');
        }
    });

//TOGGLE SWITCH FOR MOBILE
    const mobileToggle = document.getElementById('mobile-data-theme-toggle');

    mobileToggle.addEventListener('click', () => {
        if(htmlElement.getAttribute('data-theme') === 'light') {
            htmlElement.setAttribute('data-theme', 'cyberpunk');
        } else {
            htmlElement.setAttribute('data-theme', 'light');
        }
    });

//MODAL
    const openBtn = document.getElementById('openModal');
    const closeBtn = document.getElementById('closeModal');
    const modal = document.getElementById('modal');

    openBtn.addEventListener('click', () => {
        modal.classList.add('open');
    })

    closeBtn.addEventListener('click', () => {
        modal.classList.remove('open');
    })