//Gives Nav Bar a background color when scrolling
    const navEl = document.querySelector('.nav');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navEl.classList.add('nav-scrolled');
        } else if (window.scrollY <= 50) {
            navEl.classList.remove('nav-scrolled');
        }
    });

    const mobileNavEl = document.querySelector('.mobile-nav');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            mobileNavEl.classList.add('nav-scrolled');
        } else if (window.scrollY <= 50) {
            mobileNavEl.classList.remove('nav-scrolled');
        }
    });


//Mobile Nav-Bar Dropdown Menu

    let navIconClick = document.querySelector('.dropdown-icon');

    navIconClick.onclick = function() {
        navBar = document.querySelector('.dropdown-content');
        navBar.classList.toggle('active');
    }

//Section Headers entry animation on scroll 
    const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const square = entry.target.querySelector('.no-animate');

        if (entry.isIntersecting) {
        square.classList.add('animate-header');
        return;
        }
        square.classList.remove('animate-header');
    });
    });

    observer.observe(document.getElementById('projects-section'));
    observer.observe(document.getElementById('contact-section'));
    